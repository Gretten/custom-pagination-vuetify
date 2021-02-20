<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <Table />
      </v-container>

    </v-main>v
  </v-app>
</template>

<script>
  import Table from './components/Table';

  export default {
    name: 'App',

    components: {
      Table,
    },

    data: () => ({

    }),
  };
</script>