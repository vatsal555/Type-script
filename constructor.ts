class Detail {
  //   name: "";
  //   age = 0;
  //   email: "";
  constructor(public name, public age, public email) {
    // this.name = name;
    // this.age = age;
    // this.email = email;
  }
  displayVal() {
    console.log(this.name, this.age, this.email);
  }
}

let info = new Detail("user", 25, "user@gmail.com");

info.displayVal();
