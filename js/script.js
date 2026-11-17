/* ==========================================================
   BIRTHDAY SURPRISE FOR NITYA
   COMPLETE SHARED JAVASCRIPT
   HTML + CSS + VANILLA JAVASCRIPT
   ========================================================== */

/* ==========================================================
   1. CONFIG
========================================================== */

const CONFIG = {
  password: "nitya",

  birthdayDate: "",

  ramadanDate: "",

  eidMeetingDate: "",

  musicFile: "audio/romantic-music.mp3",
};

/* ==========================================================
   2. MEMORIES
========================================================== */

const MEMORIES = [
  {
    date: "12 February",
    title: "The Day Our Story Began ❤️",
    text: "Our first conversation was the beginning of something beautiful. A simple moment that slowly became a special part of our lives.",
    image: "images/f1.png",
    alt: "Our first conversation",
  },
  {
    date: "Our Special Memory ❤️",
    title: "A Cozy Long-Distance Proposal 💍",
    text: "Distance kept us apart, but our hearts always stayed close. ❤️",
    image: "images/A Cozy Long-Distance Proposal.png",
    alt: "Our cozy long-distance proposal",
    more: ["images/rrw.jpg", "images/f2.png", "images/f3.png"],
  },
  {
    date: "31 December 2024",
    title: "Our First Meet ❤️",
    text: "The day we finally met in person. A beautiful memory that will always remain close to my heart.",
    image: "images/FIRSTMEET.webp",
    alt: "Our first meeting",
    more: ["images/1.jpg", "images/1.1.jpg", "images/1.3.jpg"],
  },
  {
    date: "June 2025",
    title: "Our Second Meet ❤️",
    text: "Every moment with you is a beautiful memory. Our second meeting made our journey even more special.",
    image: "images/SECONDMEET.jpg",
    alt: "Our second meeting",
    more: ["images/2.1.jpg", "images/2.2.jpg", "images/2.3.jpg"],
  },
  {
    date: "March 2026",
    title: "Our Third Meet 🌙",
    text: "A special moment that will always stay in my heart.",
    image: "images/THIRDMEET.jpg",
    alt: "Our third meeting",
    more: ["images/3.1.jpg", "images/3.2.jpg", "images/3.3.jpg"],
  },
];

/* ==========================================================
   3. PHOTO ALBUM
========================================================== */


const PHOTOS = [
  {
    src: "images/r.1.jpg",
    title: "The Girl Who Stole My Heart ❤️",
    caption: "That first meet gave me a memory I'll cherish forever. Your smile is still my favourite view."
  },
  {
    src: "images/r.2.jpg",
    title: "My Favourite Person 🥹",
    caption: "Every second with you feels special. I could look at you a thousand times and still fall in love again."
  },
  {
    src: "images/r.3.jpg",
    title: "My Beautiful Bandi 🌙",
    caption: "You don't even realise how beautiful you are, especially when you smile. I'm the luckiest to have you."
  },
  {
    src: "images/r.4.jpg",
    title: "A Promise of Forever 💍",
    caption: "Distance may separate our places, but nothing can separate two hearts that truly belong together."
  },
  {
    src: "images/rr.jpg",
    title: "My Pretty Girl 🎀",
    caption: "Your eyes, your smile, your little expressions — everything about you is special to me."
  },
  {
    src: "images/r.5.png",
    title: "My Cutie Pie 🧸",
    caption: "If I could save one feeling forever, it would be the happiness I feel whenever I'm with you."
  },
  {
    src: "images/b1.png",
    title: "My Whole World 🌍",
    caption: "Among millions of people, my heart somehow found its favourite person — YOU."
  },
  {
    src: "images/b2.jpg",
    title: "My Princess 👑",
    caption: "You deserve all the love, happiness and beautiful little things this world has to offer."
  },
  {
    src: "images/b4.jpg",
    title: "The Most Beautiful Soul 💗",
    caption: "Pretty is an understatement. Your heart, your nature and your smile make you one of a kind."
  },
  {
    src: "images/b3.jpg",
    title: "My Nitya, My Happiness 🫶",
    caption: "I don't need a perfect world. Having you in mine makes everything feel perfect."
  },
  {
    src: "images/b6.jpg",
    title: "Forever My Favourite ❤️",
    caption: "No matter how many pictures I take, none can capture how beautiful you look through my eyes."
  }
];

