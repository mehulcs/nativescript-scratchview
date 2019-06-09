import { LayoutBase } from "tns-core-modules/ui/layouts/layout-base";
import { Property } from "tns-core-modules/ui/core/properties";

export const strokeWidthProperty = new Property<Common, string>({
  name: "strokeWidth",
  defaultValue: "1"
});

export abstract class Common extends LayoutBase {
  public static revealedEvent = "revealed";
  public static percentRevealedEvent = "percentRevealed";
  protected strokeWidth: Number;

  [strokeWidthProperty.setNative](value: Number) {
    this.strokeWidth = value;
  }

  public abstract reveal(): void;
}

strokeWidthProperty.register(Common);
