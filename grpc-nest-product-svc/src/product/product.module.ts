import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product } from './entity/product.entity';
import { StockDecreaseLog } from './entity/stock-decrease-log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Product, StockDecreaseLog])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}

// import { Module } from '@nestjs/common';
// import { ProductController } from './product.controller';
// import { ProductService } from './product.service';
// import { Product } from './entity/product.entity';
// import { StockDecreaseLog } from './entity/stock-decrease-log.entity';
// import { TypeOrmModule } from '@nestjs/typeorm';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       database: 'micro_product',
//       username: 'root',
//       password: '',
//       entities: ['dist/**/*.entity.{ts,js}'],
//       synchronize: true, // Ne jamais utiliser 'true' en production !
//     }),
//     Product,
//     StockDecreaseLog
//   ],
//   controllers: [ProductController],
//   providers: [ProductService],
// })
// export class AppModule {}