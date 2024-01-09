import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DeleteResult, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Produto } from "../entities/produto.entitiy";

@Injectable()
export class ProdutoService{

    constructor(@InjectRepository(Produto)
        private produtoRepository: Repository<Produto>
    ){}

    async findAll(): Promise<Produto[]> {
        return this.produtoRepository.find()
    }

    async findById(codigo: number): Promise<Produto>{
        let Produtoprocurado = await this.produtoRepository.findOne({
            where: {
                codigo
            }
        
        })

        if(!Produtoprocurado){
            throw new HttpException('Nenhum produto foi encontrado com esse codigo', HttpStatus.NOT_FOUND)
        }
        return Produtoprocurado

    }

    async create(produto: Produto): Promise<Produto>{
        return this.produtoRepository.save(produto)
    }

    async update(produto: Produto): Promise<Produto> {
        let ProdutoUpdate = this.findById(produto.codigo)
        if(!ProdutoUpdate || !produto.codigo){
            throw new HttpException('Nenhum produto encontrado', HttpStatus.NOT_FOUND)
        }
        return this.produtoRepository.save(produto)
    }

    async delete(codigo: number): Promise<DeleteResult>{
        let tarefaDeletar = this.findById(codigo)
        if(!tarefaDeletar){
            throw new HttpException('Nenhum codigo encontrado', HttpStatus.NOT_FOUND)
        }
        return this.produtoRepository.delete(codigo)
    }

}
