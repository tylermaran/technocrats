//DUMMY DATA
var acctDetailDB = [{
        "tran_id": "3003",
        "acct_id": "123456",
        "tran_datetime": "2018-01-19",
        "tran_symbol": "AAPL",
        "tran_desc": "Apple Inc.",
        "symbol_quote": 100.00,
        "symbol_delta": 0.00,
        "symbol_quantity": 1.0,
        "symbol_cost_share": 80.00,
        "symbol_cost_basis": 80.00,
        "symbol_gain_loss": 20.00,
        "symbol_market_value": 100.00
    },
    {
        "tran_id": "3004",
        "acct_id": "123456",
        "tran_datetime": "2018-03-14",
        "tran_symbol": "MSFT",
        "tran_desc": "Microsoft Corporation",
        "symbol_quote": 1200.00,
        "symbol_delta": 20.00,
        "symbol_quantity": 1.0,
        "symbol_cost_share": 400.00,
        "symbol_cost_basis": 400.00,
        "symbol_gain_loss": 50.00,
        "symbol_market_value": 800.00
    },
    {
        "tran_id": "3005",
        "acct_id": "123456",
        "tran_datetime": "2018-02-14",
        "tran_symbol": "BTC-USD",
        "tran_desc": "Bitcoin USD",
        "symbol_quote": 600.00,
        "symbol_delta": 10.00,
        "symbol_quantity": 2.0,
        "symbol_cost_share": 800.00,
        "symbol_cost_basis": 800.00,
        "symbol_gain_loss": 100.00,
        "symbol_market_value": 700.00
    },
    {
        "tran_id": "3006",
        "acct_id": "123456",
        "tran_datetime": "2018-01-12",
        "tran_symbol": "T",
        "tran_desc": "AT&T Inc.",
        "symbol_quote": 200.00,
        "symbol_delta": 50.00,
        "symbol_quantity": 3.0,
        "symbol_cost_share": 1600.00,
        "symbol_cost_basis": 1600.00,
        "symbol_gain_loss": 100.00,
        "symbol_market_value": 200.00
    },
    {
        "tran_id": "3006",
        "acct_id": "123456",
        "tran_datetime": "2018-01-12",
        "tran_symbol": "JPM",
        "tran_desc": "JPMorgan Chase & Co.",
        "symbol_quote": 100.00,
        "symbol_delta": 25.00,
        "symbol_quantity": 0.5,
        "symbol_cost_share": 500.00,
        "symbol_cost_basis": 500.00,
        "symbol_gain_loss": 200.00,
        "symbol_market_value": 300.00
    },
    {
        "tran_id": "3005",
        "acct_id": "123456",
        "tran_datetime": "2018-01-21",
        "tran_symbol": "VOO",
        "tran_desc": "Vanguard S&P500 ETF",
        "symbol_quote": 1000.00,
        "symbol_delta": 0.00,
        "symbol_quantity": 1.0,
        "symbol_cost_share": 800.00,
        "symbol_cost_basis": 800.00,
        "symbol_gain_loss": 200.00,
        "symbol_market_value": 1000.00
    },
    {
        "tran_id": "3005",
        "acct_id": "123456",
        "tran_datetime": "2018-01-23",
        "tran_symbol": "VXUS",
        "tran_desc": "Vanguard Total Stock Market ETF",
        "symbol_quote": 500.00,
        "symbol_delta": 0.00,
        "symbol_quantity": 1.0,
        "symbol_cost_share": 400.00,
        "symbol_cost_basis": 400.00,
        "symbol_gain_loss": 100.00,
        "symbol_market_value": 500.00
    }
];


const proxyurl = "https://cors-anywhere.herokuapp.com/";

var queryURLBase = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=DJI&apikey=QXOWRDKW82K1ZDBF";

$( document ).ready(function() {
  console.log("acctDetail.js Loaded!");

// ************************************************************************
    // $.get("/api/transaction/" + searchedEmail, function(data) {
    //
    //   if (!data) {
    //     // No matching email in the database
    //     alert("Sorry, no account info found");
    //     return;
    //   }
// ************************************************************************

      // if (data.pass_word===searchedPass) {
      //   console.log("Correct password");
      //   window.location = "/summary";
      // }
      // else {
      //   alert("Sorry, that password doesn't match " + data.email_id);
      //   $("#pass_word").val("");
      // }

    // console.log(data);

    for (var i = 0; i < acctDetailDB.length; i++) {
        $('#targetbody').append($('<tr>')
            .append($('<td>').append(acctDetailDB[i].tran_id))
            .append($('<td>').append(acctDetailDB[i].acct_id))
            .append($('<td>').append(acctDetailDB[i].tran_datetime))
            .append($('<td>').append(acctDetailDB[i].tran_symbol))
            .append($('<td>').append(acctDetailDB[i].tran_desc))
            .append($('<td>').append(acctDetailDB[i].symbol_quote))
            .append($('<td>').append(acctDetailDB[i].symbol_delta))
            .append($('<td>').append(acctDetailDB[i].symbol_quantity))
            .append($('<td>').append(acctDetailDB[i].symbol_cost_share))
            .append($('<td>').append(acctDetailDB[i].symbol_cost_basis))
            .append($('<td>').append(acctDetailDB[i].symbol_gain_loss))
            .append($('<td>').append(acctDetailDB[i].symbol_market_value))
        )
    }

  // });

  });

// ************************************************************************




// function runQuery(queryURLBase) {

//     $.ajax({
//         //url: proxyurl + queryURLBase,
//         url: queryURLBase,
//         method: "GET"
//     })

//     .done(function(response) {
//         //form input variables
//         var acctdata = response;


//         // Logging the URL so we have access to it for troubleshooting
//         console.log("------------------------------------");
//         console.log("Full Data:");
//         console.log(acctdata);
//         console.log("------------------------------------");

//         // parse JSON and Display in TABLE
//         for (var i = 0; i < acctDetailDB.length; i++) {

//             $('#targetbody').append($('<tr>')
//                     .append($('<td>').append(acctDetailDB[i].tran_id))
//                     .append($('<td>').append(acctDetailDB[i].acct_id))
//                     .append($('<td>').append(acctDetailDB[i].tran_datetime))
//                     .append($('<td>').append(acctDetailDB[i].tran_symbol))
//                     .append($('<td>').append(acctDetailDB[i].tran_desc))
//                     .append($('<td>').append(acctDetailDB[i].symbol_quote))
//                     .append($('<td>').append(acctDetailDB[i].symbol_delta))
//                     .append($('<td>').append(acctDetailDB[i].symbol_quantity))
//                     .append($('<td>').append(acctDetailDB[i].symbol_cost_share))
//                     .append($('<td>').append(acctDetailDB[i].symbol_cost_basis))
//                     .append($('<td>').append(acctDetailDB[i].symbol_gain_loss))
//                     .append($('<td>').append(acctDetailDB[i].symbol_market_value))
//                 )

//         }

//     });

// }

// }

// runQuery(queryURLBase);
