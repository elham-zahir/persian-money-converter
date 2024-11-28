declare module "persian-money-converter" {
  export function convertRialToToman(rial: number): {
    toNumber: string;
    toChar: string;
  };

  export function convertTomanToRial(toman: number): {
    toNumber: string;
    toChar: string;
  };
}
