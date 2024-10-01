let menu;
let contador = 0;

do {
  menu = parseInt(
    prompt(
      "Bienvenido al taller de Arreglos.\n\n Elige un ejercicio del número 1 al 25 \n 0. para salir."
    )
  );

  if (menu != 0) {
    contador++;
  }

  switch (menu) {
    case 0:
      alert("Saliendo del programa, ejercicios ejecutados: " + contador);
      break;
    case 1:
      //Duplicar cada valor en el arreglo Dado el arreglo [1, 2, 3, 4, 5].

      let numeros = [1, 2, 3, 4, 5];
      let numerosDuplicados = numeros.map(function (numero) {
        return numero * 2;
      });

      alert("Duplicar cada valor");
      alert(numeros);
      alert("Numeros duplicados " + numerosDuplicados);

      break;

    case 2:
      // Convertir temperaturas de Celsius a Fahrenheit

      let gradosCelsius = [0, 10, 20, 30, 40];
      let gradosFahrenheit = gradosCelsius.map(function (gradosConvertidos) {
        return (gradosConvertidos * 9) / 5 + 32;
      });
      alert("Convertir temperaturas de Celsius a Fahrenheit ");
      alert(gradosCelsius);
      alert(gradosFahrenheit);

      break;

    case 3:
      //Filtrar números impares
      let numerosCaso3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      let numerosImpares = numerosCaso3.filter((numeroImpar) => {
        if (numeroImpar % 2 == 1) {
          return numeroImpar;
        }
      });
      alert("Filtrar números impares");
      alert(numerosCaso3)
      alert("Los Números Impares del arreglos son: " + numerosImpares);

      break;

    case 4:
      //Filtrar números mayores que 20

      let numerosCaso4 = [10, 25, 32, 8, 5, 42, 17];
      let numerosMayores = numerosCaso4.filter((mayores) => {
        if (mayores > 20) {
          return mayores;
        }
      });
       alert("Filtrar números mayores que 20");
       alert(numerosCaso4);
      alert("Números mayores que 20: \n" + numerosMayores);

      break;

    case 5:
      //Buscar un número mayor que 50

      let numerosCaso5 = [15, 25, 35, 45, 55, 65];

      let primerMayor = numerosCaso5.find((mayorDe50) => {
        if (mayorDe50 > 50) {
          return mayorDe50;
        }
      });
      
      alert("Buscar un número mayor que 50");
      alert(numerosCaso5);
      alert("El primer número mayor que 50 es: " + primerMayor);
      break;

    case 6:
      //Convertir todos los nombres a mayúsculas

      let nombresCaso6 = ["ana", "beto", "carla"];
      let nombreAMayuscula = nombresCaso6.map(function (aMayuscula) {
        return aMayuscula.toUpperCase(); // Convierte cada nombre a mayúsculas
      });
    
      alert("Convertir todos los nombres a mayúsculas");
      alert(nombresCaso6);
      alert(nombreAMayuscula);

      break;

    case 7:
      //Agregar un símbolo a cada elemento
      let colores = ["rojo", "azul", "verde"];
      let elementoAgregado = colores.map(function (agregar) {
        return agregar + "*";
      });

      alert("Agregar un símbolo a cada elemento");
      alert(colores);
      alert(elementoAgregado);
      break;

    case 8:
      //Filtrar palabras cortas

      let palabrasCaso8 = ["casa", "arbol", "estrella", "sol"];
      let palabrasCortas = palabrasCaso8.filter((pCortas) => {
        return pCortas.length < 5;
      });

      alert("Filtrar palabras cortas");
      alert(palabrasCaso8);
      alert("Las palabras más cortas son: \n" + palabrasCortas);
      break;

    case 9:
      //Filtrar números negativos
      let numerosCaso9 = [-5, 10, -2, 4, 0, -1];
      let numerosNegativos = numerosCaso9.filter((nNegativos) => {
        return nNegativos < 0;
      });

      alert("Filtrar números negativos");
      alert(numerosCaso9);
      alert("Los Números negativos son: " + numerosNegativos);

      break;

    case 10:
      //Buscar un nombre con más de 5 letras
      let nombresCaso10 = ["luna", "estrella", "cometa", "galaxia"];
      let nombreConMasLetras = nombresCaso10.find((masLetras) => {
        return masLetras.length > 5;
      });

      alert("Buscar un nombre con más de 5 letras");
      alert(nombresCaso10);
      alert(
        "El nombre: " +
          nombreConMasLetras +
          " es el primero con más de 5 letras"
      );
      break;

    case 11:
      //Multiplicar cada valor por 3
      let numerosCaso11 = [1, 2, 3, 4, 5];
      let numerosMultiplicados = numerosCaso11.map(function (
        multiplicarNumero
      ) {
        return multiplicarNumero * 3;
      });

      alert("Multiplicar cada valor por 3");
      alert(numerosCaso11);
      alert("multiplicados: " + numerosMultiplicados);

      break;

    case 12:
      // Obtener palabras que comiencen con 'e'
      let palabrasCaso12 = ["elefante", "perro", "espejo", "gato"];
      let palabrasConE = palabrasCaso12.filter((palabrasE) => {
        return palabrasE.startsWith("e"); //Comprueba si la palabra comienza con la letra "e"
      });

      alert("Obtener palabras que comiencen con 'e'");
      alert(palabrasCaso12);
      alert("Las palabras que comienzan con e son: " + palabrasConE);
      break;

    case 13:
      //Buscar el primer número divisible por 4

      let numerosCaso13 = [5, 16, 20, 33, 40];
      let primerNumeroDivisible = numerosCaso13.find((numeroDivisible) => {
        if (numeroDivisible % 4 === 0) {
          return numeroDivisible;
        }
      });

      alert("Buscar el primer número divisible por 4");
      alert(numerosCaso13);
      alert("El primer Número divisible por 4 es: " + primerNumeroDivisible);

      break;

    case 14:
      // Redondear los números decimales

      let numerosCaso14 = [1.2, 2.5, 3.8, 4.1];
      let numerosRedondeados = numerosCaso14.map((redondear) => {
        return Math.round(redondear);
      });

      alert("Redondear los números decimales");
      alert(numerosCaso14);
      alert("Números redondeados: " + numerosRedondeados);
      break;

    case 15:
      // Filtrar números mayores o iguales a 50

      let numerosCaso15 = [45, 60, 30, 80, 100];
      let numerosMayorIguales = numerosCaso15.filter((numerosFiltrados) => {
        if (numerosFiltrados >= 50) {
          return numerosFiltrados;
        }
      });

      alert("Filtrar números mayores o iguales a 50");
      alert(numerosCaso15);
      alert("Los números Mayor o igules a 50 son: " + numerosMayorIguales);
      break;

    case 16:
      //Buscar la primera palabra que tenga la letra 'a'

      let palabrasCaso16 = ["sol", "luna", "estrella", "cometa"];
      let primeraPalabraConA = palabrasCaso16.find((primeraConA) => {
        return primeraConA.includes("a"); //método que comprueba si la palabra tiene "n" letra
      });

      alert("Buscar la primera palabra que tenga la letra 'a'");
      alert(palabrasCaso16);
      alert(
        "La primera palabra encontrada que tiene la letra a es: " +
          primeraPalabraConA
      );
      break;

    case 17:
      //Sumar 5 a cada número
      let numerosCaso17 = [5, 10, 15, 20];
      let numerosSumandos = numerosCaso17.map((sumarCinco) => {
        return sumarCinco + 5;
      });

      alert("Sumar 5 a cada número");
      alert(numerosCaso17);
      alert("Sumandole 5 son: " + numerosSumandos);
      break;

    case 18:
      // Convertir todas las palabras a minúsculas
      let palabrasCaso18 = ["Casa", "ARbOl", "Sol"];
      let palabrasMinuscula = palabrasCaso18.map((minuscula) => {
        return minuscula.toLowerCase();
      });

      alert("Convertir todas las palabras a minúsculas");
      alert(palabrasCaso18);
      alert(palabrasMinuscula);
      break;

    case 19:
      //Filtrar números pares
      let numerosCaso19 = [12, 3, 5, 7, 10, 20, 25];
      let numerosPares = numerosCaso19.filter((pares) => {
        if (pares % 2 === 0) {
          return pares;
        }
      });

      alert("Filtrar números pares");
      alert(numerosCaso19);
      alert("los pares son: " + numerosPares);

      break;

    case 20:
      // Buscar el primer número negativo

      let numerosCaso20 = [5, 10, -3, 2, -8, 7];
      let primerNegativo = numerosCaso20.find((pNegativo) => {
        return pNegativo < 0;
      });

      alert("Buscar el primer número negativo");
      alert(numerosCaso20);
      alert("El primer número negativo es: " + primerNegativo);

      break;

    case 21:
      // Dividir cada número entre 2
      let numerosCaso21 = [10, 20, 30, 40];
      let numerosDivididos = numerosCaso21.map((dividir) => {
        return dividir / 2;
      });

      alert("Dividir cada número entre 2");
      alert(numerosCaso21);
      alert("Divididos: " + numerosDivididos);

      break;

    case 22:
      // Filtrar palabras con más de 6 letras

      let palabrasCaso22 = ["camino", "casa", "edificio", "ciudad"];
      let palabrasMasDe6 = palabrasCaso22.filter((masDe6) => {
        return masDe6.length > 6;
      });

      alert("Filtrar palabras con más de 6 letras");
      alert(palabrasCaso22);
      alert("Palabras con más de 6 letras: \n" + palabrasMasDe6);

      break;

    case 23:
      // Buscar el primer número impar mayor que 10

      let numerosCaso23 = [4, 9, 13, 22, 31];
      let primerImparMayorA10 = numerosCaso23.find((pMayorA10) => {
        if (pMayorA10 > 10 && pMayorA10 % 2 === 1) {
          return pMayorA10;
        }
      });
      
      alert("Buscar el primer número impar mayor que 10");
      alert(numerosCaso23);
      alert("El primer impar mayor a 10 es: " + primerImparMayorA10);

      break;

    case 24:
      //Concatenar una palabra a cada elemento

      let palabrasCaso24 = ["manzana", "naranja", "pera"];
      let concatenarPalabra = palabrasCaso24.map((unirPalabra) => {
        return unirPalabra + " fruta";
      });

      alert("Concatenar una palabra a cada elemento");
      alert(palabrasCaso24);
      alert(concatenarPalabra);

      break;

    case 25:
      // Filtrar números mayores que el promedio
      let numerosCaso25 = [10, 20, 30, 40, 50, 60];
      let suma = 0;

      numerosCaso25.forEach((numeroMayor) => {
        suma = suma + numeroMayor;
      });

      let promedioConNombreExtrano = suma / numerosCaso25.length;

      let nMayoresAlPromedio = numerosCaso25.filter((mayorAlPromedio) => {
        if (mayorAlPromedio > promedioConNombreExtrano) {
          return mayorAlPromedio;
        }
      });

      alert("Filtrar números mayores que el promedio");
      alert(numerosCaso25);
      alert("Números mayor al promedio: " + nMayoresAlPromedio);
      break;

    default:
      alert("Opción invalida, ingrese un número del 1 al 25");
      break;
  }
} while (menu != 0);
