<template>
  <div>
      <nav ref="navbar" class="navbar" role="navigation" aria-label="Main navigation">
          <div class="links-and-name">
            <div class="website-name">Orange Bush</div>
          </div>
      </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
.navbar{
  display: flex;
  min-width: 100%;
  min-height: 80px;
  align-items: center;
  justify-content: center;
  background-color: transparent !important;
  z-index:2;
  position: absolute !important;
}

.links-and-name{
    width: 75%;
  

    .website-name{
        font-family: 'Poppins', sans-serif;
         font-size: 24px;
         color: #FBF7EA;
         font-weight: bold;
    }
}

</style>