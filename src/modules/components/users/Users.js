import UsersList from "./UsersList";
import useList from "../../common/hooks/hooks";

export default function Users() {
    const [users] = useList('users');

    return (
        <UsersList users={users}/>
    )
}
