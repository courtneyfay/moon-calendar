<script>
	import { page } from '$app/stores';
</script>

<h1>Status: {$page.status}</h1>
<h2>Error Message: {$page.error?.message}</h2>
