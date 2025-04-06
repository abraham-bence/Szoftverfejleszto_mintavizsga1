import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { rentals } from '@prisma/client';

export class UpdateBookDto extends PartialType(CreateBookDto) {
    id : number
    created_at : Date
    updated_at : Date 
    rental : rentals
}
