<template>
  <div class="border">
    <div>
      {{ name }}
    </div>
    <div>
      {{ age }}
    </div>
    <div>
      {{ propValue }}
    </div>
    <button @click="handleChangeProp">change props</button>
  </div>
</template>
<script>
export default {
  name: "comp-user",
  props: {
      propValue: {
          type: String,
          default: '12321'
      }
  },
  data() {
    return {
      name: 'abc',
      age: 12,
    };
  },
  method: {
      handleChangeProp() {
          console.log('vao')
          this.$emit('handleChangeProp', this.name)
      }
  }
};
</script>
<style scoped>
    .border {
        border: 1px solid black;
    }
</style>