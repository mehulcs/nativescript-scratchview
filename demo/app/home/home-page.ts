import { topmost } from "tns-core-modules/ui/frame";
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HomeViewModel } from "./home-view-model";
import { ScratchView } from "nativescript-scratchview";

let scratchView;

export function onPageLoaded(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new HomeViewModel();

    scratchView = <ScratchView>page.getViewById("scratchView");
}

export function reveal(){
    scratchView.reveal();
}
