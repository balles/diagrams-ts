import { createProvider } from "../../create-provider";

export const Activemq = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/onprem/queue/activemq.png"
);
export const Celery = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/onprem/queue/celery.png"
);
export const Kafka = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/onprem/queue/kafka.png"
);
export const Nats = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/onprem/queue/nats.png"
);
export const Rabbitmq = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/onprem/queue/rabbitmq.png"
);
export const Zeromq = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/onprem/queue/zeromq.png"
);

export const ActiveMQ = Activemq;
export const RabbitMQ = Rabbitmq;
export const ZeroMQ = Zeromq;
