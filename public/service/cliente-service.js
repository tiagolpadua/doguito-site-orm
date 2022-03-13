const BASE_PATH = '/clientes'

const listaClientes = () => {
    return fetch(`${BASE_PATH}`)
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json()
            }
            throw new Error('Não foi possível listar os clientes')
        })
}

const criaCliente = (nome, email) => {
    return fetch(`${BASE_PATH}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
        .then(resposta => {
            if (resposta.ok) {
                return resposta.body
            }
            throw new Error('Não foi possível criar um cliente')
        })
}

const removeCliente = (id) => {
    return fetch(`${BASE_PATH}/${id}`, {
        method: 'DELETE'
    })
        .then(resposta => {
            if (!resposta.ok) {
                throw new Error('Não foi possível deletar um cliente')
            }
        })
}

const detalhaCliente = (id) => {
    return fetch(`${BASE_PATH}/${id}`)
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json()
            }

            throw new Error('Não foi possível detalhar um cliente')
        })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`${BASE_PATH}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json()
            }
            throw new Error('Não foi possível detalhar um cliente')
        })
}

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}