/* ==========================================================
   4. NAVIGATION
========================================================== */

const NAV = [
  ["index.html", "Home"],

  ["birthday.html", "Birthday Wish"],

  ["memories.html", "Our Memories"],

  ["gallery.html", "Photo Album"],

  ["love-letter.html", "Love Letter"],



  ["final-surprise.html", "Final Surprise"],
];

/* ==========================================================
   5. HELPERS
========================================================== */

const $ = (selector, root = document) => root.querySelector(selector);

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

function esc(value) {
  return String(value ?? "").replace(
    /[&<>"]/g,

    (character) =>
      ({
        "&": "&amp;",

        "<": "&lt;",

        ">": "&gt;",

        '"': "&quot;",
      })[character],
  );
}

/* ==========================================================
   6. IMAGE PLACEHOLDER
========================================================== */

function placeholder(path) {
  const svg = `

    <svg xmlns="http://www.w3.org/2000/svg"
         width="800"
         height="1000">

      <defs>

        <linearGradient id="gradient"
                       x1="0"
                       y1="0"
                       x2="1"
                       y2="1">

          <stop offset="0"
                stop-color="#ffd3e2"/>

          <stop offset="1"
                stop-color="#c4b0f5"/>

        </linearGradient>

      </defs>

      <rect width="800"
            height="1000"
            fill="url(#gradient)"/>

      <text x="400"
            y="450"
            font-size="120"
            text-anchor="middle">

        ❤

      </text>

      <text x="400"
            y="560"
            font-size="34"
            text-anchor="middle"
            fill="#3b1a49"
            font-family="sans-serif">

        Add your photo:

      </text>

      <text x="400"
            y="610"
            font-size="28"
            text-anchor="middle"
            fill="#3b1a49"
            font-family="sans-serif">

        ${esc(path)}

      </text>

    </svg>

  `;

  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

/* ==========================================================
   7. IMAGE ERROR HANDLING
========================================================== */

document.addEventListener(
  "error",

  (event) => {
    const img = event.target;

    if (img.tagName === "IMG" && !img.dataset.fallback) {
      img.dataset.fallback = "1";

      const original =
        img.getAttribute("data-original") || img.getAttribute("src");

      img.src = placeholder(original);
    }
  },

  true,
);

/* ==========================================================
   8. PASSWORD GATE
========================================================== */

function isUnlocked() {
  return sessionStorage.getItem("unlocked") === "yes";
}

function guardPages() {
  const page = document.body.dataset.page;

  if (page !== "login" && !isUnlocked()) {
    location.replace("index.html");
  }
}

function initLogin() {
  const form = $("#login-form");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = $("#password");

    const error = $("#login-error");

    if (!input || !error) return;

    if (input.value.trim().toLowerCase() === CONFIG.password.toLowerCase()) {
      sessionStorage.setItem("unlocked", "yes");

      burstHearts(24);

      setTimeout(() => {
        navigate("birthday.html");
      }, 700);
    } else {
      error.hidden = false;

      form.classList.remove("shake");

      void form.offsetWidth;

      form.classList.add("shake");

      input.select();
    }
  });
}

/* ==========================================================
   9. NAVIGATION
========================================================== */

