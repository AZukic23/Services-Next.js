import {PrismaClient} from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    const username = 'admin';
    const password = 'Securepassword123';

    const hash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: { username, password: hash },
    });

    console.log('User angelegt:', user);
}

main()
    .catch(e => { throw e; })
    .finally(() => prisma.$disconnect());