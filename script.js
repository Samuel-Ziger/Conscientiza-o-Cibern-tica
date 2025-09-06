// Sistema de navegação de slides
let currentSlide = 1;
const totalSlides = 10;
const slideOrder = [1, 2, 3, 3.5, 4, 5, 6, 7, 8, 9, 10];

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    showSlide(1);
    animateStats();
    setupKeyboardNavigation();
});

// Navegação entre slides
function changeSlide(direction) {
    const currentIndex = slideOrder.indexOf(currentSlide);
    const newIndex = currentIndex + direction;
    
    if (newIndex >= 0 && newIndex < slideOrder.length) {
        showSlide(slideOrder[newIndex]);
    }
}

function goToSlide(slideNumber) {
    if (slideOrder.includes(slideNumber)) {
        showSlide(slideNumber);
    }
}

function showSlide(slideNumber) {
    // Esconder slide atual
    const currentSlideElement = document.querySelector('.slide.active');
    if (currentSlideElement) {
        currentSlideElement.classList.remove('active');
    }
    
    // Mostrar novo slide
    const slideId = slideNumber === 3.5 ? 'slide3-5' : `slide${slideNumber}`;
    const newSlideElement = document.getElementById(slideId);
    if (newSlideElement) {
        newSlideElement.classList.add('active');
        currentSlide = slideNumber;
        
        // Atualizar indicadores
        updateIndicators();
        
        // Atualizar botões de navegação
        updateNavigationButtons();
        
        // Animar elementos se necessário
        if (slideNumber === 1) {
            animateStats();
        }
    }
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    const currentIndex = slideOrder.indexOf(currentSlide);
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const currentIndex = slideOrder.indexOf(currentSlide);
    
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === slideOrder.length - 1;
}

// Navegação por teclado
function setupKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            changeSlide(-1);
        } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            changeSlide(1);
        } else if (e.key >= '1' && e.key <= '9') {
            goToSlide(parseInt(e.key));
        } else if (e.key === '0') {
            goToSlide(10);
        }
    });
}

// Animação das estatísticas
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        animateNumber(stat, 0, target, 2000);
    });
}

function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

// Demonstração de e-mails
function showEmailDemo() {
    const modal = document.getElementById('emailModal');
    modal.style.display = 'block';
}

function closeEmailDemo() {
    const modal = document.getElementById('emailModal');
    modal.style.display = 'none';
}

