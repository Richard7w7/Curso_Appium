class ListitemScreen {

    get addItemButton() {
        return $('//*[@name="Create item"]')
    }

    get addTitleInput() {
        return $('//*[@value="Title"]')
    }

    get addDueInput() {
        return $('//*[@value="Due"]')
    }

    get createButton() {
        return $('//*[@name="Create"]')
    }

    itemValue(name) {
        return $(`~${name}`);
    }

}

export default new ListitemScreen();