/*
    for color-picker jsファイル
*/
const body = document.querySelector('body');
const colorCode = document.querySelector('#colorCode');
const colorText = document.querySelector('#colorText');

alert('color-picker.js 起動');

function colorBg () {
    var colorCodeVal = colorCode.value;
    // テキスト内容を書き換え
    colorText.textContent = 'カラーコード：' + colorCodeVal;
    // 選択された色で背景色を変更する
    body.style.backgroundColor = colorCodeVal;
}

// カラーコードが変更されたら、関数 colorBg() を実行する
colorCode.addEventListener('input', colorBg);
