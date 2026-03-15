
// ==========================================
// 商品・記事データ管理ファイル
// ==========================================
// このファイルが「唯一の商品データベース」です。
// IDルール:
// A = Fitness (フィットネス) -> 記事は AA
// B = Gadget (ガジェット) -> 記事は BB
// C = Health (健康食品) -> 記事は CC
// D = Furniture (家具・インテリア) -> 記事は DD

window.productData = [
  // --- AA: Fitness Articles ---
  {
    id: 'AA1',
    type: 'article', // 記事タイプ
    categoryId: 'fitness',
    title: '【2026年最新】自宅で痩せる！最強フィットネス器具おすすめ5選',
    price: 0, // 記事なので0
    // YouTubeサムネイルサイズ (16:9)
    image: 'https://picsum.photos/800/450?random=100',
    description: '「ジムに通う時間がない」「自宅で効率よく痩せたい」そんな悩みを解決する、買ってよかった宅トレグッズを厳選しました。',
    date: '2026-02-18',
    recommendScore: 5.0,
    link: 'R.fitness1.html',
    featured: true, // TOP記事に表示
    views: 15000,
    specs: { type: "まとめ記事", items: "5選" },
    affiliateLink: "",
    rakutenLink: "" 
  },

  // --- BB: Gadget Articles ---
  {
    id: 'BB1',
    type: 'article',
    categoryId: 'gadget',
    title: '【2026年最新】一人暮らし必見！時短家電ランキングTOP5',
    price: 0,
    image: 'https://pbs.twimg.com/media/HBcv5F9aQAEIjiR?format=jpg&name=large',
    description: '新生活を始める一人暮らしの方必見！料理や家事の負担を大幅に減らしてくれる最新の時短家電を厳選してご紹介します。',
    date: '2026-02-17',
    recommendScore: 4.9,
    link: 'R.gadget1.html',
    featured: true,
    views: 22000,
    specs: { type: "まとめ記事", items: "5選" },
    affiliateLink: "",
    rakutenLink: "" 
  },
  {
    id: 'BB2',
    type: 'article',
    categoryId: 'gadget',
    title: '【2026年最新】失敗しないコスパ最強タブレット5選｜安くて快適なおすすめモデル',
    price: 0,
    image: 'https://pbs.twimg.com/media/HDdgnFAb0AAz0ku?format=jpg&name=large',
    description: '「動画やネットがサクサク動くタブレットがほしいけど、高すぎるのはちょっと…」という人向けに、2〜4万円台中心のコスパ重視モデルだけを編集部が厳選しました。',
    date: '2026-03-15',
    recommendScore: 4.8,
    link: 'R.Gadget2.html',
    featured: true,
    views: 18000,
    specs: { type: "まとめ記事", items: "5選" },
    affiliateLink: "",
    rakutenLink: "" 
  },

  // --- DD: Furniture Articles ---
  {
    id: 'DD1',
    type: 'article',
    categoryId: 'furniture',
    title: '【2026年最新】おしゃれでコスパ最強な家具ランキングTOP5',
    price: 0,
    image: 'https://pbs.twimg.com/media/HDRBSGpbQAAyQuE?format=jpg&name=large',
    description: '一人暮らしや同棲の新生活で「とりあえず」で家具を選ぶと、あとから買い替えでムダ出費になりがち。この記事では、SNSやレビューで評価の高い“おしゃれでコスパの良い家具”を厳選して5つご紹介するよ。',
    date: '2026-03-13',
    recommendScore: 4.8,
    link: 'R.Furniture2.html',
    featured: true,
    views: 15000,
    specs: { type: "まとめ記事", items: "5選" },
    affiliateLink: "",
    rakutenLink: ""
  },

  // --- A: Fitness Products ---
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
    rakutenLink: "https://item.rakuten.co.jp/castingdoctor/b00evnxn6k/" // 楽天アフィリエイトURLをここに挿入
  },

  // --- B: Gadget Products ---
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
    rakutenLink: "https://item.rakuten.co.jp/kitcut/53273591701/" // 楽天アフィリエイトURLをここに挿入
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
    rakutenLink: "https://item.rakuten.co.jp/trend-tech/9760098502268/" // 楽天アフィリエイトURLをここに挿入
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
    rakutenLink: "https://item.rakuten.co.jp/r-kojima/4582353604037/" // 楽天アフィリエイトURLをここに挿入
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
    rakutenLink: "https://item.rakuten.co.jp/interprime/compass1742901062/" // 楽天アフィリエイトURLをここに挿入
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
    rakutenLink: "https://item.rakuten.co.jp/seikatsuouenshop/abc-0czrqw3nq/" // 楽天アフィリエイトURLをここに挿入
  },
  {
    id: 'B6',
    type: 'product',
    categoryId: 'gadget',
    title: 'Apple iPad 11インチ（第11世代・A16・Wi‑Fi 128GB）',
    price: 59800,
    image: 'https://m.media-amazon.com/images/I/616FFqht2sL._AC_SL1500_.jpg',
    description: 'A16チップ搭載で、ブラウジングから動画編集・イラストまでサクサク動く万能タブレット。',
    date: '2026-03-15',
    recommendScore: 4.9,
    link: 'R.Gadget2.html#rank-1',
    featured: false,
    views: 5000,
    specs: { size: "11インチ", storage: "128GB", chip: "A16 Bionic" },
    affiliateLink: "https://amzn.to/4t4PrNh",
    rakutenLink: "https://item.rakuten.co.jp/087481ai/2100000017122/"
  },
  {
    id: 'B7',
    type: 'product',
    categoryId: 'gadget',
    title: 'Xiaomi Redmi Pad 2 6GB+128GB',
    price: 24800,
    image: 'https://m.media-amazon.com/images/I/51tkVgolytL._AC_SL1500_.jpg',
    description: '11インチ・2.5K解像度・最大90Hzリフレッシュレート対応で、2万円台前半とは思えない表示クオリティを持つ人気Androidタブレット。',
    date: '2026-03-15',
    recommendScore: 4.6,
    link: 'R.Gadget2.html#rank-2',
    featured: false,
    views: 4000,
    specs: { size: "11インチ", storage: "128GB", memory: "6GB" },
    affiliateLink: "https://amzn.to/47A5dqT",
    rakutenLink: "https://item.rakuten.co.jp/biccamera/6932554433413/"
  },
  {
    id: 'B8',
    type: 'product',
    categoryId: 'gadget',
    title: 'Amazon Fire HD 10（第13世代・2023年モデル）',
    price: 19800,
    image: 'https://m.media-amazon.com/images/I/61nwWehfm0L._AC_SL1500_.jpg',
    description: 'セール時には1万円台前半まで価格が下がることもある、定番の高コスパ10.1インチタブレット。',
    date: '2026-03-15',
    recommendScore: 4.3,
    link: 'R.Gadget2.html#rank-3',
    featured: false,
    views: 3500,
    specs: { size: "10.1インチ", resolution: "フルHD", battery: "最大13時間" },
    affiliateLink: "https://amzn.to/3NA5t2m",
    rakutenLink: "https://item.rakuten.co.jp/sanreishop/840268977597/"
  },
  {
    id: 'B9',
    type: 'product',
    categoryId: 'gadget',
    title: 'ALLDOCUBE iPlay 60 Pad Pro',
    price: 29800,
    image: 'https://m.media-amazon.com/images/I/71GDaZ5GjoL._AC_SL1500_.jpg',
    description: '12.1インチの大画面に2,560×1,600解像度・90Hz対応ディスプレイを備えた、映像鑑賞向きのAndroidタブレット。',
    date: '2026-03-15',
    recommendScore: 4.1,
    link: 'R.Gadget2.html#rank-4',
    featured: false,
    views: 2000,
    specs: { size: "12.1インチ", resolution: "2560x1600", refreshRate: "90Hz" },
    affiliateLink: "https://amzn.to/4sQSAAa",
    rakutenLink: "https://item.rakuten.co.jp/alldocube/iplay60pro/"
  },
  {
    id: 'B10',
    type: 'product',
    categoryId: 'gadget',
    title: 'TECLAST T50 Mini8.7インチ',
    price: 15800,
    image: 'https://m.media-amazon.com/images/I/71ez4biEVFL._AC_SL1500_.jpg',
    description: 'Android 15ベースのOSと8.7インチ・120Hz高リフレッシュレート、5100mAhバッテリーを備えた、価格重視の中華タブレット。',
    date: '2026-03-15',
    recommendScore: 4.0,
    link: 'R.Gadget2.html#rank-5',
    featured: false,
    views: 1500,
    specs: { size: "8.7インチ", os: "Android 15", refreshRate: "120Hz" },
    affiliateLink: "https://amzn.to/4sRvVDP",
    rakutenLink: "https://item.rakuten.co.jp/smartbiz/h-tbcase-015-1092-1ca/"
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
    rakutenLink: "https://item.rakuten.co.jp/realstyle4u/blts13aas/" // 楽天アフィリエイトURLをここに挿入
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
    rakutenLink: "https://item.rakuten.co.jp/panas/q2037/" // 楽天アフィリエイトURLをここに挿入
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
    rakutenLink: "https://item.rakuten.co.jp/bonir/61175-61176/" // 楽天アフィリエイトURLをここに挿入
  },
  {
    id: 'D3',
    type: 'product',
    categoryId: 'furniture',
    title: 'LOWYA 木目調ネストテーブル 円形[幅50/幅70]',
    price: 15000,
    image: 'https://m.media-amazon.com/images/I/81SOOdMicoL._AC_SL1500_.jpg',
    description: '北欧テイストの円形天板を大小2枚ネストさせたローテーブル。リアルな木目調の天板とスリムなT字脚で圧迫感が少なく、狭いワンルームでも抜け感のあるおしゃれなリビングをつくれるよ。',
    date: '2026-03-13',
    recommendScore: 4.8,
    link: 'furniture3.html',
    featured: false,
    views: 1000,
    specs: { size: "大:幅70×奥行70×高さ35cm/小:幅50×奥行50×高さ30cm", material: "合成樹脂化粧繊維板/スチール" },
    affiliateLink: "https://amzn.to/4un0we1",
    rakutenLink: "https://item.rakuten.co.jp/low-ya/s5t8w/"
  },
  {
    id: 'D4',
    type: 'product',
    categoryId: 'furniture',
    title: 'ニトリ Nシールド 2人用合皮ソファ（ポケットコイル座面）',
    price: 30000,
    image: 'https://m.media-amazon.com/images/I/91VBgOoWiOL._AC_SL1500_.jpg',
    description: '傷や汚れに強いニトリ独自の合皮「Nシールド」を採用した2人掛けソファ。しっかりしたポケットコイル入りの座面で、へたりにくく長く使える。',
    date: '2026-03-13',
    recommendScore: 4.6,
    link: 'furniture4.html',
    featured: false,
    views: 1000,
    specs: { material: "合皮(Nシールド)/ポケットコイル" },
    affiliateLink: "https://amzn.to/4deCtrm",
    rakutenLink: "https://item.rakuten.co.jp/nitori/1134411/"
  },
  {
    id: 'D5',
    type: 'product',
    categoryId: 'furniture',
    title: 'ニトリ 4枚セット遮光カーテン（レース付き）',
    price: 5000,
    image: 'https://m.media-amazon.com/images/I/51-W-okg8fL._AC_.jpg',
    description: 'ドレープカーテン2枚とミラーレース2枚がセットになった、ニトリの定番4枚組カーテン。1窓分がまとめてそろうので、サイズさえ合えば「とりあえずこれでOK」という安心感があるアイテムだよ。',
    date: '2026-03-13',
    recommendScore: 4.3,
    link: 'furniture5.html',
    featured: false,
    views: 1000,
    specs: { items: "ドレープ2枚/レース2枚" },
    affiliateLink: "https://amzn.to/3NBqObE",
    rakutenLink: "https://item.rakuten.co.jp/nitori/2114100218352s/"
  },
  {
    id: 'D6',
    type: 'product',
    categoryId: 'furniture',
    title: 'LOWYA ミッドセンチュリー風オープンシェルフ[幅90]',
    price: 10000,
    image: 'https://m.media-amazon.com/images/I/61K8THnX1wL._AC_SL1500_.jpg',
    description: '木目×ブラックスチールの組み合わせがかっこいい、オープンタイプの収納シェルフ。教科書や本、ゲーム機、小物をまとめて“見せながら収納”できる。',
    date: '2026-03-13',
    recommendScore: 4.5,
    link: 'furniture6.html',
    featured: false,
    views: 1000,
    specs: { size: "幅90cm" },
    affiliateLink: "https://amzn.to/40XYumW",
    rakutenLink: "https://item.rakuten.co.jp/low-ya/4kzs7/"
  },
  {
    id: 'D7',
    type: 'product',
    categoryId: 'furniture',
    title: 'LOWYA ロースタイルベッド（すのこ×木目フレーム）',
    price: 15000,
    image: 'https://m.media-amazon.com/images/I/813uQ6Yg-PL._AC_SL1500_.jpg',
    description: '床からの高さを抑えたロースタイルのすのこベッド。フレームが低いぶん部屋が広く見えやすく、マットレスを置いても圧迫感が出にくいのがポイントだよ。',
    date: '2026-03-13',
    recommendScore: 4.5,
    link: 'furniture7.html',
    featured: false,
    views: 1000,
    specs: { material: "すのこ/木目フレーム" },
    affiliateLink: "https://amzn.to/4cEWozv",
    rakutenLink: "https://item.rakuten.co.jp/hahaprice/n511p318930/"
  }
];

// ==========================================
// リンク挙動の修正 (SPAルーター対策 & #リンク無効化)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    const target = e.target.closest('a');
    if (target && (target.classList.contains('js-rakuten-link') || target.classList.contains('js-amazon-link'))) {
      const href = target.getAttribute('href');
      
      // 有効なリンクの場合: ルーターによる干渉を防ぐ
      if (href && href !== '#' && href !== '' && !href.startsWith('javascript')) {
        e.stopPropagation(); 
      } 
      // 無効なリンク (#) の場合: ページトップへのジャンプを防ぐ
      else {
        e.preventDefault();
      }
    }
  }, true); // Capture phase to ensure it runs before other handlers
});