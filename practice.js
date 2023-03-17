/* var name = "Namer"
var age = 7;
var isHere= false; 

function sumUser(userN, userA, userH){

    return 'My name is '+ userN + ' I am not ' + userA+ ' And me being here is: '+ userH;
}

console.log(sumUser(name,age,isHere));
*/
/*
//const is never changing var/let
const name = "Namer"

// let is "better" than var
let age = 7;
let isHere= false; 

const sumUser= (userN, userA, userH)=>{


    return 'My name is '+ userN + ' I am not ' + userA+ ' And me being here is: '+ userH;
}

const add= (a,b) =>{

    return a-b;
}

//syntax for arrow function with one return line
const add20=(a)=>a+20;


console.log(add(age,90));

console.log(sumUser(name,age,isHere));

console.log(add20(age));
*/

const ppl={
    name:'Me',
    age:22,
    ident(){
        console.log('I am '+this.name+' I am also '+ this.age+ 'years old')

    }
};

const printName=({name})=>{
    console.log(name);
}

printName(ppl);

const {name, age} = ppl;

console.log(name + age);

//const hobbies=['Math','Games','Job'];

/*
for(let x of hobbies){
    console.log(x);
}
*/
//one way to copy array
//const fakeArray= hobbies.slice();

//wrong way to copy array(Creates nested arr)
//const fakeArray = [hobbies]

//another way to copy array "..." spread operator takes things out of the obrject works on arrays and objects
//const fakeArray = [...hobbies];

//console.log(fakeArray);

/*
// "..." can be used to place arguments into an array
const toArr= (...arg)=>{
    return arg;
}

console.log(toArr(2,3,5,7,8));
*/

