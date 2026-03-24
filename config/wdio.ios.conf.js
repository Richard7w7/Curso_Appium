import path from "path";
import { config as sharedConfig } from "./wdio.shared.conf.js";

export const config = {
    ...sharedConfig,
    port: 4723,
    specs: [
        '../test/specs/ios/ios-todo-item*.js'
    ],
    capabilities: [
        {
            // capabilities for local Appium web tests on an IOS Emulator
            'appium:platformName': 'iOS',
            'appium:deviceName': 'iPhone 17',
            'appium:platformVersion': '26.3',
            'appium:automationName': 'XCUITest',
            'appium:app': path.join(process.cwd(), 'app/ios/MVCTodo.app')
        }
    ]
};
