// ----- array of object  -> json ----------- //
var quotes = [
  {
    name: " Mark Twain",
    quote:
      " “ Good friends, good books, and a sleepy conscience: this is the ideal life. ” ",
    images: "./images/MarkTwain (2).PNG"
  },
  {
    name: "William Shakespeare",
    quote:
      " “ Love all, trust a few,Do wrong to none: be able for thine enemy Rather in power than use; and keep thy friend Under thy own life's key: be check'd for silence,But never tax'd for speech. ” ",
    images: "./images/william-shakespeare.PNG"
  },
  {
    name: "Cal Newport",
    quote:
      " “ Passion comes after you put in the hard work to become excellentat something valuable, not before. In other words, what you do for a living is much less important than how you do it. ” ",
    images: "./images/cal-newport.png"
  },
  {
    name: "J.K. Rowling",
    quote:
      " “ It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all—in which case, you fail by default.” ",
    images: "./images/J.K. Rowling.PNG"
  },
  {
    name: "Dr. Seuss",
    quote:
      " “ The more that you read, the more things you will know. The more that you learn, the more places you'll go. ” ",
    images: "./images/Dr. Seuss.PNG"
  },
  {
    name: "Bob Marley",
    quote:
      " “ Who are you to judge the life I live? I know I'm not perfect-and I don't live to be- but before you start pointing fingers...make sure you hands are clean! ” ",
    images: "./images/Bob Marley.PNG"
  },
  {
    name: "Mahatma Gandhi",
    quote:
      " “ Happiness is when what you think, what you say, and what you do are in harmony.” ",
    images: "./images/Mahatma Gandhi.PNG"
  },
  {
    name: "Nicholas Sparks",
    quote:
      " “ Sometimes you have to be apart from people you love, but that doesn't make you love them any less. Sometimes you love them more. ” ",
    images: "./images/Nicholas Sparks.PNG"
  }
];

var addBtn = document.getElementById("addBtn");
var number;
var previousNumber;
var pickedIndices = [];
// ---------------------------------------------
addBtn.onclick = function getQuote() {
  if (pickedIndices.length == quotes.length) {
    pickedIndices = [];
  }
  do {
    number = Math.floor(Math.random() * quotes.length);
  } while (number === previousNumber || pickedIndices.includes(number));

  document.getElementById("images").src = quotes[number].images;
  document.getElementById("auther").innerHTML = quotes[number].name;
  document.getElementById("quote").innerHTML = quotes[number].quote;

  previousNumber = number;
  pickedIndices.push(previousNumber);
  console.log(number);
  console.log(previousNumber);
  console.log(pickedIndices);
};

// ------------------- solution 2 ------------------

// addBtn.onclick = function getQuote() {
//   for (var i = 1; i > 0; i++) {
//     number = Math.floor(Math.random() * quotes.length);

//     if (number !== previousNumber) {
//       break;
//     }
//   }

//   document.getElementById("images").src = quotes[number].images;
//   document.getElementById("auther").innerHTML = quotes[number].name;
//   document.getElementById("quote").innerHTML = quotes[number].quote;

//   previousNumber = number; //5 4 2
// };
