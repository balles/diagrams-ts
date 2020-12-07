import { createProvider } from "../../create-provider";

export const Activemq = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/onprem/queue/activemq.png"
);
export const Celery = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/onprem/queue/celery.png"
);
export const Kafka = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/onprem/queue/kafka.png"
);
export const Nats = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/onprem/queue/nats.png"
);
export const Rabbitmq = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/onprem/queue/rabbitmq.png"
);
export const Zeromq = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/onprem/queue/zeromq.png"
);

export const ActiveMQ = Activemq;
export const RabbitMQ = Rabbitmq;
export const ZeroMQ = Zeromq;
