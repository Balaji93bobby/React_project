let users = [];

function userSignup(user){
    users.push(user);
}
userSignup({
    email: 'jonhsmith@gmadil.com',
    password: `john123`,
    name: `john smith`,
    discord:`johnsmith`,
    subscription:`vip+`,
    lessonsCompleted: [1, 2, 3, 4, 5]
});

console.log(users);
