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

    scratchcard.setRevealListener(
      new com.example.scratchcardlib.views.CustomScratchView.IRevealListener({
        onRevealed: () => {
          this.notify({
            eventName: Common.revealedEvent,
            object: this
          });
        },
        onRevealPercentChangedListener: percent => {
          this.notify({
            eventName: Common.percentRevealedEvent,
            object: this,
            percent: Math.floor(percent)
          });
        }
      })
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
