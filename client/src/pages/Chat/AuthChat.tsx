import { Grid, Box, TextField, Button } from '@material-ui/core';
import useStyles from './useStyles';
import Conversation from './Conversation/Conversation';
import Message from './Message/Message';
import ChatOnline from './ChatOnline/ChatOnline';
import { useEffect, useState, useRef } from 'react';
import { postMessage, getAllMessages } from '../../helpers/APICalls/message';
import { useAuth } from '../../context/useAuthContext';
import { Imessage } from '../../interface/Message';
import { useConversation } from '../../context/useConversationContext'; 

function AuthChat(): JSX.Element {
    const { root, mainBox, chatMenu, chatBox, chatOnline, inputs, chatBoxTop, chatMessageInput, sendButton, noConversation } = useStyles();
    const [text, setText] = useState<string>('');
    const { loggedInUser } = useAuth();
    const { currentConversation } = useConversation();
    const [allMessages, setAllMessages] = useState<Imessage[]>([]);
    const [updatedConversation, setUpdatedConversation] = useState<boolean>(false);
    const scrollRef = useRef<HTMLInputElement>(null); 

    const handleSendChange = (event: any) => {
        setText(event.target.value)
    };

    const onSendCLick = () => {
        const inputs: Imessage = {
            conversation: currentConversation?._id, sender: loggedInUser?.id, text
        };
        postMessage(inputs).then((data) => {
            if (data.error) {
                console.log(data.error.message);
            } else if (data.success) {
                setUpdatedConversation(!updatedConversation);
                setText('');
            } else {
                console.log('Internal Error, try again later');
            }
        });
    };

    useEffect(() => {
        const id = currentConversation?._id;
        getAllMessages(id).then((data) => {
            if (data.error) {
                console.log(data.error.message);
            } else if (data.success) {
                console.log(data.success)
                setAllMessages(data.success.messages);
            } else {
                console.log('An unexpected error occurred. Please try again !');
            }
        });
        // scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [updatedConversation, currentConversation]);


    return (
        <>
            <Grid container className={root}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box className={mainBox}>
                        <Box className={chatMenu}>
                            <TextField
                                id="search" 
                                placeholder="Search"
                                helperText="Search For Friends"
                                InputProps={{
                                    classes: { input: inputs },
                                    disableUnderline: true,
                                }}
                            />
                            <Conversation />
                        </Box>
                        <Box className={chatBox}>
                            <div className={chatBoxTop} ref={scrollRef}>
                                {currentConversation ? allMessages.map(({sender, text, createdAt}) => (
                                <>
                                    <Message 
                                        ownerStyle={sender === loggedInUser?.id ? 'own' : ''} 
                                        msg={text}
                                        createdAt={createdAt}
                                    />
                                </>
                                )) : <Box className={noConversation}>Tab to start a conversation</Box>}
                            </div>
                            <Box className={chatMessageInput}>
                                <TextField
                                    id="chatMessaageInput"
                                    multiline={true}
                                    rows={5}
                                    maxRows={10}
                                    fullWidth={true}
                                    placeholder="Write something"
                                    value={text}
                                    onChange={handleSendChange}
                                    InputProps={{
                                        classes: { input: inputs },
                                        disableUnderline: true,
                                    }} 
                                />
                                <Button className={sendButton} onClick={onSendCLick}>send</Button>
                            </Box>
                        </Box>
                        <Box className={chatOnline}>
                            <ChatOnline status='busy'/>
                            <ChatOnline status='busy'/>
                            <ChatOnline status='active'/>
                            <ChatOnline status='busy'/>
                            <ChatOnline status='active'/>
                            <ChatOnline status='active'/>
                            <ChatOnline status='out'/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default AuthChat;