// ページが読み込まれた時に実行
document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.sync.get('selectedButtonNumber', function(data) {
    var selectedButtonNumber = data.selectedButtonNumber || '1'; // デフォルト値は1
    var radioButton = document.querySelector(`input[type="radio"]:nth-of-type(${selectedButtonNumber})`);
    if (radioButton) {
      radioButton.checked = true;
    }
  });
});