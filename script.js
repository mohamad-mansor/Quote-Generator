const quote = document.getElementById("quote");
const author = document.getElementById("author");

const apiUrl = "https://api.quotable.io/random";

async function getQuote(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    quote.textContent = data.content;
    author.textContent = data.author;
  } catch (error) {
    console.error('Error fetching data:', error);
    // Optionally handle errors (e.g., display a message to the user)
  }
}

async function xPost() {
  try {
    await getQuote(apiUrl); // Ensure quote and author are updated
    const textToTweet = `${quote.textContent} - ${author.textContent}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(textToTweet)}`;
    window.open(tweetUrl, "X Window", "width=600,height=300");
  } catch (error) {
    console.error('Error preparing tweet:', error);
    // Optionally handle errors (e.g., display a message to the user)
  }
}

// Initial call to get a quote when the page loads
getQuote(apiUrl);
