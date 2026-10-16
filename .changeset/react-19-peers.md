---
'@sparkpost/matchbox': minor
'@sparkpost/matchbox-icons': minor
---

Support React 19: widen the `react` and `react-dom` peer ranges to `^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0`. Matchbox no longer calls `ReactDOM.findDOMNode` or relies on `defaultProps` on function components, and requires `react-focus-lock` 2.13.
