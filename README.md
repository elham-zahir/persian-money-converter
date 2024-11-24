# پلاگین تبدیل ریال و تومان به یکدیگر و تبدیل اعداد به حروف (فارسی و انگلیسی)

این پلاگین یک ابزار کاربردی برای تبدیل واحدهای پولی ریال و تومان به یکدیگر و همچنین تبدیل اعداد به حروف فارسی است. این پلاگین می‌تواند برای پروژه‌های فرانت‌اند که نیاز به نمایش مقادیر پولی به صورت خوانا و به حروف دارند، بسیار مفید باشد.

### ویژگی‌ها:

- تبدیل ریال به تومان و برعکس
- تبدیل اعداد به حروف فارسی
- نمایش اعداد بزرگ مانند هزار، میلیون، میلیارد
- پشتیبانی از اعداد اعشاری (تا سه رقم اعشار)

### نصب

برای نصب این پلاگین از npm استفاده کنید:

```
npm install persian-money-converter
```

### استفاده

در ابتدا، پلاگین را در پروژه خود وارد کنید:

```
import { convertRialToToman, convertTomanToRial } from 'persian-money-converter';
```

### تبدیل ریال به تومان:

برای تبدیل مقدار تومان به ریال و نمایش آن به عدد و حروف:

```
const result = convertTomanToRial(12300);
console.log(result.toNumber);  // نمایش عدد به ریال: ۱۲۳,۰۰۰
console.log(result.toChar);    // نمایش عدد به حروف: صد و بیست و سه هزار
```

### نحوه عملکرد

- تبدیل ریال به تومان: برای تبدیل ریال به تومان، کافی است مقدار ریال را بر 10 تقسیم کنید. این پلاگین نتیجه را هم به صورت عددی و هم به صورت حروفی برمی‌گرداند.
- تبدیل تومان به ریال: برای تبدیل تومان به ریال، مقدار تومان را در 10 ضرب می‌کنیم و نتیجه را به صورت عددی و حروفی ارائه می‌دهیم.

### توابع اصلی:

- convertRialToToman(rial): این تابع مقدار ورودی را از ریال به تومان تبدیل کرده و هم به صورت عددی و هم به صورت حروفی بازمی‌گرداند.
- convertTomanToRial(toman): این تابع مقدار ورودی را از تومان به ریال تبدیل کرده و نتیجه را به صورت عددی و حروفی بازمی‌گرداند.
- numberToWords(num): این تابع عدد ورودی را به حروف فارسی تبدیل می‌کند.

### مثال‌های بیشتر

#### تبدیل 1500 ریال به تومان:

```
const result = convertRialToToman(1500);
console.log(result.toNumber);  // ۱۵۰
console.log(result.toChar);    // صد و پنجاه
```

#### تبدیل 1500 تومان به ریال:

```
const result = convertTomanToRial(1500);
console.log(result.toNumber);  // ۱۵,۰۰۰
console.log(result.toChar);    // پانزده هزار
```

### توابع داخلی

این پلاگین از توابع و آرایه‌های داخلی برای تبدیل اعداد به حروف استفاده می‌کند. این توابع شامل تبدیل ارقام از 1 تا 9، دهگان، صدگان و مقادیر بزرگتر از جمله هزار، میلیون، میلیارد و تریلیون می‌باشد. همچنین برای اعداد اعشاری از توابع خاص برای تبدیل قسمت اعشاری به حروف استفاده می‌شود.

#### مثال از کد تبدیل اعشار:

برای مثال، عدد 12.45 به صورت زیر تبدیل می‌شود:

- عدد: ۱۲٫۴۵
- حروف: دوازده و چهل و پنج صدم

### نکات:

- این پلاگین به طور خودکار فرمت‌های عددی را به فارسی تبدیل می‌کند (مانند استفاده از کاما به جای نقطه برای جداکننده هزارگان).
- در صورتی که عدد وارد شده منفی باشد، پیامی با عنوان "عدد منفی نیست!" به کاربر نمایش داده می‌شود.

### مجوز

این پلاگین تحت مجوز MIT منتشر شده است.

#

# Currency Converter Plugin for Rial and Toman with Number to Words (Farsi & English)

This plugin is a useful tool for converting Rial to Toman and vice versa, and also for converting numbers to Farsi words. It can be especially helpful in front-end projects that need to display monetary values in a readable and user-friendly way, as well as converting numeric amounts into written text in Farsi.

### Features:

- Convert Rial to Toman and Convert Toman to Rial.
- Convert numbers to Farsi words.
- Converts large numbers like thousand, million, billion, and so on into readable format.
- Supports decimals and converts them into words (e.g., converting 1.23 to "one and twenty-three hundredths").

### Installation

To install this plugin via npm, use:

```
npm install persian-money-converter
```

### Usage

First, import the plugin into your project:

```
import { convertRialToToman, convertTomanToRial } from 'persian-money-converter';
```

### Convert Rial to Toman:

To convert Rial to Toman and display it as a number and in words:

```
const result = convertRialToToman(123000);
console.log(result.toNumber);  // 12,300
console.log(result.toChar);    // twelve thousand three hundred
```

### Convert Toman to Rial:

To convert Toman to Rial and display it as a number and in words:

```
const result = convertTomanToRial(12300);
console.log(result.toNumber);  // 123,000
console.log(result.toChar);    // one hundred twenty-three thousand
```

### How It Works

- Convert Rial to Toman: To convert from Rial to Toman, simply divide the Rial value by 10. The plugin returns the result both as a number and as words.
- Convert Toman to Rial: To convert from Toman to Rial, multiply the Toman value by 10 and return the result in both number and word formats.

### Main Functions:

- convertRialToToman(rial): Converts a Rial value to Toman and returns it both as a number and in words.
- convertTomanToRial(toman): Converts a Toman value to Rial and returns it both as a number and in words.
- numberToWords(num): Converts a number to Farsi words.

### Example Use Cases

#### Convert 1500 Rial to Toman:

```
const result = convertRialToToman(1500);
console.log(result.toNumber);  // 150
console.log(result.toChar);    // one hundred fifty
```

#### Convert 1500 Toman to Rial:

```
const result = convertTomanToRial(1500);
console.log(result.toNumber);  // 15,000
console.log(result.toChar);    // fifteen thousand
```

### Internal Functions

This plugin relies on internal functions and arrays to convert numbers to words, including conversion for units 1-9, tens, hundreds, and larger values like thousand, million, billion, and trillion. It also handles decimal parts and converts them into words.

### Decimal Conversion Example:

For example, the number 12.45 will be converted as:

- Number: ۱۲٫۴۵
- Words: twelve and forty-five hundredths

### License

This plugin is open-source and available under the MIT license.

#

By using this plugin, you can easily convert monetary amounts between Rial and Toman and provide a more readable experience for your users, especially when dealing with large or complex amounts.

#

# MIT LICENCE

This plugin is open-source and available under the MIT license.

MIT License

Copyright (c) 2024 elham zahir

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
