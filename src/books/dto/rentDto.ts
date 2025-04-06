import { IsDate, IsDefined } from "class-validator";

export class RentDto {
    @IsDefined()
    @IsDate()
    end_date: Date;
}