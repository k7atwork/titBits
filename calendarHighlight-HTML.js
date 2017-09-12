// HTML.CALNDR_DT_HIGHLIGHT_HTML

<script type="text/javascript">

  var scriptElement = document.createElement('script');
  scriptElement.setAttribute('language','javascript');
  scriptElement.type = 'text/javascript';
  scriptElement.setAttribute('src','%BIND(:1)');
  scriptElement.innerText = '';

  document.getElementsByTagName('head')[0].appendChild(scriptElement);

//  var calprompt1 = document.getElementById('G_FORM_VFWA_BEGIN_DT$prompt').href += ' highlightDates(%BIND(:2));';
  var calprompt1 = document.getElementById('G_FORM_VFWA_BEGIN_DT$prompt');
  if ((calprompt1 != null) && (calprompt1.href.indexOf('highlightDates(') == -1))
    calprompt1.href += ' highlightDates(%BIND(:2));';

//  var calprompt2 = document.getElementById('G_FORM_VFWA_END_DT$prompt').href += ' highlightDates(%BIND(:2)+4);';
  var calprompt2 = document.getElementById('G_FORM_VFWA_END_DT$prompt');
  if ((calprompt2 != null) && (calprompt2.href.indexOf('highlightDates(') == -1))
    calprompt2.href += ' highlightDates(%BIND(:2)+4);';

</script>
