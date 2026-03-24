import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
    {
      id: 1,
      name: 'Charlotte Tilbury румяна',
      description: 'Нежные румяна с шелковистой текстурой, которые легко растушёвываются и придают лицу естественное сияние. Подходят для ежедневного макияжа и вечернего образа.',
      price: 4990,
      rating: 4.9,
      image: 'assets/images/charlotte1.png',
      images: [
        'assets/images/charlotte1.png',
        'assets/images/charlotte2.png',
        'assets/images/charlotte3.png'
      ],
      link: 'https://l.kaspi.kz/shop/2q6YuxHgdc1vatk',
      likes:0,
      categoryId:3
    },
    {
      id: 2,
      name: 'Dior Face Palette',
      description: 'Многофункциональная палетка для лица, включающая хайлайтер и румяна. Идеально подчёркивает скулы и придаёт коже свежий сияющий вид.',
      price: 34899,
      rating: 5.0,
      image: 'assets/images/dior1.png',
      images: [
        'assets/images/dior1.png',
        'assets/images/dior2.png',
        'assets/images/dior3.png'
      ],
      link: 'https://l.kaspi.kz/shop/BydnSdCkbjaMSPH',
      likes:0,
      categoryId:5
    },
    {
      id: 3,
      name: 'GlamMe румяна',
      description: 'Компактные румяна с бархатной текстурой, обеспечивают стойкое покрытие и насыщенный цвет. Подходят для создания естественного румянца.',
      price: 7990,
      rating: 5.0,
      image: 'assets/images/glamme1.png',
      images: [
        'assets/images/glamme1.png',
        'assets/images/glamme2.png',
        'assets/images/glamme3.png'
      ],
      link: 'https://l.kaspi.kz/shop/8DANgpz9NSeqzgf',
      likes:0,
      categoryId:3
    },
    {
      id: 4,
      name: 'Lick Lip Gloss',
      description: 'Блеск для губ с глянцевым финишем, придающий губам объём и сияние. Увлажняющая формула обеспечивает комфорт в течение всего дня.',
      price: 5990,
      rating: 4.8,
      image: 'assets/images/lick1.png',
      images: [
        'assets/images/lick1.png',
        'assets/images/lick2.png',
        'assets/images/lick3.png'
      ],
      link: 'https://l.kaspi.kz/shop/AkqaVYAsNMZRnvW',
      likes:0,
      categoryId:1
    },
    {
      id: 5,
      name: 'Тушь LUXVISAGE',
      description: 'Объёмная тушь для ресниц, которая удлиняет и подкручивает ресницы без склеивания. Обеспечивает выразительный взгляд на весь день.',
      price: 2690,
      rating: 4.5,
      image: 'assets/images/lxvsg1.png',
      images: [
        'assets/images/lxvsg1.png',
        'assets/images/lxvsg2.png',
        'assets/images/lxvsg3.png'
      ],
      link: 'https://l.kaspi.kz/shop/JzEkkNyVybR2Y1a',
      likes:0,
      categoryId:2
    },
    {
      id: 6,
      name: 'Тушь Maybelline',
      description: 'Популярная тушь с эффектом объёма и удлинения. Лёгкая текстура равномерно наносится и делает ресницы более густыми.',
      price: 5665,
      rating: 4.5,
      image: 'assets/images/maybelline1.png',
      images: [
        'assets/images/maybelline1.png',
        'assets/images/maybelline2.png',
        'assets/images/maybelline3.png'
      ],
      link: 'https://l.kaspi.kz/shop/7TWj4xga8CTLGnS',
      likes:0,
      categoryId:2
    },
    {
      id: 7,
      name: 'Пудра Relouis',
      description: 'Матирующая пудра, выравнивающая тон кожи и скрывающая мелкие несовершенства. Обеспечивает естественное покрытие без эффекта маски.',
      price: 3390,
      rating: 4.8,
      image: 'assets/images/relouis1.png',
      images: [
        'assets/images/relouis1.png',
        'assets/images/relouis2.png',
        'assets/images/relouis3.png'
      ],
      link: 'https://l.kaspi.kz/shop/CNebZK4SXvJF56x',
      likes:0,
      categoryId:3
    },
    {
      id: 8,
      name: 'Romand Melting Balm',
      description: 'Увлажняющий бальзам для губ с лёгким оттенком и глянцевым финишем. Придаёт губам мягкость и естественный блеск.',
      price: 6499,
      rating: 4.9,
      image: 'assets/images/romand1.png',
      images: [
        'assets/images/romand1.png',
        'assets/images/romand2.png',
        'assets/images/romand3.png'
      ],
      link: 'https://l.kaspi.kz/shop/53N3aMJzUCKYgBu',
      likes:0,
      categoryId:1
    },
    {
      id: 9,
      name: 'Консилер Sen Sulu',
      description: 'Лёгкий консилер для маскировки тёмных кругов и несовершенств. Обеспечивает естественное покрытие и не подчёркивает текстуру кожи.',
      price: 3780,
      rating: 4.9,
      image: 'assets/images/sensulu1.png',
      images: [
        'assets/images/sensulu1.png',
        'assets/images/sensulu2.png',
        'assets/images/sensulu3.png'
      ],
      link: 'https://l.kaspi.kz/shop/EtQ1gAh3VfnL5Kb',
      likes:0,
      categoryId:4
    },
    {
      id: 10,
      name: 'Yves Saint Laurent тени',
      description: 'Палетка теней с насыщенными оттенками и стойкой формулой. Легко растушёвываются и позволяют создать как дневной, так и вечерний макияж.',
      price: 48000,
      rating: 4.9,
      image: 'assets/images/ysl1.png',
      images: [
        'assets/images/ysl1.png',
        'assets/images/ysl2.png',
        'assets/images/ysl3.png'
      ],
      link: 'https://l.kaspi.kz/shop/3vPiGkBn19ud82K',
      likes:0,
      categoryId:2
    },
        {
      id: 11,
      name: 'Golden Rose Strobing Highlighter Palette',
      description: 'Палетка хайлайтеров с мягкой сияющей текстурой. Легко наслаивается, красиво подчёркивает скулы и придаёт коже эффект естественного свечения.',
      price: 4800,
      rating: 4.7,
      image: 'assets/images/rose1.png',
      images: [
        'assets/images/rose1.png',
        'assets/images/rose2.png',
        'assets/images/rose3.png'
      ],
      link: 'https://l.kaspi.kz/shop/7hfBPq5skpT8zrS',
      likes: 0,
      categoryId: 5
    },
    {
      id: 12,
      name: 'Rare Beauty Positive Light Silky Touch Highlighter',
      description: 'Бархатистый хайлайтер с деликатным сиянием. Даёт “здоровый” блеск без крупного глиттера и красиво выглядит на коже.',
      price: 32000,
      rating: 4.9,
      image: 'assets/images/rarebeauty1.png',
      images: [
        'assets/images/rarebeauty1.png',
        'assets/images/rarebeauty2.png',
        'assets/images/rarebeauty3.png'
      ],
      link: 'https://l.kaspi.kz/shop/59vYBXHvQh8kPGn',
      likes: 0,
      categoryId: 5
    },
    {
      id: 13,
      name: 'Belor Design Multi-Talent Set',
      description: 'Многофункциональный набор для контуринга: румяна, скульптор и хайлайтер. Удобно для быстрого макияжа и поездок.',
      price: 5500,
      rating: 4.6,
      image: 'assets/images/belor1.png',
      images: [
        'assets/images/belor1.png',
        'assets/images/belor2.png',
        'assets/images/belor3.png'
      ],
      link: 'https://l.kaspi.kz/shop/DF8Eo2r8UQNojVd',
      likes: 0,
      categoryId: 5
    },
    {
      id: 14,
      name: 'PUPA Glow Obsession Highlighter',
      description: 'Компактный хайлайтер с ярким, но аккуратным сиянием. Легко растушёвывается и придаёт коже эффект “glow”.',
      price: 7300,
      rating: 4.8,
      image: 'assets/images/glow1.png',
      images: [
        'assets/images/glow1.png',
        'assets/images/glow2.png',
        'assets/images/glow3.png'
      ],
      link: 'https://l.kaspi.kz/shop/4WfUkQ3JqMxcN1M',
      likes: 0,
      categoryId: 5
    },
    {
      id: 15,
      name: 'Givenchy Prism Libre Loose Powder Mini',
      description: 'Рассыпчатая пудра в мини-формате: фиксирует макияж, делает кожу более ровной и помогает контролировать блеск без эффекта маски.',
      price: 19100,
      rating: 4.9,
      image: 'assets/images/givenchy1.png',
      images: [
        'assets/images/givenchy1.png',
        'assets/images/givenchy2.png',
        'assets/images/givenchy3.png'
      ],
      link: 'https://l.kaspi.kz/shop/AmsUTgWrppXr9f2',
      likes: 0,
      categoryId: 3
    },
    {
      id: 16,
      name: 'Sen Sulu Powder',
      description: 'Лёгкая пудра для закрепления макияжа. Помогает выровнять тон, делает финиш более аккуратным и комфортно ощущается на коже.',
      price: 5000,
      rating: 4.6,
      image: 'assets/images/psensulu1.png',
      images: [
        'assets/images/psensulu1.png',
        'assets/images/psensulu2.png',
        'assets/images/psensulu3.png'
      ],
      link: 'https://l.kaspi.kz/shop/4gqXy1uJ6Gcx9bt',
      likes: 0,
      categoryId: 3
    },
    {
      id: 17,
      name: 'Love Generation Eye Pencil',
      description: 'Карандаш для глаз с насыщенным пигментом. Мягко рисует линию и подходит как для стрелок, так и для растушёвки.',
      price: 2500,
      rating: 4.5,
      image: 'assets/images/lovegen1.png',
      images: [
        'assets/images/lovegen1.png',
        'assets/images/lovegen2.png',
        'assets/images/lovegen3.png'
      ],
      link: 'https://l.kaspi.kz/shop/9DC5Ue6NGXm4djK',
      likes: 0,
      categoryId: 2
    },
    {
      id: 18,
      name: 'Kiko Street Heels Lip Gloss',
      description: 'Блеск для губ с глянцевым финишем. Визуально придаёт объём и делает губы более выразительными.',
      price: 8400,
      rating: 4.7,
      image: 'assets/images/kiko1.png',
      images: [
        'assets/images/kiko1.png',
        'assets/images/kiko2.png',
        'assets/images/kiko3.png'
      ],
      link: 'https://l.kaspi.kz/shop/4T71U7j9QxznTcg',
      likes: 0,
      categoryId: 1
    },
    {
      id: 19,
      name: "L'Oreal Paris Plump Ambition Hyaluronic Lip Oil",
      description: 'Масло для губ с гиалуроновой кислотой. Увлажняет, добавляет блеск и помогает создать эффект более объёмных губ.',
      price: 5500,
      rating: 4.6,
      image: 'assets/images/loreal1.png',
      images: [
        'assets/images/loreal1.png',
        'assets/images/loreal2.png',
        'assets/images/loreal3.png'
      ],
      link: 'https://l.kaspi.kz/shop/CVW1AeNe7LCAmDu',
      likes: 0,
      categoryId: 1
    },
    {
      id: 20,
      name: 'Eveline Cosmetics Wonder Match Lumi',
      description: 'Тональный крем с лёгким сиянием. Выравнивает тон и помогает получить свежий “lumi” финиш без ощущения тяжести.',
      price: 3100,
      rating: 4.7,
      image: 'assets/images/eveline1.png',
      images: [
        'assets/images/eveline1.png',
        'assets/images/eveline2.png',
        'assets/images/eveline3.png'
      ],
      link: 'https://l.kaspi.kz/shop/ffGhAvWPayydtGz',
      likes: 0,
      categoryId: 4
    },
    {
      id: 21,
      name: 'Clio Kill Cover High Cushion',
      description: 'Кушон с более плотным покрытием и аккуратным финишем. Удобен для быстрого макияжа и обновления в течение дня.',
      price: 10000,
      rating: 4.8,
      image: 'assets/images/clio1.png',
      images: [
        'assets/images/clio1.png',
        'assets/images/clio2.png',
        'assets/images/clio3.png'
      ],
      link: 'https://l.kaspi.kz/shop/C25pYDtp3K2oNBH',
      likes: 0,
      categoryId: 4
    },
    {
      id: 22,
      name: 'Gosh Hydra Matte SPF 15',
      description: 'Матирующий тональный крем с SPF 15. Помогает контролировать блеск и делает тон более ровным.',
      price: 7000,
      rating: 4.6,
      image: 'assets/images/gosh1.png',
      images: [
        'assets/images/gosh1.png',
        'assets/images/gosh2.png',
        'assets/images/gosh3.png'
      ],
      link: 'https://l.kaspi.kz/shop/AAeiVm3sgMAf6GY',
      likes: 0,
      categoryId: 4
    },
    {
      id: 23,
      name: 'Deoproce Collagen Foundation Beige SPF 50+ PA++++',
      description: 'Тональный крем с коллагеном и высокой защитой SPF 50+ PA++++. Помогает выровнять тон и защитить кожу от солнца.',
      price: 8000,
      rating: 4.7,
      image: 'assets/images/deoproce1.png',
      images: [
        'assets/images/deoproce1.png',
        'assets/images/deoproce2.png',
        'assets/images/deoproce3.png'
      ],
      link: 'https://l.kaspi.kz/shop/7C6nsqB2YjufYsN',
      likes: 0,
      categoryId: 4
    },
    {
      id: 24,
      name: 'Pusy Brow Gel',
      description: 'Гель для бровей для фиксации формы и аккуратной укладки. Помогает держать брови уложенными в течение дня.',
      price: 4000,
      rating: 4.8,
      image: 'assets/images/pusy1.png',
      images: [
        'assets/images/pusy1.png',
        'assets/images/pusy2.png',
        'assets/images/pusy3.png'
      ],
      link: 'https://l.kaspi.kz/shop/3Bmnwbzb3LbgSxH',
      likes: 0,
      categoryId: 2
    },
    {
      id: 25,
      name: 'Dior Addict Lip Glow',
      description: 'Увлажняющий бальзам для губ с лёгким оттенком. Подстраивается под естественный тон губ, придаёт им свежий вид и мягкое сияние.',
      price: 16000,
      rating: 4.9,
      image: 'assets/images/ldior1.png',
      images: [
        'assets/images/ldior1.png',
        'assets/images/ldior2.png',
        'assets/images/ldior3.png'
      ],
      link: 'https://l.kaspi.kz/shop/CfNuaHZGuMh38sN',
      likes: 0,
      categoryId: 1
    }
];