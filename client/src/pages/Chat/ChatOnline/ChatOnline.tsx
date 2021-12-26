import { Grid, Avatar, Typography, Badge } from '@material-ui/core';
import useStyles from './useStyles';
import clsx from 'clsx';

interface User {
    username: string;
    id: string;
}

interface Props {
    status?: string,
    user: User;
}

function ChatOnline({ status, user }: Props): JSX.Element {
    console.log('user is: ', user)
    const { root, badge, avatar } = useStyles();
    const badgeStyle = clsx(badge, status);
    return (
        <>
            <Grid container className={root} justifyContent="flex-start" alignItems="center" spacing={1}>
                <Grid item>
                    <Badge classes={{ badge: badgeStyle }} variant='dot'>
                        <Avatar src="https://meetnewpeople.s3.amazonaws.com/img01.jpg" 
                                alt="random"
                                className={avatar}
                                 />
                    </Badge>
                </Grid>
                <Grid item> 
                    <Typography>{user.username}</Typography>
                </Grid>
            </Grid>
        </>
    )
};

export default ChatOnline;