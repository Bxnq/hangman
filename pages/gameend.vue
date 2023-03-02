<template>
    <Gameend v-if="gamestate === 'GAMEEND'" />
</template>

<script setup>
const gamestate = useState("gamestate");
const word = useState("word");
const router = useRouter();

definePageMeta({
    middleware: 'gameend'
})
</script>