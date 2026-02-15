
// ==========================================
// 商品・記事データ管理ファイル
// ==========================================
// このファイルが「唯一の商品データベース」です。
// IDルール:
// A = Fitness (フィットネス)
// B = Gadget (ガジェット)
// C = Health (健康食品)
// D = Furniture (家具・インテリア)

window.productData = [
  // --- A: Fitness ---
  {
    id: 'A1',
    type: 'product',
    categoryId: 'fitness',
    title: 'adidas腹筋ローラー',
    price: 2291,
    image: 'https://m.media-amazon.com/images/I/51Z-6Tl3vTL._AC_SL1000_.jpg',
    description: '場所を取らずに自宅でお腹のたるみを引き締め、バキバキの腹筋を目指せる本格派腹筋ローラー。',
    date: '2024-03-01',
    recommendScore: 4.6,
    link: 'fitness1.html',
    featured: true,
    views: 1250,
    specs: { weight: "485g", size: "18 x 18 x 29.3 cm", material: "プラスチック" },
    affiliateLink: "https://amzn.to/3LXlnmQ",
    yahooLink: "" 
  },

  // --- B: Gadget ---
  {
    id: 'B1',
    type: 'product',
    categoryId: 'gadget',
    title: 'SCYROX V8',
    price: 9800,
    image: 'https://m.media-amazon.com/images/I/41nxU80ZjeL._AC_SL1200_.jpg',
    description: '36gの超軽量ボディと圧倒的なコストパフォーマンスを実現したゲーミングマウス。FPSゲーマー必見。',
    date: '2026-02-14',
    recommendScore: 4.7,
    link: 'gadget1.html',
    featured: true,
    views: 3400,
    specs: { weight: "36g", size: "118 x 63 x 38mm", material: "プラスチック" },
    affiliateLink: "https://amzn.to/4kFEONN",
    yahooLink: "https://yahoo.jp/P-JZC3" 
  },
  {
    id: 'B2',
    type: 'product',
    categoryId: 'gadget',
    title: 'Stream Deck MK.2',
    price: 22980,
    image: 'https://m.media-amazon.com/images/I/61K3VNGhy6L._AC_SL1500_.jpg',
    description: '好きなアイコンでカスタマイズでき、配信や作業の音声切り替えもワンタッチでこなせる万能左手デバイス。',
    date: '2026-02-14',
    recommendScore: 4.7,
    link: 'gadget2.html',
    featured: true,
    views: 2800,
    specs: { weight: "145g", size: "118 x 84 x 25mm", material: "プラスチック" },
    affiliateLink: "https://amzn.to/4rlMnvE",
    yahooLink: "https://store.shopping.yahoo.co.jp/tsukumo-y/9760098502268.html"
  },
  {
    id: 'B3',
    type: 'product',
    categoryId: 'gadget',
    title: 'Monitor Arm[AS-MABM03]',
    price: 6980,
    image: 'https://m.media-amazon.com/images/I/61ktD5ERs5L._AC_SL1500_.jpg',
    description: 'モニターを好きな位置・角度にしっかり固定できる、安定性抜群でコスパ良しのメカニカルスプリング式モニターアーム。',
    date: '2026-02-14',
    recommendScore: 4.6,
    link: 'gadget3.html',
    featured: false,
    views: 1500,
    specs: { weight: "2.5kg", size: "対応:17-32インチ", material: "スチール/アルミ" },
    affiliateLink: "https://amzn.to/40gecJD",
    yahooLink: "https://yahoo.jp/Tp8JBv"
  },
  {
    id: 'B4',
    type: 'product',
    categoryId: 'gadget',
    title: 'Wooting 60HE+',
    price: 35000,
    image: 'https://m.media-amazon.com/images/I/41yzKWnUA-L._AC_SL1080_.jpg',
    description: 'ラピットトリガーで最速入力を実現。プロ志向ゲーマー御用達のロングセラー60％ゲーミングキーボード。',
    date: '2026-02-14',
    recommendScore: 4.8,
    link: 'gadget4.html',
    featured: true,
    views: 4200,
    specs: { weight: "605g", size: "302 x 116 x 38mm", material: "ABS/PBT" },
    affiliateLink: "https://amzn.to/3ZyvMZh",
    yahooLink: "https://yahoo.jp/9K6RDT"
  },
  {
    id: 'B5',
    type: 'product',
    categoryId: 'gadget',
    title: 'WOBKEY Rainy',
    price: 27000,
    image: 'https://m.media-amazon.com/images/I/71G3KxclOGL._AC_SL1500_.jpg',
    description: '雨音のようなコトコト打鍵音とホットスワップ対応で、自分好みの音と打鍵感に育てられる75％メカニカルキーボード。',
    date: '2026-02-14',
    recommendScore: 4.6,
    link: 'gadget5.html',
    featured: false,
    views: 1800,
    specs: { weight: "1.8kg", size: "320 x 140 x 40mm", material: "アルミ" },
    affiliateLink: "https://amzn.to/3OpoVik",
    yahooLink: "https://yahoo.jp/Yma5bA"
  },

  // --- C: Health ---
  {
    id: 'C1',
    type: 'product',
    categoryId: 'health',
    title: 'ビーレジェンド お試し12種セット',
    price: 3600,
    image: 'https://m.media-amazon.com/images/I/71vJ2F+0oBL._AC_SL1349_.jpg',
    description: '実際に飲み比べ。全部試せば怖くない、好きな味を失敗せずに見つけたい30代女性向けレビュー。',
    date: '2026-02-15',
    recommendScore: 4.0,
    link: 'health1.html',
    featured: false, 
    views: 800,
    specs: { weight: "29g x 12袋", size: "-", material: "ホエイプロテイン" },
    affiliateLink: "https://amzn.to/3MpSvn8", 
    yahooLink: "https://store.shopping.yahoo.co.jp/real-style/blts12aas.html"
  },

  // --- D: Furniture ---
  {
    id: 'D1',
    type: 'product',
    categoryId: 'furniture',
    title: '棚 壁面収納 ウォールラック',
    price: 10336,
    image: 'https://m.media-amazon.com/images/I/61AxQlkbe+S._AC_SL1500_.jpg',
    description: 'つっぱりで壁を傷つけず、空いたスペースをおしゃれに活用できる壁面収納ウォールラック。',
    date: '2026-02-15',
    recommendScore: 4.9,
    link: 'furniture1.html',
    featured: true,
    views: 950, 
    specs: { weight: "11.5kg", size: "幅60×奥行25×高さ200-260cm", material: "スチール/木目調シート" },
    affiliateLink: "https://amzn.to/4bDSTsC",
    yahooLink: "https://shopping.yahoo.co.jp/search?p=EXAMPLE4"
  },
  {
    id: 'D2',
    type: 'product',
    categoryId: 'furniture',
    title: 'BONIR ソファ',
    price: 22280,
    image: 'https://item-shopping.c.yimg.jp/i/n/bonir-yhs_61175-61176_i_20251226153917',
    description: 'かわいく部屋になじむ、コンパクトなのにしっかり座れる多色展開の2.5人掛けソファ。',
    date: '2026-02-14',
    recommendScore: 4.6,
    link: 'furniture2.html',
    featured: true,
    views: 1100,
    specs: { weight: "28kg", size: "幅158×奥行75×高さ73cm", material: "ファブリック" },
    affiliateLink: "", // Amazonなし
    yahooLink: "https://yahoo.jp/sByA2u"
  }
];
