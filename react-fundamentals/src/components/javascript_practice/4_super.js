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
trialUser.trialEnding();

//Instance of Banned User class
class BronzeLevelUser extends User {
    // we add thee cinfo property to the user here
    constructor(name, password, ccinfo) {
        // if you are going to use 'this' in your constructor, you must have 'super' that points to the parent constructor
        super(name, password);
        // the 'this' keyword wouldn't work without super
        this.type = "Bronze User";
        this.ccinfo = ccinfo;
    }

    getInfo() {
        console.log(this.name, this.password, this.ccinfo);
    };
};

let bronzeGuy = new BronzeLevelUser('BronzerBro', 'bronze1234', '0000111122223333');
bronzeGuy.greet();
bronzeGuy.status();
bronzeGuy.getInfo();
