/*
    for color-picker jsファイル
*/
const colorPic = document.querySelector('#colorPicker');
const colorText = document.querySelector('#colorText');

alert('color-picker.js 起動');

function colorBg () {
    // テキスト内容を書き換え
    colorText.textContent = 'カラーコード：' + colorPic.value;
}

// カラーピッカーが変更されたら、function colorBg() 実行
colorPic.addEventListener('input', colorBg);
