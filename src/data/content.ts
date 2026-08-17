import { Locale } from "@/lib/i18n";

export type Collection = {
  slug: string;
  name: string;
  nameRu: string;
  description: string;
  descriptionRu: string;
  image: string;
  filter?: string;
};

export const collections: Collection[] = [
  { slug: "pure", name: "Pure Ivan Tea", nameRu: "Чистый иван-чай", description: "Fireweed leaf and flower, gathered and finished without additions.", descriptionRu: "Лист и цветок кипрея, собранные и приготовленные без добавок.", image: "/images/fedorov/processing-sequence.png", filter: "pure" },
  { slug: "fruit", name: "With Apple", nameRu: "С яблоком", description: "Mellow Mari El apple brings roundness and a gentle orchard aroma.", descriptionRu: "Марийское яблоко добавляет мягкость и тонкий аромат сада.", image: "/images/fedorov/product-still-life.png", filter: "fruit" },
  { slug: "berries", name: "With Berries", nameRu: "С ягодами", description: "Lingonberry, currant and raspberry brighten the amber fireweed cup.", descriptionRu: "Брусника, смородина и малина делают янтарный настой ярче.", image: "/images/fedorov/cold-ivan-tea.png", filter: "berry" },
  { slug: "herbs", name: "With Herbs", nameRu: "С травами", description: "Mint, oregano and complementary meadow herbs from the region.", descriptionRu: "Мята, душица и другие луговые травы региона.", image: "/images/fedorov/drying-screens.png", filter: "herbal" },
];

export type ArticleSection = { heading: string; headingRu: string; body: string; bodyRu: string };

export type Article = {
  slug: string;
  category: string;
  categoryRu: string;
  title: string;
  titleRu: string;
  excerpt: string;
  excerptRu: string;
  image: string;
  readTime: string;
  readTimeRu: string;
  intro: string;
  introRu: string;
  sections: ArticleSection[];
  note?: string;
  noteRu?: string;
  facts?: { value: string; label: string; labelRu: string }[];
  sources?: { label: string; labelRu: string; href: string }[];
};

