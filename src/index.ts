#!/usr/bin/env node

import { Parcel } from '@parcel/core';
import { Command } from 'commander';
import { generate } from './generators/generate';

const program = new Command('create-react-lib');

program.action(async () => {
  await generate();
  let bundler = new Parcel({
    entries: '.parcel-docs/index.html',
    defaultConfig: '@parcel/config-default',
    defaultTargetOptions: {
      distDir: '.parcel-docs/dist',
    },
    serveOptions: {
      port: 3000,
    },
    hmrOptions: {
      port: 3000,
    },
  });
  await bundler.watch();
});

program.helpOption('-h, --help', 'Show full help');

program.version('1.0.0', '-v, --version', 'Show version number');

program.parse();
