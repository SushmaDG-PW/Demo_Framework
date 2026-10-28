import {expect,test} from '@playwright/test'

test("authentication", async({browser})=>{
    let context = await browser.newContext(
        {
            httpCredentials:{
                username:"admin",
                password:"admin"
            }
        }
    )
    let page = await context.newPage()

    await page.goto("https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/")

    await expect(page.locator('//p')).toHaveText("congratulations with valid credentials")
})