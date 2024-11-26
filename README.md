# پلاگین تبدیل ریال و تومان به یکدیگر و تبدیل اعداد به حروف فارسی

این پلاگین برای تبدیل واحدهای پولی ریال و تومان به یکدیگر و همچنین تبدیل اعداد به حروف فارسی کاربرد دارد. این ابزار برای پروژه‌های فرانت‌اند که نیاز به نمایش مقادیر پولی به صورت خوانا دارند، مفید است.

### ویژگی‌ها:

- تبدیل ریال به تومان و برعکس
- تبدیل اعداد به حروف فارسی
- پشتیبانی از اعداد اعشاری تا ۳ رقم اعشار

### نصب

برای نصب از npm استفاده کنید:

```
npm install persian-money-converter
```

### استفاده

پلاگین را در پروژه خود وارد کنید:

```
import { convertRialToToman, convertTomanToRial } from 'persian-money-converter';
```

#### تبدیل ریال به تومان

```
const result = convertRialToToman(12300);
console.log(result.toNumber);  // ۱۲۳۰
console.log(result.toChar);    // دوازده هزار و سیصد
```

#### تبدیل تومان به ریال

```
const result = convertTomanToRial(1230);
console.log(result.toNumber);  // ۱۲۳۰۰
console.log(result.toChar);    // دوازده هزار و سیصد
```

### توابع اصلی:

- convertRialToToman(rial): تبدیل ریال به تومان(به عدد و حروف)
- convertTomanToRial(toman): تبدیل تومان به ریال(به عدد و حروف)
- numberToWords(num): تبدیل عدد به حروف فارسی

### نحوه عملکرد:

- ریال به تومان: مقدار ریال را بر ۱۰ تقسیم می‌کنید.
- تومان به ریال: مقدار تومان را در ۱۰ ضرب می‌کنید.

### نکات:

- این پلاگین به طور خودکار اعداد را به فرمت فارسی تبدیل می‌کند.
- اگر عدد منفی باشد، پیام "عدد منفی نیست!" نمایش داده می‌شود.

### مجوز:

این پلاگین تحت مجوز MIT منتشر شده است.

#

### MIT License

Copyright (c) 2024 elham zahir

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
