import { Component } from '@angular/core';
import { EditorOptionsBarComponent } from "./editor-options-bar/editor-options-bar.component";

@Component({
    selector: 'lib-editor',
    imports: [EditorOptionsBarComponent],
    templateUrl: './editor.component.html',
    styleUrl: './editor.component.css'
})
export class EditorComponent {

}
