export const getYears = (duration) => {
  var years = [];
  for (var i = 1; i <= duration; i++) {
    years.push(i);
  }
  return years;
};
