<script setup lang="ts">
defineProps({ centerText: Boolean })
</script>

<template>
  <body>
    <!-- <div class="image">
      <img src="/src/assets/Images/Logo.png" alt="" />
    </div> -->
    <div class="nav-container">
      <nav>
        <!-- <div class="logo">POG Web Design</div> -->

        <div class="menu-items">
          <a href="/">Home</a>
          <a href="about">About</a>
          <a href="Templates">Templates</a>
          <a href="Contact">Contact</a>
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
      <a href="about">About</a>
      <a href="Templates">Templates</a>
      <a href="Contact">Contact</a>
    </div>
  </body>
</template>

<style lang="less" scoped>
.nav-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.nav-container nav {
  min-height: 10vh;
  background-color: #000000;
  background-image: url(../assets/Images/Background.png);
  background-size: contain;
  background-position-x: -30px;
  background-repeat: no-repeat;
  box-shadow: 0 4px 8px -4px black;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: end;
  justify-content: center;
  padding: 4px 48px;
  border-radius: 0 0 20px 20px;
  box-sizing: border-box;
}

.nav-container nav .logo {
  font-size: 30px;
  font-weight: 900;
  color: wheat;
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
  color: #7ed957;
}

.header-wrapper {
  background: linear-gradient(135deg, #000000 0%, #7ed957 0%, #0097b2 50%, #000000 100%);
}

.my-header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1100px;
  height: 100vh;
}

.my-header h1 {
  font-size: 65px;
  font-weight: 100;
  margin: 0;
}

.my-header .sub-heading p {
  background: yellow;
  padding: 18px 32px;
}

.my-header .button .btn {
  text-decoration: none;
  background: white;
  margin: 2vh;
  padding: 12px 30px;
  border-radius: 30px;
  color: red;
  display: inline-block;
  box-shadow: 0 4px 24px -8px #000000;
}

.my-header .button .btn:hover {
  transform: scale(1.05);
}

.my-header .image img {
  height: 150px;
  vertical-align: middle;
}

.my-header .image {
  align-self: center;
  position: relative;
}

/*This hides the mobile nav in desktop view*/
.mobile-nav-menu,
.mobile-menu-items {
  display: none;
}

/*This is the Mobile version of the header*/

@media (max-width: 700px) {
  .nav-container,
  .my-header .image {
    display: none;
  }

  .my-header h1 {
    font-size: 50px;
  }

  .my-header {
    padding: 32px;
    height: unset;
    min-height: 100vh;
    box-sizing: border-box;
  }

  .my-header p {
    line-height: 1.8;
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
    height: 18vh;
    width: 20%;
    top: -100vh;
    left: 15px;
    /* background: #000000a0; */
    display: flex;
    justify-content: left;
    flex-direction: column;
    padding-top: 7px;
    transition: 250ms ease-in-out;
  }

  .mobile-nav-menu.active + .mobile-menu-items {
    top: 10vh;
  }

  .mobile-menu-items a {
    padding: 3px;
    font-size: 20px;
    text-decoration: none;
    color: #000000;
  }

  .mobile-menu-items a:hover {
    font-size: 22px;
    background: #ffffff0f;
  }
}
</style>
