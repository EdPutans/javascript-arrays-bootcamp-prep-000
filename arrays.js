var chocolateBars

chocolateBars = [ 'snickers',
'hundred grand',
'kitkat',
'skittles']
  
addElementToBeginningOfArray = function(array,element) {
  return [element, ...array]
}

destructivelyAddElementToBeginningOfArray = function (array,element) {
  var array2 = [element, ...array]
  return array2
  }
  
 addElementToEndOfArray = function (array,element) {
   return [...array, element]
 }