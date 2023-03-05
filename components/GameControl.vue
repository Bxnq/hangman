<template>
    <div class="max-w-xl">
        <h2 class="text-center font-bold">{{ guessingWord }}</h2>
        <div class="flex flex-wrap gap-15 justify-center">
            <button class="bg-light-200 hover:bg-opacity-80 p-2 rounded-5 w-12" v-for="letter in letters" :key="letter"
                @click="check(letter)" :class="usedLetters.includes(letter) ? 'bg-red' : 'disabled:bg-green'"
                :disabled="usedLetters.includes(letter) || guessingWord.includes(letter)">{{ letter }}</button>
        </div>
    </div>
</template>

<script setup>
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const fails = useState('fails');
const guessingWord = useState("wordguess");
const word = useState("word");
const usedLetters = useState("usedLetters");
const gamestate = useState("gamestate");
const router = useRouter();


const { play } = useHandler();

onMounted(() => {
    play();
})

function check(letter) {
    if (word.value.toUpperCase().indexOf(letter) == -1) {
        usedLetters.value.push(letter);
        fails.value++;
        if (fails.value > 8) {
            gamestate.value = "GAMEEND";
            router.push("/gameend");
        }
        return;
    }

    const index = word.value.toUpperCase().indexOf(letter);
    guessingWord.value = guessingWord.value.substring(0, index) + letter + guessingWord.value.substring(index + 1);

    for (let i = 0; i < word.value.length; i++) {
        if (word.value.toUpperCase().at(i) == letter) {
            guessingWord.value = guessingWord.value.substring(0, i) + letter + guessingWord.value.substring(i + 1);
        }
    }


    if (word.value.toUpperCase() === guessingWord.value) {
        gamestate.value = "GAMEEND";
        router.push("/gameend");
    }
}
</script>