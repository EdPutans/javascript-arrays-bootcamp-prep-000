var chocolateBars

chocolateBars = [ 'snickers',
'hundred grand',
'kitkat',
'skittles']
  
addElementToBeginningOfArray = function(array,element) {
  return [element, ...array]
}
array = []
destructiveAddElementToBeginningOfArray = function (Array,element) {
  return Array[0] = element
  }