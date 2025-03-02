// arrays, objects,functions and loops
const arr =[]
  console.log('hi');
  const digit = 0;

  if(digit){
    console.log(hi);
  }


  const strArr =['hi','hi','hi','hi']
  
  const numArr = [1,2,3,4,5,-7]

  const mixedTypes = ['leah' ,2345, false ,[1,2,'hello'], undefined ,{a:'b'}]

  //Array method
//array methods ,length,slic/push/pop/shift/unshift/join/slice
mixedTypes.push('item added',1, true)//modifies array by adding item to the arrar
console.log(mixedTypes)

mixedTypes.pop()//removes last item in array
console.log(mixedTypes)

mixedTypes.unshift('first');//add infront of an array
console.log(mixedTypes)

mixedTypes.shift();//removes an item infront of array
console.log(mixedTypes)

let ArrTostr=mixedTypes.join()
console.log(mixedTypes)
console.log(ArrTostr)




  let mystr = 'Hello there,i am looking for something'
  mystr= mystr.split(' ') //keeps every character in array
  console.log(mystr)


console.log(mystr.length)
console.log(mixedTypes.length)

console.log (mystr[0])
console.log(mixedTypes[0])
console.log(mixedTypes[1])
console.log(mixedTypes[2])
console.log(mixedTypes[3])
console.log(mixedTypes[4])

let firstItem=mixedTypes[0]

// let h1=document.getElementById('heading');

// h1.textContent='HI ${firstItem},This is great website. The score is ${mixedTypes[1]}';
// console.log(firstItem)


 //CREATING A OBJECT
 //key value pairs
const myObj= {
   name: "lishya",
   age: 30,
   color: 'black',
//    life goals: 'To be a super star'
   "life goals": 'to be a super star',
    isMarried: true,
    occupations: ['lawyer','developer','project manager'],
    friendDetails:{
    john:{
        name: 'john smith',
        age: 23,
        color: 'black',
    },

    },
    
};
console.log(myObj.name)
console.log(myObj.age)
console.log(myObj.color)
console.log(myObj['life goals'])









const data =[
    {
        breed: 'german shepherd',
        age:7,
        puppies:'bull dog',
        
    },
    {
        breed:'bull dog',
        age: 10,
        puppies: 60,
        
    }


]
// console.log(Object.keys(dog))
// console.log(Object.entries(dog))
// console.log(dog.hasownproperty('age'))







console.log(data[0])



const fruitArr =['apple','orange','watermelon','pineapple']


//length,slice,
console.log(fruitArr.includes('orange'))
console.log(fruitArr.indexOf('orange'))
console.log(fruitArr.lastIndexOf('orange'))







// functions and how to create methods in objects
//1. function declaration
function printword(){
    console.log('hello everyone')
  }
  
  printword()
  console.log(printword());
  let valofPrintwordfunc= printword()
  console.log(valofPrintwordfunc)



  
  
  
  //2.function expression
  const addNums = function(){
      let added=1+1
      console.log(added)
  
  }
  addNums()
  
  //3.arrowfunction
  const printName = ()=> {
      let firstname='john'
      console.log(firstname)
  }
  printName()

 

  function greetPerson(name){
    let greeting = `hello ${name}`
    
    console.log(greeting)
}

  greetPerson('john')
  greetPerson('judith')
  greetPerson(' lishya')



const multiplyNums=(a,b)=>{
    let result = a+b
    console.log(result)
}
console.log(undefined * undefined)
multiplyNums(2,2)
multiplyNums(6345, 3)
multiplyNums(2,-0.3566)

//funcion that takes in an array and returns the first item of an array
const arrFunc=(arr)=>{
//     let firstItem=`The first item in the array is `${arr[0]}`,the second is ${arr[1]}`;
//     return[]

  
};

console.log(arrFunc([1,2,3,4]))
console.log(arrFunc(['he','she','they','then']))
console.log(arrFunc([1,2,3,4]))



//write function  that takes in a day of the week as an argument and return the string 'today is weekday'
//if the day is from monday thursday friday returns is weekend
const dayofTheWeek =(day)=>{
    if (day === 'monday'||
         day === 'wenesday'|| 
         day==='thursday'){
        return 'today is wenesday'

    }else if (day === 'friday' ||
         day=='saturday'|| 
         day==='sunday'){

        return 'today is weekend'
    }else{
        return 'i dont know wat u talking about'
    }

};
    console.log(dayofTheWeek('monday'))
    console.log(dayofTheWeek('sunday'))
    console.log(dayofTheWeek('tomorrow'))
    console.log(dayofTheWeek('monday'))


    let displayMobile = false
function handleMobileNav(){
    let bars = document.getElementById('bars'); close=document.getElementById('close');
    bars.style.display='none';
    close.style.display='block'
        displayMobile=!displayMobile
    }
    
