export const detectReview = async () => {
    const route = useRoute();
    const id = String(route.params.id);
    
    const { data: article } = await useFetch(`/api/reviewDetail`, {
        params: { id: id },
    });
    
    if (!article.value) {
        throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
    }

    return {
        id: id,
        article: article
    }
}