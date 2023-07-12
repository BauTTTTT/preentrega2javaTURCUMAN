// Variables
var valor1, valor2;

// Objetos
var persona = {
nombre: "",
edad: 0
};

// Array
var listaNombres = ["Ana", "Juan", "María", "Pedro"];

function simular() {
    // Usuarios
    valor1 = parseFloat(prompt("Ingrese valor 1:"));
    valor2 = parseFloat(prompt("Ingrese valor 2:"));
    
    // Operaciones
    var suma = valor1 + valor2;
    var resta = valor1 - valor2;
    var division = valor1 / valor2;
    var porcentaje = (valor1 * valor2) / 100;
    
    // Mostrar resultados
    alert("Resultados:\n\nSuma: " + suma + "\nResta: " + resta + "\nDivisión: " + division + "\nPorcentaje: " + porcentaje);
}

function buscarNombre(nombre) {
    var indice = listaNombres.indexOf(nombre);
    if (indice !== -1) {
    alert(nombre + " se encuentra en la lista de nombres registrados.");
    } else {
    alert(nombre + " no se encuentra en la lista de nombres registrados.");
    }
}

function filtrarNombresPorLetra(letra) {
    var nombresFiltrados = listaNombres.filter(function(nombre) {
    return nombre.toLowerCase().startsWith(letra.toLowerCase());
    });
    if (nombresFiltrados.length > 0) {
        alert("Nombres que empiezan con la letra " + letra + ": " + nombresFiltrados.join(", "));
    } else {
        alert("No se encontraron nombres que empiecen con la letra " + letra + ".");
    }
}

//buscarNombre("Ana"); 
//buscarNombre("Carlos"); 

//filtrarNombresPorLetra("M"); 
//filtrarNombresPorLetra("J"); 
//filtrarNombresPorLetra("S");