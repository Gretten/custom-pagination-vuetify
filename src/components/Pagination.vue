<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="this.length"
      :total-visible="5"
      @input="getNext"
    ></v-pagination>
  </div>
</template>

<script>
    export default {
        props:['length'],
        data() {
            return {
                page: 1,
            }
        },
        methods: {
            getNext(e) {
                let index = e > 1 ? e * 10 : 0;
                this.$emit('refreshed', index)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>