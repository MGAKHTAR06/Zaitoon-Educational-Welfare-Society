/* Zaitoon — shared behaviour */
(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // close menu when a link is tapped (mobile)
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && links.classList.contains("open")) {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Scroll reveal
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // Footer year
  var y = document.getElementById("year");
  if (y) { y.textContent = new Date().getFullYear(); }

  // Contact form (placeholder handler)
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = document.getElementById("form-note");
      if (note) { note.hidden = false; }
      form.reset();
    });
  }
})();

/* Slideshows / roller banners */
(function () {
  document.querySelectorAll(".slideshow").forEach(function (ss) {
    var slides = ss.querySelectorAll(".slide");
    if (slides.length < 2) return;
    var dotsWrap = ss.querySelector(".ss-dots");
    var i = 0, timer;
    if (dotsWrap) {
      slides.forEach(function (_, idx) {
        var b = document.createElement("button");
        b.className = "ss-dot" + (idx === 0 ? " active" : "");
        b.setAttribute("aria-label", "Go to slide " + (idx + 1));
        b.addEventListener("click", function () { go(idx); reset(); });
        dotsWrap.appendChild(b);
      });
    }
    function go(n) {
      slides[i].classList.remove("active");
      if (dotsWrap) dotsWrap.children[i].classList.remove("active");
      i = (n + slides.length) % slides.length;
      slides[i].classList.add("active");
      if (dotsWrap) dotsWrap.children[i].classList.add("active");
    }
    function reset() { clearInterval(timer); timer = setInterval(function () { go(i + 1); }, 4500); }
    var np = ss.querySelector(".ss-arrow.next");
    var pp = ss.querySelector(".ss-arrow.prev");
    if (np) np.addEventListener("click", function () { go(i + 1); reset(); });
    if (pp) pp.addEventListener("click", function () { go(i - 1); reset(); });
    reset();
  });
})();
