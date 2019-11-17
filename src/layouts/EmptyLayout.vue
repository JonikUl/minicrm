<template>
  <div class="grey darken-1 empty-layout">
    <router-view />
  </div>
</template>

<script>
import messages from "@/utils/messages";
import localizeFilter from "../filters/localize.filter";

export default {
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {
    error(fbError) {
      this.$error(
        messages[fbError.code] || localizeFilter("SomethingWentWrong")
      );
    }
  }
};
</script>
