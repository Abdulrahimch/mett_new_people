import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        padding: '10px 5px'
    },
    welcome: {
        fontWeight: 800,
        color: theme.palette.common.black,
        margonBottom: '1em'
    },
    mainBox: {
        minHeight: '100vh',
        display: 'flex',
        width: '100%',
    },
    chatMenu: {
        flex: 2.5,
    },
    chatBox: {
        flex: 6.5,
        overflowY: 'scroll'

    },
    chatBoxTop: {
        height: '100%',
        overflowY: 'scroll'
    },
    chatOnline: {
        flex: 3,
    },
    inputs: {
        border: '1px solid grey',
        borderRadius: 5,
        width: '90%'

    },
    chatMessageInput: {
        marginTop: '1em',
        width: '100%',
        display: 'flex',
        alignItems: 'center'

    },
    sendButton: {
        border: '1px solid #008000',
        backgroundColor: '#008000',
        borderRadius: 5,
        maxHeight: '40px'
    }
}));

export default useStyles;
