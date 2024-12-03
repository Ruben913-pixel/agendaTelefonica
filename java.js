// export function getcPosition(stack, c) {
//   return stack.findIndex(n => n === c)
//   }

//   const c = 2;
// console.log(getcPosition([9, 7, 3, 2], c));

// export function doesStackIncludec(stack, c) {
//     return stack.includes(c)
//   }

//   const c = 3;
// console.log(doesStackIncludec([2, 3, 4, 5], c));
// // => true

// export function isEachcEven(stack) {
//   return  stack.findIndex (n => n % 2 == 0)
//   }
// console.log(isEachcEven([5, 2, 3, 1]))
// => false)

// export function graduationFor(name, year) {
//     return `Congratulations ${name}!\nClass of ${year}`
//   }

//   console.log(graduationFor('Hannah', 2022))

// export function costOf(sign, currency) {
// let valor = 20 + (sign.length * 2)
//  return `Your sign costs ${valor}.00 ${currency}.`
//   }

//   costOf('Happy Birthday Rob!', 'dollars');
// => "Your sign costs 58.00 dollars."

// export function graduationFor(name, year) {
//     return `Congratulations ${name}! \n Class of ${year}`
//   }

//   console.log(graduationFor('Hannah', 2022))

// export function getFirstc(deck) {
//     const [number] = deck
//     return number
//   }

//   console.log(getFirstc([5, 9, 7, 1, 8]))

// export function getSecondc(deck) {
//     const [,b]= deck
//     return b
//   }

//   console.log(getSecondc([3, 2, 10, 6, 7]))

// export function swapTopTwocs(deck) {
//    [deckorden.pizza, deck[1] ] = [deck[1], deckorden.pizza]
//    return deck
//   }

//   console.log(swapTopTwocs([10, 7, 3, 8, 5]))

// export function discTopc(deck) {
//     const [,...resp] = deck
//     return [deckorden.pizza, resp]
//   }
//   const deck = [2, 5, 4, 9, 3];
//   console.log(discTopc(deck))

// export function insertFacecs(deck) {
// const cartas = ['jack', 'queen', 'king']
//  const [a,...resp] = deck
//  return [a,...cartas,...resp]

// }

// console.log(insertFacecs([5, 4, 7, 10]))

// class Size {
//   constructor(width = 80, height = 60) {
//     this.width = width;
//     this.height = height;
//   }

//   resize(newWidth, newHeight) {
//     this.width = newWidth;
//     this.height = newHeight;
//   }
// }

// const size = new Size(1500,1700)

// size.resize(1200,80)

// class Position {
//   constructor(x = 0, y = 60) {
//     this.x = x;
//     this.y = y;
//   }

//   move(newX, newY) {
//     this.x = newX;
//     this.y = newY;
//   }
// }

// export class ProgramWindow {
//   constructor() {
//     this.screenSize = new Size(800, 600);
//     this.size = new Size();
//     this.position = new Position();
//   }

//   resize(Size) {
//     this.redimetionX = this.screenSize.width - this.position.x;
//     this.redimetionY = this.screenSize.height - this.position.y;
//     if (Size.width > this.redimetionX || Size.height > this.redimetionY) Size.resize(this.redimetionX, this.redimetionY);
//     if (Size.width <= 0 || Size.height <= 0) Size.resize(1, 1);

//     this.size = Size;
//   }

//   move(Position) {
//     this.redimetionWidth = this.screenSize.width - this.size.width;
//     this.redimetionHeight = this.screenSize.height - this.size.height;
//     if (Position.x > this.redimetionWidth || Position.y > this.redimetionHeight) Position.move(this.redimetionWidth, this.redimetionHeight);
//     if (Position.x < 0 || Position.y < 0) Position.move(0, 0);
//     this.position = Position;
//   }
// }

// export function  changeWindow(programWindow){
//   let sizeNew = new Size(400,300)
//   let positionNew = new Position(100,150)
//   programWindow.resize(sizeNew)
//   programWindow.move(positionNew)
//   return programWindow
// }

