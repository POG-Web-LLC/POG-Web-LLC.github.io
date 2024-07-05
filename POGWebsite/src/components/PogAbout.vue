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
            <!-- <h1>About the Owner</h1> -->
            <p>
              <br />
              Hello! I’m Josh, the founder of POG Web Design LLC, a dedicated website engineering
              business established in June 2024. My journey into entrepreneurship began after
              serving eight years in the Marine Corps, where I honed skills in resilience,
              leadership, and adaptability. A medical discharge following an injury sustained in
              Iraq led me to pursue new challenges and opportunities in the digital realm.<br />I am
              scheduled to complete my pursuit of my bachelor's degree in Computer Science in
              December. I am passionate about leveraging my military experience and academic
              pursuits to deliver exceptional website solutions. At POG Web Design LLC, we
              specialize in guiding businesses from domain acquisition through comprehensive website
              development and ongoing management.<br />
              Beyond my professional endeavors, my greatest joys are found in my family. I am
              fortunate to share my life with my loving wife and cherished child, who inspire me
              daily to strive for excellence in all aspects of my life.<br />Thank you for visiting
              POG Web Design LLC. Whether you’re seeking innovative web solutions or simply want to
              connect, I look forward to discussing how we can deploy digital dominance for you!
            </p>
            <p>I look forward to helping your business achieve digital dominance!</p>
            <p><img src="../assets/Images/AboutImage1.jpg" width="300px" height="400px" /></p>
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
  background-attachment: fixed;
  background-image: url(../assets/Images/AboutBackground.png);
}

p {
  font-weight: 700;
}
</style>
