var chocolateBars

chocolateBars = [ 'snickers',
'hundred grand',
'kitkat',
'skittles']
  
addElementToBeginningOfArray = function(array,element) {
  return [element, ...array]
}
array = []
destructiveAddElementToBeginningOfArray = function (array,element) {
  return array[0] = element
  }