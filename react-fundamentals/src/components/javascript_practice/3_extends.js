//ES6 JS Classes
class User {
    constructor(name) {
        this.name = name;
        this.type = 'Trial User';
        this.type2 = 'Banned User'
    };

    //Method 1
    greet() {
        console.log(`Welcome back, ${this.name}`);
    };
    //Method 2
    status () {
        console.log(`Current status: ${this.type}`);
    };

    // Practice method
    status2 () {
        console.log(`Current status: ${this.type2}`);
    };
};

class TrialUser extends User {
    trialEnding() {
        console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our program?`);
    };
};

//Instance of User class
let anonDude = new User('Anonymous dude');
anonDude.greet();
anonDude.status();

//Instance of TrialUser class
let trialUser = new TrialUser('Paul');
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

//Instance of Banned User class
class BannedUser extends User {
    banned() {
        console.log(`Your account has been banned, ${this.name}, due to violation of community standards.`);
    };
};

let bannedUser = new BannedUser('Brey');
bannedUser.greet();
bannedUser.banned();
bannedUser.status2();
