
const Modal = {
    open() {
        //Abrir Modal - Adicionar a class active no Modal
        document
            .querySelector('.modal-overlay')
            .classList.add('active')

    },
    close() {
        //Fechar Modal - Remover a class active do Modal
        document
            .querySelector('.modal-overlay')
            .classList.remove('active')
    }
}

const transactions = 
[
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '20/01/2021'
    }, 
    {
        id: 2,
        description: 'Criação WebSite',
        amount: 50000,
        date: '20/01/2021'
    }, 
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '20/01/2021'
    }
]

const Transaction = {
    incomes(){
        //Somar entradas.    

    },
    expenses(){
        //Somar saidas.

    },
    total(){
        //Entradas - Saidas

    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    
    addTransaction(transaction, index){
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)

    },
    innerHTMLTransaction(transaction){
        const html = `
                    <td class="description">${transaction.description}</td>
                    <td class="expense">${transaction.amount}</td>
                    <td class="date">${transaction.date}</td>
                    <td>
                        <img src="./assets/minus.svg" alt="Imagem para menos">
                    </td>
                    `
        return html
    }
}

DOM.addTransaction(transactions[0])
DOM.addTransaction(transactions[1])
DOM.addTransaction(transactions[2])