//прокрутка хедера
window.onscroll = function show_header() {
    var header = document.querySelector('.solid');
    if (window.pageYOffset > 30) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed')
    }
}





// модальное окно   

// Окрытие модального окна


document.getElementById('modal_window1').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "Шуба <br> из меха норки <br> размер 44 <br> цена 105 000";
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide1.jpeg)"
}
document.getElementById('modal_window2').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "Шуба <br> из меха норки <br> размеры от 42 по 44 <br> цена 130 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide2.jpeg)"
}
document.getElementById('modal_window3').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "Шуба <br> из меха стриженной норки <br> размер 42 <br> цена 120 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide3.jpeg)"
}
document.getElementById('modal_window4').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "Шуба <br> из мех норки <br> размер 44 <br> цена 110 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide4.jpeg)"
}
document.getElementById('modal_window5').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "Шуба <br> из меха стриженной норки <br> размер 44 <br> цена 180 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide5.jpeg)"
}
document.getElementById('modal_window6').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "Шуба <br> из меха норки <br> размер 44 <br> цена 150 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide6.jpeg)"
}
document.getElementById('modal_window7').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "Шуба <br> из меха норки <br> размер 42 <br> цена 110 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide7.jpeg)"
}
document.getElementById('modal_window8').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "Шуба <br> из меха норки <br> размер 44 <br> цена 130 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide8.jpeg)"
}
document.getElementById('modal_window9').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "пальто <br> 95% альпака <br> 5% шёлк <br> с воротником из меха соболь <br> размер 46,50 <br> цена 51 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide9.jpeg)"
}
document.getElementById('modal_window10').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "Шуба <br> из меха норки <br> размер 44 <br> цена 150 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide10.jpeg)"
}
document.getElementById('modal_window11').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "Шуба <br> из мехамнорки <br> размер 46 с вставками питона <br> цена 150 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide11.jpeg)"
}
document.getElementById('modal_window12').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "пальто <br> 95% альпака <br> 5% шёлк <br> с воротником мехом соболь <br> размер XXL,L <br> цена 43 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide12.jpeg)"
}
document.getElementById('modal_window13').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "пальто <br> двухсторонее <br> 95% альпака <br> 5% шёлк<br> с капюшоном на капюшоне мех чернобурка <br> размер S <br> цена 43 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide13.jpeg)"
}
document.getElementById('modal_window14').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "пальто <br> 95% альпака <br> 5% шёлк <br> с мехом крашенной чернобурки <br> размер 3XL, L <br> цена 43 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide14.jpeg)"
}
document.getElementById('modal_window15').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "Пальто <br> 95% альпака <br> 5% шёлк <br> с мехом норки <br> размер M, XL <br> цена 53 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide15.jpeg)"
}
document.getElementById('modal_window16').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "Пальто <br> 95% альпака <br> 5% шёлк <br> с мехом норки <br> Размер M, XXL <br> цена 45 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide16.jpeg)"
}
document.getElementById('modal_window17').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "Пальто <br> 95% альпака <br> 5% шерсть <br> с мехом норки <br> Размер XL, M <br> цена 47 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide17.jpeg)"
}
document.getElementById('modal_window18').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "пальто <br> 100% шерсть <br> с мехом норки <br> размер 44 <br> цена 15 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide18.jpeg)"
}
document.getElementById('modal_window19').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "пальто <br> двухсторонее <br> 95% альпака <br> 5% шёлк <br> с съёмным мехом чернобурки <br> размер M, XL <br> цена 43 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide19.jpeg)"
}
document.getElementById('modal_window20').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "пальто <br> 100% шерсть <br> с мехом норки <br> размер 46 <br> цена 45 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide20.jpeg)"
}

document.getElementById('modal_window21').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "Шуба <br> из меха норки с шиншиллой <br> размер 46 <br> цена 130 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide21.jpeg)"
}

