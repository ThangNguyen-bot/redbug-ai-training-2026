# Redbug AI Training v1.0

This is the static microsite for the internal AI training program at Redbug Vietnam. 

## Features
- **Clean and Professional Design**: Uses dark navy and red accents, matching a professional executive tone.
- **Responsive Layout**: Optimized for mobile and desktop screens.
- **Card-based Information**: Role-based AI use cases, Demo library, and AI Security Rules sections use a modern grid layout for readability.
- **Zero Dependencies**: Pure HTML and CSS. No React, no build tools, no package.json.

## How to Preview Locally

Because this is a pure static site (HTML/CSS), there's no need to build anything. You can preview it locally using any of these methods:

1. **Directly in Browser**: Double-click `index.html` to open it in your web browser.
2. **VS Code Live Server**: If you use Visual Studio Code, you can install the "Live Server" extension, right-click `index.html`, and select "Open with Live Server".
3. **Python Simple HTTP Server**: Open your terminal in this directory and run:
   ```bash
   python -m http.server 8000
   ```
   Then navigate to `http://localhost:8000` in your browser.
4. **Node HTTP Server**: If you have Node.js installed, you can use `npx serve`:
   ```bash
   npx serve .
   ```

## How to Deploy to Vercel

Since this is a simple static project, it's incredibly easy to deploy to Vercel.

**Method 1: Using the Vercel Dashboard (Drag and Drop)**
1. Create a free account at [Vercel](https://vercel.com).
2. Go to your Vercel dashboard.
3. Click on **Add New...** -> **Project**.
4. You will see an option to upload a folder directly. Drag and drop the `redbug-ai-training-2026` folder into the upload area.
5. Vercel will automatically detect it's a static site and deploy it instantly.

**Method 2: Using Vercel CLI**
1. Install the Vercel CLI if you haven't already:
   ```bash
   npm i -g vercel
   ```
2. Open a terminal in this directory (`redbug-ai-training-2026`) and run:
   ```bash
   vercel
   ```
3. Follow the prompts. Since it's a static HTML site, Vercel requires zero configuration.
4. To push it to production (after a preview), run:
   ```bash
   vercel --prod
   ```

**Method 3: Deploy via GitHub (Recommended for future updates)**
1. Create a new repository on GitHub and push these files there.
2. In the Vercel Dashboard, click **Add New...** -> **Project**.
3. Import the GitHub repository you just created.
4. Vercel will automatically detect it's a standard static site. Click **Deploy**. Vercel will now automatically deploy any future changes pushed to your main branch.

## Project Links

* **Google Form public URL:** https://docs.google.com/forms/d/e/1FAIpQLScwKS3XSFyUbCYoBQ8BCA9kDLKw9p1tvMZVJFG-Hz0bCkuSqw/viewform
* **Google Form edit URL:** https://docs.google.com/forms/d/1HKfhbgjWc4p1uqmZ3l23bvyJ-S0H5ohpWep98HnW9xo/edit
* **Response sheet URL:** https://docs.google.com/spreadsheets/d/1QnnnDInINzvog590EnL5bmr8J2ZE42A6e_HURgV_Q8A/edit
* **Created at:** 6/10/2026
