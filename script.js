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

const Transaction = {
    all: [
        {
            description: 'Luz',
            amount: -50001,
            date: '20/01/2021'
        }, 
        {
            description: 'Criação WebSite',
            amount: 50012,
            date: '20/01/2021'
        }, 
        {
            description: 'Internet',
            amount: -100000,
            date: '20/01/2021'
        },
        {
            description: 'DEV',
            amount: 50012,
            date: '20/01/2021'
        }
    ],
    
    add(transaction) {

        Transaction.all.push(transaction)

        App.reload()

    },

    remove(index){

        Transaction.all.splice(index, 1)

        App.reload()
    },

    incomes(){

        let income = 0

        Transaction.all.forEach((transaction) => {
            if(transaction.amount > 0){
                income += transaction.amount
            }
        })

        return income

    },

    expenses(){
        
        let expense = 0

        Transaction.all.forEach((transaction) => {
            if(transaction.amount < 0){
                expense += transaction.amount
            }
        })

        return expense
    },

    total(){

        return Transaction.incomes() + Transaction.expenses()
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
    },
    updateBalance(){
        document.
            getElementById('incomeDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.incomes())

        document.
            getElementById('expenseDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.expenses())

        document.
            getElementById('totalDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.total())

    },

    clearTrasaction(){
        DOM.transactionsContainer.innerHTML = ""
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

const App = {
    init(){

        Transaction.all.forEach((transaction) => {
                DOM.addTransaction(transaction)
            }
        )
        
        DOM.updateBalance()        
    },

    reload(){
        
        DOM.clearTrasaction()
        App.init()
    }
}

const Form = {
    submit(event){
        event.preventDefault()
    }
}

App.init()