// Fechar modal clicando fora
window.onclick = function(event) {
    const modal = document.getElementById('emailModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Teste interativo de phishing
function selectEmail(emailNumber) {
    const emailOptions = document.querySelectorAll('.email-option');
    const testResult = document.getElementById('testResult');
    const resultTitle = document.getElementById('resultTitle');
    const resultExplanation = document.getElementById('resultExplanation');
    
    // Remover seleções anteriores
    emailOptions.forEach(option => {
        option.classList.remove('selected', 'wrong');
    });
    
    // Marcar seleção
    const selectedOption = emailOptions[emailNumber - 1];
    selectedOption.classList.add('selected');
    
    // Verificar resposta (e-mail 2 é phishing)
    if (emailNumber === 2) {
        // Resposta correta
        selectedOption.classList.remove('selected');
        selectedOption.classList.add('correct');
        resultTitle.textContent = '✅ Correto!';
        resultTitle.style.color = '#27ae60';
        resultExplanation.innerHTML = `
            <strong>Este é um e-mail de phishing!</strong><br><br>
            <strong>Sinais de alerta identificados:</strong><br>
            • Endereço suspeito: "banco-br.com" (não é o domínio oficial do BB)<br>
            • Tom de urgência excessivo: "URGENTE" e "BLOQUEADA"<br>
            • Link encurtado suspeito: "bit.ly/bb-atualizar"<br>
            • Erros de formatação e português<br>
            • Solicitação de dados confidenciais por e-mail<br><br>
            <strong>Lembre-se:</strong> Bancos nunca solicitam dados pessoais por e-mail!
        `;
    } else {
        // Resposta incorreta
        selectedOption.classList.remove('selected');
        selectedOption.classList.add('wrong');
        resultTitle.textContent = '❌ Incorreto!';
        resultTitle.style.color = '#e74c3c';
        resultExplanation.innerHTML = `
            <strong>Este é um e-mail legítimo do Banco do Brasil!</strong><br><br>
            <strong>Características de um e-mail verdadeiro:</strong><br>
            • Domínio oficial: "bb.com.br"<br>
            • Tom profissional e educado<br>
            • Link direto para o site oficial<br>
            • Não solicita dados pessoais<br>
            • Orientação para acessar o site oficial<br><br>
            <strong>Dica:</strong> Sempre verifique o domínio do remetente e desconfie de urgências excessivas!
        `;
    }
    
    testResult.style.display = 'block';
    testResult.scrollIntoView({ behavior: 'smooth' });
}

function resetTest() {
    const emailOptions = document.querySelectorAll('.email-option');
    const testResult = document.getElementById('testResult');
    
    emailOptions.forEach(option => {
        option.classList.remove('selected', 'wrong', 'correct');
    });
    
    testResult.style.display = 'none';
}

// Calculadora de impacto financeiro (interativa)
function calculateImpact() {
    const companySize = document.getElementById('companySize').value;
    const hasTraining = document.getElementById('hasTraining').checked;
    
    let baseCost = 0;
    let reduction = 0;
    
    switch(companySize) {
        case 'small':
            baseCost = 500000;
            break;
        case 'medium':
            baseCost = 1480000;
            break;
        case 'large':
            baseCost = 5000000;
            break;
    }
    
    if (hasTraining) {
        reduction = 0.7; // 70% de redução com treinamento
    }
    
    const finalCost = baseCost * (1 - reduction);
    const savings = baseCost - finalCost;
    
    document.getElementById('impactResult').innerHTML = `
        <div class="cost-breakdown">
            <div class="cost-item">
                <span class="cost-label">Custo sem treinamento:</span>
                <span class="cost-value">US$ ${baseCost.toLocaleString()}</span>
            </div>
            <div class="cost-item">
                <span class="cost-label">Custo com treinamento:</span>
                <span class="cost-value">US$ ${finalCost.toLocaleString()}</span>
            </div>
            <div class="cost-item savings">
                <span class="cost-label">Economia:</span>
                <span class="cost-value">US$ ${savings.toLocaleString()}</span>
            </div>
        </div>
    `;
}

// Simulador de ataque de phishing
function simulatePhishingAttack() {
    const steps = [
        "1. Atacante cria e-mail falso do banco",
        "2. E-mail é enviado para 10.000 vítimas",
        "3. 5% das pessoas clicam no link (500 pessoas)",
        "4. 2% inserem dados no site falso (100 pessoas)",
        "5. Atacante acessa 100 contas bancárias",
        "6. Roubo médio de R$ 2.000 por conta",
        "7. Prejuízo total: R$ 200.000"
    ];
    
    const simulationDiv = document.getElementById('phishingSimulation');
    simulationDiv.innerHTML = '<h4>Simulação de Ataque de Phishing:</h4>';
    
    let stepIndex = 0;
    const interval = setInterval(() => {
        if (stepIndex < steps.length) {
            const stepDiv = document.createElement('div');
            stepDiv.className = 'simulation-step';
            stepDiv.textContent = steps[stepIndex];
            simulationDiv.appendChild(stepDiv);
            stepIndex++;
        } else {
            clearInterval(interval);
        }
    }, 1000);
}

// Timer para apresentação
function startPresentationTimer() {
    const startTime = new Date().getTime();
    const timerElement = document.getElementById('presentationTimer');
    
    setInterval(() => {
        const currentTime = new Date().getTime();
        const elapsed = Math.floor((currentTime - startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        
        if (timerElement) {
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }, 1000);
}

// Efeitos visuais
function addVisualEffects() {
    // Efeito de hover nos cards
    const cards = document.querySelectorAll('.stat-card, .technique-card, .policy-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Inicializar efeitos visuais
document.addEventListener('DOMContentLoaded', function() {
    addVisualEffects();
    startPresentationTimer();
});

// Função para exportar apresentação como PDF (futura implementação)
function exportToPDF() {
    // Implementação futura para exportar slides como PDF
    alert('Funcionalidade de exportação para PDF será implementada em breve!');
}

// Função para modo de apresentação (tela cheia)
function enterPresentationMode() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
    }
}

// Adicionar controles de teclado para funcionalidades especiais
document.addEventListener('keydown', function(e) {
    // F11 para modo de apresentação
    if (e.key === 'F11') {
        e.preventDefault();
        enterPresentationMode();
    }
    
    // ESC para sair do modo de apresentação
    if (e.key === 'Escape') {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    }
    
    // P para pausar/retomar animações
    if (e.key === 'p' || e.key === 'P') {
        const slides = document.querySelectorAll('.slide');
        slides.forEach(slide => {
            slide.style.animationPlayState = slide.style.animationPlayState === 'paused' ? 'running' : 'paused';
        });
    }
});

