import useStyles from './useStyles';
import { Grid, Avatar, Typography, Box } from '@material-ui/core';
import clsx from 'clsx';

interface Props {
    ownerStyle?: string;
}

function Message({ ownerStyle }: Props): JSX.Element {
    const { root, img, text, messageBottom } = useStyles();
    const textStyle = clsx(text, ownerStyle);
    const rootStyle = clsx(root, ownerStyle);

    return (
        <>
            <Grid container className={rootStyle} >
                <Grid item>
                    <Box display="flex" flexDirection="column">
                        <Box display="flex">
                            <Avatar 
                                src="https://meetnewpeople.s3.amazonaws.com/img01.jpg" 
                                className={img} 
                            />
                            <Typography 
                                paragraph={true} 
                                className={textStyle}
                            >
                                Hello dddddddia
                            </Typography>
                        </Box>
                        <Box className={messageBottom}>1 hour ago</Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
};

export default Message;