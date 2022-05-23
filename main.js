// function printDate (){
//     var myDate = new Date()
//         console.log (myDate);
    
// }
// printDate()

// function strDate (str){
//     var myDate2= new Date(str)
//     console.log(myDate2)
// }
// strDate("05/11/1995")

// function userDate (){
//  var userDate = prompt("enter date")
//  var myDate3 = new Date (userDate)
//  console.log (myDate3)
// }
// userDate ()

// function userDate1 (){
//     var userDate2 = prompt("enter date")
//     var myDate4 = new Date(userDate2)
//     retorn myDate4.getMonth()
// }
// userDate1()

// function userDate2 (){
//     var userDate5 = prompt("enter date")
//     var myDate5= new Date(userDate5)
//     return myDate5.getHours()
// }
// console.log(userDate2())

// function userDateyear (){
//     var userDate6=prompt("enter date")
//     var myDate7= new Date(userDate6)
//     return myDate7.getFullYear()
// }
// console.log(userDateyear())

// function minDate (){
//     var userDate8 = prompt("enter date")
//     var minDate = new Date(userDate8)
//     return minDate.getMinutes()
// }


// function userAgeDate (){
//  var user1 = prompt("age 1")
//  var user2 = prompt("age 2")
// var date1= new Date (user1)
// var date2= new Date (user2)
// if (date1 < date2){
//     console.log(date2)
// }
// else if (date2 < date1){
//     console.log(date1)
// }

// }
// userAgeDate()


// function userAge(){
//     var usera= prompt("enter age")
//     var useradate= new Date (usera)
//     var nowdate =new Date()
//     var useraa= usera
//     console.log(useradate.get)
// }

// function getMonthName(monthIndex){
//     var monthsNames = ['ינואר','פברואר','מרץ','אפריל','מאי','יוני','יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר','דצמבר'];
//     return monthsNames[monthIndex];
//   }
  
//   var dt = new Date();
//   var israeliDate = dt.getDate() + " ב" + (getMonthName(dt.getMonth())) + "." + dt.getFullYear();
//   console.log(israeliDate);
function userAge (){
    var dtfromuser = prompt ("enter a date in the formt MM-DD-YYYY")
    return  new Date().getFullYear() - new Date(dtfromuser).getFullYear()
}
console.log(userAge())
  