<script type="text/javascript">

function getElementsStartsWithId( id ) 
{
  var children = document.body.getElementsByTagName('*');
  var elements = [], child;
  for (var i = 0, length = children.length; i < length; i++) 
  {
    child = children[i];
    if (child.id.substr(0, id.length) == id)
      elements.push(child);
  }
  return elements;
}

var rows = getElementsStartsWithId('trG_FORM_VFWA_WS');

for (i = 0; i < rows.length; i++) 
{

var td = rows[i].getElementsByTagName('TD');

  if ( td[2].innerHTML.substr(1,6) == '&nbsp;' )
  {
    var td0 = td[0].setAttribute("style","border-right-width:0px;");
    var td1 = td[1].setAttribute("style","border-right-width:0px;");
  }
 
}
</script>
