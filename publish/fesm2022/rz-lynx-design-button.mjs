import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';

class ButtonComponent {
    label = 'Click messsss';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.4", type: ButtonComponent, isStandalone: true, selector: "rz-button", inputs: { label: "label" }, ngImport: i0, template: `<ng-content></ng-content> `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rz-button', standalone: true, imports: [], template: `<ng-content></ng-content> ` }]
        }], propDecorators: { label: [{
                type: Input
            }] } });

class ButtonModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: ButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.1.4", ngImport: i0, type: ButtonModule, imports: [ButtonComponent], exports: [ButtonComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: ButtonModule });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: ButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [ButtonComponent],
                    exports: [ButtonComponent],
                    providers: [],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ButtonModule };
//# sourceMappingURL=rz-lynx-design-button.mjs.map
