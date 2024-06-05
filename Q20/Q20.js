function registerUser(users, newUser) {
    if (users.some(user => user.username === newUser.username)) {
        return "Username already exists"
    }
    users.push(newUser)
    return users
}

const users = [{ username: 'user1' }, { username: 'user2' }]
const newUser = { username: 'user3' }
console.log(registerUser(users, newUser))