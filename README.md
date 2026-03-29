# Random Jokes Generator

A simple and fun web application built by **Ayush Jha** that displays random dad jokes to brighten your day.

Live site: https://ayush-jha93.github.io/Random-Jokes-Generator/

![Project Screenshot](./screenshot.png)

*(Note: You can replace `screenshot.png` with an actual screenshot of your project.)*

---

## About The Project

This project is a "Don't Laugh Challenge" featuring a curated list of dad jokes. It presents a random joke on the screen, and with the click of a button, you can fetch a new one. It's a fantastic beginner project that demonstrates how to fetch data from an external API and manipulate the DOM with JavaScript.

The user interface is clean, simple, and responsive, ensuring a good experience on different screen sizes.

---

## Features

-   Displays a random joke on page load.
-   Fetches and displays a new joke when the "Get Another Joke" button is clicked.
-   Clean, centered, and responsive user interface.
-   A fun footer credit to the creator.

---

## Built With

This project is built using fundamental web technologies:

-   **HTML5:** For the structure and content of the web page.
-   **CSS3:** For styling the user interface, including layout, colors, and fonts.
-   **JavaScript (ES6+):** For the application's logic, including fetching jokes from an API and updating the content on the page.

---

## How It Works

The application's logic resides in `script.js`.

1.  When the page loads, or when the "Get Another Joke" button is clicked, a JavaScript function is triggered.
2.  This function uses the `fetch` API to make a `GET` request to the icanhazdadjoke API.
3.  The request headers are set to `Accept: 'application/json'` to ensure the API returns the joke in JSON format.
4.  Once the response is received, the JSON data is parsed to extract the joke text.
5.  Finally, the joke text is inserted into the HTML element with the ID `joke`, replacing the old joke.

---

## How to Use

To run this project locally, follow these steps:

1.  Clone the repository or download the files.
2.  Open the project in VS Code.
3.  Run it with the Live Server extension (recommended), or open `index.html` in your browser.

If your internet connection is unavailable, the app now shows a built-in fallback joke instead of breaking.

---

Made with :heart: by Ayush Jha.
