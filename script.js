const facts = [
    "I have a passion for discovering new cultures and have visited three different countries this year.",
    "I enjoy trying out new cuisines and have cooked dishes from five different countries.",
    "I am learning a new language to better connect with people from around the world.",
    "I love technology and am always exploring the latest gadgets and apps.",
    "I am an adventurous spirit and have tried three new outdoor activities this year, including rock climbing and kayaking."
];

document.getElementById('generate-fact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];
    document.getElementById('fact-display').textContent = randomFact;
});
