"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberToWords = numberToWords;
exports.convertRialToToman = convertRialToToman;
exports.convertTomanToRial = convertTomanToRial;
const types_1 = require("./types");
function numberToWords(num) {
    let ArithmeticNumber = Math.floor(num);
    if (num === 0)
        return "صفر";
    if (num < 0)
        return "عدد منفی نیست!";
    let words = "";
    let bigNumberIndex = 0;
    while (ArithmeticNumber > 0) {
        let part = ArithmeticNumber % 1000;
        if (part > 0) {
            words =
                convertThreeDigit(part) +
                    (types_1.bigNumbers[bigNumberIndex] ? " " + types_1.bigNumbers[bigNumberIndex] : "") +
                    " " +
                    words;
        }
        ArithmeticNumber = Math.floor(ArithmeticNumber / 1000);
        bigNumberIndex++;
    }
    let decimalPart = parseInt((num - Math.floor(num))
        .toFixed(3)
        .split(".")[1]
        .replace(/\.?0+$/, ""));
    if (decimalPart > 0) {
        return ((num < 1
            ? ""
            : (words.slice(-3) === " و " ? words.slice(0, -3) : words.trim()) +
                " و ") + convertDecimalDigits(decimalPart));
    }
    return words.slice(-3) === " و " ? words.slice(0, -3) : words.trim();
}
function convertThreeDigit(ArithmeticNumber) {
    let word = "";
    if (Math.floor(ArithmeticNumber / 100) > 0) {
        word += types_1.hundreds[Math.floor(ArithmeticNumber / 100)] + " ";
        ArithmeticNumber %= 100;
    }
    if (Math.floor(ArithmeticNumber / 10) > 1) {
        word += types_1.tens[Math.floor(ArithmeticNumber / 10)] + " ";
        ArithmeticNumber %= 10;
    }
    if (ArithmeticNumber > 0) {
        word += types_1.ones[ArithmeticNumber] + " ";
    }
    return word.slice(-3) === " و " ? word.slice(0, -3) : word.trim();
}
function convertDecimalDigits(num) {
    let result = "";
    const suffix = num.toString().length === 3
        ? "هزارم"
        : num.toString().length === 2
            ? "صدم"
            : num.toString().length === 1
                ? "دهم"
                : "";
    if (num >= 100) {
        result += types_1.decimalHundreds[Math.floor(num / 100)] + " ";
        num = num % 100;
    }
    if (num >= 10 && num < 20) {
        result += types_1.decimalTeens[num - 10] + " ";
        return result.trim();
    }
    if (num >= 20) {
        result += types_1.decimalTens[Math.floor(num / 10)] + " ";
        num = num % 10;
    }
    if (num > 0) {
        result += types_1.decimalOnes[num] + " ";
    }
    return result + suffix;
}
function convertRialToToman(rial) {
    const toman = rial / 10;
    return { toNumber: toman.toLocaleString(), toChar: numberToWords(toman) };
}
function convertTomanToRial(toman) {
    const rial = toman * 10;
    return { toNumber: rial.toLocaleString(), toChar: numberToWords(rial) };
}
