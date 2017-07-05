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
          <vue-draggable-resizable :w="100" :h="100" v-on:dragging="onDrag" v-on:resizing="onResize" :parent="true">
            <p>Hello! I'm a flexible component. You can drag me around and you can resize me.<br>
            X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p>
          </vue-draggable-resizable>
      </div>
    </el-row>
  </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'

export default{
  components: {VueDraggableResizable},
  data: function () {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    }
  },
  methods: {
    addDiv () {
      console.log('add a div')
    },
    onResize: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag: function (x, y) {
      this.x = x
      this.y = y
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
