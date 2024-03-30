let searchform= document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchform.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
  
    function filterIcons(searchQuery) {
      const iframes = document.querySelectorAll('iframe');
  
      iframes.forEach(function (iframe) {
        iframe.contentDocument.querySelectorAll('.cards').forEach(function (card) {
          const name = card.querySelector("h2").textContent.toLowerCase();
  
          if (name.includes(searchQuery.toLowerCase())) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        });
  
        const nothingfound = iframe.contentDocument.getElementById("nothing-alert");
        const cards = iframe.contentDocument.querySelectorAll('.cards');
        let number = 0;
  
        cards.forEach(function (card) {
          if (card.style.display !== "none") {
            number++;
          }
        });
  
        if (number === 0) {
          nothingfound.style.display = "block";
        } else {
          nothingfound.style.display = "none";
        }
      });
    }
  
    searchInput.addEventListener("input", function () {
      const searchQuery = searchInput.value.trim();
      filterIcons(searchQuery);
    });
  });
  

