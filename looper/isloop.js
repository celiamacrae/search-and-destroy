'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  let visited = {}
  let current = linkedlist.head

  while(current.next){
    if(current.value in visited){
      return true
    }else{
      visited[current.value] = current
      current = current.next
    }
  }
  return false
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
