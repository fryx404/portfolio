/**
 * 創造の軌跡 - Works Page JavaScript
 * テーマ: 創造された作品の庭園
 */

// 作品データ - 存在の証明
const WORKS_DATA = [
    {
        id: "cg-202504",
        title: "4月に作成したものまとめ 2025",
        description: "2025年4月に作成した作品をまとめました。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "30日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/2504.png",
        url: "https://www.behance.net/gallery/224839091/Independent-works-April-2025"
    },

    {
        id: "cg-20250327",
        title: "コールド・ユニバース「Cold Universe」",
        description: "現実と幻想が交錯する場所。<br>光に導かれるように、見る者を異世界へと誘う。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250327_CUBE_01.png",
        url: "https://www.artstation.com/artwork/3EBEgo"
    },

    {
        id: "cg-20250326",
        title: "未知なる領域 「Unknown Realm」",
        description: "現実と幻想が交錯する場所。<br>光に導かれるように、見る者を異世界へと誘う。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250326_CUBE.png",
        url: "https://www.artstation.com/artwork/lGaVkO"
    },

    {
        id: "cg-20250325",
        title: "光の彼方へ 「Beyond the Light」",
        description: "希望の光に向かって歩む一人の旅人。<br>過去の試練を乗り越え、新たな未来が彼を待っている。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "2日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250325_Door.png",
        url: "https://www.artstation.com/artwork/4N3wqL"
    },


    {
        id: "cg-20250323",
        title: "沈黙の都市 「Echoes Unheard」",
        description: "霧に覆われた都市に現れた謎の球体。<br>光の柱が、その存在を静かに主張する。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250323_Concept.png",
        url: "https://www.artstation.com/artwork/1NW9gK"
    },

    {
        id: "cg-20250322",
        title: "静寂の侵食 「The Stillness Consumes」",
        description: "静寂に包まれた世界で、それはゆっくりと動き出す。<br>未知なる存在の胎動が、深淵から響き渡る。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250322_concept02.png",
        url: "https://www.artstation.com/artwork/WXzqvD"
    },
    
    {
        id: "cg-20250321",
        title: "夜の街の光「Nocturnal city's radiant gleam」",
        description: "暗闇の中で、一際目を引く光の球体。<br>それは、夜の街に隠された秘密への入り口か。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "1日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250321_scifi_v2_edit.jpg",
        url: "https://www.artstation.com/artwork/bgzwvr"
    },

    {
        id: "cg-20250320",
        title: "未知なる力「An unknown force, a whisper in the void」",
        description: "それは、人類に与えられた希望か。<br>それとも破滅の象徴か。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "4日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250320_edit.jpg",
        url: "https://www.artstation.com/artwork/x3oPx4"
    },

    {
        id: "cg-20250316",
        title: "都市の片隅で「Lost in the City's Embrace」",
        description: "高層ビルが立ち並ぶ近未来都市。<br>屋上に佇む一人の人物。静かに、しかし確実に、何かを語りかけている。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "7日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250316_edit.jpg",
        url: "https://www.artstation.com/artwork/Ez49a4"
    },

    {
        id: "cg-20250308",
        title: "都市の鼓動「Cybernetic City Resonance」",
        description: "高層ビルの狭間で、孤独な影が夜の輝きを見つめる。<br>都市の鼓動が響く中、どこへ向かうのか——。",
        technologies: ["Blender", "After Effects", "Photoshop"],
        duration: "7日",
        type: "3DCG",
        status: "完成",
        year: 2025,
        image: "images/works/250308_city02_edit.jpg",
        url: "https://fryx404.artstation.com/projects/EzO05K"
    },

    {
        id: "cg-2024",
        title: "過去に作成したものの断片的な記録",
        description: "2024年までに作成した作品をまとめました。",
        technologies: [ "Maya",  "Cinema4D",  "Blender", "After Effects", "Photoshop"],
        duration: "Unknown",
        type: "3DCG",
        status: "完成",
        year: 2024,
        image: "images/works/Abstract_01.png",
        url: "https://www.behance.net/gallery/173603911/Independent-works-Archives-20241231"
    },

    {
        id: "NFT-2024",
        title: "Snowfall in Tokyo",
        description: "写真作品のNFTを発表しました",
        technologies: [ "Photoshop", "Lightroom"],
        duration: "60日",
        type:  "NFT",
        status: "完成",
        year: 2024,
        image: "images/works/2024-NFT.png",
        url: "https://www.behance.net/gallery/213444611/Snowfall-in-Tokyo"
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

        // ランダム作品ボタン
        const randomBtn = document.getElementById('random-work');
        if (randomBtn) {
            randomBtn.addEventListener('click', () => {
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
                
                <div class="work-technologies">
                    ${work.technologies.map(tech => 
                        `<span class="tech-essence">${tech}</span>`
                    ).join('')}
                </div>
                
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
                    <div class="modal-work-meta">
                        <span class="modal-type">${work.type}</span>
                        <span class="modal-duration">制作日数：${work.duration}</span>
                        <span class="modal-status">ステータス：${work.status}</span>
                    </div>
                </header>
                
                <div class="modal-description">
                    <p>${work.description}</p>
                </div>
                
                <div class="modal-section">
                    <h3>ツール</h3>
                    <div class="modal-technologies">
                        ${work.technologies.map(tech => 
                            `<span class="modal-tech">${tech}</span>`
                        ).join('')}
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
        const totalTechnologies = document.getElementById('total-technologies');
        const totalDuration = document.getElementById('total-duration');

        if (totalWorks) {
            totalWorks.textContent = this.works.length;
        }

        if (totalTechnologies) {
            const uniqueTechs = new Set(this.works.flatMap(work => work.technologies));
            totalTechnologies.textContent = uniqueTechs.size;
        }

        if (totalDuration) {
            const totalDays = this.works.reduce((total, work) => {
                const match = work.duration.match(/(\d+)/);
                return total + (match ? parseInt(match[1]) : 0);
            }, 0);
            totalDuration.textContent = `${totalDays}日`;
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
        const elements = [
            '.page-title',
            '.page-philosophy',
            '.creation-stats'
        ];

        elements.forEach((selector, index) => {
            const element = document.querySelector(selector);
            if (element) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    element.style.transition = 'all 0.8s ease';
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }
}

// ページ読み込み完了時に初期化
document.addEventListener('DOMContentLoaded', () => {
    new CreationGarden();
});

 