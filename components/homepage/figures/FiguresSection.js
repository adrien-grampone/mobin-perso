import { Container, Grid, Box } from '@material-ui/core';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import { Title, Icon } from '../../global';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	box: {
		marginTop: '1em',
		backgroundColor: theme.palette.gray.main,
		borderRadius: '46px',
		paddingRight: '1em'
	},
	iconSection: {
		paddingBottom: '10px'
	},
	flexBox: {
		display: 'flex',
		alignItems: 'center'
	}
}));
const FiguresSection = () => {
	const classes = useStyles();

	return (
		<Container>
			<Box pt={10} pb={10}>
				<Grid>
					<Box mb={3} className={classes.flexBox}>
						<Box mr={1}>
							<Title color="#2699b0" content="Les" size="h3" bold letterspacing="2px" />
						</Box>
						<Title content="chiffres" size="h3" bold letterspacing="2px" />
					</Box>
					<Box pt={5} pb={5} className={classes.box}>
						<Grid container spacing={5}>
							<Grid item xs={12} md={6} lg={6}>
								<Box display="flex" alignItems="flex-end" className={classes.iconSection}>
									<Icon src="/static/icons/P.reçus.png" maxWidth="180px" />
									<Title
										bold
										size="h3"
										content={
											<VisibilitySensor>
												{({ isVisible }) => (
													<div>
														{isVisible ? <CountUp separator=" " end={49227} /> : '49227'}
													</div>
												)}
											</VisibilitySensor>
										}
										color="black"
									/>
								</Box>
								<Box pl={4}>
									<Title content="Nombre de personnes reçues en 2020" color="black" size="h6" />
								</Box>
							</Grid>

							<Grid item xs={12} md={6} lg={6}>
								<Box display="flex" alignItems="flex-end" className={classes.iconSection}>
									<Icon src="/static/icons/P.conseillers.png" maxWidth="180px" />
									<Title
										bold
										size="h3"
										content={
											<VisibilitySensor>
												{({ isVisible }) => (
													<div>{isVisible ? <CountUp end={110} /> : '110'}</div>
												)}
											</VisibilitySensor>
										}
										color="black"
									/>
								</Box>
								<Box pl={4}>
									<Title
										content="Nombre de conseiller.ère.s mobilité en 2020"
										color="black"
										size="h6"
									/>
								</Box>
							</Grid>

							<Grid item xs={12} md={6} lg={6}>
								<Box display="flex" alignItems="flex-end" className={classes.iconSection}>
									<Icon src="/static/icons/P.location.png" maxWidth="180px" />
									<Title
										bold
										size="h3"
										content={
											<VisibilitySensor>
												{({ isVisible }) => (
													<div>
														{isVisible ? <CountUp separator=" " end={261164} /> : '261164'}
													</div>
												)}
											</VisibilitySensor>
										}
										color="black"
									/>
								</Box>
								<Box pl={4}>
									<Title content="Nombre de jours de location en 2020" color="black" size="h6" />
								</Box>
							</Grid>

							<Grid item xs={12} md={6} lg={6}>
								<Box display="flex" alignItems="flex-end" className={classes.iconSection}>
									<Icon src="/static/icons/P.Adherents2.png" maxWidth="180px" />
									<Title
										bold
										size="h3"
										content={
											<VisibilitySensor>
												{({ isVisible }) => (
													<div>{isVisible ? <CountUp end={150} /> : '150'}</div>
												)}
											</VisibilitySensor>
										}
										color="black"
									/>
								</Box>
								<Box pl={4}>
									<Title content="Nombre d'adhérents en 2020" color="black" size="h6" />
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Grid>
			</Box>
		</Container>
	);
};

export default FiguresSection;
