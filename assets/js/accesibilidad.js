var menuOpen = true;
var modoAccesibilidad = false;

function accesBtnActionState()
{    
    menuOpen = !menuOpen;

    menuItems = [];
    menuItems.push(document.getElementById("visual"));
    menuItems.push(document.getElementById("auditivo"));

    menuItems.forEach(element => {
        if(menuOpen)
        {
            element.style.width = "50px";
            element.style.height = "50px";
        }
        else{
            element.style.width = "0px";
            element.style.height = "0px";
        }
    });

}

function accesBtnVisualActionState()
{
    modoAccesibilidad = !modoAccesibilidad;

    if(modoAccesibilidad){
        menuItems[0].style.backgroundColor = "var(--success)";
        document.getElementById("content").style.fontSize = "var(--fs-accesibilidad)";
    }else{
        menuItems[0].style.backgroundColor = "";
        document.getElementById("content").style.fontSize = "";
    }
}

accesBtnActionState();