<style>
td.PSLEVEL1GRIDROW { height: 30px;}
</style>

<script type="text/javascript">

function FormatSection() 
{
  var grpboxtitle = document.getElementById('win%Bind(:1)divG_FORM_DRV_G_GROUPBOX_08').getElementsByClassName('PAGROUPDIVIDER')[0];
  grpboxtitle.innerHTML="%Bind(:2)";

  var ovrPymntText = document.getElementById('win%Bind(:1)divVFWA_OVR_PYMNT_TXT').getElementsByTagName('P')[0];
  ovrPymntText.setAttribute("style","padding-left: 0.0em; text-indent:-0.5em;");
}

function addLoadEvent(func)
{
  var oldonload = window.onload;

  if (typeof oldonload != 'function') 
  {
    window.onload = func();
  }
  else
  {
    window.onload = function()
    {
      if (oldonload)
      {
        oldonload();
      }
      func();
    }
  }
}

<!-- Called on the EVL/VWS/UPD component -->
addLoadEvent(FormatSection);


<!-- Called on the ADD component -->
FormatSection();

</script>
