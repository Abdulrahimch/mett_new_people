import { Grid, Avatar, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import useStyles from "./useStyles";
import { getConversations } from '../../../helpers/APICalls/conversation';
import { User } from '../../../interface/User';
import { useAuth } from '../../../context/useAuthContext';

function Conversation(): JSX.Element {
    const { img, name, container } = useStyles();
    const [userConversatinos, setUserConversations] = useState<User[]>([]);
    const { loggedInUser } = useAuth();

    useEffect(() => {
        getConversations().then((data) => {
            if (data.error) {
                console.log(data.error.message)
            } else if (data.success) {
                const users = data.success.conversations[0].members.filter((member) => 
                    member.username !== loggedInUser?.username
                )
                setUserConversations(users);
            } else {
                console.log("Internal Error")
            }
        })
        return () => {
            setUserConversations([]);
        }
    }, []);

    return (
        <>
            {userConversatinos.map((user) => (
            <Grid container className={container}>
                <Grid item>
                    <Avatar 
                        src="https://meetnewpeople.s3.amazonaws.com/img01.jpg" 
                        alt="random" 
                        className={img}
                    />
                </Grid>
                <Grid item>
                    <Typography className={name}>{ user.username }</Typography>
                </Grid>
            </Grid>
            ))}
        </>
    )
}

export default Conversation;