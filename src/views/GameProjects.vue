<template>
  <div>
    <h1>Featured Projects</h1>

    <div style="margin-bottom: 30px;">
      These are the main portfolio pieces I plan to present in applications. Each card opens a deeper case study with placeholders for trailers, screenshots, mechanics breakdowns, and iteration notes.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px;">
      More links can be added later here, such as itch.io builds, Steam pages, GitHub repositories, or downloadable PDFs.
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
