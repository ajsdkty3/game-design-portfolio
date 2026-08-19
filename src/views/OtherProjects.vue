<template>
  <div>
    <h1>Design Studies</h1>

    <div style="margin-bottom: 30px;">
      This section is for supporting material: systems analysis, level studies, paper prototypes, UX/UI explorations, or smaller experiments that show how I think as a designer.
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/OtherProjectsData.ts";

export default Vue.extend({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: otherProjectsData,
    };
  },
});
</script>
