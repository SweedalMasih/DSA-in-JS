// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
function solution(queries) {
    
    class Account {
        constructor(accountId) {
            this.accountId = accountId;
            this.balanceAmount = 0;
            this.transactionsList = [];
        }
        
        depositToAccount(timestamp, amount) {
            this.balanceAmount = parseInt(this.balanceAmount) + parseInt(amount);
            this.transactionsList.push(this.balanceAmount);
            return String(this.balanceAmount);
        }
        
        withdrawFromAccount(timestamp, amount) {
            if(parseInt(this.balanceAmount) >= parseInt(amount)) {
                this.balanceAmount = parseInt(this.balanceAmount) - parseInt(amount);
                this.transactionsList.push(-this.balanceAmount);
                return String(this.balanceAmount);
            } else {
                return "";
            }
        }
        
        getTotalTransactions() {
            return totalTransactions = this.transactionsList.reduce((acc, val) => acc+Math.abs(val), 0);
        }
    }
    
    class BankingSystem {
        constructor () {
            this.accounts = {};
        }
        
        createAccount(timestamp, accountId) {
            if(!this.accounts[accountId]) {
                this.accounts[accountId] = new Account(accountId)
                return "true";
            } else {
                return "false";
            }
        }
        
        deposit(timestamp, accountId, amount) {
            if(this.accounts[accountId]) {
                return this.accounts[accountId].depositToAccount(timestamp, amount);
            } else {
                return "";
            }
        }
        
        pay(timestamp, accountId, amount) {
            if(this.accounts[accountId]) {
                return this.accounts[accountId].withdrawFromAccount(timestamp, amount);
            } else {
                return "";
            }
        }
        
        topActivity(timestamp, n) {
            const accountsArr = Object.values(this.accounts);
            
            accountsArr.forEach(account => {
                account.totalTransactionsValue = account.getTotalTransactions();
            })
            
            console.log({accountsArr})
            
            accountsArr.sort((a,b) => {
                const totalTransactionsA = a.totalTransactionsValue;
                const totalTransactionsB = b.totalTransactionsValue;
                 
                console.log({totalTransactionsA, totalTransactionsB})
                if(totalTransactionsA !== totalTransactionsB) {
                    return totalTransactionsB - totalTransactionsA;
                }
            });
            const topAccounts = accountsArr.slice(0, n)
            const result = topAccounts.map(account => `${account.accountId}(${account.getTotalTransactions()})`);
            
            console.log({result})
            return result.join(', ');
        }
        
        processQuery(query) {
            switch(query[0]) {
                case "CREATE_ACCOUNT":
                    return this.createAccount(query[1], query[2]); 
                case "DEPOSIT":
                    return this.deposit(query[1], query[2], query[3]);
                case "PAY":
                    return this.pay(query[1], query[2], query[3]);
                case "TOP_ACTIVITY":
                    return this.topActivity(query[1], query[2]);
            }
        }
        
        processQueries(queries) {
            return queries.map(query => this.processQuery(query));
        }
    }
    
    const bankingSystem = new BankingSystem();
    return bankingSystem.processQueries(queries);
}
