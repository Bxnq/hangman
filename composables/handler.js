export const useHandler = () => {
    const gamestate = useState("gamestate", () => "INGAME");
    const fails = useState("fails", () => 0);
    const guessingWord = useState("wordguess", () => "LOADING ...");
    const usedLetters = useState("usedLetters", () => []);
    const word = useState("word");
    const difficulty = "EASY";
    const router = useRouter();

    const easy = [
        "quiet",
        "upon",
        "nor",
        "am",
        "mighty",
        "beauty",
        "climate",
        "mission",
        "customs",
        "fallen",
        "brown",
        "leave",
        "wooden",
        "duck",
        "single",
        "distant",
        "fur",
        "wild",
        "running",
        "distant",
        "lips",
        "enough",
        "where",
        "ask",
        "spent",
        "branch",
        "balance",
        "beside",
        "salt",
        "energy",
        "fur",
        "beyond",
        "doctor",
        "final",
        "obtain",
        "beneath",
        "breath",
        "quiet",
        "mirror",
        "escape",
        "adult",
        "wild",
        "stairs",
        "occur",
        "women",
        "command",
        "require",
        "smaller",
        "growth",
        "trunk",
        "think",
        "cold",
        "lake",
        "layers",
        "had",
        "smile",
        "twenty",
        "sale",
        "citizen",
        "aboard",
        "eye",
        "spend",
        "perhaps",
        "was",
        "life",
        "coat",
        "picture",
        "nearest",
        "began",
        "goes",
        "carry",
        "somehow",
        "said",
        "rope",
        "captain",
        "queen",
        "motion",
        "forth",
        "means",
        "twice",
        "victory",
        "old",
        "known",
        "youth",
        "western",
        "share",
        "pour",
        "grew",
        "that",
        "easier",
        "gas",
        "poor",
        "lie",
        "aware",
        "blue",
        "tide",
        "differ",
        "capital",
        "event",
        "chest",
        "longer",
        "fact",
        "realize",
        "biggest",
        "horn",
        "using",
        "stiff",
        "due",
        "enough",
        "youth",
        "grow",
        "bear",
        "please",
        "plus",
        "meant",
        "split",
        "putting",
        "been",
        "hour",
        "secret",
        "river",
        "forty",
        "death",
        "spoken",
        "water",
        "magic",
        "fox",
        "brown",
        "fun",
        "during",
        "want",
        "younger",
        "include",
        "highest",
        "some",
        "shall",
        "build",
        "upon",
        "metal",
        "hearing",
        "leather",
        "buffalo",
        "got",
        "badly",
        "think",
        "series",
        "body",
        "grade",
        "suppose",
        "total",
        "strike",
        "dot",
        "sitting",
        "area",
        "freedom",
        "center",
        "lower",
        "gun",
        "dirt",
        "shelter",
        "wheat",
        "remove",
        "room",
        "touch",
        "real",
        "forward",
        "pool",
        "get",
        "orange",
        "rod",
        "plant",
        "are",
        "angle",
        "goes",
        "say",
        "teach",
        "line",
        "ill",
        "title",
        "nation",
        "limited",
        "buffalo",
        "stepped",
        "me",
        "evening",
        "closer",
        "water",
        "partly",
        "closer",
        "log",
        "along",
        "cheese",
        "gas",
        "lack",
        "rice",
        "dry",
        "fifty",
        "putting",
        "bridge",
        "thin",
        "line",
        "glad",
        "garden",
        "note",
        "pride",
        "weight",
        "harder",
        "change",
        "jungle",
        "wrote",
        "ground",
        "halfway",
        "season",
        "born",
        "enemy",
        "want",
        "go",
        "this",
        "reader",
        "heard",
        "nervous",
        "village",
        "law",
        "where",
        "nature",
        "laid",
        "twelve",
        "having",
        "enter",
        "clock",
        "donkey",
        "silly",
        "ask",
        "careful",
        "short",
        "contain",
        "forget",
        "stay",
        "history",
        "allow",
        "eight",
        "shoe",
        "go",
        "secret",
        "tongue",
        "get",
        "aid",
        "salmon",
        "nearer",
        "frog",
    ];

    const mid = [
        "glad",
        "disappear",
        "spoken",
        "wing",
        "official",
        "were",
        "education",
        "fox",
        "faster",
        "storm",
        "done",
        "whispered",
        "evening",
        "vertical",
        "edge",
        "still",
        "men",
        "led",
        "luck",
        "free",
        "sang",
        "fort",
        "radio",
        "return",
        "darkness",
        "quick",
        "rod",
        "stairs",
        "nose",
        "leather",
        "oxygen",
        "century",
        "tobacco",
        "look",
        "available",
        "train",
        "very",
        "copy",
        "butter",
        "calm",
        "putting",
        "ear",
        "dead",
        "sentence",
        "disappear",
        "typical",
        "anywhere",
        "giving",
        "burst",
        "transportation",
        "simply",
        "too",
        "pain",
        "variety",
        "love",
        "land",
        "union",
        "garden",
        "sign",
        "moving",
        "herd",
        "did",
        "satisfied",
        "ring",
        "kids",
        "expect",
        "gone",
        "fifth",
        "surprise",
        "chest",
        "smile",
        "wore",
        "fuel",
        "nation",
        "grandmother",
        "cow",
        "room",
        "memory",
        "pile",
        "yard",
        "eye",
        "planet",
        "settle",
        "produce",
        "science",
        "pure",
        "government",
        "choice",
        "vegetable",
        "cat",
        "apartment",
        "rear",
        "pan",
        "sentence",
        "young",
        "medicine",
        "chicken",
        "church",
        "shirt",
        "seed",
        "rear",
        "rocket",
        "just",
        "rain",
        "love",
        "atom",
        "afternoon",
        "began",
        "accident",
        "fort",
        "eaten",
        "cage",
        "pair",
        "south",
        "tube",
        "blind",
        "period",
        "queen",
        "somebody",
        "bad",
        "fire",
        "break",
        "run",
        "nor",
        "story",
        "report",
        "noun",
        "pull",
        "move",
        "death",
        "leather",
        "put",
        "highway",
        "flight",
        "stairs",
        "continued",
        "discover",
        "various",
        "fog",
        "wagon",
        "luck",
        "settlers",
        "immediately",
        "discovery",
        "adjective",
        "dollar",
        "lunch",
        "yes",
        "happily",
        "lamp",
        "with",
        "little",
        "mighty",
        "feet",
        "hidden",
        "putting",
        "tomorrow",
        "fast",
        "straw",
        "subject",
        "face",
        "saddle",
        "consist",
        "able",
        "as",
        "grandmother",
        "sit",
        "paragraph",
        "suddenly",
        "toward",
        "only",
        "student",
        "railroad",
        "noted",
        "must",
        "cake",
        "us",
        "electricity",
        "which",
        "certain",
        "best",
        "phrase",
        "opposite",
        "printed",
        "opinion",
        "traffic",
        "baby",
        "straight",
        "dozen",
        "according",
        "by",
        "dangerous",
        "getting",
        "down",
        "facing",
        "neighborhood",
        "grass",
        "snow",
        "ring",
        "shown",
        "monkey",
        "did",
        "also",
        "condition",
        "principle",
        "surprise",
        "fun",
        "mail",
        "earth",
        "beyond",
        "television",
        "got",
        "eight",
        "consist",
        "rose",
        "once",
        "poor",
        "broke",
        "account",
        "consist",
        "finish",
        "weight",
        "environment",
        "former",
        "dropped",
        "pool",
        "complete",
        "courage",
        "sweet",
        "correctly",
        "fog",
        "eight",
        "house",
        "topic",
        "because",
        "went",
        "mother",
        "graph",
        "come",
        "heat",
        "birth",
        "way",
        "dance",
        "she",
        "wolf",
        "seat",
        "sheet",
        "when",
        "suddenly",
        "bicycle",
    ];

    const hard = [
        "track",
        "radio",
        "upward",
        "shirt",
        "apple",
        "drew",
        "become",
        "treated",
        "meal",
        "best",
        "paragraph",
        "character",
        "where",
        "exercise",
        "string",
        "whether",
        "where",
        "corner",
        "develop",
        "subject",
        "beneath",
        "wave",
        "combine",
        "like",
        "front",
        "primitive",
        "theory",
        "gift",
        "list",
        "hung",
        "than",
        "uncle",
        "shaking",
        "differ",
        "behind",
        "certainly",
        "prove",
        "anyway",
        "noise",
        "owner",
        "father",
        "sheep",
        "popular",
        "favorite",
        "number",
        "beautiful",
        "town",
        "what",
        "express",
        "business",
        "loud",
        "valley",
        "perfect",
        "swam",
        "gun",
        "car",
        "about",
        "chicken",
        "popular",
        "garden",
        "actually",
        "camera",
        "stranger",
        "salt",
        "motor",
        "value",
        "air",
        "bring",
        "anything",
        "shape",
        "hello",
        "dark",
        "birth",
        "progress",
        "nice",
        "by",
        "got",
        "such",
        "taken",
        "lovely",
        "lips",
        "wide",
        "outside",
        "beyond",
        "direction",
        "eventually",
        "as",
        "six",
        "support",
        "influence",
        "shirt",
        "draw",
        "knowledge",
        "naturally",
        "imagine",
        "led",
        "establish",
        "music",
        "old",
        "test",
        "draw",
        "bow",
        "original",
        "can",
        "but",
        "refer",
        "call",
        "single",
        "helpful",
        "yard",
        "angry",
        "becoming",
        "dollar",
        "yellow",
        "dead",
        "pitch",
        "hot",
        "strong",
        "out",
        "store",
        "club",
        "private",
        "policeman",
        "canal",
        "powerful",
        "mostly",
        "reader",
        "club",
        "rule",
        "exist",
        "change",
        "expression",
        "treated",
        "easily",
        "time",
        "newspaper",
        "stood",
        "fly",
        "wife",
        "die",
        "differ",
        "conversation",
        "fact",
        "began",
        "ourselves",
        "available",
        "organized",
        "storm",
        "these",
        "dinner",
        "seldom",
        "syllable",
        "look",
        "lips",
        "together",
        "fruit",
        "master",
        "distance",
        "voice",
        "typical",
        "could",
        "toy",
        "move",
        "should",
        "lunch",
        "valley",
        "separate",
        "know",
        "cap",
        "return",
        "missing",
        "comfortable",
        "draw",
        "pride",
        "stage",
        "frequently",
        "storm",
        "told",
        "pride",
        "rhythm",
        "refer",
        "slipped",
        "planning",
        "someone",
        "author",
        "describe",
        "floor",
        "just",
        "cup",
        "tears",
        "percent",
        "remarkable",
        "rod",
        "here",
        "breakfast",
        "grew",
        "case",
        "passage",
        "leaf",
        "every",
        "leg",
        "catch",
        "everywhere",
        "pure",
        "sweet",
        "yet",
        "college",
        "being",
        "official",
        "stay",
        "produce",
        "plain",
        "grain",
        "forty",
        "toy",
        "voice",
        "common",
        "newspaper",
        "speak",
        "afternoon",
        "built",
        "still",
        "gun",
        "sheep",
        "construction",
        "poetry",
        "happily",
        "soap",
        "brush",
        "believed",
        "thread",
        "atom",
        "silence",
        "needle",
        "composed",
        "fuel",
        "scientific",
        "mostly",
        "school",
        "very",
        "stranger",
        "river",
        "loose",
        "wheat",
        "island",
        "construction",
        "percent",
        "require",
        "degree",
        "luck",
    ];

    function play() {
        gamestate.value = "INGAME";
        fails.value = 0;
        usedLetters.value = [];

        word.value = genRandomWord();

        guessingWord.value = "";
        for (let i = 0; i < word.value.length; i++) {
            guessingWord.value += "*";
        }

        router.push('/');
    }

    function genRandomWord() {
        switch (difficulty) {
            case "EASY":
                word.value = easy[Math.floor(Math.random() * easy.length)];
                break;
            case "MID":
                word.value = mid[Math.floor(Math.random() * mid.length)];

                break;
            case "HARD":
                word.value = hard[Math.floor(Math.random() * hard.length)];
                break;
        }

        return word.value;
    }

    return { play, genRandomWord };
};
