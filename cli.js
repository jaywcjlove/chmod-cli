#!/usr/bin/env node
import meow from 'meow';
import chmod from './chmod.js'

const cli = meow(`
  \x1b[37;1mUsage:\x1b[0m $\x1b[32;1m chmod-cli\x1b[0m <path> …

  \x1b[37;1mOptions:\x1b[0m 

    --version, -v   Show version number
    --help, -h      Displays help information.
    --mode, -m      The new permissions for the file or directory.
                    This can be a numeric mode (e.g. 666),
                    or a string mode (e.g. 'rwxr-xr-x')

  \x1b[37;1mExamples:\x1b[0m

    $\x1b[34;1m chmod-cli\x1b[0m test.js xxx.js -m 0o777
    $\x1b[34;1m chmod-cli\x1b[0m test.js -m 0o777
    $\x1b[34;1m chmod-cli\x1b[0m test.js -m 0o777

`, {
  importMeta: import.meta,
  flags: {
    mode: {
      type: 'number',
      shortFlag: 'm',
    },
  },
});

if (cli.flags.h || cli.flags.help) {
  cli.showHelp()
  process.exitCode = 0;
}

if (cli.input.length === 0) {
  console.error('\n  \x1b[31;1m Specify at least one path\x1b[0m\n');
  process.exitCode = 1;
}

if (!cli.flags.mode) {
  console.error('\n  \x1b[31;1m mode must be a string or number\x1b[0m\n');
  process.exitCode = 1;
}

if (cli.flags.v || cli.flags.version) {
  cli.showVersion()
  process.exitCode = 0;
}

cli.input.forEach((pathName) => {
  chmod(pathName, cli.flags.mode, (err) => {
    if (err) {
      console.error(`\n  \x1b[31;1m ${err.message}\x1b[0m\n`);
      process.exitCode = 1;
      return;
    }
    console.log(` \x1b[32;1m👉 ${pathName} \x1b[0m File permissions have been changed.`)
  })
});