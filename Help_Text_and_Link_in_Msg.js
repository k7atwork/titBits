<script>

function addHoverOverHelpText()
{

  var arrElem = document.getElementsByTagName('img');

  if (arrElem != null)
  for (i=0; i<arrElem.length; i++)
  {
    var strAttr = arrElem[i].getAttribute('title');
    if (strAttr != null)
    {
      if (arrElem[i].getAttribute('title') == 'Help')
      {
       switch (arrElem[i].parentNode.id)
       {
       	// case 'SECTION - Page Fieldname':
          // arrElem[i].setAttribute('title','here goes the help text');
          // break;
          %bind(:1)
       }
      }
    }
  }

}


function convertText2Link()
{
  var longmsgEle = document.getElementById('longmsg');

  if ((longmsgEle.innerHTML.indexOf('&lt;') > 0) || (longmsgEle.innerHTML.indexOf('&gt;') > 0))
     longmsgEle.innerHTML = longmsgEle.innerHTML
                                                .replace('&lt;','<')
                                                .replace('&gt;','>');

  return;
}


// ----> Small Form Factor <----
var trigEle = document.getElementsByClassName('ps_pspagecontainer')[0];
trigEle.addEventListener('DOMNodeInserted', addHoverOverHelpText, false);

// ----> Large/XL Form Factor <----
window.addEventListener('DOMContentLoaded', addHoverOverHelpText);

// ----> Display Hyperlink for link in message <----
var ModalWinEle = document.getElementById('pt_modals');
ModalWinEle.addEventListener('DOMNodeInserted', convertText2Link, false);

</script>
