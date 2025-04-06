import { IsDate, IsDefined, IsNumber, IsPositive, IsString } from "class-validator"

export class CreateBookDto {
    @IsDefined()
    @IsString()
    title : string 
    @IsDefined()
    @IsString()
    author : string 
    @IsDefined()
    @IsNumber({ maxDecimalPlaces: 0 })
    @IsPositive()
    publish_year : number
    @IsDefined()
    @IsNumber({ maxDecimalPlaces: 0 })
    page_count : number 
}
