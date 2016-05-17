/*================================*\
|*            __CSS__             *|
\*================================*/
var CSSOBJ = {
   /**
    *    Draggable
    */
   ".draggable.draggable-down:not(.disabled), .draggable.draggable-move:not(.disabled)" : {
      "box-shadow"   :  "0 0 10px white !important",
      "-moz-box-shadow"   :  "0 0 10px white !important",
   },
   ".draggable-region" : {
      cursor         :  "move !important",
   },
   ".disabled .draggable-region,.disabled.draggable-region" : {   
      cursor         :  "default !important",
   },
   /**
    *    Fix their css
    */
   "#popupMask" : {
      width    :  "100% !important",
   },
   "#WAIT_win0, #SAVED_win0" : {
      display  :  "none !important",
      visibility  :  "hidden !important",
   },
    /**
    *    No extra spaces
    */
   'body,html,.PSPAGE' : {
      padding  : '0',
      margin   : '0',
      height   : "100%",
      "position"  :  "relative",
   },
   /**
    *    Random Styles
    */
   "*" : {
      "opacity"   : '1',
   },
   ".bold" : {
      "font-weight" : "bold",
   },
   "div.pageTitle" : {
      "font-family"     : "Verdana, Arial",
      "font-size"       : "30px",
      "letter-spacing"  : "15px",
      "color"           : "#555555",
      "margin-bottom"   : "40px",
   },
   "body.iframe"  : {
      "padding"   : "30px 50px 20px",
      "-moz-box-sizing" : "border-box",
      "-webkit-box-sizing" : "border-box",
      "box-sizing" : "border-box",
      "overflow-y"  :  "scroll",
   },
   "a.PSHYPERLINK" : {
      "outline" : "none",
   },
   ".hide" : {
      display    : "none !important",
      visibility : "hidden !important",
   },
   "span.fakeLink, span.fakeLink:active" : {
      cursor : "pointer",
   },
   "a.disabled, span.fakeLink.disabled" : {
      cursor : "default",
   },
   ".fade" : {
      "-moz-transition-property" : "opacity",
      "-moz-transition-duration" : "0.5s",
      "-webkit-transition-property" : "opacity",
      "-webkit-transition-duration" : "0.5s",
      "transition-property" : "opacity",
      "transition-duration" : "0.5s",
   },
   /**
    *    Cannot select any text with this
    */
   ".noselect" : {
      "-moz-user-select"   : "none",
      "-webkit-user-select" : "none",
      "-o-user-select" :"none",
      "user-select" :"none",
      "cursor" : "default",
   },
   /**
    *    HTML5 elements in FF 3.6
    */
   "article, aside, details, figcaption, figure, footer, header, div, menu, nav, section" : {
      "display" : "block",
   },
   /**
    *    Login page
    */
   "#jbmnplsHolder" : {
      "margin-left"  :  "36%",
   },
   "#jbmnplsHolder label" : {
      display        :  "block",
      "margin-left"  :  "30px",
   },
   "#jbmnplsHolder label span.important" : {
      "color"  :  "red",
   },
   "#jbmnplsHolder input.checkbox" : {
      "float"        :  "left",
   },
   /**
    *    Home elements and the Jobmine Plus header
    */
   "body.HOME" : {
      "-moz-box-sizing" : "border-box",
      "-webkit-box-sizing" : "border-box",
      "-o-box-sizing" : "border-box",
      "box-sizing" : "border-box",
      "padding-top" : "60px",
      "padding-right"  : '0 !important',
      "margin-right"   : '0 !important',
      overflow : "hidden",
   },
   "#jbmnplsHeader": {
      "min-width": "1120px",
      width    : "100%",
      position : "fixed",
      top   : 0,
   },
   "#jbmnplsHeader *": {
      "font-family": "Verdana, Arial",
      "font-size": "12px",
      "outline": "none",
      "color": "#333333",
      "text-decoration": "none",
      "-webkit-user-select": "none",
      "-moz-user-select": "none",
      "-o-user-select": "none",
   },
   "#jbmnplsTopGroup": {
      "height": "31px",
      "padding": "0px 20px",
      "padding-top": "9px",
      "background": "black",
      "overflow": "hidden",
   },
   "#jbmnplsBanner": {
      "background": "url('" + IMAGES.MAINBANNER + "')",
      "margin-right": "10px",
      "width": "112px",
      "height": "24px",
      "float": "left",
   },
   "#uwBanner": {
      "width": "104px",
      "height": "22px",
      "float": "right",
      "background": "url('" + IMAGES.UWBANNER + "')",
   },
   "#jbmnplsHeader div.banner": {
      "background-repeat": "no-repeat",
   },
   "#jbmnplsNav": {
      "float": "left",
      "padding-top": "2px",
   },
   "nav ul": {
      "padding": "0",
      "margin": "0",
   },
   "nav ul li": {
      "list-style-type": "none",
      "float": "left",
   },
   "#jbmnplsHeader ul li": {
      "margin-left": "20px",
   },
   "#jbmnplsNav ul li a, #jbmnplsNav ul li .fakeLink": {
      "color": "white",
      "font-size": "14px",
      "display": "block",
      "height": "29px",
   },
   "#jbmnplsNav ul li a.selected" : {
      background : "50% 100% no-repeat url('"+IMAGES.HEADER_POINTER+"')",
   },
   "#jbmnplsNav ul li a:hover, #jbmnplsNav ul li .fakeLink:hover": {
      "text-shadow": "0 0 0 transparent, #ffffbe 0 0 0.5em, #ffffbe 0 0 0.5em",
   },
   "#jbmnplsBottomGroup": {
      "padding": "0px 20px",
      "background": "#e7e7e7",
      "width": "auto",
      "height": "18px",
      "border-bottom": "2px solid #d5d5d5",
   },
   "#jbmnplsStatus": {
      "padding-top": "1px",
      "float": "left",
      "cursor" : 'default',
   },
   "#jbmnplsStatus ul" : {
      'margin'    :  '0',
      'padding'   :  '0',
   },
   "#jbmnplsStatus li.status-item" : {
      'margin'          :  '0',
      "list-style-type" : "none",
      "float"           : "left",
   },
   "#jbmnplsStatus li.status-item:not(:first-child)" : {
      "padding-left"     : "21px",
      "background"      : "no-repeat 10px -2px url('"+IMAGES.STATUS_DIVIDER+"')",
   },
   "#jbmnplsUserID": {
      "font-weight": "normal",
   },
   "#jbmplsControlPanel": {
      "float": "right",
   },
   "#jbmplsControlPanel a, #jbmplsControlPanel span.fakeLink": {
      "font-size": "11px",
   },
   "#jbmplsControlPanel a:hover, #jbmplsControlPanel span.fakeLink:hover" : {
      "color" : "#6f6f6f",
   },
   "#jbmnplsFrameWrapper" : {  
      background        :  'no-repeat center center url("'+IMAGES.LARGE_LOADING+'")',
   },
   ".google_play_button" : {
      background        :  'no-repeat url("'+IMAGES.GOOGLE_PLAY_STORE+'")',
      width             :  '100px',
      height            :  '23px',
      display           :  'block',
      'float'           :  'right',
      'margin-right'    :  '15px',
   },
   ".google_play_button:hover" : {
      opacity           :  '0.9',
   },
   ".google_play_button:active" : {
      opacity           :  '0.6',
   },
   /**
    *    Profile Nav
    */
   "#jbmnplsProfileNav" : {
      position          :  "absolute",
      top               :  "0",
      "overflow-x"      :  "hidden",
      "overflow-y"      :  "visible",
      "width"           :  "100%",
      "left"            :  0,
   },
   "#jbmnplsProfileNav ul" : {
      margin            :  0,
      padding           :  0,
      left              :  "50%",
      "float"           :  "left",
      "position"        :  "relative",
   },
   "#jbmnplsProfileNav li.navItem" : {
      "position"        :  "relative",
      "float"           :  "left",
      "list-style-type" :  "none",
      "right"           :  "50%",
      "background"      :  "#7F7F7F",
      width             :  "150px",
      "margin-bottom"   :  "10px",
      "margin-left"     :  "-15px",
      "box-shadow"      :  "0 0 9px black",
      "-moz-box-shadow" :  "0 0 9px black",
      "text-align"      :  "center",
      "border"          :  "2px solid #CCC",
      "border-top"      :  "none",
      "-moz-border-radius-bottomright"          :  "15px",
      "-moz-border-radius-bottomleft"          :  "15px",
      "border-bottom-right-radius"          :  "15px",
      "border-bottom-left-radius"          :  "15px",
   },
   "#jbmnplsProfileNav li.navItem span" : {
      "font-size"       :  "14px",
      "padding-top"     :  "5px",
      "padding-bottom"  :  "8px",
      "color"           :  "white",
      "width"           :  "100%",
      "height"          :  "100%",
      "display"         :  "block",
      "-moz-transition-property" : "padding",
      "-moz-transition-duration" : "0.2s",
   },
   "#jbmnplsProfileNav li.navItem.selected" : {
      "z-index"         :  "4 !important",
      "background"      :  "#999 !important",
   },
   "#jbmnplsProfileNav li.navItem.selected span" : {
      "padding-top"     :  "10px",
   },
   "#jbmnplsProfileNav li.navItem:hover" : {
      "z-index"         :  "4 !important",
      "background"      :  "#AAA",
   },
   "#jbmnplsProfileNav li.navItem span:hover" : {
      "padding-top"     :  "10px",
   },
   /**
    *    Jobmine Plus Tables
    */
   "div.jbmnplsTable" : {
      "min-height" : "50px",
      "-moz-border-radius" : "10px",
      "border-radius" : "10px",
      "border" : " 2px solid black",
      "background" : " #333333",
      "box-shadow" : "0 0 7px black",
      "empty-cells" : "show",
      "min-width" : "100%",
      "display" : "inline-block",
      "margin-bottom" : "40px",
   },
   "div.jbmnplsTable *" : {
      "font-family" : "Verdana, Arial !important",
      "font-size" : "12px",
      "text-decoration" : "none",
      "color" : "white",
   },
   "div.jbmnplsTable div.jbmnplsTableHeader, div.jbmnplsTable div.jbmnplsTableFooter" : {
      "padding" : " 0 25px",
      "width" : "auto",
      "height" : "25px",
   },
   "div.jbmnplsTable div.jbmnplsTableName" : {
      "font-family" : "Verdana, Arial",
      "font-size" : "14px",
      "color" : "white",
      "font-weight" : "bold",
      "vertical-align" : "middle",
      "padding-top" : "2px",
      "display" : "block",
      "float" : "left",
   },
   "div.jbmnplsTableBody" : {
      position :  "relative",
   },
   "div.jbmnplsTable.loading div.jbmnplsTableLoadOverlay" : {
      position          :  "absolute",
      height            :  "100%",
      width             :  "100%",
      top               :  "0",
      background        :  "rgba(255,255,255,0.5) no-repeat center center url('"+IMAGES.LARGE_LOADING+"')",
   },
   "div.jbmnplsTable table td *, div.jbmnplsTable table td" : {
      "color" : "#555555",
      "vertical-align" : "middle",
   },
   "div.jbmnplsTable table td" : {
      "padding" : "5px 15px",
      "border-bottom" : "1px #929292 solid",
   },
   "div.jbmnplsTable table tr[row='header']" : {
      "background-color" : " #7f7f7f",
      "height" : "20px",
   },
   "div.jbmnplsTable table tr" : {
      "background-color" : " white",
      "height" : "40px",
   },
   "body:not(.doNotHighlightLastRow) div.jbmnplsTable table tr.lastClickedRow td" : {
      "background-color" : COLOURS.ROW_HIGHLIGHT,
   },
   "body.SHIFT div.jbmnplsTable" : {
      "-moz-user-select"   : "none",
      "-webkit-user-select" : "none",
      "-o-user-select" :"none",
      "user-select" :"none",
   },
   "div.jbmnplsTable table tr.selected td" : {
      "background-color" : COLOURS.ROW_SELECT,
   },
   "div.jbmnplsTable table tr:hover td" : {
      "background-color" : COLOURS.HOVER,
   },
   "div.jbmnplsTable table tr td span.fakeLink" : {
      color: "#336699",
   },
   "div.jbmnplsTable table tr td span.details" : {
      color    : "#999",
      "float"  : "right",
   },
   "div.jbmnplsTable table tr td a:hover, div.jbmnplsTable table tr td span.fakeLink:hover" : {
      "color" : COLOURS.LINK_HIGHLIGHT_HOVER,
      "text-decoration" : "underline",
   },
   "div.jbmnplsTable table tr th" : {
      "color" : "white",
      "font-size" : "13px",
      "font-weight" : "normal",
      "border-bottom" : "2px solid black",
      "height" : "20px",
      "text-align" : "left",
      "padding" : "5px 15px",
   },
   "div.jbmnplsTable table tr th.headerSortDown" : {
      background : "right center no-repeat url('"+IMAGES.TABLE_ASCEND+"') #999999",
   },
   "div.jbmnplsTable table tr th.headerSortUp" : {
      background : "right center no-repeat url('"+IMAGES.TABLE_DESCEND+"') #999999",
   },
   "div.jbmnplsTable table tr th:hover" : {
      "background-color" : "#AAAAAA",
      "cursor" : "pointer",
   },
   "div.jbmnplsTable table td .delete" : {
      "background" : "0 0 url('"+IMAGES.DELETE+"')",
      "height" : "22px",
      "width" : "22px",
      "display" : "block",
      "cursor" : "pointer",
   },
   "div.jbmnplsTable table td .loading" : {
      "background" : "-5px -5px url('"+IMAGES.DELETE_LOADING+"') no-repeat",
      "cursor" : "default",
      "display" : "block",
      "min-width" : "22px",
      "min-height" : "22px",
   },
   "div.jbmnplsTable table td .delete.disabled, div.jbmnplsTable table td .delete[disabled='disabled']" : {
      "background" : "0 0 url('"+IMAGES.DELETE_DISABLE+"')",
      "cursor" : "default",
   },
   "div.jbmnplsTable div.jbmnplsTableControls" : {
      "float" : "right",
      "padding-top" : "4px",
   },
   "div.jbmnplsTable div.jbmnplsTableControls,div.jbmnplsTable div.jbmnplsTableControls *" : {
      "color" : "#CCC",
      "outline" : "none",
   },
   "div.jbmnplsTable div.jbmnplsTableControls *.disabled,div.jbmnplsTable div.jbmnplsTableControls a.disabled:hover, div.jbmnplsTable div.jbmnplsTableControls span.fakeLink.disabled:hover" : {
      "color" : "#A0A0A0",
   },
   "div.jbmnplsTable div.jbmnplsTableControls a.important, div.jbmnplsTable div.jbmnplsTableControls span.fakeLink.important" : {
      "color" : "skyBlue",
      "font-weight" : "bold",
   },
   "div.jbmnplsTable div.jbmnplsTableControls a:hover, div.jbmnplsTable div.jbmnplsTableControls span.fakeLink:hover" : {
      "color" : "white",
   },
   "div.jbmnplsTable.disable-links a, div.jbmnplsTable.disable-links .fakeLink" : {
	  "color" : "#ccc",
	  "pointer-events": "none",
   },
   "div.jbmnplsTable.disable-links div.jbmnplsTableControls a, div.jbmnplsTable.disable-links div.jbmnplsTableControls .fakeLink" : {
	   "color" : "#777",
	},
   /**
    *    Table column hiding
    */
   "table.tablesorter.hideColumn0  *[col='0'], \
    table.tablesorter.hideColumn1  *[col='1'], \
    table.tablesorter.hideColumn2  *[col='2'], \
    table.tablesorter.hideColumn3  *[col='3'], \
    table.tablesorter.hideColumn4  *[col='4'], \
    table.tablesorter.hideColumn5  *[col='5'], \
    table.tablesorter.hideColumn6  *[col='6'], \
    table.tablesorter.hideColumn7  *[col='7'], \
    table.tablesorter.hideColumn8  *[col='8'], \
    table.tablesorter.hideColumn9  *[col='9'], \
    table.tablesorter.hideColumn10 *[col='10'], \
    table.tablesorter.hideColumn11 *[col='11'], \
    table.tablesorter.hideColumn12 *[col='12'], \
    table.tablesorter.hideColumn13 *[col='13'], \
    table.tablesorter.hideColumn14 *[col='14']": {
      display : "none",
   },
   /**
    *    Jobmine Plus Popup
    */
   "#jbmnplsPopup" : {  
      display     :  "none",
      position    :  "fixed",
      top         :  "0",
      left        :  "0",
      height      : "100%",
      width       : "100%",
      "z-index"   :  "1000",
   },
   "body.showPopup" : {
      overflow : "hidden !important",
   },
   "html body.showPopup" : {
      "margin-right"  :  DIMENSIONS.SCROLLBAR_WIDTH+"px",
   },
   "body.showPopup #jbmnplsPopup" : {
      display : "block",
   },
   "#jbmnplsPopup div.content #jbmnplsPopupFrame" : {
      display  :  "none",
   },
   "#jbmnplsPopup div.content.iframe #jbmnplsPopupFrameWrapper" : {
      background  :  "no-repeat center center url('"+IMAGES.LARGE_LOADING+"')",
   },
   "#jbmnplsPopup div.content.iframe #jbmnplsPopupFrame" : {
      display  :  "block",
   },
   "#jbmnplsPopup.black" : {  
      "background-color": "rgba(0,0,0,0.6)",
   },
   "#jbmnplsPopup.white" : {  
      "background-color": "rgba(255,255,255,0.8)",
   },
   "#jbmnplsPopup div.wrapper" : {
      width    :  "50%",
      top      :  "50%",
      left     :  "50%",
      height   :  "50%",
      position :  "relative",
   },
   "#jbmnplsPopup div.wrapper div.content" : {
      position             :  "absolute",
   },
   "#jbmnplsPopup.black div.wrapper div.content" : {  
      "background-color"   :  "white",
      "border"             :  "black 2px solid",
      "box-shadow"         :  "0 0 7px black",
      "-moz-box-shadow"         :  "0 0 7px black",
      "position"           :  "relative",
   },
   "#jbmnplsPopup.white div.wrapper div.content .title" : {
      "font-size"       : "50px",
      "font-weight"     : "bold",
      "text-align"      : "center",
      "color"           : "black",
      "text-shadow"     : "0 5px 10px transparent, 0 5px 12px black",
   },
   "#jbmnplsPopup.white div.wrapper div.content .body" : {
      "font-family"        : "Verdana, Arial",
      "font-size"          : "30px",
      "text-align"         : "center",
      "text-shadow"        : "0 2px 5px transparent, 0 2px 5px black",
   },
   "#jbmnplsPopup.white div.wrapper div.content .footer" : {
      "display" : "none",
   },
   "#jbmnplsPopup.black div.wrapper div.content .footer .close" : {
      "display" : "none",
   },
   "#jbmnplsPopup.black #jbmnplsPopupTitle.title" : {
      height            :  "30px",
      "border-bottom"   :  "2px solid black",
      "background"      :  "#333",
      "font-size"       :  "14px",
      "font-weight"     :  "bold",
      "color"           :  "white !important",
      "padding-top"     :  "10px",
      "padding-left"    :  "10px",
   },
   "#jbmnplsPopup.black #jbmnplsPopupFooter" : {
      height            :  "30px",
      "border-top"      :  "2px solid black",
      "background"      :  "#333",
      "font-size"       :  "12px",
      "color"           :  "white",
      "padding-top"     :  "10px",
      "width"           :  "100%",
   },
   "#jbmnplsPopup.black #jbmnplsPopupFooter span.fakeLink" : {
      "float"           :  "right",
      "padding-right"   :  "10px",
   },
   "#jbmnplsPopup.black #jbmnplsPopupFooter span.save.fakeLink,\
    #jbmnplsPopup.black #jbmnplsPopupFooter span.submit.fakeLink" : {
      "float"           :  "left",
      "padding-left"    :  "10px",
   },
   "#jbmnplsPopup.black #jbmnplsPopupBody" : {
      "overflow-x"      :  "auto",
      'font-size'       :  '12px',
      'color'           :  '#333',
      'font-family'     :  'Verdana, Arial, sans-serif',
   },
   "#jbmnplsPopup.black #jbmnplsPopupBody div.instructions" : {
      "text-align"      :  "center",
      "background"      :  "#CCC",
   },
   "#jbmnplsPopup.black #jbmnplsPopupBody div.block" : {
      "border-bottom"   :  "1px solid #929292",
      "overflow"        :  "hidden",
      height            :  "25px",
      "font-size"       :  "12px",
      width             :  "100%",
      display           :  "block",
      padding           :  "10px 0 0",
   },
   
   /**
    *    Jobmine Plus Popup: Employer info under job details
    */
   "#jbmnplsPopup[name='employer_profile'].black span.submit,\
    #jbmnplsPopup[name='employer_profile'].black span.save,\
    #jbmnplsPopup[name='employer_profile'].black span.cancel" : {
      "display"         :  "none",
   },
   "#jbmnplsPopup[name='employer_profile'].black #jbmnplsPopupFooter span.close" : {
      "display"         :  "block",
   },
   
   /**
    *    Jobmine Plus Popup: Customize
    */
   "#jbmnplsPopup[name='customize'].black #jbmnplsPopupBody div.customizeEntry" : {
      "border-bottom"   :  "1px solid #929292",
      "overflow"        :  "hidden",
      height            :  "35px",
   },
   "#jbmnplsPopup[name='customize'].black #jbmnplsPopupBody div.customizeEntry[selected='true']" : {
      background        :  COLOURS.ROW_SELECT,
   },
   "#jbmnplsPopup[name='customize'].black #jbmnplsPopupBody div.customizeEntry.instructions:hover" : {
      background        :  "#CCC",
   },
   "#jbmnplsPopup[name='customize'].black #jbmnplsPopupBody div.customizeEntry:hover" : {
      background        :  COLOURS.HOVER,
   },
   "#jbmnplsPopup[name='customize'].black #jbmnplsPopupBody div.customizeEntry span.row" : {
      height            :  "100%",
      "font-size"       :  "12px",
      width             :  "100%",
      display           :  "block",
      padding           :  "10px 0 0",
   },
   "#jbmnplsPopup[name='customize'].black #jbmnplsPopupBody div.customizeEntry span.row span.hiddenMsg" : {
      "padding-right"         :  "20px",
   },
    "div.jbmnplsTable table.tablesorter td span.hiddenMsg, #jbmnplsPopup[name='customize'].black #jbmnplsPopupBody div.customizeEntry span.row span.hiddenMsg" : {
      display                 :  "none",
      "-moz-user-select"      :  "none",
      "-webkit-user-select"   :  "none",
      "-o-user-select"        :  "none",
      "user-select"           :  "none",
      "cursor"                :  "default",
   },
   "div.jbmnplsTable table.tablesorter td span.hiddenMsg.show, #jbmnplsPopup[name='customize'].black #jbmnplsPopupBody div.customizeEntry[selected='true'] span.row span.hiddenMsg" : {
      display           :  "inline",
      color             :  "#777",
      "float"           :  "right",
   },
   "#jbmnplsPopup[name='customize'].black #jbmnplsPopupBody div.customizeEntry input.checkbox" : {
      "margin"          :  "10px 20px 0",
      "float"           :  "left",
   },
    "#jbmnplsPopup[name='customize'] span.submit" : {
      'display'         :  'none',
   },
   
   /**
    *    Jobmine Plus About Me
    */
   "#jbmnplsPopup[name='about_me'].black #jbmnplsPopupBody" : {
      "font-family"     :  "Verdana, Arial",
      "font-size"       :  "12px",
      "color"           :  "#222",
      padding           :  "20px 10px",
   },
   "#jbmnplsPopup[name='about_me'].black #jbmnplsPopupBody h1" : {
      "color"           :  "#555",
      "font-size"       :  "16px",
      "margin"          :  "0 0px 10px",
   },
   "#jbmnplsPopup[name='about_me'].black span.submit,\
    #jbmnplsPopup[name='about_me'].black span.save,\
    #jbmnplsPopup[name='about_me'].black span.cancel" : {
      "display"         :  "none",
   },
   "#jbmnplsPopup[name='about_me'].black #jbmnplsPopupFooter span.close" : {
      "display"         :  "block",
   },
   
   /**
    *    Jobmine Plus Welcome
    */
   "#jbmnplsPopup[name='welcome!'].black #jbmnplsPopupBody" : {
      "font-family"     :  "Verdana, Arial",
      "font-size"       :  "12px",
      "color"           :  "#222",
      padding           :  "20px 10px",
   },
   "#jbmnplsPopup[name='welcome!'].black #jbmnplsPopupBody h1" : {
      "color"           :  "#555",
      "font-size"       :  "16px",
      "margin"          :  "0 0px 10px",
   },
   "#jbmnplsPopup[name='welcome!'].black #jbmnplsPopupBody h2" : {
      "color"           :  "#555",
      "font-size"       :  "14px",
      "margin"          :  "10px 0px 10px",
   },
   "#jbmnplsPopup[name='welcome!'].black #jbmnplsPopupBody .detail" : {
      "color"           :  "#444",
      "font-size"       :  "10px",
   },
   "#jbmnplsPopup[name='welcome!'].black span.submit,\
    #jbmnplsPopup[name='welcome!'].black span.save,\
    #jbmnplsPopup[name='welcome!'].black span.cancel" : {
      "display"         :  "none",
   },
   "#jbmnplsPopup[name='welcome!'].black #jbmnplsPopupFooter span.close" : {
      "display"         :  "block",
   },
   
   /**
    *    Jobmine Plus Message and Update Message
    */
   "#jbmnplsMessageHolder" : {
      "overflow"        :  "hidden",
      "height"          :  "50px",
      "position"        :  "fixed",
      "width"           :  "100%",
      "left"            :  "0",
      "z-index"         :  "999",
   },
   "#jbmnplsMessage, #jbnplsUpdate" : {
      "height"          :  "35px",
      "max-height"      :  "35px",
      "top"             :  "-50px",
      "position"        :  "relative",
      "width"           :  "100%",
      "-moz-box-shadow"      :  "0 3px 10px #333",
      "box-shadow"      :  "0 3px 10px #333",
      "background"      :  "#fafafa",
      "text-align"      :  "center",
   },
   "#jbmnplsMessage" : {
      'color'           :  '#777',
   },
   "#jbmnplsMessage *" : {
      "font-family"     :  "Verdana, Arial",
      "font-size"       :  "12px",
      "color"           :  "#222",
      "padding"         :  "7px",
      "display"         :  "block",
   },
   "#jbmnplsMessage div.close" : {
      "background"      :  "no-repeat 100% 50% url('"+IMAGES.MESSAGE_CLOSE+"')",
      "position"        :  "absolute",
      "top"             :  "8px",
      "right"           :  "25px",
      "width"           :  "100px",
      "height"          :  "16px",
      "cursor"          :  "pointer",
      "padding"         :  "0",
      "padding-right"   :  "20px",
      "font-size"       :  "10px",
   },

   /**
    *    Jobmine Plus Settings
    */
   '#jbmnplsPopup #jbmnplsPopupSettings' : {  
      "display"         : 'none',
      'min-height'      : '400px',
   },
   '#jbmnplsPopupSettings *' : {
      'font-size'       : '12px',
      'font-family'     : 'Verdana, Arial, sans-serif',
   },
   '#jbmnplsPopup[name="settings"] #jbmnplsPopupSettings' : {  
      "display"         : 'block',
   },
   '#jbmnplsPopupSettings .settings-panel' : {
      'display'         : 'none',
      'padding'         : '10px 0',
   },
   '#jbmnplsPopupSettings .settings-panel.open' : {
      'display'         : 'block',
   },
   '#jbmnplsPopupSettings nav' : {
      'background'      : '#7f7f7f',
      'height'          : '30px',
      'border-bottom'   : '2px solid black',
   },
   '#jbmnplsPopupSettings nav li' : {
      'color'           : 'white',
      'font-size'       : '13px',
      'width'           : Math.floor(100/Object.size(SETTINGS.template)) + "%",
   },
   '#jbmnplsPopupSettings nav li.selected' : {
      'background'      : '#999',
   },
   '#jbmnplsPopupSettings nav li:hover' : {
      'cursor'          : 'pointer',
      'background'      : '#AAA',
   },
   '#jbmnplsPopupSettings nav li, #jbmnplsPopupSettings .settings-entry' : {
      'padding'         : '5px 10px 8px',
      '-webkit-box-sizing' : 'border-box',
      '-moz-box-sizing' : 'border-box',
      'box-sizing'      : 'border-box',
      'position'        : 'relative',
   },
   '#jbmnplsPopupSettings .settings-entry .settings-entry-input' : {
      'float'           : 'right',
      'width'           : '180px',
   },
   '#jbmnplsPopupSettings .settings-entry-input .settings-textfield, #jbmnplsPopupSettings .settings-entry-input select' : {
      'width'           : '100%',
   },
   '#jbmnplsPopupSettings .settings-entry-input .settings-checkbox,#jbmnplsPopupSettings .settings-entry-input .settings-dropdown' : {
      'position'        : 'relative',
      'top'             : '-1px',
   },
   '#jbmnplsPopupSettings .settings-entry-input .settings-textfield' : {
      'position'        : 'relative',
      'top'             : '-2px',
   },
   '#jbmnplsPopupSettings .settings-entry .settings-entry-detail' : {
      'position'        : 'absolute',
      'left'            : '140px',
      'top'             : '7px',
      'color'           : '#777',
      'font-style'      : 'italic',
      'font-size'       : '10px',
   },
   '#jbmnplsPopupSettings .settings-entry .settings-entry-label' : {
      'margin-left'     :  '5px',
   },
   '#jbmnplsPopupSettings .settings-entry .settings-entry-title' : {
      'font-weight'     : 'bold',
   },
   "#jbmnplsPopup[name='settings'] span.submit" : {
      'display'         :  'none',
   },
  
   /**
    *    Jobmine Plus Apply Popup
    */
   "#jbmnplsPopup[name='edit_application'] span.save,\
    #jbmnplsPopup[name='submit_application'] span.save" : {
      'display'         :  'none',
   },
   
   "#jbmnplsPopup[name='edit_application'] #jbmnplsPopupFrame,\
    #jbmnplsPopup[name='submit_application'] #jbmnplsPopupFrame" : {
      'height'          :  '230px',
   },
};
appendCSS(CSSOBJ);