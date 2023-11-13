function generate() {
  var quotes = {
    "- Albert Einstein":
      '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it\'s beauty."',
    "― Pierce Brown, Red Rising":
      '"Man cannot be freed by the same injustice that enslaved it."',
    "― Deepak Chopra":
      '"Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions."',
  };

  var authors = Object.keys(quotes);

  var author = authors[Math.floor(Math.random() * authors.length)];

  var quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;

  console.log(authors);
}
