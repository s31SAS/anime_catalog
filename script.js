/* =====================================================================
   ANIME WAIFU CATALOG — script.js
   ---------------------------------------------------------------------
   ЧТОБЫ ДОБАВИТЬ НОВОГО ПЕРСОНАЖА:
   Просто добавь ещё один объект в массив `characters` ниже.
   HTML менять не нужно — всё генерируется автоматически.

   СТРУКТУРА ПАПОК С ИЗОБРАЖЕНИЯМИ:
   images/
     kana-arima/
       1.jpg
       2.jpg
       3.jpg
     mikasa-ackerman/
       1.jpg
       2.jpg
     ...

   Просто положи свои картинки в соответствующие папки.
   Если картинки нет — покажется красивый плейсхолдер.
   ===================================================================== */

const characters = [
  /* ================ 1. КАНА АРИМА (обязательный персонаж) ================ */
  {
    id: 1,
    name: "Кана Арима",
    nameEn: "Kana Arima",
    anime: "Oshi no Ko",
    animeRu: "Звёздное дитя",
    tag: "Актриса · Цундэрэ",
    role: "Главная героиня (второй план)",
    popularity: 96,
    quote: "Я больше не хочу быть просто «вундеркиндом из рекламы». Я стану актрисой, которую запомнят.",
    description: "Талантливая актриса-вундеркинд, чья карьера пошатнулась с взрослением. Гордая, но ранимая.",
    story:
      "Кана Арима — бывший ребёнок-актёр, прославившаяся в детстве благодаря рекламе и ролям в дорамах. Однако с возрастом её начали воспринимать как «бывшую звезду», и карьера пошла на спад. " +
      "Встреча с Аквой и Руби в агентстве Strawberry Productions становится для неё поворотным моментом: Кана вновь обретает цель — стать настоящей актрисой, а не просто милым лицом с обложки. " +
      "Она участвует в съёмках дорамы «Сладкая жизнь», затем в театральной постановке «Токийский Блэйд» и постепенно возвращает себе признание. " +
      "Её путь — это история о преодолении детской славы, зависти, конкуренции и поиске собственного «я» в жестоком мире шоу-бизнеса.",
    personality:
      "Кана — типичная цундэрэ: снаружи дерзкая, язвительная и гордая, но внутри — добрая, заботливая и очень ранимая. " +
      "Она болезненно реагирует на критику, ревнует к успехам коллег, но при этом искренне поддерживает тех, кто ей дорог. " +
      "Обладает острым умом, отличной памятью и невероятной трудоспособностью. Несмотря на внешнюю холодность, она очень эмоциональна и преданна друзьям.",
    abilities: [
      "Актёрское мастерство (драма, театр, реклама)",
      "Феноменальная память и способность быстро запоминать сценарий",
      "Высокий уровень самоконтроля на сцене",
      "Вокальные данные (участие в B-Komachi)"
    ],
    facts: [
      "В детстве снялась в знаменитой рекламе, ставшей мемом в Японии.",
      "Состоит в идол-группе B-Komachi вместе с Руби Хосино и Мэм-тё.",
      "Обладает ярко-рыжими волосами и характерными фиолетовыми глазами.",
      "Её имя «Кана» пишется как 加奈 — «добавлять» и «нана» (иероглиф для «яблоко»).",
      "Является одним из самых популярных персонажей Oshi no Ko среди фанатов.",
      "Её сложные отношения с Аквой Хосино — одна из центральных сюжетных линий."
    ],
    relations: [
      { who: "Аква Хосино", how: "Коллега и объект симпатии. Сложные, но тёплые отношения." },
      { who: "Руби Хосино", how: "Подруга и коллега по группе B-Komachi." },
      { who: "Мэм-тё", how: "Участница B-Komachi, близкая подруга." },
      { who: "Тайки Химэкава", how: "Партнёр по театральной сцене." }
    ],
    images: [
      "images/kana-arima/1.jpg",
      "images/kana-arima/2.jpg",
      "images/kana-arima/3.jpg",
      "images/kana-arima/4.jpg"
    ],
    color: "#ff8bc4"
  },

  /* ================ 2. МИКАСА АККЕРМАН ================ */
  {
    id: 2,
    name: "Микаса Аккерман",
    nameEn: "Mikasa Ackerman",
    anime: "Attack on Titan",
    animeRu: "Атака Титанов",
    tag: "Солдат · Сильная",
    role: "Главная героиня",
    popularity: 95,
    quote: "Мир жесток. И в то же время очень красив.",
    description: "Элитный солдат Разведкорпуса, сильнейшая воительница человечества, преданная Эрену.",
    story:
      "Микаса — одна из последних выживших представителей клана Аккерманов. После гибели родителей её спас Эрен Йегер, и с тех пор она посвятила ему всю свою жизнь. " +
      "Вступив в Разведкорпус, Микаса быстро стала лучшим бойцом своего поколения, получив звание «сильнейшего солдата человечества». " +
      "Она участвует в ключевых битвах против титанов, раскрывает тайны своего происхождения и сталкивается с трагическими выборами в финале истории.",
    personality:
      "Микаса внешне холодна и немногословна, но внутри — глубоко эмоциональна и предана близким. " +
      "Она бесстрашна в бою, но паникует, когда Эрену угрожает опасность. Со временем учится жить для себя, а не только для него.",
    abilities: [
      "Сверхчеловеческая сила и скорость (наследие Аккерманов)",
      "Мастерство владения УПМ (устройство пространственного маневрирования)",
      "Исключительная выносливость",
      "Тактическое чутьё в бою"
    ],
    facts: [
      "Её шарф — подарок Эрена, ставший символом их связи.",
      "Аккерманы — клан, наделённый силой титанов, но не превращающийся в них.",
      "Микаса — обладательница восточного происхождения по линии матери.",
      "Её имя означает «трёхцветный».",
      "Один из самых узнаваемых персонажей в истории аниме."
    ],
    relations: [
      { who: "Эрен Йегер", how: "Спаситель и объект глубокой преданности." },
      { who: "Армин Арлерт", how: "Лучший друг и соратник." },
      { who: "Леви Аккерман", how: "Дальний родственник по клану, уважает его силу." }
    ],
    images: [
      "images/mikasa-ackerman/1.jpg",
      "images/mikasa-ackerman/2.jpg",
      "images/mikasa-ackerman/3.jpg"
    ],
    color: "#6cb4ee"
  },

  /* ================ 3. НЭЗУКО КАМАДО ================ */
  {
    id: 3,
    name: "Нэзуко Камадо",
    nameEn: "Nezuko Kamado",
    anime: "Demon Slayer",
    animeRu: "Клинок, рассекающий демонов",
    tag: "Демон · Милая",
    role: "Главная героиня",
    popularity: 94,
    quote: "Ммм! (с)",
    description: "Демон, но сохранившая человеческое сердце. Младшая сестра Танджиро.",
    story:
      "Нэзуко — младшая сестра Танджиро Камадо. После нападения Музана Кибуцуджи вся её семья погибла, а сама Нэзуко превратилась в демона. " +
      "Однако, в отличие от других демонов, она сохранила человеческие эмоции и не нападает на людей. " +
      "Вместе с братом она путешествует в поисках способа снова стать человеком. " +
      "Постепенно раскрываются её уникальные способности: она может использовать Кровавую демоническую магию, её тело защищено от солнца.",
    personality:
      "Добрая, заботливая, наивная и очень милая. Несмотря на свою демоническую сущность, Нэзуко остаётся любящей сестрой. " +
      "Она защищает людей, особенно слабых, и готова на всё ради Танджиро.",
    abilities: [
      "Кровавая демоническая магия: Пламя",
      "Способность менять размер тела",
      "Иммунитет к солнечному свету (уникально для демонов)",
      "Регенерация"
    ],
    facts: [
      "Нэзуко носит бамбуковую палочку во рту, чтобы не кусать людей.",
      "В форме демона у неё вырастает рог и появляются узоры на коже.",
      "Её любимая еда до превращения — домашняя еда семьи Камадо.",
      "Она не может говорить, общается звуками «мн» и жестами.",
      "Стала символом аниме Demon Slayer и мемов."
    ],
    relations: [
      { who: "Танджиро Камадо", how: "Старший брат, ради которого она готова на всё." },
      { who: "Музан Кибуцуджи", how: "Виновник превращения в демона." },
      { who: "Дзэницу Агацума", how: "Спутник, испытывает к ней симпатию." }
    ],
    images: [
      "images/nezuko-kamado/1.jpg",
      "images/nezuko-kamado/2.jpg",
      "images/nezuko-kamado/3.jpg"
    ],
    color: "#ff85a2"
  },

  /* ================ 4. МАРИН КИТАГАВА ================ */
  {
    id: 4,
    name: "Марин Китагава",
    nameEn: "Marin Kitagawa",
    anime: "My Dress-Up Darling",
    animeRu: "Наш сон",
    tag: "Косплеер · Энергичная",
    role: "Главная героиня",
    popularity: 92,
    quote: "Косплей — это то, что делает меня счастливой!",
    description: "Яркая и энергичная косплеерша, влюблённая в аниме и моду.",
    story:
      "Марин Китагава — популярная старшеклассница, страстно увлечённая косплеем и аниме. " +
      "Однажды она узнаёт, что её одноклассник Вакана Годзё — талантливый швец, и просит его сшить костюмы для косплея. " +
      "Так начинается их совместное путешествие в мир косплея, полное забавных ситуаций, сближения и романтики. " +
      "Марин не стесняется своих увлечений и помогает Вакане преодолеть комплексы.",
    personality:
      "Марин — солнечная, энергичная, открытая и немного наивная. Она искренне любит то, что делает, и не боится быть собой. " +
      "Она поддерживает Вакану и помогает ему поверить в себя. Её эмоции всегда ярко отражаются на лице.",
    abilities: [
      "Идеальное чувство стиля и моды",
      "Навык перевоплощения в косплее",
      "Огромная энергия и позитив",
      "Быстрая обучаемость"
    ],
    facts: [
      "Марин — «гяру» (модная девушка) с ярким макияжем и светлыми волосами.",
      "Она обожает аниме и мангу, особенно про любовь и девочек-волшебниц.",
      "Её комната завалена косплей-костюмами и постерами.",
      "Она не стесняется говорить о своих чувствах.",
      "Её сэйю — Хина Сугияма."
    ],
    relations: [
      { who: "Вакана Годзё", how: "Партнёр по косплею и объект симпатии." },
      { who: "Дзюдзю-сан", how: "Подруга и опытная косплеерша." }
    ],
    images: [
      "images/marin-kitagawa/1.jpg",
      "images/marin-kitagawa/2.jpg",
      "images/marin-kitagawa/3.jpg"
    ],
    color: "#ffd166"
  },

  /* ================ 5. ЗЕРО ДВА ================ */
  {
    id: 5,
    name: "Зеро Два",
    nameEn: "Zero Two",
    anime: "Darling in the Franxx",
    animeRu: "Милый во Франксе",
    tag: "Пилот · Загадочная",
    role: "Главная героиня",
    popularity: 91,
    quote: "Я — монстр, но я хочу стать человеком. Вместе с тобой.",
    description: "Загадочная пилот с рогами, известная как «Партнёр-убийца».",
    story:
      "Зеро Два — гибрид человека и клаксозавра, обладающая рогами и необычной внешностью. " +
      "Она пилотирует Франкс вместе со своим «Дарлингом» Хиро. " +
      "Сначала её боятся и считают монстром, но благодаря Хиро она учится любить и быть любимой. " +
      "Её путь — это история о принятии себя, любви и жертве.",
    personality:
      "Зеро Два — игривая, дерзкая, немного дикая и очень преданная. " +
      "Она не понимает социальных норм, но искренне стремится стать человеком ради Хиро. " +
      "Её внутренний конфликт между монстром и человеком — центральная тема её характера.",
    abilities: [
      "Пилотирование Франкса",
      "Сверхчеловеческая физическая форма",
      "Способность чувствовать клаксозавров",
      "Регенерация"
    ],
    facts: [
      "Её настоящее имя — 002, она девяносто второй клон.",
      "Она любит есть мёд.",
      "Её фраза «Дарлинг» стала мемом.",
      "У неё красная кровь, что отличает её от других.",
      "Её дизайн вдохновлён образом демонической девушки."
    ],
    relations: [
      { who: "Хиро", how: "Дарлинг и возлюбленный." },
      { who: "Доктор Франкс", how: "Создатель, относится к ней как к эксперименту." }
    ],
    images: [
      "images/zero-two/1.jpg",
      "images/zero-two/2.jpg",
      "images/zero-two/3.jpg"
    ],
    color: "#ff5e7e"
  },

  /* ================ 6. РЭМ ================ */
  {
    id: 6,
    name: "Рэм",
    nameEn: "Rem",
    anime: "Re:Zero",
    animeRu: "Re:Zero",
    tag: "Горничная · Демон",
    role: "Главная героиня (второй план)",
    popularity: 93,
    quote: "Я люблю тебя. Даже если ты меня не помнишь.",
    description: "Демон-горничная из особняка Розвааля, преданная Субару.",
    story:
      "Рэм — младшая из сестёр-близнецов, горничная в особняке Розвааля. " +
      "Она принадлежит к расе демонов (они), обладает рогом на лбу и магической силой. " +
      "Сначала она относится к Субару холодно, но постепенно влюбляется в него. " +
      "В арке «Жадность» она признаётся ему в любви, а после потери памяти остаётся верной ему.",
    personality:
      "Рэм — спокойная, серьёзная, саркастичная и преданная. " +
      "Она готова на всё ради тех, кого любит. Её чувство юмора — сухое и язвительное. " +
      "Внешне холодна, но внутри — заботливая и любящая.",
    abilities: [
      "Магия ветра (владеет огромной силой)",
      "Физическая сила демона",
      "Навыки горничной (уборка, готовка)",
      "Синхронизация с сестрой Рам"
    ],
    facts: [
      "Рэм — одна из самых популярных персонажей Re:Zero.",
      "Её волосы закрывают левый глаз, который виден только в определённых сценах.",
      "Её имя означает «Рем» — единица измерения в физике.",
      "Она любит Субару и готова умереть за него.",
      "Её сэйю — Минами Танака."
    ],
    relations: [
      { who: "Субару Нацуки", how: "Возлюбленный, ради которого она готова на всё." },
      { who: "Рам", how: "Старшая сестра-близнец, связана с ней магией." },
      { who: "Розвааль Л. Мейзер", how: "Хозяин особняка, которому она служит." }
    ],
    images: [
      "images/rem/1.jpg",
      "images/rem/2.jpg",
      "images/rem/3.jpg"
    ],
    color: "#7ec8e3"
  },

  /* ================ 7. САКУРА КИНОМОТО ================ */
  {
    id: 7,
    name: "Сакура Киномото",
    nameEn: "Sakura Kinomoto",
    anime: "Cardcaptor Sakura",
    animeRu: "Сакура — ловец карт",
    tag: "Волшебница · Милая",
    role: "Главная героиня",
    popularity: 87,
    quote: "Всё будет хорошо! Я обязательно соберу все карты!",
    description: "Девочка-волшебница, собирающая магические карты Клоу.",
    story:
      "Сакура Киномото — обычная ученица четвёртого класса, которая случайно выпускает магические карты Клоу из книги. " +
      "Вместе с Кероберосом, хранителем карт, и подругой Томоё она отправляется на поиски карт, чтобы вернуть их. " +
      "Со временем она становится Мастером карт и обретает собственную магию.",
    personality:
      "Сакура — добрая, смелая, отзывчивая и очень милая. " +
      "Она всегда верит в лучшее и помогает другим. Её главная сила — любовь и дружба.",
    abilities: [
      "Магия карт Клоу",
      "Владение жезлом",
      "Способность чувствовать магию",
      "Быстрая обучаемость"
    ],
    facts: [
      "Сакура — одна из самых узнаваемых героинь CLAMP.",
      "Её костюмы для каждой битвы создаёт подруга Томоё.",
      "Её фраза «Hoe!» стала мемом.",
      "Она любит спорт и хорошо учится.",
      "Её брат Тоя — один из сильнейших персонажей."
    ],
    relations: [
      { who: "Кероберос", how: "Хранитель карт, верный друг." },
      { who: "Томоё Даидодзи", how: "Лучшая подруга, создаёт костюмы." },
      { who: "Ли Сяолан", how: "Соперник и возлюбленный." }
    ],
    images: [
      "images/sakura-kinomoto/1.jpg",
      "images/sakura-kinomoto/2.jpg",
      "images/sakura-kinomoto/3.jpg"
    ],
    color: "#ffb3d9"
  },

  /* ================ 8. ХИНАТА ХЮГА ================ */
  {
    id: 8,
    name: "Хината Хюга",
    nameEn: "Hinata Hyuga",
    anime: "Naruto",
    animeRu: "Наруто",
    tag: "Ниндзя · Скромная",
    role: "Главная героиня (второй план)",
    popularity: 88,
    quote: "Я больше не буду прятаться. Я хочу идти рядом с тобой.",
    description: "Наследница клана Хюга, обладательница Бьякугана, влюблённая в Наруто.",
    story:
      "Хината Хюга — старшая дочь главы клана Хюга, обладательница Бьякугана. " +
      "С детства она застенчива и неуверенна в себе, но влюблена в Наруто Узумаки, который вдохновляет её становиться сильнее. " +
      "Она участвует в Четвёртой мировой войне ниндзя, защищает Наруто и в итоге становится его женой.",
    personality:
      "Хината — скромная, добрая, терпеливая и очень сильная духом. " +
      "Она не сдаётся, даже когда трудно, и всегда готова защитить тех, кого любит. " +
      "Её любовь к Наруто — одна из самых трогательных историй в аниме.",
    abilities: [
      "Бьякуган (всевидящее око)",
      "Техники клана Хюга (Мягкий кулак)",
      "Медицинские навыки",
      "Высокий уровень чакры"
    ],
    facts: [
      "Хината — одна из немногих, кто с самого начала верил в Наруто.",
      "Её имя означает «место, освещённое солнцем».",
      "Она стала женой Наруто и матерью Боруто и Химавари.",
      "Её сэйю — Нана Мидзуки.",
      "Она преодолела свою застенчивость и стала сильным ниндзя."
    ],
    relations: [
      { who: "Наруто Узумаки", how: "Возлюбленный, муж, вдохновитель." },
      { who: "Нэджи Хюга", how: "Двоюродный брат, защищал её." },
      { who: "Ханаби Хюга", how: "Младшая сестра." }
    ],
    images: [
      "images/hinata-hyuga/1.jpg",
      "images/hinata-hyuga/2.jpg",
      "images/hinata-hyuga/3.jpg"
    ],
    color: "#c9b6ff"
  },

  /* ================ 9. АСУНА ЮКИ ================ */
  {
    id: 9,
    name: "Асуна Юки",
    nameEn: "Asuna Yuuki",
    anime: "Sword Art Online",
    animeRu: "Мастера меча онлайн",
    tag: "Фехтовальщица · Верная",
    role: "Главная героиня",
    popularity: 89,
    quote: "Я не боюсь умереть. Я боюсь потерять тебя.",
    description: "Вице-командир гильдии «Рыцари Крови», известна как «Вспышка».",
    story:
      "Асуна Юки — одна из лучших игроков SAO, вице-командир гильдии «Рыцари Крови». " +
      "Она знакомится с Кирито и вместе с ним проходит игру, становясь его возлюбленной. " +
      "После освобождения из SAO она продолжает играть в ALO, GGO и других мирах, помогая Кирито.",
    personality:
      "Асуна — сильная, решительная, верная и заботливая. " +
      "Она не боится сражаться и всегда готова защитить близких. " +
      "Её любовь к Кирито — одна из самых известных историй в аниме.",
    abilities: [
      "Мастерство фехтования (рапира)",
      "Скорость реакции «Вспышки»",
      "Навыки готовки (в SAO)",
      "Лидерские качества"
    ],
    facts: [
      "Асуна — одна из самых популярных героинь аниме.",
      "Её никнейм «Asuna» происходит от названия корабля.",
      "Она стала женой Кирито в SAO.",
      "Её сэйю — Харука Томацу.",
      "Она появляется во всех арках SAO."
    ],
    relations: [
      { who: "Кирито", how: "Возлюбленный, муж, партнёр по играм." },
      { who: "Юи", how: "Приёмная дочь (ИИ)." },
      { who: "Лизбет", how: "Близкая подруга." }
    ],
    images: [
      "images/asuna-yuuki/1.jpg",
      "images/asuna-yuuki/2.jpg",
      "images/asuna-yuuki/3.jpg"
    ],
    color: "#ffb86c"
  },

  /* ================ 10. ВАЙОЛЕТ ЭВЕРГАРДЕН ================ */
  {
    id: 10,
    name: "Вайолет Эвергарден",
    nameEn: "Violet Evergarden",
    anime: "Violet Evergarden",
    animeRu: "Вайолет Эвергарден",
    tag: "Автозапоминающая кукла · Эмоциональная",
    role: "Главная героиня",
    popularity: 90,
    quote: "Я хочу знать, что значит «я люблю тебя».",
    description: "Бывшая солдат, ставшая «автозапоминающей куклой» — писарем писем.",
    story:
      "Вайолет Эвергарден — бывшая военная, потерявшая руки на войне. " +
      "После войны она становится «автозапоминающей куклой» — человеком, который пишет письма за других. " +
      "Вайолет пытается понять слова майора Гилберта «я люблю тебя» и учится чувствовать эмоции. " +
      "Каждое письмо, которое она пишет, помогает ей понять человеческие чувства.",
    personality:
      "Вайолет — спокойная, серьёзная, вежливая и очень преданная. " +
      "Она не понимает эмоций, но искренне хочет научиться чувствовать. " +
      "Её путь — это история о поиске себя и понимании любви.",
    abilities: [
      "Мастерство написания писем",
      "Навыки боя (прошлое солдата)",
      "Протезы рук с высокой точностью",
      "Эмпатия (развивается со временем)"
    ],
    facts: [
      "Вайолет — одна из самых эмоциональных героинь аниме.",
      "Её имя означает «фиалка».",
      "Её протезы созданы доктором Орландо.",
      "Она пишет письма для многих клиентов, меняя их жизни.",
      "Её история заставляет плакать даже самых стойких зрителей."
    ],
    relations: [
      { who: "Гилберт Бугенвиллия", how: "Майор, сказавший «я люблю тебя»." },
      { who: "Клаудия Ходжинс", how: "Президент компании, взял её на работу." },
      { who: "Люкрия Марлборо", how: "Наставница и подруга." }
    ],
    images: [
      "images/violet-evergarden/1.jpg",
      "images/violet-evergarden/2.jpg",
      "images/violet-evergarden/3.jpg"
    ],
    color: "#a8d8ea"
      
   
  },
  {
   id: 11,
    name: "Эльфария",
    nameEn: "Elfaria Albis Serfort",
    anime: "Wistoria: Wand and Sword",
    animeRu: "Вистория: Жезл и Меч",
    tag: "Маг льда · Гений",
    role: "Главная героиня",
    popularity: 94,
    quote: "Уилл, я жду тебя на вершине. Я всегда смотрю на тебя с высоты башни.",
    description: "Самая молодая волшебница в истории, достигшая титула Магия Венде. Гениальный маг льда, скрывающая под маской холодной королевы ленивую и влюблённую натуру.",
    story:
      "Эльфария Алвис Серфорт — одна из Магия Венде, Верховной Пятёрки Жезлов, носящая титул «Маг льда» (Алвис). Она стала самой молодой волшебницей в истории, достигшей столь высокого статуса. " +
      "Для всего мира Эльфария предстаёт как недосягаемый идеал: холодная, величественная и безупречная гениальная заклинательница, чьё мастерство не знает равных. " +
      "Однако за маской безукоризненной «ледяной королевы» скрывается невероятно ленивая, по-детски капризная и одержимая своим другом детства натура. " +
      "В детстве она росла вместе с Уиллом Серфортом в одном приюте, где они были неразлучны и дали друг другу клятву: вместе взойти на вершину Башни, чтобы своими глазами увидеть настоящий закат. " +
      "Из-за феноменального таланта Эльфарию отправили к магам, где она стремительно достигла вершины, движимая исключительно желанием сдержать обещание. " +
      "Став Магия Венде, она ни на секунду не забыла о своей клятве и тайно оберегает Уилла издалека, веря в его скрытый потенциал и непревзойдённое владение мечом.",
    personality:
      "Снаружи — холодная, величественная и безупречная «ледяная королева», символ академии и образец для подражания. " +
      "Внутри — невероятно ленивая, по-детски капризная и одержимая Уиллом Серфортом девушка. " +
      "Не желая тратить время на скучные официальные обязанности, она создаёт идеальные ледяные копии для присутствия на публичных мероприятиях, пока сама проводит дни в праздности. " +
      "Абсолютно не скрывает своего трепета и восторга, когда речь заходит об Уилле, часто теряя всё величие и ведя себя как его преданная фанатка. " +
      "В бою демонстрирует подавляющую мощь, с лёгкостью изобретая сложнейшие заклинания и разрабатывая совершенно новые виды магии льда.",
    abilities: [
      "Мастерство магии воды и льда (почти все заклинания этих стихий)",
      "«Двенадцать Тайных Законов Льда» (El Grass Fross)",
      "Создание идеальных ледяных копий (в том числе для замены себя на мероприятиях)",
      "Изобретение новых видов магии льда",
      "Феноменальная магическая мощь (уровень Магия Венде)"
    ],
    facts: [
      "Самая молодая волшебница в истории, ставшая Магия Венде — в 15 лет.",
      "Её титул — «Маг льда» (Алвис), а неофициальное прозвище — «Уединённая ледяная принцесса» (深窓の氷姫).",
      "День рождения — 24 декабря (по календарю аниме — 24-й день месяца Эльзы).",
      "Рост — 163 см. Раса — Лизанс.",
      "Обожает всё, что связано с Уиллом: его еду, его колени, его запах, его сонное лицо.",
      "Не любит острую еду.",
      "Настолько ленива, что в своей комнате пыталась ходить полностью голой, потому что «одеваться — морока».",
      "В бою абсолютно серьёзна и не проявляет ни капли лени.",
      "Её сэйю — Акира Сэкинэ (Akira Sekine)."
    ],
    relations: [
      { who: "Уилл Серфорт", how: "Друг детства и возлюбленный. Дали клятву вместе взойти на вершину Башни." },
      { who: "Колетт Луар", how: "Подруга и коллега по академии." },
      { who: "Другие Магия Венде", how: "Коллеги по Верховной Пятёрке Жезлов." }
    ],
    images: [
      "images/elfaria/1.jpg",
      "images/elfaria/2.jpg",
      "images/elfaria/3.jpg"
    ],
    color: "#a8d8ea",
    animeSearch: "Вистория жезл и меч"   // ← для поиска на Ями и АнимеГО
  }
  
];

