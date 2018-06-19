var chocolateBars

chocolateBars = [ 'snickers',
'hundred grand',
'kitkat',
'skittles']
  
addElementToBeginningOfArray = function(array,element) {
  return [element, ...array]
}

destructivelyAddElementToBeginningOfArray = function (array,element) {
  var array = [element, ...array]
  return array
  }
  
 addElementToEndOfArray = function (array,element) {
   return [...array, element]
 }
 
 destructivelyAddElementToEndOfArray = function (){
   var array=[...array, element]
   return array
 }

accessElementInArray = function (array,index) {
return Array[parseInt(index)]
}