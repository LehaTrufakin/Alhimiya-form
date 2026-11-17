/* ================================================================
   МАСТЕРСКАЯ «ЛепиМомент»
   Файлы мастерской (модели, фото, логотип) — в папке models/lepimoment/
   Этот файл можно менять в админке (admin.html) или вручную.
   ================================================================ */

fairShop('lepimoment', {
  name:       'ЛепиМомент',
  tagline:    'Сувениры и украшения из полимерной глины',
  vk:         'https://vk.ru/sviesta',
  vkMessages: 'https://vk.ru/sviesta',
  logo:       '',
  pageColor:  '#3a1630',
  pageText:   '#f6e3a1',
  color:      '#e07a9a',
  font:       'Marck Script',
  products:   [
    {
      id:       'tovar-1',
      name:     'Сувенир из полимерной глины "Бокал коньячный "Наутилус" с декором в стиле "Стимпанк""',
      category: 'Посуда с декором',
      price:    '3500 рублей',
      specs:    ['Стекло', 'декор - полимерная запекаемая глина'],
      desc:     'Коньячный бокал 390мл. стекло, фабричное производство Турция.Высота - 12см. Оттенок декора - состаренная бронза. Можно заказать в другом металлическом оттенке, например, золото, серебро.',
      model:    'bokal-fixed.glb',
      photos:   ['bokal-konyachnyy-nautilus-s-dekorom-v-stile-stimpank-1.jpg', 'bokal-konyachnyy-nautilus-s-dekorom-v-stile-stimpank-2.jpg', 'bokal-konyachnyy-nautilus-s-dekorom-v-stile-stimpank-3.jpg', 'bokal-konyachnyy-nautilus-s-dekorom-v-stile-stimpank-4.jpg', 'bokal-konyachnyy-nautilus-s-dekorom-v-stile-stimpank-5.jpg', 'bokal-konyachnyy-nautilus-s-dekorom-v-stile-stimpank-6.jpg', 'bokal-konyachnyy-nautilus-s-dekorom-v-stile-stimpank-7.jpg'],
    },
  ],
});
