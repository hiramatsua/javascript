/*
    for count-of-number jsファイル
*/
const inputText = document.querySelector('#input_text');
const count = document.querySelector('#count');

// console.log('- count-of-number js -');

function countNumber () {

    count.textContent = inputText.value.length;

    // 入力された文字数が100文字より大きいか？
    if ( inputText.value.length > 100 ) {
        count.classList.add('alert');
    } else {
        count.classList.remove('alert');
    }
}

// キー入力されたら、関数 countNumber を実行する
inputText.addEventListener('keyup', countNumber);

