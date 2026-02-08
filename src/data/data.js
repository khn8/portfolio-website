export const data=[
    {
        id:1,
        slug: "weather-clothing-recommendation",
        name:"Weather Clothing Recommendation",
        subtitle:"Full-Stack Web Application",
        launchDate:"January 2026",
        image:"weather-cloth-rec",
        imageExt:"png",
        github:"https://github.com/khang2001/weather-cloth-rec",
        liveUrl: "https://khang2001.github.io/weather-cloth-rec/",
        tech:"React, FastAPI, PostgreSQL, Python, Tailwind CSS",
        description:"A full-stack web application that provides personalized clothing recommendations based on real-time weather data, user preferences, and comfort levels. Features user authentication, location management, and a custom scoring algorithm.",
        fullDescription: {
            background: "This project was born from a simple daily question: 'What should I wear today?' As someone who wanted to combine weather data with personal comfort preferences, I built a comprehensive solution that goes beyond simple temperature readings to provide truly personalized clothing recommendations.",
            challenge: "The main technical challenge was developing a scoring algorithm that could accurately translate weather conditions into actionable clothing recommendations. I needed to account for temperature, wind speed, forecast conditions, and individual user preferences—all while maintaining real-time performance.",
            solution: "I implemented a custom 0-10 comfort score system that combines multiple weather factors with user-specific settings. The backend uses FastAPI for fast API responses, PostgreSQL for reliable data storage, and integrates with the National Weather Service API for accurate weather data.",
            features: [
                "User authentication system with secure password handling",
                "Real-time weather data integration from National Weather Service API",
                "Custom 0-10 comfort scoring algorithm",
                "Personal clothing wardrobe management with ratings",
                "Multiple saved locations with custom icons",
                "Geolocation support for current location detection",
                "Responsive Hero UI component library implementation"
            ],
            techDetails: [
                "Built RESTful API with FastAPI and Python",
                "PostgreSQL database with SQLAlchemy ORM",
                "React frontend with Vite for fast development",
                "Tailwind CSS for responsive styling",
                "Hero UI component library for consistent design",
                "Reverse geocoding for location name resolution"
            ]
        }
    },
    {
        id:2,
        slug: "gamerekt",
        name:"GameRekt",
        subtitle:"Game Social Platform",
        launchDate:"December 2025",
        image:"GameRekt",
        imageExt:"png",
        github:"https://github.com/khn8/GameRekt",
        liveUrl: null,
        tech:"React, Tailwind CSS, Flask, Python",
        description:"A game-related social platform featuring user profiles, game reviews, and personalized recommendations. Includes a robust database structure for user data and game information.",
        fullDescription: {
            background: "GameRekt was created to address the need for a centralized platform where gamers could discover, review, and discuss games with a community of like-minded enthusiasts.",
            challenge: "Building a scalable recommendation system that could process user preferences and game data to provide meaningful suggestions was the primary technical challenge.",
            solution: "I developed a Flask-based backend with a sophisticated database schema to handle user profiles, game data, and reviews. The frontend uses React for a smooth, interactive user experience.",
            features: [
                "User profile management",
                "Game reviews and ratings",
                "Personalized game recommendations",
                "Social features for community interaction",
                "Responsive design for all devices"
            ],
            techDetails: [
                "Flask Python backend",
                "React frontend with modern hooks",
                "Tailwind CSS for styling",
                "RESTful API architecture",
                "Database design for user and game data"
            ]
        }
    },

]