import {test} from "@playwright/test"

test("webelements", async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")

    await page.getByPlaceholder("Enter your name",{exact:true}).fill("student")
    await page.getByPlaceholder("Enter your Email",{exact:true}).fill("stud@gmail.com")
    await page.getByPlaceholder("Enter your name",{exact:true}).fill("demo")
    await page.getByPlaceholder("Enter your Email",{exact:true}).fill("demo@gmail.com")

    let text1 = await page.locator('//button[text()="Register"]').innerText()
    console.log(text1);

    let text2 = await page.locator('//button[text()="Register"]').textContent()
    console.log(text2);  
    
    let value = await page.locator('#name').inputValue()
    console.log(value);    
    
})

test("test1", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    let text1 = await page.locator('.form-check-label').allInnerTexts()
    console.log(text1);

    let text2 = await page.locator('.form-check-label').all()
    console.log(text2);
    
})

test("test2", async({page})=>{
    await page.goto("https://www.amazon.in/")

    await page.getByPlaceholder("Search Amazon.in",{exact:true}).fill("shoes")

    let text1 = await page.locator('.s-suggestion-container').nth(9).textContent()
    console.log(text1);

    await page.locator('.s-suggestion-container').first().waitFor()

    let text = await page.locator('.s-suggestion-container').allTextContents()
    console.log(text);
})

test("test3", async({page})=>{
    await page.goto("https://demoapss.qspiders.com/ui?scenario=1")

    await page.locator('#name').waitFor()
    let res1=await page.locator('#name').isVisible()
    let res2=await page.locator('#name').isEditable()
    let res3=await page.locator('#name').isEnabled()
    let res4=await page.locator('#name').isDisabled()
    let res5=await page.locator('#name').isChecked()

    console.log(res1);
    console.log(res2);
    console.log(res3);
    console.log(res4);
    console.log(res5);
})
