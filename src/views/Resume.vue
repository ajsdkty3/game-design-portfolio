<template>
  <div>
    <h1>Curriculum Vitae</h1>

    <div class="paragraph">
      This page is designed for admissions reviewers who want a quick overview of my background, tools, and design interests.
      <br />It can stay concise, with the deeper evidence living in the project case studies.
      <br />
      <br />For the final version, we can add a downloadable PDF resume, program-specific statement links, or a short bio tailored to each school.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="#"><i class="fa fa-download fa-lg fa-fw"></i> Resume PDF placeholder</a>
        <a class="download-link" href="#"><i class="fa fa-download fa-lg fa-fw"></i> Portfolio summary placeholder</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Resume portrait placeholder" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Profile</h2>
      <div>Erfei Zhou is an aspiring generalist game designer interested in player experience, systems thinking, level flow, gameplay communication, and iterative prototyping.</div>

      <h2>Selected Experience</h2>

      <h3>Featured Project Placeholder</h3>
      <h4>Year</h4>
      <div>Replace this with a project that best shows broad design ownership, such as mechanics, tuning, documentation, level flow, player onboarding, or cross-discipline collaboration.</div>
      <div class="tech-stack">Suggested framing: concept, design role, iteration process, and outcome</div>

      <h3>Team or Research Project Placeholder</h3>
      <h4>Year</h4>
      <div>Use this slot for a collaborative or research-heavy project that shows how you work as a generalist designer across multiple constraints and feedback loops.</div>
      <div class="tech-stack">Suggested focus: systems balancing, user testing, documentation, level or narrative integration</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Design</h3>
        <SkillRate name="Gameplay systems" :rate="4" />
        <SkillRate name="Level design" :rate="4" />
        <SkillRate name="Encounter pacing" :rate="3" />
        <SkillRate name="UX and onboarding" :rate="4" />
      </div>

      <div class="skill-set">
        <h3>Production</h3>
        <SkillRate name="Documentation" :rate="5" />
        <SkillRate name="Playtesting" :rate="4" />
        <SkillRate name="Cross-discipline collaboration" :rate="4" />
        <SkillRate name="Rapid prototyping" :rate="4" />
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>University or Program Name</h3>
      <h4>Degree, expected year or graduation year</h4>
      <div>Add the academic background, coursework, and preparation that best supports your master's application in game design.</div>

      <h2>Tools</h2>

      <h3>Game Development</h3>
      <div>Unity, Unreal Engine, Godot, Twine, Construct, or the tools you actually use</div>

      <h3>Design and Analysis</h3>
      <div>Figma, Miro, Google Sheets, Notion, Adobe tools, or balancing and documentation workflows</div>

      <h2>Interests</h2>
      <div>
        <h3>Systems Design</h3>
        <div>Balancing rules, economies, verbs, progression, and meaningful player choices.</div>

        <h3>Level Design</h3>
        <div>Spatial teaching, pacing, readability, encounter composition, and environmental storytelling.</div>

        <h3>Generalist Practice</h3>
        <div>Connecting mechanics, presentation, onboarding, feedback, and iteration into a cohesive player experience.</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px;
  }
}
</style>
