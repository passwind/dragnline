<template>
  <div>
    <el-row>
      <h1>Let's draw something</h1>
    </el-row>
    <el-row>
      <el-button type="primary" @click="addDiv">New</el-button>
    </el-row>
    <el-row>
      <div class="drawing-space">
      </div>
    </el-row>
  </div>
</template>

<script>
export default{
  methods: {
    addDiv () {
      console.log('add a div')
    }
  }
}
</script>

<style>
.drawing-space {
  margin: 0 auto;
  width: 800px;
  height: 600px;
  background: #f2f4fa;
  background-image: radial-gradient(#c6cad1 2px, transparent 0);
  background-size: 20px 20px;
}
</style>
