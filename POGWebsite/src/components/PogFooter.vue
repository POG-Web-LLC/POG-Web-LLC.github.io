<script setup lang="ts"></script>

<template>
  <footer>
    <div class="footer-container">
      <div class="footer-text">
        <p>Copyright © 2024 POG Web Design LLC</p>
      </div>
    </div>
  </footer>
</template>

<style lang="less" scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.footer-container {
  display: flex;
  margin: 0 auto;
  height: 6vh;
  background-color: #000000;
  border-radius: 20px 20px 0 0;
  justify-content: center;
  max-width: 1300px;
  margin: auto;
  box-sizing: border-box;
}

.footer-text {
  color: #ffffff;
}
</style>
