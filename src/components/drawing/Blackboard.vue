<template>
  <div>
    <el-row>
      <h1>Let's draw something</h1>
    </el-row>
    <el-row>
      <el-button type="primary" @click="addDiv">New</el-button>
      <el-button type="primary" @click="connect">Connect</el-button>
    </el-row>
    <el-row>
      <div id="drawing" class="drawing-space">
        <vue-draggable-resizable v-for="node in nodes" :key="node.id" class="wh-node" :w="180" :h="70" v-on:dragging="onDrag" :resizable="false" :parent="true" :id="node.id">
          <p>{{ node.id }}</p>
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
      nodes: [],
      connections: new Set()
    }
  },
  methods: {
    onDrag: function (x, y) {
      $('.wh-node').connections('update')
    },
    addDiv () {
      this.nodes.push({id: 'node-' + (this.nodes.length + 1)})
    },
    connect () {
      for (var i = 0; i < this.nodes.length - 1; i++) {
        var n1 = this.nodes[i]
        var n2 = this.nodes[i + 1]
        var n1ID = '#' + n1.id
        var n2ID = '#' + n2.id
        var conn = n1ID + ', ' + n2ID

        if (!this.connections.has(conn)) {
          this.connections.add(conn)
          jQuery(conn).connections()
        }
      }
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

.wh-node {
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid blue;
}
</style>
