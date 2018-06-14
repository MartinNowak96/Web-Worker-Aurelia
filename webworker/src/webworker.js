export class webworker{
    constructor(){

        this.singleResult='';
        this.multiResult='Done!';
        this.webEmployee = new Worker("./src/worker.js")//register worker

    }

    multiPress(){

        
        //this.multiResult ='';
        let messageToThread = { doMath: {num1:1, num2:3}};//command to send to worker has to be in object format
        //will know what function to do by e.data.functionName != undefined
        //will get data by e.data.doMath.num1 and e.data.doMath.num2
        

        this.webEmployee.postMessage(messageToThread);//send the message to the thread
        
        multiResultFont.style = "visibility: hidden";
        this.webEmployee.onmessage = function(e){
            this.multiResult ="hello";//this doesnt work
            //console.log("done")//this works
            multiResultFont.style ="visibility: visible";
            //alert(e.data.result)//this works

        };

    }


    singlePress(){
        this.singleResult ='';
        let test = this.multiResult;
        for(let i =0; i< 2000000000; i+=.5){

        }
        this.singleResult ='Done!'
    }




}