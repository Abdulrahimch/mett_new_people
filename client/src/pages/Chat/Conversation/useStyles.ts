import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        cursor: 'pointer',
        justifyContent: "flex-start",
         alignItems: "center",
         marginTop: '0.5em',
        '&:hover': {
            backgroundColor: '#B8B8B8'
        }
    },
    img: {
        width: '50px',
        height: '50px',
        marginRight: '0.5em',
        
    },
    name: {
        fontsize: 12,
        fontWeight: 800,
    },


}));

export default useStyles;
