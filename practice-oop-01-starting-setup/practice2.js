class Player {
    constructor(name, enemy, logger) {
        this.name = name;
        this.enemy = enemy;
        this.health = 100;
        this.logger = logger;
    }

    attack() {
        const rndNum = Math.floor(Math.random() * 30);
        this.enemy.takeDamage(rndNum);
        this.logger.log(`Outgoing damage to ${this.enemy.name} is: ${rndNum}`)
    }

    takeDamage(amount) {
        const damage = this.health -= amount;
        this.logger.log(`${this.name} health after damage: ${damage}`);

        if (this.health <= 0) {
            this.logger.log(`${this.name} is dead!`)
        }
    }
}

class Enemy {
    constructor(name, player, logger) {
        this.name = name;
        this.logger = logger;
        this.health = 100;
        this.player = player;
    }

    attack() {
        const rndNum = Math.floor(Math.random() * 30);
        this.player.takeDamage(rndNum);
        this.logger.log(`Outgoing damage to the ${this.player.name} is: ${rndNum}`);
    }

    takeDamage(amount) {
        const damage = this.health -= amount;
        this.logger.log(`${this.name} health after damage: ${damage}`);

        if (this.health <= 0) {
            this.logger.log(`${this.name} is dead!`)
        }

        this.attack();
    }
}

class Logger {
    constructor(index) {
        this.index = 0;
    }

    log(text) {
        this.index++;
        console.log(`[${this.index}] [LOG] ${text}`);
    }
}

class App {
    constructor() {
        this.logger = new Logger();
        this.player = new Player(`Hero`, null, this.logger);
        this.enemy = new Enemy(`Ogre`, this.player, this.logger);
        this.player.enemy = this.enemy;
    }

    run() {
        this.player.attack();
    }
}

const app = new App();
app.run();