<template>
  <li v-class:class='{"active":current}'>
    <a v-show="type === 'link'" v-on:click.prevent="changePage(page.text)">{{ page.text }}</a>
    <a v-show="type === 'ellipsis'">{{ page.text }}</a>
  </li>
</template>

<script>
export default {
  props: {
    current: false,
    text: '',
    type: 'link'
  }
}
</script>
