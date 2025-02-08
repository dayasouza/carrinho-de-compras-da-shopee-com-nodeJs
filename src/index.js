import criarItem from "./services/itens.mjs";
import * as carrinhoService from "./services/carrinho.mjs";

const meuCarrinho = [];
const listaDeDesejo = [];

console.log("Bem vindo ao seu carrinho da Shopee!");

const item1 = await criarItem("hotwheels ferrari", 20.99, 1);
const item2 = await criarItem("hotweels lamborghini", 39.99, 3);

await carrinhoService.adicionarItem(meuCarrinho, item1);
await carrinhoService.adicionarItem(meuCarrinho, item2);

await carrinhoService.deletarItem(meuCarrinho, item2.nome);

console.log("O total do carrinho da Shopee é: ");
await carrinhoService.calcularTotal(meuCarrinho);

// console.log(item2.subtotal());
// console.log(item1.subtotal());