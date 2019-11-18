var contenedorResultado = document.querySelector("#result");
var inputOracion = document.querySelector('#first');
var inputPalabra = document.querySelector('#second');
var buttonSearch = document.getElementById('search');

buttonSearch.addEventListener('click', function(){
    if(inputOracion.value == '' || inputPalabra.value == ''){
        alert("Complete los campos");
    }else {
        var oracion = inputOracion.value.split(" ");
        var palabra = inputPalabra.value.toLowerCase();
        var contador = 0;
        var anagramaOriginal = '';
        
            oracion.forEach(function(item,index){
                var newWord;
                if(item.indexOf(",")>=0){
                   newWord = item.split(",");
                   newWord.forEach(function(elem,index){
                       if(elem == ""){
                           newWord.splice(index,1);
                       }
                   })   
                   anagramaOriginal = newWord.join().toLowerCase(); 
                }else{
                   anagramaOriginal = item.toLowerCase(); 
                }
                var suma = 0;
                var l = 0;
                for(var i = 0; i < palabra.length ; i++){
                    var lyric = palabra.charAt(l);
                    l++;
                        if(anagramaOriginal.indexOf(lyric)>=0){
                            suma++;
                        }
                        if(suma == palabra.length && palabra.length <= anagramaOriginal.length){
                            contador++;
                        }
                }
            })
            if(contador != 0){
                contenedorResultado.style.display = "block";
                contenedorResultado.innerHTML = `<p style = "color:white"> <span style="text-decoration: underline;
                ">Resultado</span>: <br> Numero de veces que aparecio la palabra: ${contador}</p>`; 
                setTimeout(function(){
                    contenedorResultado.style.display = "none";
                },7000);
            }else{
                contenedorResultado.innerHTML = `<p style = "color:white"> <span style="text-decoration: underline;
                ">Resultado:</span> <br> No se encontraron similitudes.</p>`; 
            }
    }

    
});
