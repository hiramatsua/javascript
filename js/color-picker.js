/*
    for color-picker jsファイル
*/
const body = document.querySelector('body');
const colorCode = document.querySelector('#colorCode');
const colorText = document.querySelector('#colorText');

alert('color-picker.js 起動');

function colorBg () {
    var colorCodeVal = colorCode.value;
    
    // 選択された色で背景色を変更する
    body.style.backgroundColor = colorCodeVal;
    // テキスト内容を書き換え    
    if (colorCodeVal == '#ffffff') {
        colorText.textContent = 'カラーコード：' + colorCodeVal + '(White)';
    } else if (colorCodeVal == '#000000') {
        colorText.textContent = 'カラーコード：' + colorCodeVal + '(Black)';
    } else {
        colorText.textContent = 'カラーコード：' + colorCodeVal;
    }
}

// カラーコードが変更されたら、関数 colorBg() を実行する
colorCode.addEventListener('input', colorBg);
