import { LayoutBase } from "tns-core-modules/ui/layouts/layout-base";
import { Property } from "tns-core-modules/ui/core/properties";

export const strokeWidthProperty = new Property<Common, string>({
  name: "strokeWidth",
  defaultValue: "1"
});

export class Common extends LayoutBase {
  protected strokeWidth: Number;

  [strokeWidthProperty.setNative](value: Number) {
    this.strokeWidth = value;
  }
}

strokeWidthProperty.register(Common);
