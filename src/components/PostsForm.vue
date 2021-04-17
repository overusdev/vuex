<template>
  <form @submit.prevent="onSubmit">
    <input class="input" type="text" v-model="title" />
    <input class="input" type="text" v-model="body" />
    <button>Add post</button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "PostsForm",
  data() {
    return {
      title: "",
      body: "",
    };
  },
  methods: {
    ...mapMutations(["CREATE_POST"]),
    onSubmit() {
      this.CREATE_POST({
        title: this.title,
        body: this.body,
        id: Date.now(),
      });
      this.resetFields();
    },
    resetFields() {
      this.title = this.body = "";
    },
  },
};
</script>

<style lang="less" scoped>
.input {
  display: block;
  width: 100%;
}
</style>
