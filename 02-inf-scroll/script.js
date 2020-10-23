const imgContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

// var photosArray = [];


// console.log("testing");
// Unsplash API
// Many Parameters, 'count' counts
const count = 10;
const apiKey = 'TyRTq9408pKo2A3BHhaTMG7VozA-ymEiYBLqDVokNWQ';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function setAttributes(element, attributes) {
  for (const key in element) {
    element.setAttribute(key, attributes[key]);
  }
}

// create elements for links and photos, add to the dom
function displayPhotos(photosArray) {
  console.log(2);
  console.log(photosArray);
  photosArray.forEach(photo => {
    console.log(3);
    const item = document.createElement('a');
    // item.setAttribute('href', photo.links.html);
    // item.setAttribute('target', '_blank');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank'
    });
    const img = document.createElement('img');
    // img.setAttribute('src', photo.urls.regular);
    // img.setAttribute('alt', photo.alt_description);
    // img.setAttribute('title', photo.alt_description);
    setAttributes(img, {
      src:photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description
    });
    // append everything
    item.appendChild(img);
    imgContainer.appendChild(item)
  });
}

// fetch request - get photos from unsplash
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const photosArray = await response.json();
    console.log(photosArray);
    console.log(1);
    displayPhotos(photosArray);


  } catch (error) {
    console.log(error);
  }
}

// Check if scrolling is near bottom of page
window.addEventListener('scroll', () => {
  console.log('scrolled');
});

// Get photos on load
// getPhotos();

