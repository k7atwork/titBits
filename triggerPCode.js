<script>

function closeWindow() {
  // setTimeout(function() {window.close();}, 5000);
  // setTimeout(function(){window.location.href = "https://www.anu.edu.au";}, 60000);
}

// ==================================================
// Trigger the FieldChange PeopleCode in Work Record
// ==================================================

function triggerPplCode() {

  var ele = document.getElementById("DERIVED_HR_ACTION");

  if (ele)
  {
    ele.value='Y';

    var event = new Event('change', { 'bubbles': true });

    addchg_win0(ele);
    oChange_win0=ele;

    submitAction_win0(document.win0, ele.id, event);
  }

  // closeWindow();

}


// ==================================================
// On Load of document trigger the PCode
// on FieldChange of Dummy field (DERIVED_HR.ACTION)
// ==================================================


window.addEventListener('load', function(e) {
  triggerPplCode();
});

</script>
