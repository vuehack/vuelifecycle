<template>
  <div>
    <AnchorHead level = 3> "Welcome to Your Vue.js App" </AnchorHead>
  </div>
</template>

<script>
// @ is an alias to /src
import AnchorHead from "@/components/MyCustomComponent";

export default {
  name: "myPage",
  components: {
    AnchorHead
  }
};
</script>
