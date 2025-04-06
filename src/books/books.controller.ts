import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { rentals } from '@prisma/client';
import { RentDto } from './dto/rentDto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}


  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Post(':id/rent')
  rent(@Param('id' , ParseIntPipe) id : number ) {
    return this.booksService.rent(id)
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

}
