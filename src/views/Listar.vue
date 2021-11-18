<template>
  <div class="container mr-20 mt-1">
    <b-card title="Listagem ">
      <b-table responsive :items="items"></b-table>

      <b-button pill variant="outline-danger" class="mr-1">Exclui a conversão </b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          QuantidadeConversão: "10",
          MoedaBase: "USD",
          ValorMoeda: "5.5112",
          MoedaDestino: "BRL",
          ValorConvertido: "55,09",
          DataOperação: "55,09"
        },           
      ],
    };
  },
};
</script>