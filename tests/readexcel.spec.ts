import {test} from "@playwright/test"
import excel from "exceljs"
import path from "path"

test("read single data", async({page})=>{
    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,"/DDT/excelfile.xlsx"));

    let sheet = book.getWorksheet("Sheet1");
    let data1 = await sheet?.getRow(1).getCell(1).toString();
    console.log(data1);

    let data2 = await sheet!.getRow(1).getCell(2).toString();
    console.log(data2);
    
    let data3 = await sheet?.getRow(2).getCell(1).toString();
    console.log(data3);
    
})

test('multiple data',async({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"/DDT/excelfile.xlsx"))

    let sheet = await book.getWorksheet("Sheet1");

    for(let c=1; c<=sheet!.actualColumnCount; c++){
        for(let row=1;row<=sheet!.actualRowCount; row++){
        let data=await sheet?.getRow(row).getCell(c).toString()
        console.log(data);
    }
    }
})

test.only('for application', async({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"/DDT/excelfile.xlsx"))
    let sheet = await book.getWorksheet("Sheet3");
    let alldata : any[] = [];
    let headers = sheet?.getRow(1).values;

    let urlIndex; //1
    let usernameIndex; //2
    let passwordIndex; //3
    if(Array.isArray(headers)){
        urlIndex = headers.findIndex(value=>value==="URL")
        usernameIndex = headers.findIndex(value=>value==="username")
        passwordIndex = headers.findIndex(value=>value==="password")
    }

    for(let row=2; row<=sheet!.actualRowCount; row++){
        let url = sheet?.getRow(row).getCell(urlIndex).toString()
        let username = sheet?.getRow(row).getCell(usernameIndex).toString()
        let password = sheet?.getRow(row).getCell(passwordIndex).toString()

        alldata.push({
            link : url,
            user: username,
            password : password
        })

        console.log(alldata);

        for(let d of alldata){
            await page.goto(d.link)
            await page.getByLabel("Username",{exact:true}).fill(d.user)
            await page.getByLabel("Password",{exact:true}).fill(d.password)
            await page.getByRole("button",{name:"Submit"}).click()
        }
    }
})
