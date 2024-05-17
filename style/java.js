// teste pour navbar
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', function () {
            links.forEach(otherLink => otherLink.classList.remove('active'));
            this.classList.add('active');
        });
    });
});


emailjs.init({
    publicKey: '5OMXk881klwBP7SpX',
});

window.onload = function () {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_62ai9w8', 'template_f0yjzdf', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}