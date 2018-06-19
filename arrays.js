var chocolateBars

chocolateBars = [ 'snickers',
'hundred grand',
'kitkat',
'skittles']
 var array = chocolateBars
 
addElementToBeginningOfArray = function(array,element) {
  return [element, ...array]
}

destructivelyAddElementToBeginningOfArray = function (array,element) {
  array = array.unshift(element, ...array)
  return array
  }
  
 addElementToEndOfArray = function (array,element) {
   return [...array, element]
 }

destructivelyAddElementToEndOfArray = function (array,element){
  array= array.push(...array, element)
   return array
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

