<template>
  <li v-bind:class='{"active":current}'>
    <a v-show="type === 'link'" v-on:click.prevent="changePage(text)">{{ text }}</a>
    <a v-show="type === 'ellipsis'">{{ text }}</a>
  </li>
</template>

<script>
export default {
  props: {
    current: Boolean,
    text: [String, Number],
    type: String,
    onclick: Function
  },
  methods: {
    changePage: function (page) {
      this.onclick(page)
    }
  }
}
</script>
