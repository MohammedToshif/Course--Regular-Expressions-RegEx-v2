
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
