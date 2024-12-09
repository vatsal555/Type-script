class Users {
  private name: "";

  setName(name) {
    this.name = name;
  }

  displayName() {
    console.log(this.name);
  }
}

let u1 = new Users();
u1.setName("hello");
// u1.name = "world";
u1.displayName();