/* =====================================================================
   STATE
   ===================================================================== */
const state = {
  favorites: JSON.parse(localStorage.getItem("waifu_favorites") || "[]"),
  theme: localStorage.getItem("waifu_theme") || "dark",
  currentPage: "home",
  search: "",
  filter: "all",
  animeFilter: "all",
  sort: "popularity",
  currentCharacterId: null,
  lightbox: { images: [], index: 0 }
};

/* =====================================================================
   HELPERS
   ===================================================================== */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function placeholderSVG(name, color = "#b46cff") {
  const initial = name ? name.trim().charAt(0).toUpperCase() : "?";
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="800">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${color}"/>
          <stop offset="100%" stop-color="#2a1b4a"/>
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#g)"/>
      <text x="50%" y="50%" font-family="Segoe UI, sans-serif" font-size="180" font-weight="800"
            fill="rgba(255,255,255,0.85)" text-anchor="middle" dominant-baseline="central">${initial}</text>
    </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function setImage(imgEl, src, name, color) {
  const fallback = placeholderSVG(name, color);
  imgEl.onerror = function () {
    this.onerror = null;
    this.src = fallback;
  };
  imgEl.src = src || fallback;
}

function isFav(id) { return state.favorites.includes(id); }

function toggleFav(id, btnEl) {
  const idx = state.favorites.indexOf(id);
  if (idx === -1) {
    state.favorites.push(id);
    if (btnEl) { btnEl.classList.add("active", "pop"); setTimeout(() => btnEl.classList.remove("pop"), 500); }
  } else {
    state.favorites.splice(idx, 1);
    if (btnEl) btnEl.classList.remove("active");
  }
  localStorage.setItem("waifu_favorites", JSON.stringify(state.favorites));
  updateFavBadge();
  renderFavoritesPage();
}

function updateFavBadge() {
  const badge = $("#favBadge");
  if (badge) badge.textContent = state.favorites.length;
  const statFav = $("#statFav");
  if (statFav) statFav.textContent = state.favorites.length;
  const favCount = $("#favCount");
  if (favCount) favCount.textContent = state.favorites.length;
}

/* =====================================================================
   THEME
   ===================================================================== */
function applyTheme() {
  document.documentElement.setAttribute("data-theme", state.theme);
  const btn = $("#themeToggle");
  if (btn) btn.textContent = state.theme === "dark" ? "🌙" : "☀️";
}
function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem("waifu_theme", state.theme);
  applyTheme();
}

