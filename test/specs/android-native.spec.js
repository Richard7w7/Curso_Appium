describe('Android Native Feature Tests', () =>{
    it('Access an Activity directly', async () => {
        await driver.startActivity('io.appium.android.apis',
             'io.appium.android.apis.app.AlertDialogSamples');

        await driver.pause(3000);

        await expect($('//*[@text="App/Alert Dialogs"]')).toBeExisting();

    });

    it('Working with Dialog Boxes',async () => {

        await driver.startActivity('io.appium.android.apis',
             'io.appium.android.apis.app.AlertDialogSamples');

        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

        //aceptar alerta
        //await driver.acceptAlert();

        //descartar alerta
        //await driver.dismissAlert();
        
        //imprimir el texto de la alerta
        const alertText = await driver.getAlertText();
        console.log('ALERT TEXT --> ',alertText);

        //click en el boton de la alerta
        await $('//*[@resource-id="android:id/button1"]').click();

        //Aserción que el cuadro de dialogo ya no este presente
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toBeExisting();
    });

    it('Vertical Scrolling', async () => {

        await $('~App').click();
        await $('~Activity').click();

        //Scroll to the end (no es estable si el elemento a buscar ya no esta al final de la lista)
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        //Scroll hasta encontrar el elemento
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Secure Surfaces"))').click();


        //await $('~Secure Surfaces').click();

        //Assertion
        await $('~Secure Dialog').waitForExist({ timeout: 5000 });
        await expect($('~Secure Dialog')).toBeExisting();
    });

    it('Horizontal Scrolling', async () => {
        await driver.startActivity('io.appium.android.apis',
             'io.appium.android.apis.view.Gallery1');

        //Scroll horizontal hasta encontrar el elemento
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()').click();

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()').click();
    
        await driver.pause(3000);
    });

    it.only('Working with a date picker', async () => {

        //access the date picker
        await driver.startActivity('io.appium.android.apis',
             'io.appium.android.apis.view.DateWidgets1');
        //get current date
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = await date.getText();
        
        //click on change the date button
        await $('~change the date').click();
        
        //scroll right to the next month
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()').click();

        //select the 10th date
        await $('//*[@text="10"]').click();
        
        //click on ok button
        await $('//*[@resource-id="android:id/button1"]').click();
        
        //verify the updated date
        await expect(await date.getText()).not.toEqual(currentDate);

    });

});