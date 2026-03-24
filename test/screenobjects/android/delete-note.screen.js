import addNoteScreen from "../../screenobjects/android/add-note.screen.js";
class DeleteNoteScreen{
    get menuBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]');
    }

    get deleteBtn(){
        return $('//*[@text="Delete"]');
    }

    get menuBtntree(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get trashBtn(){
        return $('//*[@text="Trash Can"]');
    }

    get titleText(){
        return $('//*[@text="Fav Anime List"]');
    }

    get backBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/back_btn"]');
    }

    async skipTutorial (){
        await addNoteScreen.skipBtn.click();
        await expect(addNoteScreen.addNoteTxt).toBeDisplayed();
    }

    async saveNote(titulo, lista){
        await addNoteScreen.addNoteTxt.click();
        await addNoteScreen.textBtn.click();
    
        await expect(addNoteScreen.editingTxt).toBeDisplayed();
    
        await addNoteScreen.textTitle.setValue(titulo);
        await addNoteScreen.textNote.setValue(lista);
    
        await this.backBtn.click();
            
        await expect(addNoteScreen.editBtn).toBeDisplayed();
        await expect(addNoteScreen.viewNote).toHaveText(lista);
    }

}
export default new DeleteNoteScreen();