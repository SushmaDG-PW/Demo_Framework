import {expect,test} from '@playwright/test'
import path from "path"
import fs from "fs" //file system

test("download file", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.getByPlaceholder("Enter text here",{exact:true}).fill("my downloaded file")
    await page.locator('#fileName').fill("newfile.txt")
    let [downloadfile]=await Promise.all([
        page.waitForEvent("download"),
        page.getByRole("button",{name:"Download",exact:true}).click()
    ])
    let downloadedfolder = "C:/Users/Personal/Desktop/Playwright_M18/tests/downloadfolder"

    let filename = downloadfile.suggestedFilename()

    await downloadfile.saveAs(path.join(downloadedfolder, filename))

    let filepath = path.join(downloadedfolder, filename)

    let data = fs.readFileSync(filepath,'utf-8')

    await expect(data).toContain("my downloaded file")
    //console.log(await downloadfile.path())
})
