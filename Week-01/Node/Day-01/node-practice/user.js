let users = [];
function addUser({name, age}){
    users = [...users, {name, age}];
}

function getUsers(){
    return new Promise((resolve) => {
        setTimeout(() => resolve([...users]), 1000);
    });
}
function removeUser(name){
    users = users.filter(user => user.name !== name);
}

addUser({ name: "Jidnya", age: 25 });
addUser({ name: "Alex", age: 30 });

getUsers().then((userList) => {
    console.log("Users after adding:", userList);

    removeUser("Jidnya");

    getUsers().then((updatedList) => {
        console.log("Users after removing Jidnya:", updatedList);
    });
});

