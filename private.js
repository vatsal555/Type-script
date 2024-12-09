var Users = /** @class */ (function () {
    function Users() {
    }
    Users.prototype.setName = function (name) {
        this.name = name;
    };
    Users.prototype.displayName = function () {
        console.log(this.name);
    };
    return Users;
}());
var u1 = new Users();
u1.setName("hello");
u1.name = "world";
u1.displayName();
