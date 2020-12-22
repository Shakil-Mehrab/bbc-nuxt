<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from "@/layouts/partials/Header"
import Footer from "@/layouts/partials/Footer";

export default {
  components:{
    Header,
    Footer
  }
}
</script>

