//let arr1 = [1,2,3,4,[5,6]]
//let arr2 = ['kanguva','lucky bhaskar','Brother','veerender','sai kiran','Deva Ravi','yaswanth','srikanth','charan','deepika','sandhya']
// console.log(`THE GIVEN ARRAY OF THE LENGTH IS:${arr1.length}`);//template string
// console.log('the given array of the length is:' + ''+arr1.length)// string concatination. 
// console.log(`THE GIVEN ARRAY OF THE LENGTH IS:${arr2.length}`);//template string
//console.log(`PRINT THE VALUE IS:${arr1[4][1]}`)
//console.log(`the printing value is:${arr1[3]=arr2[0]}`);
//console.log(arr1);
//math methods:
// let x =Math.round(5.5);
// x=Math.ceil(6.0);
// x=Math.floor(4.2)
// x=Math.pow(5,2);
// x=Math.sqrt(64)
// console.log(x);
//let d= new Date();
//console.log(d);
//let x=Date.now();
//  x=d.getFullYear();
//  x=d.getMonth();
//  x=d.getHours();
//  x=d.getMinutes();
//  x=d.getSeconds();
//console.log(`TODAY'S TIME IS :${d.getFullYear()}-${d.getMonth()}-${new Date()}
// functions:
//without parameters and without return value:
//  function beer(){
//     let a= 5;
//     b=6
//     console.log( 'the given output is without parameters and without return value:'+ ' ' + a+b);
//  }
//  beer()

// //with parametes and without return value
// function beer(a,b){
//     console.log( 'the given output is without parameters and without return value:'+ ' ' + (a+b));
//  }
//  beer(8,9)

// //without parametes and with return value



// //with parametes and with return value

// function beer(a,b){
//     console.log( 'the given output is without parameters and without return value:'+ ' ' + (a+b));
//     return a+b
// }
//  let x = beer(5,4)
//  console.log(x);

// let candidate_names=['veerender(0)','sai(1)','deva(2)','srikanth(3)','deepika(4)','yaswanth(5)','charan(6)'];
 //console.log(`total length of the given array is : ${candidate_names.length}`)
//Diffrent types of functions:
//1.named function :
//2.anonymous function:
//3.arrow function:
//
// function add(){
//     let ar1 = [ 1,2,3,4,5,6]
//     let addele = ar1.push("veer")
//     console.log(addele);
//     console.log(ar1[5].length-1)
// }
// 
// function veer(e){

// }
// let array = [1,2,3,4,5,6,obj={
//     array1:["veerender","Sai Kiran","Deva","Rupesh","Yaswanth","Sandhya","Deepika",["veer","Manohar","sai kiran","ravi"],
// ],  obj2:"hanuman",
//     obj3:"Jai sriram"
// }]
// veer(array)
// dialog boxes:
   
const kintons = ()=>{
    let  a = document.getElementById("num1").value
    let  b = document.getElementById("num2").value
    let  c = a*b
        let  d = document.getElementById("res").innerHTML= "CALCULATE THE KINTON IS : "+c/100 +  " "+ "Kinton's";
        console.log(d);
    }
   
const Amount = ()=>{
    let  a = document.getElementById("num1").value
    let  b = document.getElementById("num2").value
    let  c = a*b
    let  d = document.getElementById("res").innerHTML= c/100;
    let results  = document.getElementById("res").innerHTML ="CALCULATE THE AMOUNT IS: ₹ ,"+" "+d*2320
    console.log(results);
    }

   



















 
 
 












