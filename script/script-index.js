var imagenes=["bg-bailarina.png","bg-bailarina1.png"]
var fondo=document.getElementById("img-animation");
var index=0;
function cambiarFondo()
{
    if(index<1)
    {
        index=index+1;
    }
    else
    {
        index=0;
    }
    var url="imagenes/recursos/"+imagenes[index];
    fondo.src=url;
    fondo.style.animation="borrado infinite 5000ms"
    fondo.style.transition="all 1s";
    tiempo=window.setTimeout('cambiarFondo()',5000)
}

cambiarFondo();