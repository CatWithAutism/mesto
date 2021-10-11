export const methodOfAdding = {
    APPEND: "append",
    PREPEND: "prepend",
}

export class Section{
    constructor(renderer, containerSelector){
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector, methodOfAdding.APPEND);
    }

    addItem(item, method){
        this._container[method](this._renderer(item));
    } 

    addItems(items, method){
        items.forEach(item => {
            this._container[method](this._renderer(item));
        })
    }
}