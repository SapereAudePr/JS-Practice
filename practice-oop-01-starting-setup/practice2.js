class Student {
    constructor(name, teacher) {
        this.name = name;
        this.teacher = teacher;
        console.log(teacher);
    }

    study() {
        console.log(`Studying: ${this.name}`);
        this.teacher.teach(this);
    }
}

class Teacher {
    constructor(name) {
        this.name = name;
    }

    teach(student) {
        console.log(`${this.name} is teaching ${student.name}`);
    }
}

class App {
    constructor() {
        this.teacher = new Teacher(`John Doe`);
        this.student = new Student(`Raven`, this.teacher);
    }

    run() {
        this.student.study();
    }
}

const app = new App();
app.run();
