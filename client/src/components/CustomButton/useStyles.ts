import { makeStyles } from "@material-ui/core/styles"; 

const useStyles = makeStyles((theme) => ({
    button: {
        textDecoration: 'none',
        margin: 5,
        fontSize: 12,
        fontWeight: 600,
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
        border: 1,
        borderStyle: 'solid',
        borderColor: theme.palette.primary.main,
        padding: theme.spacing(2, 4, 2, 4),
        '&.chat': {
            textTransform: 'uppercase',
            width: 200
        },
        '&.submit': {
            textTransform: 'uppercase',
            marginTop: '2em' 
        }
    },

}));

export default useStyles;