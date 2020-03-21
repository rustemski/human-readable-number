module.exports = function toReadable (number) {
var naming1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
var naming2 = ['','','twenty','thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty','ninety']
var inbetween = ['', 'eleven', 'twelve', 'thirteen', 'fourteen','fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
var naming3 = ['hundred']
// var naming4 =['thousand']

var num = number;
if (number == 0) {
    return naming1[0]
}
var str = "";
while (num > 0) {
    if (num >= 100 && num <= 1000) {
        n = num/100
        if (num%100 == 0) {
            str += naming1[Math.floor(n)] + ' ' + naming3[0]
            num = 0 
            continue
        } 
        str += naming1[Math.floor(n)] + ' ' + naming3[0] + ' '
        num = num - (Math.floor(n)*100)
        continue
    }

    if (num >= 20 && num < 100) {
        n = num/10

        if (num%10 == 0) {
            str += naming2[Math.floor(n)]
            num = 0 
            continue
        } 
        str += naming2[Math.floor(n)] + ' '
        num = num - 10*Math.floor(n)
        continue
    }
    if (num > 10 && num < 20) {
        n = num % 10
        str += inbetween[Math.floor(n)]
        // num = 0
        num = 0
        continue 
    }

    if (num <= 10) {
        
        str += naming1[num]
        // n /= 10 
        num = 0 
        continue
    }
}

return str 
}
