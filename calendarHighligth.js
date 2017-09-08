function highlightDates()
{

  var calMonthDates = document.getElementById('bodyCalendar').getElementsByTagName('tbody')[0];
  var calWeeks = calMonthDates.getElementsByTagName('tr');

  for (var i = 0, length = calWeeks.length; i < length; i++) 
  {
    var week = calWeeks[i];

    var weekDates = week.getElementsByTagName('td');

    for (var j = 0, weekLength = weekDates.length; j < weekLength; j++) 
    {
        var dates = weekDates[j];

        if (j == 2) 
        {
          if (dates.innerHTML.substring(1,5) != 'nbsp')
          {  dates.style.cssText += ' background-color:yellow;'; }
		  else
          {  dates.style.cssText += ' background-color:white;'; }
        }
    }
  }

  var tailCalendar = document.getElementById('tailCalendar');
  var tailCalendarRow = tailCalendar.getElementsByTagName('thead')[0].getElementsByTagName('tr')[0];

var prevmonth = tailCalendarRow.getElementsByTagName('td')[0];

if (prevmonth.getElementsByTagName('a')[0].href.indexOf('highlightDates()') == -1)
prevmonth.getElementsByTagName('a')[0].href += " highlightDates();";
  
var nextmonth = tailCalendarRow.getElementsByTagName('td')[5];

if (nextmonth.getElementsByTagName('a')[0].href.indexOf('highlightDates()') == -1)
nextmonth.getElementsByTagName('a')[0].href += " highlightDates();";

}
