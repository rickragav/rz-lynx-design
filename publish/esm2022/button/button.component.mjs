import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["rz-button", "", "rz-button", ""];
const _c1 = ["*"];
export class ButtonComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQix1QkFBdUIsRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFxQixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQW9CM0ksTUFBTSxPQUFPLGVBQWU7SUFLaEI7SUFDQTtJQUxELE1BQU0sR0FBaUIsSUFBSSxDQUFDO0lBQzVCLEtBQUssR0FBVSxVQUFVLENBQUM7SUFFbkMsWUFDVSxVQUFzQixFQUN0QixRQUFtQjtRQURuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7SUFHN0IsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFlLEVBQUUsUUFBbUI7UUFDN0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxFQUFFLENBQUM7Z0JBQzlCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzVDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDMUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkMsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVE7SUFFUixDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUMzRSxDQUFDO3lHQTVCVSxlQUFlOzZEQUFmLGVBQWU7WUFBZixrREFBVyxTQUFTLENBQUw7OztZQVBmLGtCQUF5Qjs7O2lGQU96QixlQUFlO2NBaEIzQixTQUFTOzJCQUNFLGdDQUFnQyxZQUNoQyxVQUFVLHVCQUNDLElBQUksbUJBQ1IsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxjQUN6QixJQUFJLFdBQ1AsRUFBRSxZQUVELDJCQUEyQixRQUMvQjtvQkFDSixLQUFLLEVBQUMsVUFBVTtvQkFDaEIsMEJBQTBCLEVBQUUsc0JBQXNCO2lCQUNuRDttRUFJUSxNQUFNO2tCQUFkLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7O2tGQUZLLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgdHlwZSBSekJ1dHRvblR5cGUgPSAncHJpbWFyeScgfCAnZGVmYXVsdCcgfCAnZGFzaGVkJyB8ICdsaW5rJyB8ICd0ZXh0JyB8IG51bGw7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2J1dHRvbltyei1idXR0b25dIGFbcnotYnV0dG9uXScsXHJcbiAgZXhwb3J0QXM6ICdyekJ1dHRvbicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogdHJ1ZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW10sXHJcbiAgLy8gdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczonbHlueC1idG4nLFxyXG4gICAgJ1tjbGFzcy5seW54LWJ0bi1wcmltYXJ5XSc6IGBuelR5cGUgPT09ICdwcmltYXJ5J2AsXHJcbiAgfSxcclxuICBzdHlsZVVybDogJy4vYnV0dG9uLmNvbXBvbmVudC5sZXNzJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdHtcclxuICBASW5wdXQoKSByelR5cGU6IFJ6QnV0dG9uVHlwZSA9IG51bGw7XHJcbiAgQElucHV0KCkgbGFiZWw6c3RyaW5nID0gJ2NsaWNrbWVlJztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgKXtcclxuXHJcbiAgfVxyXG5cclxuICBpbnNlcnRTcGFuKG5vZGVzOiBOb2RlTGlzdCwgcmVuZGVyZXI6IFJlbmRlcmVyMik6IHZvaWQge1xyXG4gICAgbm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09ICcjdGV4dCcpIHtcclxuICAgICAgICBjb25zdCBzcGFuID0gcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHJlbmRlcmVyLnBhcmVudE5vZGUobm9kZSk7XHJcbiAgICAgICAgcmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHBhcmVudCwgc3Bhbiwgbm9kZSk7XHJcbiAgICAgICAgcmVuZGVyZXIuYXBwZW5kQ2hpbGQoc3Bhbiwgbm9kZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgIFxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICB0aGlzLmluc2VydFNwYW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlcyx0aGlzLnJlbmRlcmVyKVxyXG4gIH1cclxufVxyXG4iXX0=