function buildNav() {
  const header = $("#site-header");

  if (!header) return;

  const currentPage = location.pathname.split("/").pop() || "index.html";

  const links = NAV.map(
    ([href, label]) => `

      <a href="${href}"

         ${href === currentPage ? 'aria-current="page"' : ""}>

        ${esc(label)}

      </a>

    `,
  ).join("");

  header.innerHTML = `

    <a class="brand"
       href="index.html">

      For Nitya ❤️

    </a>

    <button class="nav-toggle"
            aria-label="Menu"
            aria-expanded="false"
            aria-controls="nav">

      ☰

    </button>

    <nav class="nav"
         id="nav"
         aria-label="Main navigation">

      ${links}

    </nav>

  `;

  const toggle = $(".nav-toggle");

  const nav = $("#nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");

    toggle.setAttribute(
      "aria-expanded",

      String(open),
    );
  });
}

function navigate(url) {
  document.body.classList.add("leaving");

  setTimeout(() => {
    location.href = url;
  }, 350);
}

function initTransitions() {
  document.addEventListener("click", (event) => {
    const anchor = event.target.closest("a[href$='.html']");

    if (
      !anchor ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      anchor.target ||
      anchor.hasAttribute("download")
    )
      return;

    const target = new URL(anchor.href);

    if (target.origin !== location.origin) return;

    event.preventDefault();

    navigate(anchor.href);
  });

  window.addEventListener("pageshow", () => {
    document.body.classList.remove("leaving");
  });

  requestAnimationFrame(() => {
    document.body.classList.add("ready");
  });
}

/* ==========================================================
   10. FLOATING HEARTS
========================================================== */

function spawnHeart() {
  if (
    reduceMotion ||
    document.hidden ||
    document.querySelectorAll(".heart").length > 16
  )
    return;

  const heart = document.createElement("span");

  heart.className = "heart";

  heart.textContent = ["❤", "💗", "💕", "🌸"][Math.floor(Math.random() * 4)];

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = 14 + Math.random() * 22 + "px";

  heart.style.animationDuration = 7 + Math.random() * 6 + "s";

  heart.setAttribute("aria-hidden", "true");

  heart.addEventListener("animationend", () => {
    heart.remove();
  });

  document.body.appendChild(heart);
}

function burstHearts(number) {
  for (let i = 0; i < number; i++) {
    setTimeout(spawnHeart, i * 40);
  }
}

/* ==========================================================
   11. CONFETTI
========================================================== */

function confetti(number = 60) {
  if (reduceMotion) return;

  const colors = ["#d94f86", "#c4b0f5", "#ffd3e2", "#ffb347", "#ffffff"];

  for (let i = 0; i < number; i++) {
    const piece = document.createElement("span");

    piece.className = "confetti";

    piece.style.cssText = `

      left:${Math.random() * 100}vw;

      width:8px;

      height:14px;

      background:${colors[i % colors.length]};

      animation-duration:${2 + Math.random() * 2.5}s;

      animation-delay:${Math.random() * 0.6}s;

    `;

    piece.addEventListener("animationend", () => {
      piece.remove();
    });

    document.body.appendChild(piece);
  }
}

/* ==========================================================
   12. MUSIC
========================================================== */

function initMusic() {
  const audio = new Audio(CONFIG.musicFile);

  audio.loop = true;

  const button = document.createElement("button");

  button.className = "music-btn";

  button.setAttribute("aria-pressed", "false");

  button.setAttribute("aria-label", "Play music");

  button.textContent = "♪";

  button.addEventListener("click", () => {
    if (audio.paused) {
      audio
        .play()

        .then(() => {
          button.setAttribute("aria-pressed", "true");

          button.setAttribute("aria-label", "Pause music");
        })

        .catch(() => {
          alert(
            "Music file not found. Add audio/romantic-music.mp3 to your project.",
          );
        });
    } else {
      audio.pause();

      button.setAttribute("aria-pressed", "false");

      button.setAttribute("aria-label", "Play music");
    }
  });

  document.body.appendChild(button);
}

/* ==========================================================
   13. SCROLL REVEAL
========================================================== */

function initReveal() {
  const items = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => {
      item.classList.add("in");
    });

    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");

          observer.unobserve(entry.target);
        }
      });
    },

    {
      threshold: 0.15,
    },
  );

  items.forEach((item) => {
    observer.observe(item);
  });
}

