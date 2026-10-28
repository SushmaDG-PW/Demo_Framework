import {expect, test} from "@playwright/test"

test("new tab",async({browser})=>{
    //creating multiple tabs manually

    let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto("https://www.flipkart.com/")

    let page2 = await context.newPage()
    await page.goto("https://www.amazon.in/")
})

test.only("multiple tabs", async({browser})=>{
    let context = await browser.newContext()
    let page = await context.newPage()

    await page.goto("https://www.flipkart.com/")
    await page.locator('(//input[@class="nw1UBF v1zwn26"])[1]').fill("shoes")
    await page.locator('//button[@class="XFwMiH" and @type="submit"]/*[name()="svg"]').click()

//     let [page2] = await Promise.all([
//         page.waitForEvent("popup"),
//         page.locator('(//img[@class="MZeksS"])').click()
//     ])


// await page2.locator('(//div[@class="v1zwn21n v1zwn26 _1psv1zeb9" _1psv1ze0 _1psv1ze90 _1psv1ze6r _1psv1zel0 _1psv1zeir"])[1]').click()

let [page2] = await Promise.all([
    page.waitForEvent("popup"),
    page.getByRole('button',{name:"vew more"}).click()
])

    await page2.getByRole("button",{name:"Add to Cart"}).click()

    //let cartCount = await page.locator('//article').last().textContent()
    let cartEle = await page.locator('//article').last()
    let cartCount=parseInt(await cartEle.textContent() || "0")
    await expect(cartCount).toBeGreaterThan(0)

})