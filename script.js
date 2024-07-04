// // //today task
//  let companies =["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
//  console.log(companies);
// // //Remove the first company from the array
// companies.shift();
// console.log(companies);
// // //Remove Uber & Add Ola in its place
// let company = companies.splice(1,1,"Ola");
// console.log(companies);
// // //Add Amazon at the end
// companies.push("amazon");
// console.log(companies);

// //1.Declare an empty array using JS literal notation to store
// //student names in future.
// let student = [];
// console.log(student);

// //3. Declare and initialize a numbers array.
// let number;
// number = [1,4,66,89,78];
// console.log(number);
// //4. Declare and initialize a boolean array.
// let question;
// question = [true,false]
// console.log(question);
// //5. Declare and initialize a numbers array.
// let string;
// string = ["mariyam","true","raviya"]
// console.log(string);
// //6. Declare and initialize a mixed array.
// let mixed;
// mixed = [45,"mariyam",true,56.78]
// console.log(mixed);
// // question 8
// const studentName =["kinza","rabiya","uzma"];
// const studentScore =[ 389,778,562];
// let total = 800;
// const percentage1 = studentScore[0]/total*100;
// const percentage2 = studentScore[1]/total*100;
// const percentage3 = studentScore[2]/total*100;
// document.write("<p>score of"+" "+ studentName[0]+ " "+ "is "+studentScore[0]+"."+" "+"percentage:" +percentage1+"</p>");
// document.write("<p>score of"+" "+ studentName[1]+ " "+ "is"+" "+studentScore[1]+"."+" "+"percentage:" +percentage2+"</p>");
// document.write("<p>score of"+" "+ studentName[2]+ " "+ "is "+studentScore[2]+"."+" "+"percentage:" +percentage3+"</p>");

// // for (let i = 24; i < 241 ; i = i +24){
// // console.log(i);
// // }

// // // question 9
// let fruitsNmae = ["watermilon","kivi","apple","orange","bnana","mango"];
// document.write("<h2>fruits name</h2>");
//  document.write("<ol>");
// for (let i = 0; i <= 5; i++) {
//     document.write("<li>"+fruitsNmae[i]+"</li> <br>");
// }

// // question 10
// let colorName = ["red","green","pink","orange","black","yellow","white"];
// document.write("orignal array is" + colorName + "<br>");
// let colorToAdd = prompt("select a color you want");
// colorName.unshift(colorToAdd);
// document.write("Updatedv Array is: " + colorName);

// question 11
let fruits = ["apple","bnana","mango","orange","strawberry"];
document.write("<h2>fruits name</h2>");
 document.write("<ol>");
for (let i = 0; i <= 4; i++) {
    document.write("<li>"+fruits[i]+"</li> <br>");
}
// question 12 (a)
document.write("<h2>counting</h2>");
for (let i = 0; i <= 15; i++)
 {
   document.write(i);
}
// question 12 (b)
document.write("<h2> reverse counting</h2>");
for (let m = 0; m <= 10; m--)
 {
   document.write(m);
}