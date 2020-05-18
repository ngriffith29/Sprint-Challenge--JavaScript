// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// The nested function has access to it because the closure gives access to the parent information to be used it's inside of the of the function scope. Contrary external could not have access to any of the inside information of the functions becuase it is not scoped with the function.

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
    const counter = (num) => {
      let count = []
        for (let index = 1; index <= num; index++) {
             
            count.push(index)
              console.log(count)
          
        }
        console.log(count.reduce((a,b) => {
          
          return  a + b 
        }))

    }

 
    counter(4)