const joke = document.getElementById("joke");
const btn = document.getElementById("joke-btn");

const fallbackJokes = [
    "I only know 25 letters of the alphabet. I don't know y.",
    "I used to play piano by ear, but now I use my hands.",
    "What do you call fake spaghetti? An impasta.",
    "Why do bees have sticky hair? Because they use honeycombs."
];

const getFallbackJoke = () => {
    const randomIndex = Math.floor(Math.random() * fallbackJokes.length);
    return fallbackJokes[randomIndex];
};

const fetchJoke = async () => {
    btn.disabled = true;
    joke.innerText = "Loading a fresh joke...";

    try {
        const res = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json"
            }
        });

        if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);
        }

        const data = await res.json();

        if (!data || !data.joke) {
            throw new Error("Invalid response format");
        }

        joke.innerText = data.joke;
    } catch (error) {
        console.error("Could not fetch joke:", error);
        joke.innerText = `${getFallbackJoke()} (offline mode)`;
    } finally {
        btn.disabled = false;
    }
};

fetchJoke();
btn.addEventListener("click", fetchJoke);