/* ==========================================================
   14. BIRTHDAY PAGE
========================================================== */

function initBirthday() {
  const countdown = $("#countdown");

  if (!countdown) return;

  const target = CONFIG.birthdayDate
    ? new Date(CONFIG.birthdayDate + "T00:00:00")
    : null;

  const tick = () => {
    const difference = target ? target - new Date() : 0;

    if (!target || difference <= 0) {
      countdown.textContent = "Today is your day. 🎉";

      return;
    }

    const days = Math.floor(difference / 86400000);

    const hours = Math.floor(difference / 3600000) % 24;

    const minutes = Math.floor(difference / 60000) % 60;

    countdown.textContent = `${days} days, ${hours} hours, ${minutes} minutes until your birthday`;
  };

  tick();

  setInterval(tick, 30000);

  const button = $("#confetti-btn");

  if (button) {
    button.addEventListener("click", () => {
      confetti(80);

      burstHearts(14);
    });
  }

  setTimeout(() => {
    confetti(40);
  }, 600);
}

/* ==========================================================
   15. MEMORIES TIMELINE
========================================================== */

function renderTimeline() {
  const container = $("#timeline");
  if (!container) return;

  container.innerHTML = MEMORIES.map((memory, index) => {
    const hasMore = Array.isArray(memory.more) && memory.more.length > 0;
    return `
      <article class="tl-item reveal ${hasMore ? "has-more" : ""}">
        <span class="tl-dot"></span>
        <div class="glass card">
          <time>${esc(memory.date)}</time>
          <h3>${esc(memory.title)}</h3>
          <p>${esc(memory.text)}</p>
          ${memory.image ? `<img class="tl-photo" src="${esc(memory.image)}" alt="${esc(memory.alt)}" loading="lazy">` : ""}
          ${
            hasMore
              ? `
            <button type="button" class="more-btn" aria-expanded="false" aria-controls="more-${index}">
              <span class="more-label">See more photos</span>
              <span class="more-arrow" aria-hidden="true">▾</span>
            </button>
            <div class="more-photos" id="more-${index}" hidden>
              ${memory.more.map((src, i) => `<img src="${esc(src)}" alt="${esc(memory.alt)} photo ${i + 1}" loading="lazy">`).join("")}
            </div>`
              : ""
          }
        </div>
      </article>`;
  }).join("");

  initMorePhotos(container);
  initReveal();
}

function initMorePhotos(container) {
  container.addEventListener("click", (event) => {
    const card = event.target.closest(".has-more .card");
    if (!card || event.target.closest(".more-photos")) return;

    const button = card.querySelector(".more-btn");
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    const open = button.getAttribute("aria-expanded") !== "true";

    button.setAttribute("aria-expanded", String(open));
    panel.hidden = !open;
    button.querySelector(".more-label").textContent = open
      ? "Hide photos"
      : "See more photos";
    if (open) burstHearts(8);
  });
}

/* ==========================================================
   16. OUR JOURNEY
   PREMIUM MEMORY CARDS
========================================================== */

