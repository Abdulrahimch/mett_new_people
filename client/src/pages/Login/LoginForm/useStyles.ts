import { alpha, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    inputs: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        height: '100%',
        padding: theme.spacing(2),
        marginTop: 0,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:cfous': {
          boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
          borderColor: theme.palette.primary.main,
        },
    },
    inputLabel: {
        fontSize: 16,
        fontWeight: 800,
        color: theme.palette.common.black,
        textTransform: 'uppercase',
        margin: '1em 0 1em 0'
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.primary.main,
    },
    caption: {
        fontWeight: 'bold',
    },
}));

export default useStyles;
