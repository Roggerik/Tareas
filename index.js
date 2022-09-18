let formulario = document.querySelector('.form-tareas');
let listaTareas = document.querySelector('.container-tareas');
let activa = document.querySelector(".container-form");
let btn = document.querySelector(".buttons");
let nTarea = document.querySelector('.texto-tarea');
let btnAgregar = document.querySelector(".btn-agregar");
let btnCancelar = document.querySelector(".btn-cancelar");
let cont=0;


btn.addEventListener('click',()=>{
    if(cont==0){
        activa.classList.add('active');
        cont=1
    }else{
        activa.classList.remove('active');
        cont=0
    }
});

btnCancelar.addEventListener('click',()=>{
    if (cont==1){
        activa.classList.remove('active');
        canc=0;
    }else{
        activa.classList.add('active');
        cont=1;
    }
});

btnAgregar.addEventListener('click',(e)=>{
    e.preventDefault();

    if(nTarea.value !== ""){
        const texto = nTarea.value;
        const check = document.createElement('input')
        check.type = "checkbox"
        const li = document.createElement('li');
        const p = document.createElement('p');
        const btnEliminar = document.createElement('input')
        btnEliminar.type = "button"
        btnEliminar.value = "Eliminar"
        btnEliminar.className = "Eliminar"
        p.textContent = texto;
        li.appendChild(check)
        li.appendChild(p);
        li.appendChild(btnEliminar);
        listaTareas.appendChild(li);
        nTarea.value = "";
        

    }else{
        alert("Falta ingresar Tarea")
    }

});
