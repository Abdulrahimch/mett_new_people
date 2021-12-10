import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import useStyles from './useStyles';

interface Props {
    btnText: string;
    style?: string;
    disabled?: boolean;
    linkTo?: any;
    onClick?: () => void;
}

function CustomButton({ btnText, style, disabled, linkTo, onClick }: Props): JSX.Element {
    const { button } = useStyles();
    const buttonStyle = clsx(button, style);
    return (
        <Button
            component={Link}
            to={linkTo}
            className={buttonStyle}
            onClick={onClick}
        >
            {btnText}
        </Button>
    )
};

export default CustomButton;