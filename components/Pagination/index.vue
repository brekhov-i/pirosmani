<template>
  <div class="pagination">
    <button
      class="pagination__btn pagination-btn__active"
      v-for="index in length"
      :key="index"
    >
      {{ index + 1 }}
    </button>
  </div>
</template>

<script>
import "./style.scss";
export default {
  props: ["lengthProps"],
  data: () => ({}),
  computed: {
    length() {
      return Math.ceil(this.lengthProps / 4);
    },
  },
};
</script>
