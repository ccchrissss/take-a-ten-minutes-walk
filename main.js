function isValidWalk(walk) {

  if (walk.length !== 10) return false

  let count = 0

  for (let i = 0; i < walk.length; i++) {
    
    switch (walk[i]) {
      case 'n':
        count += 1
        break
      case 's':
        count -= 1
        break
      case 'e':
        count += 10
        break
      case 'w':
        count -= 10
        break
    }
    
  }

  return count == 0 ? true : false

}


console.log(isValidWalk(['n', 'n', 'e', 's', 's', 'w']))

// ternary operator evaluating the length of the walk array. If the length does not equal 10, return false
// declare a variable called count and set it to 0
// iterate through the walk array with a for loop
// begin loop:
// switch statement walk[i]
// first case: walk[i] == 'n', add 1 to count
// second case: walk[i] == 's', subtract 1 from count
// third case: walk[i] == 'e', add 10 to count
// fourth case: walk[i] == 'w', subtract 10 from count
// end loop

// ternary if count equals 0, return true, else false




// parameter: walk    // an array containing strings of 'n', 's', 'e', and 'w'
// return: boolean    // true if walk takes exactly 10 mins and returns walker to starting point
                      // else false
// e.g. isValidWalk(['n', 'n', 'e', 's', 's', 'w'])
// results in false
