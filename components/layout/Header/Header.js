import { useState, Fragment, useContext } from 'react';
import clsx from 'clsx';

import {
  List,
  ListItem,
  Menu,
  MenuItem,
  Button,
  Box,
  AppBar,
  Toolbar,
  Link,
  SwipeableDrawer,
  IconButton,
  ListItemText,
  Collapse,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import Router from 'next/router';
import router from 'next/router';
import {
  Icon,
  Title,
  Text,
} from '../../global';
import { menuItems, menuLoginItems } from '../../../utils';
import AppContext from '../../../context/AppContext';

import { logout } from '../../../lib/auth';

const useStyles = makeStyles((theme) => ({
  menuDesktop: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
  },
  menuMobile: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  toolbar: {
    paddingTop: '1em',
    paddingBottom: '1em',
  },
  navbar: {
    backgroundColor: theme.palette.background.default,
    marginBottom: '10px',
    height: '140px',
    // "@media (min-width: 960px)": {
    //     position: "-webkit-sticky",
    //     position: "sticky",
    //     top: "0px"
    // }
  },
  navbarItem: {
    backgroundColor: theme.palette.blue.main,
    color: theme.palette.background.default,
    marginRight: '15px',
    paddingLeft: '3em',
    paddingRight: '3em',
    '&:hover': {
      backgroundColor: theme.palette.golden.main,
      color: '#000',
    },
  },
  navbarItem2: {
    backgroundColor: theme.palette.orange.main,
    color: theme.palette.background.default,
    marginRight: '15px',
    paddingLeft: '3em',
    paddingRight: '3em',
    '&:hover': {
      backgroundColor: theme.palette.golden.main,
      color: '#000',
    },
  },
  list: {
    listStyleType: 'disc',
    fontSize: '20px',
  },
  items: {
    display: 'flex',
  },
  btn: {
    '&:hover': {
      backgroundColor: theme.palette.golden.main,
      color: '#000',
    },
  },
  iconBtn: {
    backgroundColor: theme.palette.orange.main,
    color: theme.palette.background.default,
    '&:hover': {
      backgroundColor: theme.palette.golden.main,
      color: '#000',
    },
  },
  list: {
    width: '100%',
  },
  fullList: {
    width: 'auto',
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  loginBtn: {
    backgroundColor: 'transparent',
    // border: `0.5px ${theme.palette.blue.main} solid`,
    '&:hover': {
      backgroundColor: theme.palette.grey.secondary,
      color: '#fff',
      border: 'none',
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchor, setAnchor] = useState('left');
  const [openCollapseId, setOpenCollapseId] = useState(null);
  const [itemClicked, setItemClicked] = useState(null);

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const { isAuthenticated, setUser } = useContext(AppContext);
  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setItemClicked(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setItemClicked(null);
  };

  const handleClickCollapse = (id) => {
    setOpenCollapseId(id);
  };

  const onLogin = () => Router.push('/login');
  const onLogout = async () => {
    const res = await logout();
    if (res) {
      setUser(null);
      Router.push('/');
    }
  };

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar className={classes.toolbar}>
        <Box style={{ flex: 1 }}>
          <Link href="/" classes={classes.logo}>
            <Icon maxWidth="200px" src="/static/icons/logo_mobin.jpg" />
          </Link>
        </Box>
        <div className={classes.menuDesktop}>
          <Box className={classes.items} alignItems="center">
            {menuItems.map((item, index) => (
              <Box key={index}>
                <>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={(event) => (item.link
                      ? router.push(item.link)
                      : handleClick(event, item.id))}
                    className={classes.navbarItem}
                  >
                    {
                      item.icon
                        ? (
                          <Icon
                            maxWidth="60px"
                            src={`/static/icons/${item.icon}.png`}
                          />
                        )
                        : <Title bold color="#fff" size="body2" content={item.title} />
                    }
                  </Button>
                  {item.subItems && (
                  <Menu
                    className={classes.list}
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={itemClicked === item.id}
                    onClose={handleClose}
                  >
                    {item.subItems.map((subItem, index) => (
                      <MenuItem
                        key={index}
                      >
                        <Link href={subItem.link}>
                          <Title
                            listItem
                            listStyleType="disc"
                            listStylePosition="inside"
                            uppercase
                            bold
                            fontSize="12px"
                            letterspacing="1px"
                            color="black"
                            content={subItem.title}
                          />
                        </Link>
                      </MenuItem>
                    ))}
                  </Menu>
                  )}
                </>
              </Box>
            ))}
            {
              isAuthenticated ? (
                menuLoginItems.map((item, index) => (
                  <Box key={index}>
                    <>
                      <Button
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={(event) => {
                          handleClick(event, item.id);
                        }}
                        className={classes.navbarItem2}
                      >
                        {
                          item.icon
                            ? (
                              <Icon
                                maxWidth="60px"
                                src={`/static/icons/${item.icon}.png`}
                              />
                            )
                            : <Title fontSize="12px" bold color="#fff" size="body2" content={item.title} />
                        }
                      </Button>
                      <Menu
                        className={classes.list}
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={itemClicked === item.id}
                        onClose={handleClose}
                      >
                        {
                          item.subItems.map((subItem, index) => (
                            <MenuItem
                              key={index}
                              onClick={subItem.action
                                ? () => onLogout()
                                : null}
                            >
                              <Link href={subItem.action ? '#' : subItem.link}>
                                <Title
                                  listItem
                                  listStyleType="disc"
                                  listStylePosition="inside"
                                  uppercase
                                  bold
                                  fontSize="12px"
                                  letterspacing="1px"
                                  color="black"
                                  content={subItem.title}
                                />
                              </Link>
                            </MenuItem>
                          ))
                        }
                      </Menu>
                    </>
                  </Box>
                ))
              ) : (
                <Button
                  onClick={() => onLogin()}
                  className={classes.loginBtn}
                >
                  <Box>
                    <Icon src="/static/icons/P.Adhérent1.png" maxWidth="30px" />
                    <Title
                      size="body2"
                      fontSize="10px"
                                            // uppercase
                      lowercase
                                            // bold
                      letterspacing="1px"
                      color="black"
                      content="Accès Adhérent"
                    />
                  </Box>
                </Button>
              )
            }
          </Box>
        </div>
        <div className={classes.menuMobile}>
          <Box alignItems="center">
            <>
              <IconButton
                className={classes.iconBtn}
                onClick={toggleDrawer('left', true)}
              >
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                <div
                  className={clsx(classes.list, {
                    [classes.fullList]: anchor === 'top' || anchor === 'bottom',
                  })}
                  role="presentation"
                >
                  <List component="nav">
                    {
                      menuItems.map((item, index) => (
                        <Fragment key={index}>
                          <ListItem
                            button
                            onClick={() => (item.link
                              ? router.push(item.link)
                              : handleClickCollapse(item.id))}
                          >
                            <ListItemText>
                              <Title bold size="body1" content={item.title || ''} />
                            </ListItemText>
                            {openCollapseId === item.id
                              ? <ExpandLess />
                              : <ExpandMore />}
                          </ListItem>
                          <Collapse in={openCollapseId === item.id} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                              {item.subItems
                              && item.subItems.map((subItem, i) => (
                                <ListItem
                                  key={i}
                                  button
                                  className={classes.nested}
                                >
                                  <Box pl={3}>
                                    <Link href={subItem.link}>
                                      <Text
                                        bold
                                        color="#2699b0"
                                        size="body2"
                                        uppercase
                                      >
                                        {subItem.title || ''}
                                      </Text>
                                    </Link>

                                  </Box>
                                </ListItem>
                              ))}
                            </List>
                          </Collapse>
                        </Fragment>
                      ))
                    }
                    {
                      isAuthenticated
                        ? menuLoginItems.map((item, index) => (
                          <Fragment key={index}>
                            <ListItem
                              button
                              onClick={() => handleClickCollapse(item.id)}
                            >
                              <ListItemText>
                                <Title bold size="body1" content={item.title || ''} />
                              </ListItemText>
                              {openCollapseId === item.id
                                ? <ExpandLess />
                                : <ExpandMore />}
                            </ListItem>
                            <Collapse in={openCollapseId === item.id} timeout="auto" unmountOnExit>
                              <List component="div" disablePadding>
                                {item.subItems.map((subItem, i) => (
                                  <ListItem
                                    key={i}
                                    button
                                    onClick={subItem.action
                                      ? () => onLogout()
                                      : null}
                                    className={classes.nested}
                                  >
                                    <Box pl={3}>
                                      <Link
                                        href={subItem.action ? '#' : subItem.link}
                                      >
                                        <Text
                                          bold
                                          color="#2699b0"
                                          size="body2"
                                          uppercase
                                        >
                                          {subItem.title || ''}
                                        </Text>
                                      </Link>

                                    </Box>
                                  </ListItem>
                                ))}
                              </List>
                            </Collapse>
                          </Fragment>
                        ))
                        : (
                          <ListItem
                            button
                            className={classes.nested}
                          >
                            <Box pl={3}>
                              <Link href="/login">
                                <Text
                                  bold
                                  color="#2699b0"
                                  size="body2"
                                  uppercase
                                >
                                  Accès Adhérent
                                </Text>
                              </Link>
                            </Box>
                          </ListItem>
                        )
                      }
                  </List>
                </div>
              </SwipeableDrawer>
            </>
          </Box>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
