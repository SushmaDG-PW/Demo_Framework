import {test} from "@playwright/test"
import excel from 'exceljs'
import path from 'path'

test('writing data in excel',async()=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"/DDT/excelfile.xlsx"))

    let sheet = await book.getWorksheet("Sheet4")
    if(!sheet){
        sheet = await book.addWorksheet("Sheet4")
    }

    sheet.getRow(1).getCell(1).value="Playwright"

    await book.xlsx.writeFile(path.join(__dirname,"/DDT/excelfile.xlsx"))
})

//for column
test("from application",async({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"/DDT/excelfile.xlsx"))

    let sheet = await book.getWorksheet("Sheet6")
    if(!sheet){
        sheet = await book.addWorksheet("Sheet6")
    }

    await page.goto("https://www.amazon.in/")
    await page.getByPlaceholder("Search Amazon.in",{exact:true}).fill("books")
    await page.locator('//div[@class="s-suggestion-container"]').first().waitFor()

    let alldata = await page.locator('//div[@class="s-suggestion-container"]').allTextContents()
    console.log(alldata);

    for(let text of alldata){
        let c = alldata.indexOf(text)
        sheet.getRow(c+1).getCell(1).value=text
    }

    await book.xlsx.writeFile(path.join(__dirname,"/DDT/excelfile.xlsx"))
    
})

//for row
test("from application row",async({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"/DDT/excelfile.xlsx"))

    let sheet = await book.getWorksheet("Sheet5")
    if(!sheet){
        sheet = await book.addWorksheet("Sheet5")
    }

    await page.goto("https://www.amazon.in/")
    await page.getByPlaceholder("Search Amazon.in",{exact:true}).fill("books")
    await page.locator('//div[@class="s-suggestion-container"]').first().waitFor()

    let alldata = await page.locator('//div[@class="s-suggestion-container"]').allTextContents()
    console.log(alldata);

    for(let text of alldata){
        let c = alldata.indexOf(text)
        sheet.getRow(1).getCell(c+1).value=text
    }

    await book.xlsx.writeFile(path.join(__dirname,"/DDT/excelfile.xlsx"))
    
})

//for diagonal way
test.only("from application diagonal",async({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"/DDT/excelfile.xlsx"))

    let sheet = await book.getWorksheet("Sheet7")
    if(!sheet){
        sheet = await book.addWorksheet("Sheet7")
    }

    await page.goto("https://www.amazon.in/")
    await page.getByPlaceholder("Search Amazon.in",{exact:true}).fill("books")
    await page.locator('//div[@class="s-suggestion-container"]').first().waitFor()

    let alldata = await page.locator('//div[@class="s-suggestion-container"]').allTextContents()
    console.log(alldata);

    for(let text of alldata){
        let c = alldata.indexOf(text)
        sheet.getRow(c+1).getCell(c+1).value=text
    }

    await book.xlsx.writeFile(path.join(__dirname,"/DDT/excelfile.xlsx"))
    
})