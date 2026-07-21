document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // 1. INSIRA AQUI O SEU NÚMERO DO WHATSAPP (Com DDD e código do país 55)
    const numeroWhatsApp = "5521999999999"; 

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