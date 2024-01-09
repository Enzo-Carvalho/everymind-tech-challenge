import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, MaxLength } from "class-validator"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: "tb_produtos"})
export class Produto {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    codigo: number

    @IsNotEmpty()
    @MaxLength(50)
    @Column({nullable: false, length: 50})
    nome: string

    @IsNotEmpty()
    @MaxLength(500)
    @Column({nullable: false, length: 500})
    descricao: string
    
    @IsNotEmpty()
    @MaxLength(9)
    @Column()
    preco: number

}