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
async function removerItem(usuarioCarrinho, item) {
    const indexFound = usuarioCarrinho.findIndex((p) => p.nome === item.nome);
    if (indexFound === -1){
        console.log("item não encontrado");
        return;
    }

    if (usuarioCarrinho[indexFound].quantidade > 1){
        usuarioCarrinho[indexFound].quantidade -= 1;
        return;
    }

    if (usuarioCarrinho[indexFound].quantidade == 1){
        usuarioCarrinho.splice(indexFound, 1);
        return;
    }
}

// Calcular total
async function calcularTotal(usuarioCarrinho){
    console.log("\nO total do carrinho da Shopee é: ");
    const resultado = usuarioCarrinho.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`${resultado}`);
}

async function exibirCarrinho(usuarioCarrinho){
    console.log("Lista de compras da Shopee");
    usuarioCarrinho.forEach((item, index) => {
        console.log(`\n${index + 1}. ${item.nome} - R$ ${item.preco} | ${item.quantidade}x | Subtotal = ${item.subtotal()}`);
    })
}

export {
    adicionarItem,
    deletarItem,
    removerItem,
    calcularTotal,
    exibirCarrinho,
};

