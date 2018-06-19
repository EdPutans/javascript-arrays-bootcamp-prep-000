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