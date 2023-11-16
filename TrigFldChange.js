function TrigFldChange(val) {

  var ele = document.getElementById("PORTALOBJSS");

  if (ele)
  {
    ele.value = val;
    var event = new Event('change', { 'bubbles': true });

    addchg_%FormName(ele);
    oChange_%FormName=ele;

    %SubmitScriptName(document.%FormName, ele.id, event);

  }

}
