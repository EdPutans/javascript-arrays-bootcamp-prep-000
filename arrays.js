var chocolateBars = Array[
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles']
  
  
addElementToBeginningOfArray = function(array,element) {
  return [element, ...array]
}

destructiveAddElementToBeginningOfArray = function()