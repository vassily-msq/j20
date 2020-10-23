// console.log("testing");

// Get quote from API
async function getQuote() {
  // Call a proxi api forst
  // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const proxyUrl = "https://yacdn.org/";
  const apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
  try {
    // Use both api Url and proxy urls
    const response = await fetch(proxyUrl + apiUrl);
    // const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    
  } catch (error) {
    // getQuote();
    console.log('Whoops, no quote!', error);
  }

}

getQuote();