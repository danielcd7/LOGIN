function login() {
    event.preventDefault();
    const usuario = 'admin';
    const clave = 'admin123';

    //crear variables para los inputs html
    const inputUsuario = document.getElementById('username').value;
    const inputClave = document.getElementById('password').value;
    //validar credenciales
    if (inputUsuario === usuario && inputClave === clave) {
        alert('inicio sesion');
        //direccionar a otra pagina inicio.html
        window.location.href = 'inicio.html';

    }
    else {
        alert('Usuario o clave incorrectos. Inténtalo de nuevo.');
    }

}
const listado_productos = [];
function saveProduct() {



    let nombre = document.getElementById('nombre').value;
    let cantidad = document.getElementById('cantidad').value;
    let precio = document.getElementById('precio').value;

    if (nombre == '' || isNaN(cantidad) || isNaN(precio)) {
        alert('por favor ingrese todos los datos')
    }
    else {


        //crear un objeto producto
        const producto = {
            nombre: nombre,
            cantidad: cantidad,
            precio: precio
        };
        listado_productos.push(producto);
        console.log(listado_productos);
        alert(`Producto guardado exitosamente: 
        ${producto.nombre}`);
        document.getElementById('productForm').reset();

        //agregar producto a la tabla
        displayProducts();
    }
}

//funcion para mostrar los productos en la tabla
function displayProducts() {
    const tableBody = document.getElementById('productTableBody');
    //limpiar la tabla para evitar duplicados
    tableBody.innerHTML = '';

    listado_productos.forEach(producto => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.cantidad}</td>
            <td>$${parseFloat(producto.precio).toFixed(2)}</td> 
        `;
        tableBody.appendChild(row);
    });
}
/* x */