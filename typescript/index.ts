// Basic types
let age: number = 29
let course: string = 'typecript'
let lessonCompleted: boolean = true
let x: any = false

let courses: string[] = ['html', 'css'] // array of string
let arr: any[] = [1, 'bob', true, { message: 'test' }, [1]] // any array
let stringArr: string[][] = [['a'], ['b']] //array of strings in array
let courseDetails: object[] = [{ 'message': 'test' }] // array of object

//tuples
// storing vlaues based onthe type mentioned int he specific order

let params: [string, number] = ['id', 25]
let people: [string, number][] = [['balaji', 25], ['indhu', 30]]

//objects

let students: {
    name: string,
    age: number,
    ispassed: boolean
}


//custom types
type Student = {
    name: string,
    age: number,
    ispassed: boolean
}
let student1: Student = {
    age: 25,
    ispassed: true,
    name: 'balaji'
}

// interfaces
interface students {
    name: string,
    age: number,
    ispassed: boolean
}

let student2: students = {
    name: 'balaji',
    age: 26,
    ispassed: true
}

//unions
let result: string | number = 'john'

type isPassing = "passed" | "fail"

let isJohnPassing: isPassing = 'fail'



// type assertions
// this is used to assert a speific type to a value

let y: any = 'hello'

y = <number>22

//functions

function sum(x: number, y: number): number {
    return x + y
}

sum(1, 3)


//void is used in a function which does not return any value

function greet(): void {
    console.log('hello');

}


// type the argument to be an array of number

//generics is assigning a type to the function and adding the type onf data while using th efinctuon with generix <>

function getFirstElement<ArrType>(arr: ArrType[]) {
    return arr[0]
}

getFirstElement<string>(['a', 'b', 'c'])

//Enums

enum Grade {
    freshMan = 'fisrtyear studnet in high school',
    sophomore = 'second year in high school',
    junior = 'third year in highschool', 
    senior='final year in highschool'
}

interface studentsObject {
    name: string,
    age: number,
    grade: Grade
}

function displayStudentInfo(student: studentsObject): void{
    const studentInfor: string = student.name
}



