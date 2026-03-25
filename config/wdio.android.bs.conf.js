import path from "path";
import "dotenv/config";
import { config as sharedConfig } from "./wdio.shared.conf.js";

export const config = {
    ...sharedConfig,
    user: process.env.BS_USER,
    key: process.env.BS_KEY,
    specs: [
        '../test/specs/**/add-note-screen*.js'
    ],
    capabilities: [
        {
            platformName: 'Android',
            'appium:deviceName': 'Samsung Galaxy S24',
            'appium:platformVersion': '16.0',
            'appium:automationName': 'UiAutomator2',
            'appium:app': "bs://e47b3e625c940663b7d9f10507bd4149eef15d8a",
            'appium:autoGrantPermissions': true
        }
    ],
        //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: ['browserstack'],
};
