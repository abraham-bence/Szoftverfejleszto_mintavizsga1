import { rentals } from "@prisma/client"

export class Book {
        id : number 
        title : string 
        author : string 
        publish_year : number
        page_count : number 
        created_at : Date
        updated_at : Date 
        rental : rentals
}
