<script type="text/javascript">
<!--
    var count = 0;
    var skip = 0;

    var editfield = document.getElementById("G_FORM_VFWA_WS_SCHED_HRS$" + count);
    
    if (editfield !== null)
    {
      do
      {
         if (editfield !== null)
         {
         editfield.setAttribute("placeholder","0.00");
         }
         
         count++;
         editfield=document.getElementById("G_FORM_VFWA_WS_SCHED_HRS$" + count);

         if (editfield === null)
         {
             skip++;
         }

     } while(skip < 3);	
    
    }

submitAction_win0(document.win0,"G_FORM_VFWA_WRK_PTP_TOTAL_TIME",event);

//--> 
</script>
