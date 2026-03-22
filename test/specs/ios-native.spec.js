describe('IOS Native Features', () => {
    it('working with alert box', async () => {
        await $('~Alert Views').click();
        await $('~Okay / Cancel').click();

        //click on
        // await $('~OK').click();

        console.log(await driver.getAlertText());
        
        //accept/dismiss alert
        await driver.dismissAlert();

        // assertion

        await expect($('~OK')).not.toBeExisting();
        
    });

    it('Working with Scrollable elements', async () => {
        //Escenario facil
        // await driver.execute('mobile: scroll', {direction: 'down'});
        // await driver.execute('mobile: scroll', {direction: 'up'});
        // await driver.execute('mobile: scroll', {direction: 'down', element: await $('~Picker View')});

        //Escenario dificil
        await $('~Picker View').scrollIntoView();

        const redPicker = await $('~Red color component value');
        const bluePicker = await $('~Blue color component value');

        await driver.execute('mobile: scroll', {element: redPicker.elementId, direction: 'down'});
        await driver.execute('mobile: scroll', {element: bluePicker.elementId, direction: 'up'});

        await driver.pause(2000);
    });

    it('Working with Picker view', async () => {
        await $('~Picker View').scrollIntoView();

        const redPicker = await $('~Red color component value');
        const bluePicker = await $('~Blue color component value');
        const greenPicker = await $('~Green color component value');

        //escoger color purpura

        await redPicker.addValue(125);
        await bluePicker.addValue(125);
        await greenPicker.addValue(0);

        await driver.pause(2000);
    });
});