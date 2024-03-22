import React from 'react';

const TransactionTableStyled = ({ burnTransactions, coinData }) => {
  return (
    <div className="header">
      <p className="header_label">Burn Transactions</p>
      <BurnTxTable
        data={burnTransactions}
        priceUSD={coinData?.current_price?.usd}
      />
    </div>
  );
};

export default TransactionTableStyled;
