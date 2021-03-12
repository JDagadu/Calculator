function getbutton(id){

    console.log(document.getElementById(id));
    return document.getElementById(id);
}

let clearbutton = getbutton("AC");
let plusminusbutton = getbutton("plusminus");
let percentagebutton = getbutton("perc");
let divisionbutton = getbutton("div");

let screen = document.getElementsByClassName('screen-para')[0];
// console.log(screen)
// window.alert(screen.offsetWidth)

let displayfigure = 0;
let lastoperand = 0;
let lastoperator = "";
let curroperator = "";

function calculator(newvalue){
    
    lastoperator = document.querySelector(".prevoperator").value;
    curroperator = document.querySelector(".currentoperator").value;
    console.log(newvalue,lastoperator,curroperator)

    if(curroperator == "%"){
        displayfigure =newvalue/100;
        screen.textContent = String(displayfigure);
    }
    else if(curroperator  == "-/+"){
        if(Number(screen.textContent)>0){
            screen.textContent = "-"+screen.textContent;
        }else{
            
            screen.textContent = String(Math.abs(Number(screen.textContent)));
        }
    
    }else {
        switch(lastoperator){
            case "+" : 
            case "=" : displayfigure += newvalue;
            break;
            case "-" : displayfigure -= newvalue;
            break;
            case "x" : displayfigure *= newvalue;
            break;
            case "÷" : displayfigure /= newvalue;
            break;
            
    
    
        }
        screen.textContent = String(displayfigure);
    }
    
    lastoperand = newvalue;
    


}

function prevcurr(event){
    document.querySelectorAll(".buttons-calc").forEach(node=> {
        if(node.className.split(" ").indexOf("currclicked")>-1){
            // console.log('here')
            node.classList.remove('currclicked')
            document.querySelectorAll(".buttons-calc").forEach(node1=>{
                if(node1.className.split(" ").indexOf("prevclicked")>-1){
                    node1.classList.remove('prevclicked');
                   
                }
            })
            
            node.classList.toggle('prevclicked');
        }
    })
    event.classList.toggle('currclicked')
}

let button7 = getbutton("seven");
let button8 = getbutton("eight");
let button9 = getbutton("nine");
let plusbutton = getbutton("plus");
let button4 = getbutton("four");
let button5 = getbutton("five");
let button6 = getbutton("six");
let minusbutton = getbutton("minus");

let button1 = getbutton("one");
let button2 = getbutton("two");
let button3 = getbutton("three");
let multiplicationbutton = getbutton("mul");

let button0 = getbutton("zero");
let decimalbutton = getbutton("dec");
let equaltobutton = getbutton("equalto");

clearbutton.addEventListener('click',()=>{
    displayfigure = 0;
    lastoperand = 0;
    lastoperator = "+";
    curroperator = "";
    screen.textContent = "";
})

document.addEventListener('click',(event)=>{
//    console.log(event.target.className.split(" ").indexOf("operator"))
    if(event.target.className.split(" ").indexOf("operator")>-1){
        document.querySelectorAll(".operator").forEach(a=> 
            {
                if(a.className.split(" ").indexOf("currentoperator")>-1 ){
                    a.classList.remove('currentoperator')
                    document.querySelectorAll(".operator").forEach(node1=>{
                        if(node1.className.split(" ").indexOf("prevoperator")>-1 && a.className.split(" ").indexOf("unary")==-1 ){
                            node1.classList.remove('prevoperator');
                            a.classList.toggle('prevoperator');
                        }
                    })
                    
                
                }
            })
        event.target.classList.toggle('currentoperator');


        
        // document.querySelectorAll(".buttons-calc").forEach(node=> {
        //     let prevnode;
        //     if(node.className.split(" ").indexOf("currclicked")>-1){
        //         console.log('here')
        //         prevnode = node;
        //         node.classList.remove('currclicked')
        //         document.querySelectorAll(".buttons-calc").forEach(node1=>{
        //             if(node1.className.split(" ").indexOf("prevclicked")>-1){
        //                 node1.classList.remove('prevclicked');
                       
        //             }
        //         })
                
        //         prevnode.classList.toggle('prevclicked');
        //     }
        // })
        // event.target.classList.toggle('currclicked')
        
        //displayfigure = Number(screen.textContent)
        calculator(Number(screen.textContent));
    }
})

document.addEventListener('click',(event)=>{
    // console.log(event.target==button7)
    // console.log(screen.offsetWidth)

    prevcurr(event.target)
if((document.querySelector(".prevclicked").className.split(" ").indexOf("operator")>-1 || document.querySelector(".prevclicked").className.split(" ").indexOf("unary")>-1 )
&& 
document.querySelector(".currclicked").className.split(" ").indexOf("operand")>-1) {
    console.log("here")
    screen.textContent = "";
}
    if(screen.offsetWidth < 210){
        if(event.target == button7){
            // console.log(event.target.value)
            
            screen.textContent += event.target.value;
        }else if(event.target == button8){
            // console.log(event.target.value)
            screen.textContent += event.target.value;
        }else if(event.target == button9){
            // console.log(event.target.value)
            screen.textContent += event.target.value;
        }else if(event.target == button4){
            // console.log(event.target.value)
            screen.textContent += event.target.value;
        }else if(event.target == button5){
            // console.log(event.target.value)
            screen.textContent += event.target.value;
        }else if(event.target == button6){
            // console.log(event.target.value)
            screen.textContent += event.target.value;
        }else if(event.target == button1){
            // console.log(event.target.value)
            screen.textContent += event.target.value;
        }else if(event.target == button2){
            // console.log(event.target.operatorvalue)
            screen.textContent += event.target.value;
        }else if(event.target == button3){
            // console.log(event.target.value)
            screen.textContent += event.target.value;
        }else if(event.target == button0){
            // console.log(event.target.value)
            if(screen.textContent == "0"){

            }else {
                screen.textContent += event.target.value;
            }
            
        }else if(event.target == decimalbutton){
            // console.log(event.target.value)
            //console.log((String(screen.textContent)).match(/./g))
            if((String(screen.textContent)).length==0){
                screen.textContent += "0" +event.target.value;
            }else{
                if(screen.textContent == "0"){
                    screen.textContent += event.target.value;
                }
                if(!(String(screen.textContent)).match(/./g)){
                    screen.textContent += event.target.value;
                }
    
                
            }
            
        }
    } else{

    }
    
    


})