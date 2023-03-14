<script lang="ts">
import Vue from 'vue';
import { blocks } from "../src/entry.esm";

export default Vue.extend({
  name: 'ServeDev',
  mixins: [blocks]
});
</script>

<template>
  <div id="app">
    <vuesualy-sample />
  </div>
</template>
