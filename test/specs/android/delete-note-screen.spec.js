import deleteNoteScreen from "../../screenobjects/android/delete-note.screen.js";

describe('Add Notes', () => {
    
    before(async () => {
        await deleteNoteScreen.skipTutorial();
        await deleteNoteScreen.saveNote('Fav Anime List', '1. Naruto\n2. One Piece\n3. Bleach');    
    });

    it('delete note and verify deletion', async () => {
        
        
        await deleteNoteScreen.menuBtn.click();  

        
        driver.back(); // Simula el botón de retroceso del dispositivo para cerrar el menú desplegable
        //await deleteNoteScreen.deleteBtn.click();  

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