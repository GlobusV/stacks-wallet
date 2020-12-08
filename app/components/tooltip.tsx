import React, { FC } from 'react';
import Tippy from '@tippyjs/react';
import { Box } from '@stacks/ui';

import { Explainer } from './icons/explainer';

export const ExplainerTooltip: FC = ({ children }) => {
  return (
    <Tippy
      content={
        <Box
          p="base-tight"
          color="white"
          background="black"
          borderRadius="6px"
          textStyle="body.small.medium"
          whiteSpace="normal"
          maxWidth="290px"
        >
          {children}
        </Box>
      }
    >
      <Explainer mt="1px" cursor="help" />
    </Tippy>
  );
};
