//import {users} from "../../data/users";
import userService from "../../services/data/user";
import {User} from "../../data/users";
import React from "react";

export default function Users() {

    const [users, setUsers] = React.useState<User[]>([]);

    React.useEffect(() => {
        userService.getUsers().then((result) => setUsers(result));

    },[])

    return (
        <>
            {users.map((user) => {
                return <p>{user.name}</p>;
            })}
        </>
    );
}