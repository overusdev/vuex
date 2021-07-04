<template>
  <div class="home">
    <div v-if="isShow" class="loader"></div>
    <template v-else>
      <posts-form />
      <h1>{{ postsCount }}</h1>
      <div v-for="(post, i) in allPosts" :key="post.id" class="post">
        <span class="post__remove" @click="deletePost(i)">remove</span>
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import PostsForm from "../components/PostsForm";

export default {
  name: "Home",
  components: { PostsForm },
  data() {
    return {
      isLoading: false,
    };
  },
  async mounted() {
    try {
      this.isLoading = true;
      await this.fetchPosts(100);
    } finally {
      this.isLoading = false;
    }
  },
  computed: {
    ...mapGetters(["allPosts", "postsCount"]),
    isShow() {
      return this.isLoading;
    },
  },
  methods: {
    ...mapActions(["fetchPosts"]),
    ...mapMutations(["DELETE_POST"]),
    deletePost(item) {
      this.DELETE_POST(item);
    },
  },
};
</script>

<style lang="less" scoped>
.loader {
  width: 100px;
  height: 100px;
  background: #000;
}
.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.post {
  position: relative;
  width: 320px;
  border: 1px solid #ccc;
  &__remove {
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 5px;
  }
}
</style>
