<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <body>
    <div class="content-wrapper">
      <div class="textbox">
        <div class="textbox-background">
          <div class="text">
            <h1>Deploying Digital Dominance</h1>
            <p>
              At POG Web Design LLC, our mission is to empower businesses to thrive by providing
              comprehensive website solutions. We believe in relieving our clients from the
              complexities of website management so they can focus wholeheartedly on their core
              business activities. From securing the perfect domain to crafting and maintaining
              exceptional websites, we partner with our clients every step of the way. Our
              commitment lies in delivering reliable, innovative, and personalized web solutions
              that exceed expectations, ensuring our clients achieve sustained success in the
              digital landscape.
            </p>
            <div class="banner"></div>
            <p>Check the great <a href="Pricing">Prices Here!</a></p>
            <div class="banner"></div>
            <p><a href="Contact">Schedule</a> your free consultation today!</p>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
.textbox-background {
  margin-top: 10vh;
  height: 100%;
  min-height: 84vh;
  background-size: contain;
  background-image: url(../assets/Images/TestBackground.jpg);
}
</style>
