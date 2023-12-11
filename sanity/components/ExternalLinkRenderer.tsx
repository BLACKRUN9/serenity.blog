// ExternalLinkRenderer.tsx
import React from 'react';
import { LaunchIcon } from '@sanity/icons';

interface ExternalLinkRendererProps {
  renderDefault: (props: any) => React.ReactNode; // Update the type accordingly
  value: {
    href: string;
  };
}

const ExternalLinkRenderer: React.FC<ExternalLinkRendererProps> = (props) => (
  <span>
    {props.renderDefault(props)}
    <a contentEditable={false} href={props.value.href}>
      <LaunchIcon />
    </a>
  </span>
);

export default ExternalLinkRenderer;
