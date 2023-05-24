<template>
    <context-menu id="context-menu" ref="ctxMenu">
        <li @click="doSomething($event.target.innerText)">option 1</li>
        <li class="disabled">option 2</li>
        <li>option 3</li>
      </context-menu>
</template>

<script>
import contextMenu from 'vue-context-menu'
export default {
  name: 'JournalContextMenu',
  components: { contextMenu },
  methods: { 
    doSomething(text) {
        alert("clicked");
    } 
}
}
</script>

<style>
</style>