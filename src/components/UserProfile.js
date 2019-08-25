import React from 'react';
import Tabs from '@atlaskit/tabs';
import Content from "../shared/Content";

const issues = {
 
  tabName: "Applications Tab",
  
  tabDetails: {
    one: "Issue in raising in New Initiative RFS",
    two: "Not able to start a new flow",
    three: "BPM Initiative regarding AGF"
  }
}

const sample = {
 
  tabName: "Applications Tab",
  
  tabDetails: {
    one: "BPM Initiative regarding RFS",
    two: "BPM Initiative regarding ZOS",
    three: "BPM Initiative regarding AGF"
  }
}

const tabs = [
  { label: 'Applications', content: <Content {...sample}></Content> },
  { label: 'Platforms', content: <Content {...issues}></Content> },
  { label: 'Initiatives', content: <Content {...sample}></Content> },
  { label: 'Issues / Defects', content: <Content {...issues}></Content> }
];

export default () => (
  <Tabs
    tabs={tabs}
    onSelect={(_tab, index) => console.log('Selected Tab', index + 1)}
  />
);