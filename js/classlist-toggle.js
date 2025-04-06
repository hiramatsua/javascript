/*
    for classlist_toggle jsファイル
*/
const btn = document.querySelector('#btn');

function modeChange () {    

    // body にclass="dark-mode" を付けたり外したりする
    document.body.classList.toggle('dark-mode');

    // ボタン記述を変化
    if (btn.textContent == 'ダークモードに切り替える') {
        btn.textContent = '通常モードに切り替える';
    } else {
        btn.textContent = 'ダークモードに切り替える';
    }
}

// ボタンがクリックされたら、画面モードを切り替える
btn.addEventListener('click', modeChange);
