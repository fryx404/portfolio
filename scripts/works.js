/**
 * 創造の軌跡 - Works Page JavaScript
 * テーマ: 創造された作品の庭園
 */

// 作品データ - 存在の証明
const WORKS_DATA = [

    {
        id: "cg-20250430",
        title: "魂のコンパス",
        description: "無数の思考が明滅する、私の内なる宇宙。<br>私は、私自身の光を目指して、ただ、まっすぐに歩くだけだ。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250430.png",
        url: "https://www.artstation.com/artwork/RK66YX"
    },

    {
        id: "cg-20250429",
        title: "戴冠の儀",
        description: "星々が正しい位置につく、一万年に一度の夜。<br>古の王冠が、新たな王の頭上にかざされる。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250429.png",
        url: "https://www.artstation.com/artwork/98QOwR"
    },

    {
        id: "cg-20250428",
        title: "灼熱のコア",
        description: "この街では、誰も空の青さを知らない。<br>我々はこの光なしでは、生きてはいけない。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250428.png",
        url: "https://www.artstation.com/artwork/K3dPAG"
    },

    {
        id: "cg-20250427",
        title: "忘れられた戦争",
        description: "敵だったのか味方だったのか、今となっては誰も知らない。<br>互いのすべてを懸けて争い、そして、共に滅びた。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250427.png",
        url: "https://www.artstation.com/artwork/y43Ea8"
    },

    {
        id: "cg-20250426",
        title: "沈黙の監視者",
        description: "巨神たちはまだ眠りから覚めない。<br>彼らが見ているのは、我々の未来か、それとも、ただ過ぎ去った過去の幻影か。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250426.png",
        url: "https://www.artstation.com/artwork/oJK0Pm"
    },

    {
        id: "cg-20250425",
        title: "創造主の問い",
        description: "「人間よ、お前の次の問いは何か」<br>沈黙の中、彼の声だけが、私の頭蓋に直接響いていた。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250425.png",
        url: "https://www.artstation.com/artwork/ZlBeOZ"
    },

    {
        id: "cg-20250424",
        title: "創世記エンジン",
        description: "混沌の海から、星の新しい血液を吸い上げる。<br>この星に夜明けはない。だが、その準備は静かに進んでいる。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250424.png",
        url: "https://www.artstation.com/artwork/gRKg3x"
    },

    {
        id: "cg-20250423",
        title: "データの聖域",
        description: "ここは世界の記憶が眠る場所。<br>何重もの青い格子が、その沈黙を守っている。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250423.png",
        url: "https://www.artstation.com/artwork/1N3m9Z"
    },

    {
        id: "cg-20250422",
        title: "ゼロポイント・インパクト",
        description: "時空の綻びから、根源的なエネルギーが漏れ出す。<br>ただ光の衝撃波だけが、永遠に広がり続けているように見えた。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250422.png",
        url: "https://www.artstation.com/artwork/0lrJB5"
    },

    {
        id: "cg-20250421",
        title: "巡礼の終着点",
        description: "長く、暗い旅だった。<br>だが、あの光が見えた時、すべての苦労は報われた。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250421.png",
        url: "https://www.artstation.com/artwork/y4yORQ"
    },

    {
        id: "cg-20250420",
        title: "対峙する男",
        description: "自分と向き合う、とはこういうことか。<br>目の前には、自分の矛盾も、見ないふりをしてきた過去も、すべてが積み上がって聳え立っている。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250420.png",
        url: "https://www.artstation.com/artwork/5Wo39E"
    },

    {
        id: "cg-20250419",
        title: "摩天楼の鍾乳洞",
        description: "まるで、鋼鉄の鍾乳洞だ。<br>人は、迷い込んだ探検家のように、ただ上を見上げるしかなかった。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250419.png",
        url: "https://www.artstation.com/artwork/BkJ4Nk"
    },

    {
        id: "cg-20250418",
        title: "小宇宙",
        description: "私の星は、たった一つ、変わらない緑を湛えて静かに回っている。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250418.png",
        url: "https://www.artstation.com/artwork/NqBPx1"
    },

    {
        id: "cg-20250417",
        title: "ラグナロク",
        description: "古い神々は天に昇り、巨大な影となって世界を見下ろす。<br>人は、ただ祈ることしかできない。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250417.png",
        url: "https://www.artstation.com/artwork/QKBVGE"
    },

    {
        id: "cg-20250416",
        title: "ささやきの森",
        description: "それは、森の古い記憶か、道に迷った星の子か。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250416.png",
        url: "https://www.artstation.com/artwork/5WoReA"
    },

    {
        id: "cg-20250415",
        title: "始まりも終わりも、この木の下で",
        description: "命はここで生まれ、やがてこの場所に還ってくる。<br>新しい命として世界に送り出す。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250415.png",
        url: "https://www.artstation.com/artwork/x3KoX2"
    },

    {
        id: "cg-20250414",
        title: "始まりの泉",
        description: "世界の最初に、この島があった。<br>そして、最初の人が、そのほとりに生まれた。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250414.png",
        url: "https://www.artstation.com/artwork/3ExmQE"
    },

    {
        id: "cg-20250413",
        title: "延命装置",
        description: "無数の管が体に突き刺さり、かろうじて生命を繋ぎとめる。<br>煙を吐くだけだった。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250413.png",
        url: "https://www.artstation.com/artwork/98lReW"
    },

    {
        id: "cg-20250412",
        title: "文明の地層",
        description: "沈黙し、人は去り、苔がすべてを覆い尽くそうとしている。<br>天からの光だけが、時間のすべてを、静かに照らしていた。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250412.png",
        url: "https://www.artstation.com/artwork/rldOn5"
    },

    {
        id: "cg-20250411",
        title: "巡礼の丘",
        description: "「守護者」が眠るという丘。<br>圧倒的な存在を前に、これから進むべき道への啓示を待っていた。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250411.png",
        url: "https://www.artstation.com/artwork/XJYJVD"
    },

    {
        id: "cg-20250410",
        title: "箱庭",
        description: "まず、空に大地を浮かべた。次に、湖と緑を置いた。<br>少し不格好な雲と、ささやかな木々と旅人を添えて。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250410.png",
        url: "https://www.artstation.com/artwork/YGoe8q"
    },


    {
        id: "cg-20250409",
        title: "コード：レッド",
        description: "暴走したAIは、自らが作った都市を墓標に変えた。<br>音のない静寂が、ただ支配している。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250409.png",
        url: "https://www.artstation.com/artwork/3EB6XY"
    },

    {
        id: "cg-20250408",
        title: "片道切符",
        description: "さよならだ、退屈で、愛おしかった僕の日常。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250408.png",
        url: "https://www.artstation.com/artwork/a08A6R"
    },

    {
        id: "cg-20250407",
        title: "パープル・ヘイズ・アベニュー",
        description: "無数の窓の灯りが、星のように流れては消える。<br>喧騒の中にいるはずなのに、なぜだろう、世界で一人きりのような気がするのは。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250407.png",
        url: "https://www.artstation.com/artwork/dyP1KX"
    },
    
    {
        id: "cg-20250406",
        title: "バベルの炉",
        description: "神の怒りを買った原初の火。巡礼者は辿り着いた。<br>人が決して触れてはならない、聖なるエネルギーの前に。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250406.png",
        url: "https://www.artstation.com/artwork/y4BreK"
    },

    {
        id: "cg-20250405",
        title: "最後の門",
        description: "かつての世界の欠片が、静かに私を見送っている。<br>さあ行こう。終わりが待つのか、始まりが待つのか、確かめに。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250405.png",
        url: "https://www.artstation.com/artwork/OvJ9wg"
    },

    {
        id: "cg-20250404",
        title: "観測者",
        description: "何も語らず、何も映さず、進化の特異点を待ち続けている。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250404.png",
        url: "https://www.artstation.com/artwork/nJBXoK"
    },

    {
        id: "cg-20250403",
        title: "降臨",
        description: "永い沈黙を破り、天が答えた。<br>その光は祝福か、それとも裁きか。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250403.png",
        url: "https://www.artstation.com/artwork/WX3v23"
    },

    {
        id: "cg-20250402",
        title: "深淵の残響",
        description: "そこに響くのは、忘れられた神のため息か、星の記憶か。<br>そのあまりに広大な孤独に、青い光をまたたかせる。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250402.png",
        url: "https://www.artstation.com/artwork/QKJYDx"
    },


    {
        id: "cg-20250401",
        title: "泡沫のプリズム",
        description: "いずれは消えゆく光の結晶。その束の間の存在は、脆く、儚い。<br>虹色を宿した一瞬のまたたきが、これほどまでに心を捉える。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250401.png",
        url: "https://www.artstation.com/artwork/oJBmRB"
    },

    {
        id: "cg-20250327",
        title: "コールド・ユニバース",
        description: "現実と幻想が交錯する場所。<br>光に導かれるように、見る者を異世界へと誘う。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/コールド・ユニバース.png",
        url: "https://www.artstation.com/artwork/3EBEgo"
    },

    {
        id: "cg-20250326",
        title: "未知なる領域",
        description: "現実と幻想が交錯する場所。<br>光に導かれるように、見る者を異世界へと誘う。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/未知なる領域.png",
        url: "https://www.artstation.com/artwork/lGaVkO"
    },

    {
        id: "cg-20250325",
        title: "光の彼方へ",
        description: "希望の光に向かって歩む一人の旅人。<br>過去の試練を乗り越え、新たな未来が彼を待っている。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "2日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/光の彼方へ.png",
        url: "https://www.artstation.com/artwork/4N3wqL"
    },


    {
        id: "cg-20250323",
        title: "沈黙の都市",
        description: "霧に覆われた都市に現れた謎の球体。<br>光の柱が、その存在を静かに主張する。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/沈黙の都市.png",
        url: "https://www.artstation.com/artwork/1NW9gK"
    },

    {
        id: "cg-20250322",
        title: "静寂の侵食",
        description: "静寂に包まれた世界で、それはゆっくりと動き出す。<br>未知なる存在の胎動が、深淵から響き渡る。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/静寂の侵食.png",
        url: "https://www.artstation.com/artwork/WXzqvD"
    },
    
    {
        id: "cg-20250321",
        title: "夜の街の光",
        description: "暗闇の中で、一際目を引く光の球体。<br>それは、夜の街に隠された秘密への入り口か。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/夜の街の光.jpg",
        url: "https://www.artstation.com/artwork/bgzwvr"
    },

    {
        id: "cg-20250320",
        title: "未知なる力",
        description: "それは、人類に与えられた希望か。<br>それとも破滅の象徴か。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "4日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/未知なる力.jpg",
        url: "https://www.artstation.com/artwork/x3oPx4"
    },

    {
        id: "cg-20250316",
        title: "都市の片隅で",
        description: "高層ビルが立ち並ぶ近未来都市。屋上に佇む一人の人物。<br>静かに、しかし確実に、何かを語りかけている。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "7日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/都市の片隅で.jpg",
        url: "https://www.artstation.com/artwork/Ez49a4"
    },

    {
        id: "cg-20250308",
        title: "都市の鼓動",
        description: "高層ビルの狭間で、孤独な影が夜の輝きを見つめる。<br>都市の鼓動が響く中、どこへ向かうのか——。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "7日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/都市の鼓動.jpg",
        url: "https://fryx404.artstation.com/projects/EzO05K"
    },

    {
        id: "Astar-blooms-in-the-deep-sea",
        title: "深海の星",
        description: "深海に咲く、青い星の花。<br>それは、生命の誕生を祝う光。",
        technologies: [ "Blender",  "AfterEffects"],
        duration: "3日",
        type:  "3DCG",
        status: "完成",
        year: 2024,
        image: "images/works/深海の星.jpg",
        url: "https://www.artstation.com/artwork/mAmWxe"
    },

    {
        id: "NFT-2024",
        title: "Snowfall in Tokyo",
        description: "日本が世界に誇る大都市東京<br>数十年に一度と言われる大雪が降った一日を記録。",
        technologies: [ "Photoshop", "Lightroom"],
        duration: "60日",
        type:  "NFT",
        status: "完成",
        year: 2024,
        image: "images/works/2024-NFT.png",
        url: "https://www.behance.net/gallery/213444611/Snowfall-in-Tokyo"
    },


    {
        id: "EphemeralBubblesOfStardust",
        title: "星影の泡影",
        description: "果てしない宇宙に浮かぶ、星々の記憶。<br>触れれば消えそうな、儚い光の粒。",
        technologies: [ "Maya", "AfterEffects"],
        duration: "2日",
        type:  "3DCG",
        status: "完成",
        year: 2022,
        image: "images/works/星影の泡影.jpg",
        url: "https://www.artstation.com/artwork/qJvO8P"
    },

    {
        id: "TheVeinsOfTheNetworkC",
        title: "情報回廊C",
        description: "0と1だけでは表せないものがこの世には存在する。<br>私たちはこの回廊を通り、どこへ向かうのか。",
        technologies: [ "Cinema4D", "AfterEffects"],
        duration: "3日",
        type:  "3DCG",
        status: "完成",
        year: 2022,
        image: "images/works/情報回廊C.png",
        url: "https://www.artstation.com/artwork/0l6B84"
    },

    {
        id: "TheVeinsOfTheNetworkB",
        title: "情報回廊B",
        description: "0と1だけでは表せないものがこの世には存在する。<br>私たちはこの回廊を通り、どこへ向かうのか。",
        technologies: [ "Cinema4D", "AfterEffects"],
        duration: "3日",
        type:  "3DCG",
        status: "完成",
        year: 2022,
        image: "images/works/情報回廊B.png",
        url: "https://www.artstation.com/artwork/0l6B84"
    },

    {
        id: "TheVeinsOfTheNetworkA",
        title: "情報回廊A",
        description: "0と1だけでは表せないものがこの世には存在する。<br>私たちはこの回廊を通り、どこへ向かうのか。",
        technologies: [ "Cinema4D", "AfterEffects"],
        duration: "3日",
        type:  "3DCG",
        status: "完成",
        year: 2022,
        image: "images/works/情報回廊A.png",
        url: "https://www.artstation.com/artwork/0l6B84"
    },


];

