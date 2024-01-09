# EVERYMIND-TECH-CHALLENGE
API em NodeJS / NestJs

Sobre: API Desenvolvida em NodeJs utilizando o framework Nestjs, aplicação esta hospedada na clound Render no endereço https://everymind-tech-challenge.onrender.com/swagger

Formas de rodar: npm run start:dev para rodar na porta http://localhost:3000

Documentação da API em: http://localhost:3000/swagger

Regras de Negócio

o primeiro GET é possivel ver todos os itens da tabela.

Em POST é possivel adicionar um item, exemplo:

{
  "nome": "refrigerante", 
  "descricao": "bebida gaseificada",
  "preco": "8"
}

Em PUT é possivel atualizar um item, porem é necessario o codigo do produto que é gerado ao adicionar um item, exemplo:

 {
    "codigo": 1,
    "nome": "refrigerante",
    "descricao": "bebida gaseificada",
    "preco": "5"
  }

Com o segundo GET é possivel verificar as informações de um produto especifico, para isto basta apenas inserir o codigo do produto que deseja.

Em Delete basta apenas inserir o codigo do produto que deseja para deletar.

Me coloco à disposição para batermos um papo,

Antensiosamente,

Enzo Carvalho