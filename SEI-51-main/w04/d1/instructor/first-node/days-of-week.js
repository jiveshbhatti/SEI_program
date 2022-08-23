const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function getWeekday(dayNo) {
  if (dayNo < 0 || dayNo > 6) dayNo = 0;
  return weekdays[dayNo];
}

module.exports = {
  weekdays,
  getWeekday,
};
