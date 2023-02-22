<script>
    export let data;
</script>
<h1>blog post</h1>
https://learn.svelte.dev/tutorial/page-data
<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>