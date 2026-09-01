const projectSlides = [
  {
    title: "SCP-093",
    meta: "Personal Project · 2026 · Walking Simulator",
    summary:
      "A short first-person walking simulator inspired by the SCP universe. I focused on using lighting and visual composition to guide the player through the environment.",
    imageSrc: "public/img/placeholder-word-v2.svg",
    imageAlt: "Placeholder image for SCP-093",
    links: [
      {
        label: "itch.io",
        href: "https://blackcloud3772-yun.itch.io/scp-093"
      },
      {
        label: "Steam",
        href: "https://store.steampowered.com/app/4530430/SCP093/"
      }
    ],
    detail: {
      intro:
        "SCP-093 is a short atmospheric exploration game inspired by the SCP universe. Players uncover the story of an abandoned world through exploration, environmental clues, and notes.",
      sections: [
        {
          title: "Core Experience",
          items: [
            "A balance of mild horror and curiosity: unsettling enough to create tension, but inviting enough to encourage exploration."
          ]
        },
        {
          title: "Design Techniques",
          items: [
            "Child's Perspective: A child's notes frame the unknown with innocence and curiosity, helping curiosity outweigh fear.",
            "Warm Color Palette: Warm lighting softens the horror and makes the environment feel more inviting.",
            "Lighting & Composition: Lighting and composition guide the player's attention toward goals.",
            "Environmental Audio: Ambient sounds create subtle tension and unease."
          ]
        }
      ]
    }
  },
  {
    title: "AERO MEMOIR",
    meta: "Team Project · 2026 · Platformer · Game Jam",
    summary:
      "A first-person climbing game where players follow a mysterious voice toward the top of a tower. I focused on level design, production, and visual design, while coordinating the team through the GDD and task planning.",
    imageSrc: "public/img/placeholder-word-v2.svg",
    imageAlt: "Placeholder image for AERO MEMOIR",
    links: [
      {
        label: "itch.io",
        href: "https://gaba.itch.io/aero-memoir"
      }
    ],
    detail: {
      intro:
        "Aero Memoir is a first-person platforming game created during a game jam with teammates from around the world. Working across different time zones, we built the project together from concept to playable prototype. The player begins at the base of a beautiful Frutiger Aero-inspired tower, where a distant singing voice can faintly be heard. The goal is to climb to the top and discover the source of the voice.",
      sections: [
        {
          title: "Core Experience",
          items: [
            "A sense of attraction and discovery. The player is drawn upward by a mysterious singing voice while exploring the tower."
          ]
        },
        {
          title: "Design Techniques",
          items: [
            "Audio Guidance: Different layers of the music change in volume as the player climbs, communicating distance from the summit while the singing voice itself draws the player upward.",
            "Optional Collectibles: Collectibles are placed on harder side paths off the main route. Taking these risks increases the challenge, adds variety to exploration, and can unlock the true ending.",
            "Visual Direction: I based the visual style on Frutiger Aero, while adding softer lighting, transparency, and a more modern aesthetic.",
            "Production & Coordination: I wrote the GDD, planned the level and visual direction, divided tasks, and coordinated teammates."
          ]
        },
        {
          title: "Original GDD",
          link: {
            label: "View Original GDD (PDF)",
            href: "content/Tower%20Climb%20%E2%80%93%20Prototype%20GDD.pdf"
          }
        }
      ]
    }
  },
  {
    title: "NO FURTHER ACTION",
    meta: "Personal Project · 2026 · Match-3",
    summary:
      "A short match-3 game where players complete matching tasks to charge an AI robot. The project explores how layered visual and audio feedback can make simple interactions feel more juicy and satisfying.",
    imageSrc: "public/img/placeholder-word-v2.svg",
    imageAlt: "Placeholder image for NO FURTHER ACTION",
    links: [
      {
        label: "itch.io",
        href: "https://blackcloud3772-yun.itch.io/human-resources"
      }
    ],
    detail: {
      intro:
        "No Further Action is a short match-3 game where players complete matching tasks to charge an AI robot. Once the robot is fully powered, it wakes up and reveals that the player has just finished training the AI that will replace them.",
      sections: [
        {
          title: "Core Experience",
          items: [
            "The project explores juicy game feel: how a very simple interaction can produce a continuous chain of satisfying visual and audio feedback."
          ]
        },
        {
          title: "Design Techniques",
          items: [
            "Layered Feedback: Each match triggers multiple responses at once, combining sound, animation, movement, and visual effects.",
            "Energy Transfer: When blocks are cleared, energy beams shoot toward the robot's power meter, directly linking each match to visible progression.",
            "Impact Feedback: When blocks fall into place, the entire column briefly shakes, giving the grid more weight and physicality.",
            "Animated Energy Meter: Energy continuously surges inside the meter, making progress feel active rather than represented by a static bar."
          ]
        }
      ]
    }
  },
  {
    title: "SHARDEMONIUM",
    meta: "Team Project · 2026 · Arena Shooter · Game Jam",
    summary:
      "A high-intensity arena shooter inspired by Devil Daggers, built around fast combat and escalating pressure. I focused on level design and visual design, shaping the arena, atmosphere, and combat feedback.",
    imageSrc: "public/img/placeholder-word-v2.svg",
    imageAlt: "Placeholder image for SHARDEMONIUM",
    links: [
      {
        label: "itch.io",
        href: "https://blackcloud3772-yun.itch.io/shardemonium"
      }
    ],
    detail: {
      intro:
        "Shardemonium is a fast-paced 2D survival arena shooter created for the Minimalist Game Jam. Inspired by Devil Daggers, the player fights through escalating waves of enemies in a dark, confined arena.",
      sections: [
        {
          title: "Core Experience",
          items: [
            "A constant sense of pressure, tension, and intense combat, with the game becoming increasingly desperate as the player approaches death."
          ]
        },
        {
          title: "Design Techniques",
          items: [
            "Health Through Lighting: Health is communicated through the environment: the scene grows darker as HP drops, taking damage causes the lighting to flicker, and at 1 HP the arena becomes almost completely dark.",
            "Dynamic Music: We worked with a composer to create two tracks. At 1 HP, the music switches to a more intense second track to heighten the feeling of desperation.",
            "Distorted Minimalist Enemies: Because the jam theme was Minimalist, enemies are built from simple geometric shapes. I added vertex shaders that continuously distort their silhouettes, making them feel unstable and unnatural.",
            "Visual Pressure: Lighting, darkness, enemy distortion, and music all react to the player's condition, turning low health into an audiovisual escalation rather than just a number on the UI."
          ]
        }
      ]
    }
  },
  {
    title: "Project Five",
    meta: "Work 05",
    summary:
      "A slide for collaborative production, communication, and design ownership in a team pipeline.",
    imageSrc: "public/img/placeholder-word-v2.svg",
    imageAlt: "Placeholder image for project five",
    detail: {
      intro:
        "Use this project to show how you contribute as a generalist designer within a team setting.",
      sections: [
        {
          title: "Overview",
          items: [
            "Team size and production context",
            "Your ownership and responsibilities",
            "Main design constraints"
          ]
        },
        {
          title: "Collaboration",
          items: [
            "How you communicated design intent",
            "What tradeoffs shaped the result",
            "What you learned from team production"
          ]
        },
        {
          title: "Media",
          media: ["Team build placeholder", "Feature screenshot", "Presentation or trailer"]
        }
      ]
    }
  }
];

