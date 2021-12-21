import useStyles from './useStyles';
import { Grid, Avatar, Typography, Box } from '@material-ui/core';
import clsx from 'clsx';
import { formatDistance } from "date-fns";

interface Props {
    ownerStyle?: string;
    msg: string;
    createdAt: Date | undefined;
}

function Message({ ownerStyle, msg, createdAt }: Props): JSX.Element {
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
                                {msg}
                            </Typography>
                        </Box>
                        <Box className={messageBottom}>{formatDistance(new Date(Date.now()), createdAt ? new Date(createdAt): new Date(Date.now()))}</Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
};

export default Message;