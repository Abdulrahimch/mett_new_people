import { Grid, Button, Box, Paper, Typography } from '@material-ui/core';
import useStyles from './useStyles';
import CustomButton from '../../components/CustomButton/CustomButton';

function Home (): JSX.Element {
    const { root, title, gridItem } = useStyles();
    return (
        <>
            <Grid container direction="column" alignItems='center' component={Paper} className={root} spacing={4}>
                <Typography 
                    variant="h4" 
                    className={title}
                >
                    Meet new People from all over the world!!!
                </Typography>
                <Grid item xs={12} sm={12} md={12} lg={12} className={gridItem}>
                    <img src="https://meetnewpeople.s3.amazonaws.com/img01.jpg" alt="home image" style={{ width: "100%" }}/>
                </Grid>
                <Grid item className={gridItem}>
                    <Grid container justify="space-evenly">
                        <Grid item>
                            <CustomButton btnText="Meet new People" style='chat' linkTo='/' />
                        </Grid>
                        <Grid item>
                            <CustomButton btnText="sign in" style='chat' linkTo='/login'/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Home;