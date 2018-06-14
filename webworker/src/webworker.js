export class webworker{
    constructor(){
        var webEmployee = new Worker("worker.js")//register worker

        let messageToThread = { doMath: {num1:1, num2:3}};//command to send to worker has to be in object format
        //will know what function to do by e.data.functionName != undefined
        //will get data by e.data.num1 and e.data.num1

        webEmployee.postMessage(messageToThread);//send the message to the thread
        




    }
}