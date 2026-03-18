import addNoteScreen from "../../screenobjects/android/add-note.screen.js";
import deleteNoteScreen from "../../screenobjects/android/delete-note.screen.js";

describe('Add Notes', () => {
    it('Skip tutorial', async () => {
            
            await addNoteScreen.skipBtn.click();
            await expect(addNoteScreen.addNoteTxt).toBeDisplayed();
        });
    
        it('add a note, save changes & verify note', async () => {
            await addNoteScreen.addNoteTxt.click();
            await addNoteScreen.textBtn.click();
    
            await expect(addNoteScreen.editingTxt).toBeDisplayed();
    
            await addNoteScreen.textTitle.setValue('Fav Anime List');
    
            await addNoteScreen.textNote.setValue('1. Naruto\n2. One Piece\n3. Bleach');
    
            await addNoteScreen.saveNote();
            
            await expect(addNoteScreen.editBtn).toBeDisplayed();
            await expect(addNoteScreen.viewNote).toHaveText('1. Naruto\n2. One Piece\n3. Bleach');
            
    
        });

    it('delete note and verify deletion', async () => {
        
        
        await deleteNoteScreen.menuBtn.click();  

        
        await deleteNoteScreen.deleteBtn.click();  

        await driver.acceptAlert();

        await deleteNoteScreen.menuBtntree.waitForDisplayed({ timeout: 5000 });
        
        await deleteNoteScreen.menuBtntree.click();

        //
        await deleteNoteScreen.trashBtn.click();
        //


        //Assersion
        await deleteNoteScreen.titleText.waitForDisplayed({ timeout: 5000 });
        await expect(deleteNoteScreen.titleText).toBeDisplayed();
        
    });

});