/* =====================================================================
   NAVIGATION
   ===================================================================== */
function goToPage(page, charId = null) {
  state.currentPage = page;
  state.currentCharacterId = charId;

  $$(".page").forEach((p) => p.classList.add("hidden"));
  const target = page === "detail" ? $("#page-detail") : $("#page-" + page);
  if (target) target.classList.remove("hidden");

  $$(".nav-link").forEach((l) => l.classList.toggle("active", l.dataset.page === page));

  if (page === "characters") renderCharactersPage();
  if (page === "favorites") renderFavoritesPage();
  if (page === "anime") renderAnimePage();
  if (page === "detail" && charId) renderDetailPage(charId);
  if (page === "home") renderPopularGrid();

  window.scrollTo({ top: 0, behavior: "smooth" });
  closeMobileMenu();
}

function closeMobileMenu() {
  $("#navLinks")?.classList.remove("open");
}

/* =====================================================================
   CARD RENDERING
   ===================================================================== */
function createCard(char) {
  const card = document.createElement("article");
  card.className = "card";
  card.style.animationDelay = Math.random() * 0.2 + "s";
  card.dataset.id = char.id;

  const favActive = isFav(char.id) ? "active" : "";

  card.innerHTML = `
    <div class="card-img-wrap">
      <span class="card-rating">★ ${char.popularity}</span>
      <button class="fav-btn ${favActive}" data-fav="${char.id}" title="В избранное">♥</button>
      <img class="card-img" alt="${char.name}" />
    </div>
    <div class="card-body">
      <h3 class="card-name">${char.name}</h3>
      <p class="card-anime">🎬 ${char.anime}</p>
      <span class="card-tag">${char.tag}</span>
      <div class="card-actions">
        <button class="card-btn" data-detail="${char.id}">Подробнее</button>
      </div>
    </div>
  `;

  const img = card.querySelector(".card-img");
  setImage(img, char.images?.[0], char.name, char.color);

  card.querySelector("[data-fav]").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFav(char.id, e.currentTarget);
  });

  card.querySelector("[data-detail]").addEventListener("click", (e) => {
    e.stopPropagation();
    goToPage("detail", char.id);
  });

  card.addEventListener("click", () => goToPage("detail", char.id));
  return card;
}

