import { Content } from "./content-interface";

export class ContentList{
    private _items: Content[];

    constructor() {
        this._items = [];
    }

    get items(): Content[]{
        return this._items;
    }

    addItem(contentItem: Content){
        return this._items.push(contentItem);
    }

    getSize() {
        return this._items.length;
    }

    getPrint(index: number) {
        let readerFriendlyHtml = '<div>';
        console.log(this._items.length);
        if (this._items.length > index) {  
            readerFriendlyHtml += `<p>` + this._items[index].title + `<p>`;
            readerFriendlyHtml += `<p>` + this._items[index].description + `<p>`;
            readerFriendlyHtml += `<p>` + this._items[index].type + `<p>`;
            readerFriendlyHtml += `<p>` + this._items[index].creator + `<p>`;
            readerFriendlyHtml += `<img src ="` + this._items[index].imgURL + `">`;
            readerFriendlyHtml += `</div>`;
            return readerFriendlyHtml;
        }
        else {
            readerFriendlyHtml += '<b>This item selection is not valid</b>';
            return readerFriendlyHtml;
        }
        
    }
}