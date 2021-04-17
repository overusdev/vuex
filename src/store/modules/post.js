export default {
  state: {
    // posts: [],
    posts: JSON.parse(localStorage.getItem("posts") || "[]"),
  },
  actions: {
    // async fetchPosts(ctx, limit = 3) {
    //   const res = await fetch(
    //     `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    //   );
    //   const posts = await res.json();
    //   ctx.commit("UPDATE_POSTS", posts);
    // },
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
