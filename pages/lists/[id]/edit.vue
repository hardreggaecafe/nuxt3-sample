<script setup lang="ts">
const review = await detectReview()

const submitForm = async () => {
    await useFetch('/api/reviewUpdate', {
        method: 'put',
        body: { 
            id: review.id,
            title: review.article.value.title,
            body: review.article.value.body,
        }
    })
    await navigateTo('/lists/')
}
</script>

<template>
    <div class="flex flex-col">
        <form @submit.prevent="submitForm">
            <div>
                <input class="bg-gray-50 border" type="text" name="title" v-model="review.article.value.title">
            </div>
            <div>
                <textarea cols=20 rows=10 class="bg-gray-50 border" name="body" v-model="review.article.value.body"></textarea>
            </div>
            <input class="button-blue" type="submit" value="更新">
        </form>
    </div>
</template>