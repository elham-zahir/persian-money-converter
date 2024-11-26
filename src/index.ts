import {
  bigNumbers,
  decimalHundreds,
  decimalOnes,
  decimalTeens,
  decimalTens,
  hundreds,
  tens,
  ones,
  IMoneyType,
} from "./types";

export function numberToWords(num: number) {
  let ArithmeticNumber: number = Math.floor(num);
  if (num === 0) return "صفر";
  if (num < 0) return "عدد منفی نیست!";

  let words: string = "";
  let bigNumberIndex: number = 0;

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

  let decimalPart: number = parseInt(
    (num - Math.floor(num))
      .toFixed(3)
      .split(".")[1]
      .replace(/\.?0+$/, "")
  );

  if (decimalPart > 0) {
    return (
      (num < 1
        ? ""
        : (words.slice(-3) === " و " ? words.slice(0, -3) : words.trim()) +
          " و ") + convertDecimalDigits(decimalPart)
    );
  }

  return words.slice(-3) === " و " ? words.slice(0, -3) : words.trim();
}

function convertThreeDigit(ArithmeticNumber: number) {
  let word: string = "";
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

function convertDecimalDigits(num: number) {
  let result: string = "";

  const suffix: string =
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

export function convertRialToToman(rial: number): IMoneyType {
  const toman: number = rial / 10;
  return { toNumber: toman.toLocaleString(), toChar: numberToWords(toman) };
}

export function convertTomanToRial(toman: number): IMoneyType {
  const rial: number = toman * 10;
  return { toNumber: rial.toLocaleString(), toChar: numberToWords(rial) };
}
