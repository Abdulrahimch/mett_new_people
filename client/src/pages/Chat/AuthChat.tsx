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
import { useSocket } from '../../context/useSocketContext';

function AuthChat(): JSX.Element {
    const { root, mainBox, chatMenu, chatBox, chatOnline, inputs, chatBoxTop, chatMessageInput, sendButton, noConversation } = useStyles();
    const [text, setText] = useState<string>('');
    const { loggedInUser } = useAuth();
    const { currentConversation } = useConversation();
    const [allMessages, setAllMessages] = useState<Imessage[]>([]);
    const [updatedConversation, setUpdatedConversation] = useState<boolean>(false);
    const [arrivalMessage, setArrivalMessage] = useState<any>(null);

    const scrollRef = useRef<HTMLInputElement>(null);
    const { socket, initSocket } = useSocket();
    const [users, setUsers] = useState([])

    const handleSendChange = (event: any) => {
        setText(event.target.value)
    };

    const getRecipient = () => {
        return currentConversation?.members.filter((member) => member.id !== loggedInUser?.id)[0];
    }

    const onSendCLick = (event: React.MouseEvent) => {
        event.preventDefault();
        const inputs: Imessage = {
            conversation: currentConversation?._id, sender: loggedInUser?.id, text
        };
        const recipientId = getRecipient()?._id;
        const senderId = loggedInUser?.id;
        socket?.emit('sendMessage', senderId, recipientId, text);

        postMessage(inputs).then((data) => {
            if (data.error) {
                console.log(data.error.message);
            } else if (data.success) {
                setAllMessages([...allMessages, data.success.message]);
            } else {
                console.log('Internal Error, try again later');
            }
        });
        setText('');
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
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [currentConversation]);

    useEffect(() => {
        initSocket();
        console.log('socket is is: ', socket);
        socket?.on('getMessage', data => {
            console.log('received msg from: ', data.senderId);
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            });
        });
    }, []);

    useEffect(() => {
        console.log('useEffect is hitted')
        arrivalMessage
            && currentConversation?.members.includes(arrivalMessage.senderId) &&
            setAllMessages((prev) => [...prev, arrivalMessage]);
        console.log('arrivalMessage is: ', arrivalMessage)
    }, [arrivalMessage, currentConversation]);

    useEffect(() => {
        socket?.emit("addUser", loggedInUser?.id);
        socket?.on('getUsers', (users) => {
            setUsers(users);
            console.log(users)
        });
    }, [socket, loggedInUser])

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
                                {currentConversation ? allMessages.map(({ sender, text, createdAt }) => (
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
                                    minRows={5}
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
                                <Button className={sendButton} onClick={(event) => onSendCLick(event)}>send</Button>
                            </Box>
                        </Box>
                        <Box className={chatOnline}>
                            <ChatOnline status='busy' />
                            <ChatOnline status='busy' />
                            <ChatOnline status='active' />
                            <ChatOnline status='busy' />
                            <ChatOnline status='active' />
                            <ChatOnline status='active' />
                            <ChatOnline status='out' />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default AuthChat;