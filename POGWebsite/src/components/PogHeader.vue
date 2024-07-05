<script setup lang="ts">
defineProps({ centerText: Boolean })
</script>

<template>
  <header>
    <!-- <div class="image">
      <img src="/src/assets/Images/Logo.png" alt="" />
    </div> -->
    <div class="nav-container">
      <nav>
        <!-- <div class="logo">POG Web Design</div> -->

        <div class="menu-items">
          <a href="/">Home</a>
          <a href="Pricing">Prices</a>
          <a href="Contact">Contact</a>
          <a href="About">About</a>
          <!-- <a href="Templates">Templates</a> -->
        </div>
      </nav>
    </div>

    <!--End of desktop menu-->

    <div class="mobile-nav-menu">
      <div class="menu-icons">
        <img class="menu-icon" src="../assets/Images/menu.png" alt="menu-open" width="75%" />
        <img class="close-icon" src="../assets/Images/close.png" alt="menu-close" width="75%" />
      </div>
    </div>
    <div class="mobile-menu-items">
      <a href="/">Home</a>
      <a href="Pricing">Prices</a>
      <a href="Contact">Contact</a>
      <a href="About">About</a>
      <!-- <a href="Templates">Templates</a> -->
    </div>
  </header>
</template>

<style lang="less" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.nav-container {
  margin: 0 auto;
}

.nav-container nav {
  display: flex;
  height: 10vh;
  background-color: #000000;
  background-image: url(../assets/Images/Background.png);
  background-size: contain;
  background-position-x: -30px;
  background-repeat: no-repeat;
  box-shadow: 0 4px 8px -4px #000000;
  max-width: 1300px;
  margin: auto;
  align-items: end;
  justify-content: center;
  padding: 4px 48px;
  border-radius: 0 0 20px 20px;
  box-sizing: border-box;
}

.nav-container.menu-items {
  display: flex;
  align-items: center;
}

.nav-container .menu-items > a {
  color: #ffffff;
  margin: 0 24px;
  font-size: 24px;
  text-decoration: none;
  position: relative;
  padding-left: 2%;
}

.nav-container .menu-items > a:hover {
  font-size: 200%;
  color: #7ed957;
  background: #00000030;
}

/*This hides the mobile nav in desktop view*/
.mobile-nav-menu,
.mobile-menu-items {
  display: none;
}

/*This is the Mobile version of the header*/

@media (max-width: 700px) {
  .nav-container {
    display: none;
  }

  .mobile-nav-menu {
    position: fixed;
    height: 10vh;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    padding: 0px;
    background-image: url('../assets/Images/Background.png');
    background-position: 0;
    background-size: 100%;
    background-repeat: no-repeat;
    box-shadow: 0 4px 16px -4px #000000;
    z-index: 100;
  }

  .mobile-nav-menu .menu-icons img {
    position: relative;
    padding-top: 5vh;
    margin: 8px;
    height: 36px;
  }

  .mobile-nav-menu .menu-icons .close-icon {
    display: none;
  }

  .mobile-nav-menu.active .menu-icons .close-icon {
    display: block;
  }

  .mobile-nav-menu.active .menu-icons .menu-icon {
    display: none;
  }

  .mobile-menu-items {
    position: fixed;
    height: 13.5vh;
    width: 100px;
    top: -100vh;
    left: 15px;
    display: flex;
    justify-content: left;
    flex-direction: column;
    padding-top: 5 px;
    transition: 250ms ease-in-out;
  }

  .mobile-nav-menu.active + .mobile-menu-items {
    top: 10vh;
    background: #000000af;
  }

  .mobile-menu-items a {
    padding: 3px;
    font-size: 20px;
    text-decoration: none;
    color: #ffffff;
  }

  .mobile-menu-items a:hover {
    font-size: 22px;
    background: #ffffff0f;
  }
}

@media (max-width: 400px) {
  .nav-container {
    display: none;
  }

  .mobile-nav-menu {
    position: fixed;
    height: 10vh;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    padding: 0px;
    background-image: url('../assets/Images/Background.png');
    background-position: 0;
    background-size: 100%;
    background-repeat: no-repeat;
    box-shadow: 0 4px 16px -4px #000000;
    z-index: 100;
  }

  .mobile-nav-menu .menu-icons img {
    position: relative;
    padding-top: 5vh;
    margin: 8px 0 4px 10px;
    height: 36px;
  }

  .mobile-nav-menu .menu-icons .close-icon {
    display: none;
  }

  .mobile-nav-menu.active .menu-icons .close-icon {
    display: block;
  }

  .mobile-nav-menu.active .menu-icons .menu-icon {
    display: none;
  }

  .mobile-menu-items {
    position: fixed;
    height: 17.5vh;
    width: 100px;
    top: -100vh;
    left: 15px;
    display: flex;
    justify-content: left;
    flex-direction: column;
    padding-top: 7px;
    transition: 250ms ease-in-out;
  }

  .mobile-nav-menu.active + .mobile-menu-items {
    top: 10vh;
    background: #000000af;
  }

  .mobile-menu-items a {
    padding: 3px;
    font-size: 20px;
    text-decoration: none;
    color: #ffffff;
  }

  .mobile-menu-items a:hover {
    font-size: 22px;
    background: #ffffff0f;
  }
}
</style>
