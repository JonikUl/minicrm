<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">{{ 'CurrencyAccount' | localize }}</span>

        <p class="currency-line" v-for="cur of currencies" :key="cur">
          <span>{{ getCurrency(cur) | currency(cur) }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["rates"],
  data: () => ({
    currencies: ["RUB", "USD", "EUR"]
  }),
  computed: {
    base() {
      return (
        this.$store.getters.info.bill /
        (this.rates["RUB"] / (this.rates["EUR"] || 1))
      );
    }
  },
  methods: {
    getCurrency(currency) {
      return Math.floor(this.base * (this.rates[currency] || 1));
    }
  }
};
</script>
