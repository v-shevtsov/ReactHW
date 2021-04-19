import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './modules/components/header/Header';
import Albums from './modules/components/albums/Albums';
import Dashboard from './modules/components/dashboard/Dashboard';
import ErrorPage from './modules/components/errorPage/ErrorPage';
import Users from './modules/components/users/components/Users';


function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/users" component={Users} />
                <Route path="/albums" component={Albums} />
                <Route path="*" component={ErrorPage} />
            </Switch>
        </Router>
    );
}

export default App;
