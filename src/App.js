import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./modules/admin/components/header/Header";
import Users from "./modules/admin/components/users/Users";
import Albums from "./modules/admin/components/albums/Albums";
import Dashboard from "./modules/admin/components/dashboard/Dashboard";


function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path='/' exact>
                    <Dashboard />
                </Route>
                <Route path='/users'>
                    <Users/>
                </Route>
                <Route path='/albums'>
                    <Albums/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
