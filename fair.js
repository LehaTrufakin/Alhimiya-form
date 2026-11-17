/* ================================================================
   НАСТРОЙКИ ЯРМАРКИ: название, шапка, фон и порядок торговых мест.
   Мастерские — в папке shops/, их файлы — в папке models/,
   картинки оформления — в папке design/.
   Этот файл можно менять в админке (admin.html) или вручную.
   ================================================================ */

window.FAIR_CONFIG = {

  fair: {
    name:          'Сказка в Подарок!',
    tagline:       'Ярмарка «Сказка в подарок»: маленькое чудо, которое можно унести с собой. Каждое изделие можно покрутить в 3D',
    pageColor:     '#1f3d33',
    pageText:      '',
    rentVk:        'https://vk.ru/im?sel=-241650475',
    rentTitle:     'Сдаётся',
    rentText:      'Место для вашей мастерской — нажмите, чтобы узнать условия',
    rentBanner:    'Хотите своё место на ярмарке? Напишите нам в сообщениях группы',
    shopPageColor: '',
    background:    '',
    backgroundDim: 0.7,
    header:        {
      image:       'design/test.jpg',
      fit:         'cover',
      showTitle:   true,
      garland:     true,
      snow:        true,
      colorTop:    '#14284a',
      colorBottom: '#2f5d50',
      textColor:   '#F5E6D3',
    },
    legal:         {
      vk:      'https://vk.ru/im?sel=-241650475',
      owner:   'Терре Татьяна Юрьевна',
      city:    'Москва',
      email:   'tavlas8664084@gmail.com',
      updated: '16.11.2026',
    },
  },

  shops: [
    'alhimiya',
    'lepimoment',
    { empty: true },
    { empty: true },
    { empty: true },
    { empty: true },
    { empty: true },
    { empty: true },
  ],
};
