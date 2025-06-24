let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Buddy!");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Buddy!");
    } else {
        speak("Good Evening Buddy!");
    }
}

window.addEventListener('load', () => {
  if (!sessionStorage.getItem('greeted')) {
    wishMe();
    sessionStorage.setItem('greeted', 'true');
  }
});


let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display="none"
    voice.style.display="block"
});

function takeCommand(message) {
    btn.style.display="flex"
    voice.style.display="none"
    if (message.includes("hello") || message.includes("hey") || message.includes("hii")) {
        speak("Hello Buddy, How can I help you?");
    } 
    else if (message.includes("who are you")) {
        speak("I am a Virtual Assistant, created by Sanika.");
    } 
    else if (message.includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://www.youtube.com/", "_blank");
    }
    else if (message.includes("open google")) {
        speak("Opening Google...");
        window.open("https://www.google.com/", "_blank");
    }
    else if (message.includes("open pokemon vortex")) {
        speak("Opening Pokemon Vortex...");
        window.open("https://www.pokemon-vortex.com/", "_blank");
    } 
    else if (message.includes("open gmail")) {
        speak("Opening Gmail...");
        window.open("https://mail.google.com/", "_blank");
    } 
    else if (message.includes("open wingz portal")) {
        speak("Opening Wingz Portal...");
        window.open("https://wingz.itvedant.com/", "_blank");
    }
    else if (message.includes("open chatgpt") || message.includes("open chat gpt") || message.includes("open openai")) {
        speak("Opening ChatGPT...");
        window.open("https://chat.openai.com/", "_blank");
    }
    else if (message.includes("open geeksforgeeks")) {
        speak("Opening GeeksforGeeks...");
        window.open("https://www.geeksforgeeks.org/", "_blank");
    }
    else if (message.includes("play bonfire by peder elias")) {
        speak("Playing Bonfire by Peder Elias");
        window.open("https://www.youtube.com/watch?v=OmBlSlfDfi0&list=RDOmBlSlfDfi0&start_radio=1", "_blank");
    }
    else if (message.includes("play blue")) {
        speak("Playing Blue");
        window.open("https://www.youtube.com/watch?v=4adZ7AguVcw&list=RD4adZ7AguVcw&start_radio=1", "_blank");
    }
    else if (message.includes("play pretty little baby")) {
        speak("Playing Pretty Little Baby");
        window.open("https://www.youtube.com/watch?v=LTsR3LfhdxI&list=RDLTsR3LfhdxI&start_radio=1", "_blank");
    }
    else if(message.includes("play a retro song")){
        speak("Playing a retro song for you");
        window.open("https://www.youtube.com/watch?v=VueN49P7JyU", "_blank");
    }
    else if(message.includes("play some different song")){
        speak("Playing a different song for you");
        window.open("https://www.youtube.com/watch?v=eGfCyG9qgC0", "_blank");
    }
    else if(message.includes("open calculator")) {
    speak("Opening calculator...");
    window.open("calculator://");
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    else{
        speak(`This is what I found on the internet regarding ${message}`);
        window.open(`https://www.google.com/search?q=${encodeURIComponent(message)}`, "_blank");
    }
}
