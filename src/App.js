import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./modules/components/header/Header";
import Users from "./modules/components/users/components/Users";
import Albums from "./modules/components/albums/Albums";
import Dashboard from "./modules/components/dashboard/Dashboard";


function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path='/' exact />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/users' component={Users} />
                <Route path='/albums' component={Albums} />
            </Switch>
        </Router>
    );
}

export default App;
