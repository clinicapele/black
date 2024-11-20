// Garante que o modal está oculto ao carregar a página
window.onload = function () {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Oculta o modal
};

// Adiciona evento de clique às imagens
document.querySelectorAll(".image img").forEach(img => {
    img.addEventListener("click", function () {
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("modalImage");
        const captionText = document.getElementById("caption");
        
        modal.style.display = "flex"; // Mostra o modal
        modalImg.src = this.src; // Define a imagem no modal
        captionText.textContent = this.alt; // Define o texto alternativo como legenda
    });
});

// Fecha o modal ao clicar no botão de fechar
document.querySelector(".close").onclick = function () {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Oculta o modal
};

// Fecha o modal ao clicar fora da imagem
document.getElementById("imageModal").onclick = function (event) {
    if (event.target === this) {
        this.style.display = "none"; // Oculta o modal
    }
};
