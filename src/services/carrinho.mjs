// Quais ações meu carrinho pode fazer? 

// Adicionar item ✅
async function adicionarItem(usuarioCarrinho, item) {
    usuarioCarrinho.push(item);
}

// Deletar item 
async function deletarItem(usuarioCarrinho, nome) {
    const index = usuarioCarrinho.findIndex((item) => item.nome === nome);

    if (index != -1){
        usuarioCarrinho.splice(index, 1);
    }
}

// Remover item
async function removerItem(usuarioCarrinho, id) {

}

// Calcular total
async function calcularTotal(usuarioCarrinho){
    const resultado = usuarioCarrinho.reduce((total, item) => total + item.subtotal(), 0);
    console.log(resultado);
}

async function exibirCarrinho(usuarioCarrinho){
    console.log("Lista de compras da Shopee");
    usuarioCarrinho.forEach((item, index) => {
        console.log(`${index + 1}. ${item.nome} - R$ ${item.preco} | ${item.quantidade} | ${item.subtotal}`)
    })
}

export {
    adicionarItem,
    deletarItem,
    removerItem,
    calcularTotal,
    exibirCarrinho,
};

