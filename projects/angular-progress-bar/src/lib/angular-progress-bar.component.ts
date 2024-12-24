import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
    selector: 'lib-angular-progress-bar',
    imports: [],
    templateUrl: './angular-progress-bar.component.html',
    styleUrl: './angular-progress-bar.component.css'
})
export class AngularProgressBarComponent implements OnInit, OnChanges, AfterViewInit {

    // regExp used to check and parse the color strings
    private hexRegExp: RegExp = new RegExp('');

    /**
     * Number that represents the completed amount. Speaking in fractions, this would be the denominator.
     * Default value is 1.
     */
    @Input() total: number = 1;

    /**
     * Number that represents the not completed amount. Speaking in fractions this would be numerator.
     * Default value is 0
     */
    @Input() current: number = 0;

    /**
     * Optional property that enables an animation, similiar to the ones displayed on
     * Windows's progress bar. It's set to false by default if no value is provided.
     */
    @Input() animateCompleted: boolean = false;

    /**
     * Optional property that a string representing the color or the completedBar.
     * The string must be passed as an hexadecimal value.
     *
     * Hexadecimal should either `#xxxxxx` or `xxxxxx`
     */
    @Input() completedColor: string = '';

    /**
     * Optional property that a string representing the color or the notCompletedBar.
     * The string must be either as an hexadecimal value.
     *
     * Hexadecimal should either `#xxxxxx` or `xxxxxx`
     */
    @Input() notCompletedColor: string = '';

    /**
     * References for the div elements that represent the progress bar
     */
    @ViewChild("completedBar") completedBar!: ElementRef;
    @ViewChild("notCompletedBar") notCompletedBar!: ElementRef;

    ngOnInit(): void {

    }

    ngAfterViewInit(): void {

        if(this.completedColor !== "" && this.isValidHex(this.completedColor)) {
            this.completedBar.nativeElement.style.backgroundColor = this.parseHexColor(this.completedColor);
        }

        if(this.completedColor !== "" && this.isValidHex(this.notCompletedColor)) {
            this.notCompletedBar.nativeElement.style.backgroundColor = this.parseHexColor(this.notCompletedColor);
        }

    }

    ngOnChanges(changes: SimpleChanges): void {

    }




    private isValidHex(input: string): boolean {
        return true;
    }

    private parseHexColor(color: string): string | undefined{
        return this.hexRegExp.exec(color)?.toString();
    }

    // private isValidRgb(input: string): boolean {
    //     return false;
    // }

    // private isValidColor(input: string): boolean {
    //     return (this.isValidHex(input) && this.isValidRgb(input));
    // }

    private changeBarWidth(): void {
        // calculate the current/total and transforms it to a percentage
        let currentPercetage: number = Number.parseFloat((100*this.current/this.total).toFixed(2));

        // then apply the width based on the formula: completedBarWidth = current% and notCompletedBarWidth = 100 - current%
        this.completedBar.nativeElement.style.width = `${currentPercetage}%`;
        this.notCompletedBar.nativeElement.style.width = `${100-currentPercetage}%`;
    }


    // Returns the current value of completed

    // Returns the current value of not completed

    // Returns the completed percetage

    // Returns the not completed percentage

}
