

new WOW().init();

let langButton = document.querySelector('.lang'),
    langArrow = langButton.querySelector('.lang_arrow'),
    langDrop = langButton.querySelector('.lang_drop'),
    langBackground = langButton.querySelector('.lang_back');


function Showlang() {
    langArrow.classList.add('active');  
    langDrop.classList.add('show');  
    langBackground.classList.add('show');  
    console.log('show');
}

function Hidelang() {
    langArrow.classList.remove('active');
    langDrop.classList.remove('show'); 
    langBackground.classList.remove('show');  
    console.log('hide');

}

langBackground.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    Hidelang();
    console.log('back');
});




langButton.addEventListener('click', function() {
    if (langArrow.classList.contains('active')){
        Hidelang();
        console.log('1');
    } else {
        Showlang();   
        console.log('2')
    }   
});


