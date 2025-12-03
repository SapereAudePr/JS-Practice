class Course {
    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.price = price;
    }

    calculate() {
        return this.length / this.price;
    }

    summary() {
        return `Title: ${this.title} Length: ${this.length} Price: ${this.price}`;
    }
}

const mathCourse = new Course(`Math Course`, 2000, 60);
const codeCourse = new Course(`Code Course`, 3120, 100);

console.log(mathCourse);
console.log(codeCourse);

console.log(mathCourse.calculate(mathCourse), mathCourse.title);
console.log(mathCourse.summary());
console.log(codeCourse.calculate(codeCourse), codeCourse.title);
console.log(codeCourse.summary());


console.log(``)
console.log(``)
console.log(``)

console.log(`STEP 3`)

console.log(``)

class PracticalCourse extends Course {
    numOfExercises = 60;
}

class TheoreticalCourse extends Course {
    publish() {
        console.log(`Publishing Course: ${this.title} ${this.numOfExercises + 1} `);
    }
}

const practicalCourse = new PracticalCourse(`Math Course`, 2000, 60);
console.log(practicalCourse);
const theoreticalCourse = new TheoreticalCourse(`Code Course`, 3120, 100);
theoreticalCourse.publish();





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