import { Grid, Avatar, Typography, Card, CardHeader, IconButton } from "@material-ui/core";
import { useEffect, useState } from "react";
import useStyles from "./useStyles";
import { getConversations } from '../../../helpers/APICalls/conversation';
import { User } from '../../../interface/User';
import { Iconversation } from '../../../interface/Conversation';
import { useAuth } from '../../../context/useAuthContext';
import { useConversation } from "../../../context/useConversationContext";

function Conversation(): JSX.Element {
    const { img, name, container } = useStyles();
    const [conversations, setConversations] = useState<Iconversation[]>([]);
    const { loggedInUser } = useAuth();
    const { updateCurrentConversation } = useConversation();

    const onConversationClick = (conversation: Iconversation) => {
        updateCurrentConversation(conversation);
    };

    const getRecipient = (members: User[]) => {
        return members.filter((member) => member.username !== loggedInUser?.username)[0];
    };

    console.log(' conversation componentni being rendered...')

    useEffect(() => {
        getConversations().then((data) => {
            if (data.error) {
                console.log(data.error.message)
            } else if (data.success) {
                setConversations(data.success.conversations)
            } else {
                console.log("Internal Error")
            }
        })
        return () => {
            setConversations([]);
        }
    }, []);

    return (
        <>
            {conversations.map((conversation) => (
            <Grid container className={container} onClick={() => onConversationClick(conversation)}>
                <Grid item>
                    <Avatar 
                        src="https://meetnewpeople.s3.amazonaws.com/img01.jpg" 
                        alt="random" 
                        className={img}
                    />
                </Grid>
                <Grid item>
                    <Typography className={name} onClick={(conversation) => {console.log(conversation)}}>{getRecipient(conversation.members).username}</Typography>
                </Grid>
            </Grid>
            ))}
        </>
    )
}

export default Conversation;