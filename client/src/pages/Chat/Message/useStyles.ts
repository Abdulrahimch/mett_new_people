import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '0.5em',
        '&.own': {
            justifyContent: "flex-end",
        }
    },
    img: {
        marginRight: '0.5em'
    },
    text: {
        padding: '10px',
        backgroundColor: '#1877F2',
        borderRadius: '20px',
        color: '#FFFFFF',
        maxWidth: '300px',
        wordWrap: "break-word",
        '&.own': {
            backgroundColor: '#708090',
            color: "#000000"
        }
    },
    messageBottom: {
        fontSize: 12,
   }
}));

export default useStyles;