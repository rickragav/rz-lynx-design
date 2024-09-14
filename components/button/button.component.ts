import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

export type RzButtonType = 'primary' | 'default' | 'dashed' | 'link' | 'text' | null;

@Component({
  selector: 'button[rz-button] a[rz-button]',
  exportAs: 'rzButton',
  preserveWhitespaces: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [],
  // templateUrl: './button.component.html',
  template: `<ng-content></ng-content>`,
  host: {
    class:'lynx-btn',
    '[class.lynx-btn-primary]': `nzType === 'primary'`,
  },
  styleUrl: './button.component.less',
})
export class ButtonComponent implements OnInit, AfterViewInit{
  @Input() rzType: RzButtonType = null;
  @Input() label:string = 'clickmee';

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ){

  }

  insertSpan(nodes: NodeList, renderer: Renderer2): void {
    nodes.forEach(node => {
      if (node.nodeName === '#text') {
        const span = renderer.createElement('span');
        const parent = renderer.parentNode(node);
        renderer.insertBefore(parent, span, node);
        renderer.appendChild(span, node);
      }
    });
  }

  ngOnInit(): void {
      
  }

  ngAfterViewInit(): void {
      this.insertSpan(this.elementRef.nativeElement.childNodes,this.renderer)
  }
}
