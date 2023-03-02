export default defineNuxtRouteMiddleware((to, from) => {
    const gamestate = useState("gamestate");
    const word = useState("word");
    if (gamestate.value !== "GAMEEND"  && word !== "") {
        return navigateTo("/");
    }
});