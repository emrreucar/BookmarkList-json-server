<template>
  <div class="d-flex justify-content-end">
    <button
      @click="$router.push({ name: 'NewBookmark' })"
      class="btn btn-primary btn-sm"
    >
      + Yeni Ekle
    </button>
  </div>
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">BAŞLIK</th>
        <th scope="col">URL</th>
        <th scope="col">AÇIKLAMA</th>
        <th scope="col">SİL</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="bookmark in bookmarkList" :key="bookmark.id">
        <th scope="row">{{ bookmark.id }}</th>
        <td>{{ bookmark.title }}</td>
        <td>
          <a :href="bookmark.url" target="_blank"> {{ bookmark.url }} </a>
        </td>
        <td>{{ bookmark.description }}</td>
        <td>
          <button
            @click="deleteBookmark(bookmark)"
            class="btn btn-sm btn-danger"
          >
            Sil
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      bookmarkList: [],
    };
  },
  created() {
    this.$appAxios.get("/bookmarks").then((response) => {
      this.bookmarkList = response.data || [];
      console.log(response.data);
    });
  },
  methods: {
    deleteBookmark(bookmark) {
      this.$appAxios.delete(`/bookmarks/${bookmark.id}`).then((response) => {
        if (response.status === 200) {
          this.bookmarkList = this.bookmarkList.filter(
            (b) => b.id !== bookmark.id
          );
        }
      });
    },
  },
};
</script>
