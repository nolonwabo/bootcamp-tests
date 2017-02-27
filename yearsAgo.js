var yearsAgo = function(year){
 var date = new Date();
  var whichYear = date.getFullYear();
  var outcome = whichYear - year;
  console.log(outcome);
  return outcome;
};
yearsAgo('2000');
