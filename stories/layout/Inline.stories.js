import React from "react";
import { addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { Inline } from "@sparkpost/matchbox/components/Inline";
import { Box } from "@sparkpost/matchbox/components/Box";
import { ThemeProvider } from "@sparkpost/matchbox/components/ThemeProvider";

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);

export default {
  title: "Layout|Inline"
};

export const Spacing = withInfo({ propTablesExclude: [Box] })(() => (
  <div>
    <Box
      // display="inline-block"
      // verticalAlign="top"
      m="500"
      width="260px"
      bg="green.200"
    >
      <Inline space={["200", "400", "500", "50px"]}>
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="80px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
      </Inline>
    </Box>

    <Box
      // display="inline-block"
      // verticalAlign="top"
      m="500"
      width="260px"
      bg="green.200"
    >
      <Inline space="200">
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="80px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
      </Inline>
    </Box>
  </div>
));
