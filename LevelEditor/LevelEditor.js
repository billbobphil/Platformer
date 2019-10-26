class LevelEditor {

    activeEditorObjects = new Array();
    editingObjectID = 0;

    constructor() {
        console.log('[Level Editor Online]');
    }

    placeNewObject = () => {

        gameEngine.stopEngine();
        console.log('[Level Editor] Placing Object: ');

        let newGameObject = {
            type: "",
            width: 0,
            height: 0,
            posX: 0,
            posY: 0,
        }

        let itemPicker = document.getElementById('itemPicker');
        newGameObject.type = itemPicker.options[itemPicker.selectedIndex].value;

        newGameObject.width = parseInt(document.getElementById('widthPicker').value);

        newGameObject.height = parseInt(document.getElementById('heightPicker').value);
        
        newGameObject.posX = parseInt(document.getElementById('posXPicker').value);
        newGameObject.posY = parseInt(document.getElementById('posYPicker').value);

        console.log('[Level Editor] Adding: ');
        console.log(newGameObject);

        let createdGameObject;

        switch (newGameObject.type)
        {
            case 'Platform':
                //TODO: Platform seems to move to max right or max bottom of screen on use of constructor -- NO clue why (unless value is 0)
                createdGameObject = new Platform(newGameObject.width, newGameObject.height, newGameObject.posX, newGameObject.posY, 'black');
            break;
            case 'Spike':
                createdGameObject = new HazardSpike(newGameObject.posX, newGameObject.posY);
            break;
        }

        this.activeEditorObjects.push(createdGameObject);
        this.editingObjectID = this.activeEditorObjects.length - 1;
        this.loadObjectForEditing();
        this.refreshGameEngine();
        this.updateCurrentObjectsElement();
        
    }

    clearActiveEditorObjects = () => {
        document.getElementById('currentObjectsList').innerHTML = "";
        this.activeEditorObjects = new Array();
        this.editingObjectID = 0;
        this.refreshGameEngine();
    }

    exportLevel = () => {
        console.log('[Level Editor] Exporting Level...');
    }

    updateCurrentObjectsElement = () => {
        let select = document.getElementById('currentObjectsList');

        //Empty the select element
        select.innerHTML = "";

        for(var i = 0; i < this.activeEditorObjects.length; i++) {
            let option = document.createElement('option');
            option.value = i;
            option.innerHTML = i;
            select.appendChild(option);

            //if there is only one object, auto set it's color to green
            if(this.activeEditorObjects.length == 1) {
                this.activeEditorObjects[0].color = 'green';
            }
        }
    }

    changeEditingObjectID = (e) => {
        this.editingObjectID = parseInt(e.srcElement.value);
        this.loadObjectForEditing();
    }

    loadObjectForEditing = () => {
        console.log('[Level Editor] Loading this object');
        console.log(this.editingObjectID);

        for(var i = 0; i < this.activeEditorObjects.length; i++) {
            this.activeEditorObjects[i].color = 'black';
        }

        this.activeEditorObjects[this.editingObjectID].color = 'green';
    }

    removeObject = () => {

        this.activeEditorObjects.splice(this.editingObjectID, 1);
        this.editingObjectID = 0;
        this.updateCurrentObjectsElement();
        this.refreshGameEngine();
    }

    alterObject = () => {
        let gameObject = this.activeEditorObjects[this.editingObjectID];

        let newWidth = document.getElementById('currentObjectWidth').value;
        let newHeight = document.getElementById('currentObjectHeight').value;
        let newPosX = document.getElementById('currentObjectPosX').value;
        let newPosY = document.getElementById('currentObjectPosY').value;

        if(gameObject.type == 'platform') {
            if(newWidth != undefined && !Number.isNaN(parseInt(newWidth)) ){
                gameObject.width = parseInt(newWidth);
            }
    
            if(newHeight != undefined && !Number.isNaN(parseInt(newHeight))){
                gameObject.height = parseInt(newHeight);
            }
        }

        
        if(newPosX != undefined && !Number.isNaN(parseInt(newPosX))) {
            gameObject.posX = parseInt(newPosX);
        }

        if(newPosY != undefined && !Number.isNaN(parseInt(newPosY))) {
            gameObject.posY = parseInt(newPosY);
        }
        
        this.activeEditorObjects[this.editingObjectID] = gameObject;
        this.refreshGameEngine();
    }

    exportLevel = () => {
        //TODO: cannot stringify Platform etc. b/c passing instance of platform to platform movement controller creates an infinite string
        //loop -- whoops -- correct by rethinking movement controllers to some degree? 
        gameEngine.stopEngine();
        console.log(gameEngine.renderArray);
    }

    refreshGameEngine = () => {
        gameEngine.startLevelInEditor(this.activeEditorObjects);
    }
}