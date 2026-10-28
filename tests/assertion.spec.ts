import {test, expect} from '@playwright/test'

test("auto_retry_assertion", async({page})=>{
await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
// await expect(page).toHaveTitle("DemoApps | Qspiders | Text Box")
// await expect(page.getByPlaceholder("Enter your name",{exact:true})).toBeVisible()
// await page.getByPlaceholder("Enter your name",{exact:true}).fill("user")
// await expect(page.getByPlaceholder("Enter your name", {exact:true})).toHaveValue("user")

await expect(page.locator('//h1[text()="Register"]')).toContainText("Regis")
//await expect(page.locator('//h1[text()="Register"]')).toHaveText("Regis")
await page.screenshot({path:"screenshot/ss1.png"})
await page.getByPlaceholder("Enter your name",{exact:true}).fill("username")
await page.screenshot({path:"screenshot/ss1.png"})
await page.getByPlaceholder("Enter your name", {exact:true}).fill("username")
await expect(page).toHaveScreenshot("screenshot/ss1.png")

})

test("non retrying assertion test1",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    let text = await page.locator('//h1[.="Register"]').textContent()
    await expect(text).toBe("Register")

    let title = await page.title()
    let url = await page.url()

    await expect(title).toContain("DemoApps | Qspiders ")
    await expect(url).toMatch(/scenario=1/)

    let status="hii"
    await expect(status).toBeTruthy()
    
    let name = "rohit"
    await expect(name).toBeUndefined()

    await expect("hii").toBeTruthy()
})

test("non retrying assertion test2",async({page}) => {
 await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
 let text = await page.locator('//h1[.="Register"]').textContent()
 await expect(text).not.toBe("Regis")

 let title = await page.title()
 let url = await page.url()

 //await page.mouse.click(200,200)

 await expect(title).not.toContain("DemoApps | Qspiders ")
 await expect.soft(url).toMatch(/scenario=1/)

})

test("assymmetric assertion",async({page})=>{
await page.goto("https://demoapps.qspiders.com/ui?scenario=1")

let text = await page.locator('//button').textContent()  //!Register
expect(text).toEqual(expect.stringContaining("Regis"))
//used to check wheteher a string contains a specified substring
//expect(text).toEqual("Regis")

expect(text).toEqual(expect.stringMatching(/Register/))
//used to check wheteher a string contains a specified substring or regular expression

const products=["laptop","mobile","keyboard","mouse"]
expect(products).toEqual(expect.arrayContaining(["laptop","mouse"]))
//checks wheteehr an array contains the specified elements

const user={
    name:"john",
    age:25,
    city:"bangalore"
}
expect(user).not.toEqual(expect.objectContaining({
    name:"john",
    age:27
}))
//check whether an object contain the specified properties

//!expect anything
//? matches any value expect null and undefined

let a = true;
expect(a).toEqual(expect.anything())

const user1={
    name:"john",
    age:25
}
expect(user1).toEqual({
    name:expect.any(String),
    age:expect.any(Number)
})

let stud = true
expect(stud).toEqual(expect(Boolean))
})


test.only("poll assertion", async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui?scenarios=1')
    await expect.poll(async()=>{
        return await page.title()
    },"poll assertion").toContain("Demo")
})