#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance=50000 ;
let myPin=22077;

let pinAnswer=await inquirer.prompt(
    [
        {
           name:"pin",
           message:"Enter your Pin Code",
           type:"number"
        }  
    ]  
)
//   22077 = 22045 - false
if(pinAnswer.pin===myPin){
    console.log("Correct Pin Code !!!");
    
    let operationAns=await inquirer.prompt(
        [
            {
                name:"operation",
                message:"please select option!",
                type:"list",
                choices:["withdraw","check balance","fastcash"]
            }
        ] 
    )
    if(operationAns.operation==="withdraw"){
    let amountAns=await inquirer.prompt(
            [
                {
                   name:"amount",
                   message:"enter your amount",
                   type:"number"
                }
            ]
       )
       // =,-=,+=
       if (amountAns.amount < myBalance)
        {  myBalance -= amountAns.amount;
           console.log("Now Your Balance Is "+ myBalance);
        }
        else{
            console.log("Insufficient Amount");
            
        }
    }
    
    if(operationAns.operation==="check balance")
    {
        console.log( "your remaining balance is "+ myBalance);
    }
    if (operationAns.operation==="fastcash"){
        let fastAns=await inquirer.prompt(
       [
          {
            name:"fastcash",
            message:"How Much Money You Want To Withdraw",
            type:"list",
            choices:["20000","30000","40000"],
          }
       ]
    );
   if(fastAns.fastcash==="20000"){
      myBalance-=fastAns.fastcash;
      console.log("Your Remaining Balance Is " + myBalance);
    }
    if(fastAns.fastcash==="30000"){
        myBalance-=fastAns.fastcash;
        console.log("Your Remaining Amount Is " + myBalance);
    }
    if(fastAns.fastcash==="40000"){
        myBalance-=fastAns.fastcash;
        console.log("Your Remaining Amount Is " + myBalance);
        
    }
  }
    
}
    else {
        console.log("Incorrect Pin Number")
    }