export const articles: Article[] = [
  {
    slug: "what-is-ivan-tea",
    category: "IVAN TEA LIBRARY",
    categoryRu: "БИБЛИОТЕКА ИВАН-ЧАЯ",
    title: "One Plant, Many Names: What Ivan Tea Is",
    titleRu: "Одно растение, много имён: что такое иван-чай",
    excerpt: "A botanical introduction to fireweed—and why it is not black, green or herbal tea made from Camellia sinensis.",
    excerptRu: "Ботаническое знакомство с кипреем и объяснение, почему это не чёрный или зелёный чай из Camellia sinensis.",
    image: "/images/fedorov/mari-el-landscape.png",
    readTime: "6 min read",
    readTimeRu: "6 минут",
    intro: "Ivan Tea is an infusion made from the leaves of narrow-leaved fireweed, Chamaenerion angustifolium. The plant is also listed under botanical synonyms including Chamerion angustifolium and Epilobium angustifolium. It grows across much of the northern hemisphere and is especially visible where open land meets forest.",
    introRu: "Иван-чай — это напиток из листьев кипрея узколистного, Chamaenerion angustifolium. В научной литературе встречаются и синонимы Chamerion angustifolium и Epilobium angustifolium. Растение широко распространено в северном полушарии и особенно заметно на открытых участках у кромки леса.",
    sections: [
      { heading: "Not Camellia sinensis", headingRu: "Не Camellia sinensis", body: "Black, green, white and oolong tea all come from Camellia sinensis. Ivan Tea comes from fireweed in the willowherb family. That botanical difference explains its naturally caffeine-free character and its distinct soft, fruity aroma.", bodyRu: "Чёрный, зелёный, белый чай и улун получают из Camellia sinensis. Иван-чай делают из кипрея семейства онагровых. Эта ботаническая разница объясняет отсутствие кофеина от природы и мягкий фруктово-цветочный аромат." },
      { heading: "The cup", headingRu: "Вкус настоя", body: "Careful rolling, fermentation and drying deepen the leaves from fresh green to dark brown. The finished infusion is amber rather than grassy, with notes that can suggest dried fruit, honey and soft wood. Additions should support—not hide—that base.", bodyRu: "Скручивание, ферментация и сушка меняют свежий зелёный лист на тёмно-коричневый. Настой получается янтарным, без травянистой резкости, с оттенками сухофруктов, мёда и мягкой древесности. Добавки должны подчёркивать основу, а не скрывать её." },
    ],
    facts: [{ value: "0", label: "caffeine by nature", labelRu: "кофеина от природы" }, { value: "1", label: "plant species", labelRu: "вид растения" }, { value: "4", label: "magenta petals", labelRu: "пурпурных лепестка" }],
    sources: [{ label: "Natural History Museum species record", labelRu: "Карточка вида Natural History Museum", href: "https://www.nhm.ac.uk/our-science/data/uk-species/taxon?tvk=NBNSYS0000003598" }],
  },
  {
    slug: "hand-collected-mari-el",
    category: "ORIGIN & TRADITION",
    categoryRu: "ПРОИСХОЖДЕНИЕ И ТРАДИЦИЯ",
    title: "Hand Collected. From Mari El.",
    titleRu: "Собран вручную. Из Марий Эл.",
    excerpt: "How clean forest edges, careful picking and local plant knowledge shape every Fedorov Tea batch.",
    excerptRu: "Как чистые опушки, бережный сбор и местное знание растений формируют каждую партию Fedorov Tea.",
    image: "/images/fedorov/hero-field.png",
    readTime: "7 min read",
    readTimeRu: "7 минут",
    intro: "Mari El is a republic of forests, river meadows and open clearings. Fireweed appears in the bright spaces between them. Fedorov Tea works with small gathering teams who know these places and collect only in clean areas away from roads and intensive agriculture.",
    introRu: "Марий Эл — республика лесов, речных лугов и открытых полян. Кипрей растёт именно в светлых пространствах между ними. Fedorov Tea работает с небольшими группами сборщиков, которые знают эти места и выбирают чистые участки вдали от дорог и интенсивного земледелия.",
    sections: [
      { heading: "A selective harvest", headingRu: "Выборочный сбор", body: "Hand collection makes it possible to choose healthy leaves and flower tops while leaving enough of the plant standing. Each basket can be checked in the field, and different additions—apple, berries or herbs—are gathered and dried separately.", bodyRu: "Ручной сбор позволяет выбирать здоровые листья и верхушки, оставляя достаточную часть растения нетронутой. Каждую корзину можно проверить прямо в поле, а яблоки, ягоды и травы собираются и сушатся отдельно." },
      { heading: "Tradition without costume", headingRu: "Традиция без стилизации", body: "Gathering and drying wild plants belongs to everyday regional knowledge. We present that practice as it is now: skilled, clean and contemporary. The point is not nostalgia. It is a direct relationship between product, people and place.", bodyRu: "Сбор и сушка дикорастущих растений — часть повседневного знания региона. Мы показываем эту практику такой, какая она сегодня: профессиональной, чистой и современной. Здесь важна не ностальгия, а прямая связь продукта, людей и места." },
    ],
    sources: [{ label: "Ethnobotanical review of wild plants used as food in Russia", labelRu: "Этноботанический обзор пищевого использования дикорастущих растений в России", href: "https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2017.00841/full" }],
  },
  {
    slug: "brewing-ivan-tea",
    category: "BREWING GUIDE",
    categoryRu: "КАК ЗАВАРИВАТЬ",
    title: "A Clearer Cup: Brewing Ivan Tea",
    titleRu: "Чистый вкус: как заваривать иван-чай",
    excerpt: "A practical starting point for hot infusions, repeat steeps and a softer overnight brew.",
    excerptRu: "Практическая отправная точка для горячего настоя, повторного заваривания и мягкого холодного способа.",
    image: "/images/fedorov/product-still-life.png",
    readTime: "5 min read",
    readTimeRu: "5 минут",
    intro: "Ivan Tea is forgiving. Use the guide below as a baseline, then adjust leaf and time to your taste. Because additions vary in density, fruit blends may need a little more leaf than the pure tea.",
    introRu: "Иван-чай легко заваривать. Используйте рекомендации как отправную точку, а затем регулируйте количество листа и время по вкусу. Смеси с фруктами могут потребовать чуть больше сухого продукта, чем классический чай.",
    sections: [
      { heading: "The everyday method", headingRu: "На каждый день", body: "Use 2–3 g per 250 ml. Pour water at 90–95°C, cover and steep for 6–8 minutes. Taste before adding sweetener: fireweed often develops its own mellow, dried-fruit sweetness as the cup cools.", bodyRu: "Возьмите 2–3 г на 250 мл. Залейте водой 90–95°C, накройте и настаивайте 6–8 минут. Попробуйте до добавления подсластителя: по мере остывания кипрей раскрывает мягкую сухофруктовую сладость." },
      { heading: "A second infusion", headingRu: "Повторное заваривание", body: "Good leaf can be infused again. Add fresh hot water and extend the time to 8–10 minutes. The second cup is usually lighter and more floral.", bodyRu: "Качественный лист можно заварить повторно. Добавьте свежую горячую воду и увеличьте время до 8–10 минут. Второй настой обычно получается светлее и цветочнее." },
    ],
    facts: [{ value: "2–3 g", label: "leaf per 250 ml", labelRu: "листа на 250 мл" }, { value: "90–95°C", label: "water", labelRu: "температура воды" }, { value: "6–8 min", label: "first steep", labelRu: "первое заваривание" }],
  },
  {
    slug: "composition-and-research",
    category: "RESEARCH NOTES",
    categoryRu: "ИССЛЕДОВАНИЯ",
    title: "What Research Can—and Cannot—Say About Ivan Tea",
    titleRu: "Что исследования могут — и не могут — сказать об иван-чае",
    excerpt: "Polyphenols, fermentation and the important gap between laboratory findings and proven health outcomes.",
    excerptRu: "Полифенолы, ферментация и важная разница между лабораторными результатами и доказанным влиянием на здоровье.",
    image: "/images/fedorov/processing-sequence.png",
    readTime: "9 min read",
    readTimeRu: "9 минут",
    intro: "Fireweed leaves contain several classes of plant compounds, including flavonoids, phenolic acids and tannins such as oenothein B. Food-science studies show that fermentation conditions can change their measured levels and the aroma of the dried leaf. That is useful for understanding process and flavor—but it is not proof that drinking Ivan Tea prevents or treats disease.",
    introRu: "Листья кипрея содержат несколько классов растительных соединений, включая флавоноиды, фенольные кислоты и танины, в том числе энотеин B. Пищевые исследования показывают, что условия ферментации меняют их измеряемое содержание и аромат сухого листа. Это важно для понимания технологии и вкуса, но не доказывает, что напиток предотвращает или лечит заболевания.",
    sections: [
      { heading: "What is measured", headingRu: "Что измеряют", body: "Laboratory studies commonly use chromatography to identify compounds and in-vitro assays to estimate antioxidant activity. Results depend on plant part, harvest timing, processing, extraction solvent and storage. A value measured in a concentrated laboratory extract is not the same as the amount absorbed from an ordinary cup.", bodyRu: "В лабораторных работах соединения обычно определяют хроматографией, а антиоксидантную активность оценивают in vitro. Результат зависит от части растения, времени сбора, обработки, растворителя и хранения. Значение для концентрированного экстракта нельзя напрямую приравнивать к усвоению из обычной чашки." },
      { heading: "The honest conclusion", headingRu: "Честный вывод", body: "Ivan Tea is a flavorful caffeine-free beverage with an interesting phytochemical profile. Current literature is stronger on composition and laboratory activity than on human clinical outcomes. We therefore describe potential areas of research, not medical benefits.", bodyRu: "Иван-чай — вкусный напиток без кофеина с интересным фитохимическим профилем. Современная литература гораздо убедительнее описывает состав и лабораторную активность, чем результаты у людей. Поэтому мы говорим о направлениях исследований, а не о медицинских эффектах." },
    ],
    note: "This article is educational and is not medical advice. People who are pregnant, nursing, taking medication or managing a health condition should ask a qualified clinician about regular use of any herbal product.",
    noteRu: "Материал носит образовательный характер и не является медицинской рекомендацией. При беременности, кормлении, приёме лекарств или хронических состояниях регулярное употребление любых растительных продуктов стоит обсудить с врачом.",
    sources: [
      { label: "Study: fermentation, polyphenols and volatile compounds", labelRu: "Исследование ферментации, полифенолов и летучих соединений", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7760164/" },
      { label: "Review noting the lack of clinical trials", labelRu: "Обзор, отмечающий нехватку клинических исследований", href: "https://pubmed.ncbi.nlm.nih.gov/40076409/" },
      { label: "European Medicines Agency assessment report", labelRu: "Оценочный отчёт Европейского агентства лекарственных средств", href: "https://www.ema.europa.eu/en/documents/herbal-report/final-assessment-report-epilobium-angustifolium-l-andor-epilobium-parviflorum-schreb-herba_en.pdf" },
    ],
  },
  {
    slug: "cold-ivan-tea-apple-berries",
    category: "RECIPE",
    categoryRu: "РЕЦЕПТ",
    title: "Cold Ivan Tea with Apple & Berries",
    titleRu: "Холодный иван-чай с яблоком и ягодами",
    excerpt: "A bright make-ahead pitcher for summer tables, with no black tea hiding underneath.",
    excerptRu: "Яркий летний напиток, который удобно приготовить заранее — без чёрного чая в основе.",
    image: "/images/fedorov/cold-ivan-tea.png",
    readTime: "4 min read",
    readTimeRu: "4 минуты",
    intro: "Cold brewing keeps Ivan Tea soft and aromatic. Apple gives body; lingonberry or currant adds color and acidity. The recipe scales cleanly for a table or a retail tasting.",
    introRu: "Холодное настаивание сохраняет мягкость и аромат иван-чая. Яблоко добавляет полноту, а брусника или смородина — цвет и свежую кислинку. Рецепт легко увеличить для большой компании или дегустации.",
    sections: [
      { heading: "For one litre", headingRu: "На один литр", body: "Combine 12 g Apple & Lingonberry Ivan Tea with 1 litre of cool filtered water. Refrigerate for 8–10 hours, then strain. Add half a thinly sliced red apple and a small handful of lightly crushed berries. Serve over ice.", bodyRu: "Соедините 12 г иван-чая «Яблоко и брусника» с 1 литром прохладной фильтрованной воды. Оставьте в холодильнике на 8–10 часов, затем процедите. Добавьте половину тонко нарезанного красного яблока и небольшую горсть слегка раздавленных ягод. Подавайте со льдом." },
      { heading: "Make it seasonal", headingRu: "Сезонные варианты", body: "In early summer, use strawberry and a small mint sprig. In autumn, use apple, rowan and a teaspoon of honey dissolved in a little warm infusion before combining with the cold batch.", bodyRu: "В начале лета добавьте клубнику и веточку мяты. Осенью — яблоко, рябину и чайную ложку мёда, предварительно растворённую в небольшом количестве тёплого настоя." },
    ],
    facts: [{ value: "12 g", label: "Ivan Tea", labelRu: "иван-чая" }, { value: "1 L", label: "cool water", labelRu: "холодной воды" }, { value: "8–10 h", label: "in the fridge", labelRu: "в холодильнике" }],
  },
  {
    slug: "ivan-tea-food-pairings",
    category: "PAIRING GUIDE",
    categoryRu: "СОЧЕТАНИЯ С ЕДОЙ",
    title: "At the Table: Pairing Food with Ivan Tea",
    titleRu: "За столом: с чем сочетать иван-чай",
    excerpt: "From rye bread and soft cheese to berry pastries: pair by weight, sweetness and aroma.",
    excerptRu: "От ржаного хлеба и мягкого сыра до ягодной выпечки: сочетания по насыщенности, сладости и аромату.",
    image: "/images/fedorov/gift-set.png",
    readTime: "5 min read",
    readTimeRu: "5 минут",
    intro: "Ivan Tea sits comfortably between a light herbal infusion and a mild oxidized tea. Its amber body handles food without the assertive tannic edge of strong black tea, making it flexible from breakfast to dessert.",
    introRu: "По характеру иван-чай находится между лёгким травяным настоем и мягким ферментированным напитком. Янтарная основа сопровождает еду без выраженной терпкости крепкого чёрного чая, поэтому подходит и к завтраку, и к десерту.",
    sections: [
      { heading: "Pure Ivan Tea", headingRu: "Классический иван-чай", body: "Pair with rye or seeded bread, mild cheese, buckwheat biscuits and roasted root vegetables. The leaf's dried-fruit notes echo browned crusts without becoming sweet.", bodyRu: "Сочетайте с ржаным или зерновым хлебом, мягким сыром, гречневым печеньем и запечёнными корнеплодами. Сухофруктовые ноты поддерживают вкус румяной корочки, не делая пару сладкой." },
      { heading: "Fruit and berry blends", headingRu: "Фруктовые и ягодные смеси", body: "Apple blends suit oat cakes and soft pastries. Lingonberry, currant and raspberry blends are natural partners for dark chocolate, baked apples and not-too-sweet berry pies.", bodyRu: "Смеси с яблоком подходят к овсяному печенью и мягкой выпечке. Брусника, смородина и малина хорошо сочетаются с тёмным шоколадом, печёными яблоками и не слишком сладкими ягодными пирогами." },
    ],
  },
];

export const collectionText = (collection: Collection, locale: Locale) => ({
  ...collection,
  name: locale === "ru" ? collection.nameRu : collection.name,
  description: locale === "ru" ? collection.descriptionRu : collection.description,
});

export const articleText = (article: Article, locale: Locale) => ({
  ...article,
  category: locale === "ru" ? article.categoryRu : article.category,
  title: locale === "ru" ? article.titleRu : article.title,
  excerpt: locale === "ru" ? article.excerptRu : article.excerpt,
  readTime: locale === "ru" ? article.readTimeRu : article.readTime,
  intro: locale === "ru" ? article.introRu : article.intro,
  note: locale === "ru" ? article.noteRu : article.note,
  sections: article.sections.map((section) => ({ heading: locale === "ru" ? section.headingRu : section.heading, body: locale === "ru" ? section.bodyRu : section.body })),
});
