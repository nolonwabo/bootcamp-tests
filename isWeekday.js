var isWeekday = function(day){
  var weekend =day.startsWith('S');
  var weekend =!day.startsWith('S');
  console.log(weekend);
  return weekend;
};
isWeekday('Wensday');
