import { IsDate, IsDefined, IsNumber, IsPositive, IsString } from "class-validator"

export class CreateBookDto {
    @IsDefined({
        message : 'Title should not be empty'
    })
    @IsString({
        message : 'Title must be string'
    })
    title : string

    @IsDefined({
        message : 'Author should not be empty'
    })
    @IsString({
        message : 'Author must be string'
    })
    author : string 

    @IsDefined({
        message : 'Publish year should not be empty'
    })
    @IsNumber({ 
        maxDecimalPlaces: 0
     })
    @IsPositive({
        message: 'Publish year must be a positive number'
    })
    publish_year : number
    @IsDefined({
        message : 'Page count should not be empty'
    })
    @IsNumber({ maxDecimalPlaces: 0 })
    @IsPositive({
        message: 'Page count must be a positive number'
    })
    page_count : number 
}