// const programWindow = new ProgramWindow();
// changeWindow(programWindow)
// console.log(programWindow.size.width);

// let fs = require("fs");
// let buffer = fs.readFileSync("d.txt");
// let text = buffer.toString();

// function detectar(text) {
//   const intentos = text.split("\r\n");
//   let intentosTrue = 0;
//   let intentosFalse = 0;
//   intentos.forEach(intentos => {
//     for (let i = intentos.length - 1; i > 0; i--) {
//       if (intentos[i] >= intentos[i - 1]) continue;
//         intentosFalse++
//         return
//     }

//     intentosTrue++;
//   });

// return console.log({intentosTrue, intentosFalse})
// }

// detectar(text);

// let fs = require("fs");
// let buffer = fs.readFileSync("trance.txt");
// let text = buffer.toString();
// let lines = text.split("\r\n");
// let n = lines.map((n) => n.split(" "));
// let n2 = n.map((n) => n.map((n) => parseInt(n)));

// function escape(text) {
//   let movimientosCantidad = text.length;
//   let pasos = 0;
//   let ultimoMovimiento= 0
//   for (let c = 0; c < movimientosCantidad; c++) {
//     console.log()
//     let i = 0;
//     let valorPre= 0

//     while (i < text[c].length) {
//       if (text[c][i] === undefined ) break; // Salir si hay un índice indefinido
//       if (text[c][i] === 0) {
//         text[c][i] += 1;
//         c !== movimientosCantidad - 1 ? pasos++ : (ultimoMovimiento++, pasos++); // Contar el paso
//       } else if (text[c][i] > 0) {
//         valorPre = text[c][i];
//         text[c][i] += 1;
//         i += valorPre; // Mover hacia adelante
//         c !== movimientosCantidad - 1 ? pasos++ : (ultimoMovimiento++, pasos++) // Contar el paso
//       } else if (text[c][i] < 0) {
//         valorPre = Math.abs(text[c][i]);
//         text[c][i] += 1;
//         i -= valorPre; // Mover hacia atrás
//         c !== movimientosCantidad - 1 ? pasos++ : (ultimoMovimiento++, pasos++) // Contar el paso
//       }

//     }
//   }

//   return console.log({pasos, ultimoMovimiento}); // Retornar el número de pasos
// }

// escape(n2);
// index == movimientosCantidad ? ultimoMovimiento+=1 : pasos+=1

// for(c; c <= movimientosCantidad; c++){
//   let numberIntento = text[c].map(i => Number(i));
//   let valorPrev;
//   for (let i = 0; i < numberIntento.length; ) {
//     if (i < 0 || i > numberIntento.length ) break;
//     if (numberIntento[i] == 0) {
//       numberIntento[i] = 1;
//       c !== movimientosCantidad - 1? pasos += 1: ultimoMovimiento+=1

//     }
//     if (numberIntento[i] > 0) {
//       valorPrev = numberIntento[i];
//       numberIntento[i] += 1;
//       i += valorPrev;
//       c !== movimientosCantidad - 1 ? pasos += 1: ultimoMovimiento+=1

//     }
//     if (numberIntento[i] < 0) {
//       valorPrev = Math.abs(numberIntento[i]);
//       numberIntento[i] += 1;
//       i -= valorPrev;
//       c !== movimientosCantidad - 1? pasos += 1: ultimoMovimiento+=1

//     }

