# Isomorphic Router Boilerplate

It is a boilerplate mainly for my own personal usage. 

<br>

## Why Isomorphic?

Most **single page applications (SPA)** suffer from SEO issues due it having only 1 html page with the page being altered on the client side using Javascript. This was not an issue with **multi-page applications (MPA)** that relies on a backend server to serve different html pages. This was because google web scrappers are able to scrap the relevant content on the server side before it was even loaded. However, MPA suffers from a slower and less fluid transition between pages as the user is navigating the site. This could result in a less desirable user experience. 

Therefore, the solution was to implement the Isomorphic router where the benefits of the SPA (Fluid and fast page transition) and the MPA (SEO) are retained. 

<br>

## Built with

**Backend:**
- Node js express server
- MongoDB using mongoose 
- Passport local authentication

**Frontend:** 
- Axios 
- Universal Router
- Webpack

The frontend is basically a SPA application using the universal router to alter the exisiting html with Javascript. If you are using React.js, it could be replaced with react router instead. In development, it is bundled with webpack and opened with a webpack development server. In production, it will be served to the express server instead. Axio is used for request handling with our express server.

The backend is a express server that will serve the relevant html pages to the routes as well. This is to allow the google web scrappers to pick up the html pages (SEO). Besides that, it handles user authentication and database management.

<br>

## First time running it

- Install node_modules in 'client' and 'server' folders (npm i)
- Ask for any relevant .env file
- Run webpack development server and express server (npm run dev)
