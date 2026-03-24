class AddNoteScreen{
    get skipBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }

    get addNoteTxt(){
        return $('//*[@text="Add note"]');
    }

    get textBtn(){
        return $('//*[@text="Text"]');
    }

    get editingTxt(){
        return $('//*[@text="Editing"]');
    }

    get textTitle(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

    get textNote(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }

    get editBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]');
    }

    get viewNote(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }

    async saveNote(){
        await driver.pause(3000);
        await driver.back();
    }
}

export default new AddNoteScreen();