import {test} from '@playwright/test'
test('getByMethods', async({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    //get by label
    await page.getByLabel("Name").fill("Sushma");
    //get by placeholder
    await page.getByPlaceholder("Enter Your Email").fill("sushma.dg@yahoo.com");
    //get by Text
    await page.getByText("Register").last().click();
    //get by alt text
    await page.getByAltText("signin").click();
    // await page.goto("https://demowebshop.tricentis.com/");
    // await page.getByAltText("Tricentis Demo Web Shop").click();
    //click on with tool tip eement
    await page.getByText("With ToolTip").click();
    //get by title
    await page.getByTitle("Enter your Name").fill("pooja");
    await page.goto("https://demowebshop.tricentis.com/");
    //getbyrole
    await page.getByRole("textbox").first().fill("computers");
    //getByTitle
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId("username").fill("pooja")
})