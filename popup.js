// 保存ボタンがクリックされた時の処理
document.getElementById('save').addEventListener('click', function() {
  var buttonNumber = document.getElementById('buttonNumber').value;
  chrome.storage.sync.set({selectedButtonNumber: buttonNumber}, function() {
    console.log('設定が保存されました');
  });
});