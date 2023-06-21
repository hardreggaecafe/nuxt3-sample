<script setup lang="ts">
const review = await detectReview()
</script>

<template>
    <div class="flex flex-col">
        <h1 class="title text-2xl font-bold">{{ review.article.value.title }}</h1>
        <div class="p-3 md">{{ review.article.value.body }}</div>
        <nuxt-link class="button-blue" :to="`${review.id}/edit`">更新</nuxt-link>
    </div>
</template>