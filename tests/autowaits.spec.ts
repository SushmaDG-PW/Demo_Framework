import {test} from "@playwright/test"
test.use({
    actionTimeout:20000
})

test('auto waits',async({page})=>{
    await page.setDefaultTimeout(25000)

    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await page.locator('//input[@id="username"]').fill("student")

    await page.getByLabel("Pasord",{exact:true}).fill("Password123")

    await page.getByRole("button", {name:"Submit", exact:true}).click()
})