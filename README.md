<div align="center">

## Vue-TSX-Helper

**Write class-based Vue component with TypeScript .**

[![GitHub issues](https://img.shields.io/github/issues/thundernet8/Vue-TSX-Helper.svg)](https://github.com/thundernet8/Vue-TSX-Helper/issues)
[![GitHub forks](https://img.shields.io/github/forks/thundernet8/Vue-TSX-Helper.svg)](https://github.com/thundernet8/Vue-TSX-Helper/network)
[![GitHub stars](https://img.shields.io/github/stars/thundernet8/Vue-TSX-Helper.svg)](https://github.com/thundernet8/Vue-TSX-Helper/stargazers)
[![dependency status](https://img.shields.io/david/thundernet8/Vue-TSX-Helper.svg?maxAge=3600&style=flat)](https://david-dm.org/thundernet8/Vue-TSX-Helper)
[![Build Status](https://travis-ci.org/thundernet8/Vue-TSX-Helper.svg?branch=master)](https://travis-ci.org/thundernet8/Vue-TSX-Helper)
[![GitHub license](https://img.shields.io/github/license/thundernet8/Vue-TSX-Helper.svg)](https://github.com/thundernet8/Vue-TSX-Helper/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

</div>

<br>

## Installation

```
npm install vue-tsx-helper
```

## Usage

A class-based Vue component sample

```typescript
// TestComponent.tsx

import { Component, Prop } from "vue-property-decorator";
import { VueComponent } from "vue-tsx-helper";

/**
 * Vue component props types
 */
interface IProps {
    msg: string;
}

const mixin = {
    created() {
        console.log("mixin created");
    }
};

@Component({
    name: "TestComponent",
    mixins: [mixin]
})
export default class TestComponent extends VueComponent<IProps> {
    @Prop() msg;

    created() {
        console.log("created");
    }

    render(h) {
        return <div class="container">{"parent message: " + this.msg}</div>;
    }
}
```

now import `TestComponent` in its parent

```typescript
// WrapTestComponent.tsx
import { Component, Prop } from "vue-property-decorator";
import { VueComponent } from "vue-tsx-helper";
import TestComponent from "./TestComponent";

/**
 * Vue component props types
 */
interface IProps {}

@Component
export default class WrapTestComponent extends VueComponent<IProps> {
    @Prop() msg;

    render(h) {
        return <TestComponent msg="msg from parent" />;
    }
}
```

For components supplied by other libraries, try:

```typescript
@Component
export default class WrapTestComponent extends VueComponent<{}> {
    @Prop() msg;

    render(h) {
        render <anyslot is="router-link" to="/">link</anyslot>
    }
}
```

## Screenshots

![intellisense1](screenshots/intellisense-1.png)

![intellisense2](screenshots/intellisense-2.png)
