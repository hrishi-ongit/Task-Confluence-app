import { NgModule } from "@angular/core";
import { CardComponent } from "../card/card.component";

@NgModule({
    declarations: [CardComponent],
    exports:[CardComponent]//make this components any other comp using shared component
})
export class SharedModule{

}