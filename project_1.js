/*let gnc;
function press_green(){
    if(gnc == 1){
        document.getElementById("colour").style.backgroundColor = "inline"

        return gnc=0;
    }
    else{
        document.getElementById("colour").style.backgroundColor = "green"

        return gnc=1;
    }
}

let rdc;
function press_red(){
    if(rdc == 1){
        document.getElementById("colour").style.backgroundColor = "inline"

        return rdc=0;
    }
    else{
        document.getElementById("colour").style.backgroundColor = "red"

        return rdc=1;
    }
}

let bec;
function press_blue(){
    if(bec == 1){
        document.getElementById("colour").style.backgroundColor = "inline"

        return bec=0;
    }
    else{
        document.getElementById("colour").style.backgroundColor = "blue"

        return bec=1;
    }
}*/


function pressed(name){
    document.getElementById("colour").style.backgroundColor = name

}

function random_color(){
    const red = Math.round(Math.random() * 255)
    const green= Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green} , ${blue})`
    document.getElementById("colour").style.backgroundColor = color


}