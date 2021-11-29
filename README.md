# react-animated-text-content

[![npm](https://img.shields.io/npm/dt/react-animated-text-content.svg?style=flat-square)](https://www.npmjs.com/package/react-animated-text-content)
[![npm](https://img.shields.io/npm/v/react-animated-text-content.svg?style=flat-square)](https://www.npmjs.com/package/react-animated-text-content)

A component to animate your text in React! Use predefined animation type or compose your own one.

[Demo](https://kalkson.github.io/react-animated-text-content-demo/)

## Install

```bash
  npm install --save react-animated-text-content
```

## Note

Component has animate on scroll functionality built in (whith `Intersection Observer` api) so you don't have to use 3rd party libs to achieve this. If you want to find out more about Intersection Observer check mdn page about that topic [here](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

### Important

Be careful with using this library and don't overdo with it. To achieve text animation like this way, the big chunck of HTML must be rendered and every text fragment has separated animation properties depending on props passed. This could cause serious performance leaks (especially in case of `chars` type) but it may not. Just use it with cool head and don't use long texts to animate!

## Using

```jsx
import AnimatedText from 'react-animated-text-content';

<AnimatedText
  type="words" // animate words or chars
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="float"
  interval={0.06}
  duration={0.8}
  tag="p"
  className="animated-paragraph"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
>
  Content to animate
</AnimatedText>;
```

The `AnimatedText` component render way is fully customizable. If you want, you can use predefined animation or compose your own one. In order to check and test predefined animation types,
visit [demo](https://kalkson.github.io/react-animated-text-content-demo/) site. You can use animation generator there as well and generate code to paste in.

- define own animation object and pass it as props,
- if you use `animationType` prop, the `animation` prop is not valid anymore (no effect),
- you can oberwrite default `duration` and `interval` values (from `animationType` as well) by defining pure props. These props always has higher priority. If no specified, the fallback with default value is used

## props

All props are optional.

| name                   | type                                                | default          | description                                                                                                                                                                                                                                               |
| ---------------------- | --------------------------------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **type**               | 'words'                                             | `'chars'`        | specify animation render way. Depending on `type` the HTML of component is drastically different                                                                                                                                                          |
| **animation**          | {x: string, y: string, scale: number, ease: string} | `{ y: '-30px' }` | define animation from state with optional properties like: `x`, `y`, `ease`, `scale`                                                                                                                                                                      |
| **animationType**      | string                                              | -                | use predefined animation (check currently available ones at demo page)                                                                                                                                                                                    |
| **children**           | ReactText                                           | ''               | the most important prop. Currently as ReactText type so no addiditional elements are allowed like `<br />`. If so, the error will be catched                                                                                                              |
| **interval**           | number                                              | `0.04`           | pretty same as `animation` prop object property. Use this version of props to overwrite default value from `animationType` or `animation` object. `s` (seconds) unit. Says to the component how quickly next fragments of the text should be animated     |
| **duration**           | number                                              | `0.4`            | pretty same as `animation` prop object property. Use this version of props to overwrite default value from `animationType` or `animation` object. `s` (seconds) unit. Says to the component how long will animation be performing in case of one fragment |
| **tag**                | string                                              | `'div'`          | specify custom HTML tag you want to render as you animated text parent. Be aware of that some of tags could break animation behavior or event stop runtime so use it carefully                                                                            |
| **className**          | string                                              | -                | define own class for component                                                                                                                                                                                                                            |
| **includeWhiteSpaces** | boolean                                             | `false`          | white spaces could be rendered in separated tags or as blank chars. Change it only if you must. When set to `true`, performance goes down                                                                                                                 |
| **threshold**          | number                                              | `0`              | value for Intersection Observer. Find out more here [docs](https://developer.mozilla.org/en-us/docs/web/api/intersection_observer_api). Otherwise, leave it default                                                                                       |
| **rootMargin**         | string                                              | `0`              | value for Intersection Observer. Find out more here [docs](https://developer.mozilla.org/en-us/docs/web/api/intersection_observer_api). Otherwise, leave it default. `px` and `%` units are allowed                                                       |
| **{...props}**         | -                                                   | -                | all props like `style`, `aria-`, `id` are allowed                                                                                                                                                                                                         |

## LICENSE

[MIT](LICENSE)
