import { Grid, Avatar, Typography } from "@material-ui/core";
import useStyles from "./useStyles";

function Conversation(): JSX.Element {
    const { img, name, container } = useStyles();

    return (
        <>
            <Grid container className={container}>
                <Grid item>
                    <Avatar 
                        src="https://meetnewpeople.s3.amazonaws.com/img01.jpg" 
                        alt="random" 
                        className={img}
                    />
                </Grid>
                <Grid item>
                    <Typography className={name}>Jgon Foxon</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Conversation;