function renderJourney() {
  const container = $("#journey");

  if (!container) return;

  /* ---------- MEMORY DATA ---------- */

  const cards = MEMORIES.map((memory, index) => ({
    date: memory.date,

    title: memory.title,

    text: memory.text,

    image: memory.image,

    alt: memory.alt,

    number: index + 1,
  }));

  /* ---------- RENDER CARDS ---------- */

  container.innerHTML = cards
    .map(
      (memory, index) => `

      <article

        class="journey-card glass reveal"

        draggable="true"

        tabindex="0"

        data-memory="${index}"

        aria-label="${esc(memory.title)}. Drag to rearrange."

      >

        <!-- PHOTO -->

        <div class="journey-photo-wrap">

          <img

            class="journey-image"

            src="${memory.image ? esc(memory.image) : placeholder("Add your journey photo")}"

            data-original="${memory.image ? esc(memory.image) : ""}"

            alt="${esc(memory.alt || memory.title)}"

            loading="lazy"

            draggable="false"

          >

          <span class="journey-photo-label">

            OUR MEMORY ❤️

          </span>

        </div>


        <!-- CONTENT -->

        <div class="journey-content">

          <span class="journey-date">

            ${esc(memory.date)}

          </span>


          <h3 class="journey-title">

            ${esc(memory.title)}

          </h3>


          <p class="journey-text">

            ${esc(memory.text)}

          </p>


          <!-- FOOTER -->

          <div class="journey-footer">

            <span class="journey-number">

              MEMORY ${String(index + 1).padStart(2, "0")}

            </span>


            <span class="journey-drag">

              ⠿ DRAG TO MOVE

            </span>

          </div>

        </div>

      </article>

    `,
    )
    .join("");

  /* ---------- REVEAL ---------- */

  initReveal();

  /* ---------- DRAG AND DROP ---------- */

  initJourneyDragDrop();
}

/* ==========================================================
   17. JOURNEY DRAG & DROP
========================================================== */

function initJourneyDragDrop() {
  const container = $("#journey");

  if (!container) return;

  let draggedCard = null;

  /* ---------- DRAG START ---------- */

  container.addEventListener("dragstart", (event) => {
    const card = event.target.closest(".journey-card");

    if (!card) return;

    draggedCard = card;

    card.classList.add("dragging");

    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "move";

      event.dataTransfer.setData(
        "text/plain",

        card.dataset.memory,
      );
    }
  });

  /* ---------- DRAG OVER ---------- */

  container.addEventListener("dragover", (event) => {
    event.preventDefault();

    const target = event.target.closest(".journey-card");

    if (!target || !draggedCard || target === draggedCard) return;

    const rectangle = target.getBoundingClientRect();

    const verticalPosition = event.clientY - rectangle.top;

    const before = verticalPosition < rectangle.height / 2;

    target.classList.add("drag-over");

    if (before) {
      container.insertBefore(
        draggedCard,

        target,
      );
    } else {
      container.insertBefore(
        draggedCard,

        target.nextSibling,
      );
    }
  });

  /* ---------- DRAG LEAVE ---------- */

  container.addEventListener("dragleave", (event) => {
    const card = event.target.closest(".journey-card");

    if (card) {
      card.classList.remove("drag-over");
    }
  });

  /* ---------- DROP ---------- */

  container.addEventListener("drop", (event) => {
    event.preventDefault();

    container
      .querySelectorAll(".journey-card")

      .forEach((card) => {
        card.classList.remove("drag-over");
      });
  });

  /* ---------- DRAG END ---------- */

  container.addEventListener("dragend", () => {
    if (draggedCard) {
      draggedCard.classList.remove("dragging");
    }

    container
      .querySelectorAll(".journey-card")

      .forEach((card) => {
        card.classList.remove("dragging");

        card.classList.remove("drag-over");
      });

    draggedCard = null;
  });
}

/* ==========================================================
   18. PHOTO GALLERY
========================================================== */

function renderGallery() {
  const container = $("#gallery");

  if (!container) return;

  container.innerHTML = PHOTOS.map(
    (photo, index) => `

      <figure class="photo-card glass reveal">

        <button

          type="button"

          data-index="${index}"

          aria-label="View ${esc(photo.title)} full screen"

        >

          <img

            src="${esc(photo.src)}"

            alt="${esc(photo.title)}: ${esc(photo.caption)}"

            loading="lazy"

          >

        </button>


        <figcaption class="cap">

          <span class="tag">

            ${esc(photo.date)}

          </span>


          <h3>

            ${esc(photo.title)}

          </h3>


          <p>

            ${esc(photo.caption)}

          </p>

        </figcaption>

      </figure>

    `,
  ).join("");

  initLightbox();

  initReveal();
}

/* ==========================================================
   19. LIGHTBOX
========================================================== */

