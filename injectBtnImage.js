<script type="text/javascript">

function injectBtnImage()
{
  var btnField = document.getElementById("FILTER_POPUP$PIMG");
  var btnFieldImg = document.getElementById("FILTER_CUSTM_IMG");

  if (btnFieldImg == null) 
  {
    var imgEle = document.createElement("IMG");
    imgEle.setAttribute("class","ps-img");
    imgEle.setAttribute("src","%Image(PS_GRID_FILTER_S_FL)");
    imgEle.setAttribute("id","FILTER_CUSTM_IMG");
    imgEle.setAttribute("name","FILTER_CUSTM_IMG");
    imgEle.setAttribute("alt","Filter Rows");

    btnField.insertBefore(imgEle, btnField.firstChild);
  }
  
  if (btnField.href.indexOf('injectBtnImage(') == -1)
      btnField.href += " injectBtnImage();";

  setTimeout(injectBtnImage, 500);

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


//addLoadEvent(injectBtnImage);

injectBtnImage();

</script>
