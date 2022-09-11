<template>
  <div>
    <ariticleltem v-for="item in articles" :key="item.art_id" :article="item" ></ariticleltem>
  </div>
</template>

<script>
import { getArticles } from '@/api'
import Ariticleltem from './Ariticleltem.vue'
export default {
  components: {
    Ariticleltem
  },
  props: {
    id: [String, Number]
  },
  data() {
    return {
      articles: []
    }
  },
  created() {
    this.getFirstPageArticle()
  },
  methods: {
    async getFirstPageArticle() {
      try {
        const { data } = await getArticles(this.id, +new Date())
        this.articles = data.data.results
        // console.log(data)
        // console.log(this.articles)
      } catch (error) {
        const status = error.response?.status
        if (!error.response || status === 507) {
          throw error
        } else {
          if (status === 400) {
            throw new Error(error.response.data.message)
          }
        }
      }
    }
  }
}
</script>

<style></style>
