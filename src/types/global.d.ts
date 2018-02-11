import Vue, { VNode } from "vue";
import * as Dom from "./dom";

declare global {
    namespace JSX {
        interface Element extends VNode {}
        interface ElementClass extends Vue {}
        // tslint:disable-next-line:no-empty-interface
        interface ElementAttributesProperty {
            _props_: {}; // specify props name to use
        }

        interface ElementChildrenAttribute {
            _children_: {}; // specify children name to use
        }

        type IntrinsicElements = { [K in keyof Dom.IntrinsicElementAttributes]: any };
    }
}
