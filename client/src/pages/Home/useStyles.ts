import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh", 
        paddingTop: '5em'
    },
    title: {
        color: theme.palette.primary.main,
        fontWeight: 800,
        padding: '1em'
    },
    gridItem: {
        width: '100%',
    }
}));

export default useStyles;
