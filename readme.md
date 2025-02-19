This is a simple project I created to explore web automation using Puppeteer. The script automates the process of logging into LinkedIn, navigating to the article editor, and drafting an article with predefined content and title. The code demonstrates the basic usage of Puppeteer for browser automation tasks such as navigating web pages, interacting with form elements, and clicking buttons. Feel free to modify and experiment with the script to learn more about web automation!



# How to run this project

1. Clone this repository
2. Install the dependencies with ```npm install```

4. Create a LinkedIn account and add your email and password to the `LINKEDIN_EMAIL` and `LINKEDIN_PASSWORD` variables in `main.js`

5. add your contents to the `ARTICLE_TITLE` and `ARTICLE_CONTENT` in `main.js`

5. Run the project with ```node main.js```
6. Follow the prompts in the terminal to create a new article and post it to LinkedIn

Note: This project uses Puppeteer to automate the creation and posting of articles on LinkedIn. You may need to adjust the `puppeteer.launch()` options to suit your needs. Additionally, you may want to add error handling to the code to make it more robust.
