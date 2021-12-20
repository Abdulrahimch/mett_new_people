import { Grid, Box, TextField, Button } from '@material-ui/core';
import useStyles from './useStyles';
import Conversation from './Conversation/Conversation';
import Message from './Message/Message';
import ChatOnline from './ChatOnline/ChatOnline';
import { useState } from 'react';
import { postMessage } from '../../helpers/APICalls/message';
import { useAuth } from '../../context/useAuthContext';
import { Imessage } from '../../interface/Message'; 

function AuthChat(): JSX.Element {
    const { root, mainBox, chatMenu, chatBox, chatOnline, inputs, chatBoxTop, chatMessageInput, sendButton } = useStyles();
    const [text, setText] = useState<string>('');
    const { loggedInUser } = useAuth();

    const handleSendChange = (event: any) => {
        setText(event.target.value)
    };

    const onSendCLick = () => {
        const inputs: Imessage = {
            conversation: '', sender: loggedInUser?._id, text
        };
        postMessage(inputs).then((data) => {
            if (data.error) {
                console.log(data.error.message)
            } else if (data.success) {
                console.log(data.success)
            } else {
                console.log('Internal Error, try again later')
            }
        })
    };

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
                            <Box className={chatBoxTop}>
                                <Message />
                                <Message ownerStyle='own'/>
                                <Message ownerStyle='own'/>
                                <Message />
                                <Message />
                                <Message />
                                <Message ownerStyle='own'/>
                                <Message ownerStyle='own'/>
                                <Message />
                                <Message />
                                <Message />
                                <Message ownerStyle='own'/>
                                <Message ownerStyle='own'/>
                                <Message />
                                <Message />
                            </Box>
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