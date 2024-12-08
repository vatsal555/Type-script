"use strict";
var corporate;
(function (corporate) {
    corporate[corporate["ADMIN"] = 0] = "ADMIN";
    corporate[corporate["MANAGER"] = 1] = "MANAGER";
    corporate[corporate["CEO"] = 2] = "CEO";
    corporate[corporate["DATAMANAGER"] = 3] = "DATAMANAGER";
})(corporate || (corporate = {}));
console.log("corporate", corporate);
console.log(corporate.ADMIN, corporate.CEO, corporate.DATAMANAGER, corporate.MANAGER);
