import ListScreen from '../../screenobjects/ios/list.screen';

describe('Todo list', () => {
    it('Create a Todo List', async () => {
        await ListScreen.createListButton.click();
        await ListScreen.listNameInput.addValue('My first list');
        await ListScreen.createButton.click();

        //Assertion
        await expect($(await ListScreen.todoList('My first list'))).toBeExisting();
    });
});