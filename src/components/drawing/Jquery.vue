<template>
  <div>
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box1 box3"></div>
  </div>
</template>

<script>
export default {
  mounted () {
    jQuery('.box1').connections({ to: '.box2' })
    jQuery('.box2').connections({ to: '.box3' })
  }
}

</script>

<style>
.box1{
  background-color: yellow;
  border: 1px solid black;
  width: 100px;
  height: 80px;
}

.box2{
  background-color: tan;
  border: 1px solid blue;
  width: 50px;
  height: 100px;
  margin: 100px
}

.box3{
  position: absolute;
  right: 100px;
  top: 50px;
}
</style>
