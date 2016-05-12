/*================================*\
|*       __AJAX_FUNCTIONS__       *|
\*================================*/
{/*Expand to see ajax functions*/

function initAjaxCapture() {
   BRIDGE.registerFunction("ajaxComplete", ajaxComplete);
   BRIDGE.addJS(function(){
      net2.ContentLoader.prototype.onReadyState = function() {
         //Some functions
         var obj = this;
         function allowResubmit(){
            obj.form.ICResubmit.value = "0";
            nResubmit = 0;
            obj.SetInProcess(false); 
         }
         Array.prototype.last = function(){
            if (this.length == 0) {return null;}
            return this[this.length-1];
         }
         var req = this.req;
         var dataArrayAsString = null;
         var name = this.name;
         //Loaded
         if (req.readyState == 4 && req.status == 200) {
            //Call our function when xmlhttprequest is finished
            var url = null;
            var text = req.responseText;
            var popupOccurs = false;
            if(name.indexOf("hexcel") != -1) { 
               try{
                  var start = text.indexOf(";window.open('"+commonURL+"?cmd=viewattach&userfile=ps.xls") + 14;
                  url = text.substring(start, text.indexOf("',", start));
                  allowResubmit();
                  text = null;
               }catch(e){alert("Excel stuff is broken: "+e);}
            /*} else if(name.indexOf("UW_CO_APPLY_HL") != -1 && document.title == "Student Interviews"){    //Not releasing for first release
                  url = req.responseText.match(/document.location='([^(';)]+)/).last();
                  allowResubmit();*/
            } else if (name=="UW_CO_JOBSRCH_UW_CO_LOCATION$prompt") {
               allowResubmit();
               dataArrayAsString = [];
               text.replace(/;">([^<]+)<\/a/gim, function(a,b){dataArrayAsString.push(b);});
            } else if (name === "UW_CO_PDF_LINKS_UW_CO_MARKS_VIEW"
                     ||name === "UW_CO_PDF_LINKS_UW_CO_WHIST_VIEW"
                     ||name.indexOf("UW_CO_PDF_LINKS_UW_CO_PACKAGE_VIEW") == 0
                     ||name.indexOf("UW_CO_PDF_LINKS_UW_CO_DOC_VIEW") == 0) {
                  // Handle pdf's going new tab
                  var end, start;
                  start = text.indexOf("window.open('");
                  if (start === -1) {
                     start = text.indexOf('window.open("');
                     if (start === -1) {
                        showMessage("Failed to retrieve PDF, please report at {{ email }}.");
                        this.bInProcess = false;
                        return;
                     }
                     start += ("window.open('").length;
                     end = text.indexOf('"', start);
                  } else {
                     start += ("window.open('").length
                     end = text.indexOf("'", start);
                  }
                  url = text.substring(start, end);
                  name = "documents-pdf-download";
                  this.bInProcess = false;
            } else if (name == "UW_CO_APPDOCWRK_UW_CO_DOC_NUM") {
               var findStart = "id='UW_CO_STU_DOCS_UW_CO_DOC_DESC'>",
                   findEnd = "</span>",
                   start = text.indexOf(findStart);
               if (start != -1) {
                  start += findStart.length;
                  var end = text.indexOf(findEnd, start);
                  var resumeName = text.substring(start, end);
                  dataArrayAsString = [];
                  dataArrayAsString.push(resumeName);
                  this.onload.call(this);
               }
            } else if (name == "UW_CO_APPWRK_UW_CO_CONFIRM_APP") {
               // Checks to see if the application really is submitted or not
               if (text.indexOf('Your application has been submitted.') >= 0) {
                  dataArrayAsString = [];
                  dataArrayAsString.push(true);
               }
               this.onload.call(this);
			} else if (name.indexOf("UW_CO_JOBTITLE_HL$") != -1) {		// Does nothing with the request
				allowResubmit();										// need this because it will fix random errors on search
            } else {
               //Run and parse
               if(name == "TYPE_COOP") {
                  popupOccurs = text.indexOf("popupText") != -1;
               }
               this.onload.call(this);
            }
            ajaxComplete(name, url, popupOccurs, dataArrayAsString);
         }
      }
      //Override to remove usless popup
      net2.ContentLoader.prototype.finalCall = function() {
         var shouldShowPopup = this.name.indexOf("UW_CO_SLIST_HL$") != 0 && this.name != "UW_CO_JOBSRCHDW_UW_CO_DW_SRCHBTN";
         net2.arrSrcScript=new Array();net2.nScriptfiles=0;net2.nScriptfileIndex=0;if(net2.bScript){var n=net2.arrScript.length;for(var xx=0;xx<n;xx++){if(net2.arrScript[xx])this.addScript(id+"_"+xx,net2.arrScript[xx]);}net2.arrScript=new Array();net2.bScript=false;}if(net2.OnloadScriptList&&net2.OnloadScriptList.length>0){for(var i=0;i<net2.OnloadScriptList.length;i++){var script=net2.OnloadScriptList[i].firstChild.data;if(!shouldShowPopup){script=script.replace(/self\.scroll[^;]+;/mi,"");script=script.replace(/setFocus_win0[^;]+;/mi,"");}eval(script);}}net2.OnloadScriptList="";if(net2.msgList&&net2.msgList.length>0){this.SetInProcess(false);this.SetWaitingObject(null,"",null,false,false);if(shouldShowPopup){MOpopupObj_win0.ShowPopup();}}if(shouldShowPopup){MOpopupObj_win0.StopPopup();}this.SetInProcess(false);if(ptGridObj_win0){ptGridObj_win0.restoreScrollPos();}if(this.bPrompt){promptFieldName=this.name;}if(ptRC.isEnabled()&&(!this.bPrompt)&&(promptFieldName.length>0)){window.top.ptRC2.refreshRCOnChangeIfNeeded(promptFieldName);promptFieldName="";}if(ptRC2.isEnabled()&&!this.bPrompt){window.top.ptRC2.onAddChangeEvent();}ptCommonObj.generateABNSearchResults();if(this.GetWaitingICAction()!=""){var objWaiting=this.GetWaitingObject();this.SetWaitingObject(null,"",null,false,false);aAction0_win0(objWaiting.v,objWaiting.w,objWaiting.x,objWaiting.y,objWaiting.z);}
      }
      
   }, {commonURL: CONSTANTS.PAGESIMILAR});
}

function ajaxComplete(name, url, popupOccurs, dataArrayAsString) {  
   //Nothing is running, dont do anything
   var item = JOBQUEUE.getCurrentItem();
   var jobFinished = false;
   var isSaving = name == "#ICSave";
   var whitePopupShown = isPopupShown(false);

   //Handle Excel exporting
   if(name.contains("$hexcel$") && url != null) {
      $("#slave").attr("src", url+"&jbmnpls=ignore").one("load", function(){
         showMessage("Download is ready.");
         //5 sec timeout so that the iframe goes back to nothing
         setTimeout(function(){
            UTIL.getID("slave").src = LINKS.BLANK;
         },5000);
      });
      return;
   } else if (name === "documents-pdf-download") {
      $.get(url, function(data){
         var end, start = data.indexOf("url=");
         if (start != -1) {
            start += ("url=").length;
            end = data.indexOf(".pdf", start) + 4;
            if (end !== -1) {
               var pdfUrl = data.substring(start, end);
               window.open(pdfUrl);
               showMessage("PDF is ready for viewing.");
               return;
            }
         }
         showMessage("Failed to retrieve PDF, please report at {{ email }}.");
      });
      return;
   } else if (name == "UW_CO_APPDOCWRK_UW_CO_DOC_NUM") {
      if (dataArrayAsString && !dataArrayAsString.empty()) {
         var resumeName = dataArrayAsString[0];
         if (resumeName == "&nbsp;") {
            resumeName = "<span style='color:red'>Please select/upload a resume.</span>";
            $("#view-resume").hide();
         } else {
            $("#view-resume").show();
         }
         $('#resume-name').html(resumeName);
      }
   }
   switch(PAGEINFO.TYPE) {
     /* case PAGES.INTERVIEWS:      //Not to release in First release
         //FIX THIS
         if (name.contains("UW_CO_APPLY_HL")) {
            showPopup(true, "<div class='instructions block'>Please select an interview time</div>", "Interview Schedule", 500, null, null, url);
            //iframeRunFunction(UTIL.getID("jbmnplsPopupFrame"))
         }
         break;*/
      case PAGES.DOCUMENTS: 
         var didSomething = false;
         if (isSaving) {
            showMessage("Successfully saved the resume name.");
            didSomething = true;
         } else if (name.startsWith('UW_CO_PDF_WRK_UW_CO_DOC_DELETE$')) {
            showMessage("Successfully deleted the resume.");
            didSomething = true;
         }
         if (didSomething) {
            // After saving resumes, we put them into storage for later
            var query = "";
            for (var i = 0; i < 3; i++) {
               var obj = UTIL.getID("UW_CO_STU_DOCS_UW_CO_DOC_DESC$" + i);
               if (obj) {
                  query += obj.value.replaceHTMLCodes() + CONSTANTS.RESUME_DELIMITOR1;
                  query += (UTIL.getID("UW_CO_PDF_LINKS_UW_CO_DOC_VIEW$" + i)?"1":"0") + CONSTANTS.RESUME_DELIMITOR2;
               } else {
                  break;
               }
            }
            query = query.substring(0, query.lastIndexOf(CONSTANTS.RESUME_DELIMITOR2));
            PREF.save("RESUMES", query);
         }
         break;
      case PAGES.APPLY:
         // Apply the default interface things for submit application
         fixApplyInterface();
         
         // After submit button was pressed
         if (name === "UW_CO_APPWRK_UW_CO_CONFIRM_APP") {
            if (dataArrayAsString && !dataArrayAsString.empty() && dataArrayAsString[0]) {
               BRIDGE.run(function(){
                  window.parent.finishApplying();
               });
            } else {
               $("#resume-name").html("<span style='color:red'>Please select/upload a resume.</span>");
               $("#view-resume").hide();
               showMessage("Failed to submit application.");
            }
         }
         break;
      case PAGES.SEARCH:
         //Clicked search button
         var table = TABLES[0];        //Results table
         if(   name == "UW_CO_JOBSRCHDW_UW_CO_DW_SRCHBTN"      //Search button
            || name.startsWith("UW_CO_JOBRES_VW$hviewall$")    //View all/view 25
            || name.startsWith("UW_CO_JOBRES_VW$hdown$")       //Next button
            || name.startsWith("UW_CO_JOBRES_VW$hend$")        //Last button
            || name.startsWith("UW_CO_JOBRES_VW$hup$")         //Previous button
            || name.startsWith("UW_CO_JOBRES_VW$htop$")        //First button
         ) {
            table.update().setLoading(false);
            $("#jbmnpls_total_job").text(table.jobLength);
            hidePopup();
         } else if(name == "TYPE_COOP") {
            var type = $("#jbmnplsJobType");
            if(popupOccurs) { 
               type.val(type.attr("lastValue"));      //Failed to set, place the selected index to the old one
            } else {
               type.attr("lastValue", type.val());    //If success, set the last index to this index
            }
            if(tryInvokeAutoSearchOnce){tryInvokeAutoSearchOnce();}
            jobFinished = true;
         } else if(name.startsWith("UW_CO_SLIST_HL$")) {
            showMessage("Added job to shortlist.",3);
            $("#jbmnplsResults").removeClass("disable-links");
            var $shortlistedEL = table.jInstance.find("tr td .loading");
            
	    // The whole .loading thing wasnt working, dunno why so I removed it and based it on last clicked row
            // Change the status of the shortlist on the table
            if ($shortlistedEL.exists()) {
		//$shortlistedEL.removeClass("loading");
		//var $parent = $shortlistedEL.parent()
                $shortlistedEL.find("td").eq(0).text("Shortlisted");
                $shortlistedEL.find("td").eq(8).html("On Short List");
		table.updateTable();
            } else {
		alert(":(   There was an error in shortlisting, please email <insert your developer's email here> about this!");
            }
         } else if(dataArrayAsString != null && name == "UW_CO_JOBSRCH_UW_CO_LOCATION$prompt") {
            //Fills the location dropdown
            var options = "";
            var selectedPlace = UTIL.getID("UW_CO_JOBSRCH_UW_CO_LOCATION").value;
            for(var i=0; i<dataArrayAsString.length;i++) {
               var place = dataArrayAsString[i];
               options += "<option "+(selectedPlace==place?"selected='selected' ":"")+"value='"+(i+1)+"'>"+place+"</option>";
            }
            $("#jbmnplsLocation").append(options);
            if(tryInvokeAutoSearchOnce){tryInvokeAutoSearchOnce();}
            jobFinished = true;
         }
         break;
      case PAGES.RANKINGS:
         if (isSaving) {
            showMessage("Rankings are saved.");
         }
         break;
      //Deleting shortlists
      case PAGES.APPLICATIONS:
      case PAGES.LIST:
      try{
         if (name.contains("$delete$")) {
            if (whitePopupShown) {
               setTitle("Saving...");
               showPopup(false, "Deleting all the short listed jobs.<br/>Saving...<br/><span style='color:red;'>DO NOT REFRESH!</span><br/><br/><img src='"+IMAGES.LARGE_LOADING+"'/>");
            }
            if(!whitePopupShown || (whitePopupShown && item.isEmpty())) {
               BRIDGE.run(function(){
                  setSaveText_win0('Saving...');
                  submitAction_win0(document.win0, '#ICSave');
               });
            } else {
               //Run the next job
               var length = item.copyList.length;
               var progress = (length-item.list.length+1)+"/"+length;
               setTitle("Deleting: "+progress);
               showPopup(false, "Deleting all the short listed jobs.<br/>Progress: "+progress+"<br/><span style='color:blue;'>You can cancel by refreshing.</span><br/><br/><img src='"+IMAGES.LARGE_LOADING+"'/>");
               jobFinished = true;
            }
         } else if (isSaving) {
            //Popup up for deleting multiple checkboxes
            if (whitePopupShown) {
               //Finished saving and deleting checkboxes    
               var tableObj = TABLES[TABLES.length-1];      //Last table
               tableObj.deleteRowRange(item.copyList);
               if (PAGEINFO.TYPE == PAGES.APPLICATIONS) {
                  TABLES[0].deleteRowRange(item.copyList);     //Active Table
                  setTitle("Applications");
               } else {
                  setTitle("Job Short List");
               }
               hidePopup();
               jobFinished = true;
            } else {
               if (item != null && !TABLES.empty()) {
                  //Delete the row and reorganize
                  var deletedRowNumber = JOBQUEUE.number;
                  var tableObj = TABLES[TABLES.length-1];      //Last table
                  //Clean up
                  var deleteObjs = tableObj.jInstance.find("tbody div.delete");
                  deleteObjs.removeAttr("disabled");
                  //Special operations for applications to mirror table rows
                  if (PAGEINFO.TYPE == PAGES.APPLICATIONS) {
                     //Delete the job listed in the all applications table when it is deleted
                     var id = $("#row_"+tableObj.cname+"_"+deletedRowNumber).children(":first").plainText();
                     var activeTable = TABLES[0];     //Active table
                     var rowToDelete = $("#"+activeTable.tableID+" tbody td:contains('"+id+"')").parent().attr("row");
                     activeTable.deleteRow(rowToDelete);
                     increaseActiveStatusValue(-1);
                  }
                  tableObj.deleteRow(deletedRowNumber);
                  jobFinished = true;
               }
            }
            showMessage("Sucessfully deleted the job(s) on your "+(PAGEINFO.TYPE==PAGES.APPLICATIONS?"applications list" : "shortlist")+".");
         } 
         }catch(e){alert(e)}
         break;
   }
   if (jobFinished) {
      if (item.isEmpty()) {   
         JOBQUEUE.queue.shift();
         //Call back when the group of things are finished
         if(JOBQUEUE.callback) {
            JOBQUEUE.callback.call(this);
         }
      }
      JOBQUEUE.isRunning = false;
      JOBQUEUE.runNextJob();
   }
}

}
