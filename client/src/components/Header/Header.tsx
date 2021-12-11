import { AppBar, Toolbar } from '@material-ui/core';

function Header(): JSX.Element{
    return (
        <>
            <AppBar position="static">
                <Toolbar></Toolbar>
            </AppBar>
            
        </>
    )
}

export default Header;