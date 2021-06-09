const qoutes = [{
        author: "Madeleine L'Engle",
        qoute: "You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children."
    },
    {
        author: "Stephen King",
        qoute: "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that."
    },
    {
        author: "Anais Nin",
        qoute: "We write to taste life twice, in the moment and in retrospect."
    },
    {
        author: "Mark Twain",
        qoute: "Substitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be."
    },
    {
        author: "Toni Morrison",
        qoute: "If there's a book that you want to read, but it hasn't been written yet, then you must write it."
    },
    {
        author: "Benjamin Franklin",
        qoute: "Either write something worth reading or do something worth writing."
    },
    {
        author: "Saul Bellow",
        qoute: "You never have to change anything you got up in the middle of the night to write."
    },
    {
        author: "Robert Frost",
        qoute: "No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader."
    }
];

const randomNumber = Math.floor(Math.random() * qoutes.length);
console.log(`"${qoutes[randomNumber].qoute}"`);
console.log(`-${qoutes[randomNumber].author}`);