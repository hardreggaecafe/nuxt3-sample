<script setup lang="ts">
const route = useRoute();
const id = String(route.params.id);

const { data: article } = await useFetch(`/api/reviewDetail`, {
    params: { id: id },
});

if (!article.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

</script>

<template>
    <div class="flex flex-col">
        <form action="/api/reviewUpdate" method="post">
            <div>
                <input class="bg-gray-50 border" type="text" name="title" v-bind:value="article.title">
            </div>
            <div>
                <textarea cols=20 rows=10 class="bg-gray-50 border" name="body">{{ article.body }}</textarea>
            </div>
            <div>
                <input type="hidden" name="id" v-bind:value="article.id">
            </div>
            <input class="button-blue" type="submit" value="更新">
        </form>
    </div>
</template>