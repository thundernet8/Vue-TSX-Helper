import Vue, { VueConstructor, VNode } from "vue";

export = VUETSX;

export as namespace VUETSX;

declare namespace VUETSX {
    export class VueComponent<T> extends Vue {
        _props_: T;
    }
}
