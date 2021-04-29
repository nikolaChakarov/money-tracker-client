import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Footer from './components/footer/Footer';

import Transactions from './components/transactions/Transactions';

import { GlobalProvider } from './context/GlobalState';

const App = () => {
    return (
        <GlobalProvider>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route path="/tracker" component={Transactions} />
            </Switch>
            <Footer />
        </GlobalProvider>
    )
}

export default App;