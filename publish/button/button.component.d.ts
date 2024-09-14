import { AfterViewInit, ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export type RzButtonType = 'primary' | 'default' | 'dashed' | 'link' | 'text' | null;
export declare class ButtonComponent implements OnInit, AfterViewInit {
    private elementRef;
    private renderer;
    rzType: RzButtonType;
    label: string;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    insertSpan(nodes: NodeList, renderer: Renderer2): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "button[rz-button] a[rz-button]", ["rzButton"], { "rzType": { "alias": "rzType"; "required": false; }; "label": { "alias": "label"; "required": false; }; }, {}, never, ["*"], true, never>;
}
//# sourceMappingURL=button.component.d.ts.map