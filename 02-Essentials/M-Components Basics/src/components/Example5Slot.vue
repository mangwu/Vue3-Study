<script setup lang="js"></script>

<template>
  <div class="alert-box">
    <strong class="custom-block-title">
      This is an Error for Demo Purposes
    </strong>
    <p><slot></slot></p>
  </div>
</template>

<style scoped lang="css">
.alert-box {
  background-color: rgb(249, 249, 249);
  border-radius: 8px;
  border: 0.64px solid rgb(237, 60, 80);
  color: rgba(0, 0, 0, 0.55);
  box-sizing: border-box;
  padding: 20px 24px 4px 42px;
}
.alert-box::before {
  content: "⚠";
  color: rgb(237, 60, 80);
  position: absolute;
  top: 19px;
  left: 17px;
  font-weight: 600;
  font-size: 17px;
  box-sizing: border-box;
  opacity: 1;
}
.custom-block-title {
  display: inline-block;
  color: rgb(237, 60, 80);
  font-size: 15px;
  font-weight: 500px;
  margin-bottom: 8px;
}
p {
  margin-bottom: 16px;
}
</style>
