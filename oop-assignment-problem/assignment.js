class Course {
    #price;

    get price() {
        return `$${this.#price}`;
    }

    set price(value) {
        if (value < 0) {
            throw new Error(`Value must be a positive integer`);
        }
        this.#price = value;
    }

    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.price = price;
    }

    calculate() {
        return this.length / this.#price;
    }

    summary() {
        console.log(`Title: ${this.title} Length: ${this.length} Price: ${this.price}`);
    }
}

const mathCourse = new Course(`Math Course`, 2000, 60);
const codeCourse = new Course(`Code Course`, 3120, 100);

console.log(mathCourse);
console.log(codeCourse);

console.log(mathCourse.calculate(mathCourse), mathCourse.title);
mathCourse.summary();
console.log(codeCourse.calculate(codeCourse), codeCourse.title);
mathCourse.summary();


console.log(``)
console.log(``)
console.log(``)

console.log(`STEP 3`)

console.log(``)

class PracticalCourse extends Course {
    constructor(title, length, price, exerciseCount) {
        super(title, length, price);
        this.numOfExercises = exerciseCount;
    }
    summary() {
        console.log(`Title: ${this.title} Length: ${this.length} Price: ${this.price} Exercises: ${this.numOfExercises}`);
    }
}

class TheoreticalCourse extends Course {
    publish() {
        console.log(`Publishing Course: ${this.title}`);
    }
}

const practicalCourse = new PracticalCourse(`React Course`, 4000, 120, 40);
practicalCourse.summary();
const theoreticalCourse = new TheoreticalCourse(`Code Course`, 3120, 100);
theoreticalCourse.publish();


const set = new Course()

// console.log(set.positive.symbol(mathCourse))

// const minToHour = (a) => {
//     return a / 60;
// }
//
// const hourToMinute = (a) => {
//     return a * 60
// }
//
// console.log(minToHour(240));
// console.log(hourToMinute(52));