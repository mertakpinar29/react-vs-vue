<template>
  <div class="container" style="text-align: center">
    <h1>Vue App</h1>
    <form @submit.prevent="fetchImages">
      <input v-model="text" type='text' class="u-full-width">
      <button type="submit" class="button-primary">SUBMIT</button> 
    </form>
    <h1>{{text}}</h1>
    <img
      style="width: 100%"
      v-for="image in images"
      :key="image"
      :src="image"
      >
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const text = ref('')
    const images = ref([])

    const fetchImages = async () => {
      const response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${text.value}`)
      const json =  await response.json()
      images.value = json.map((character) => character.img)
  }

    return {
      text,
      images,
      fetchImages
    }
  }
}
</script>
