# Check it out live [user-agent-parser](http://spy.julianamei.com/)

### This is a test to see how much information the browser can capture about you. I believe that if I can extract this information, then anyone can. More importantly, what are they doing with your information? Are you safe?

### Safety is number one priority. Anonymous.

# Click the button to see what I know.


## Installation Instructions
1. git clone the repository
2. Go to the freshly created directory with `cd user-agent-parser`
3. Install all dependencies with `npm install`
4. You will need a google api key. Once you have it, save it in the directory in a .env file.
5. Start the app with `npm start`

## Tech Stack
- Node.JS
- Express
- Handlebars
- NPM libraries:
... geolocator
... ua-parser-js

## MVP
[x] Return as much information about the User as possible from ua-parser-js library
[x] Return User's physical address based on IP
[ ] Run the User's google information through Whitepages Pro API and return the information

## Stretch Goals
[ ] Return social media information
[ ] Scrape government websites for court orders, bankruptcies, and arrests. 
