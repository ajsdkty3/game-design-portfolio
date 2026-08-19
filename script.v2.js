const projects = [
  {
    title: "Thesis Portfolio Project",
    meta: "Main project",
    summary:
      "A placeholder for the strongest project in the portfolio, presented as a full case study.",
    imageSrc: "public/img/placeholder-word-v2.svg",
    imageAlt: "Placeholder image for thesis portfolio project",
    detail: {
      intro:
        "Use this page for the project that best represents your overall game design thinking and application strengths.",
      sections: [
        {
          title: "Overview",
          items: [
            "One-sentence pitch",
            "Genre, platform, and target audience",
            "Team size, timeline, and your role"
          ]
        },
        {
          title: "Design Focus",
          items: [
            "Core mechanic or player experience goal",
            "Main design challenge",
            "What changed during iteration"
          ]
        },
        {
          title: "Media",
          media: ["Gameplay video placeholder", "Hero screenshot", "Design diagram"]
        }
      ]
    }
  },
  {
    title: "Level Design Case Study",
    meta: "Project",
    summary:
      "A slot for spatial design, encounter flow, puzzle layout, or player guidance work.",
    imageSrc: "public/img/placeholder-word-v2.svg",
    imageAlt: "Placeholder image for level design case study",
    detail: {
      intro:
        "This slot works well for a level design piece with blockouts, maps, screenshots, and explanation of flow.",
      sections: [
        {
          title: "Overview",
          items: [
            "What the level teaches or tests",
            "How the player moves through the space",
            "Why the layout is structured this way"
          ]
        },
        {
          title: "Iteration",
          items: [
            "What changed after testing",
            "Readability and pacing adjustments",
            "What you learned from the process"
          ]
        },
        {
          title: "Media",
          media: ["Map placeholder", "Blockout screenshot", "Final pass screenshot"]
        }
      ]
    }
  },
  {
    title: "Systems Design Prototype",
    meta: "Project",
    summary:
      "A slot for combat systems, progression loops, balancing experiments, or rule design.",
    imageSrc: "public/img/placeholder-word-v2.svg",
    imageAlt: "Placeholder image for systems design prototype",
    detail: {
      intro:
        "Use this section to explain how mechanics connect together and how you tuned the player experience.",
      sections: [
        {
          title: "Overview",
          items: [
            "Core verbs and system loops",
            "Important balancing variables",
            "What experience the system is trying to create"
          ]
        },
        {
          title: "Evidence",
          items: [
            "Playtest notes",
            "Spreadsheet or balance references",
            "System revisions after feedback"
          ]
        },
        {
          title: "Media",
          media: ["System UI placeholder", "Flowchart placeholder", "Video placeholder"]
        }
      ]
    }
  },
  {
    title: "Narrative or Quest Design Piece",
    meta: "Project",
    summary:
      "A slot for branching structure, quest pacing, player motivation, or narrative integration.",
    imageSrc: "public/img/placeholder-word-v2.svg",
    imageAlt: "Placeholder image for narrative or quest design piece",
    detail: {
      intro:
        "Use this project to show how narrative goals, gameplay beats, and player clarity work together.",
      sections: [
        {
          title: "Overview",
          items: [
            "Narrative premise or quest context",
            "Player motivation and progression",
            "Your role in shaping the experience"
          ]
        },
        {
          title: "Design Focus",
          items: [
            "Structure and pacing decisions",
            "How clarity changed during iteration",
            "How narrative connects to gameplay"
          ]
        },
        {
          title: "Media",
          media: ["Storyboard placeholder", "Quest flow placeholder", "Video placeholder"]
        }
      ]
    }
  },
  {
    title: "Collaborative Team Project",
    meta: "Project",
    summary:
      "A slot for showing teamwork, communication, and design ownership inside a shared production pipeline.",
    imageSrc: "public/img/placeholder-word-v2.svg",
    imageAlt: "Placeholder image for collaborative team project",
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

function renderProjects() {
  const container = document.getElementById("projects-list");

  container.innerHTML = projects
    .map(
      (project, index) => `
        <button class="project-item" type="button" data-project-index="${index}">
          <img class="project-image" src="${project.imageSrc}" alt="${project.imageAlt}" />
          <span class="project-text">
            <span class="project-meta">${project.meta}</span>
            <span class="project-title">${project.title}</span>
            <span class="project-summary">${project.summary}</span>
          </span>
        </button>
      `
    )
    .join("");

  container.querySelectorAll("[data-project-index]").forEach((item) => {
    item.addEventListener("click", () => {
      const index = Number(item.getAttribute("data-project-index"));
      openModal(projects[index]);
    });
  });
}

function openModal(project) {
  const modal = document.getElementById("project-modal");
  const content = document.getElementById("modal-content");

  const sectionsHtml = project.detail.sections
    .map((section) => {
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
  renderProjects();

  document.getElementById("modal-close-button").addEventListener("click", closeModal);
  document.querySelectorAll("[data-close-modal='true']").forEach((element) => {
    element.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
});
