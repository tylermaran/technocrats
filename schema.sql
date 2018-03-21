# PROJECT 2 : TECH SQUARE INVESTMENTS - Schema is Normalized, with Built-in Referential Integrity and Cascade Deletes
CREATE DATABASE IF NOT EXISTS techinvestments_db;
USE techinvestments_db;

DROP TABLE IF EXISTS tran_table;
DROP TABLE IF EXISTS acct_table;
DROP TABLE IF EXISTS customer_table;

CREATE TABLE customer_table (
user_id INT AUTO_INCREMENT NOT NULL,
email_id varchar(255) NOT NULL,
pass_word varchar(255) NOT NULL,
last_name varchar(255) NOT NULL,
first_name varchar(255) NOT NULL,
createdAt TIMESTAMP NOT NULL,
PRIMARY KEY (user_id)
);

INSERT INTO customer_table (
 email_id
,pass_word
,last_name
,first_name
)
VALUES (
'test@gmail.com'
, 'test123'
, 'Smith'
, 'John'
);

INSERT INTO customer_table (
 email_id
,pass_word
,last_name
,first_name
)
VALUES (
'test@yahoo.com'
, 'test123'
, 'Jackson'
, 'Jane'
);

CREATE TABLE acct_table (
acct_id int NOT NULL AUTO_INCREMENT,
user_id int NOT NULL,
acct_type varchar(255) NOT NULL,
balance_amount decimal(10,2) NOT NULL,
INDEX acct_table(acct_id),
FOREIGN KEY (user_id)
	REFERENCES customer_table(user_id)
    ON DELETE CASCADE
);

INSERT INTO acct_table (
 user_id
,acct_type
,balance_amount
)
VALUES (
1
, 'Money Market Acct'
, 1000.00
);

INSERT INTO acct_table (
 user_id
,acct_type
,balance_amount
)
VALUES (
2
, 'Roth IRA'
, 2000.00
);

CREATE TABLE tran_table (
tran_id bigint NOT NULL AUTO_INCREMENT,
acct_id int NOT NULL,
tran_datetime DATETIME(6) NOT NULL,
tran_symbol varchar(255) NOT NULL,
tran_desc varchar(255) NOT NULL,
symbol_quote decimal(10,2) NOT NULL,
symbol_delta decimal(10,2) NOT NULL,
symbol_quatity decimal(10,2) NOT NULL,
symbol_cost_share decimal(10,2) NOT NULL,
symbol_cost_basis decimal(10,2) NOT NULL,
symbol_gain_loss decimal(10,2) NOT NULL,
symbol_market_value decimal(10,2) NOT NULL,
INDEX tran_table(tran_id),
FOREIGN KEY (acct_id)
	REFERENCES acct_table(acct_id)
    ON DELETE CASCADE
);

INSERT INTO tran_table (
 acct_id
,tran_datetime
,tran_symbol
,tran_desc
,symbol_quote
,symbol_delta
,symbol_quatity
,symbol_cost_share
,symbol_cost_basis
,symbol_gain_loss
,symbol_market_value
)
VALUES (
1
, '2018-01-19 03:13:07.000000'
, 'QQQ'
, 'POWERSHARES NASDAQ 100'
, 100
, 0
, 1
, 80
, 80
, 20
, 100
);

INSERT INTO tran_table (
 acct_id
,tran_datetime
,tran_symbol
,tran_desc
,symbol_quote
,symbol_delta
,symbol_quatity
,symbol_cost_share
,symbol_cost_basis
,symbol_gain_loss
,symbol_market_value
)
VALUES (
2
, '2018-01-19 03:13:07.000000'
, 'VOO'
, 'VANGUARD S&P500 ETF'
, 1000
, 0
, 1
, 800
, 800
, 200
, 1000
);

INSERT INTO tran_table (
 acct_id
,tran_datetime
,tran_symbol
,tran_desc
,symbol_quote
,symbol_delta
,symbol_quatity
,symbol_cost_share
,symbol_cost_basis
,symbol_gain_loss
,symbol_market_value
)
VALUES (
2
, '2018-01-19 03:13:07.000000'
, 'VXUS'
, 'VANGUARD TOTAL STOCK ETF'
, 500
, 0
, 1
, 400
, 400
, 100
, 500
);

select * from customer_table;
select * from acct_table;
select * from tran_table;

### RESET = CASCADE DELETE - deleting user_id deletes all child records
 #DELETE from customer_table
 #where user_id = 1;
