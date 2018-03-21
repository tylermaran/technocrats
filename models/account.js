// Create Account Table to hold: Accont Type and Balance Amount
module.exports = function ( sequelize, DataTypes ) {

  var Account = sequelize.define("Account", {
    acct_type: {
      type: DataTypes.STRING
    },
      balance_amount: {
      type: DataTypes.DECIMAL
    },
  }, {
    timestamps: false,
    freezeTableName: true
  });

  return Account;

}

