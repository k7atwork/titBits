// HTML.CALNDR_DT_HIGHLIGHT_HTML

<script type="text/javascript">

  var scriptElement = document.createElement('script');
  scriptElement.setAttribute('language','javascript');
  scriptElement.type = 'text/javascript';
  scriptElement.setAttribute('src','%BIND(:1)');
  scriptElement.innerText = '';

  document.getElementsByTagName('head')[0].appendChild(scriptElement);

  var calprompt1 = document.getElementById('UOA_FWA_SPK_WRK_BEGIN_DT$prompt').href += ' highlightDates(%BIND(:2));';
  var calprompt2 = document.getElementById('UOA_FWA_SPK_WRK_END_DT$prompt').href += ' highlightDates(%BIND(:2)+4);';

</script>
