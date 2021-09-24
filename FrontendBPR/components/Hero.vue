<template>
  <div class="container">
    <div class="image-wrapper">
        <img src="../assets/images/homepage_background.png" alt="homepage_background">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
*{
    margin:0 !important;
}
.container{
    height:$tablet;
    margin:0px !important;
    padding:0px !important;
}

.image-wrapper{
  position: absolute;
  z-index: 1;
  width: 100%;
  height:100%;

    img{
        width: 100%;
        height:100%;
        object-fit: fill;
    }
}

</style>