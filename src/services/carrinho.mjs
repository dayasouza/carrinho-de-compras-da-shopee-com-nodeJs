// Quais ações meu carrinho pode fazer? 

// Adicionar item ✅
async function adicionarItem(usuarioCarrinho, item) {
    usuarioCarrinho.push(item);
}

// Deletar item 
async function deletarItem(usuarioCarrinho, nome) {

}

// Remover item
async function removerItem(usuarioCarrinho, id) {

}

// Calcular total
async function calcularTotal(usuarioCarrinho){
    return usuarioCarrinho.reduce((total, item) => total + item.subtotal(), 0);
}

export {
    adicionarItem,
    deletarItem,
    removerItem,
    calcularTotal,
}

