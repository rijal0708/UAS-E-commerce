document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".btnDetail").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.currentTarget.getAttribute("data-id"));

      const items = Alpine.raw(
        Alpine.store?.produkStore ||
          Alpine.$data(document.querySelector("[x-data=products]"))
      ).items;
      const produk = items.find((item) => item.id === id);

      if (produk) {
        document.querySelector(".modalTitle").innerText = produk.nama;
        document.querySelector(
          ".modalImage"
        ).innerHTML = `<img src="${produk.img}" class="img-fluid" />`;
        document.querySelector(".modalDeskripsi").innerText =
          produk.deskripsi || "Tidak ada deskripsi.";
        document.querySelector(".modalHarga").innerText = new Intl.NumberFormat(
          "id-ID",
          {
            style: "currency",
            currency: "IDR",
          }
        ).format(produk.price);
        document.querySelector(".btnBeli").href = produk.link || "#";

        const btnAdd = document.querySelector(".btnAddCart");
        btnAdd.onclick = (e) => {
          e.preventDefault();
          const products = Alpine.$data(
            document.querySelector("[x-data=products]")
          );
          products.addToCart(produk);
        };

        feather.replace(); // pastikan ikon Feather diperbarui (jika digunakan dalam modal)
      }
    });
  });
});

//togle class

document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.querySelector(".search-form");
  const searchBox = document.querySelector("#search-box");
  const sb = document.querySelector("#search-button");

  document.querySelector("#search-button").onclick = (e) => {
    searchForm.classList.toggle("active");
    searchBox.focus();
    e.preventDefault();
  };

  document.addEventListener("click", function (e) {
    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
      searchForm.classList.remove("active");
    }
  });
});

//togle shopping cart

const shoppingCart = document.querySelector(".shopping-cart");
const cb = document.querySelector("#shopping-cart-button");

document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

document.addEventListener("click", function (e) {
  if (!cb.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});
