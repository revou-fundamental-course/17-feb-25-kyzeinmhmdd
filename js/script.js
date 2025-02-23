let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");

    // Sembunyikan semua slide terlebih dahulu
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    // Tambahkan indeks slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Tampilkan slide yang sesuai
    slides[slideIndex - 1].style.display = "block";

    // Atur waktu untuk berpindah slide setiap 3 detik
    setTimeout(showSlides, 3000);
}

// Jalankan fungsi saat halaman dimuat
document.addEventListener("DOMContentLoaded", showSlides);