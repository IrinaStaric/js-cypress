function processTransactions(transactions) {
    const result = {
      credits: [],
      debits: [],
    };
  
    for (const tx of transactions) {
      if (typeof tx.amount !== 'number' || tx.amount <= 0) {
        console.warn('Invalid amount:', tx);
        continue;
      }
  
      if (tx.type === 'credit') {
        result.credits.push(tx);
      } else if (tx.type === 'debit') {
        result.debits.push(tx);
      } else {
        console.warn('Invalid type:', tx);
      }
    }
  
    return result;
  }
  
  const data = [
    { amount: 200, type: 'credit' },
    { amount: -50, type: 'debit' },
    { amount: 150, type: 'debit' },
    { amount: 300, type: 'refund' },
    { amount: 100, type: 'credit' },
  ];
  
  console.log(processTransactions(data));
  