import { Component, ElementRef, Input, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { NgIf } from '@angular/common'

@Component({
    selector: 'lib-editor-options-bar',
    imports: [NgIf],
    templateUrl: './editor-options-bar.component.html',
    styleUrl: './editor-options-bar.component.css'
})
export class EditorOptionsBarComponent {

    constructor(private renderer: Renderer2){}

    /** Enables the bold option inside the bar. Default value is true */
    @Input() boldBox: boolean = true;

    /** Enables the italic option inside the bar. Default value is true */
    @Input() italicBox: boolean = true;

    /** Enables the underline option inside the bar. Default value is true */
    @Input() underlineBox: boolean = true;

    @ViewChildren('icon') iconList!: QueryList<ElementRef>;

    iconClick(buttonType: string): void {
        // format the selection appropriately
        this.changeSelected(buttonType);
        console.log(this.iconList);
    }

    /**
     * Removes all the 'selected' css class from all element and then applies
     * it to the selected element (is this the best approach??)
     */
    private changeSelected(option: string): void {
        this.iconList.forEach(e => {
            this.renderer.removeClass(e.nativeElement, 'selected');
            if(e.nativeElement.id === option) {
                this.renderer.addClass(e.nativeElement, 'selected');
            }
        });
    }
}
