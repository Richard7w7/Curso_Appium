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
}

export default new DeleteNoteScreen();