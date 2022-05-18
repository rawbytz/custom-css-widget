(function customCssWidget_0_1() {

  const showEditDialog = () => ioc("dialogs").show("custom-css");
  const htmlEscText = str => str.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  const toggleSheet = sheet => (sheet.disabled = !sheet.disabled);

  function getCustomStyleSheet() {
    for (const sheet of document.styleSheets) {
      if (sheet.ownerNode.dataset.customCss) {
        return sheet;
      }
    }
  }

  function showCSSDialog(title, button1, button2) {
    const addButton = (num, name) => `<button type="button" class="btnX" id="btn${num.toString()}">${htmlEscText(name)}</button>`;
    const buttonStyle = '.btnX{font-size:18px;background-color:steelblue;border:2px solid;border-radius:20px;color:#fff;padding:5px 15px;margin-top:16px;margin-right:16px}.btnX:focus{border-color:#c4c4c4}';
    const buttons = addButton(1, button1) + addButton(2, button2);
    WF.showAlertDialog(`<style>${htmlEscText(buttonStyle)}</style><div>${buttons}</div>`, title);
    setTimeout(() => {
      const btn1 = document.getElementById("btn1");
      const btn2 = document.getElementById("btn2");
      btn1.focus();
      btn1.onclick = () => {
        WF.hideDialog();
        toggleSheet(customSheet);
        if (focus) WF.editItemName(focus);
      };
      btn2.onclick = () => {
        showEditDialog();
      };
    }, 100);
  }
  const focus = WF.focusedItem();
  const customSheet = getCustomStyleSheet();
  customSheet ? showCSSDialog("Custom CSS", customSheet.disabled ? "Enable" : "Disable", "Edit") : showEditDialog();
})();