<template>
  <div>
    {{ useProducts.state.products }}
  </div>
</template>

<script setup>
import { useProductsStore } from "@/store";

const useProducts = useProductsStore();
onMounted(() => {
  useProducts.getAllProducts();
});
</script>

<style lang="scss" scoped></style>
