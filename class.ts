class Users {
  name: "hello";
  email: "";

  addUser(user) {
    return `${user} is  added`;
  }

  removeUser(user) {
    console.log(`${user} is removed`);
  }
}

let user1 = new Users();

let result = user1.addUser("hello");
user1.removeUser("peter");

console.log(result);