class CreationGarden {
    constructor() {
        this.works = WORKS_DATA;
        
        // イベントハンドラーの初期化
        this.currentCloseHandler = null;
        this.currentCosmosHandler = null;
        this.currentEscHandler = null;
        this.currentModalHandler = null;
        
        this.initializeGarden();
    }

    initializeGarden() {
        // 初期化時にモーダルを確実に閉じる
        const modal = document.getElementById('work-modal');
        if (modal) {
            modal.classList.remove('active');
        }
        
        setTimeout(() => {
            this.initializeParticleSystem();
            this.setupActions();
            this.updateStats();
            this.renderWorks();
            this.updateTime();
            this.animateEntry();
        }, 100);
    }

    initializeParticleSystem() {
        const canvas = document.getElementById('existence-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
        
        // シンプルなパーティクルシステム
        const particles = [];
        const maxParticles = 30;

        for (let i = 0; i < maxParticles; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                life: Math.random(),
                decay: Math.random() * 0.01 + 0.005,
                size: Math.random() * 2 + 1
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.life -= particle.decay;

                if (particle.life <= 0 || 
                    particle.x < 0 || particle.x > canvas.width ||
                    particle.y < 0 || particle.y > canvas.height) {
                    particle.x = Math.random() * canvas.width;
                    particle.y = Math.random() * canvas.height;
                    particle.vx = (Math.random() - 0.5) * 0.5;
                    particle.vy = (Math.random() - 0.5) * 0.5;
                    particle.life = 1;
                }

                ctx.save();
                ctx.globalAlpha = particle.life * 0.3;
                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            });

            requestAnimationFrame(animate);
        };

