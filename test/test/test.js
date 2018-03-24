// cmd: use npm test

// document.cookie is undefined, my computer must be blocking cookies
//document.cookie = "username=test@gmail.com";

var emailCookie = "test@gmail.com";

console.log(emailCookie);


var expect = require("chai").expect;
var titleize = require("../titleize");

describe("Titleize", function() {
    it("to change all emails to lowercase", function() {
        expect(titleize("TEST@GMAIL.COM")).to.equal("test@gmail.com");
    });


});