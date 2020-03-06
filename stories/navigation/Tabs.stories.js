import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
// import StoryContainer from '../storyHelpers/StoryContainer';

import { Tabs, ThemeProvider } from '@sparkpost/matchbox';

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);

const tabs = [
  {
    content: 'Details',
    onClick: action('Details Clicked'),
  },
  {
    content: 'Keys',
    onClick: action('Keys Clicked'),
  },
  {
    content: 'Domains',
    onClick: action('Domains Clicked'),
  },
];

// const handleSelect = action('Tab Selected');

const Example = () => {
  const [i, seti] = React.useState(0);
  return <Tabs selected={i} onSelect={ind => seti(ind)} tabs={tabs} />;
};

export default {
  title: 'Navigation|Tabs',
};

export const DefaultTabs = withInfo()(() => <Example />);

// storiesOf('Navigation|Tabs', module)
//   .addDecorator(getStory => <StoryContainer>{getStory()}</StoryContainer>)
//   .add(
//     'basic example',
//     withInfo()(() => (
//       <Tabs selected={0} connectBelow={false} onSelect={handleSelect} tabs={tabs} />
//     )),
//   )

//   .add(
//     'fitted tabs',
//     withInfo()(() => (
//       <Tabs fitted selected={0} connectBelow={false} onSelect={handleSelect} tabs={tabs} />
//     )),
//   )

//   .add(
//     'with other components',
//     withInfo({
//       propTablesExclude: [Page, Panel],
//     })(() => (
//       <div>
//         <Page
//           secondaryActions={secondaryActions}
//           breadcrumbAction={breadcrumbAction}
//           title="Webhook #2"
//         />
//         <Tabs selected={0} color="red" onSelect={handleSelect} tabs={tabs} />
//         <Panel sectioned>A panel</Panel>
//       </div>
//     )),
//   )

//   .add(
//     'colors',
//     withInfo()(() => (
//       <div>
//         <Tabs
//           connectBelow={false}
//           selected={0}
//           color="purple"
//           onSelect={handleSelect}
//           tabs={tabs}
//         />
//         <Tabs connectBelow={false} selected={0} color="navy" onSelect={handleSelect} tabs={tabs} />
//         <Tabs connectBelow={false} selected={0} color="blue" onSelect={handleSelect} tabs={tabs} />
//         <Tabs
//           connectBelow={false}
//           selected={0}
//           color="orange"
//           onSelect={handleSelect}
//           tabs={tabs}
//         />
//         <Tabs connectBelow={false} selected={0} color="red" onSelect={handleSelect} tabs={tabs} />
//       </div>
//     )),
//   );
