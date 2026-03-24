import deleteNoteScreen from "../../screenobjects/android/delete-note.screen.js";

describe('Add Notes', () => {
    
    before(async () => {
        await deleteNoteScreen.skipTutorial();
        await deleteNoteScreen.saveNote('Fav Anime List', '1. Naruto\n2. One Piece\n3. Bleach');    
    });

    beforeEach(async () => {
        console.log('BEFORE EACH HOOK');
    });

    after(async () => {
        console.log('AFTER HOOK');
    });

    afterEach(async () => {
        console.log('AFTER EACH HOOK');
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