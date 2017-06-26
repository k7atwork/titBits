-----------------------------------------------
Application Package Method
-----------------------------------------------

method prepareModalWinScript
   
   Local array of string &URI = Split(%Request.ContentURI, "/");
   
   Local string &siteName = &URI [&URI.Len];
   
   Local array of string &siteName_split = Split(&siteName, "_");
   
   Local string &instance = "0";
   
   If &siteName_split.Len > 1 Then
      &instance = &siteName_split [&siteName_split.Len];

      try
         If Value(&instance) > 0 Then
            /* do nothing, just Ignore */
         End-If;
      catch Exception &ex
         &instance = "0";
      end-try;
         
   End-If;
   
   G_FORM_VFWA_WRK.HRS_HTMLAREA.Value = GetHTMLText(HTML.VFWA_WELCOME_MSG_MODAL_SCRIPT, &instance);
   
end-method;

-----------------------------------------------
HTML Definition- VFWA_WELCOME_MSG_MODAL_SCRIPT
-----------------------------------------------

<script type="text/javascript">

  var editfield = document.getElementById("win%Bind(:1)divG_FORM_VFWA_WRK_HRS_WELCOME_DISPLY");
  
  if (editfield !== null)
  {
   editfield.style.visibility = 'hidden';
  }
  
  submitAction_win%Bind(:1)(document.win%Bind(:1),'G_FORM_VFWA_WRK_HRS_WELCOME_DISPLY', window.event);

</script>

-----------------------------------------------
G_FORM_VFWA_WRK.HRS_WELCOME_DISPLY FieldChange
-----------------------------------------------

DoModalS(Page.VFWA_WELCOME_SP, " ", 600, 500, 0);
