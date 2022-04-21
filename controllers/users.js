import { v4 as uuidv4 } from "uuid";

let users = []

export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });
    res.send(`User with name of ${user.firstName} was added`);
}

export const patchUserWithId = (req, res) => {
    const { id } = req.params;
    const userToBeUpdated = users.find((user) => users.id === id);
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);
    if (firstName) {
        user.firstName = firstName;
    }
    if (lastName) {
        user.lastName = lastName;
    }
    if (age) {
        user.age = age;
    }
    res.send(`User with id of ${id} was updated`);
}

export const getUsers = (req, res) => {
    res.send(users);
}

export const getUserwithId = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser);
}

export const deleteUserWithId = (req, res) => {
    const { id } = req.params;
    //filter, if true keep in the array, if false remove from array
    users = users.filter((user) => user.id !== id);
    res.send(`User with id of ${id} was deleted`);
}