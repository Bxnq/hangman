<template>
    <div class="w-screen h-screen bg-light-100 flex flex-col justify-center items-center">
        <div class="bg-light-200 flex flex-col justify-center p-24 gap-4 rounded-15">
            <h1 class="text-center">{{ fails >= 8 ? 'You Lost!' : 'You Won!' }}</h1>
            <p class="flex justify-center">
                Fails: {{ fails }} <br>
                Word: {{ word }} <br>
                Guessed Word: {{ wordguess }} <br>
            </p>
            <button @click="restart()">restart</button>
        </div>
    </div>
</template>

<script setup>
const { play } = useHandler();
const router = useRouter();

const fails = useState("fails");
const wordguess = useState("wordguess");
const word = useState("word");


function restart() {
    play();
    router.push("/");
}
</script>