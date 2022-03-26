## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Design preview for the Advice generator app coding challenge](./design/desktop-preview.jpg)
![Mobile Design preview for the Advice generator app coding challenge](./design/mobile-design.jpg)
![desktop Design preview for the Advice generator app coding challenge](./design/desktop-design.jpg)
![active states Design preview for the Advice generator app coding challenge](./design/active-states.jpg)

### Links

- Solution URL: [solution URL here](https://github.com/abdellahelaajjouri/advice-app-generator)
- Live Site URL: [live site URL here](https://advice-app-generator.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Media query  
- Mobile-first workflow
- Pure javascript

### What I learned

- I learned how to work with The [The front-end checklist](https://frontendchecklist.io/)
- I learned how to work with [Advice API](https://api.adviceslip.com)

```html
<!-- Some HTML code I'm proud of -->

<!-- using semantic attribute for the quote -->
<q id="advice"></q>

<!-- Opens the linked document in a new window or tab  -->
<a target="_blank "></a>

<!-- protects sites from malicious intent, specifically the phishing attack called reverse tabnabbing. Reverse tabbing is when a malicious site uses window.  -->
<a rel="noopener "></a>

```

```css
/* proud-of-this-css */

/* declaring global custom CSS properties */
:root {
  --Light-Cyan: hsl(193, 38%, 86%);
  --Neon-Green: hsl(150, 100%, 66%);
  --Grayish-Blue: hsl(217, 19%, 38%);
  --Dark-Grayish-Blue: hsl(217, 19%, 24%);
  --Dark-Blue: hsl(218, 23%, 16%);
  --back-Blue: hsl(220, 29%, 8%);
}

/* WebKit or Blink-based applications, such as Safari and Chrome, support several -specific extensions CSS .  */

#footer {
  position: absolute;
  left: 145px;
  background-color: var(--Neon-Green);
  padding: 1em;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
}

```

```js

// Notes i'm proud of

// How AJAX work
// 1- An event occurs in web page 
// 2- XMLhttp Request object is created by javascript
// 3- The XMLhttp Request object sends a request to a web Server
// 4- The server processes the request
// 5- THE Server sends a response back to the web page 
// 6- The response is read by javascript
// 7- Proper action (like page update) is performed by Javascript 





// The onreadyState property holds the status of the XMLhttp Request.
// The onreadyStateChange property defines a function to b executed when the ready state changes .
//  the statue Property and the StatueText property holds the status of the XMLhttp Request object.

function loadData() {
    const http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.responseText);
            adviceIdContainer.textContent += data.slip.id;
            adviceContainer.textContent += data.slip.advice;
        }
    };
    http.open('GET', ' https://api.adviceslip.com/advice', true);
    http.send();

}
loadData();
```

### Continued development

- I want to continue focusing my responsive web design skills.
- I want to be more comfortable with ES6 and OOP

### Useful resources

- [Front end mentor](https://www.frontendmentor.io/home) - This helped me working on real life project such as these on .
- [Vercel](https://vercel.com/dashboard) - This is an amazing website to host your project for free.

## Author

- Github - [abdellahelaajjouri](https://github.com/abdellahelaajjouri)
- Frontend Mentor - [@abdellahelaajjouri](https://www.frontendmentor.io/profile/abdellahelaajjouri)
- Linkedin - [Abdellah Elaajjouri](https://www.linkedin.com/in/abdellah-elaajjouri-890583230/)

## Acknowledgments

I wanna thank me. “I want to thank me for doing all this hard work. I want to thank me for having no days off. I want to thank me for never quitting.
