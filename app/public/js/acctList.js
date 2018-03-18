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


// These variables will hold the results we get from the user's inputs via HTML
var searchTerm = "";
var numResults = "";
var startYear = 0;
var endYear = 0;

const proxyurl = "https://cors-anywhere.herokuapp.com/";

var queryURLBase = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=DJI&apikey=QXOWRDKW82K1ZDBF";


var weatherDesc = "";
var picImg = "";
var picImgUrl = "";
var atlTemp = "";
var atlHumidity = "";

//Weather section - THIS WILL BE REPLACED BY A STOCK TICKER API:
// $.ajax({
//     url: "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=DJI&apikey=QXOWRDKW82K1ZDBF",
//     method: "GET"
// }).done(function(weatherData) {
// weatherDesc = weatherData[0].close;
// picImg = weatherData.weather[0].icon;
// picImgUrl = "https://openweathermap.org/img/w/" + picImg + ".png";
// picImgUrl = "https://openweathermap.org/img/w/11d.png";
// atlTemp = weatherData.main.temp;
// atlHumidity = weatherData.main.humidity;

// console.log(weatherDesc);
// console.log(weatherDesc + " " + picImg + " " + atlTemp);
// console.log(picImgUrl);

// $("img").attr("src", picImgUrl);

// $("#atlweather").append("<br> Dow Jones Industrial Average Index :  " + weatherDesc);
// $("#atlweather").append("<br><br> Temperature is :  " + atlTemp + " deg F");
// $("#atlweather").append("<br><br> Humidity is :  " + atlHumidity + "%");
// //$("#atlweather").append("<br><br> Picture Image:  " + picImg);
// $("#atlweather").append("<br><br> Picture Image URL :  " + picImgUrl);


//});


function runQuery(queryURLBase) {

    $.ajax({
        //url: proxyurl + queryURLBase,
        url: queryURLBase,
        method: "GET"
    })

    .done(function(response) {
        //form input variables
        var acctdata = response;


        // Logging the URL so we have access to it for troubleshooting
        console.log("------------------------------------");
        console.log("Full Data:");
        console.log(acctdata);
        console.log("------------------------------------");

        // parse JSON and Display in TABLE
        for (var i = 0; i < acctJsonDB.length; i++) {

            $('#targetbody').append($('<tr>')
                    .append($('<td>').append(acctJsonDB[i].acct_id))
                    .append($('<td>').append(acctJsonDB[i].acct_desc))
                    .append($('<td>').append(acctJsonDB[i].acct_type))
                    .append($('<td class="balance">').append(acctJsonDB[i].balance_amount))

                ) // <tr>

            // } // IF Station ===

        } //FOR LOOP


    }); // ; for .done & .fail

}

// METHODS
// ==========================================================

runQuery(queryURLBase);
