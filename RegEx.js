
// Regular Expression :- is a sequence of character that define a search pattern in a search pattern for text..

//----- (02) - Meta characters

/*
// Meta characters

"single char"               "quantifier"        position

\d => 0-9(digit)            * => 0 or more      ^ => begining of exp

\w => (a-z, A-Z, 0-9)       + => 1 or more      $ => end of exp.

\s => whitespace, tab       ? => 0 or 1         \b  => word boundry

. => any character          {min, max} {n}

*/


/*
phone number => 
\d{3}-\d{3}-\d{4} => 926-121-2612 (match 0-12)
*/



//----- (03) - character classes

/*
character classes :- stuff that appears in between square brackets..

[^0-5]{3} => 0-5 (3 digit)  (match = 678, 986 etc)

[^abc]{3} => (abc - not match), (eko - match)
abc ko chord ke sb print karega any 3


pipe/or => \w+\.(com|net) => (match - toshif.com)
                             (match - toshif.net)

\w+@\w+\.(net|com|edu) => (match - toshif92612@gmail.com)                            
*/



//----- (04) - Capturing groups

/*

$1 => means group number 1
$2 => means group number 2

mobile number example :-

\(?\d{3}[-.)]\d{3}[-.]\d{4} 

match => 917-555-1234,  646.555.1234,   (212)867-5509


(\w+)\s+(\w+)\s+\w+     => mohammed pali toshif
                        => toshif pali mohammed
                        =>  pali mohammed toshif

$2 $1 => match result => first second group print then first                        
                    

\[.*\]  =>  [toshif](ashrfi)
            (pali)[ashrfi][khan]
            [pali](toshif)

match => toshif ashrfi pali     
in this case => khan return nhi hoga    


\[.*?\]  =>  [toshif](ashrfi)
            (pali)[ashrfi][khan]
            [pali](toshif)

match => toshif ashrfi khan pali
add => ? in regex
*/




//----- (05) - Back Refrence

/*
=>  (\w+)\s\1   => this is is some text text with double double words some where i i i am not not sure why why i am typing ok? rainbow rainbow unicorn unicorn.

match (same word) => is is, s s, text text, double double, s s, i i, not not, why why, rainbow rainbow, unicron unicorn


=>  \b(\w+)\s\1\b   => this is is some text text with double double words some where i i i am not not sure why why i am typing ok? rainbow rainbow unicorn unicorn.

match (same word) => is is, text text, double double, i i, not not, why why, rainbow rainbow, unicorn unicorn

\b(word boundry) => used :- match same word
*/



//----- (06) - test() and match()

// work in index.html and sketch.js file



//----- (07) - exec()

// work in sketch.js file



//----- (08) - split()
// work in index.html and sketch.js file
