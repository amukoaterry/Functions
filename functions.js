//Question 4//
function multiplication(numbers){
    numbers.forEach((number)=>{
        console.log(number*2);
    });
};

multiplication([20,30,40,50]);


//Question5//
function changeArray(arr){
    const firstFour= arr.slice(0,4).map(item=>item*8);
    const lastTwo= arr.slice(-2).map(item=> item+5);
    const newArr = firstFour.concat(lastTwo);
    console.log(newArr);
}

changeArray([numbers]);