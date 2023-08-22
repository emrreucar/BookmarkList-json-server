<template>
  <div class="form-area card border p-2 mt-2">
    <div class="mb-3">
      <label for="title" class="form-label">Başlık</label>
      <input
        type="text"
        class="form-control"
        id="title"
        placeholder="meredev..."
        v-model="userData.title"
      />
    </div>
    <div class="mb-3">
      <label for="url" class="form-label">URL</label>
      <input
        type="text"
        class="form-control"
        id="url"
        placeholder="https://..."
        v-model="userData.url"
      />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Açıklama</label>
      <textarea
        class="form-control"
        id="description"
        placeholder="Bu var ya..."
        rows="3"
        v-model="userData.description"
      ></textarea>
    </div>
    <div class="d-flex justify-content-end align-items-center">
      <button
        @click="$router.push({ name: 'HomePage' })"
        class="btn btn-sm btn-danger mr-4"
      >
        İptal
      </button>
      <button class="btn btn-sm btn-primary" @click="onSave">Kaydet</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        title: null,
        url: null,
        description: null,
      },
    };
  },
  methods: {
    onSave() {
      console.log(this.userData);
      this.$appAxios
        .post("/bookmarks", this.userData)
        .then((response) => {
          console.log(response.data);
          this.resetData();
          this.$router.push("/");
        });
    },
    resetData(){
      Object.keys(this.userData).forEach(key => (this.userData[key] = null));
    }
  },
};
</script>
