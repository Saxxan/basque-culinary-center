// Migas de pan menu-Selection.pug
function setSeparadorMigasPan()
{
    var migas = document.getElementByClassName('migas').getElementsByTagName('li');
    for(i=1;i<migas.length;i++){
        migas[i].innerHTML = "/ "+migas[i].innerHTML;
    }
}
