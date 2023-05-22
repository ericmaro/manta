export const getUser = async () => {
    const response = await fetch(`https://dummyjson.com/users/1`);
    const data = await response.json();
    return data;
};

export const getUsers = async () => {
    const response = await fetch(`https://dummyjson.com/users?limit=25`);
    const data = await response.json();
    return data?.users;
}