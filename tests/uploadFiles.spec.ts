import {test} from '@playwright/test'
import path from 'path/win32'

test('upload files', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //---------Approach 1
    //---Upload single file
    // await page.locator('#singleFileInput').setInputFiles("C:/Users/Personal/Desktop/Playwright_M18/tests/uploadFiles/demo.txt")

    // await page.getByRole('button',{name:"Upload Single File", exact:true}).click()

    // //multiple file
    // await page.locator('#multipleFilesInput').setInputFiles(["C:/Users/Personal/Desktop/Playwright_M18/tests/uploadFiles/demo.txt","C:/Users/Personal/Desktop/Playwright_M18/tests/uploadFiles/test.txt"])

    // await page.getByRole('button',{name:"Upload Multiple Files", exact:true}).click()

    //approach 2 
    await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,"uploadFiles/demo.txt"))
    await page.getByRole('button',{name:"Upload Single File", exact:true}).click()

    await page.locator('#multipleFilesInput').setInputFiles([path.join(__dirname,"uploadFiles/demo.txt"),path.join(__dirname,"uploadFiles/test.txt")])
    await page.getByRole('button',{name:"Upload Multiple Files", exact:true}).click()
})