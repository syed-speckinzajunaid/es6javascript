//sperad operater
const object = {
    One_A: true,
    One_B: true,
    One_C: {
      Two_A: true,
      Two_B: {
        Three_A: true,
      },
     
    },
  }
  
  const newObject = {
    ...object,
    One_C: { ...object.One_C, Two_B: { ...object.One_C.Two_B } },
  }
  newObject.One_A = false
  newObject.One_B = false
  newObject.One_C.Two_A = false
  newObject.One_C.Two_B.Three_A = false
  
  console.log("newObject: ", newObject)
  console.log("object: ", object)



// normal array concat() method
let arr = [1,2,[3,1],[50,60,['deeper'], ['deeper']]
];
let arr2 = [4,5,'deeper'];
  
arr = arr.concat(arr2);
  
console.log(arr); // [ 1, 2, 3, 4, 5 ]





//First, which objects do I want to protect?

  //object, One_C:, Two_B:
//  Next, set up the nesting structure with curly braces:

  //{ object, One_C: { , Two_B: {} } }
 // Finally add the spread operators, making sure you access each object:
  //const newObject = {
    //...object,
    //One_C: { ...object.One_C, Two_B: { ...object.One_C.Two_B } }
  //}
//   //REST OPERATER
//   function sum (name,game,...args){
//     console.log(arguments);
//     document.write(`Hello ${name} ${game}:`);
//           let sum=0;
//     for(let i in arguments){
//          sum+=arguments[i];
//     }
//     document.write(sum+"<br>");
// }
// sum("jawan program","football",40,59,60);
// //REST OPERATER &array&object

 var array1=[10,20,30,40];
 var array2=[50,60,['kinza']];
//var arr2= [50,60,['deeper'], ['deeper']]


 var array3=[5,name,...array2,...array1,65];
 console.log(array3);
 //object restoperater
const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43,
    'department':{
        'name': 'Sales',
        'Shift': 'Morning',
        'address': {
            'city': 'Bangalore',
            'street': '7th Residency Rd',
            'zip': 560001
        }
    }
}


 const { department } = user;
 const completeDetails = {...user, ...department};

 console.log(completeDetails)
































 