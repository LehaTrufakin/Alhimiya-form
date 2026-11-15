# Ярмарка «Сказка в Подарок!» — структура

```
index.html                 код, не меняется
fair.js                    название, шапка, фон, порядок мест
design/                    фон (fon.jpg) и шапка (shapka.jpg)
shops/                     по файлу на мастерскую
   alhimiya.js
   _shablon.js             шаблон для новой мастерской
models/                    3D-модели, у каждой мастерской своя папка
   alhimiya/
      brosh.glb
      kruzhka.glb
```

## Ссылки
- Ярмарка: `https://lehatrufakin.github.io/Alhimiya-form/`
- Мастерская: `…/#alhimiya`
- Товар: `…/#alhimiya--tovar-1`
- QR-этикетки: `…/#labels`

## Новая мастерская
1. Скопируйте `shops/_shablon.js` в `shops/lavka.js` и замените в нём `'lavka'` и данные.
2. Модели мастерской загрузите в папку `models/lavka/`.
3. В `fair.js` замените одно `{ empty: true },` на `'lavka',`.

## Ошибки
Если что-то не так, вверху ярмарки появится красная полоса: в каком файле и в какой строке ошибка.
