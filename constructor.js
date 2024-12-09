var Detail = /** @class */ (function () {
    //   name: "";
    //   age = 0;
    //   email: "";
    function Detail(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        // this.name = name;
        // this.age = age;
        // this.email = email;
    }
    Detail.prototype.displayVal = function () {
        console.log(this.name, this.age, this.email);
    };
    return Detail;
}());
var info = new Detail("user", 25, "user@gmail.com");
info.displayVal();
