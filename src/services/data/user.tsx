import {users} from "../../data/users";

async function getUsers() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return users;
}

const userService = {getUsers}
export default userService;