<script setup lang="js">
import Example3Son from './Example3Son.vue';
</script>

<template>
  <div class="example example3">
    <example3-son
      str="Hello Vue"
      :num="52"
      boo
      :arr="[241, 54, 324]"
      :obj="{
        name: 'Veronica',
        company: 'Veridian Dynamics'
      }"
    />
  </div>
</template>

<style scoped lang="css">
.example3:hover::before {
  content: "2.3 Passing Different Value Types";
}
</style>
