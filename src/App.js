import { Container } from "@material-ui/core";
import { Provider } from "react-redux";
import store from "./store/store";
import UsersContainer from "./components/UsersContainer";
import { fetchUsers } from "./store/actions/actions";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorPage from "./common/components/ErrorPage";

store.dispatch(fetchUsers());

function App() {
    return (
        <Router>
            <Container maxWidth='lg'>
                <Provider store={store}>
                    <Switch>
                        <Route path='/users' component={UsersContainer}/>
                        {/*<Route path='*' components={ErrorPage}/>*/}
                    </Switch>
                </Provider>
            </Container>
        </Router>
    );
}

export default App;