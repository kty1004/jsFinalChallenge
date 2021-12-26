const quotes=[
    {
        quote:"저는 재수하러 갑니다.",
        author:"KTY"
    },
    {
        quote:"이 재미있는 코딩을 두고 재수라니....",
        author:"KTY"
    },
    {
        quote: "1년 뒤에 뵈어요.",
        author: "KTY"
    },
    {
        quote:"css실력이 부족해서 예쁘게 꾸미진 못하겠습니다.",
        author: "KTY"
    }
]

const Quote = document.querySelector("#quotes span:first-child")
const Author= document.querySelector("#quotes span:last-child")

const todayQuote= quotes[Math.floor(Math.random()*quotes.length)];

Quote.innerText= todayQuote.quote
Author.innerText= todayQuote.author