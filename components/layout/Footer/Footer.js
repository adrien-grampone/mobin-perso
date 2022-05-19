import { Fragment } from 'react'
import { Box, Grid, List, ListItem, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Facebook, LinkedIn, Twitter } from '@material-ui/icons';
import { useRouter } from 'next/router'
import { Text } from '../../global'
import { footerLinks, footerButtons, socialLinks } from '../../../utils'
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
    gridItem: {
        textAlign: "center",
        justifyContent: "center"
    },
    box: {
        minHeight: '200px',
        backgroundColor: theme.palette.blue.main
    },
    listItem: {
        color: theme.palette.background.default,
    },
    link: {
        textDecoration: 'none',
    },
    btn: {
        color: theme.palette.background.default,
        backgroundColor: theme.palette.orange.main,
        '&:hover': {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.black.main,
            border: 'none'
        }
    },
    icon: {
        color: theme.palette.background.default,
        fontSize: '25px'
    }
}))

const Footer = ({ }) => {
    const classes = useStyles();
    const router = useRouter()
    const handleClick = path => router.push(path)
    return (
        <Fragment>
            <Box className={classes.box}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} className={classes.gridItem}>
                        <List style={{ justifyContent: "center" }}>
                            {
                                footerLinks && footerLinks.map((link, index) => (
                                    <ListItem key={index}>
                                        <Link href={link?.path || "/"}>
                                            <a className={classes.link}><Text bold color="#fff">
                                                {link?.title || ""}
                                            </Text></a>
                                        </Link>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container>
                            {
                                footerButtons && footerButtons.map((btn, index) => (
                                    <Grid key={index} item xs={12} md={12}>
                                        <Box mt={0} p={1}>
                                            <Button onClick={() => handleClick(btn.path)} className={classes.btn}>
                                                {btn.title}
                                            </Button>
                                        </Box>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.gridItem}>
                        <List>
                            {/* <ListItem>
                                <Link href="/">
                                    <a target="_blank" className={classes.link}>
                                        <LinkedIn className={classes.icon} />
                                    </a>
                                </Link>
                            </ListItem> */}
                            <ListItem>
                                <Link href="https://twitter.com/mobin_solutions">
                                    <a target="_blank" className={classes.link}>
                                        <Twitter className={classes.icon} />
                                    </a>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://www.facebook.com/MobInFrance">
                                    <a target="_blank" className={classes.link}>
                                        <Facebook className={classes.icon} />
                                    </a>
                                </Link>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    )
}

export default Footer