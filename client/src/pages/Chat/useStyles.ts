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
        flex: 3.5,
    },
    chatBox: {
        flex: 5.5,
    },
    chatOnline: {
        flex: 3,
    },
    inputs: {
        border: '1px solid grey',
        borderRadius: 5,
        width: '90%'

    }
}));

export default useStyles;
