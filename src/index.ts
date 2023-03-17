#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command('create-react-lib');

program
  .option(
    '--package-version <version>',
    'Initial package version number, 1.0.0 by default'
  )
  .action(() => {
    console.log('hi');
  });

program.helpOption('-h, --help', 'Show full help');

program.version('1.0.0', '-v, --version', 'Show version number');

program.parse();