function renderGrid(container, list) {
  container.innerHTML = "";
  list.forEach((char) => container.appendChild(createCard(char)));
}

/* =====================================================================
   FILTER / SEARCH / SORT
   ===================================================================== */
function getFilteredCharacters() {
  let list = [...characters];

  // search
  const q = state.search.trim().toLowerCase();
  if (q) {
    list = list.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.anime.toLowerCase().includes(q) ||
        (c.nameEn && c.nameEn.toLowerCase().includes(q)) ||
        (c.animeRu && c.animeRu.toLowerCase().includes(q))
    );
  }

  // filter
  if (state.filter === "popular") list = list.filter((c) => c.popularity >= 90);
  if (state.filter === "favorites") list = list.filter((c) => isFav(c.id));

  // anime filter
  if (state.animeFilter !== "all") list = list.filter((c) => c.anime === state.animeFilter);

  // sort
  if (state.sort === "name") list.sort((a, b) => a.name.localeCompare(b.name, "ru"));
  else if (state.sort === "anime") list.sort((a, b) => a.anime.localeCompare(b.anime));
  else list.sort((a, b) => b.popularity - a.popularity);

  return list;
}

/* =====================================================================
   PAGE RENDERS
   ===================================================================== */
function renderPopularGrid() {
  const grid = $("#popularGrid");
  if (!grid) return;
  const popular = [...characters].sort((a, b) => b.popularity - a.popularity).slice(0, 6);
  renderGrid(grid, popular);
}