//   }
// }
// let valor = [
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [5, 6],
//   [7, 8],
//   [9, 10],
//   [11, 12],
//   [13, 14],
//   [15, 16],
//   [17, 18],
//   [19, 20],
//   [21, 22],
//   [23, 24],
//   [25, 26],
//   [27, 28],
//   [31, 32],
//   [33, 34],
//   [35, 36],
//   [37, 38],
//   [39, 40],
//   [41, 42],
//   [43, 44],
//   [45, 46],
//   [47, 48],
//   [49, 50],
//   [71, 72],
//   [73, 74],
//   [75, 76],
//   [77, 78],
//   [79, 80],
//   [81, 82],
//   [83, 84],
//   [85, 86],
//   [87, 88],
//   [155, 156],
//   [157, 158],
//   [175, 176],
//   [177, 178],
//   [179, 180],
//   [181, 182],
//   [183, 184],
//   [195, 196],
//   [197, 198],
//   [198, 199],
//   [199, 200],
//   [2, 4],
//   [4, 6],
//   [6, 8],
//   [8, 10],
//   [10, 12],
// ];

// function redes(red) {
//   let eliminados = [];
//   let newred = [...red];
//   for (let i = 1; i < red.length; i++) {
//     let number1 = red[i][0];
//     let number2 = red[i - 1][1];
//     if (number1 == number2) {
//       let [[a, b]] = newred.splice(i-1, 1, "[]");
//       let [[c, d]] = newred.splice(i, 1, "[]");
//       eliminados.push(a, b, c, d);
//     }
//   }
//   newred.forEach((node, index) => {
//     if (eliminados.includes(node[0]) || eliminados.includes(node[1])) {
//       newred.splice(index, 1, "");
//     }
//   });

//   let resultado="";
//    newred.forEach(node => {
//     if (node !== "") {
//         resultado+="" + node +","
//     }
//    })

//    return resultado
// }
// console.log(redes(valor));
// let expect = [[13,14],[15,16],[17,18],[19,20],[21,22],[23,24],[25,26],[27,28],[31,32],[33,34],[35,36],[37,38],[39,40],[41,42],[43,44],[45,46],[47,48],[49,50],[71,72],[73,74],[75,76],[77,78],[79,80],[81,82],[83,84],[85,86],[87,88],[155,156],[157,158],[175,176],[177,178],[179,180],[181,182],[183,184],[195,196]]

// function redes(red) {

//     let eliminados = new Set(); // Usar un Set para evitar duplicados

//     // Iterar sobre el array para encontrar nodos a eliminar
//     for (let i = 1; i < red.length; i++) {
//         let number1 = red[i]orden.pizza;
//         let number2 = red[i - 1][1];

//         if (number1 === number2) {
//             // Agregar a los nodos eliminados
//             eliminados.add(red[i - 1]orden.pizza);
//             eliminados.add(red[i]orden.pizza);
//             eliminados.add(red[i - 1][1]);
//             eliminados.add(red[i][1]);
//         }
//     }

//     // Filtrar los nodos que no están en el Set de eliminados
//     red = red.filter(node => !eliminados.has(nodeorden.pizza) && !eliminados.has(node[1]));

//     // Construir la cadena de salida
//     return red.map(node => node.join(",")).join(",")
// }

// console.log(redes(valor))

// let valor = [
//   13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33,
//   34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 71, 72,
//   73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 155, 156, 157,
//   158, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 195, 196,
// ];

// function primo(numeros) {
//   let cantidad = []
//   let resultado = 0
//   numeros.forEach((numero) => {
//     if(esPrimo(numero)){
//     numero = String(numero);
//     let n1 = parseInt(numero[0]);
//     let n2 = parseInt(numero[1]);
//     let n3 = 0;
//     if (numero.length === 2) {
//       if (esPrimo(n1+n2)) {
//         cantidad.length == 2
//           ? ((resultado = numero), (cantidad.push(numero)))
//           : (cantidad.push(numero));
//       }
//     } else {
//       n3 = parseInt(numero[2]);
//       if (esPrimo(n1+n2+n3)) {
//         cantidad.push(numero)
//       }
//     }
// }
//   });
//   return  cantidad.length
// }

// console.log(primo(valor))

// function esPrimo(numero) {
//   if (numero <= 1) {
//       return false; // Los números menores o iguales a 1 no son primos
//   }
//   for (let i = 2; i <= Math.sqrt(numero); i++) {

