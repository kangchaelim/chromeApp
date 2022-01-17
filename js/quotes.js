const quotes = [
    {
        quote : "It is better to fail in originality than to succeed in imitation.",
        author : "Herman Melville"
    },
    {
        quote : "All progress takes place outside the comfort zone.",
        author : "Michael John Bobak"
    },
    {
        quote : "Grind Hard, Shine Hard.",
        author : "Dwayne Johnson"
    },
    {
        quote : "Success seems to be connected with action. Successful people keep moving.",
        author : "Nikos Kazantzakis"
    },
    {
        quote : "In order to succeed, we must first believe that we can.",
        author : "Herman Melville"
    },
    {
        quote : "All that really belongs to us is time; even he who has nothing else has that.",
        author : "Baltasar Gracian"
    },
    {
        quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author : "Nelson"
    },
    {
        quote : "Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down.",
        author : "Oprah Winfrey"
    },
    {
        quote : "Let's go invent tomorrow rather than worrying about what happened yesterday.",
        author : "Steve Jobs"
    },
    {
        quote : "Lucky is a matter of preparation meeting opportunity",
        author : "Seneca"
    },

]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length-1)]

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

