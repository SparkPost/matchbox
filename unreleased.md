### Unreleased Changes

- #262 - Resolve issue #261 by removing padding right styles from Panel.Section content

[4.0.0]

- #267 - Updates to Babel 7, Rollup 1, Storybook 5
- #270 - Refreshes global CSS, Adds Box component, and Installs styled-system
- #272 - Adds primitive Text component
- #277 - Removes usage of default token variants
- #278 - Adds @sparkpost/design-tokens to the Matchbox monorepo
- #280 - Adds a custom deprecate prop type
- #308 - Adds layout Stack component
- #316 - Adds layout Inline component
- #309 - Restyles the Button and Button.Group components with styled-components
- #309 - Buttons no longer automatically blur on click
- #309 - External buttons now add a default title, and allow custom titles through a new title prop
- #323 - Progress Bar Updates, default props changed and added size: 'normal'
- #325 - Pagination next and previous buttons are now screen reader accessible with screen reader
  only content
- #324 - Restyles the Tag component
- #324 - Tag component close button is now a button, and handles both space and enter events
- #328 - Snackbar dismiss button is now a button, and handles both space and enter events
- #329 - Restyle the Panel Component
- #334 - Restyles the Banner component
- #334 - Banner component dismiss button is now a button, and handles both space and enter events
- #334 - Banner component dismiss button is now screen reader accessible
- #334 - Banner with a status of 'default' now defaults to 'info'
- #334 - Links within the Banner component overwrite color and hover color to be accessible
- #337 - Restyles the Slider component
- #339 - Restyle the Expandable Component
- #340 - Restyles Select component
- #340 - Label component with labelHidden prop now properly hides a screen reader accessible label
- #340 - Select now properly uses aria-describedby to link to its helptext and error
- #340 - Select with the required prop now applies the required HTML attribute to the input
- #341 - Adds a lightGray and darkGray variant to Tag component
- #342 - Restyles the Table component and adds configurable padding
- #343 - Update the Pager Component
- #352 - Add link styles for the status styled-component
- #349 - Restyles the TextField component
- #349 - TextField now properly hides a screen reader accessible label
- #349 - TextField now properly uses aria-describedby to link to its helptext and error
- #349 - TextField `id` prop is now required
- #351 - ThemeProvider now injects global CSS and the exported `styles.css` should no longer be used
- #348 - Restyles the Tabs component
- #348 - Tab `connectBelow` is removed in favor of margin system props
- #354 - Adds type="button" to Snackbar, Banner, Tag, Expandable button elements
- #356 - Restyles Page component
- #356 - Removes the default prop `empty`
- #346 - Restyle Tooltip component
- #346 - Deprecates the dark prop on Tooltip
- #346 - Adds new `id` prop on Tooltip
- #346 - Tooltips are now properly positioned after the trigger in the DOM, no longer use portals
  and the `portalId` prop
- #346 - Tooltips no longer accept the prop `debounceEvent`
- #353 - Restyles the Toggle component
- #353 - Deprecates Toggle prop `compact`
- #353 - Adds new Toggle prop `label`
- #349 - Toggle `id` prop is now required
- #359 - Restyles the ScreenReaderOnly component
- #355 - Checkbox `id` prop is now required
- #355 - Checkbox now properly hides a screen reader accessible label
- #355 - Checkbox now properly uses aria-describedby to link to its helptext and error
- #355 - Checkbox.Group now properly uses a `fieldset` and `legend` elements
- #355 - Adds underline text decoration to all links
- #358 - Restyles ActionList
- #358 - Removes ActionList `groupByKey` default prop
- #358 - Adds Action proptypes, used internally by ActionList
- #358 - ActionList actions now accept a new `is` prop, and accept either `link` `button` or
  `checkbox`
- #361 – Tabs now specify `type="button"` and support long text content
- #362 - Restyles Pagination Component
- #362 - Deprecates Pagination prop `selectedColor`
- #362 - Deprecates Pagination prop `flat`
- #360 - Adds new `fontSize_root` token
- #363 - `<Label/>` renders `null` when no `label` is provided
- #365 – Adds a Tooltip `as` prop, defaults to `span`
- #365 – Fixes tooltip positioning by reverting to portals, `portalId` is available again
- #365 – Tooltips are now visible if trigger is focused
- #365 – Tooltips `id` is now required
- #368 - Restyle and convert Radio to Styled Components
- #368 - Radio `id` prop is now required
- #368 - Radio now properly hides a screen reader accessible label
- #368 - Radio now properly uses aria-describedby to link to its helptext and error
- #368 - Radio.Group now properly uses a `fieldset` and `legend` elements
- #371 - Restyles `<Modal/>` component using styled components
- #371 - Adds React Portal to the `<Modal/>` component with a new `portalId` prop to handle
  rendering
- #375 - Resolve bug by properly passing the `height` prop to a child styled component
