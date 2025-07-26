document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        nama: "RTX 5090",
        img: "image/vga_rtx5090.jpeg",
        price: 62150000,
        deskripsi: "GPU generasi terbaru dari NVIDIA.",
        link: "https://tk.tokopedia.com/ZSS82JwKm/",
      },
      {
        id: 2,
        nama: "RX 7600",
        img: "image/vga_rx7600.jpg",
        price: 19199000,
        deskripsi:
          "AMD Radeon™ RX 7600, salah satu kartu grafis terbaik di kelasnya. Dengan menyematkan arsitektur RDNA™ 3.",
        link: "https://tk.tokopedia.com/ZSS8Ya54E/",
      },
      {
        id: 3,
        nama: "RTX 4060",
        img: "image/vga_rtx4060.jpg",
        price: 5775000,
        deskripsi:
          "performance-segment graphics card by NVIDIA, launched on May 18th, 2023.",
        link: "https://tk.tokopedia.com/ZSS8YGuJX/",
      },
      {
        id: 4,
        nama: "Ryzen 9",
        img: "image/cpu_ryzen9.jpeg",
        price: 5760000,
        deskripsi: "pProsesor AMD performa tinggi untuk content creator.",
        link: "https://tk.tokopedia.com/ZSS8Ya8Ks/",
      },
      {
        id: 5,
        nama: "COREi 9",
        img: "image/cpu_inteli9.jpg",
        price: 8410000,
        deskripsi:
          "performance-segment graphics card by NVIDIA, launched on May 18th, 2023.",
        link: "https://tk.tokopedia.com/ZSS8YpwwK/",
      },
      {
        id: 6,
        nama: "COREi 5",
        img: "image/cpu_inteli5.jpg",
        price: 4235000,
        deskripsi:
          "The Intel Core i5 processors form the golden middle of the Intel Core i series and are located under the Intel Core i7/i9 processors. The Intel Core i5 processors have fewer CPU cores than their more powerful family members.",
        link: "https://tk.tokopedia.com/ZSS8YKwdV/",
      },
      {
        id: 7,
        nama: "CORSAIR 32GB",
        img: "image/ram_corsair.jpg",
        price: 2225000,
        deskripsi:
          "SUPPORT DUAL PROFILE INTEL XMP & AMD EXPOZED for INTEL CORE GEN-12/13 & AMD RYZEN 7000 SERIES.",
        link: "https://tk.tokopedia.com/ZSS82B4J4/",
      },
      {
        id: 8,
        nama: "TEAM T-FORCE 16GB",
        img: "image/ram-team.jpeg",
        price: 1110000,
        deskripsi:
          "RGB Colors & 120° Ultra-Wide LightingSupports Intel XMP3.0 for One-Click OverclockingPower Management ICs (PMIC) Equipped for Stable,.",
        link: "https://tk.tokopedia.com/ZSS82CFYd/",
      },
      {
        id: 9,
        nama: "G-SKILL 64GB",
        img: "image/ram_gskill.jpg",
        price: 3310000,
        deskripsi:
          "performance-segment graphics card by NVIDIA, launched on May 18th, 2023.",
        link: "https://tk.tokopedia.com/ZSS82PF3K/",
      },
    ],

    cart: [],
    addToCart(item) {
      console.log('Tambah ke cart:', item.nama);  
      let found = this.cart.find((i) => i.id === item.id);
      if (found) {
        found.qty += 1;
      } else {
        this.cart.push({ ...item, qty: 1 });
      }
    },
    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id);
    },
    clearCart() {
      this.cart = [];
    },
    totalCart() {
      return this.cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    },
    rupiah(value) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(value);
    },
  }));
});