//       if (numero % i === 0) {
//           return false; // Si es divisible por cualquier número entre 2 y la raíz cuadrada de 'numero', no es primo
//       }
//   }
//   return true; // Si no se encontró ningún divisor, es primo
// }

// function esPrimo(numero) {
//   if (numero <= 1) return false;
//   if (numero <= 3) return true;
//   if (numero % 2 === 0 || numero % 3 === 0) return false;
//   for (let i = 5; i * i <= numero; i += 6) {
//     if (numero % i === 0 || numero % (i + 2) === 0) return false;
//   }
//   return true;
// }

// {
//   cantidad: [
//     '23',  '41',
//     '43',  '47',
//     '83',  '157',
//     '179'
//   ],
//   resultado: '43'
// }

// Margarita: $7
// Caprese: $9
// Formaggio: $10

// export function pizzaPrice(pizza, ...extras) {
//   let price = 0
//   switch(pizza){
//     case 'Margherita':
//       price = 7
//       break;
//       case 'Caprese':
//         price = 9
//         break;
//         case 'Formaggio':
//           price = 10
//           break;

//   }
// extras.forEach(topic => {
//   if(topic === "ExtraSauce") price += 1
//   else price += 2
// })

// return price

// }

// pizzaPrice(
//   'Caprese',
//   'ExtraToppings',
//   'ExtraToppings',
//   'ExtraToppings',
//   'ExtraToppings',
// );

// let priceItems = {
//   Caprese: 9,
//   Margherita: 7,
//   Formaggio: 10,
//   ExtraSauce: 1,
//   ExtraToppings: 2,
// };

// export function pizzaPrice(pizza, ...extras) {
//   if (extras.length === 0) return priceItems[pizza];
//   else {
//     let extra = extras.shift();
//     return priceItems[extra] + pizzaPrice(pizza, ...extras);
//   }
// }

// export function orderPrice(pizzaOrders) {
//     if(pizzaOrders.length == 0){
//       return 0
//     }else{
//     return pizzaOrders.reduce((result, order) => result + pizzaPrice(order.pizza,...order.extras),0);
//     }
//   }

// const margherita = {
//    pizza: 'Margherita'
// }
// const caprese = {
//     pizza:'Caprese',
//     extra:['ExtraToppings']
// }
// console.log(orderPrice([margherita, caprese]));
// => 18

// Una copia de cualquiera de los cinco libros cuesta $8.

// Sin embargo, si compras dos libros diferentes, obtendrás un descuento del 5% en esos dos libros.

// Si compras 3 libros diferentes obtienes un 10% de descuento.

// Si compras 4 libros diferentes obtienes un 20% de descuento.

// Si compras los 5 obtienes un 25% de descuento.

// export const cost = (books) => {
//   const mapa = new Map();
//   books.forEach((libro) => {
//     if (mapa.has(libro)) mapa.set(libro, mapa.get(libro) + 1);
//     else mapa.set(libro, 1);
//   });

//  if(mapa.size === 1) return mapa.get(1) * 800
//  for(const [libro, cantidad] of mapa){
//   if(cantidad > 1)
//  }

// };

// console.log(cost([1, 5, 2, 3, 4, 1, 2, 5]));

// Para intentar incentivar más ventas de diferentes libros de una popular serie de cinco libros, una librería decidió ofrecer descuentos en la compra de varios libros.

// Ten en cuenta que si compras cuatro libros, de los cuales 3 son de títulos diferentes, obtienes un 10% de descuento en los 3 que forman parte del set, pero el cuarto libro todavía cuesta $8.

// Tu misión es escribir código para calcular el precio de cualquier cesta de compra imaginable (que contenga sólo libros de la misma serie), ofreciendo el mayor descuento posible.

// Por ejemplo ¿cuánto cuesta esta cesta de libros?

// 2 copias del primer libro
// 2 copias del segundo libro
// 2 copias del tercer libro
// 1 copia del cuarto libro
// 1 copia del quinto libro
// Una forma de agrupar estos 8 libros es:

