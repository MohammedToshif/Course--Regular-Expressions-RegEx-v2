//----- (06)(01) - test() and match()

var textfield;
var output;
var input;

function setup(){
    noCanvas();
    textfield = select("#input");
    // textfield.changed(newText);
    output = select("#output");
    submit = select("#submit");
    submit.mousePressed(newText);
}

/*
function newText() {
    var s = textfield.value();

    var r = /\w+@\w+\.(net|com|org)/;
       var matches = s.match()
    createP(r.test(s));
}
*/    

// in terminal
/*
    var r = /\d{3}/;
    r   => /\d{3}/
    r.test("hello");    => false
    r.test("123");      => true
    r.test("123ABC");   => true

    var r = /^\d{3}$/;
    r.test("123")       => true
    r.test("123ABC")    => false

    // (02)
    var s = "unicorn and rainbows and cupcakes";
    var r = /unicorn/;
    r.test(s);      => true
    s.match(r);     => ["unicorn"]

    var r = /\w+/;
    s.match(r);     => ["unicorn"]
    s   => "unicorn and rainbows and cupcakes"
*/


//----- (06)(02) - test() and match()

// var textfield;
// var output;
// var submit;

// function setup() {
//     noCanvas();
//     textfield = select("#input");
//     // textfield.changed(newText);
//     output = select("#output");
//     submit = select("#submit");
//     submit.mousePressed(newText);
// }

// function newText() {
//     var s = textfield.value();

//     var r = /(\d{3})[-.]\d{4}/g;
//     var matches = s.match(r);

//     for (var  i = 0; i < matches.length; i++) {
//         createP(matches[i]);
//     }
// }


// in terminal
/*
var r = /(\d{3})[-.]\d{4}/;
s.match(r);     => ["111-2222", "1111"]
var r = /(\d{3})[-.]\d{4}/g;
s.match(r);     => ["111-2222", "444-5555"]
*/



//----- (07) - exec()

/*
function newText() {
    var s = textfield.value();

    var r = /(\d{3})[-.]\d{4}/g;
    // var matches = s.match(r);

    var result = r.exec(s);
    while (result != null) {
        createP(result);
     // createP(result[1]); => 111 444
        result = r.exec(s);
    }
}
*/

/*
in terminal
var r = /(\d{3})[-.]\d{4}/;
s.match(r);     => ["111-2222", "1111"]
var r = /(\d{3})[-.]\d{4}/g;
s.match(r);     => ["111-2222", "444-5555"]

r.exec(s);      => ["111-2222", "1111"]
r.exec(s);      => ["444-5555", "444"]
r.exec(s);      => null (calling continously return null)
*/



//----- (08) - split()

// in terminal
/*
    var s = "unicorn and rainbows and cupcakes";
    s.split(/\s/);= => ["unicorn", "and", "rainbow", "and", "cupcakes"]
    s.split(/,\s/);= => ["unicorn and rainbow and", "cupcakes"]
    s.split(/[,\s/]/);= => ["unicorn", "and", "rainbow", "and", "", "cupcakes"]
    s.split(/[,\s/]+/);= => ["unicorn", "and", "rainbow", "and", "cupcakes"]
*/

/*
function newText() {
    var s = textfield.value();
    // var r = /[,.!?\s]+/;
    var r = /[.,?!]+/;
    var words = s.split(r);
    console.log(words);
    // createP(words);
    for (var i = 0; i < words.length; i++) {
        createSpan(words[i]);
        // createImageBitmap(words[i]);
    }
}
*/