document.getElementById('modal_window22').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "пальто <br> 100% шерсть <br> с мехом норки <br> размер 48 <br> цена 15 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide22.jpeg)"
}
document.getElementById('modal_window23').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "Шуба <br> 100% шерсть размер 44 <br> цена 21 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide23.jpeg)"
}
document.getElementById('modal_window24').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "Пальто <br> 100% шерсть размеры <br> от 46 по 50 <br> цена 25 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide24.jpeg)"
}
document.getElementById('modal_window25').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "Шубка <br> 100% шерсть размеры от 48 по 52 <br> цена 25 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide25.jpeg)"
}
document.getElementById('modal_window26').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "пальто <br> в стиле кимано <br> с мехом соболя <br> 95% альпака <br> 5% шёлк размер М, L цена 45 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide26.jpeg)"
}
document.getElementById('modal_window27').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "Шуба <br> 100% шерсть <br> размеры от 46 по 50 <br> цена 25 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide27.jpeg)"
}
document.getElementById('modal_window28').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "Шуба <br> 100% шерсть <br> размеры от 46 по 50 <br> цена 25 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide28.jpeg)"
}
document.getElementById('modal_window29').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "Шуба <br> 100% шерсть <br> размеры от 48 по 54 <br> цена 29 500"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide29.jpeg)"
}
document.getElementById('modal_window30').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "Пальто <br> 100% шерсть <br> размеры от 43 по 48 <br> цена 27 600"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide30.jpeg)"
}
document.getElementById('modal_window31').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "Шуба жакет <br> 100% шерсть <br> размеры от 50 по 54 <br> цена 27 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide31.jpeg)"
}
document.getElementById('modal_window32').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "Пальто <br> из меха Кёрли <br> размеры 48 по 52 <br> цена 38 800"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide32.jpeg)"
}
document.getElementById('modal_window33').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "Шуба <br> 100% шерсть <br> размеры 48 по 52 <br> цена 25 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide33.jpeg)"
}
document.getElementById('modal_window34').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "рубашка <br> натуральная кожа <br> размер 46-52 <br> цена 17 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide34.jpeg)"
}
document.getElementById('modal_window35').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "френч <br> натуральная кожа <br> размер 44 <br> цена 21 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide35.jpeg)"
}
document.getElementById('modal_window36').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "пиджак <br> натуральная кожа <br> размер 48-54 <br> цена 17 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide36.jpeg)"
}
document.getElementById('modal_window37').onclick = function() {
        document.getElementById('popup').style.display = "inline";
        document.getElementById('popup').style.overflow = 'hidden';
        // document.body.style.overflow = 'hidden';
        var text = document.getElementById("intro");
        document.getElementById("popup_text1").innerHTML = "френч <br> натуральная кожа <br> размер 42-46 <br> цена 21 000"
        document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide37.jpeg)"
    }
    // document.getElementById('modal_window38').onclick = function() {
    //     document.getElementById('popup').style.display = "inline";
    //     document.getElementById('popup').style.overflow = 'hidden';
    //     // document.body.style.overflow = 'hidden';
    //     var text = document.getElementById("intro");
    //     document.getElementById("popup_text1").innerHTML = "пиджаки <br> женские мужского кроя цвет белый и тёмно-зелёный <br> размер 44-46 <br> цена 17 000"
    //     document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide38.jpeg)"
    // }
document.getElementById('modal_window39').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "пальто <br> 95% альпака <br> 5% шёлк <br> двухстороннее <br> размер 44, 48 <br> цена 45 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide39.jpeg)"
}
document.getElementById('modal_window40').onclick = function() {
    document.getElementById('popup').style.display = "inline";
    document.getElementById('popup').style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';
    var text = document.getElementById("intro");
    document.getElementById("popup_text1").innerHTML = "пальто <br> 95% альпака <br> 5% шёлк <br> с мехом соболя <br> размер 46, 50 <br> цена 55 000"
    document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide40.jpeg)"
}
document.getElementById('modal_window41').onclick = function() {
        document.getElementById('popup').style.display = "inline";
        document.getElementById('popup').style.overflow = 'hidden';
        // document.body.style.overflow = 'hidden';
        var text = document.getElementById("intro");
        document.getElementById("popup_text1").innerHTML = "френч <br> натуральная кожа <br> модель оверсайз <br> размер 46, 50, 52 <br> цена 21 000"
        document.getElementById('popup_image1').style.backgroundImage = "url(/finalmodern/content/slide41.jpeg)"
    }
    //Закрытие модального окна

// document.getElementById('popup_close').onclick = function(e) {
//         document.getElementById('popup').style.display = "none";
//         document.body.style.overflow = 'auto';
//     }
document.getElementById('popup_close').onclick = function() {
    document.getElementById('popup').style.display = "none";
    document.body.style.overflow = 'auto';
};
// по затемнённому окну вокруг модального окна
window.onclick = function(e) {
    if (e.target == document.getElementById('popup_body')) {
        document.getElementById('popup').style.display = "none";
        document.body.style.overflow = 'auto';
    }
};
// по эскейпу
document.addEventListener('keydown', function(e) {
    if (e.which === 27) {
        document.getElementById('popup').style.display = "none";
    }
})