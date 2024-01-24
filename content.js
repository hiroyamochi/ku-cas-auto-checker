function selectRadioButton() {
  chrome.storage.sync.get('selectedButtonNumber', function(data) {
    var selectedButtonNumber = data.selectedButtonNumber || '1';
    var selectedButtonId = "username" + selectedButtonNumber;
    var radioButton = document.getElementById(selectedButtonId);
    if (radioButton) {
      radioButton.checked = true;
      observer.disconnect();
    }
  });
}

var observer = new MutationObserver(selectRadioButton);

observer.observe(document, { childList: true, subtree: true });

// ページの初期ロード時にもラジオボタンの選択を試みる
selectRadioButton();