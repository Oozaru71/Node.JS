//async code
const fetchData=callback=>{
    setTimeout(()=>{
        callback('done');
    },1000 );
};

setTimeout(()=>{
    console.log('Time!');
    fetchData(text=>{
        console.log(text);
    });
},2000 );

console.log('hello');