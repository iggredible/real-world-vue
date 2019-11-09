/* eslint-disable */
<template>
  <div class="icon-wrapper">
    <svg class="icon" :width="width" :height="height">
      <use v-bind="{'xlink:href':'/feather-sprite.svg#'+name}"/>
    </svg>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    name: String,
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [ Number, String ],
      default: 24
    }
  }
}
</script>

<style></style>
