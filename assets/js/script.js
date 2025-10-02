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

  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
