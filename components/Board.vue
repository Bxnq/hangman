<template>
    <div class="brounded-15 bg-light-200 rounded-15">
        <img :src="img" class="rounded-15 bg-light-200">
    </div>
</template>

<script setup>
const fails = useState('fails', () => 0);
const img = computed(() => `/svg/manstate${fails.value}.svg`);
</script>