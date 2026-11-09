# A Little World of Maisha ♡

A responsive birthday surprise website made with HTML, CSS and vanilla JavaScript.

## 1) Open the project
1. Extract `Maisha-Birthday-Surprise.zip`.
2. Open the extracted folder in Visual Studio Code.
3. Open `index.html` in a browser. Recommended: install the **Live Server** extension in VS Code, right-click `index.html`, then choose **Open with Live Server**.

## 2) Add photos
Put three image files in `assets/images/` and name them exactly:
- `photo-1.jpg`
- `photo-2.jpg`
- `photo-3.jpg`

If your photos are PNG, either convert them to JPG or update the matching image filename in `index.html`.

Only use photos Maisha is comfortable having shared.

## 3) Add background music
Add an audio file you have permission to use to `assets/music/` and name it `your-song.mp3`.
The music button starts playback after a click because browsers block automatic audio playback. Keep the music gentle and at a comfortable volume.

## 4) Personalize the note
Open `index.html` and find the section named `A little letter for you` and `ONE LAST LITTLE SURPRISE`. Edit the paragraphs to sound like you. Keep the message honest and kind; there's no need to pressure her to respond.

## 5) Change the birthday
The countdown is set to November 21 every year in `js/script.js`. It automatically counts down to the next November 21 using the visitor's local time.

## 6) Publish it
You can host the folder as a static website using GitHub Pages or Netlify. Upload the whole folder contents; do not upload only `index.html`, because the CSS, JavaScript, photos and music are separate files.

## Folder structure
```text
Maisha-Birthday-Surprise/
├── index.html
├── css/style.css
├── js/script.js
├── assets/
│   ├── images/   (add photo-1.jpg, photo-2.jpg, photo-3.jpg)
│   └── music/    (add your-song.mp3)
└── README.md
```

## Notes
- No backend or database is required.
- Internet is needed to load the Google Fonts. The site still works with fallback fonts offline.
- Test on both desktop and mobile before sharing.
