function test(argument) {
    console.log('ok');
}

test();

var pantalla =
    document.querySelector("#pantalla");

console.log(pantalla);

var btn =
    document.querySelector("#btn");

btn.onclick = function(argument) {

    console.log('btn');
    //  Crear el objeto de AJAX
    var xhr = new XMLHttpRequest();
    //  Abrir coneccion y decirle  que fichero php consultara 
    xhr.open("POST", "php/php.php");
    //  Definocmos el tipo de contenido
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    //  Evento para cuando se resiva la respuesta del servidor 
    xhr.onreadystatechange = function() {
        // Condicional  para saber si el estado de la coneccion fuiue satisfactoria 
        if (xhr.readyState === 4 && xhr.status === 200) {
            // desplegamos los datos  como lo nesesitemos 
            console.log(xhr.responseText);
            pantalla.innerHTML = xhr.responseText;
        }
    };
    //  enviamos los datos 
    xhr.send("varieble=Carlos");

}

// XMLHttpRequest.open(method, url)
// XMLHttpRequest.open(method, url, async)
// XMLHttpRequest.open(method, url, async, user)
// XMLHttpRequest.open(method, url, async, user, password)