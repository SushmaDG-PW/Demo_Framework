import excel from "exceljs"

export async function readExcel(
    filepath:string,
    sheetName:string
):Promise<any[][]>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(filepath)
    let sheet = await book.getWorksheet(sheetName)

    let data:any[][]=[]

    sheet?.eachRow((row)=>{
        let rowData:any[]=[]
        row.eachCell((cell)=>{
            rowData.push(cell.value)
        })
        data.push(rowData)
    })
    return data
}