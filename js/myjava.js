var name = null;
var getName = function() {
    name = prompt('What is your name?','Your Name');
}

//getName();
console.log(name);

//if( confirm('Are you sure you want to continue?') == true) {
//    window.alert("Fool, I've got your password now!");
//    console.log('Hashed Password: ASKD3453EOI4T4MOTS9');
//}

var nameSpammer = function(name) {
    for ( var counter = 0; counter < name.length; counter++ ) {

        console.log(counter + ': ' + name[counter]);
        var suffix = '';
        if (counter + 1 == 1) {
            suffix = 'st';
        }
        else if (counter + 1 == 2) {
            suffix = 'nd';
        }
        else if (counter + 1 == 3) {
            suffix = 'rd';
        }
        else {
            suffix = 'th';
        }
        alert((counter + 1) + suffix + ': ' + name[counter]);
    }
}

//nameSpammer(name);

//var stealPassword = function


//$(function

