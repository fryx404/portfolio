/**
 * 存在の詳細 - About Page JavaScript
 * テーマ: 個人の存在と接触の可能性
 */

class AboutExistence {
    constructor() {
        try {
            this.initializeAbout();
            this.setupContactForm();
            this.setupTimelineAnimations();
        } catch (error) {
            console.warn('AboutExistence initialization error:', error);
            // エラーが発生してもページは表示される
        }
    }

    initializeAbout() {
        // ページ読み込み時のアニメーション
        this.animatePageEntry();
        
        // スクロールベースのアニメーション
        this.setupScrollAnimations();
        
        // 浮遊するアクションボタンの設定
        this.setupFloatingActions();
    }

    animatePageEntry() {
        const elements = [
            '.page-title',
            '.page-philosophy',
            '.profile-avatar',
            '.profile-info',
            '.detail-group',
            '.contact-method',
            '.contact-form-container'
        ];

        elements.forEach((selector, index) => {
            const element = document.querySelector(selector);
            if (element) {
                // CSSで既に !important が設定されているため、JavaScriptでの設定は削除
                // element.style.opacity = '0';
                // element.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    element.style.transition = 'all 0.8s ease';
                    // 要素は既にCSSで表示されている
                }, index * 200);
            }
        });
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // 観察対象の要素を追加
        document.querySelectorAll('.detail-group, .timeline-item, .contact-method').forEach(el => {
            observer.observe(el);
        });
    }

    setupContactForm() {
        const form = document.getElementById('contact-form');
        const statusDiv = document.getElementById('form-status');

        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            // バリデーション
            if (!this.validateForm(data)) {
                this.showFormStatus('すべての必須項目を入力してください。', 'error');
                return;
            }

            // 送信処理のシミュレーション
            this.showFormStatus('意識を送信中...', 'sending');
            
            try {
                // 実際のフォーム送信処理をここに実装
                await this.simulateFormSubmission(data);
                
                this.showFormStatus('意識が正常に送信されました。接触をお待ちください。', 'success');
                form.reset();
                
                // フォーム送信後のアニメーション
                this.animateFormSuccess();
                
            } catch (error) {
                console.error('Form submission error:', error);
                this.showFormStatus('送信中にエラーが発生しました。再度お試しください。', 'error');
            }
        });

        // リアルタイムバリデーション
        form.querySelectorAll('.form-input').forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
        });
    }

    validateForm(data) {
        return data.name && 
               data.email && 
               data.message && 
               this.isValidEmail(data.email);
    }

    validateField(input) {
        const value = input.value.trim();
        const group = input.closest('.form-group');
        
        // 既存のエラーメッセージを削除
        const existingError = group.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }

        let isValid = true;
        let errorMessage = '';

        switch (input.type) {
            case 'email':
                if (value && !this.isValidEmail(value)) {
                    isValid = false;
                    errorMessage = '有効なメールアドレスを入力してください';
                }
                break;
            case 'text':
                if (input.required && !value) {
                    isValid = false;
                    errorMessage = 'この項目は必須です';
                }
                break;
        }

        if (input.tagName === 'TEXTAREA' && input.required && !value) {
            isValid = false;
            errorMessage = 'メッセージを入力してください';
        }

        if (!isValid) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'field-error';
            errorDiv.textContent = errorMessage;
            errorDiv.style.cssText = `
                color: rgba(255, 0, 0, 0.8);
                font-size: 0.8rem;
                margin-top: 5px;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            group.appendChild(errorDiv);
            
            setTimeout(() => errorDiv.style.opacity = '1', 10);
        }

        return isValid;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    async simulateFormSubmission(data) {
        // 実際の送信処理のシミュレーション
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // ここで実際のAPI呼び出しを行う
                
                // 成功率90%のシミュレーション
                if (Math.random() > 0.1) {
                    resolve();
                } else {
                    reject(new Error('Network error'));
                }
            }, 2000);
        });
    }

    showFormStatus(message, type) {
        const statusDiv = document.getElementById('form-status');
        if (!statusDiv) return;

        statusDiv.textContent = message;
        statusDiv.className = `form-status ${type}`;
        
        if (type === 'sending') {
            statusDiv.style.background = 'rgba(255, 255, 0, 0.1)';
            statusDiv.style.borderColor = 'rgba(255, 255, 0, 0.3)';
            statusDiv.style.color = 'rgba(255, 255, 0, 0.8)';
        }
    }

    animateFormSuccess() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        // 成功時のパルスエフェクト
        form.style.transform = 'scale(1.02)';
        form.style.transition = 'transform 0.3s ease';
        
        setTimeout(() => {
            form.style.transform = 'scale(1)';
        }, 300);
    }



    setupTimelineAnimations() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }
            });
        }, { threshold: 0.5 });
        
        timelineItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-30px)';
            item.style.transition = `all 0.6s ease ${index * 0.2}s`;
            observer.observe(item);
        });
    }

    setupFloatingActions() {
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
    }
}

// ページ読み込み完了時に初期化
document.addEventListener('DOMContentLoaded', () => {
    new AboutExistence();
});

// CSS追加スタイル
const additionalStyles = `
    .animate-in {
        animation: slideInUp 0.8s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .field-error {
        animation: errorShake 0.5s ease;
    }
    
    @keyframes errorShake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    

`;

// スタイルを動的に追加
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet); 