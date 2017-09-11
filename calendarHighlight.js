// HTML.CALNDR_DT_HIGHLIGHT_SCRIPT_UOA

function checkPayDay(dateElement)
{

  var refMondayAfterPay=new Date(2016, 3, 1);

  var daytocheck=dateElement.getElementsByTagName('a')[0].innerHTML;

  var checkDate = new Date(PTYear.value, PTMonth.value, daytocheck);

  var hoursDiff = new Date(+checkDate).setHours(12) - new Date(+refMondayAfterPay).setHours(12);

  return ((Math.round(hoursDiff/8.64e7))%14);

}

function checkMondayAfterPay(dateElement)
{

  var refMondayAfterPay=new Date(2016, 3, 4);

  var daytocheck=dateElement.getElementsByTagName('a')[0].innerHTML;

  var checkDate = new Date(PTYear.value, PTMonth.value, daytocheck);
// alert(checkDate.toDateString());

//  var t2 = checkDate.getTime();
//  var t1 = refMondayAfterPay.getTime();

//  var daysDiff = parseInt((t2-t1)/(24*3600*1000));
//  var weeksDiff = parseInt((t2-t1)/(24*3600*1000*7));
  var hoursDiff = new Date(+checkDate).setHours(12) - new Date(+refMondayAfterPay).setHours(12);

//  return ((daysDiff)%14); 
//  return ((weeksDiff)%2);
  return ((Math.round(hoursDiff/8.64e7))%14);

}

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
          {  
             if (((checkMondayAfterPay(dates) == 0) && j == 2) || ((checkPayDay(dates) == 0) && j == 6))
             dates.style.cssText += ' background-color:yellow;'; 
			 else
             dates.style.cssText += ' background-color:white;';
          }
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
