import { Button } from "@material-ui/core";
import clsx from 'clsx';
import useStyles from './useStyles';

interface Props {
    btnText: string;
    style?: string;
    disabled?: boolean;
    linkTo?: any;
    isSubmit?: boolean;
    onClick?: () => void;
}

function CustomButton({ btnText, style, disabled, linkTo, isSubmit, onClick }: Props): JSX.Element {
    const { button } = useStyles();
    const buttonStyle = clsx(button, style);
    return (
        <Button
            href={linkTo}
            className={buttonStyle}
            onClick={onClick}
            type={isSubmit === true ? "submit" : 'button'}
        >
            {btnText}
        </Button>
    )
};

export default CustomButton;