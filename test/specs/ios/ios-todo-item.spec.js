import ListScreen from '../../screenobjects/ios/list.screen';
import ItemScreen from '../../screenobjects/ios/item.screen';

describe('Todo list', () => {
    it('Create a item into Todo List', async () => {
        const list = "My first list";
                await ListScreen.createListButton.click();
                await ListScreen.listNameInput.addValue(list);
                await ListScreen.createButton.click();
        
                //Assertion
                await expect($(await ListScreen.todoList(list))).toBeExisting();

        await $(`~${list}`).click();
                
        await ItemScreen.addItemButton.click();
        await ItemScreen.addTitleInput.addValue('Ejemplo 1');
        await ItemScreen.addDueInput.click();
        await $('~Thursday, 26 March').click();

        await ItemScreen.createButton.click();

        await $('~Ejemplo 1').waitForExist({ timeout: 2000 });
        await expect($('~Ejemplo 1')).toBeExisting();
        await expect($('~Due 26 March 2026')).toBeExisting();

        await driver.pause(2000);


    });
});