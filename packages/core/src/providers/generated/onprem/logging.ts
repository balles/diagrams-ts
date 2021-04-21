import { createProvider } from "../../create-provider";

export const Fluentbit = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/onprem/logging/fluentbit.png"
);
export const Graylog = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/onprem/logging/graylog.png"
);
export const Loki = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/onprem/logging/loki.png"
);
export const Rsyslog = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/onprem/logging/rsyslog.png"
);
export const SyslogNg = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/onprem/logging/syslog-ng.png"
);

export const FluentBit = Fluentbit;
export const RSyslog = Rsyslog;
