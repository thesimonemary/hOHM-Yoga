# hOHM Yoga Web App

A simple and beautiful yoga web application built with HTML, CSS, JavaScript, and Node.js.

## Getting Started

### Prerequisites
- Node.js installed on your computer ([Download here](https://nodejs.org/))

### Installation

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Start the server:**
   ```
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

## Project Structure

```
hOHM Yoga/
├── public/          # Frontend files
│   ├── index.html   # Main HTML file
│   ├── css/
│   │   └── style.css # Styles
│   └── js/
│       └── main.js   # JavaScript functionality
├── server.js        # Node.js server
├── package.json     # Dependencies
└── README.md        # This file
```

## Features

- 🏠 Beautiful homepage with hero section
- 📱 Responsive design (works on mobile and desktop)
- 🧘 Yoga class information
- 📧 Contact form
- ✨ Smooth scrolling navigation

## Deployment

### Deploy to Vercel

This app is configured for easy deployment to Vercel:

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/hohm-yoga.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the configuration
   - Click "Deploy"
   - Your app will be live in seconds! 🎉

### Alternative: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel
```

## Next Steps

- Add more pages (class schedules, instructor profiles)
- Connect to a database
- Add user authentication
- Implement booking system

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Node.js
- Express.js
- Vercel (Deployment)

---

Happy coding! 🧘✨
