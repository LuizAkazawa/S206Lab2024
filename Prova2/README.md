# POSTMAN
Nos testes de API utilizando POSTMAN, foram feitos os seguintes testes:
API URL: https://simple-books-api.glitch.me/
1) Criação do cliente
2) Criação do cliente com email inválido
3) Criação falha de pedido sem token definido

Após a criação dos testes, foi utilizado o comando para criação do report no arquivo HTML: "newman run "Prova2.postman_collection.json" -r htmlextra"
### OBS: Como a criação do cliente é feita uma vez e fica salva no database, é possível que caso rode novamente o primeiro teste, dê erro, pois dentro do banco de dados já existirá o cliente criado nesse teste.


# CYPRESS
Nos testes de website utilizando CYPRESS, foram feitos os seguintes testes:
SITE URL: https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login
1) Logout da conta Harry Potter
2) Depósito na conta bancária
3) Retirada com um saldo insuficiente

Após a criação dos testes, foi utilizado o comando para criação do report no arquivo HTML: ./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
