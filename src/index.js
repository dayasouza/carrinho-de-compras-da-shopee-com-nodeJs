import criarItem from "./services/itens.mjs";

const carrinho = [];

console.log("Bem vindo ao seu carrinho da Shopee!");

const item1 = await criarItem("hotwheels ferrari", 20.99, 1);
const item2 = await criarItem("hotweels lamborghini", 39.99, 3);

console.log(item2.subtotal());
console.log(item1.subtotal());