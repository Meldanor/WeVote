function User(username) {
    this.name = username;

    this.getName = function () {
        return this.name;
    };
};