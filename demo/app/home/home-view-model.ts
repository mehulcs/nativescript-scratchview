import { Observable } from "tns-core-modules/data/observable";

export class HomeViewModel extends Observable {
    private _percent: number;
    constructor() {
        super();
        this._percent = 0;
    }

    get percent(): number {
        return this._percent;
    }

    set percent(value: number) {
        this._percent = value;
        this.notifyPropertyChange("percent", value);
    }

    revealed() {
        console.log(">>>>>>>>>>>>  revealed   ");
    }

    percentRevealed(event) {
        this.percent = event.percent;
    }
}
