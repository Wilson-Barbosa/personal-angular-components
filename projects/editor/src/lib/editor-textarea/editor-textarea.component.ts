import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'lib-editor-textarea',
    imports: [FormsModule],
    templateUrl: './editor-textarea.component.html',
    styleUrl: './editor-textarea.component.css'
})
export class EditorTextareaComponent {


    textContainer: string = '<p>Hello World</p>';

}