function renderCharactersPage() {
  const grid = $("#charGrid");
  const empty = $("#emptyState");
  const count = $("#charCount");
  const list = getFilteredCharacters();

  count.textContent = list.length;
  grid.innerHTML = "";

  if (!list.length) {
    empty.classList.remove("hidden");
  } else {
    empty.classList.add("hidden");
    renderGrid(grid, list);
  }
}

function renderFavoritesPage() {
  const grid = $("#favGrid");
  const empty = $("#favEmpty");
  if (!grid) return;

  const favs = characters.filter((c) => isFav(c.id));
  grid.innerHTML = "";

  if (!favs.length) {
    empty?.classList.remove("hidden");
  } else {
    empty?.classList.add("hidden");
    renderGrid(grid, favs);
  }
  updateFavBadge();
}

function renderAnimePage() {
  const grid = $("#animeGrid");
  if (!grid) return;

  const map = new Map();
  characters.forEach((c) => {
    if (!map.has(c.anime)) map.set(c.anime, []);
    map.get(c.anime).push(c);
  });

  grid.innerHTML = "";
  [...map.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(([anime, chars], i) => {
      const card = document.createElement("div");
      card.className = "anime-card";
      card.style.animationDelay = i * 0.05 + "s";
      card.innerHTML = `
        <h3>${anime}</h3>
        <p>${chars[0].animeRu || "Аниме-сериал"}</p>
        <span class="anime-count">${chars.length} персонаж${chars.length > 1 ? "а" : ""}</span>
      `;
      card.addEventListener("click", () => {
        state.animeFilter = anime;
        const sel = $("#animeFilter");
        if (sel) sel.value = anime;
        state.filter = "all";
        $$(".filter").forEach((f) => f.classList.toggle("active", f.dataset.filter === "all"));
        goToPage("characters");
      });
      grid.appendChild(card);
    });
}

function renderDetailPage(id) {
  const char = characters.find((c) => c.id === id);
  const container = $("#page-detail");
  if (!char || !container) return;

  const favActive = isFav(char.id) ? "active" : "";
  const favLabel = isFav(char.id) ? "♥ В избранном" : "♡ В избранное";

  container.innerHTML = `
    <button class="btn btn-ghost" id="backBtn" style="margin-bottom:24px;">← Назад</button>
    <div class="detail">
      <div>
        <div class="detail-img-wrap">
          <img id="detailMainImg" alt="${char.name}" />
        </div>
      </div>
      <div class="detail-info">
        <h1>${char.name}</h1>
        ${char.nameEn ? `<p style="color:var(--text-dim); margin-bottom:6px;">${char.nameEn}</p>` : ""}
        <span class="detail-anime">🎬 ${char.anime}${char.animeRu ? " · " + char.animeRu : ""}</span>

        <blockquote class="detail-quote">«${char.quote}»</blockquote>

        <div class="detail-actions">
          <button class="btn btn-primary" id="detailFavBtn">${favLabel}</button>
          <button class="btn btn-ghost" id="detailBackBtn2">← Назад</button>
        </div>

        <div class="detail-section">
          <h2>История</h2>
          <p>${char.story}</p>
        </div>

        <div class="detail-section">
          <h2>Характер</h2>
          <p>${char.personality}</p>
        </div>

        ${char.abilities?.length ? `
        <div class="detail-section">
          <h2>Способности и навыки</h2>
          <ul class="facts-list">
            ${char.abilities.map((a) => `<li>${a}</li>`).join("")}
          </ul>
        </div>` : ""}

        <div class="detail-section">
          <h2>Интересные факты</h2>
          <ul class="facts-list">
            ${char.facts.map((f) => `<li>${f}</li>`).join("")}
          </ul>
        </div>

        ${char.relations?.length ? `
        <div class="detail-section">
          <h2>Отношения с другими персонажами</h2>
          <ul class="facts-list">
            ${char.relations.map((r) => `<li><strong>${r.who}</strong> — ${r.how}</li>`).join("")}
          </ul>
        </div>` : ""}

        <div class="detail-section">
          <h2>Галерея</h2>
          <div class="gallery-grid" id="galleryGrid"></div>
        </div>
      </div>
    </div>
  `;

  const mainImg = container.querySelector("#detailMainImg");
  setImage(mainImg, char.images?.[0], char.name, char.color);

  const galleryGrid = container.querySelector("#galleryGrid");
  (char.images || []).forEach((src, i) => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    const img = document.createElement("img");
    img.alt = `${char.name} #${i + 1}`;
    setImage(img, src, char.name, char.color);
    item.appendChild(img);
    item.addEventListener("click", () => openLightbox(char.images, i, char));
    galleryGrid.appendChild(item);
  });

  // fav button
  const favBtn = container.querySelector("#detailFavBtn");
  favBtn.addEventListener("click", () => {
    toggleFav(char.id, null);
    const active = isFav(char.id);
    favBtn.textContent = active ? "♥ В избранном" : "♡ В избранное";
    favBtn.classList.toggle("active", active);
  });

  // back buttons
  container.querySelector("#backBtn").addEventListener("click", () => goToPage("characters"));
  container.querySelector("#detailBackBtn2").addEventListener("click", () => goToPage("characters"));
}

