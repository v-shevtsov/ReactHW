import { Switch, Route, useRouteMatch } from "react-router-dom";
import UsersListPage from './UsersListPage';
import UsersForm from './UsersForm'
import useUsers from '../hooks/useUsers';

export default function Users() {
    const {path} = useRouteMatch();

    return (
        <Switch>
            <Route path={path + '/'} exact component={UsersListPage} />
            <Route path={path + '/form'} exact component={UsersForm} />
            <Route path={path + '/:id'}  component={UsersForm} />
        </Switch>
    )
}