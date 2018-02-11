import Vue, { VNode, VNodeData } from "vue";
import * as Dom from "./dom";

declare namespace InternalJSX {
    type KnownAttrs = Pick<
        VNodeData,
        "class" | "staticClass" | "style" | "key" | "ref" | "slot" | "scopedSlots"
    > & {
        id?: string;
        refInFor?: boolean;
    };

    interface ElementAdditionalAttrs {
        // TODO
    }

    type EventHandlers<E> = { [K in keyof E]?: (payload: E[K]) => void };

    type ElementAttrs<T> = T & KnownAttrs & EventHandlers<Dom.EventsOn> & ElementAdditionalAttrs;
}

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

        type IntrinsicElements = {
            [K in keyof Dom.IntrinsicElementAttributes]: InternalJSX.ElementAttrs<
                Dom.IntrinsicElementAttributes[K]
            >
        };
    }
}
