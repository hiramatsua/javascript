/*
    for color-picker jsファイル
*/
const colorCode = document.querySelector('#colorPicker');
const colorText = document.querySelector('#colorText');

alert('color-picker.js 起動');
console.log(colorCode.value);

// テキスト内容を書き換え
colorText.textContent = 'カラーコード：';
