import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HomeViewModel } from "./home-view-model";
import { ScratchView } from "nativescript-scratchview";

let scratchView;

export function onPageLoaded(args: EventData) {
    const page = <Page>args.object;

    scratchView = <ScratchView>page.getViewById("scratchView");
    page.bindingContext = new HomeViewModel();
}

export function reveal() {
    scratchView.reveal();
}
