# Custom CSS Widget for WorkFlowy Bookmarklet
- This bookmarklet provides access to the UI for testing the BETA Custom CSS feature. 
- The Custom CSS will propagate to all your WorkFlowy clients: Web, Desktop Apps and Mobile Apps.

## Instructions:
- This bookmarklet only works while viewing WorkFlowy in a desktop web browser. 
- On first click, it checks if you have custom CSS, and if not, it opens this dialog where you can paste your CSS.
- ![Popup Dialog](https://i.imgur.com/UtZ9tXN.png)
- After you add CSS, you will see this dialog on first click:
- ![Buttons dialog](https://i.imgur.com/f9GPILl.png)
- The first button always toggles your CSS between Disabled and Enabled states.
- The Edit button always opens the edit CSS form. 
- Remember to always reload WorkFlowy after making CSS changes.

## Installation: Drag this link to your bookmarks bar:

<a href="javascript:(function customCssWidget_0_4(){const showEditDialog=()=&gt;ioc(&quot;dialogs&quot;).show(&quot;dialogs:custom-css&quot;);const htmlEscText=str=&gt;str.replace(/&amp;/g,&quot;&amp;amp;&quot;).replace(/&gt;/g,&quot;&amp;gt;&quot;).replace(/&lt;/g,&quot;&amp;lt;&quot;).replace(/&quot;/g,&quot;&amp;quot;&quot;);const toggleSheet=sheet=&gt;sheet.disabled=!sheet.disabled;function getCustomStyleSheet(){for(const sheet of document.styleSheets){if(sheet.ownerNode.dataset.customCss){return sheet}}}function showCSSDialog(title,button1,button2){const addButton=(num,name)=&gt;`&lt;button type=&quot;button&quot; class=&quot;btnX&quot; id=&quot;btn${num.toString()}&quot;&gt;${htmlEscText(name)}&lt;/button&gt;`;const buttonStyle='.btnX{font-size:18px;background-color:gray;border:2px solid;border-radius:20px;color:#fff;padding:5px 15px;margin-top:16px;margin-right:16px}.btnX:focus,.btnX:hover{border-color:#c4c4c4;background-color:steelblue}';const buttons=addButton(1,button1)+addButton(2,button2);WF.showAlertDialog(`&lt;style&gt;${htmlEscText(buttonStyle)}&lt;/style&gt;&lt;div&gt;${buttons}&lt;/div&gt;`,title);const intervalId=setInterval((function(){let btn1=document.getElementById(&quot;btn1&quot;);if(btn1){clearInterval(intervalId);const btn2=document.getElementById(&quot;btn2&quot;);btn1.focus();btn1.onclick=()=&gt;{WF.hideDialog();toggleSheet(customSheet);if(focus)WF.editItemName(focus)};btn2.onclick=()=&gt;{showEditDialog()}}}),50)}const focus=WF.focusedItem();const customSheet=getCustomStyleSheet();customSheet?showCSSDialog(&quot;Custom CSS&quot;,customSheet.disabled?&quot;Enable&quot;:&quot;Disable&quot;,&quot;Edit&quot;):showEditDialog()})();">customCSSWidget</a>

## Tips:
- The editor text area is small and doesn't support CSS syntax highligting, so it's recommended you use a proper code editor, and/or a browser CSS extension for writing and testing your CSS.
- Then simply paste your CSS into the text area.  