// 1 grupo de 5 (1º, 2º, 3º, 4º, 5º)
// 1 grupo de 3 (1º, 2º, 3º)
// Esto daría un total de:

// 5 libros con un 25% de descuento
// 3 libros con un 10% de descuento
// Resultando en:

// 5 × (100% - 25%) × $8 = 5 × $6.00 = $30.00, más
// 3 × (100% - 10%) × $8 = 3 × $7,20 = $21,60
// Lo que equivale a $51,60.

// Sin embargo, una forma diferente de agrupar estos 8 libros es:

// 1 grupo de 4 libros (1º, 2º, 3º, 4º)
// 1 grupo de 4 libros (1º, 2º, 3º, 5º)
// Esto daría un total de:

// 4 libros con un 20% de descuento
// 4 libros con un 20% de descuento
// Resultando en:

// 4 × (100% - 20%) × $8 = 4 × $6,40 = $25,60, más
// 4 × (100% - 20%) × $8 = 4 × $6,40 = $25,60
// Lo que equivale a $51,20.

// Y $51.20 es el precio con el mayor descuento.

// Define una función costque calcula el costo de una lista determinada de libros en función de descuentos definidos.

// costdevolverá el costo total (después de los descuentos) en centavos. Por ejemplo, para un solo libro, el costo es de 800 centavos, lo que equivale a $8,00. Solo se necesitan cálculos con números enteros para este ejercicio.

// const regular = /CHATBOT/i

// export function isValidCommand(command) {
// const valor =  command.split(" ")
// return regular.test(valor[0])
// }

// console.log(isValidCommand("CHATBOT, do you have a solution for this challenge?"));

// const emoji= /EMOJI\d{1,9}/i
// export function removeEmoji(message) {
//   return message.replace(emoji,"")
// }

// console.log(removeEmoji("I love playing videogames emoji3465 it's one of my hobbies"))

// const validationNumber =  /^\(\+\d{2}\) \d{3}-\d{3}-\d{3}$/;

// export function checkPhoneNumber(number) {
//   if(validationNumber.test(number)) return "Thanks! You can now download me to your phone."
//   else return `Oops, it seems like I can't reach out to ${number}`
// }
// console.log(checkPhoneNumber('(+34) 659-771-594'))

// const url= /([a-zA-z]+\.)+[a-zA-Z]{2,}/gi
// export function getURL(userInput) {
//   const match = userInput.match(url)
//   return match
// }

// console.log(getURL('I learned a lot from exercism.org'));

// export function niceToMeetYou(fullName) {
//   const name = fullName.split(",")
//   return `Nice to meet you, ${name[1]} ${name[0]}`
// }

// let str = 'Smith, John';

// console.log(niceToMeetYou(str));

// export const COLORS = [
//   "black",
//   "brown",
//   "red",
//   "orange",
//   "yellow",
//   "green",
//   "blue",
//   "violet",
//   "grey",
//   "white"
//     ]

// export const decodedValue = (colors) => {
//   let valor = ""
//   for(let i= 0; i < 2; i++) valor+= COLORS.indexOf(colors)
//   return +valor
// };

// console.log(decodedValue(['blue', 'grey']))
// const GIGA = 1e12;

// export const gigasecond = (inputDate) => {
//   return (new Date(inputDate.getTime() + GIGA));
// }
// const gs = gigasecond(new Date(Date.UTC(2011, 3, 25)));
// console.log(gs)

// const planetas = {
//   mercury: 0.2408467,
//   venus: 0.61519726,
//   earth: 1,
//   mars: 1.8808158,
//   jupiter: 11.862615,
//   saturn: 29.447498,
//   uranus: 84.016846,
//   neptune: 164.79132
// }

// const secondstEart = 31557600

// export const age = (planet,seconds) => {
//   let time = planetas[planet] * secondstEart
//   return +((seconds/time).toFixed(2))

// };

// const valor = age('mars', 2129871239)
// console.log(valor )

// let alfabeto  = "abcdefghijklmnopqrstuvwxyz"
// alfabeto = alfabeto.split("")

