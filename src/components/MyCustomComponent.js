import Vue from "vue";

const Component = Vue.extend({
  render: function(createElement) {
    return createElement(
      "h" + this.level, // tag name
      this.$slots.default // array of children
    );
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  // lifecycle
  created: function() {
    console.log("Inside created.");
  },
  beforeCreate: function() {
    console.log("Inside beforeCreate.");
  },
  mounted: function() {
    console.log("Inside mounted.");
  },
  beforeMount: function() {
    console.log("Inside beforeMount.");
  },
  beforeUpdate: function() {
    console.log("Inside beforeUpdate.");
  },
  updated: function() {
    console.log("Inside updated.");
  },
  beforeDestroy: function() {
    console.log("Inside beforeDestroy.");
  },
  destroyed: function() {
    console.log("Inside destroyed.");
  }
});

export default Component;
