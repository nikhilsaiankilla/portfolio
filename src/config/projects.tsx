export const projects = [
    {
        slug: "chill-guy",
        title: "I'm a chill guy",
        description:
            "AI-based GitHub profile roaster that analyzes repositories and generates humorous, filtered AI responses.",
        image: "https://picsum.photos/1200/1600",
        technologies: [
            "React",
            "Express",
            "Gemini API",
            "GitHub API",
            "Tailwind CSS",
            "Vercel",
            "Netlify",
        ],
        timeline: "Ongoing",
        github: "https://github.com/ramxcodes/chill-guy",
        live: "https://chillguy.ramx.in",
        role: "Full Stack",
        team: "Solo",
        status: "Completed",
        featured: false,
        challenges: [
            "GitHub API rate limiting",
            "AI prompt engineering",
            "Response content filtering",
            "Performance optimization",
        ],
        learnings: [
            "Gemini API integration",
            "GitHub API data processing",
            "AI prompt optimization",
            "Content moderation techniques",
        ],
        isPublished: true,
        publishedOn: "12/06/2002",
        content : `# I'm a Chill Guy: AI-Powered GitHub Profile Roaster

## Overview

"I'm a chill guy" is a fun AI-powered web application that analyzes GitHub profiles and delivers witty, humorous roasts based on users' coding habits, project choices, contribution patterns, and profile information. Built with React and powered by Google's Gemini AI, this project combines humor with technical analysis to create an entertaining developer experience.

## How It Works

- **Simple Input**: Users enter their GitHub username
- **Profile Analysis**: App fetches comprehensive GitHub data via GitHub API
- **AI Processing**: Gemini AI analyzes the data and generates personalized roasts
- **Instant Results**: Users receive humorous commentary about their coding journey
- **Shareable Content**: Roasts can be easily shared with friends and colleagues

## What Gets Analyzed

### **Profile Information**

- **Bio & Description**: Personal information and self-descriptions
- **Profile Picture**: Avatar choices and profile aesthetics
- **Location & Links**: Geographic info and social links
- **Account Age**: How long they've been on GitHub

### **Contribution Patterns**

- **Commit Frequency**: Daily, weekly, and monthly contribution patterns
- **Contribution Graph**: The famous green squares analysis
- **Streak Analysis**: Longest streaks and gaps in activity
- **Weekend vs Weekday**: Work-life balance in coding

### **Repository Analysis**

- **Project Types**: Languages, frameworks, and project categories
- **Repository Names**: Creative (or not so creative) naming conventions
- **README Quality**: Documentation standards and project descriptions
- **Star Counts**: Popularity of projects and social proof

### **Coding Habits**

- **Language Preferences**: Most used programming languages
- **Framework Choices**: Technology stack preferences
- **Project Completion**: Finished vs abandoned projects
- **Code Quality Indicators**: Repository maintenance and updates

## Why I Built This

I created this project for several reasons:

- **Developer Humor**: The tech community loves self-deprecating humor about coding habits
- **GitHub API Practice**: Wanted to explore comprehensive GitHub data analysis
- **AI Integration**: Experiment with Google's Gemini AI for creative content generation
- **Community Fun**: Create something that developers could share and enjoy together
- **Quick Project**: Build something entertaining in a short timeframe

## Tech Stack

### Frontend

- **React**: Modern UI library for interactive user interface
- **Tailwind CSS**: Utility-first CSS for rapid styling and responsive design
- **Vercel**: Frontend deployment with global CDN and instant deployments

### Backend

- **Express.js**: Lightweight Node.js server for API endpoints
- **Netlify**: Backend deployment for serverless function handling
- **GitHub API**: Comprehensive profile and repository data fetching
- **Gemini AI API**: Google's AI model for generating roast content

## Technical Implementation

### GitHub Data Collection

- **Profile Fetching**: Basic user information, bio, and account details
- **Repository Analysis**: Public repositories with languages, stars, and update patterns
- **Contribution Data**: Commit history and contribution graph information
- **Rate Limit Handling**: Efficient API usage within GitHub's rate limits

### AI Roast Generation

- **Prompt Engineering**: Crafted prompts to generate humorous, not offensive content
- **Context Building**: Structured data formatting for AI consumption
- **Response Processing**: Content filtering and formatting for display
- **Safety Measures**: Content moderation to ensure appropriate humor

### User Experience

- **Simple Interface**: Clean, minimal design focused on the core functionality
- **Loading States**: Engaging loading animations while processing data
- **Error Handling**: Graceful handling of invalid usernames or API errors
- **Responsive Design**: Works seamlessly across desktop and mobile devices

## Behind the Scenes

This project taught me that sometimes the best projects are the simplest ones that solve a fun problem. The combination of real data analysis with AI creativity resulted in something that developers genuinely enjoyed using and sharing. It also demonstrated the power of combining multiple APIs to create unique user experiences.

The "chill guy" was a instagram trend, so i thought why not build a website for it.
`
    },

    {
        slug: "dumcel-cloud",
        title: "Dumcel Cloud",
        description:
            "A Vercel-like deployment platform for React apps built with a microservices architecture supporting automated builds and deployments.",
        image: "/project/dumcel.png",
        technologies: [
            "Next.js",
            "Node.js",
            "Docker",
            "AWS ECS",
            "Redis",
            "Kafka",
        ],
        github: "https://github.com/yourusername/dumcel",
        live: "",
        timeline: "Ongoing",
        role: "Backend + Platform",
        team: "Solo",
        status: "Open Source",
        featured: true,
        challenges: [
            "Distributed build orchestration",
            "Containerized deployments",
            "Real-time status tracking",
            "Log ingestion at scale",
        ],
        learnings: [
            "Microservices architecture",
            "AWS ECS deployment workflows",
            "Kafka-based pipelines",
            "Infrastructure design",
        ],
        isPublished: false,
        publishedOn: "12/06/2002",
        content : `# I'm a Chill Guy: AI-Powered GitHub Profile Roaster

## Overview

"I'm a chill guy" is a fun AI-powered web application that analyzes GitHub profiles and delivers witty, humorous roasts based on users' coding habits, project choices, contribution patterns, and profile information. Built with React and powered by Google's Gemini AI, this project combines humor with technical analysis to create an entertaining developer experience.

## How It Works

- **Simple Input**: Users enter their GitHub username
- **Profile Analysis**: App fetches comprehensive GitHub data via GitHub API
- **AI Processing**: Gemini AI analyzes the data and generates personalized roasts
- **Instant Results**: Users receive humorous commentary about their coding journey
- **Shareable Content**: Roasts can be easily shared with friends and colleagues

## What Gets Analyzed

### **Profile Information**

- **Bio & Description**: Personal information and self-descriptions
- **Profile Picture**: Avatar choices and profile aesthetics
- **Location & Links**: Geographic info and social links
- **Account Age**: How long they've been on GitHub

### **Contribution Patterns**

- **Commit Frequency**: Daily, weekly, and monthly contribution patterns
- **Contribution Graph**: The famous green squares analysis
- **Streak Analysis**: Longest streaks and gaps in activity
- **Weekend vs Weekday**: Work-life balance in coding

### **Repository Analysis**

- **Project Types**: Languages, frameworks, and project categories
- **Repository Names**: Creative (or not so creative) naming conventions
- **README Quality**: Documentation standards and project descriptions
- **Star Counts**: Popularity of projects and social proof

### **Coding Habits**

- **Language Preferences**: Most used programming languages
- **Framework Choices**: Technology stack preferences
- **Project Completion**: Finished vs abandoned projects
- **Code Quality Indicators**: Repository maintenance and updates

## Why I Built This

I created this project for several reasons:

- **Developer Humor**: The tech community loves self-deprecating humor about coding habits
- **GitHub API Practice**: Wanted to explore comprehensive GitHub data analysis
- **AI Integration**: Experiment with Google's Gemini AI for creative content generation
- **Community Fun**: Create something that developers could share and enjoy together
- **Quick Project**: Build something entertaining in a short timeframe

## Tech Stack

### Frontend

- **React**: Modern UI library for interactive user interface
- **Tailwind CSS**: Utility-first CSS for rapid styling and responsive design
- **Vercel**: Frontend deployment with global CDN and instant deployments

### Backend

- **Express.js**: Lightweight Node.js server for API endpoints
- **Netlify**: Backend deployment for serverless function handling
- **GitHub API**: Comprehensive profile and repository data fetching
- **Gemini AI API**: Google's AI model for generating roast content

## Technical Implementation

### GitHub Data Collection

- **Profile Fetching**: Basic user information, bio, and account details
- **Repository Analysis**: Public repositories with languages, stars, and update patterns
- **Contribution Data**: Commit history and contribution graph information
- **Rate Limit Handling**: Efficient API usage within GitHub's rate limits

### AI Roast Generation

- **Prompt Engineering**: Crafted prompts to generate humorous, not offensive content
- **Context Building**: Structured data formatting for AI consumption
- **Response Processing**: Content filtering and formatting for display
- **Safety Measures**: Content moderation to ensure appropriate humor

### User Experience

- **Simple Interface**: Clean, minimal design focused on the core functionality
- **Loading States**: Engaging loading animations while processing data
- **Error Handling**: Graceful handling of invalid usernames or API errors
- **Responsive Design**: Works seamlessly across desktop and mobile devices

## Behind the Scenes

This project taught me that sometimes the best projects are the simplest ones that solve a fun problem. The combination of real data analysis with AI creativity resulted in something that developers genuinely enjoyed using and sharing. It also demonstrated the power of combining multiple APIs to create unique user experiences.

The "chill guy" was a instagram trend, so i thought why not build a website for it.
`
    },

    {
        slug: "visly-analytics",
        title: "Visly Analytics",
        description:
            "A privacy-first web analytics platform with a lightweight SDK, real-time ingestion pipeline, and high-performance dashboards.",
        image: "/project/visly.png",
        technologies: [
            "Next.js",
            "Node.js",
            "Kafka",
            "Redis",
            "ClickHouse",
            "PostgreSQL",
        ],
        github: "https://github.com/yourusername/visly",
        live: "",
        timeline: "Ongoing",
        role: "Full Stack",
        team: "Solo",
        status: "Building",
        featured: true,
        challenges: [
            "High-throughput event ingestion",
            "Real-time analytics",
            "SDK design",
            "Data modeling for OLAP",
        ],
        learnings: [
            "Analytics system design",
            "ClickHouse query optimization",
            "SDK architecture",
            "Event-driven systems",
        ],
        isPublished: true,
        publishedOn: "12/06/2002",
        content : `# I'm a Chill Guy: AI-Powered GitHub Profile Roaster

## Overview

"I'm a chill guy" is a fun AI-powered web application that analyzes GitHub profiles and delivers witty, humorous roasts based on users' coding habits, project choices, contribution patterns, and profile information. Built with React and powered by Google's Gemini AI, this project combines humor with technical analysis to create an entertaining developer experience.

## How It Works

- **Simple Input**: Users enter their GitHub username
- **Profile Analysis**: App fetches comprehensive GitHub data via GitHub API
- **AI Processing**: Gemini AI analyzes the data and generates personalized roasts
- **Instant Results**: Users receive humorous commentary about their coding journey
- **Shareable Content**: Roasts can be easily shared with friends and colleagues

## What Gets Analyzed

### **Profile Information**

- **Bio & Description**: Personal information and self-descriptions
- **Profile Picture**: Avatar choices and profile aesthetics
- **Location & Links**: Geographic info and social links
- **Account Age**: How long they've been on GitHub

### **Contribution Patterns**

- **Commit Frequency**: Daily, weekly, and monthly contribution patterns
- **Contribution Graph**: The famous green squares analysis
- **Streak Analysis**: Longest streaks and gaps in activity
- **Weekend vs Weekday**: Work-life balance in coding

### **Repository Analysis**

- **Project Types**: Languages, frameworks, and project categories
- **Repository Names**: Creative (or not so creative) naming conventions
- **README Quality**: Documentation standards and project descriptions
- **Star Counts**: Popularity of projects and social proof

### **Coding Habits**

- **Language Preferences**: Most used programming languages
- **Framework Choices**: Technology stack preferences
- **Project Completion**: Finished vs abandoned projects
- **Code Quality Indicators**: Repository maintenance and updates

## Why I Built This

I created this project for several reasons:

- **Developer Humor**: The tech community loves self-deprecating humor about coding habits
- **GitHub API Practice**: Wanted to explore comprehensive GitHub data analysis
- **AI Integration**: Experiment with Google's Gemini AI for creative content generation
- **Community Fun**: Create something that developers could share and enjoy together
- **Quick Project**: Build something entertaining in a short timeframe

## Tech Stack

### Frontend

- **React**: Modern UI library for interactive user interface
- **Tailwind CSS**: Utility-first CSS for rapid styling and responsive design
- **Vercel**: Frontend deployment with global CDN and instant deployments

### Backend

- **Express.js**: Lightweight Node.js server for API endpoints
- **Netlify**: Backend deployment for serverless function handling
- **GitHub API**: Comprehensive profile and repository data fetching
- **Gemini AI API**: Google's AI model for generating roast content

## Technical Implementation

### GitHub Data Collection

- **Profile Fetching**: Basic user information, bio, and account details
- **Repository Analysis**: Public repositories with languages, stars, and update patterns
- **Contribution Data**: Commit history and contribution graph information
- **Rate Limit Handling**: Efficient API usage within GitHub's rate limits

### AI Roast Generation

- **Prompt Engineering**: Crafted prompts to generate humorous, not offensive content
- **Context Building**: Structured data formatting for AI consumption
- **Response Processing**: Content filtering and formatting for display
- **Safety Measures**: Content moderation to ensure appropriate humor

### User Experience

- **Simple Interface**: Clean, minimal design focused on the core functionality
- **Loading States**: Engaging loading animations while processing data
- **Error Handling**: Graceful handling of invalid usernames or API errors
- **Responsive Design**: Works seamlessly across desktop and mobile devices

## Behind the Scenes

This project taught me that sometimes the best projects are the simplest ones that solve a fun problem. The combination of real data analysis with AI creativity resulted in something that developers genuinely enjoyed using and sharing. It also demonstrated the power of combining multiple APIs to create unique user experiences.

The "chill guy" was a instagram trend, so i thought why not build a website for it.
`
    },

    {
        slug: "job-nextly",
        title: "Job Nextly",
        description:
            "An AI-powered job application tracker that analyzes job descriptions and helps manage applications efficiently.",
        image: "/project/jobnextly.png",
        technologies: [
            "Next.js",
            "Gemini API",
            "PostgreSQL",
            "Tailwind CSS",
            "Firebase",
        ],
        github: "https://github.com/yourusername/job-nextly",
        live: "",
        timeline: "Completed",
        role: "Full Stack",
        team: "Solo",
        status: "Completed",
        featured: false,
        challenges: [
            "AI response consistency",
            "Structured job data extraction",
            "UX for tracking workflows",
        ],
        learnings: [
            "AI-assisted productivity tools",
            "Prompt structuring",
            "Data modeling for tracking systems",
        ],
        isPublished: true,
        publishedOn: "12/06/2002",
        content : `# I'm a Chill Guy: AI-Powered GitHub Profile Roaster

## Overview

"I'm a chill guy" is a fun AI-powered web application that analyzes GitHub profiles and delivers witty, humorous roasts based on users' coding habits, project choices, contribution patterns, and profile information. Built with React and powered by Google's Gemini AI, this project combines humor with technical analysis to create an entertaining developer experience.

## How It Works

- **Simple Input**: Users enter their GitHub username
- **Profile Analysis**: App fetches comprehensive GitHub data via GitHub API
- **AI Processing**: Gemini AI analyzes the data and generates personalized roasts
- **Instant Results**: Users receive humorous commentary about their coding journey
- **Shareable Content**: Roasts can be easily shared with friends and colleagues

## What Gets Analyzed

### **Profile Information**

- **Bio & Description**: Personal information and self-descriptions
- **Profile Picture**: Avatar choices and profile aesthetics
- **Location & Links**: Geographic info and social links
- **Account Age**: How long they've been on GitHub

### **Contribution Patterns**

- **Commit Frequency**: Daily, weekly, and monthly contribution patterns
- **Contribution Graph**: The famous green squares analysis
- **Streak Analysis**: Longest streaks and gaps in activity
- **Weekend vs Weekday**: Work-life balance in coding

### **Repository Analysis**

- **Project Types**: Languages, frameworks, and project categories
- **Repository Names**: Creative (or not so creative) naming conventions
- **README Quality**: Documentation standards and project descriptions
- **Star Counts**: Popularity of projects and social proof

### **Coding Habits**

- **Language Preferences**: Most used programming languages
- **Framework Choices**: Technology stack preferences
- **Project Completion**: Finished vs abandoned projects
- **Code Quality Indicators**: Repository maintenance and updates

## Why I Built This

I created this project for several reasons:

- **Developer Humor**: The tech community loves self-deprecating humor about coding habits
- **GitHub API Practice**: Wanted to explore comprehensive GitHub data analysis
- **AI Integration**: Experiment with Google's Gemini AI for creative content generation
- **Community Fun**: Create something that developers could share and enjoy together
- **Quick Project**: Build something entertaining in a short timeframe

## Tech Stack

### Frontend

- **React**: Modern UI library for interactive user interface
- **Tailwind CSS**: Utility-first CSS for rapid styling and responsive design
- **Vercel**: Frontend deployment with global CDN and instant deployments

### Backend

- **Express.js**: Lightweight Node.js server for API endpoints
- **Netlify**: Backend deployment for serverless function handling
- **GitHub API**: Comprehensive profile and repository data fetching
- **Gemini AI API**: Google's AI model for generating roast content

## Technical Implementation

### GitHub Data Collection

- **Profile Fetching**: Basic user information, bio, and account details
- **Repository Analysis**: Public repositories with languages, stars, and update patterns
- **Contribution Data**: Commit history and contribution graph information
- **Rate Limit Handling**: Efficient API usage within GitHub's rate limits

### AI Roast Generation

- **Prompt Engineering**: Crafted prompts to generate humorous, not offensive content
- **Context Building**: Structured data formatting for AI consumption
- **Response Processing**: Content filtering and formatting for display
- **Safety Measures**: Content moderation to ensure appropriate humor

### User Experience

- **Simple Interface**: Clean, minimal design focused on the core functionality
- **Loading States**: Engaging loading animations while processing data
- **Error Handling**: Graceful handling of invalid usernames or API errors
- **Responsive Design**: Works seamlessly across desktop and mobile devices

## Behind the Scenes

This project taught me that sometimes the best projects are the simplest ones that solve a fun problem. The combination of real data analysis with AI creativity resulted in something that developers genuinely enjoyed using and sharing. It also demonstrated the power of combining multiple APIs to create unique user experiences.

The "chill guy" was a instagram trend, so i thought why not build a website for it.
`
    },

    {
        slug: "comic-portfolio",
        title: "Comic Portfolio",
        description:
            "A comic-themed developer portfolio with rich micro-interactions and animated storytelling.",
        image: "/project/portfolio.png",
        technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
        github: "https://github.com/yourusername/portfolio",
        live: "https://yourportfolio.com",
        timeline: "Completed",
        role: "Frontend",
        team: "Solo",
        status: "Live",
        featured: true,
        challenges: [
            "Balancing creativity with performance",
            "Animation-heavy UI optimization",
        ],
        learnings: [
            "Advanced Framer Motion patterns",
            "Interactive UI storytelling",
        ],
        isPublished: true,
        publishedOn: "12/06/2002",
        content : `# I'm a Chill Guy: AI-Powered GitHub Profile Roaster

## Overview

"I'm a chill guy" is a fun AI-powered web application that analyzes GitHub profiles and delivers witty, humorous roasts based on users' coding habits, project choices, contribution patterns, and profile information. Built with React and powered by Google's Gemini AI, this project combines humor with technical analysis to create an entertaining developer experience.

## How It Works

- **Simple Input**: Users enter their GitHub username
- **Profile Analysis**: App fetches comprehensive GitHub data via GitHub API
- **AI Processing**: Gemini AI analyzes the data and generates personalized roasts
- **Instant Results**: Users receive humorous commentary about their coding journey
- **Shareable Content**: Roasts can be easily shared with friends and colleagues

## What Gets Analyzed

### **Profile Information**

- **Bio & Description**: Personal information and self-descriptions
- **Profile Picture**: Avatar choices and profile aesthetics
- **Location & Links**: Geographic info and social links
- **Account Age**: How long they've been on GitHub

### **Contribution Patterns**

- **Commit Frequency**: Daily, weekly, and monthly contribution patterns
- **Contribution Graph**: The famous green squares analysis
- **Streak Analysis**: Longest streaks and gaps in activity
- **Weekend vs Weekday**: Work-life balance in coding

### **Repository Analysis**

- **Project Types**: Languages, frameworks, and project categories
- **Repository Names**: Creative (or not so creative) naming conventions
- **README Quality**: Documentation standards and project descriptions
- **Star Counts**: Popularity of projects and social proof

### **Coding Habits**

- **Language Preferences**: Most used programming languages
- **Framework Choices**: Technology stack preferences
- **Project Completion**: Finished vs abandoned projects
- **Code Quality Indicators**: Repository maintenance and updates

## Why I Built This

I created this project for several reasons:

- **Developer Humor**: The tech community loves self-deprecating humor about coding habits
- **GitHub API Practice**: Wanted to explore comprehensive GitHub data analysis
- **AI Integration**: Experiment with Google's Gemini AI for creative content generation
- **Community Fun**: Create something that developers could share and enjoy together
- **Quick Project**: Build something entertaining in a short timeframe

## Tech Stack

### Frontend

- **React**: Modern UI library for interactive user interface
- **Tailwind CSS**: Utility-first CSS for rapid styling and responsive design
- **Vercel**: Frontend deployment with global CDN and instant deployments

### Backend

- **Express.js**: Lightweight Node.js server for API endpoints
- **Netlify**: Backend deployment for serverless function handling
- **GitHub API**: Comprehensive profile and repository data fetching
- **Gemini AI API**: Google's AI model for generating roast content

## Technical Implementation

### GitHub Data Collection

- **Profile Fetching**: Basic user information, bio, and account details
- **Repository Analysis**: Public repositories with languages, stars, and update patterns
- **Contribution Data**: Commit history and contribution graph information
- **Rate Limit Handling**: Efficient API usage within GitHub's rate limits

### AI Roast Generation

- **Prompt Engineering**: Crafted prompts to generate humorous, not offensive content
- **Context Building**: Structured data formatting for AI consumption
- **Response Processing**: Content filtering and formatting for display
- **Safety Measures**: Content moderation to ensure appropriate humor

### User Experience

- **Simple Interface**: Clean, minimal design focused on the core functionality
- **Loading States**: Engaging loading animations while processing data
- **Error Handling**: Graceful handling of invalid usernames or API errors
- **Responsive Design**: Works seamlessly across desktop and mobile devices

## Behind the Scenes

This project taught me that sometimes the best projects are the simplest ones that solve a fun problem. The combination of real data analysis with AI creativity resulted in something that developers genuinely enjoyed using and sharing. It also demonstrated the power of combining multiple APIs to create unique user experiences.

The "chill guy" was a instagram trend, so i thought why not build a website for it.
`
    },
];
