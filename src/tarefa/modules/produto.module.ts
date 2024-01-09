import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutoService } from "../service/produto.service";
import { ProdutoController } from "../controllers/produto.controller";
import { Produto } from "../entities/produto.entitiy";

@Module({
    imports: [TypeOrmModule.forFeature([Produto])],
    providers:[ProdutoService],
    controllers:[ProdutoController],
    exports: [TypeOrmModule]
})
export class ProdutoModule{}