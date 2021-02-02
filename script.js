
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
        amount: -50001,
        date: '20/01/2021'
    }, 
    {
        id: 2,
        description: 'Criação WebSite',
        amount: 50012,
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
        const CSSClass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
                    <td class="description">${transaction.description}</td>
                    <td class="${CSSClass}">${amount}</td>
                    <td class="date">${transaction.date}</td>
                    <td>
                        <img src="./assets/minus.svg" alt="Imagem para menos">
                    </td>
                    `
        return html
    }
}

const Utils = {
    formatCurrency(value){
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "")

        value = Number(value)/100

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value
    }
}

transactions.forEach(
    function(transaction){
        DOM.addTransaction(transaction)
    }
)