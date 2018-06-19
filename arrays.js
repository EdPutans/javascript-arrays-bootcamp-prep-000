var chocolateBars

chocolateBars = [ 'snickers',
'hundred grand',
'kitkat',
'skittles']
  
addElementToBeginningOfArray = function(array3,element) {
  return [element, ...array3]
}

destructivelyAddElementToBeginningOfArray = function (array,element) {
  array = [element, ...array]
  return array
  }
  
 addElementToEndOfArray = function (array4,element) {
   return [...array4, element]
 }
 
 destructivelyAddElementToEndOfArray = function (array5,element){
   array5 = [...array5, element]
   return array5
 }

accessElementInArray = function (array,index) {
  return array[parseInt(index)]
}

destructivelyRemoveElementFromBeginningOfArray = function (array) {
  return array.shift()
}

removeElementFromBeginningOfArray = function (array){
  var arr=array.slice(1)
  return arr
}

destructivelyRemoveElementFromEndOfArray = function(array) {
  array = array.slice(0,array.length-1)
  return array
}

removeElementFromEndOfArray = function (array) {
  return array.slice(0, array.length-1)
}

