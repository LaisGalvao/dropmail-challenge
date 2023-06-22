<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
<script>
import main from '../graphql/index'
export default {
  created() {
    main(`mutation {
    introduceSession {
        id,
        expiresAt,
        addresses {
          address
        }
    }
}`)
  }
}
</script>
