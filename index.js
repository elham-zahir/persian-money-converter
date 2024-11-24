import {
  bigNumbers,
  decimalHundreds,
  decimalOnes,
  decimalTeens,
  decimalTens,
  hundreds,
  tens,
  ones,
} from "./types";

function numberToWords(num) {
  let ArithmeticNumber = Math.floor(num);
  if (num === 0) return "صفر";
  if (num < 0) return "عدد منفی نیست!";

  let words = "";
  let bigNumberIndex = 0;

  while (ArithmeticNumber > 0) {
    let part = ArithmeticNumber % 1000;
    if (part > 0) {
      words =
        convertThreeDigit(part) +
        (bigNumbers[bigNumberIndex] ? " " + bigNumbers[bigNumberIndex] : "") +
        " " +
        words;
    }
    ArithmeticNumber = Math.floor(ArithmeticNumber / 1000);
    bigNumberIndex++;
  }

  let decimalPart = parseInt(
    (num - Math.floor(num))
      .toFixed(3)
      .split(".")[1]
      .replace(/\.?0+$/, "")
  );

  if (decimalPart > 0 && decimalPart !== NaN) {
    return (
      (num < 1
        ? ""
        : (words.slice(-3) === " و " ? words.slice(0, -3) : words.trim()) +
          " و ") + convertDecimalDigits(decimalPart)
    );
  }

  return words.slice(-3) === " و " ? words.slice(0, -3) : words.trim();
}

function convertThreeDigit(ArithmeticNumber) {
  let word = "";
  if (Math.floor(ArithmeticNumber / 100) > 0) {
    word += hundreds[Math.floor(ArithmeticNumber / 100)] + " ";
    ArithmeticNumber %= 100;
  }

  if (Math.floor(ArithmeticNumber / 10) > 1) {
    word += tens[Math.floor(ArithmeticNumber / 10)] + " ";
    ArithmeticNumber %= 10;
  }

  if (ArithmeticNumber > 0) {
    word += ones[ArithmeticNumber] + " ";
  }

  return word.slice(-3) === " و " ? word.slice(0, -3) : word.trim();
}

function convertDecimalDigits(num) {
  let result = "";

  const suffix =
    num.toString().length === 3
      ? "هزارم"
      : num.toString().length === 2
      ? "صدم"
      : num.toString().length === 1
      ? "دهم"
      : "";

  if (num >= 100) {
    result += decimalHundreds[Math.floor(num / 100)] + " ";
    num = num % 100;
  }

  if (num >= 10 && num < 20) {
    result += decimalTeens[num - 10] + " ";
    return result.trim();
  }

  if (num >= 20) {
    result += decimalTens[Math.floor(num / 10)] + " ";
    num = num % 10;
  }

  if (num > 0) {
    result += decimalOnes[num] + " ";
  }

  return result + suffix;
}

export function convertRialToToman(rial) {
  const toman = rial / 10;
  return { toNumber: toman.toLocaleString(), toChar: numberToWords(toman) };
}

export function convertTomanToRial(toman) {
  const rial = toman * 10;
  return { toNumber: rial.toLocaleString(), toChar: numberToWords(rial) };
}
