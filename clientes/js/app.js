const clientes = [
    new Cliente('Karen', 'Alvarez', '3184181474', 'ACB', new Date, 'femenino'),
    new Cliente('Karen', 'Alvarez', '3184181474', 'ACB', new Date, 'femenino')
];
function mostrarCliente(){
    console.log('mostrar cliente');
    let texto = '';
    for(persona of clientes){
        console.log(persona);
        texto += `<li> ${persona.nombre} ${persona.apellido} ${persona.numeroCorreo} ${persona.fecha} ${persona.genero} </li>`; 
    }
    document.getElementById('client').innerHTML = texto;
}

function verFormulario (){
    let cliente = document.getElementById('clientes');
    let forma = document.getElementById('forma');

    
    cliente.classList.toggle('agregar_Cliente');
    cliente.classList.toggle('clientes');

    forma.classList.toggle('forma');
    forma.classList.toggle('forma2');
  
}

