//1
let y = "532443";
function reverse(y) {
    let x = "";
    for (var i = y.length - 1; i >= 0; i--) {
        x += y[i];
    }
    return y; 
}
console.log(reverse(x));
//2
function odd_even() {
    for (var x = 1;x <= 15; x++) {
       if(x%2 == 0){
       console.log(x +", is even");
       }
       else{
        console.log(x +", is odd");

       }
    }

}

odd_even();
//3
//4
let numbers = "025468";
function evenNumbers(numbers) {
    let new_number=[0]

    for(let i=1 ; i<numbers.length ; i++){
        if(numbers[i]%2 === 0 && numbers[i-1]%2 === 0){
            new_number += '-'+numbers[i];
        }
        else{
            new_number+=numbers[i]        }
    }
     console.log(new_number)
      }

     evenNumbers (numbers);
     //5
     function Agechecker (age) {
        return age >=18 ?"The user is Adult" :"The user is Minor"
          }
      
         console.log(Agechecker (40)); 