document.getElementById('t').onclick = function() {
    document.location.replace("credit.html");
};
document.getElementById('s').onclick = function() {
    document.location.replace("modelline.html");
};
document.getElementById('icons').onclick = function() {
    window.open("https://modern-meha.kmarket11.ru/");
};
document.getElementById('icons2').onclick = function() {
    window.open("https://www.instagram.com/modern_skt/");
};

function goToPage() {
    var url = document.getElementById('id_Элемента');
    document.location.href = url.value;
}