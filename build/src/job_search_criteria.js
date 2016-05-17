/*================================*\
|*     __JOB_SEARCH_CRITERIA__    *|
\*================================*/
{/*Expand to see job search criteria*/
if(PAGEINFO.TYPE == PAGES.SEARCH) {
   function attachNewSearchFields(){
      $("#win0divPAGECONTAINER > .PSPAGECONTAINER").wrap("<div id='old-criteria-wrapper'>");
   var searchCSS = {
      /**
       *    The Old Job Search Criteria
       */
      '#win0divPAGECONTAINER' : {
         'position'     : 'absolute',
         'width'        : '100%',
         'left'         : '0',
         'padding'      : '0 50px',
         '-moz-box-sizing' : 'border-box',
         'box-sizing' : 'border-box',
         '-webkit-box-sizing' : 'border-box',
         'top'          : '-5000px',
      },
      "#PSTAB" : {
         'display'      : 'none',
      },  
      '#old-criteria-wrapper' : {
         'width'        : '733px',
         'margin'       : '0 auto',
         "position"     : 'relative',
      },
      '#old-criteria-wrapper table' : {
         'max-width'    : '100px',
      },
      '#old-criteria-wrapper table.PSLEVEL1GRIDWBO' : {
         'display'    : 'none !important',
      },
      // The job level
      "#UW_CO_JOBSRCH_UW_CO_COOP_JR,\
       #UW_CO_JOBSRCH_UW_CO_COOP_INT,\
       #UW_CO_JOBSRCH_UW_CO_COOP_SR,\
       #UW_CO_JOBSRCH_UW_CO_BACHELOR,\
       #UW_CO_JOBSRCH_UW_CO_MASTERS,\
       #UW_CO_JOBSRCH_UW_CO_PHD" : {
         'position'     :  'absolute',
         'left'         :  '15px',
         'top'          :  '5368px',
         'z-index'      :  '2',
         "-webkit-transition": "opacity 1s, top 1s",
         "-moz-transition": "opacity 1s, top 1s",
      },
      '#UW_CO_JOBSRCH_UW_CO_COOP_INT' : {
         'left'         :  '140px',
      },
      '#UW_CO_JOBSRCH_UW_CO_COOP_SR' : {
         'left'         :  '280px',
      },
      '#UW_CO_JOBSRCH_UW_CO_BACHELOR' : {
         'left'         :  '405px',
      },
      '#UW_CO_JOBSRCH_UW_CO_MASTERS' : {
         'left'         :  '530px',
      },
      '#UW_CO_JOBSRCH_UW_CO_PHD' : {
         'left'         :  '650px',
      },
      // Animate
      ".closed #UW_CO_JOBSRCH_UW_CO_COOP_JR,\
       .closed #UW_CO_JOBSRCH_UW_CO_COOP_INT,\
       .closed #UW_CO_JOBSRCH_UW_CO_COOP_SR,\
       .closed #UW_CO_JOBSRCH_UW_CO_BACHELOR,\
       .closed #UW_CO_JOBSRCH_UW_CO_MASTERS,\
       .closed #UW_CO_JOBSRCH_UW_CO_PHD" : {
         'top'          :  '5108px',
         'opacity'      :  '0',
         'pointer-events': 'none',
      },
      // Field Dropdowns 
      "#UW_CO_JOBSRCH_UW_CO_ADV_DISCP1,\
       #UW_CO_JOBSRCH_UW_CO_ADV_DISCP2,\
       #UW_CO_JOBSRCH_UW_CO_ADV_DISCP3" : {
         'position'     :  'absolute',
         'top'          :  '0',
         'left'         :  '16px',
         'z-index'      :  '2',
         'top'          :  '5182px',
         "font-size"    :  "12px",
         margin         :  "0 4px",
         'width'        :  '225px !important',
         "-webkit-transition": "top 1s",
         "-moz-transition": "top 1s",
      },
      '#UW_CO_JOBSRCH_UW_CO_ADV_DISCP2' : {
         'left'         :  '250px',
      },
      '#UW_CO_JOBSRCH_UW_CO_ADV_DISCP3' : {
         'left'         :  '484px',
      },
      // Animate
      ".closed #UW_CO_JOBSRCH_UW_CO_ADV_DISCP1,\
       .closed #UW_CO_JOBSRCH_UW_CO_ADV_DISCP2,\
       .closed #UW_CO_JOBSRCH_UW_CO_ADV_DISCP3" : {
         'top'          :  '4922px',
         'pointer-events': 'none',
      },
 
      /**
       *    Job Search Page
       */
      "#jbmnplsSearchCriteria div.header" : {
         width          :  "100%",
         background     :  "#444",
         height         :  "25px",
         overflow       :  "hidden",
         "margin-bottom":  "5px",
         "font-size"    :  "14px",
      },
      "#jbmnplsSearchCriteria div.header:first-child" : {
         'margin-bottom': '36px',
      },
      "#jbmnplsSearchCriteria div.header span.name" : {
         "display"      :  "inline-block",
         color          :  "white",
         margin         :  "3px 4px 0px",
      },
      "#jbmnplsSearchCriteria div.fields" : {
         "margin-bottom":  "15px",
      },
      "#jbmnplsSearchCriteria div.fields label" : {
         "font-size"    :  "13px",
         "top"          :  "-2px",
         "position"     :  "relative",
         'margin-left'  :  '20px',
      },
      "#jbmnplsSearchCriteria div.fields input,#jbmnplsSearchCriteria div.fields select" : {
         "font-size"    :  "12px",
         margin         :  "0 4px",
      },
      "#jbmnplsSearchCriteria div.fields input[type='input'],#jbmnplsSearchCriteria div.fields input[type='input'].empty" : {
         "border"       :  "1px solid #999",
         "border-radius":  "2px",
         "-moz-border-radius":  "2px",
         padding        :  "2px",
      },
      "#jbmnplsSearchCriteria div.fields input:focus[type='input'],#jbmnplsSearchCriteria div.fields input[type='input']:hover" : {
         "border-color" :  "#7297dc",
      },
      "#jbmnplsSearchCriteria div.fields input#jbmnplsEmployer" : {
         background     :  "no-repeat 5px -500% url('"+IMAGES.EMPLOYER_NAME+"')",
      },
      "#jbmnplsSearchCriteria div.fields input#jbmnplsJobTitle" : {
         background     :  "no-repeat 5px -500% url('"+IMAGES.JOB_TITLE+"')",
      },
      "#jbmnplsSearchCriteria div.fields input.empty" : {
         "background-position" : "5px center !important",
      },
      "#jbmnplsSearchCriteria div.fields input.error,#jbmnplsSearchCriteria div.fields select.error" : {
         border         :  "red 1px solid",
      },
      "#jbmnplsSearchCriteria div.fields select option" : {
         "font-size"    :  "12px",
      },
      "#jbmnplsSearchCriteria #jbmnplsSearchBtn" : {
         height         :  "75px",
         "font-family"  :  "Verdana, Arial",
         "font-size"    :  "30px",
      },
      "#jbmnplsSearchCriteria *" : {
         "font-family"  :  "Verdana, Arial",
      },
      "#jbmnplsSearchCriteria" : {
         margin         :  "0 auto 50px",
         width          :  "700px",
         padding        :  "15px",
         //border         :  "3px solid #222",
         "-moz-border-radius":  "20px",
         "border-radius":  "20px",
         "box-shadow"   :  "0 0 7px black",
         "-moz-box-shadow"   :  "0 0 7px black",
         "position"     :  "relative",
         "overflow"     :  "hidden",
         "height"       :  "350px",
         "-webkit-transition-duration" :  "1s",
         "-webkit-transition-property" :  "height",
         "-moz-transition-property" :  "height",
         "-moz-transition-duration" :  "1s",
      },
      "#jbmnplsSearchCriteria.closed" : {
         "height"       :  "90px",
      },
      "#jbmnplsSearchWrapper" : {
         "bottom"       :  "0",
         "position"     :  "absolute",
         "width"        :  "inherit",
         "z-index"      :  "1",
      },
      "#jbmnplsSearchCriteria #jbmnplsCloser" : {
         "position"     :  "absolute",
         "text-align"   :  "right",
         "padding-top"  :  "7px",
         "top"          :  "0",
         "width"        :  "inherit",
         "height"       :  "20px",
         "background"   :  "white",
         "z-index"      :  "2",
      },
      "#jbmnplsSearchCriteria #jbmnplsCloser span.fakeLink" : {
         "font-size"    :  "12px",
         "color"        :  "#555",
      },
      "#jbmnplsSearchCriteria #jbmnplsCloser span.fakeLink:hover" : {
         "color"        :  "#999",
      },
   };
   appendCSS(searchCSS);

   BRIDGE.registerFunction('toggleOpen', function(){
      var els = $("#UW_CO_JOBSRCH_UW_CO_ADV_DISCP1,\
       #UW_CO_JOBSRCH_UW_CO_ADV_DISCP2,\
       #UW_CO_JOBSRCH_UW_CO_ADV_DISCP3");
      var obj = $('#jbmnplsSearchCriteria, #old-criteria-wrapper');
      if (obj.hasClass("closed")) {
         obj.removeClass("closed");
         els.delay(550).fadeIn(400);
      } else {
         obj.addClass("closed");
         els.fadeOut(200).delay(500);
      }
   });
   
   var filter = $("#UW_CO_JOBSRCH_UW_CO_JS_JOBSTATUS").html();
   
   var html = '<div id="jbmnplsSearchCriteria"><div class="field" style="position:absolute;top:6px;font-size:12px;z-index:3;color:#222;"><input type="checkbox" '+(PREF.load("SETTINGS_PAGES_SEARCH_CLOSE", null, false)?"checked":"")+' id="jbmnplsDontCloseSearch"><label style="position:relative;top:-2px;" for="jbmnplsDontCloseSearch">Do not close when searching</label></div><div id="jbmnplsCloser" class="field"><span class="fakeLink noselect" onclick="toggleOpen();">Click to hide/show</span></div><div id="jbmnplsSearchWrapper"><div class="header"><span class="name" style="width:100%; text-align:center;">Disciplines</span></div><div class="fields"><!-- THEY USED TO BE HERE --></div><div class="header"><span class="name" style="width:21%; text-align:center;" title="Required field">Term*</span><span class="name" style="width:35%; text-align:center;"> Location</span><span class="name" style="width:19%; text-align:center;" title="Required field">Job Search Filter*</span><span class="name" style="width:19%; text-align:center;" title="Required field">Job Type*</span></div><div class="fields"><select onchange="var obj=document.getElementById(\'UW_CO_JOBSRCH_UW_CO_WT_SESSION\');addchg_win0(obj);obj.value=this.value;" style="width:21%" class="required" id="jbmnplsTerm"><option value="">Select a term</option></select><select style="width:35%" id="jbmnplsLocation" title="Jobmine will ONLY allow you to choose these places!"><option value="0">All locations</option></select><select class="required" style="width:19%" id="jbmnplsJobFilter" name="UW_CO_JOBSRCH_UW_CO_JS_JOBSTATUS"><option value="">Select a job filter</option>'+filter+'</select><select onchange="if(this.value!=\'\'){document.getElementById(this.value).checked=true;submitAction_win0(this.form,\'TYPE_COOP\');}" class="required" style="width:19%" id="jbmnplsJobType"><option value="">Select a job type</option><option value="TYPE_COOP">Co-op</option><option value="TYPE_ARCH">Co-op ARCH</option><option value="TYPE_CA">Co-op CA</option><option value="TYPE_TEACH">Co-op TEACH</option><option value="TYPE_PHARM">Co-op PHARM</option><option value="TYPE_UAE">Co-op UAE</option><option value="TYPE_ALUM">Alumni</option><option value="TYPE_GRAD">Graduating</option><option value="TYPE_PART_TIME">Other</option><option value="TYPE_SUMMER">Summer </option></select></div><div class="header"><span class="name" style="width:48.5%; text-align:center;">Employer\'s Name</span><span class="name" style="width:48.5%; text-align:center;">Job Title</span></div><div class="fields"><input type="input"  name="UW_CO_JOBSRCH_UW_CO_EMPLYR_NAME" style="width:48.5%" id="jbmnplsEmployer" onblur="if(this.value==&quot;&quot;){this.className=&quot;empty&quot;;}" onfocus="if(this.className==&quot;empty&quot;){this.value=&quot;&quot;;this.className=&quot;&quot;;}" class="empty"><input name="UW_CO_JOBSRCH_UW_CO_JOB_TITLE" type="input" style="width:48.5%" id="jbmnplsJobTitle" onblur="if(this.value==&quot;&quot;){this.className=&quot;empty&quot;;}" onfocus="if(this.className==&quot;empty&quot;){this.value=&quot;&quot;;this.className=&quot;&quot;;}" class="empty"></div><div class="header"><span class="name" style="width:100%; text-align:center;">Job Level</span></div><div class="fields"><div style="width:18%;float:left;" class="chkbxGroup"><label for="UW_CO_JOBSRCH_UW_CO_COOP_JR">Junior</label></div><div style="width:20%;float:left;" class="chkbxGroup"><label for="UW_CO_JOBSRCH_UW_CO_COOP_INT">Intermediate</label></div><div style="width:18%;float:left;" class="chkbxGroup"><label for="UW_CO_JOBSRCH_UW_CO_COOP_SR">Senior</label></div><div style="width:18%;float:left;" class="chkbxGroup"><label for="UW_CO_JOBSRCH_UW_CO_BACHELOR">Bachelors</label></div><div style="width:17%;float:left;" class="chkbxGroup"><label for="UW_CO_JOBSRCH_UW_CO_MASTERS">Masters</label></div><div style="width:auto;float:left;" class="chkbxGroup"><label for="UW_CO_JOBSRCH_UW_CO_PHD">Ph.D.</label></div></div><div class="fields"><br><button  style="width:100%" id="jbmnplsSearchBtn">SEARCH</button></div></div></div>';
   $("body > form:eq(0)").prepend(html);
   
   /**
    *    Fill in fields that have values in them already
    */
   //Job Type
   JOBQUEUE.addJob(new Job('submitAction_win0(document.win0,"TYPE_COOP");'));
   //Envoke this because we need to...
   $("#jbmnplsJobType").val( $("#ACE_UW_CO_JOBSRCH_UW_CO_JOB_TYPE input:checked").attr("id") );   //submitAction_win0(this.form,this.id); <<---- to see if we can take it, run this
   
   //Location
   JOBQUEUE.addJob(new Job( $(UTIL.getID("UW_CO_JOBSRCH_UW_CO_LOCATION$prompt")).attr("href").getTextBetween(":",";") ));
   
   //Get the term dropdown finished
   var nowTerm = UTIL.getID('UW_CO_JOBSRCH_UW_CO_WT_SESSION').value;
   var termHTML = "";      
   var date = new Date();
   var startYear = date.getMonth() < 4 ? date.getFullYear()-1 : date.getFullYear();
   for(var y=startYear; y<startYear+2; y++) {
      var m = 0;
      for(var i=0; i<3; i++) {
         var year = y;
         var name = '';
         switch(i) {
            case 0: name="Spring&nbsp;";  break;
            case 1: name="Fall&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";    break;
            case 2: name="Winter";year++;  break;
         }
         m = i*4;
         var term = getPredictedTerm(m,y);
         termHTML += "<option "+(term==nowTerm?"selected='selected' ":"")+"value='"+term+"'>"+name+" "+year+" ("+term+")</option>\n";
      }
   }
   $("#jbmnplsTerm").append(termHTML);
   
   //Place the input fields in
   var input = UTIL.getID("UW_CO_JOBSRCH_UW_CO_EMPLYR_NAME");
   if(!input.value.empty()) {$("#jbmnplsEmployer").attr("value", input.value).removeClass("empty");}
   input = UTIL.getID("UW_CO_JOBSRCH_UW_CO_JOB_TITLE");
   if(!input.value.empty()) {$("#jbmnplsJobTitle").attr("value", input.value).removeClass("empty");}
   
   //Events
   $("#jbmnplsDontCloseSearch").change(function(){
      PREF.save("SETTINGS_PAGES_SEARCH_CLOSE", this.checked);
   });
   $("#jbmnplsSearchBtn").mousedown(function(e){
      if (e.which != 1) { return; }    // Only allow left click
      var wrapper = $(this.parentNode.parentNode);
      var error = false;
      wrapper.find("input.required, select.required").each(function(){
         var obj = $(this);
         if (this.value == "") {
            obj.addClass("error");
            error = true;
         } else {
            obj.removeClass("error");
         }
      });
      if (error) {
         alert("The fields with the red borders must be filled out or selected with a value!");
      } else {
         //Validation is done, everything is good
         showPopup(false, "Please wait while Jobmine receives the search results.<br/><br/><img src='"+IMAGES.LARGE_LOADING+"'/>", "Search is in Progress",550);
         //Close it if wanted
         if(!UTIL.getID("jbmnplsDontCloseSearch").checked) {
            var els = $("#UW_CO_JOBSRCH_UW_CO_ADV_DISCP1,\
                        #UW_CO_JOBSRCH_UW_CO_ADV_DISCP2,\
                        #UW_CO_JOBSRCH_UW_CO_ADV_DISCP3");
            var obj = $('#jbmnplsSearchCriteria, #old-criteria-wrapper');
            obj.addClass("closed");
            els.fadeOut(200).delay(500);
         }
         //Location
         var selectedIndex = UTIL.getID("jbmnplsLocation").value;
         UTIL.getID("UW_CO_JOBSRCH_UW_CO_LOCATION").value = (selectedIndex>0? $("#jbmnplsLocation option").eq(selectedIndex).text() : "");
        
         //Finish off by searching
         BRIDGE.run(function(){
            submitAction_win0(document.win0,'UW_CO_JOBSRCHDW_UW_CO_DW_SRCHBTN', 0, 0, 'Search', false, true);
         });
      }
   });
   }
   
   //Autosearches the form; you however need to run 2 ajax requests before this runs so it is kind of inconvienent
   function tryInvokeAutoSearchOnce () {
      if(window.searchCounter == null) {
         window.searchCounter = 1;
      } else {
         window.searchCounter++;
      }
      if(window.searchCounter == 2) {
         if(PREF.load("SETTINGS_PAGES_AUTO_SEARCH", null, false)) {
            $("#jbmnplsSearchBtn").mousedown();
            tryInvokeAutoSearchOnce = null;     //Never run this again
            delete window.searchCounter;
         }
      }
   }
}
}
