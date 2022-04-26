<template>
  <div>
    {{ message }}
  </div>
</template>
<script>
import myMixin from '../mixins/index'
export default {
  name: "comp-header",
  mixins: [myMixin],
  created: function() {
    this.helloAgain()
  },
  data() {
    return {
      message: "hello world",
    };
  },
  methods: {
    helloAgain() {
      return this.goodbye()
    }
  }
};
</script>
<style></style>