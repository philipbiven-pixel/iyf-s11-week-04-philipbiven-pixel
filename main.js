// =====================================
// TASK 7.1 - VARIABLES
// =====================================

let name = "Biven Philip";
let age = 23;
let isStudent = true;
let favoriteColors = ["Black", "Blue", "White"];
let today = new Date();

console.log("Name:", name);
console.log("Age:", age);
console.log("Student:", isStudent);
console.log("Favorite Colors:", favoriteColors);
console.log("Today's Date:", today);

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);

let score = 100;
score = 150;

const PI = 3.14159;


// =====================================
// TASK 7.2 - OPERATORS
// =====================================

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

let count = 0;
count++;
count--;

let firstName = "Biven";
let lastName = "Philip";

let fullName = firstName + " " + lastName;

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Biven"));

console.log(5 > 3);
console.log(5 < 3);
console.log(5 === 5);
console.log(5 == "5");
console.log(5 !== 3);

console.log(true && true);
console.log(true || false);
console.log(!true);

console.log("Age in days:", age * 365);
console.log("Age in hours:", age * 365 * 24);
console.log("Turn 100 in:", new Date().getFullYear() + (100 - age));


// =====================================
// TASK 7.3 - FUNCTIONS
// =====================================

function greet(name) {
    return `Hello, ${name}!`;
}

const add = function (a, b) {
    return a + b;
};

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(fullName) {
    return fullName
        .split(" ")
        .map(word => word[0])
        .join("");
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function greetGuest(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

function calculateTip(bill, tipPercent = 15) {
    return bill * tipPercent / 100;
}

console.log(greet("Biven"));
console.log(calculateArea(10, 5));
console.log(celsiusToFahrenheit(25));
console.log(isEven(12));
console.log(getInitials("Biven Philip"));
console.log(reverseString("hello"));
console.log(calculateTip(1000));


// =====================================
// TASK 7.4 - CONTROL FLOW
// =====================================

function getGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

console.log(getGrade(87));

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid";
    }
}

console.log(getDayName(2));

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}


// =====================================
// MINI PROJECT - CALCULATOR
// =====================================

function subtract(a, b) {
    return a - b;
}

function multiplyCalc(a, b) {
    return a * b;
}

function divideCalc(a, b) {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);

        case "-":
            return subtract(num1, num2);

        case "*":
            return multiplyCalc(num1, num2);

        case "/":
            return divideCalc(num1, num2);

        case "%":
            return num1 % num2;

        case "**":
            return num1 ** num2;

        default:
            return "Invalid operator";
    }
}

console.log(calculate(10, "+", 5));
console.log(calculate(10, "/", 0));


// =====================================
// TASK 8.1 - ARRAYS
// =====================================

const numbers = [1, 2, 3, 4, 5, -2, 12];

const doubled = numbers.map(num => num * 2);
console.log(doubled);

const positives = numbers.filter(num => num >= 0);
console.log(positives);

const greaterThanTen = numbers.find(num => num > 10);
console.log(greaterThanTen);

const product = numbers.reduce((total, num) => total * num, 1);
console.log(product);


// =====================================
// TASK 8.2 - OBJECTS
// =====================================

const person = {
    firstName: "Biven",
    lastName: "Philip",
    age: 23,
    hobbies: ["Coding", "Movies"],
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

console.log(person.firstName);
console.log(person.address.city);

const calculator = {
    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    multiply(a, b) {
        return a * b;
    }
};

console.log(calculator.add(5, 3));


// =====================================
// TASK 8.3 - ARRAY OF OBJECTS
// =====================================

const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

console.log(students.map(student => student.name));

console.log(students.filter(student => student.grade > 80));

console.log(students.find(student => student.name === "Charlie"));

const average =
students.reduce((sum, student) => sum + student.grade, 0) / students.length;

console.log(average);

console.log(students.filter(student => student.major === "CS"));

console.log([...students].sort((a, b) => b.grade - a.grade));

console.log(students.some(student => student.grade > 90));

console.log(students.every(student => student.grade >= 60));


// =====================================
// MINI PROJECT - GRADE TRACKER
// =====================================

const gradeTracker = {
    students: [],

    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    getStudent(name) {
        return this.students.find(student => student.name === name);
    },

    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;

        const grades = Object.values(student.grades);
        return grades.reduce((a, b) => a + b, 0) / grades.length;
    },

    getTopStudent() {
        return this.students.reduce((top, current) => {
            return this.getStudentAverage(current.name) >
                this.getStudentAverage(top.name)
                ? current
                : top;
        });
    }
};

gradeTracker.addStudent("Alice", {
    math: 95,
    english: 88,
    science: 92
});

gradeTracker.addStudent("Bob", {
    math: 72,
    english: 85,
    science: 78
});

console.log(gradeTracker.getStudentAverage("Alice"));
console.log(gradeTracker.getTopStudent());


// =====================================
// DAILY CHALLENGES
// =====================================

// Largest Number

function largestNumber(arr) {
    let largest = arr[0];

    for (let num of arr) {
        if (num > largest) {
            largest = num;
        }
    }

    return largest;
}

console.log(largestNumber([5, 3, 12, 9, 7]));

// Remove Duplicates

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1,2,2,3,4,4,5]));

// Palindrome

function isPalindrome(str) {
    const clean = str.toLowerCase().replace(/\s/g, "");

    return clean === clean.split("").reverse().join("");
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("A man a plan a canal Panama"));
