<template>
  <vue-draggable-resizable class="wh-node" :w="180" :h="70" v-on:dragging="onDrag" :resizable="false" :parent="true" :id="node.id">
    <p>{{ node.id }}</p>
  </vue-draggable-resizable>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'

export default {
  props: ['node'],
  components: {VueDraggableResizable},
  methods: {
    onDrag: function (x, y) {
      console.log('-' + x + '-' + y)
    }
  }
}
</script>

<style>
.wh-node {
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid blue;
}
</style>
