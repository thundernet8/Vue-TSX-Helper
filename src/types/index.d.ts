import Vue, { VueConstructor, VNode } from "vue";
import { InternalJSX } from "./global";

export = VUETSX;

export as namespace VUETSX;

declare namespace VUETSX {
    export class VueComponent<T> extends Vue {
        _props_: InternalJSX.ElementAttrs<T>;
    }
}
