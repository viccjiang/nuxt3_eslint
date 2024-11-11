<script setup lang="ts">
const text = ref<string>('123');
text.value = 'Hello, World!';
</script>

<template>
	<div>
		{{ text }}
	</div>
</template>
