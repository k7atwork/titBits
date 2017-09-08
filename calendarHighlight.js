// HTML.CALNDR_DT_HIGHLIGHT_SCRIPT_UOA

function highlightDates()
{

  var day2highlight = arguments[0];

<!--  Head Calendar -->

  var headCalendar = document.getElementById('headCalendar');
  var headCalendarRow = headCalendar.getElementsByTagName('thead')[0].getElementsByTagName('tr')[1];

  var PTYearMonth = headCalendarRow.getElementsByTagName('td')[0];

  var PTMonth = PTYearMonth.getElementsByTagName('select')[0];

  if (PTMonth.getAttribute('onchange').indexOf('highlightDates(') == -1)
  PTMonth.setAttribute('onchange',PTMonth.getAttribute('onchange') + "; highlightDates(" + day2highlight +");");

  var PTYear = PTYearMonth.getElementsByTagName('select')[1];

  if (PTYear.getAttribute('onchange').indexOf('highlightDates(') == -1)
  PTYear.setAttribute('onchange',PTYear.getAttribute('onchange') + "; highlightDates(" + day2highlight +");");

<!--  Body Calendar -->

  var calMonthDates = document.getElementById('bodyCalendar').getElementsByTagName('tbody')[0];
  var calWeeks = calMonthDates.getElementsByTagName('tr');

  for (var i = 0, length = calWeeks.length; i < length; i++) 
  {
    var week = calWeeks[i];

    var weekDates = week.getElementsByTagName('td');

    for (var j = 0, weekLength = weekDates.length; j < weekLength; j++) 
    {
        var dates = weekDates[j];

        if (j == day2highlight) 
        {
          if (dates.innerHTML.indexOf('nbsp') != -1)
          {  dates.style.cssText += ' background-color:white;'; }
		  else
          {  dates.style.cssText += ' background-color:yellow;'; }
        }
    }
  }

<!--  Tail Calendar -->

  var tailCalendar = document.getElementById('tailCalendar');
  var tailCalendarRow = tailCalendar.getElementsByTagName('thead')[0].getElementsByTagName('tr')[0];

  var prevmonth = tailCalendarRow.getElementsByTagName('td')[0];

  if (prevmonth.getElementsByTagName('a')[0].href.indexOf('highlightDates(') == -1)
  prevmonth.getElementsByTagName('a')[0].href += " highlightDates(" + day2highlight +");";
  
  var nextmonth = tailCalendarRow.getElementsByTagName('td')[5];

  if (nextmonth.getElementsByTagName('a')[0].href.indexOf('highlightDates(') == -1)
  nextmonth.getElementsByTagName('a')[0].href += " highlightDates(" + day2highlight +");";

}