/* =====================================================================
   LIGHTBOX
   ===================================================================== */
function openLightbox(images, index, char) {
  state.lightbox.images = images;
  state.lightbox.index = index;
  state.lightbox.char = char;
  updateLightbox();
  $("#lightbox").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  $("#lightbox").classList.add("hidden");
  document.body.style.overflow = "";
}

function updateLightbox() {
  const { images, index, char } = state.lightbox;
  if (!images.length) return;
  const img = $("#lbImg");
  setImage(img, images[index], char?.name || "?", char?.color);
  $("#lbCounter").textContent = `${index + 1} / ${images.length}`;
}

function lightboxPrev() {
  const { images, index } = state.lightbox;
  if (!images.length) return;
  state.lightbox.index = (index - 1 + images.length) % images.length;
  updateLightbox();
}

function lightboxNext() {
  const { images, index } = state.lightbox;
  if (!images.length) return;
  state.lightbox.index = (index + 1) % images.length;
  updateLightbox();
}

/* =====================================================================
   STATS
   ===================================================================== */
function updateStats() {
  const statTotal = $("#statTotal");
  const statAnime = $("#statAnime");
  if (statTotal) statTotal.textContent = characters.length;
  if (statAnime) statAnime.textContent = new Set(characters.map((c) => c.anime)).size;
}

