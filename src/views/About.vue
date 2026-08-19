<template>
  <div style="margin-bottom: 80px;">
    <h1>Erfei Zhou</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Erfei Zhou</strong>, an aspiring <strong>generalist game designer</strong> building this portfolio for game design master's applications.<br/>
        This site is organized to show how I think across systems, levels, gameplay moments, prototyping, and iteration rather than from only one specialized angle.
      </div>

      <div style="margin-top: 20px;">Use <router-link to="/game-projects">Featured Projects</router-link> for my main portfolio pieces, <router-link to="/other-projects">Design Studies</router-link> for supporting analysis and experiments, and <router-link to="/resume">CV</router-link> for education, tools, and experience.</div>

      <div style="margin-top: 40px;">Each project page is designed as an application-facing case study with space for a short pitch, my role, design goals, tools, process notes, iteration evidence, and media such as screenshots, diagrams, and gameplay video.</div>
      <div style="margin-top: 20px;">For now, this is still a working scaffold, but the structure is already shaped around a generalist presentation: broad design thinking, clear communication, and evidence of process.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Portrait placeholder for portfolio owner" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
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
    padding: 10px;
    padding-left: 80px;
  }
}

</style>
