/* ================================================================
   МАСТЕРСКАЯ «Тестовая мастерская»
   Файлы мастерской (модели, фото, логотип) — в папке models/testovaya-masterskaya/
   Этот файл можно менять в админке (admin.html) или вручную.
   ================================================================ */

fairShop('testovaya-masterskaya', {
  name:       'Тестовая мастерская',
  tagline:    'Тестируем',
  vk:         'https://vk.ru/club241650475',
  vkMessages: 'https://vk.ru/club241650475',
  logo:       '',
  pageColor:  '',
  pageText:   '',
  color:      '#a77bca',
  products:   [
    {
      id:       'tovar-1',
      name:     'елочный шар',
      category: 'игрушки',
      price:    '100',
      specs:    ['тест'],
      desc:     'тестируем форму',
      photos:   ['elochnyy-shar-1.jpg'],
    },
  ],
});
