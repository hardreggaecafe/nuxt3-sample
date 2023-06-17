<script setup lang="ts">
import { ref } from 'vue'

    const formData = ref({
        title: 'Title',
        body: 'Some text',
    })

    const submitForm = async () => {
        await useFetch('/api/reviewCreate', {
        method: 'post',
        body: { 
          title: formData.value.title,
          body: formData.value.body,
        }
    })
    await navigateTo('/lists/')
}
</script>

<template>
    <div class="flex flex-col">
        <form @submit.prevent="submitForm">
            <div>
                <input class="bg-gray-50 border" v-model="formData.title" type="text" name="title">
            </div>
            <div>
                <textarea cols=20 rows=10 class="bg-gray-50 border" v-model="formData.body" name="body">some review</textarea>
            </div>
            <button class="button-blue">送信</button>
        </form>
    </div>
</template>