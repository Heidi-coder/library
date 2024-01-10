/* capitalizes the first letter and makes sure the rest is lowercase */
function capitalize(string) {
    string = string.trimStart();
    string = string.toLowerCase();
    let letter1 = string.slice(0, 1);
    let therest = string.slice(1);
    letter1 = letter1.toUpperCase();
    return letter1 + therest;
}