/*================================*\
|*          __FUNCTIONS__         *|
\*================================*/
{/*Expand to see all the functions*/
/**
 *    Cookies
 */
var Cookies = {
   defaultExpireDays : 30,    //1 month
   read : function(name, defaultVal) {    
      if (name == null || name == "") {
         return null;       
      }
      var units = document.cookie.split(";");
      for(var i=0; i<units.length; i++) {
         if (units[i].trim().startsWith(name)) {
            return units[i].split("=")[1];
         }
      }
      return defaultVal == null ? -1 : defaultVal;    //Returns -1 or default value if failed
   },
   set  : function(name, value, time) {
      if (time == null) {
         time = this.defaultExpireDays;
      }
      var date = new Date();
      date.setTime(date.getTime()+(time*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
      document.cookie = name+"="+value+expires+"; path=/";
   },
   remove : function(name) {
      this.set(name,"",-1);
   },
};

/**
 *    Changes the current location in the iframe to a different location
 */
function changeLocation(newURL, title, navIndex) {
   if (UTIL.idExists("jbmnplsWebpage")) {
      DEBUGGER.refresh();
      $("#jbmnplsWebpage").attr("src", newURL);
      if (title.empty()) {
         title = "Jobmine Plus";
      }
      document.title = title;
      setNavSelection(navIndex);
   }
}
function redirect(newURL) {
   if (!newURL.empty()) {
      window.location.href = newURL;
      DEBUGGER.refresh();
   }
}
function refresh(){
   window.location = window.location;
}

/**
 *    Navigation Pointer/Selection
 */
function setTitle(name){
   try{
   if(name == null) {
      return;
   }
   if (PAGEINFO.IN_IFRAME) {
      BRIDGE.run(function(){
         window.parent.document.title = name;
      }, null, {"name": name});
   } else {
      document.title = name;
   }
   }catch(e){alert(e)}
}
function setNavSelection(index) {
   if(UTIL.idExists("jbmnplsNav") && index != null) {
      unSelectNav();
      if (UTIL.isNumeric(index) && index >= 0) {
         $("#jbmnplsNav a").eq(index).addClass("selected");
      }
   }
}
function unSelectNav() {
   if(UTIL.idExists("jbmnplsNav")) {
      $("#jbmnplsNav a").removeClass("selected");
   }
}

/**
 *    Applies the header to the page
 */
function addHeader() {
   if (UTIL.idExists("jbmnplsHeader")) {return;}
   var counter = 0;
   var fname = "Matthew";
   var lname = "Ng";
   var studNum = "1234567";
   var header = "<header id='jbmnplsHeader'><div id='jbmnplsTopGroup'><div id='jbmnplsBanner' class='banner'></div><nav id='jbmnplsNav'><ul>";
   for(var item in NAVIGATION) {
      if(PAGES.isValid(item) && LINKS.hasOwnProperty(item)) {
         header += "<li><a item='"+counter+"' type='"+item+"' href='"+LINKS.HOME+"#"+item+"' realHref='"+LINKS[item]+"'>"+NAVIGATION[item]+"</a></li>";
         counter++;
      }
   }
   BRIDGE.registerFunction("showAbout", function(){
      showPopup(true, "<h1>Jobmine Plus Version "+CONSTANTS.VERSION+"</h1><br/>Hey there!<br/><br/>This is Matthew Ng the creator of Jobmine Plus. I am a System Designs Engineering Student at the University of Waterloo. I created this because Jobmine is not user friendly so this addon/extension should speed things up.<br/><br/>Feel free to email me if there are any problems, concerns or requests for future updates:<br/><a href='mailto:{{ email }}'>{{ email }}</a><br/><br/>Visit the extensions website for information and future updates:<br/><a href='{{ upload_link }}'>{{ upload_link }}</a><br/><br/>", "About Me", 400);
   });
   header += '</ul></nav><div id="uwBanner" class="banner"></div><a href="' + LINKS.ANDROID_APP + '" target="_blank" class="google_play_button"></a></div><div id="jbmnplsBottomGroup"><div id="jbmnplsStatus"><ul></ul></div><div id="jbmplsControlPanel"><span class="fakeLink" onclick="showSettings();">Settings</span> | <span onclick="showAbout();" class="fakeLink">About</span> | <a href="'+LINKS.LOGOUT+'">Logout</a></div></div></header>';
   $("body").prepend(header);
}

/**
 *    Applies the Profile nav to the page
 */
function addProfileNav() {
   if (UTIL.idExists("PSTAB")) {
      var navHTML = "<nav class='noselect' id='jbmnplsProfileNav'><ul>";
      var navigation = [
         "Profile",
         "Personal Info",
         "Academic Info",
         "Skills Inventory",
      ];
      $("#PSTAB td a").each(function(i){
         var obj = $(this);
         var link = obj.attr("href");
         if (obj.attr("href") == null) {
            navHTML += "<li style='z-index:"+i+";' class='selected navItem'><span>"+navigation[i]+"</span></li>";
         } else {
            var onclick = link.substr(link.indexOf(":")+1).trim();
            navHTML += '<li style="z-index:'+i+'" class="navItem"><span class="fakeLink" onclick="'+onclick+'">'+navigation[i]+'</span></li>';
         }
      });
      navHTML += "</ul></nav>";
      $("body form:eq(0)").append(navHTML);
   }
}

/**
 *    Popup
 */
function showPopup(isBlack, bodyText, title, width, maxHeight, onCloseFunction, iframeHref){
   var popup = $("#jbmnplsPopup");
   if (!popup.exists()) {
      $("body").append(LARGESTRINGS.POPUP);
   }
   if (isBlack == null) {isBlack = true;}
   $("body").addClass("showPopup");
   popup = $("#jbmnplsPopup");
   popup.css("display", "block");
   var content = $("#jbmnplsPopupContent");
   var body = $("#jbmnplsPopupBody");
   var node = $("#jbmnplsPopupTitle");
   var frame = $("#jbmnplsPopupFrame");
   if(title!=null){
      node.text(title);
   }
   if(node!=null) {
      node.next().html(bodyText);
   }
   if(iframeHref!=null) {
      content.addClass("iframe");
      frame.attr("src", iframeHref);
   }
   if (isBlack) {
      popup.attr("name", title.toLowerCase().underscorize());
      content.removeClass("disabled");
      node.attr("title", "I am draggable");
      if(maxHeight!=null) {
         body.css("height", maxHeight - 42*2 + "px"); //42px for header and footer
      } else {
         body.css("height", "auto");
      }
      
      //Escape events
      $(document).unbind("keydown").bind("keydown",function(e){
         switch(e.which) {
            case KEYS.ESCAPE:  
               hidePopup("cancel");   
               break;
            default:
               return;
               break;
         }
         e.preventDefault();
      });
   } else {
      node.removeAttr("title");
      content.addClass("disabled");
   }
   popup[0].className = isBlack ? "black" : "white";
   if(width!=null) {
      content.css("width", width + "px");
   }
   resetPopupPosition();
   
   if(onCloseFunction != null && UTIL.isFunction(onCloseFunction)) { 
      OBJECTS.ONPOPUPCLOSE = onCloseFunction;
   } else {
      OBJECTS.ONPOPUPCLOSE = null;
   }
}
function hidePopup(arg) {
   var popup = $("#jbmnplsPopup");
   if (popup.exists()) {
      if(OBJECTS.ONPOPUPCLOSE != null) {
         if (!OBJECTS.ONPOPUPCLOSE.call(this,arg) && arg == 'save') { 
            return;
         }
         OBJECTS.ONPOPUPCLOSE = null;
      }
      popup.css("display", "none").removeAttr("name");
      $("#jbmnplsPopupBody").empty();  //Delete the content
      $("#jbmnplsPopupFrame").attr("src", LINKS.BLANK);
      $("#jbmnplsPopupContent").removeClass("iframe")
      //Remove events
      $(document).unbind("keydown");
      //Lag time when closing window so overlay goes quickly
      setTimeout(function(){$("body").removeClass("showPopup").css("padding-right", "50px");},100);
   }
}
BRIDGE.registerFunction("hidePopup", hidePopup);
function isPopupShown(strictIsBlack){
   if (strictIsBlack==null) {strictIsBlack = false;}
   return $("#jbmnplsPopup").css("display") == "block" && (!strictIsBlack || strictIsBlack && $("#jbmnplsPopup").hasClass("black"));
}
function resetPopupPosition() {
   var content = $("#jbmnplsPopupContent");
   content.css("top", (-content.outerHeight()/2)+"px").css("left", (-content.outerWidth()/2) + "px");
}

/**
 *    Message
 */
function showMessage(msg, timeoutSeconds) {
   Assert(timeoutSeconds == null || timeoutSeconds != null && timeoutSeconds >= 3, "The timer for message was set less than 3 sec, please set it higher");
   var message = $("#jbmnplsMessage");
   if (!message.exists()) {
      $(document.body).append("<div "+(PAGEINFO.IN_IFRAME?"style='top:0;'":"")+" id='jbmnplsMessageHolder' class='message'><div id='jbmnplsMessage'><div id='jbmnplsMessageText'></div><div id='jbmnplsMessageClose' class='close'></div></div></div>");
      message = $("#jbmnplsMessage");
   }
   //Update and reset timer
   if (message.hasClass("show")) {
      clearInterval(OBJECTS.MESSAGE_TIMER);
   } else {
   //Show it now
      message.addClass("show");
      message.css("top", "-50px").animate({top: 0}, 400);
   }
   message.attr("time", timeoutSeconds == null ? CONSTANTS.MESSAGE_TIME_OUT : timeoutSeconds);
   //Set the message
   if (msg != null) {
      $("#jbmnplsMessageText").html(msg);
   }
   
   //Add the event
   $("#jbmnplsMessageClose").bind("click", closeMessage);
   
   //Set the timer
   OBJECTS.MESSAGE_TIMER = setInterval(function(){
      var obj = $("#jbmnplsMessage");
      var remaining = parseInt(obj.attr("time"));
      if (remaining <= 5) {      //Countdown
         $("#jbmnplsMessageClose").text("Dismissing in "+remaining+"s");
      }
      if (remaining <= 0) {      //Finished
         closeMessage();
      } else {
         obj.attr("time", remaining-1);
      }
   }, 1000);
}
BRIDGE.registerFunction("showMessage", showMessage);
function closeMessage() {
   var message = $("#jbmnplsMessage");
   Assert(message.exists(), "Must create the message before closing it!!");
   if (message.hasClass("show")) {
      //Destroy timer if still exists
      if (OBJECTS.MESSAGE_TIMER != null) {
         clearInterval(OBJECTS.MESSAGE_TIMER);
         OBJECTS.MESSAGE_TIMER = null;
      }
      //Fade out the close
      $("#jbmnplsMessageClose").unbind("click").fadeOut(300, function(){
         $("#jbmnplsMessageClose").css("display", "block").empty();
      });
      
      //Animate up
      message.animate({top: -50}, 600);
      
      //Clean up
      message.removeClass("show");
      message.removeAttr("time");
   }
}

/**
 *    Handles customizing tables on the page
 */
function handleCustomize(tableNum, columnNum) {
   if (tableNum == null || !UTIL.isNumeric(tableNum) || TABLES.length <= tableNum) {
      return;
   }
   var table = TABLES[tableNum];
   function onClose(name){
      switch(name) {
         case "cancel":
            //Reload the preferences, make the load value into an array
            var hidden = PREF.load("HIDDEN_HEADERS", tableNum);
            if(UTIL.isNumeric(hidden)) {  //A number
               hidden = [hidden];
            }else if(!UTIL.isArray(hidden)){    //An array in a form of string
               hidden = hidden.split(",");
            }
            table.showAllColumns();
            table.hideColumns(hidden);
            break;
         case "save": 
            PREF.save("HIDDEN_HEADERS", tableNum, table.getColumnsHidden());
            showMessage("The table's headers customization has been saved.", 5);
            return true;
            break;
      }
   }
   if (isPopupShown(true) && columnNum != null && UTIL.isNumeric(columnNum)) {
      if(table.isColumnShown(columnNum)) {
         table.hideColumns([columnNum]);
      } else {
         table.showColumns([columnNum]);
      }
   } else {
      var blockHeight = 36
      var maxHeight = blockHeight;
      var html = "<div class='customizeEntry instructions'><span class='row'>Click/check to hide columns</span></div>";
      for(var i=0; i<table.headers.length; i++) {
         var hidden = !table.isColumnShown(i);
         var name = table.headers[i];
         name = name.substring(0, name.indexOf("_"));
         name = name == "" ? "Column #"+(i+1) : name;
         if (!(name.charAt(0) == "{" && name.charAt(name.length-1))) {
            html += "<div class='customizeEntry' title='Click to hide' "+(hidden?"selected='true'":"")+"><input class='checkbox' onclick='this.parentNode.setAttribute(\"selected\",this.checked);handleCustomize("+tableNum+","+i+")' type='checkbox' "+(hidden?"checked='true'":"")+"/><span class='row' onclick='var chbx=this.previousSibling;chbx.checked = !chbx.checked;this.parentNode.setAttribute(\"selected\",chbx.checked);handleCustomize("+tableNum+","+i+")'>"+name+"<span class='hiddenMsg'>(Hidden)</span></span></div>";
            maxHeight += blockHeight;
         }
      }
      var availHeight = $(window).height()-100;     //200px of padding
      if(availHeight < maxHeight) {    
         var numOfBlocks = Math.floor(availHeight/blockHeight);
         maxHeight = numOfBlocks * blockHeight;
      }
      showPopup(true,html,"Customize",300,(42 + 42 + maxHeight),onClose);  //42px for header and footer
   }
}
BRIDGE.registerFunction("handleCustomize", handleCustomize);

/**
 *    Remove the timer
 */

function removeTimer() {
   BRIDGE.addFunction("setupTimeout");
   //BRIDGE.addFunction("displayTimeoutMsg");
   //BRIDGE.addFunction("displayTimeoutWarningMsg");
   BRIDGE.run(function(){
      if (typeof clearupTimeout === "function") {
         clearupTimeout();
      }
   });
   BRIDGE.addFunction("isSignout", function(){return false;});
   BRIDGE.addFunction("isSessionLoggedout", function(){return false;});
}

function initRowDeletion() {
   // Delete button for tables
   $("div.jbmnplsTable div.delete").live("click", function (){
      var obj = $(this);
      if (obj.attr("disabled") != null || obj.hasClass("loading")) {  
         return false;
      }
      //Ask message
      if(confirm("Are you sure you want to delete this row?\nYOU CANNOT UNDO THIS AFTER YOU AGREE!"))
      {
         //Add the classes
         var tr = obj.parent().parent();
         tr.parent().find("div.delete").attr("disabled", "disabled");
         obj.addClass("loading").removeAttr("disabled");
         var row = tr.attr("row");
         var command = obj.attr("action");  
         //Run the deletion
         var deletion = new Job("submitAction_win0(document.win0, '" + command + "')", [row]);
         JOBQUEUE.addJob(deletion);
      }
   });
}

/**
 *    Jobmine Plus Status bar
 */
function initStatusBar() {
   if(OBJECTS.STATUS_TIMER == null) {
      var html = '<li class="status-item hide"><span class="bold">Hi <span id="jbmnpls-status-user-name"></span>!</span></li>';
      html +=     '<li class="status-item hide"><span class="bold">Active Apps: </span><span id="jbmnpls-status-active-apps"></span></li>';
      html +=     '<li class="status-item hide"><span class="bold">Apps Left: </span><span id="jbmnpls-status-apps-left"></span></li>';
      html +=     '<li class="status-item hide"><span class="bold">Interviews: </span><span id="jbmnpls-status-interviews"></span></li>';
      $("#jbmnplsStatus ul").append(html);
      updateStatusBar();
      invokeUpdateStatusBarUpdate();
   }
}
function invokeUpdateStatusBarUpdate(optionalDoIt) {
   if (!optionalDoIt && OBJECTS.STATUS_TIMER) {
      clearInterval(OBJECTS.STATUS_TIMER);
      OBJECTS.STATUS_TIMER = null;
   } else if(!OBJECTS.STATUS_TIMER) {
      OBJECTS.STATUS_TIMER = setInterval(updateStatusBar, CONSTANTS.STATUS_UPDATE_TIME * 60 * 1000);    //Also kills php timer
   }
}
function updateStatusBar() {
   var headerExists = $("#jbmnplsHeader").exists();
   //Get the name
   $.get(LINKS.DOCUMENTS, function(response){
        if(headerExists && PREF.load("SETTINGS_GENERAL_SHOW_STATUS_BAR", null, true)) {
            // Get the name of the user
            var name, end,
                start = response.indexOf("id='UW_CO_STUDENT_UW_CO_PREF_NAME'");
            if (start == -1) {
                start = response.indexOf('id="UW_CO_STUDENT_UW_CO_PREF_NAME"');
            }
            if (start == -1) {
                name == "Unknown";
            } else {
                start = response.indexOf('>', start) + 1;
                end = response.indexOf("<", start);
                var fullName = response.substring(start, end).split(",");
                name = fullName[1] + " " + fullName[0];     // last name and then first name
            }
            $("#jbmnpls-status-user-name").text(name).parents("li").removeClass("hide");
            
            // Get the resume namespace
            var base = "UW_CO_STU_DOCS_UW_CO_DOC_DESC$"
                query = "", index = 0, lookFor = 'value="', lookEndFor = '"';
            for (var i = 0; i < 3; i++) {
               index = response.indexOf(base + i, index);
               if (index == -1) { break; }
               index = response.indexOf(lookFor, index);
               if (index == -1) { break; }
               index += lookFor.length;
               var canView = response.contains("'UW_CO_PDF_LINKS_UW_CO_DOC_VIEW$" + i, index)?"1":"0"
               var name = response.substring(index, response.indexOf(lookEndFor, index));
               query += name + CONSTANTS.RESUME_DELIMITOR1 + canView + CONSTANTS.RESUME_DELIMITOR2;
            }
            query = query.substring(0, query.lastIndexOf(CONSTANTS.RESUME_DELIMITOR2));
            PREF.save("RESUMES", query);
        }
   });
   
    if (headerExists) {
        if(PREF.load("SETTINGS_GENERAL_SHOW_STATUS_BAR", null, true)) {
            //Get the number of applications left
            $.get(LINKS.SEARCH, function(response){
                if(response == 'you are not authorized to view this page.') {
                    Log("Error reading search, are you logged in?");
                    return;
                }
                var start = response.indexOf("='UW_CO_JOBSRCHDW_UW_CO_MAX_NUM_APPL");
                start = response.indexOf(">", start) + 1;
                var appsLeft = response.substring(start, response.indexOf("<", start));
                if(UTIL.isNumeric(appsLeft)) {
                    var activeApps = Math.max(50-appsLeft, 0);
                    $("#jbmnpls-status-apps-left").text(appsLeft).parent().removeClass("hide");
                    $("#jbmnpls-status-active-apps").text(activeApps).parent().removeClass("hide");
                }
            });

            /* IMPLEMENT WHEN HAVING INTERVIEWS IN ACCOUNT
            //Get the number of interviews
            $.get(LINKS.INTERVIEWS, function(response){
            if(response == 'you are not authorized to view this page.') {
            Log("Error reading interviews, are you logged in?");
            return;
            }
            });*/
        }
    }
}

function changeStatusValues(activeApps) { 
   if (PAGEINFO.TYPE == PAGES.HOME) {
      $("#jbmnpls-status-active-apps").text(activeApps);
      var left = Math.max(50 - activeApps, 0);
      $("#jbmnpls-status-apps-left").text(left);
   } else {
      BRIDGE.run(function(){
         window.parent.changeStatusValues(activeApps);
      }, null, {activeApps:activeApps});
   }
}
BRIDGE.registerFunction("changeStatusValues", changeStatusValues);

function increaseActiveStatusValue(byHowMuch) { 
   if (PAGEINFO.TYPE == PAGES.HOME) {
      var active = parseInt($("#jbmnpls-status-active-apps").plainText());
      changeStatusValues(active + parseInt(byHowMuch));
   } else {
      BRIDGE.run(function(){
         window.parent.increaseActiveStatusValue(byHowMuch);
      }, null, {byHowMuch:byHowMuch});
   }
}
BRIDGE.registerFunction("increaseActiveStatusValue", increaseActiveStatusValue);

/**
 *    Returns the current term in Jobmine's format
 */
function getPredictedTerm(month, year) { 
   //Validate
   if(month!=null){Assert(month>=0&&month<12,"Month was configured incorrectly ("+month+")");}
   if(year!=null){Assert(year>=0&&year.toString().length==4,"Year was configured incorrectly ("+year+")");}
   
   //Set the date
   var d = month != null && year != null ? new Date(year, month) : new Date();
   d.setMonth(d.getMonth()+4);      //Offset the month by 4 months when you are on coop
   year = d.getFullYear().toString();
   month = d.getMonth();
   
   //Build the term string
   var term = year.charAt(0)-1+"";
   term += year.substr(2);
   term += Math.floor(month/4) * 4 + 1;
   return term;
}

/*
 *    Draggable objects
 *       Give the element a class "draggable" to make it draggable as long as one
 *       of its children has a class "draggable-region". If you click and drag
 *       that region, the entire element (with class "draggable") will move.
 *       You can disable the drag by adding the class "disabled" to either the 
 *       draggable object or region.
 */
function initDraggable() {
   $("body .draggable .draggable-region").live("mousedown", function(evt){
      try{
      $("body").addClass("noselect");
      var obj = $(this);
      var clkObj = $(evt.target);
      //Return if disabled
      if (obj.hasClass("disabled") || clkObj.hasClass("fakeLink") || clkObj.get(0).tagName.toUpperCase() == "A") {return;}
      var wholeObj = obj.closest(".draggable");
      if (wholeObj.hasClass("disabled")) {return;}
      //Events and Classes
      wholeObj.addClass("draggable-down");
      if(UTIL.getID("draggable-overlay-hack") == null) {
         $(document.body).append("<div id='draggable-overlay-hack' style='height:100%;width:100%;position:fixed;top:0;left:0;'></div>");
      }
      var overlay = $("#draggable-overlay-hack");
      overlay.css({"display" : "block", "z-index" : "1000", "cursor" : "move"});
      overlay.bind("mousemove.draggable", function(e){
         var wholeObj = obj.closest(".draggable");
         wholeObj.removeClass("draggable-down").addClass("draggable-move");
         //Update Position
         var coor = wholeObj.attr("draggableAnchor").split(",");
         var ancX = parseInt(coor[0]);
         var ancY = parseInt(coor[1]);
         var pos = wholeObj.offset();
         var absX = pos.left;
         var absY = pos.top;
         var relX = parseInt(wholeObj.css("left"),10);
         var relY = parseInt(wholeObj.css("top"),10);
         var mRelX = e.pageX - absX;
         var mRelY = e.pageY - absY;
         wholeObj.css({"left" : (relX+(mRelX-ancX))+"px", "top" : (relY+(mRelY-ancY))+"px"});
      })
      .bind("mouseup.draggable mouseleave.draggable", function(){
         $("body").removeClass("noselect");
         var wholeObj = obj.closest(".draggable");
         wholeObj.removeClass("draggable-down draggable-move").removeAttr("draggableAnchor");
         $(this).unbind(".draggable").css({"display": "none", "cursor" : "auto"});
      });
      //Record the anchor point for the object
      var relX = evt.layerX ? evt.layerX : evt.offsetX;
      var relY = evt.layerY ? evt.layerY : evt.offsetY;
      wholeObj.attr("draggableAnchor", relX+","+relY);
      }catch(e){alert(e)}
   });
}

/**
 *    Refresh Timer
 */
function invokeRefreshTimer() {
   if(OBJECTS.REFRESH_TIMER != null) {
      clearInterval(OBJECTS.REFRESH_TIMER);
      OBJECTS.REFRESH_TIMER = null;
   }
   var refreshRate = PREF.load("SETTINGS_GENERAL_AUTO_REFRESH", null, 0);
   if(refreshRate > 0) {
      try{
      OBJECTS.REFRESH_TIMER = setInterval(function(){
         $("#jbmnplsWebpage").contents().get(0).location.href = $("#jbmnplsWebpage").contents().get(0).location.href;
      }, refreshRate * 60 * 1000);     //Per min
      }catch(e){alert(e)}
   }
}

/**
 *    Applying
 */
 function invokeApplyPopup(jobId, title) {
   if (typeof (OBJECTS.UWATERLOO_ID) === "undefined") {
      alert("Failed to get user id, please report this to {{ email }}.");
      return;
   }
   title = title || "Submit Application";
   showPopup(true, null, title, 500, null, function(type){
      if (type == "save") {
         var $frame = $("#jbmnplsPopupFrame"),
             doc = $frame.contents().get(0),
             $submitButton = $(doc.getElementById('UW_CO_APPWRK_UW_CO_CONFIRM_APP'));
         if ($submitButton.exists()) {
            BRIDGE.run(function(){
               var win = document.getElementById('jbmnplsPopupFrame').contentWindow;
               win.hAction_win0(win.document.win0,'UW_CO_APPWRK_UW_CO_CONFIRM_APP', 0, 0, 'Submit Application', false, true); 
            });
         } else {
            // Runs a message saying to select or upload a resume.
            BRIDGE.run(function(){
               var frame = document.getElementById('jbmnplsPopupFrame');
               frame.contentWindow.showMessage("Please select/upload a resume.", 7);
            });
         }
         return false;
      }
   }, LINKS.APPLY + jobId + "&UW_CO_STU_ID=" + OBJECTS.UWATERLOO_ID + "&inpopup");
}
BRIDGE.registerFunction("invokeApplyPopup", invokeApplyPopup);

function finishApplying() {
   hidePopup();
   
   // Display message
   if (PAGEINFO.TYPE == PAGES.APPLICATIONS) {
      showMessage("Application has been successfully edited.");
   } else {
      showMessage("Application has been successfully submitted.");
   }
   
   // Change the row to applied
   switch(PAGEINFO.TYPE) {
      case PAGES.SEARCH:
         //var $tr = $("#jbmnplsResultsTable tr.lastClickedRow"),
         //    $ths = $("#jbmnplsResultsTable tr:eq(0)"),
         //    $tds = $tr.children(),
         //    applyCol = parseInt($("#jbmnplsResultsTable > thead > tr > th").filter(function(){
         //      return $(this).text() == "Apply"}).attr('col'));
         //    listCol = parseInt($("#jbmnplsResultsTable > thead > tr > th").filter(function(){
         //      return $(this).text() == "Short List"}).attr('col'));
               
         // Change the row text and highlight
         //$tds.eq(0).text("Applied");
         //$tds.eq(applyCol).html("Already Applied");
         //$tds.eq(listCol).html("");
         //HIGHLIGHT.apply($tr);
         //break;
      case PAGES.LIST:
         var $tr = $("#jbmnplsJobsTable tr.lastClickedRow"),
             applyCol = parseInt($("#jbmnplsJobsTable > thead > tr > th").filter(function(){
               return $(this).text() == "Apply"}).attr('col'));
         // Change the row text and highlight
         $tr.children().eq(applyCol).html("Already Applied");
         HIGHLIGHT.apply($tr);
         increaseActiveStatusValue(1);
         break;
   }
}
BRIDGE.registerFunction("finishApplying", finishApplying);

function fixApplyInterface() {
   $('#UW_CO_APPDOCWRK_UW_CO_DOC_NUM option:eq(0)').text("Choose");
   var resumes = PREF.load("RESUMES").split(CONSTANTS.RESUME_DELIMITOR2);
   if (!resumes.empty()) {
      var $options = $("#UW_CO_APPDOCWRK_UW_CO_DOC_NUM").find("option");
      for (var i = 0; i < 3; i++) {
         var resumeName = "(Not Created)", $obj = $options.eq(i + 1);
         if (i < resumes.length) {
            resumeName = resumes[i].split(CONSTANTS.RESUME_DELIMITOR1)[0];
         }
         $obj.text((i + 1) + " - " + resumeName.replaceCharCodes());
      }
   }
}

/**
 *    Miscellaneous
 */
function isScrollbarShown() {
   return $(document).height() > $(window).height();
}

function appendCSS(cssObj) {
   var cssString = "";
   for(var selector in cssObj) {
      var eachSelector = cssObj[selector];
      var propString = "";
      for(var property in eachSelector) {
         propString += property + ":" + eachSelector[property] + ";";
      }
      cssString += selector + "{" + propString + "}";
   }
   $("body").append("<style>" + cssString + "</style>");
   cssString = null;
}

function iframeRunFunction(iframe) {      //Not finised, need to make iframe object
   if(iframe == null) {return;}
   if (UTIL.isjQuery(iframe)) {
      iframe = iframe.get(0);
   }
   try{
      iframe.contentWindow.alert("sdsd")
   }catch(e){alert("Unable to call function inside iframe: "+e);}
}

function parseMonth(prefix) {
   if(prefix != null) {
      var months = ["january","februrary","march","april","may","june","july","august","september","october","november","december"];
      for(var i=0;i<months.length;i++) {
         if(months[i].startsWith(prefix.toLowerCase())) {
            return i;
         }
      }
   }
   return -1;
}
}