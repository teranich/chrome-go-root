var MNEMO = {
  35: 'End',
  36: 'Home',
  46: 'Delete',
  8: 'Backspace',
  9: 'Tab',
  13: 'Enter',
  20: 'Caps',
  27: 'Esc',
  33: 'PgUp',
  34: 'PgDown',
  42: 'Prtscr',
  45: 'Insert',
  19: 'PauseBrk',
  112: 'f1',
  113: 'f2',
  114: 'f3',
  115: 'f4',
  116: 'f5',
  117: 'f6',
  118: 'f7',
  119: 'f8',
  120: 'f9',
  121: 'f10',
  122: 'f11',
  123: 'f12',
  220: '\\',
  192: '/',
  188: '<',
  186: ';',
  187: '=',
  189: '-',
  222: '"',
  190: '>',
  191: '/',
  219: '[',
  221: ']',
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(arguments)
    if (request.action === 'shortcut') {
      sendResponse(localStorage.getItem('shortcut'));
    }
    if (request.action === 'mnemokeys') {
      sendResponse(MNEMO);
    }
  }
);

window.onload = function() {
  var input = document.getElementsByClassName('shortcut')[0];
  input.value = localStorage.getItem('shortcut');

  document.addEventListener("keydown", keyDownTextField, false);
  function keyDownTextField(e) {
    var shortcut = (e.ctrlKey ? 'Ctrl + ' : '') +
      (e.altKey ? 'Alt + ' : '') +
      (e.shiftKey ? 'Shift + ' : '') + (MNEMO[e.keyCode] || String.fromCharCode(e.keyCode));
    input.value = shortcut;
  }

  var btn = document.getElementsByClassName('change')[0];
  btn.addEventListener('click', function(e) {
    if (getBinaryFromStr(input.value)) {
      localStorage.setItem('shortcut', input.value);
      window.close();
    } else {
      alert('Bad Shortcut');
    }
  });

  function getBinaryFromStr(str) {
    return true;
  }
}
