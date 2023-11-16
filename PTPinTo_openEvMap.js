var ANU_PTPinTo = {

    openEvMap : function(loc) {
    
        //alert(top.location.href);
        var cUrl = top.location.href;
        var urlParts = cUrl.split('/');
        var cntTyp = urlParts[7];
        var mnuCmp = urlParts[8];

        if (mnuCmp.indexOf('?') > 0)
            mnuCmp = mnuCmp.substring(0,mnuCmp.indexOf('?'));
        //alert(cntTyp + ' - ' + mnuCmp);
    
        if (cntTyp === 'c') {
            var evMapCntURI = '%ContentReference(EMPLOYEE, PT_EVENT_MAPPING_CONFIGURATION, psp)';
            var evUrlPrts = evMapCntURI.split('/');

            if (evUrlPrts[4].indexOf('_') > 0)
                evUrlPrts[4] = evUrlPrts[4].substring(0,evUrlPrts[4].indexOf('_'));
            evUrlPrts[4]=  evUrlPrts[4] + '_newwin';
            evMapCntURI = evUrlPrts.join("/");
            
            evMapCntURI = evMapCntURI + '?crefAttrib=' + mnuCmp;
            // window.open('https://www.google.com','_blank');
            window.open(evMapCntURI,'_blank');
        } else {
            alert('Event Mapping not supported for this content type !');
        }
    
        }
    
    }
