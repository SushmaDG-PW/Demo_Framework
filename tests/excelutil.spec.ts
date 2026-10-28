import {test} from "@playwright/test"
import { readExcel } from "./utility/excelUtility"

test("excel util", async()=>{
    let value = await readExcel("C:/Users/Personal/Desktop/Playwright_M18/tests/DDT/excelFile2.xlsx","Sheet1")
    console.log(value);
})