import {test} from "@playwright/test"

test("demoqa calender", async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form")
    await page.locator("#dateOfBirthInput").click()
    await page.locator('.react-datepicker__year-select').selectOption({label:"2000"})
    await page.locator('.react-datepicker__month-select').selectOption({value:"4"})
    await page.locator('//div[@class="react-datepicker__day react-datepicker__day--015"]').click()
})
