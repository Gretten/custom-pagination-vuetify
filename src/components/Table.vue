<template>
<div>
  <v-data-table
    :headers="headers"
    :items="rows"
    :items-per-page="10"
    class="elevation-1"
    hide-default-footer
  ></v-data-table>
    <Pagination 
        :length="paginationLength"
        @refreshed="refresh"
    />
</div>
</template>

<script>
import { fetchPartOf } from '@/api/api.js'
import Pagination from '@/components/Pagination.vue'

  export default {
    components: {
        Pagination,
    },
    data () {
      return {
        headers: [
          {
            text: 'Index',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'ID', value: 'id' },

        ],
        rows: [],
        paginationLength: 0,
      }
    },
    methods: {
        refresh(e) {
          fetchPartOf(e)
            .then(res => {
              this.rows = res.data
              this.paginationLength = res.length;
              console.log(e)
            })
        }
    },
      created: function () {
            fetchPartOf(0)
                .then(res => {
                    this.rows = res.data;
                    this.paginationLength = res.length;
                    console.log(this.paginationLength)
            })
        }
    }
</script>


<style lang="scss" scoped>

</style>