
# Config

### `@include visually-hidden`
Hides the element that is accessible by screen readers.

---

### `@include clearfix`
A standard clearfix.

---

### `border-radius($size: base)`
Returns border radius in pixels.

| size | value |
| :- |:- |
| `base`  | 2px **(default)** |
| `large` | 3px|

---

### `breakpoint($size)`
Returns breakpoint size in pixels.

| size | value |
| :- |:- |
| `smaller` | 450px |
| `small` | 720px |
| `medium` | 960px |
| `large` | 1200px |
| `larger` | 1470px  |

---

### `color($hue, $variant: base)`
Returns color value.

| hue, variant | value |
| :- |:- |
| `orange, base` | ![](https://placehold.it/15/fa6423/000000?text=+)  |
| `orange, dark` | ![](https://placehold.it/15/e9591b/000000?text=+)  |
| `blue, light` | ![](https://placehold.it/15/04AEF9/000000?text=+)  |
| `blue, base` | ![](https://placehold.it/15/37aadc/000000?text=+)  |
| `blue, dark` | ![](https://placehold.it/15/2693c3/000000?text=+)  |
| `gray, base` | ![](https://placehold.it/15/55555a/000000?text=+)  |
| `gray, 0` | ![](https://placehold.it/15/000000/000000?text=+)  |
| `gray, 1` | ![](https://placehold.it/15/414146/000000?text=+)  |
| `gray, 2` | ![](https://placehold.it/15/55555a/000000?text=+)  |
| `gray, 3` | ![](https://placehold.it/15/6e6e73/000000?text=+)  |
| `gray, 4` | ![](https://placehold.it/15/828287/000000?text=+)  |
| `gray, 5` | ![](https://placehold.it/15/aaaaaf/000000?text=+)  |
| `gray, 6` | ![](https://placehold.it/15/bebec3/000000?text=+)  |
| `gray, 7` | ![](https://placehold.it/15/d2d2d7/000000?text=+)  |
| `gray, 8` | ![](https://placehold.it/15/e1e1e6/000000?text=+)  |
| `gray, 9` | ![](https://placehold.it/15/f2f2f5/000000?text=+)  |
| `gray, 10` | ![](https://placehold.it/15/ffffff/000000?text=+)  |
| `green, light` | ![](https://placehold.it/15/93E12E/000000?text=+)  |
| `green, base` | ![](https://placehold.it/15/8CCA3A/000000?text=+)  |
| `green, dark` | ![](https://placehold.it/15/87B847/000000?text=+)  |
| `red, light` | ![](https://placehold.it/15/f00a0a/000000?text=+)  |
| `red, base` | ![](https://placehold.it/15/DB2F3D/000000?text=+)  |
| `red, dark` | ![](https://placehold.it/15/CB3640/000000?text=+)  |
| `mustard, light` | ![](https://placehold.it/15/FFD300/000000?text=+)  |
| `mustard, base` | ![](https://placehold.it/15/e3af00/000000?text=+)  |
| `magenta, base` | ![](https://placehold.it/15/b94696/000000?text=+)  |
| `teal, base` | ![](https://placehold.it/15/0097b3/000000?text=+)  |

---

### `shadow($depth: base)`
Returns box shadow values.

| depth | value |
| :- |:- |
| `base`  | 0px 1px 2px rgba(#414146, 0.1) **(default)** |
| `deep` | 0px 5px 9px rgba(#414146, 0.14)|
| `deeper` | 0px 10px 30px rgba(#414146, 0.16) |

---

### `spacing($variant: base)`
Returns spacing in rems.

| variant | value |
| :- |:- |
| `none`  | 0 |
| `smaller` | rem(3) |
| `small` | rem(6) |
| `base` | rem(18) **(default)** |
| `large` | rem(24) |
| `larger` | rem(27) |

---

### `font-family($font: base)`
Returns a font family stack.

| font | value |
| :- |:- |
| `base`  | 'Gotham Narrow SSm A', 'Gotham Narrow SSm B', sans-serif **(default)** |
| `monospace` | 'Source Code Pro', monospace |

---

### `rem($value)`
Returns rem value from a pixel value. We use rem values as much as possible in order to scale our components from a root value. Example:

```css
margin-bottom: rem(18);
/* Compiles into */
margin-bottom: 1rem;
```

---

### `em($value)`
Returns em value from a pixel value. Example:

```css
font-size: em(18);
/* Compiles into */
font-size: 1em;
```

---

### `z-index($context: content)`
Returns z-index values.

| context | value |
| :- |:- |
| `content`  | 100 **(default)** |
| `overlay` | 400 |
