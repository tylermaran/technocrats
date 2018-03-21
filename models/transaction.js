// Create Transaction Table to hold: Transaction Symbol, Transaction Description,

module.exports = function ( sequelize, DataTypes ) {

  var Transaction = sequelize.define("Transaction", {
  	tran_datetime: {
      type: DataTypes.DATE
    },
    	tran_symbol: {
      type: DataTypes.STRING
    },
    	tran_desc: {
      type: DataTypes.STRING
    },
    	symbol_quote: {
      type: DataTypes.DECIMAL
    },
    	symbol_delta: {
      type: DataTypes.DECIMAL
    },
    	symbol_quatity: {
      type: DataTypes.DECIMAL
    },
    	symbol_cost_share: {
      type: DataTypes.DECIMAL
    },
    	symbol_cost_basis: {
      type: DataTypes.DECIMAL
    },
    	symbol_gain_loss: {
      type: DataTypes.DECIMAL
    },
    	symbol_market_value: {
      type: DataTypes.DECIMAL
    },
  }, {
    timestamps: false,
    freezeTableName: true
  });

  return Transaction;

}



