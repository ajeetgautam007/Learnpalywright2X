for(var i=0; i<3; i++){
    setTimeout(()=>consoleS.log(i),100);}
    for(let j=0; j<3; j++){
        setTimeout(()=>console.log(j),100);}    

       /* ReferenceError: consoleS is not defined
    at Timeout._onTimeout (/Users/apple/LEARNPLAYWRIGHT2X/taskk_11th_may_2026/checking_output.js:2:29)
    at listOnTimeout (node:internal/timers:594:17)
    at process.processTimers (node:internal/timers:529:7)

Node.js v22.12.0*/