# dsdeliver-sd2-claudio

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/fsclaudio/dsdeliver-sd2-claudio/blob/main/LICENSE) 

# Sobre o projeto

https://claudiosds2.netlify.app/

Ds Delivery é uma aplicação full stack web e mobile construída durante a 2ª edição da Semana DevSuperior (#sds2), evento organizado pela #DevSuperior.

A aplicação consiste em uma aplicativo para pedidos de foods delivery, onde os dados são coletados no app mobile ou web, e depois são listados no app web, e atrave´s do 
aplicativo mobile o entregador navega no gps ate o local da entrega. 

## Layout do aplicativo Web

![Web 1](https://github.com/fsclaudio/dsdeliver-sd2-claudio/blob/main/front-mobile/assets/DeliveryHome.png)

![Web 2](https://github.com/fsclaudio/dsdeliver-sd2-claudio/blob/main/front-mobile/assets/DeliveryPedido.png)

![Web 3](https://github.com/fsclaudio/dsdeliver-sd2-claudio/blob/main/front-mobile/assets/DeliveryPedido2.png)

## Modelo conceitual
![Modelo Conceitual](https://github.com/fsclaudio/dsdeliver-sd2-claudio/blob/main/front-mobile/assets/modelo-conceitual.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- React Native
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/fsclaudio/dsdeliver-sd2-claudio

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/fsclaudio/dsdeliver-sd2-claudio

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```

# Autor

Cláudio Francisco dos Santos

https://www.linkedin.com/in/claudio-francisco-dos-santos-b21baa7b/
