function add(){
    x=document.getElementById("input 1").value
    y=document.getElementById("input 2").value
    z=parseInt(x)+parseInt(y)
    document.getElementById("output").value=z

}

function sub(){
    x=document.getElementById("input 1").value
    y=document.getElementById("input 2").value
    z=parseInt(x)-parseInt(y)
    document.getElementById("output").value=z
}

function multi(){
    x=document.getElementById("input 1").value
    y=document.getElementById("input 2").value
    z=parseInt(x)*parseInt(y)
    document.getElementById("output").value=z
}

function div(){
    x=document.getElementById("input 1").value
    y=document.getElementById("input 2").value
    z=parseInt(x)/parseInt(y)
    document.getElementById("output").value=z
}

function clr(){
    document.getElementById("input 1").value=""
    document.getElementById("input 2").value=""
    document.getElementById("output").value=""
}