/* ================================================================
   МАСТЕРСКАЯ «Творческая Мастерская Альфа Гемини»
   Файлы мастерской (модели, фото, логотип) — в папке models/tvorcheskaya-masterskaya-alfa-gemini/
   Этот файл можно менять в админке (admin.html) или вручную.
   ================================================================ */

fairShop('tvorcheskaya-masterskaya-alfa-gemini', {
  name:       'Творческая Мастерская Альфа Гемини',
  tagline:    'Создаем уникальные вещи, чтобы вы могли найти идеальный подарок.',
  vk:         'https://vk.ru/alphageminiwork',
  vkMessages: 'https://vk.ru/im?sel=-211164894',
  logo:       'logo.jpg',
  pageColor:  '#e5f3ee',
  pageText:   '',
  color:      '#2aa198',
  font:       'Marck Script',
  products:   [
    {
      id:       'tovar-1',
      name:     'Серьги',
      category: 'Украшение',
      price:    '',
      specs:    ['Серьги из полимерной глины'],
      desc:     'Такие серьги отлично пойдут под какое-нибудь вечернее платье',
      model:    'sergi.glb',
      photos:   ['sergi-1.jpg', 'sergi-2.jpg', 'sergi-3.jpg'],
    },
  ],
});
