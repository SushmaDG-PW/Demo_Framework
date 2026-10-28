import {test} from "@playwright/test"

import { getCurrentDate, getRandomNumber, getRandomString, getTimestamp, getDate } from "./utility/typescriptUtility"

test("typescriptutility", async()=>{
    let data= await getRandomNumber(5000000000,10000000000)
    console.log(data);
    
    let data2 = getRandomString(5)
    console.log(data2+"@gmail.com");

    let data3 = getCurrentDate()
    console.log(data3);

    let timestamp = getTimestamp()
    console.log(timestamp);

    console.log(getDate(5));
    
})