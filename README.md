# MEDP33100 - Final Project, Public Archive

## Live Demo

- Include a link to the live version of the project hosted on Render.

## Project Overview

- New Year Wishes Wall is an anonymous public archive where users submit short wishes for the upcoming year. Once submitted, each wish appears as a floating bubble on a shared digital wall, allowing others to explore and read them. The purpose of the project is to create a playful and hopeful space where strangers can share their goals, dreams, and intentions for the new year.

## Endpoints

GET /entries – This endpoint retrieves all the wishes stored in the database and sends them to the frontend so they can be displayed on the New Year Wishes Wall.

POST /entries – This endpoint receives a new wish submitted by a user and saves it into the database as a new entry.

GET /entries/:id – This optional endpoint retrieves a single wish based on its unique ID, which can be used when a user clicks on a bubble to see the full message.

## Technologies Used

- List the technologies and tools used in the project:
   Languages:

HTML – for structuring the webpage
CSS – for styling the layout and creating responsive designs
JavaScript – for interactivity and connecting the frontend to the API

Libraries:
GSAP – used to animate the floating bubbles on the Wishes Wall

Other Tools:
Figma – for planning and designing the layout
MongoDB Atlas – for storing all submitted wishes
Node.js & Express – for building the server and API

## Credits

Fonts:

Permanent Marker
 – Google Fonts

Aboreto
 – Google Fonts

Background Images: from google (/images/background.jpg) 

Tutorials/References:

TutsPlus Sticky Notes Tutorial

CodePen example
 for sticky note styling inspiration

Libraries:

Vanilla JS, HTML, CSS (no extra libraries besides Google Fonts)

## Future Enhancements

Add like buttons (hearts/stars) on sticky notes with a counter.

Add the ability to delete wishes.

Make sticky notes draggable again for interactivity.
