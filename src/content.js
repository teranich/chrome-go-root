window.onload = function() {
  var MNEMO;
  chrome.runtime.sendMessage({
    action: 'mnemokeys',
  }, function(response) {
    MNEMO = response;
  });
  document.addEventListener('keydown', keyDownTextField, false);

  function keyDownTextField(e) {
    console.log('keydown', e)
    chrome.runtime.sendMessage({
      action: 'shortcut',
    }, function(response) {
      var shortcut = (e.ctrlKey ? 'Ctrl + ' : '') +
        (e.altKey ? 'Alt + ' : '') +
        (e.shiftKey ? 'Shift + ' : '') + (MNEMO[e.keyCode] || String.fromCharCode(e.keyCode));
        if (response === shortcut) {
          window.location = '/';
        }
    });
  }
}
