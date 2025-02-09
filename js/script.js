// Selectează toate imaginile și elementele modalului
const images = document.querySelectorAll(".galerie img, .noutati img");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentImageIndex = 0;

// Asigură-te că elementele există înainte de a adăuga evenimente
if (images.length && imageModal && modalImage && prevBtn && nextBtn) {
    // Deschide imaginea în modal
    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            imageModal.style.display = "flex";
            modalImage.src = img.src;
            currentImageIndex = index;
        });
    });

    // Închide modalul dacă faci clic în afara imaginii
    imageModal.addEventListener("click", (e) => {
        if (e.target === imageModal || e.target === modalImage) {
            imageModal.style.display = "none";
        }
    });

    // Navighează la imaginea anterioară
    prevBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Previne închiderea modalului
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        modalImage.src = images[currentImageIndex].src;
    });

    // Navighează la imaginea următoare
    nextBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Previne închiderea modalului
        currentImageIndex = (currentImageIndex + 1) % images.length;
        modalImage.src = images[currentImageIndex].src;
    });

    // Închide modalul la apăsarea tastei Esc
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && imageModal.style.display === "flex") {
            imageModal.style.display = "none";
        }
    });
} else {
    console.error("Elemente lipsă: verifică structura HTML.");
}






















document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('ani-container').textContent = currentYear;
});



// Adaugă animație la derulare
document.addEventListener('DOMContentLoaded', () => {
    const sectiuni = document.querySelectorAll('.sectiune');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'scale(1)';
                entry.target.style.opacity = '1';
                entry.target.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
            }
        });
    }, { threshold: 0.1 });

    sectiuni.forEach(sectiune => {
        sectiune.style.transform = 'scale(0.9)';
        sectiune.style.opacity = '0';
        observer.observe(sectiune);
    });
});







// cum bara de navigare se schimba la derulare
window.addEventListener('scroll', function () {
    var bara2 = document.getElementById('bara2');
    if (window.scrollY > 100) {
        bara2.classList.add('scrolled');
    } else {
        bara2.classList.remove('scrolled');
    }
});










// Parola corectă
const correctPassword = "robovis";

// Elementele HTML
const modal = document.getElementById('password-modal');
const blurEffect = document.getElementById('blur-effect');
const content = document.querySelector('.content');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitButton');

// Afișează modalul și blur-ul la încărcarea paginii
window.onload = () => {
    modal.style.visibility = 'visible';
    blurEffect.style.visibility = 'visible';
    document.body.classList.add('modal-active'); // Adaugă clasa pentru overflow hidden
};

// Verifică parola introdusă
function checkPassword() {
    const password = passwordInput.value;

    if (password === correctPassword) {
        modal.style.visibility = 'hidden';
        blurEffect.style.visibility = 'hidden';
        content.style.display = 'block';  // Afișează conținutul
        document.body.classList.remove('modal-active'); // Elimină clasa pentru overflow hidden
    } else {
        alert("Parola incorectă! Încearcă din nou.");
    }
}

// Eveniment pentru butonul de trimitere
submitButton.addEventListener('click', (event) => {
    event.preventDefault();  // Previne comportamentul implicit al formularului
    checkPassword();
});

// Eveniment pentru apăsarea tastei Enter
passwordInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();  // Previne comportamentul implicit al formularului
        checkPassword();
    }
});

