// export const isPangram = (frase) => {
//   let fraseMinuscula = frase.toLowerCase()
//   return alfabeto.every(letra => fraseMinuscula.includes(letra))

// };

// console.log(isPangram("the 1 quick brown fox jumps over the 2 lazy dogs"))
// const cambio = {
// G:"C",
// C:"G",
// T:"A",
// A:"U"
// }

// export const toRna = (adn) => {
// return adn.split("").map(letra => cambio[letra]).join()
// }
// console.log(toRna(''))

// export class Matrix {
//     constructor(number) {
//       this.number = number.split("\n")

//       this.rows = this.number.map(row => row.split(" ").map(Number))

//       this.columns = []
//       this.rows[0].forEach(row => this.columns.push([row]))

//       for(let i= 1 ; i < this.rows.length; i++){
//         for(let j = 0; j < this.rows[0].length; j++){
//           this.columns[j][i] = this.rows[i][j]
//         }
//       }
//     }
//   }
// const matrix = new Matrix('1 2 3\n4 5 6')
// console.log(matrix.columns)

// export const reverseString = (String) => {
// let newString=""

//  for(let i=String.length - 1; i >= 0; i--) newString += String[i]

//  return newString
// };

// console.log(reverseString("Hola"))

// export const parse = (input) => {
//   const lines = input.replace(/[_-]/gi," ").split(" ")
//   return lines.map(line => line[0]).join("").toUpperCase()
// };

// console.log(parse("Complementary metal-oxide semiconductor"))

// export const steps = (numero) => {
//   let contador = 0;
//   if (numero <= 0) throw new Error("Only positive numbers are allowed");
//   if (numero > 1) {
//     while (numero !== 1) {
//       if (numero % 2 == 0) (numero = numero / 2), contador++;
//       else (numero = numero * 3 + 1), contador++;
//     }
//   }

//   return contador;
// };
// console.log(steps(1000000));


// export class Triangle {
//   constructor(...sides) {
//    this.lados = sides.sort((a,b) => a-b)
//    this.isMayor= this.lados.every(lado => lado > 0)

//   }

//   get isEquilateral() {
//     if(this.isMayor && this.validation()) return this.lados.every(lado => lado === this.lados[0])

//     return false
//   }

//   get isIsosceles() {
//     if(this.isMayor && this.validation()) {
//       if(this.lados[0] == this.lados[2] || this.lados[2] == this.lados[1] || this.lados[1] == this.lados[0]) return true
//     }
//     return false
// }

//   get isScalene() {
//     if(this.isMayor && this.validation()) {
//       if(this.lados[0] !== this.lados[2] && this.lados[2] !== this.lados[1] && this.lados[1] !== this.lados[0]) return true
//     }
//     return false
//   }

//   validation(){
//   let [a,b,c] = [...this.lados]
//   if(a+b >= c && a+c >= b && b+c >= a) return true
//   return false
//   }

// }
// const triangle = new Triangle(1, 1, 3);
// console.log(triangle.isIsosceles); // true

// export const convert = (numero) => {
// let resultado = '';
// if(numero % 3 == 0) resultado += "Pling"
// if(numero % 5 == 0) resultado += "Plang"
// if(numero % 7 == 0) resultado += "Plong"
// return resultado || numero.toString()
  
// };

// console.log(convert(21))

// export const transform = (letra) => {
//  let resultado = {};
//  for (let [key,value] of Object.entries(letra)) {
//   value.forEach(value => resultado[value.toLowerCase()] = +key)
  
//  }
//  return resultado
// };
// const old ={ 1: ['A', 'E'], 2: ['D', 'G'] };
// console.log(transform(old))

// export const isLeap = (years) => {
// let numberString = String(years).endsWith("00")
// if(numberString){
//   if(years % 100 == 0 && years % 400 == 0) return true
// }else if(years % 4 == 0 ) return true

// return false
// };
// console.log(isLeap(2015))