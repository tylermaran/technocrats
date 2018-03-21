

module.exports = function ( sequelize, DataTypes ) {

// Create Customer Table to hold: Email, Password, Last Name, First name
var Customer = sequelize.define("Customer", {
	email_id: {
    type: DataTypes.STRING
  },
  	pass_word: {
    type: DataTypes.STRING
  },
  	last_name: {
    type: DataTypes.STRING
  },
  	first_name: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false,
  freezeTableName: true
});
Customer.sync();

return Customer;

}


// module.exports = Customer;
