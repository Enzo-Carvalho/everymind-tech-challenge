import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ProdutoService } from "../service/produto.service";
import { DeleteResult } from "typeorm";
import { Produto } from "../entities/produto.entitiy";

@Controller('/produto')
export class ProdutoController{
    constructor( private readonly service: ProdutoService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produto[]>{
        return this.service.findAll()
    }

    @Get('/:codigo')
    @HttpCode(HttpStatus.OK)
    findById(@Param('codigo', ParseIntPipe)codigo: number): Promise<Produto>{
        return this.service.findById(codigo)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() tarefa: Produto): Promise<Produto>{
        return this.service.create(tarefa)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body()produto: Produto): Promise<Produto>{
        return this.service.update(produto)
    }

    @Delete('/:codigo')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('codigo', ParseIntPipe)codigo: number): Promise<DeleteResult>{
        return this.service.delete(codigo)
    }

}