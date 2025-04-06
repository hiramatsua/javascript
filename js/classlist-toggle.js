/*
    for classlist_toggle jsファイル
*/
const btn = document.querySelector('#btn');

function modeChange () {    

    // body にclass="dark-mode" を付けたり外したりする
    document.body.classList.toggle('dark-mode');
}

// ボタンがクリックされたら、画面モードを切り替える
btn.addEventListener('click', modeChange);
