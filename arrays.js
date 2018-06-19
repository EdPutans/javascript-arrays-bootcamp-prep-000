var chocolateBars

chocolateBars = [ 'snickers',
'hundred grand',
'kitkat',
'skittles']
  
addElementToBeginningOfArray = function(array3,element) {
  return [element, ...array3]
}

destructivelyAddElementToBeginningOfArray = function (array2,element) {
  var array2 = [element, ...array2]
  return array2
  }
  
 addElementToEndOfArray = function (array4,element) {
   return [...array4, element]
 }
 
 destructivelyAddElementToEndOfArray = function (array5,element){
   var array5=[...array5, element]
   return array5
 }

accessElementInArray = function (array,index) {
return Array[parseInt(index)]
}
