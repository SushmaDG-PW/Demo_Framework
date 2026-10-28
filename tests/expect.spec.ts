import {expect, test} from '@playwright/test'

test("explicitwait", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?senario=1")

    await expect(page).toHaveURL("https://demoapps.qspiders.com/ui?senario=1")

    await expect(page).toHaveTitle("DempApps | Qspiders | Text Box")

    await expect(page.getByPlaceholder("Enter your name",{exact:true})).toBeVisible()

    await page.getByPlaceholder("Enter your name", {exact:true}).fill("user")

    await expect(page.getByPlaceholder("Enter your name",{exact:true})).toHaveValue("user")

    await expect(page.locator('//h1[text()="Register"]')).toContainText("Regis")

    await expect(page.locator('//h1[text()="Register"]')).toHaveText("Regis")

    await page.screenshot({path:"screenshot/ss1.png"})

    await page.getByPlaceholder("Enter your name", {exact:true}).fill("username")

    await expect(page).toHaveScreenshot("screenshot/ss1.png")

})