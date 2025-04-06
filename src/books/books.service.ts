import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma.service';
import { rentals } from '@prisma/client';
import { RentDto } from './dto/rentDto';

@Injectable()
export class BooksService {


  constructor(private readonly db: PrismaService) { }

  async create(createBookDto: CreateBookDto) {
    const book = await this.db.books.create({
      data: {
        ...createBookDto,
        created_at: new Date(Date.now())
      }
    })

    return book;
  }

  rent(id : number) {
    const now = new Date()
    const end_date = new Date()
    console.log(now.getDate())
    console.log(now.getDate() + 7)
    return this.db.books.update({
      where : {id},
      data : {
        rental : {
          create : {
            end_date : new Date(end_date.setDate(now.getDate() + 7)),
            start_date : now
          }
        },
        updated_at : now
      },
      include : {
        rental : true
      }
    })
  }

  findAll() {
    return this.db.books.findMany({
      select: {
        id: true,
        title: true,
        author: true,
        publish_year: true,
        page_count: true,
        rental : true
      }
    });
  }

}
