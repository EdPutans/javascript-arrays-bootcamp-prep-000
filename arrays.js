var chocolateBars

chocolateBars = [ 'snickers',
'hundred grand',
'kitkat',
'skittles']
  
addElementToBeginningOfArray = function(array3,element) {
  return [element, ...array3]
}

destructivelyAddElementToBeginningOfArray = function (array,element) {
  var array = [element, ...array]
  return array
  }
  
 addElementToEndOfArray = function (array4,element) {
   return [...array4, element]
 }
 
 destructivelyAddElementToEndOfArray = function (array5,element){
   var array5 = [...array5, element]
   return array5
 }

accessElementInArray = function (array,index) {
  return array[parseInt(index)]
}

destructivelyRemoveElementFromBeginningOfArray = function (array) {
  var ar = array.slice(1)
  return ar
}

removeElementFromBeginningOfArray = function (array){
  return array.slice(1)
}

destructivelyRemoveElementFromEndOfArray = function(array) {
  var array = array.slice(-1)
  return array
}

removeElementFromEndOfArray = function (array) {
  return array.slice(-1)
}

