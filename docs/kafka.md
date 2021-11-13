# Kafka

## Nestjs Kafka 
https://docs.nestjs.com/microservices/kafka

## Kafkajs
https://kafka.js.org/docs/configuration

## Patners
https://www.enterpriseintegrationpatterns.com/

## Remover containers
connect           /etc/confluent/docker/run

# Atenção sobre o local aonde deve ficar os decorators (SEMPRE NA CONTROLLER)
Para criar um manipulador de mensagens com base no paradigma de solicitação-resposta, use o @MessagePattern()decorador, que é importado do @nestjs/microservicespacote. Este decorador deve ser usado apenas dentro das classes do controlador , uma vez que são os pontos de entrada para seu aplicativo. Usá-los dentro dos provedores não terá nenhum efeito, pois eles são simplesmente ignorados pelo tempo de execução do Nest. 