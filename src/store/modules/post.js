export default {
  state: {
    // posts: [],
    posts: JSON.parse(localStorage.getItem("posts") || "[]"),
  },
  actions: {
    async fetchPosts(ctx) {
      const res = await fetch(`/posts`);
      const json = await res.json();
      ctx.commit("UPDATE_POSTS", json.posts);
    },
  },
  mutations: {
    UPDATE_POSTS(state, posts) {
      state.posts = posts;
    },
    CREATE_POST(state, newPost) {
      state.posts.unshift(newPost);

      localStorage.setItem("posts", JSON.stringify(state.posts));
    },
    DELETE_POST(state, index) {
      const posts = JSON.parse(localStorage.getItem("posts"));
      state.posts.splice(index, 0);
      posts.splice(index, 0);
      console.log(posts);
    },
  },
  getters: {
    allPosts(state) {
      return state.posts;
    },
    postsCount(state) {
      return state.posts.length;
    },
  },
};