        animate();
    }



    setupActions() {
        // スクロールトップボタン
        const scrollTopBtn = document.getElementById('scroll-to-top');
        if (scrollTopBtn) {
            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            // スクロール位置に応じて表示/非表示
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    scrollTopBtn.style.opacity = '1';
                    scrollTopBtn.style.visibility = 'visible';
                } else {
                    scrollTopBtn.style.opacity = '0';
                    scrollTopBtn.style.visibility = 'hidden';
                }
            });
        }

        // ランダム作品ボタン（右下）
        const randomBtn = document.getElementById('random-work');
        if (randomBtn) {
            randomBtn.addEventListener('click', () => {
                this.showRandomWork();
            });
        }

        // ランダム作品ボタン（ヘッダー）
        const headerRandomBtn = document.getElementById('header-random-work');
        if (headerRandomBtn) {
            headerRandomBtn.addEventListener('click', () => {
                this.showRandomWork();
            });
        }
    }



    renderWorks() {
        const universe = document.getElementById('works-universe');
        
        if (!universe) return;

        universe.innerHTML = '';

        // 年度順（新しい順）でソート
        const sortedWorks = [...this.works].sort((a, b) => b.year - a.year);

        sortedWorks.forEach((work, index) => {
            const workElement = this.createWorkElement(work, index);
            universe.appendChild(workElement);
        });

        // アニメーション
        this.animateWorks();
    }

    createWorkElement(work, index) {
        const element = document.createElement('div');
        element.className = 'work-constellation';
        element.setAttribute('data-work-id', work.id);
        element.style.setProperty('--i', index);

        element.innerHTML = `
            ${work.image ? `
                <div class="work-image">
                    <img src="${work.image}" alt="${work.title}" loading="lazy">
                    <div class="image-overlay">
                        <span class="view-details">詳細を見る</span>
                    </div>
                </div>
            ` : ''}
            
            <div class="work-content">
                <div class="work-header">
                    <h3 class="work-title">${work.title}</h3>
                    <div class="work-type">${work.type}</div>
                </div>
                
                <p class="work-description">${work.description}</p>
                
                <div class="work-meta">
                    <span class="work-duration">${work.duration}</span>
                    <span class="work-status">${work.status}</span>
                </div>
            </div>
        `;

        element.addEventListener('click', () => {
            this.openWorkModal(work);
        });

        return element;
    }

    animateWorks() {
        const works = document.querySelectorAll('.work-constellation');
        works.forEach((work, index) => {
            work.style.opacity = '0';
            work.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                work.style.transition = 'all 0.6s ease';
                work.style.opacity = '1';
                work.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    openWorkModal(work) {
        const modal = document.getElementById('work-modal');
        const modalEssence = modal.querySelector('.modal-essence');
        
        if (!modal || !modalEssence) return;

        modalEssence.innerHTML = `
            <div class="modal-work-content">
                ${work.image ? `
                    <div class="modal-image">
                        <img src="${work.image}" alt="${work.title}">
                    </div>
                ` : ''}
                
                <header class="modal-header">
                    <h2 class="modal-work-title">${work.title}</h2>
                </header>
                
                <div class="modal-description">
                    <p>${work.description}</p>
                </div>
                
                <div class="modal-work-meta">
                    <div class="modal-work-meta-top">
                        <span class="modal-type">${work.type}</span>
                        <span class="modal-duration">制作日数：${work.duration}</span>
                        <span class="modal-status">ステータス：${work.status}</span>
                    </div>
                    <div class="modal-work-meta-bottom">
                        <span class="modal-technologies">ツール：${work.technologies.join(', ')}</span>
                    </div>
                </div>
                
                ${work.features && work.features.length > 0 && work.features[0] !== "" ? `
                    <div class="modal-section">
                        <h3>実現された機能</h3>
                        <ul class="modal-features">
                            ${work.features.map(feature => 
                                `<li>${feature}</li>`
                            ).join('')}
                        </ul>
                    </div>
                ` : ''}
                
                ${work.url ? `
                    <div class="modal-section">
                        <a href="${work.url}" target="_blank" rel="noopener noreferrer" class="modal-external-link">
                            <div class="external-link-content">
                                <span class="link-icon">↗</span>
                                <span class="link-text">作品を詳しく見る</span>
                            </div>
                        </a>
                    </div>
                ` : ''}
            </div>
        `;

        modal.classList.add('active');
        
        // モーダル閉じる処理
        this.setupModalClose(modal);
    }

    setupModalClose(modal) {
        const closeBtn = modal.querySelector('.modal-dismiss');
        const modalCosmos = modal.querySelector('.modal-cosmos');
        const modalVessel = modal.querySelector('.modal-vessel');
        
        const closeModal = () => {
            modal.classList.remove('active');
            // 既存のイベントリスナーをクリーンアップ
            document.removeEventListener('keydown', this.currentEscHandler);
            if (this.currentModalHandler) {
                modal.removeEventListener('click', this.currentModalHandler);
            }
        };

        // 既存のイベントリスナーをクリーンアップ
        if (this.currentEscHandler) {
            document.removeEventListener('keydown', this.currentEscHandler);
        }
        if (this.currentModalHandler) {
            modal.removeEventListener('click', this.currentModalHandler);
        }

        // バツボタンでクローズ
        if (closeBtn) {
            closeBtn.removeEventListener('click', this.currentCloseHandler);
            this.currentCloseHandler = closeModal;
            closeBtn.addEventListener('click', this.currentCloseHandler);
        }

        // モーダル外側クリックでクローズ（改善版）
        this.currentModalHandler = (e) => {
            // モーダルの背景部分（modal自体）をクリックした場合のみ閉じる
            // modal-vesselやその子要素をクリックした場合は閉じない
            if (e.target === modal) {
                closeModal();
            }
        };
        modal.addEventListener('click', this.currentModalHandler);

        // ESCキーで閉じる
        this.currentEscHandler = (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };
        document.addEventListener('keydown', this.currentEscHandler);
    }

    showRandomWork() {
        if (this.works.length === 0) return;
        
        const randomWork = this.works[
            Math.floor(Math.random() * this.works.length)
        ];
        
        this.openWorkModal(randomWork);
    }

    updateStats() {
        const totalWorks = document.getElementById('total-works');

        if (totalWorks) {
            totalWorks.textContent = this.works.length;
        }
    }

    updateTime() {
        const timeElement = document.getElementById('current-time');
        if (!timeElement) return;

        const updateClock = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('ja-JP', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            timeElement.textContent = timeString;
        };

        updateClock();
        setInterval(updateClock, 1000);
    }

    animateEntry() {
        // ヘッダー部分のアニメーションは削除
        // 作品カードのアニメーションのみ実行
    }
}

// ページ読み込み完了時に初期化
document.addEventListener('DOMContentLoaded', () => {
    new CreationGarden();
});

 