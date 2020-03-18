var units = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ',
                'eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var tens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

module.exports = function toReadable (number) {
    if ((number = number.toString()).length > 3) return 'overflow';
    n = ('00' + number).substr(-3).match(/^(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (units[Number(n[1])] || tens[n[1][0]] + ' ' + units[n[1][1]]) + 'hundred ' : '';
    str += (n[2] != 0) ? (units[Number(n[2])] || tens[n[2][0]] + ' ' + units[n[2][1]]) : '';
    return (str === '') ? 'zero' : str.trim();
}

