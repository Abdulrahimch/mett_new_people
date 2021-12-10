import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontWeight: 800,
        color: theme.palette.common.black,
        margonBottom: '1em'
    }
}));

export default useStyles;
