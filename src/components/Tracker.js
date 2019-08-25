// import React from 'react';
import React, { Component } from 'react';
import { ProgressTracker } from '@atlaskit/progress-tracker';

const items = [
  {
    id: 'disabled-1',
    label: 'Analysis',
    percentageComplete: 100,
    status: 'disabled',
    href: '#',
  },
  {
    id: 'visited-1',
    label: 'Design',
    percentageComplete: 100,
    status: 'visited',
    href: '#',
  },
  {
    id: 'current-1',
    label: 'Development',
    percentageComplete: 0,
    status: 'current',
    href: '#',
  },
  {
    id: 'unvisited-1',
    label: 'Testing',
    percentageComplete: 0,
    status: 'unvisited',
    href: '#',
  },
  {
    id: 'unvisited-2',
    label: 'Code Review',
    percentageComplete: 0,
    status: 'unvisited',
    href: '#',
  },
  {
    id: 'unvisited-3',
    label: 'UAT',
    percentageComplete: 0,
    status: 'unvisited',
    href: '#',
  },
  {
    id: 'unvisited-3',
    label: 'Deploy',
    percentageComplete: 0,
    status: 'unvisited',
    href: '#',
  }
];

export default class Content extends Component {

    render() {
      return (
        <ProgressTracker items={items} />
      );
    }
  }
// export default () => <ProgressTracker items={items} />;