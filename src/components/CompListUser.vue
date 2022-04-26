<template>
  <div>
    <div>
      <CompUser
        v-for="item in arrUser"
        :key="item"
        :propValue="value"
        @handleChangeProp="handleChangeProp"
      />
    </div>
    <div>
      {{ reserveString() }}
    </div>
  </div>
</template>
<script>
import CompUser from "./CompUser.vue";
export default {
  name: "comp-list-user",
  components: {
    CompUser,
  },
  data() {
    return {
      text: "list user",
      arrUser: [1, 2, 3, 4, 5],
      value: "213",
    };
  },
  computer: {
    reserveString() {
      return this.text.split(" ").reverse().join(" ");
    },
  },
  methods: {
    handleChangeProp(payload) {
      console.log(payload);
    },
  },
};
</script>
<style></style>