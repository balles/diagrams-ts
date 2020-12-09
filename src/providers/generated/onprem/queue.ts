import { createProvider } from "../../create-provider";

export const Activemq = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/onprem/queue/activemq.png"
);
export const Celery = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/onprem/queue/celery.png"
);
export const Kafka = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/onprem/queue/kafka.png"
);
export const Nats = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/onprem/queue/nats.png"
);
export const Rabbitmq = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/onprem/queue/rabbitmq.png"
);
export const Zeromq = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/onprem/queue/zeromq.png"
);

export const ActiveMQ = Activemq;
export const RabbitMQ = Rabbitmq;
export const ZeroMQ = Zeromq;
