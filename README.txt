LUMASTREAM — THE STORYVERSE

Files included:
- index.html: website layout and page sections
- style.css: existing responsive visual design plus trailer-player rules
- script.js: catalogue rendering, search, filters, poster resolution, embedded trailer previews, My List and form validation
- catalogue.json: catalogue data with YouTube trailer links and poster page titles
- README.txt: setup instructions

RUN THE PROJECT
1. Extract the ZIP folder.
2. Open the folder in Visual Studio Code.
3. Use Live Server or another local web server to run index.html.
4. Keep all files in the same folder so the HTML, CSS, JavaScript and JSON references work.
5. Internet connection is required for Bootstrap, fonts, online posters and YouTube previews.

FEATURES
Catalogue search and filters, dynamic JSON data loading with fallback data, title details modal, embedded YouTube trailer previews, external YouTube link, poster image lookup from Wikipedia page-image thumbnails, My List saved in localStorage, demo sign-in form validation and responsive layouts.

Poster lookup uses Wikipedia's public page-image API based on each catalogue title. If no image is available, a YouTube thumbnail is used when a trailer link exists. YouTube may prevent embedding some videos; the Open YouTube button is available as a fallback.

This is an educational website prototype. It does not host movies or create real user accounts.

The visual design uses an original comic-cinematic style; the existing CSS layout was preserved.


Movie media sources:
Poster artwork is loaded from Wikipedia page-image thumbnails using the posterSource URLs stored in catalogue.json. Trailer links use direct YouTube videos where video IDs are present; titles without verified video IDs link to a YouTube search for the official trailer.
