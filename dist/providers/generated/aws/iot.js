"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IotRule = exports.IotReportedState = exports.IotPolicy = exports.IotPolicyEmergency = exports.IotOverTheAirUpdate = exports.IotMqtt = exports.IotMedicalEmergency = exports.IotLightbulb = exports.IotLambda = exports.IotJobs = exports.IotHttp2 = exports.IotHttp = exports.IotHouse = exports.IotHardwareBoard = exports.IotGreengrass = exports.IotGreengrassConnector = exports.IotGeneric = exports.IotFireTv = exports.IotFireTvStick = exports.IotFactory = exports.IotEvents = exports.IotDoorLock = exports.IotDeviceManagement = exports.IotDeviceGateway = exports.IotDeviceDefender = exports.IotDesiredState = exports.IotCore = exports.IotCoffeePot = exports.IotCertificate = exports.IotCart = exports.IotCar = exports.IotCamera = exports.IotButton = exports.IotBicycle = exports.IotBank = exports.IotAnalytics = exports.IotAnalyticsPipeline = exports.IotAnalyticsNotebook = exports.IotAnalyticsDataStore = exports.IotAnalyticsDataSet = exports.IotAnalyticsChannel = exports.IotAlexaVoiceService = exports.IotAlexaSkill = exports.IotAlexaEnabledDevice = exports.IotAlexaEcho = exports.IotActuator = exports.IotAction = exports.Iot1Click = exports.InternetOfThings = exports.Freertos = void 0;
exports.IotBoard = exports.FreeRTOS = exports.IotWindfarm = exports.IotUtility = exports.IotTravel = exports.IotTopic = exports.IotThingsGraph = exports.IotThermostat = exports.IotSitewise = exports.IotSimulator = exports.IotShadow = exports.IotServo = exports.IotSensor = void 0;
const create_provider_1 = require("../../create-provider");
exports.Freertos = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/freertos.png");
exports.InternetOfThings = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/internet-of-things.png");
exports.Iot1Click = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-1-click.png");
exports.IotAction = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-action.png");
exports.IotActuator = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-actuator.png");
exports.IotAlexaEcho = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-alexa-echo.png");
exports.IotAlexaEnabledDevice = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-alexa-enabled-device.png");
exports.IotAlexaSkill = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-alexa-skill.png");
exports.IotAlexaVoiceService = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-alexa-voice-service.png");
exports.IotAnalyticsChannel = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-analytics-channel.png");
exports.IotAnalyticsDataSet = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-analytics-data-set.png");
exports.IotAnalyticsDataStore = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-analytics-data-store.png");
exports.IotAnalyticsNotebook = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-analytics-notebook.png");
exports.IotAnalyticsPipeline = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-analytics-pipeline.png");
exports.IotAnalytics = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-analytics.png");
exports.IotBank = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-bank.png");
exports.IotBicycle = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-bicycle.png");
exports.IotButton = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-button.png");
exports.IotCamera = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-camera.png");
exports.IotCar = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-car.png");
exports.IotCart = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-cart.png");
exports.IotCertificate = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-certificate.png");
exports.IotCoffeePot = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-coffee-pot.png");
exports.IotCore = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-core.png");
exports.IotDesiredState = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-desired-state.png");
exports.IotDeviceDefender = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-device-defender.png");
exports.IotDeviceGateway = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-device-gateway.png");
exports.IotDeviceManagement = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-device-management.png");
exports.IotDoorLock = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-door-lock.png");
exports.IotEvents = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-events.png");
exports.IotFactory = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-factory.png");
exports.IotFireTvStick = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-fire-tv-stick.png");
exports.IotFireTv = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-fire-tv.png");
exports.IotGeneric = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-generic.png");
exports.IotGreengrassConnector = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-greengrass-connector.png");
exports.IotGreengrass = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-greengrass.png");
exports.IotHardwareBoard = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-hardware-board.png");
exports.IotHouse = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-house.png");
exports.IotHttp = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-http.png");
exports.IotHttp2 = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-http2.png");
exports.IotJobs = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-jobs.png");
exports.IotLambda = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-lambda.png");
exports.IotLightbulb = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-lightbulb.png");
exports.IotMedicalEmergency = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-medical-emergency.png");
exports.IotMqtt = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-mqtt.png");
exports.IotOverTheAirUpdate = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-over-the-air-update.png");
exports.IotPolicyEmergency = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-policy-emergency.png");
exports.IotPolicy = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-policy.png");
exports.IotReportedState = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-reported-state.png");
exports.IotRule = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-rule.png");
exports.IotSensor = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-sensor.png");
exports.IotServo = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-servo.png");
exports.IotShadow = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-shadow.png");
exports.IotSimulator = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-simulator.png");
exports.IotSitewise = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-sitewise.png");
exports.IotThermostat = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-thermostat.png");
exports.IotThingsGraph = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-things-graph.png");
exports.IotTopic = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-topic.png");
exports.IotTravel = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-travel.png");
exports.IotUtility = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-utility.png");
exports.IotWindfarm = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/iot/iot-windfarm.png");
exports.FreeRTOS = exports.Freertos;
exports.IotBoard = exports.IotHardwareBoard;
