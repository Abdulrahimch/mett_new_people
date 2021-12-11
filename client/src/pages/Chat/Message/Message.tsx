import useStyles from './useStyles';
import { Grid, Avatar, Typography, Box } from '@material-ui/core';

function Message(): JSX.Element {
    const { root, img, text, itemContainer } = useStyles();
    return (
        <>
            <Grid container direction="column" className={root}>
                <Grid item container alignItems="center" className={itemContainer}>
                    <Box 
                        display="flex">
                        <Avatar 
                            src="https://meetnewpeople.s3.amazonaws.com/img01.jpg" 
                            className={img} 
                        />
                        <Typography 
                            paragraph={true} 
                            className={text}
                        >
                            Hello Sasdddddddddddddddddddddddddddddiadsadasdasdddddddddddddddddddddddddr and  to thsssssssHello
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
};

export default Message;