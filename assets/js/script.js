// Menambahkan event listener setelah semua konten halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  const likeButtons = document.querySelectorAll(".like-btn");

  likeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.toggle("liked");
    });
  });

  const followButtons = document.querySelectorAll(".author-card button");

  followButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.innerText === "Follow") {
        this.innerText = "Following";
        this.classList.add("followed");
      } else {
        this.innerText = "Follow";
        this.classList.remove("followed");
      }
    });
  });
});
