import { createProvider } from "../../create-provider";

export const ApplicationIntegration = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/aws/integration/application-integration.png"
);
export const Appsync = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/aws/integration/appsync.png"
);
export const ConsoleMobileApplication = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/aws/integration/console-mobile-application.png"
);
export const Eventbridge = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/aws/integration/eventbridge.png"
);
export const MQ = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/aws/integration/mq.png"
);
export const SimpleNotificationServiceSns = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/aws/integration/simple-notification-service-sns.png"
);
export const SimpleQueueServiceSqs = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/aws/integration/simple-queue-service-sqs.png"
);
export const StepFunctions = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/aws/integration/step-functions.png"
);

export const SNS = SimpleNotificationServiceSns;
export const SQS = SimpleQueueServiceSqs;
export const SF = StepFunctions;
