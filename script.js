document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // 1. INSIRA AQUI O SEU NÚMERO DO WHATSAPP (Com DDD e código do país 55)
    const numeroWhatsApp = "5521972977789"; 

    // 2. Coleta os valores digitados nos campos
    const nome = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('message').value.trim();

    // 3. Monta a mensagem formatada para o WhatsApp
    const textoMensagem = `*Novo Contato via Site - Term Security*

*Nome:* ${nome}
*E-mail:* ${email}

*Mensagem:*
${mensagem}`;

    // 4. Codifica os caracteres especiais para URL
    const mensagemFormatada = encodeURIComponent(textoMensagem);

    // 5. Cria o link final do WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemFormatada}`;

    // 6. Abre o WhatsApp em uma nova aba
    window.open(urlWhatsApp, '_blank');
});

// Function para simular a digitação e execução do Terminal
function runTerminalSimulation() {
    const commandElement = document.getElementById('typedCommand');
    const outputElement = document.getElementById('terminalOutput');
    
    if (!commandElement || !outputElement) return;

    const fullCommand = "./check_security.sh --target company";
    let charIndex = 0;

    // Respostas que vão aparecer após digitar o comando
    const logs = [
        { text: "[INFO] Iniciando varredura de segurança...", class: "response", delay: 600 },
        { text: "[OK] Firewalls & Criptografia: ATIVADOS", class: "response", delay: 1400 },
        { text: "[OK] Análise de Vulnerabilidades: NENHUMA BRECHA ENCONTRADA", class: "response", delay: 2200 },
        { text: "[SUCCESS] Sistema 100% Protegido pela Term Security.", class: "response success", delay: 3000 }
    ];

    // Simula a digitação letra por letra
    function typeChar() {
        if (charIndex < fullCommand.length) {
            commandElement.textContent += fullCommand.charAt(charIndex);
            charIndex++;
            setTimeout(typeChar, 60); // Velocidade de digitação por letra (ms)
        } else {
            // Quando terminar de digitar, começa a exibir as respostas em sequência
            triggerLogs();
        }
    }

    // Exibe cada linha do log após um tempo estipulado
    function triggerLogs() {
        logs.forEach(log => {
            setTimeout(() => {
                const p = document.createElement('p');
                p.className = log.class;
                p.textContent = log.text;
                outputElement.appendChild(p);
            }, log.delay);
        });
    }

    // Inicia o efeito após 500ms que a página carrega
    setTimeout(typeChar, 500);
}

// Inicia a animação quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', runTerminalSimulation);