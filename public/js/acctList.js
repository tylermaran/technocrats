// var numeral = require('numeral');


//DUMMY DATA
var acctJsonDB = [{
        "acct_id": "304326",
        "acct_desc": "ROTH IRA",
        "acct_type": "MONEY MARKET ACCOUNT",
        "balance_amount": "800.00"

    },
    {
        "acct_id": "304326",
        "acct_desc": "TRADITIONAL IRA",
        "acct_type": "HIGH YIELD SAVINGS ACCT",
        "balance_amount": "700.00"
    },
    {
        "acct_id": "304326",
        "acct_desc": "RETAIL INVESTMENT ACCT",
        "acct_type": "MONEY MARKET ACCOUNT",
        "balance_amount": "900.00"
    }
];

// parse JSON and Display in TABLE
for (var i = 0; i < acctJsonDB.length; i++) {

    $('#targetbody').append($('<tr>')
            .append($('<td>').append(acctJsonDB[i].acct_id))
            .append($('<td>').append(acctJsonDB[i].acct_desc))
            .append($('<td>').append(acctJsonDB[i].acct_type))
            .append($('<td class="balance">').append(acctJsonDB[i].balance_amount))

        ) // <tr>

} //FOR LOOP


const proxyurl = "https://cors-anywhere.herokuapp.com/";

//var queryURLBase = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=DJI&apikey=QXOWRDKW82K1ZDBF";

var queryURLBase = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=DJI&interval=60min&apikey=QXOWRDKW82K1ZDBF";

var acctdata = "";
var symbol = "";
var lastRefreshed = "";
var lastTradePriceOnly = "";
var lastVolume = "";

function runQuery(queryURLBase) {

    $.ajax({
        //url: proxyurl + queryURLBase,
        url: queryURLBase,
        method: "GET"
    })

    .done(function(response) {
        //form input variables
        var acctdata = response;
        var symbol = acctdata['Meta Data']['2. Symbol']
        var lastRefreshed = acctdata['Meta Data']['3. Last Refreshed']
        var lastTradePriceOnly = acctdata['Time Series (60min)'][lastRefreshed]['4. close']
        var lastVolume = acctdata['Time Series (60min)'][lastRefreshed]['5. volume']

        // IMPORTANT! Functional Expression VS. Functional Declaration
        // Page will die here if Func Declaration not used as API Loads Slooow. Func Declaration == BETTER as it waits for .done before firing
        function displayMkt() {
            $("#stockmkt").append("<br> Index :  " + symbol);
            // $("#stockmkt").append("<br> Last Refreshed :  " + lastRefreshed);
            $("#stockmkt").append("<br> Last Trade Price :  <span class='balance'>" + numeral(lastTradePriceOnly).format('0,0') + "</span>");
            //$("#stockmkt").append("<br> Last Volume :  " + lastVolume);
        }
        // Logging the URL so we have access to it for troubleshooting
        // console.log("------------------------------------");
        // console.log("Full Data:");
        // console.log(acctdata);
        // console.log(lastRefreshed);
        // console.log(lastTradePriceOnly);
        // console.log(lastVolume);
        // console.log("------------------------------------");

        displayMkt();
    });
    // ; for .done & .fail

}

// METHODS
// ==========================================================

runQuery(queryURLBase);
