import readline from "readline-sync";
// console.log("Hello world")

// // let num = parseInt(prompt("Enter a number:"))
// // console.log(num);
// function add1 (num){
//     num +=1
//     return num
// }
// let arr = [1,2,3,4,5,6]

// let newar = arr.map(add1)
// console.log(newar);

// console.log(newar.toString());
// console.log(typeof(newar.toString()));
// console.log(newar.join(`${newar}`?"+":"null value"));

// let fill = arr.filter((num)=>{
//     if(num < 2){
//     return num ;}
// })

// console.log(fill);

// let maapfil = arr.map((num)=>{
//     if(num<2){
//         return num
//     }
// })
// console.log(maapfil);

// let red = arr.reduce(function(acc, crt){
//     console.log(`acc is: ${acc}`);
//     console.log(`crt is: ${crt}`);
//     let num = acc * crt 
//     console.log(num);
//     return num
// })
// console.log(red);

// let str = "background-color"
// let arrstr = str.split("-")


// console.log(arrstr);
// let maparr = arrstr.map((str, index)=>{ 
//     console.log(str);
//     console.log(index);
//      return index == 0 ? str : str[0].toUpperCase() + str.slice(1)
// })

// console.log((maparr.join("")));

function getComputerChoice(){
    let Computerchoice = ["rock","paper","scissor"]
    let Randomchoice = Math.floor(Math.random()*Computerchoice.length) +1
    console.log(Randomchoice);
    return Computerchoice[Randomchoice]
}
function getHumanChoice(){
    console.log("Enter a choice Rock, Paper, Scissor");
    let HumanChoice = readline.question().toLowerCase()
    console.log(HumanChoice);
    
}
getHumanChoice()