const numero = document.querySelector(".papa");
let calculo = "";
let operation = document.querySelector(".operation");
let display = document.querySelector(".resultados");

numero.addEventListener('click', (event) => {

    calculo = document.querySelector(".calculo");
    if(event.target.value==="C"){
        //console.log("Se digito la C: "+ event.target.value);
        display.innerHTML = "";
        //console.log("DISPLAY cuando se digita la C: "+ display.innerHTML );
    }else if(event.target.value==="←"){
        display.innerHTML = display.innerHTML.slice(0, -1); // Removes the last character
        if(display.innerHTML.length===0)
            display.innerHTML = 0;
    }else if(event.target.value==="x" || event.target.value==="+" || event.target.value==="-" || event.target.value==="=" || event.target.value==="÷"){
        let operacion = event.target.value;
        
        if(event.target.value==="+"){
            //console.log("entro por la suma "+ operacion);
            calculo.value += display.innerHTML;
            //console.log("calculo.value en la suma: "+calculo.value);
            display.innerHTML = "";
            operation = event.target.value;
            //console.log("Operacion: "+operation);
        }else if(event.target.value==="-"){
            //console.log("entro por la resta: "+ operacion);
            calculo.value += display.innerHTML;
            //console.log("calculo.value en la resta: "+calculo.value);
            display.innerHTML = "";
            operation = event.target.value;
        }else if(event.target.value==="x"){
            //console.log("entro por la multiplicar: "+ operacion);
            calculo.value += display.innerHTML;
            //console.log("calculo.value en la multiplicar: "+calculo.value);
            display.innerHTML = "";
            operation = event.target.value;
        }else if(event.target.value==="÷"){
            //console.log("entro por la divisiooon: "+ operacion);
            calculo.value += display.innerHTML;
            //console.log("calculo.value en la dividir: "+calculo.value);
            display.innerHTML = "";
            operation = event.target.value;
            //console.log("Operation es en la division: "+operation);
        }else if(event.target.value==="="){
            //console.log("VOY A VALIDAR SI primero hacen = y el valor de calculo es: "+calculo.value);
            if(parseInt(calculo.value)>0){
                //console.log("entro por el igual, vamos a: "+ operation);
                if(operation==="+"){
                    //console.log("vamos a sumar "+ operation);
                    calculo.value = parseInt(calculo.value) + parseInt(display.innerHTML);
                }
                if(operation==="-"){
                    console.log("vamos a restar "+ operation);
                    console.log(" parseInt(calculo.value) "+  parseInt(calculo.value));
                    console.log(" parseInt(display.innerHTML) "+  parseInt(display.innerHTML));
                    calculo.value = parseInt(calculo.value) - parseInt(display.innerHTML);
                }
                if(operation==="x"){
                    //console.log("vamos a multiplicar "+ operation);
                    calculo.value = parseInt(calculo.value) * parseInt(display.innerHTML);
                }
                if(operation==="÷"){
                    //console.log("vamos a dividir "+ operation);
                    //console.log("display.innerHTML: "+ parseInt(display.innerHTML));
                    if(parseInt(display.innerHTML) === 0){  //Division por zero
                        //console.log("debe poner el msg de Error division por cero");
                        display.innerHTML = "Error";
                    }else{
                        calculo.value = parseInt(calculo.value) / parseInt(display.innerHTML);
                    }
                }
                //console.log("calculo.value en el igual "+ calculo.value);
                //console.log("display.innerHTML es: "+display.innerHTML);
                if(display.innerHTML === "Error"){  //Division por zero
                    //console.log("No haga nada, hizo division por cero");
                    //display.innerHTML = "Error";
                }else{
                    display.innerHTML = calculo.value;
                }

                
                operation= event.target.value;
                //console.log("Operation en el IGUAL: "+operation);
            }else{
                //console.log("No se ha digitado ningun numero calculo.value es vacio y se digito =");
            }
        }
    }else{
        if(operation==="="){
            //console.log("YA SE Habia presionado un igual, se va a limpiar todo");
            calculo.value = "";
            operation = "";
            display.innerHTML = event.target.value;
        }else{
            //console.log("Se digito un Numero : "+ event.target.value);
            //console.log("Valor de calculo.value cuando se digita un #: "+ calculo.value);
            if(parseInt(calculo.value) === 0){
                //console.log("Se debe borrara el valor en el Input");
                calculo.value = calculo.value.slice(0, -1);
                //console.log("Nuevo valor de Calculo value al borra el 0: "+ calculo.value);
            }
            display.innerHTML += event.target.value;   
            //console.log("-------display.innerHTML:"+display.innerHTML);
        }
        
    }

});