/*
    for loading jsファイル
*/
const loading = document.querySelector('#loading');

function loaded () {    

    loading.classList.add('loaded');
}

// リソース読み込み完了したら、ローディングイメージをなくす
window.addEventListener('load', loaded);
