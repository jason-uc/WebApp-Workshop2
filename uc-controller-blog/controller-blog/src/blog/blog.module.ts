import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntryEntity } from './model/blog-entry.entity';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';
import { BlogController } from './controller/blog.controller';
import { BlogService } from './service/blog.service';
import { ClientProxy, ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        TypeOrmModule.forFeature([BlogEntryEntity]),
        AuthModule,
        UserModule,
        ClientsModule.register([
        { name: 'BLOG_SERVICE', transport: Transport.TCP },
        ]),
    ],
    controllers: [BlogController],
    providers: [BlogService]
})
export class BlogModule {}
