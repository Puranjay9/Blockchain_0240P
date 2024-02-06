//sliding animation
const wrap = document.querySelector(".sliderwrap")
const menuitem = document.querySelectorAll(".menuitem")



menuitem.forEach((item ,index) => {
    item.addEventListener("click",()=>{
       wrap.style.transform =`translateX(${-100 * index}vw)`;
       choosenProduct = products[index];

    })
});

document.addEventListener("DOMContentLoaded", function () {
  
  const jsonData = [
      { "name": "GIGABYTE Radeon RX 7700 XT ",
       "link": "amd.html" 
      },
      { "name": "PowerColor Fighter AMD Radeon RX 6600", 
      "link": "amd.html" 
      },
      { "name": "NVIDIA GeForce RTX 4070",
       "link": "nvidia.html" 
      },
      { "name": "ASUS ROG Strix GeForce RTX 4090",
       "link": "nvidia.html" 
      },
  ];

// search bar

  const searchInput = document.getElementById("searchInput");
  const searchResultsContainer = document.getElementById("searchResults");

  
  function searchProducts() {
      const searchTerm = searchInput.value.toLowerCase();

      
      searchResultsContainer.innerHTML = '';

     
      const filteredProducts = jsonData.filter(product => product.name.toLowerCase().includes(searchTerm));

      filteredProducts.forEach(product => {
          const productElement = document.createElement("div");
          productElement.classList.add("product");
          productElement.innerHTML = `<a href="${product.link}" target="_blank">${product.name}</a>`;
          productElement.addEventListener("click", () => {
              searchInput.value = product.name;
              searchResultsContainer.style.display = 'none';
              productElement.style.textDecoration ='none';
          });
          searchResultsContainer.appendChild(productElement);
      });
      searchResultsContainer.style.display = filteredProducts.length > 0 ? 'block' : 'none';
  }
  window.addEventListener("click", function (event) {
      if (!event.target.matches('#searchInput')) {
          searchResultsContainer.style.display = 'none';
      }
  });
  searchInput.addEventListener("input", searchProducts);
});

// background animation 
const numStars = 300;

function generateStars() {
     const container = document.getElementById("slider");

     for (let i = 0; i < numStars; i++) {
                const star = document.createElement("div");
                star.classList.add("star");
                star.style.left = `${Math.random() * 100}vw`;
                star.style.bottom = `${Math.random() * 60}vh`;
                container.appendChild(star);
            }
        }
        
generateStars();

const walletbutton = document.querySelector(".walletbtn");
const close= document.querySelector(".closewallet");
const wallet = document.querySelector(".walletcnt");

walletbutton.addEventListener("click", ()=>{
wallet.style.display="flex";
})

close.addEventListener("click",()=>{
wallet.style.display="none";
})
