import addNoteScreen from "../../screenobjects/android/add-note.screen.js";

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
        await addNoteScreen.saveNote();
        
        await expect(addNoteScreen.editBtn).toBeDisplayed();
        await expect(addNoteScreen.viewNote).toHaveText('1. Naruto\n2. One Piece\n3. Bleach');
        
        await addNoteScreen.saveNote();

    });

});