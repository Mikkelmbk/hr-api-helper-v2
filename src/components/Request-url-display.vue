<template>
  <div class="c-request-url__container">
      <p class="c-request-url__content">{{ url }}</p>
  </div>
</template>

<script>
export default {
    name: 'Request-url-display',
    props: {
      url:String
    }
}
</script>

<style scoped>
  .c-request-url__content{
    color: var(--primary-elem-color);
    font-size:1rem;
  }

  .c-request-url__container{
    background-color: var(--primary-elem-bg-color);
    min-height:100px;
    padding:20px;
    border-radius:var(--primary-layout-elem-border-radius);
    display:flex;
    align-items:center;
  }

</style>