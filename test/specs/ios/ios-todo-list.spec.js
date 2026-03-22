describe('Todo list', () => {
    it('Create a Todo List', async () => {
        await $('//*[@name="Create list"]').click();
        await $('//*[@value="List Name"]').addValue('My first list');
        await $('//*[@name="Create"]').click();

        //Assertion
        await expect($('~My first list')).toBeExisting();
    });

    it('Create a item into Todo List', async () => {
        const list = "My first list";
        await $('//*[@name="Create list"]').click();
        await $('//*[@value="List Name"]').addValue(list);
        await $('//*[@name="Create"]').click();

        //Assertion
        await expect($('~My first list')).toBeExisting();

        const Listas = '**/XCUIElementTypeWindow[2]/XCUIElementTypeOther/XCUIElementTypeOther';

        await $(`-ios class chain:${Listas}`).getAttribute('value');

        await $(`~${list}`).click();

        await $('//*[@name="Create item"]').click();
        await $('//*[@value="Title"]').addValue('Ejemplo 1');
        await $('//*[@value="Due"]').click();

        await $('~Thursday, 26 March').click();

        await $('//*[@name="Create"]').click();

        await $('~Ejemplo 1').waitForExist({ timeout: 2000 });
        await expect($('~Ejemplo 1')).toBeExisting();
        await expect($('~Due 26 March 2026')).toBeExisting();

        await driver.pause(2000);


    });
});