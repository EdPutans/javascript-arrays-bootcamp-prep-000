var chocolateBars

chocolateBars = [ 'snickers',
'hundred grand',
'kitkat',
'skittles']
  
addElementToBeginningOfArray = function(array3,element) {
  return [element, ...array3]
}

destructivelyAddElementToBeginningOfArray = function (array2,element) {
  var arr = [element, ...array2]
  return arr
  }
  
 addElementToEndOfArray = function (array4,element) {
   return [...array4, element]
 }
 
 destructivelyAddElementToEndOfArray = function (array5,element){
   var ar=[...array5, element]
   return ar
 }

accessElementInArray = function (array,index) {
  return array[parseInt(index)]
}

destrctivelyRemoveElementFromBeginningOfArray = function (array) {
  array.slice[1]
}

destr