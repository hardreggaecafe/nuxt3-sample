<template>
    <div class="flex flex-col">
        <div>
            <h1 class="m-3 text-4xl font-bold">当店のレビュー一覧</h1>
        </div>
        <ReviewList :reviews="reviews.contents" />
    </div>
</template>

<script setup lang="ts">
    const {data:reviews} = await useFetch('/api/reviewList')
</script>