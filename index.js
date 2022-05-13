let x = "John"
let y = "Doe"
console.log("\nExercise 21\n")
console.log(x, "<>", y)
let person = {
    name: "John",
    surname: "Doe",
    email: "johndoe@gmail.com"
  };
  console.log("\nExercise 22\n")
  console.log(person)
  console.log("\nExercise 23\n")
  delete person.email
  console.log(person)
  let myArr = ["Sam", "John", "Mat", "Jack", "Joe", "Dan", "Dom", "Jenny", "Pam", "Holly"]
  console.log("\nExercise 24\n")
  console.log(myArr)
  console.log("\nExercise 25\n")
  for(let i=0; i<myArr.length; i++){
      console.log(myArr[i])
  }
  let arrayLength = 100
  let randomArray = []
  for(let n=0; n<arrayLength; n++){
      randomArray.push(Math.floor(Math.random()*100)+1)
  }
  console.log("\nExercise 26\n")
  console.log(randomArray)
  console.log("\nExercise 27\n")
  function array_min_max(){
      randomArray.sort(function(a,b){return a-b})
      console.log("min:",randomArray[0])
      console.log("max:", randomArray[randomArray.length-1])
  }
  array_min_max()
  console.log("\nExercise 28\n")
  function nested_Arrays(){
  let m = 10
  let n =3
  for (let i=0; i<n; i++){
  let arr = Array(m).fill().map(()=>Array(n).push(Math.floor(Math.random()*10))+1);
  console.log(arr)
  }
}
  nested_Arrays()
  console.log("\nExercise 29\n")
function longest_Array(arr1, arr2){
    arr1=[1,2,3,4,5]
    arr2 = [6,5,4,3,2,1,8]
    if (arr1.length===arr2.length){
        console.log("length of arr1 & arr2 is same")
    }
    else if (arr1.length<arr2.length){
        console.log("arr2 is longest array")
    }
    else{
        console.log("arr1 is longest array")
    }
}
longest_Array()

