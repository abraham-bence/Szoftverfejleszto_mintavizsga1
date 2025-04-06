import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient()
async function main() {
    for (let i = 0; i < 15; i++) {
        const rental = await prisma.rentals.create({
            data: {
                book_id: i+1,
                start_date: faker.date.past(),
                end_date: faker.date.soon()

            }
        })
        console.log(rental)
    }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })