/*
Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

'strict';

function convertHTML(str) {
  var char = {
    "<": "&​lt;",
    ">": "&​gt;",
    "&": "&​amp;",
    '"': "&​quot;",
    "'": "&​apos;"
  };
  return str.replace(/[<\>\&\"\']/g, (html) => char[html]);
}


console.log(convertHTML("Dolce & Gabbana")); // should return Dolce &​amp; Gabbana.
console.log(convertHTML("Hamburgers < Pizza < Tacos")); // should return Hamburgers &​lt; Pizza &​lt; Tacos.
console.log(convertHTML("Sixty > twelve")); // should return Sixty &​gt; twelve.
console.log(convertHTML('Stuff in "quotation marks"')); // should return Stuff in &​quot;quotation marks&​quot;.
console.log(convertHTML("Shindler's List")); // should return Shindler&​apos;s List.
console.log(convertHTML("<>")); // should return &​lt;&​gt;.
console.log(convertHTML("abc")); // should return abc.