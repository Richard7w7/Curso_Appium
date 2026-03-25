import path from "path";
import { config as sharedConfig } from "./wdio.shared.conf.js";

export const config = {
    ...sharedConfig,
    port: 4723,
    specs: [
        '../test/specs/**/delete-note-screen*.js'
    ],
    capabilities: [
        {
            // capabilities for local Appium web tests on an Android Emulator
            'appium:platformName': 'Android',
            'appium:deviceName': 'Medium Phone API 36.1',
            'appium:platformVersion': '16',
            'appium:automationName': 'UiAutomator2',
            'appium:app': path.join(process.cwd(), 'app/android/ColorNote+Notepad.apk'),
            'appium:autoGrantPermissions': true
        }
    ],
        //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: ['appium'],
};