function initLightbox() {
  const gallery = $("#gallery");

  if (!gallery) return;

  const lightbox = document.createElement("div");

  lightbox.className = "lightbox";

  lightbox.setAttribute("role", "dialog");

  lightbox.setAttribute("aria-modal", "true");

  lightbox.setAttribute("aria-label", "Photo viewer");

  lightbox.innerHTML = `

    <button class="lb-btn lb-close"
            aria-label="Close">

      ✕

    </button>


    <button class="lb-btn lb-prev"
            aria-label="Previous photo">

      ‹

    </button>


    <img alt="">


    <p></p>


    <button class="lb-btn lb-next"
            aria-label="Next photo">

      ›

    </button>

  `;

  document.body.appendChild(lightbox);

  const image = $("img", lightbox);

  const caption = $("p", lightbox);

  let index = 0;

  let opener = null;

  /* ---------- SHOW PHOTO ---------- */

  function showPhoto(number) {
    index = (number + PHOTOS.length) % PHOTOS.length;

    const photo = PHOTOS[index];

    image.removeAttribute("data-fallback");

    image.src = photo.src;

    image.alt = photo.title;

    caption.textContent = `${photo.title} · ${photo.date} – ${photo.caption}`;
  }

  /* ---------- CLOSE ---------- */

  function closeLightbox() {
    lightbox.classList.remove("open");

    document.body.style.overflow = "";

    if (opener) {
      opener.focus();
    }
  }

  /* ---------- OPEN ---------- */

  gallery.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-index]");

    if (!button) return;

    opener = button;

    showPhoto(Number(button.dataset.index));

    lightbox.classList.add("open");

    document.body.style.overflow = "hidden";

    $(".lb-close", lightbox).focus();
  });

  /* ---------- BUTTONS ---------- */

  $(".lb-close", lightbox).addEventListener("click", closeLightbox);

  $(".lb-prev", lightbox).addEventListener("click", () => {
    showPhoto(index - 1);
  });

  $(".lb-next", lightbox).addEventListener("click", () => {
    showPhoto(index + 1);
  });

  /* ---------- BACKGROUND CLICK ---------- */

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  /* ---------- KEYBOARD ---------- */

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("open")) return;

    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowLeft") {
      showPhoto(index - 1);
    }

    if (event.key === "ArrowRight") {
      showPhoto(index + 1);
    }
  });
}

/* ==========================================================
   20. LOVE LETTER ENVELOPE
========================================================== */

function initEnvelope() {
  const envelope = $("#envelope");

  if (!envelope) return;

  envelope.addEventListener("click", () => {
    const open = envelope.getAttribute("aria-expanded") !== "true";

    envelope.setAttribute(
      "aria-expanded",

      String(open),
    );

    envelope.setAttribute(
      "aria-label",

      open ? "Close the love letter" : "Open the love letter",
    );

    const hint = $("#letter-hint");

    if (hint) {
      hint.textContent = open
        ? "Read it slowly, it was written with love."
        : "Tap the envelope to open it";
    }

    if (open) {
      burstHearts(12);
    }
  });
}

/* ==========================================================
   21. FINAL SURPRISE
========================================================== */

function initFinal() {
  const button = $("#reveal-btn");

  if (!button) return;

  button.addEventListener("click", () => {
    const message = $("#final-message");

    if (!message) return;

    message.hidden = false;

    button.hidden = true;

    button.setAttribute(
      "aria-expanded",

      "true",
    );

    confetti(100);

    burstHearts(30);

    message.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",

      block: "center",
    });
  });
}

/* ==========================================================
   22. BOOT
========================================================== */

guardPages();

buildNav();

initTransitions();

initLogin();

initMusic();

renderTimeline();

renderJourney();

renderGallery();

initBirthday();

initEnvelope();

initFinal();

initReveal();

/* ---------- FLOATING HEARTS ---------- */

setInterval(spawnHeart, 1100);

/* ==========================================================
   END OF SCRIPT
========================================================== */
