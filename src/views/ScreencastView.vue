<template>
  <div class="screencast">
    <video width="600" height="400" controls>
      <source src="/src/assets/screencast.mp4" type=video/mp4>
    </video>
    <p>CSS псевдокласс :has</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .screencast > p {
    text-align: center;
  }
}
</style>
