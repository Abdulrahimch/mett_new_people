import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import AuthChat from './pages/Chat/AuthChat';
import Header from './components/Header/Header';
import { AuthProvider } from './context/useAuthContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { ConversationProvider } from './context/useConversationContext';
import { SocketProvider } from './context/useSocketContext';

function App (): JSX.Element {
    return (
        <BrowserRouter>
            <AuthProvider>
                <ConversationProvider>
                    <SocketProvider>
                        <Header />
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/signup" component={SignUp} />
                                <ProtectedRoute exact path="/chat" component={AuthChat} />
                            </Switch>
                    </SocketProvider>
                </ConversationProvider>
            </AuthProvider>
        </BrowserRouter>
    )
};

export default App;