class ListScreen {
    get createListButton() {
        return $('//*[@name="Create list"]');
    }

    get listNameInput() {
        return $('//*[@value="List Name"]');
    }

    get createButton() {
        return $('//*[@name="Create"]');
    }

    todoList(name) {
        return $(`~${name}`);
    }
}


export default new ListScreen();