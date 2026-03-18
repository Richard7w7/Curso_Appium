describe('Add Notes', () => {
    it('Skip tutorial', async () => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();

            await expect($('//*[@text="Add note"]')).toBeDisplayed();
    });

    it('add a note, save changes & verify note', async () => {
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();

        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').setValue('Fav Anime List');

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').setValue('1. Naruto\n2. One Piece\n3. Bleach');

        await driver.pause(2000);

        //save the changes
        await driver.back();
        
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]').click();  

        
        await $('//*[@text="Delete"]').click();  

        await driver.acceptAlert();

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').waitForDisplayed({ timeout: 5000 });
        
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();

        //
        await $('//*[@text="Trash Can"]').click();
        //


        //Assersion
        await $('//*[@text="Fav Anime List"]').waitForDisplayed({ timeout: 5000 });
        await expect($('//*[@text="Fav Anime List"]')).toBeDisplayed();
        
    });

});