describe('IOS Find Elements', () => {
    it('find element by accessibility id', async () => {
        await $('~Alert Views').click();

        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    });

    it('find by tag name',  async () => {
        //single element
        console.log(await $('XCUIElementTypeStaticText').getText());

        //multiple elements
        const elements = await $$('XCUIElementTypeStaticText');
        
        for (const element of elements) {
            console.log(await element.getText());
        }
    });

    it('find element by xpath', async () => {
        await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
        await $('//XCUIElementTypeStaticText[@name="Simple"]').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    });

    it('find element by class chain', async () => {
        //const alertText = '**/XCUIElementTypeStaticText[`name == "Alert"`]';
        const alertText = '**/XCUIElementTypeStaticText[`name CONTAINS "Alert"`]';
        await $(`-ios class chain:${alertText}`).click();
        await $('//*[@name="Simple"]').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    });

    it('find element by predicate string', async () => {
        // const alertText = 'name == "Alert Views"';
        const alertText = 'value BEGINSWITCH[c] "alert"';
        await $(`-ios predicate string:${alertText}`).click();
        await $('//*[@name="Simple"]').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    });

    it.only('Exercise', async () => {
        await $('//XCUIElementTypeStaticText[@name="Search"]').click();
        await $('//XCUIElementTypeStaticText[@name="Default"]').click();
        
        await $('//XCUIElementTypeSearchField').setValue('I love this curse');

        await $('//XCUIElementTypeButton[@name="Clear text"]').click();

        // await expect($('//XCUIElementTypeSearchField')).toHaveValue('');
        await expect($('//XCUIElementTypeSearchField')).not.toHaveAttribute('value');

    });
    
});