//Acordarse de anular envio del formulario con el evento submit

const form = document.querySelector(".form");
const divContainer = document.querySelector(".tareas-container");

const divButtons = document.querySelector(".buttons");
const input = document.querySelector("#input-tarea");

const mensaje = document.querySelector(".mensaje");





form.addEventListener("submit",(e)=>{
    e.preventDefault(); //Para anular envio del form cuando se presiona submit
    // console.log(input.value); Arroja lo que escribo al presionar submit
    if(input.value!="") { //Si el input tiene algo escrito

        const div = document.createElement("div");
        div.classList.add("tarea");

        div.innerHTML = `
        <p>${input.value}</p>
        <div class="buttons">
        <i class="bi bi-pencil-square"></i>
        <i class="bi bi-trash" id="clear"></i>
        </div> 
        
        `

        divContainer.append(div); //Lo agrego al contenedor que tengo en HTML
        mensaje.innerText = "Item Added To The List"
        mensaje.style="background-color:rgb(166, 250, 166)"
        setTimeout(()=>{
            mensaje.innerText = ""; //Para que luego de 2 segundos se vaya el cartel de item agregado
            mensaje.style = "background-color:#fff";
        },2000) //luego de 2 segundos q pase lo que esta dentro
        
        form.reset();
       
    }
    else{
        mensaje.innerText = "Please Enter Value"
        mensaje.style="background-color:rgb(236, 170, 170)"
        setTimeout(()=>{
            mensaje.innerText="";
            mensaje.style = "background-color:#fff";
        },2000)
       
    }
})

