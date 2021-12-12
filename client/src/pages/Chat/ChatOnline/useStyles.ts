import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '1em',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#B8B8B8'
        }
    },
    badge: {
        display: 'none',
        right: theme.spacing(1),
        '&.busy': {
            backgroundColor: '#FF0000',
            display: 'block',
        },
        '&.active': {
            backgroundColor: '#008000',
            display: 'block',
        },
        '&.out': {
            backgroundColor: '#FFA500',
            display: 'block',
        }
    },
    avatar: {
        width: '50px',
        height: '50px'
    }
}));

export default useStyles;