/* =====================================================================
   ANIME FILTER DROPDOWN
   ===================================================================== */
function fillAnimeFilter() {
  const sel = $("#animeFilter");
  if (!sel) return;
  const animes = [...new Set(characters.map((c) => c.anime))].sort();
  animes.forEach((a) => {
    const opt = document.createElement("option");
    opt.value = a;
    opt.textContent = a;
    sel.appendChild(opt);
  });
}

/* =====================================================================
   EVENT BINDINGS
   ===================================================================== */
function bindEvents() {
  // navigation
  document.body.addEventListener("click", (e) => {
    const link = e.target.closest("[data-page]");
    if (link && link.dataset.page) {
      e.preventDefault();
      goToPage(link.dataset.page);
    }
  });

  // search
  $("#searchInput").addEventListener("input", (e) => {
    state.search = e.target.value;
    if (state.currentPage === "home") goToPage("characters");
    else renderCharactersPage();
  });

  // filters
  $$(".filter").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$(".filter").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.filter = btn.dataset.filter;
      renderCharactersPage();
    });
  });

  // anime select
  $("#animeFilter").addEventListener("change", (e) => {
    state.animeFilter = e.target.value;
    renderCharactersPage();
  });

  // sort
  $("#sortSelect").addEventListener("change", (e) => {
    state.sort = e.target.value;
    renderCharactersPage();
  });

  // theme
  $("#themeToggle").addEventListener("click", toggleTheme);

  // burger
  $("#burger").addEventListener("click", () => {
    $("#navLinks").classList.toggle("open");
  });

  // lightbox
  $("#lbClose").addEventListener("click", closeLightbox);
  $("#lbPrev").addEventListener("click", lightboxPrev);
  $("#lbNext").addEventListener("click", lightboxNext);
  $("#lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });

  // keyboard
  document.addEventListener("keydown", (e) => {
    if ($("#lightbox").classList.contains("hidden")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") lightboxPrev();
    if (e.key === "ArrowRight") lightboxNext();
  });

  // to top
  const toTop = $("#toTop");
  window.addEventListener("scroll", () => {
    toTop.classList.toggle("hidden", window.scrollY < 400);
  });
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* =====================================================================
   INIT
   ===================================================================== */
function init() {
  applyTheme();
  fillAnimeFilter();
  updateStats();
  updateFavBadge();
  renderPopularGrid();
  bindEvents();

  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  goToPage("home");
}

document.addEventListener("DOMContentLoaded", init);
// ========== ССЫЛКИ НА САЙТЫ ПРОСМОТРА ==========

// Ями Аниме (YummyAnime) — актуальный домен-зеркало
function getYummyUrl(char) {
  const query = char.animeSearch || char.anime;
  return "https://yummy-anime.ru/search?q=" + encodeURIComponent(query);
}

// АнимеГО (AnimeGO) — рабочий домен v2
function getAnimeGoUrl(char) {
  const query = char.animeSearch || char.anime;
  return "https://v2.animego.bz/search?query=" + encodeURIComponent(query);
}
