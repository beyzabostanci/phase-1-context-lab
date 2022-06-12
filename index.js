function createEmployeeRecord(recordArr){
    return {
        firstName: recordArr[0],
        familyName: recordArr[1],
        title: recordArr[2],
        payPerHour: recordArr[3],
        timeInEvents: [],
        timeOutEvents: [],
//Loads Array elements into corresponding Object properties.
    }
}
function createEmployeeRecords(recordArrOfArr) {
    return recordArrOfArr.map(arr => createEmployeeRecord(arr))
}
//Converts each nested Array into an employee record using createEmployeeRecord and accumulates it to a new Array


function createTimeInEvent(dateD){
    const [date, hour] = dateD.split(" ")
    const timeInObj = {
        type : "TimeIn",
        hour: +hour,
        date: date,
    }
//retrun The record that was just updated--- push it to timeInEvents
   this.timeInEvents.push(timeInObj)
   return this
}

function createTimeOutEvent(dateD){
    const [date, hour] = dateD.split(" ")
    const timeOutObj = {
        type : "TimeOut",
        hour: parseInt(hour),
        date: date,
    }
//retrun The record that was just updated--- push it to timeOutEvents
   this.timeOutEvents.push(timeOutObj)
   return this
}

function hoursWorkedOnDate(dateD){
//Given a date, find the number of hours elapsed between that date's timeInEvent and timeOutEvent
//worked hours is integar
const timeIn = this.timeInEvents.find(dateStamp => dateStamp.date === dateD).hour

const timeOut = this.timeOutEvents.find(dateStamp => dateStamp.date === dateD).hour

const hoursWorked = (timeOut - timeIn)

return hoursWorked / 100
}

//returns pay owed
//Using hoursWorkedOnDate, multiply the hours by the record's payRate to determine amount owed. Amount should be returned as a number.
function wagesEarnedOnDate(date = "all") {
    return this.payPerHour * hoursWorkedOnDate.call(this, date);
  }


const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


function findEmployeeByFirstName(collection, firstName){
    //return matching record or undefied
    //Test the firstName field for a match with the firstName argument
    return collection.find((employee) => employee.firstName === firstName)
}

function calculatePayroll(arrayOfEmployeeRecords) {
    let sum = 0;
    for (let currEmployee of arrayOfEmployeeRecords) {
      sum += allWagesFor.call(currEmployee);
    }
    return sum;
  }


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */



