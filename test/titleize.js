var titleize = function(name) {

    //var names = email.find("@");

    var names = name;

    // change to lowercase
    for (var i = 0; i < names.length; i += 1) {
        name = names[i];

        names[i] = name.toLowerCase();
    }

    return names.toLowerCase();
};


module.exports = titleize;