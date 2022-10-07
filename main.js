let createStudent = (stuName, stuGrade) => {
    let stuObj = {}
    stuObj.name = stuName
    stuObj.grade = stuGrade
    return stuObj
}

let addMathGrade = (stuObject) => {
    stuObject.math = "B"
    return stuObject
}

let addHistoryGrade = (stuObject) => {
    stuObject.history = "C"
    return stuObject
}

let addScienceGrade = (stuObject) => {
    stuObject.science = "A"
    return stuObject
}

console.log(addMathGrade(addHistoryGrade(addScienceGrade(createStudent("John", "Barkley")))))

let buyClay = () => {
    let obj = {}
    return obj
}

let makePottery = (obj) => {
    obj.shape = 'Bowl'
    return obj
}

let bisqueFire = (obj) => {
 obj.readyForGlazing = true
 return obj
}

let glazePottery = (obj) => {
    if (obj.readyForGlazing == true){
        obj.glazing = 'Midnight Blue'
    } else {
        console.log('Make sure you bisque fire the pottery before you glaze it.')
    } return obj
}

let test = buyClay()

console.log(glazePottery(bisqueFire(makePottery(test))))

