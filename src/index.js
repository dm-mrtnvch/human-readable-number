module.exports = function toReadable(number) {
    let a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let b = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let result = ''

    if (number < 20) {
        result = a[number]
    }

    if (number >= 20 && number < 100) {
        result = number % 10 == 0 ? b[Math.floor(number / 10) - 2] : b[Math.floor(number / 10) - 2] + ' ' + a[number % 10]
    }

    if (number >= 100 && number < 1000) {
        if (number % 100 == 0) {
            result = a[Math.floor(number / 100)] + ' hundred'
        } else {
            let hundred = Math.floor(number / 100)
            let num = number - hundred * 100

            result = a[hundred] + ' hundred ' + toReadable(num)
        }
    }

    return result
}
