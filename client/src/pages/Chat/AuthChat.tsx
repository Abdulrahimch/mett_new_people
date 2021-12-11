import { Grid, Box, TextField } from '@material-ui/core';
import useStyles from './useStyles';
import Conversation from './Conversation/Conversation';
import Message from './Message/Message';

function AuthChat(): JSX.Element {
    const { root, mainBox, chatMenu, chatBox, chatOnline, inputs } = useStyles();
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
                            <Conversation />
                            <Conversation />
                            <Conversation />
                        </Box>
                        <Box className={chatBox}>
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                        </Box>
                        <Box className={chatOnline}>End</Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default AuthChat;