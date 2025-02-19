const puppeteer = require("puppeteer")

const LINKEDIN_EMAIL = "nitheeshkani@gmail.com"
const LINKEDIN_PASSWORD = "kani@1234"
const POST_MESSAGE = "This is an automated LinkedIn post using Puppeteer!"

const ARTICLE_TITLE = "automated"
const ARTICLE_CONTENT = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perspiciatis quia id, ipsam officiis consequatur veniam corporis esse velit, officia dolorem recusandae earum cum pariatur ipsum eveniet delectus. Laboriosam, itaque.";

(async () => {
    const browser = await puppeteer.launch({ headless: false }) // Set to true to run in background
    const page = await browser.newPage()

    try {
        // Open LinkedIn login page
        await page.goto("https://www.linkedin.com/login", { waitUntil: "networkidle0" })

        // Enter email
        await page.type("#username", LINKEDIN_EMAIL, { delay: 50 })

        // Enter password
        await page.type("#password", LINKEDIN_PASSWORD, { delay: 50 })

        // Click login button
        await Promise.all([
            page.click('[type="submit"]')
        ])

        // click article button
        console.log("✅ Logged in successfully!")


        // STEP 1: Navigate to article page
        await page.waitForNavigation() // Small delay before redirecting
        await page.goto("https://www.linkedin.com/article/new/", { waitUntil: "networkidle2" })

        console.log("✅ Opened article editor!")


        // STEP 2: Enter aritcle content
        await page.type('.article-editor-content__paragraph', ARTICLE_CONTENT, { delay: 10 })
        console.log("✅ Typed the content")

        // STEP 3: Enter article title
        await page.waitForSelector("#article-editor-headline__textarea")
        await page.type('#article-editor-headline__textarea', ARTICLE_TITLE, { delay: 100 })

        console.log("✅ Typed the article!")
        console.log("✅ Article drafted!")




        // (Optional) STEP 5: Click "Publish" button (Uncomment to publish)
        await page.waitForNavigation()
        await new Promise(resolve => setTimeout(resolve, 3000))

        await page.click(".article-editor-nav__publish")
        console.log("✅ next button")

        await page.waitForSelector(".share-actions__primary-action")
        await page.click(".share-actions__primary-action")

    } catch (error) {
        console.error("❌ Error:", error)
    } finally {
        await browser.close()
    }
})()