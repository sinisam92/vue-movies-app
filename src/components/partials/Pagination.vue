<template>
  <div class="btn-group">
    <button @click="previous" :disabled="isFirst" class="btn btn-dark">Previous</button>
    
    <button @click="next" :disabled="isLast" class="btn btn-dark">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    isFirst: {
      type: Boolean,
      required: true,
      default: true
    },
    isLast: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  methods: {
    previous() {
      this.$emit("previous");
    },
    next() {
      this.$emit("next");
    }
  }
};
</script>