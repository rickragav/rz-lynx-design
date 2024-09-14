import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, NgModule } from '@angular/core';

const _c0 = ["rz-button", "", "rz-button", ""];
const _c1 = ["*"];
class ButtonComponent {
    elementRef;
    renderer;
    rzType = null;
    label = 'clickmee';
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    insertSpan(nodes, renderer) {
        nodes.forEach(node => {
            if (node.nodeName === '#text') {
                const span = renderer.createElement('span');
                const parent = renderer.parentNode(node);
                renderer.insertBefore(parent, span, node);
                renderer.appendChild(span, node);
            }
        });
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.insertSpan(this.elementRef.nativeElement.childNodes, this.renderer);
    }
    static ɵfac = function ButtonComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ButtonComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["a", "rz-button", "", "rz-button", ""]], hostAttrs: [1, "lynx-btn"], hostVars: 2, hostBindings: function ButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("lynx-btn-primary", ctx.nzType === "primary");
        } }, inputs: { rzType: "rzType", label: "label" }, exportAs: ["rzButton"], standalone: true, features: [i0.ɵɵStandaloneFeature], attrs: _c0, ngContentSelectors: _c1, decls: 1, vars: 0, template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, styles: [".lynx-btn{border-radius:5px}\n"], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{ selector: 'button[rz-button] a[rz-button]', exportAs: 'rzButton', preserveWhitespaces: true, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [], template: `<ng-content></ng-content>`, host: {
                    class: 'lynx-btn',
                    '[class.lynx-btn-primary]': `nzType === 'primary'`,
                }, styles: [".lynx-btn{border-radius:5px}\n"] }]
    }], () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], { rzType: [{
            type: Input
        }], label: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ButtonComponent, { className: "ButtonComponent", filePath: "button.component.ts", lineNumber: 21 }); })();

class ButtonModule {
    static ɵfac = function ButtonModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ButtonModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ButtonModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({});
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonModule, [{
        type: NgModule,
        args: [{
                imports: [ButtonComponent],
                exports: [ButtonComponent],
                providers: [],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ButtonModule, { imports: [ButtonComponent], exports: [ButtonComponent] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ButtonModule };
//# sourceMappingURL=rz-lynx-design-button.mjs.map
