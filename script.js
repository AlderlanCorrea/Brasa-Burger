const WHATSAPP_NUMBER = '5511999999999';
    const message = 'Olá! Vim pelo site da Brasa Burger e gostaria de fazer um pedido. 🍔';
    document.querySelectorAll('[data-whatsapp]').forEach((link) => {
        link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        link.target = '_blank';
        link.rel = 'noopener';
    });
    document.querySelector('#year').textContent = new Date().getFullYear();
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));