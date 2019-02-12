// Question 1
var amount = parseFloat(prompt('Enter monetary amount:'))
var rate = parseFloat(prompt('Enter decimal interest rate:'))
var years = parseFloat(prompt('Enter number of years:'))

var simpleInterest = amount*rate*years
alert(simpleInterest)

// Question 2
function isPali(str) {
    low = str.toLowerCase()
    rev = low.split('').reverse().join('')
    if (low === rev) {
        return true
    }
    return false
}


// Question 3
function circleArea(radius) {
    return Math.PI * (radius**2)
}

// Question 4
function copyObj(obj) {
    return Object.assign({}, obj)
}
someObj = {'a':1,'b':2,'c':3}
copy = copyObj(someObj)
console.log(copy)

// Question 5
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

Employees = new Array(500)
for (var i=0; i<Employees.length; i++) {
    age = getRandomInt(15, 65)
    salary = getRandomInt(100, 10000)
    month = getRandomInt(1,13)
    day = getRandomInt(1,30)
    employee = {'Name': 'Employee '+i, 
        'Age': age,
        'Salary': salary,
        'DOB': [month, day, 2019-age].join('/')
    }
    Employees[i] = employee
}

above5000 = Employees.filter((employee) => {return employee['Salary'] > 5000})

function groupByAge(arr) {
    grouped = {}
    for (var i=0; i<arr.length; i++) {
        age = arr[i]['Age'].toString()
        if (grouped.hasOwnProperty(age)) {
            grouped[age].push(arr[i])
            continue
        }
        grouped[age] = [arr[i]]
    }
    return grouped
}

ageGrouped = groupByAge(Employees)

toIncrement = Employees.filter((employee) => {return employee['Salary']<1000 && employee['Age']>20})
toIncrement.map(function (employee) {
    let toIncrement = employee
    toIncrement['Salary'] = 5*employee['Salary']
    return toIncrement
})


