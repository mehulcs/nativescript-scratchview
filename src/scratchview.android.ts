import { Common, strokeWidthProperty } from "./scratchview.common";
declare var com: any;

export class ScratchView extends Common {
  get android() {
    return this.nativeView;
  }

  public createNativeView() {
    const scratchcard = new com.example.scratchcardlib.views.CustomScratchView(
      this._context
    );
    return scratchcard;
  }

  [strokeWidthProperty.setNative](value: string) {
    this.nativeView.setStrokeWidth(parseInt(value));
  }

  public reveal(): void {
    this.nativeView.reveal();
  }
}
