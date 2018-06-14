export class webworker{
    constructor(){

        this.singleResult='';
        this.multiResult='Done!';
        this.webEmployee = new Worker("./src/worker.js")//register worker
        this.webEmployee2 = new Worker("./src/worker.js")//register worker
    }

    multiPress(){

        
        //this.multiResult ='';
        //let messageToThread = { doMath: {num1:1, num2:3}};//command to send to worker has to be in object format
        //will know what function to do by e.data.functionName != undefined
        //will get data by e.data.doMath.num1 and e.data.doMath.num2
        

        this.webEmployee.postMessage({ doMath:"Process1"});//send the message to the thread
        
        multiResultFont.style = "visibility: hidden";
        this.webEmployee.onmessage = function(e){
            this.multiResult ="hello";//this doesnt work
            this.singleResult="HELP";
            //console.log("done")//this works
            multiResultFont.style ="visibility: visible";
            processList.innerHTML = processList.innerHTML +"<li> Result:"+e.data.result+" </li>";
            //alert(e.data.result)//this works

        };

    }


    multiPress2(){

        
        //this.multiResult ='';
        //let messageToThread = { doMath: {num1:1, num2:3}};//command to send to worker has to be in object format
        //will know what function to do by e.data.functionName != undefined
        //will get data by e.data.doMath.num1 and e.data.doMath.num2
        

        this.webEmployee2.postMessage({ doMath:"Process2"});//send the message to the thread
        
        multiResultFont2.style = "visibility: hidden";
        this.webEmployee2.onmessage = function(e){
            this.multiResult ="hello";//this doesnt work
            //console.log("done")//this works
            //alert(e.data.result)//this works
            processList.innerHTML = processList.innerHTML +"<li> Result:"+e.data.result+" </li>";
            multiResultFont2.style ="visibility: visible";
            

        };

    }

    


    singlePress(){
        this.singleResult ='';
        let test = this.multiResult;
        for(let i =0; i< 2000000000; i+=.5){

        }
        this.singleResult ='Done!'
        processList.innerHTML = processList.innerHTML + "<li> single thread finished </li>";
    }





}