const slides = [
  {
    id: "intro",
    type: "intro"
  },
  ...projectSlides.map((project, index) => ({
    id: `work-${index + 1}`,
    type: "project",
    project
  }))
];

let currentSlideIndex = 0;

function renderSlides() {
  const track = document.getElementById("slides-track");

  track.innerHTML = slides
    .map((slide, index) => {
      if (slide.type === "intro") {
        return `
          <article class="slide intro-slide" data-slide-index="${index}">
            <div class="slide-surface">
              <img class="intro-gif" src="public/img/placeholder-text.gif" alt="Animated placeholder background" />
              <div class="intro-content">
                <h1 class="hero-title">Game Designer</h1>
                <div class="tag-row">
                  <span class="tag tag-red">Game Design</span>
                  <span class="tag tag-pink">Level Design</span>
                  <span class="tag tag-purple">Systems</span>
                  <span class="tag tag-coral">Player Experience</span>
                </div>
                <p class="hero-copy">
                  My name is <em>Erfei Zhou</em>. I'm a game designer with experience in
                  Game Design, Visual Effects, and Scripting.
                </p>
                <p class="hero-copy">
                  I make games to explore the unique experiences and ideas that interaction
                  can create. To me, what makes games special is that the player is part of
                  the experience. That interaction can make emotions feel more personal,
                  immersive, and resonant.
                </p>
                <div class="contact-links">
                  <a href="mailto:erfeizhou3772@gmail.com">Email</a>
                  <a href="https://blackcloud3772-yun.itch.io/" target="_blank" rel="noreferrer">itch.io</a>
                </div>
              </div>
            </div>
          </article>
        `;
      }

      const { project } = slide;
      const isAlt = index % 2 === 1 ? " alt" : "";
      const backgroundImage =
        index === 1
          ? `<img class="project-background" src="${project.imageSrc}" alt="" aria-hidden="true" />`
          : "";
      const projectLinks = project.links
        ? `
            <div class="project-links">
              ${project.links
                .map(
                  (link) =>
                    `<a class="project-link" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`
                )
                .join("")}
            </div>
          `
        : "";

      return `
        <article class="slide project-slide${backgroundImage ? " project-with-background" : ""}${isAlt}" data-slide-index="${index}">
          ${backgroundImage}
          <div class="slide-surface">
            <div class="project-layout">
              <img class="project-visual" src="${project.imageSrc}" alt="${project.imageAlt}" />
              <div class="project-panel">
                <h3 class="project-title">${project.title}</h3>
                <span class="project-label">${project.meta}</span>
                <p class="project-copy">${project.summary}</p>
                ${projectLinks}
                <button class="project-button" type="button" data-project-index="${index - 1}">
                  Project Details
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  track.querySelectorAll("[data-project-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.getAttribute("data-project-index"));
      openModal(projectSlides[index]);
    });
  });
}

function renderSelector() {
  const selector = document.getElementById("slide-selector");

  selector.innerHTML = slides
    .map((slide, index) => {
      if (slide.type === "intro") {
        return `
          <button class="selector-button active" type="button" data-slide-target="${index}" aria-label="Intro">
            <span class="selector-icon">E</span>
          </button>
        `;
      }

      return `
        <button class="selector-button" type="button" data-slide-target="${index}" aria-label="${slide.project.title}">
          <img src="${slide.project.imageSrc}" alt="${slide.project.imageAlt}" />
        </button>
      `;
    })
    .join("");

  selector.querySelectorAll("[data-slide-target]").forEach((button) => {
    button.addEventListener("click", () => {
      goToSlide(Number(button.getAttribute("data-slide-target")));
    });
  });
}

function updateActiveSelector() {
  document.querySelectorAll("[data-slide-target]").forEach((button, index) => {
    button.classList.toggle("active", index === currentSlideIndex);
  });
}

function goToSlide(index) {
  const safeIndex = Math.max(0, Math.min(index, slides.length - 1));
  currentSlideIndex = safeIndex;
  document.getElementById("slides-track").style.transform = `translateX(-${safeIndex * 100}%)`;
  updateActiveSelector();
}

function nextSlide() {
  goToSlide((currentSlideIndex + 1) % slides.length);
}

function prevSlide() {
  goToSlide((currentSlideIndex - 1 + slides.length) % slides.length);
}

function openModal(project) {
  const modal = document.getElementById("project-modal");
  const content = document.getElementById("modal-content");

  const sectionsHtml = project.detail.sections
    .map((section) => {
      if (section.link) {
        return `
          <section class="modal-section">
            <h4>${section.title}</h4>
            <a class="modal-document-link" href="${section.link.href}" target="_blank" rel="noreferrer">${section.link.label}</a>
          </section>
        `;
      }

      if (section.media) {
        return `
          <section class="modal-section">
            <h4>${section.title}</h4>
            <div class="media-list">
              ${section.media.map((item) => `<div class="media-box">${item}</div>`).join("")}
            </div>
          </section>
        `;
      }

      return `
        <section class="modal-section">
          <h4>${section.title}</h4>
          <ul>
            ${section.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </section>
      `;
    })
    .join("");

  content.innerHTML = `
    <div class="modal-header">
      <p class="modal-meta">${project.meta}</p>
      <h3 id="modal-title">${project.title}</h3>
      <p class="modal-intro">${project.detail.intro}</p>
    </div>
    <div class="modal-sections">
      ${sectionsHtml}
    </div>
  `;

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
  renderSlides();
  renderSelector();
  goToSlide(0);

  document.getElementById("prev-slide").addEventListener("click", prevSlide);
  document.getElementById("next-slide").addEventListener("click", nextSlide);
  document.getElementById("modal-close-button").addEventListener("click", closeModal);

  document.querySelectorAll("[data-close-modal='true']").forEach((element) => {
    element.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
    if (event.key === "ArrowRight") {
      nextSlide();
    }
    if (event.key === "ArrowLeft") {
      prevSlide();
    }
  });
});
