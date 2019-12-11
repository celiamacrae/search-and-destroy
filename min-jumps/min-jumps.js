'use strict';

// Complete this algo
const minJumps = arr => {
  let jumps = 0
  let index = 0
  let jumpsAllowed = arr[index]

  while(index < arr.length-1){
      let jumper = jumpsAllowed
      let ji = index //jumper index

      for(let i=index; i<index + jumpsAllowed; i++){
        if(arr[i] + 1 > jumper){
          jumper = arr[i]
          ji = i
        }
      }

      if(jumper=== jumpsAllowed){
        jumps = jumps + 1
        index = index + jumpsAllowed
        jumpsAllowed = arr[index]
      }else{
        jumps = jumps + 2
        index = ji + jumper
        jumpsAllowed = arr[index]
      }
    }

  return jumps
};

module.exports = minJumps
