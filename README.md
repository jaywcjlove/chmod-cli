<!--idoc:ignore:start-->
chmod-cli
===
<!--idoc:ignore:end-->

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![CI](https://github.com/jaywcjlove/chmod-cli/actions/workflows/main.yml/badge.svg)](https://github.com/jaywcjlove/chmod-cli/actions/workflows/main.yml)
[![NPM Downloads](https://img.shields.io/npm/dm/chmod-cli.svg?style=flat)](https://www.npmjs.com/package/chmod-cli)
[![](https://jaywcjlove.github.io/sb/ico/npm.svg)](https://www.npmjs.com/package/chmod-cli) 
[![NPM version](https://img.shields.io/npm/v/chmod-cli.svg?style=flat)](https://npmjs.org/package/chmod-cli)


A simple command line tool for changing file permissions. The [UNIX command](https://en.wikipedia.org/wiki/Chmod) `chmod 777 filename` for node.

## Installation

```shell
$ npm install chmod-cli
# Or
$ npm install --global chmod-cli
```

## Usage

```bash
$ chmod-cli --help

  A simple command line tool for changing file permissions.

  Usage: $ chmod-cli <path> …

  Options:

    --version, -v   Show version number
    --help, -h      Displays help information.
    --mode, -m      The new permissions for the file or directory.
                    This can be a numeric mode (e.g. 666),
                    or a string mode (e.g. 'rwxr-xr-x')

  Examples:

    $ chmod-cli test.js xxx.js -m 0o777
    $ chmod-cli test.js -m 0o777
    $ chmod-cli test.js -m 0o777

```

## API

`chmod(path, mode, callback)`

Changes the permissions of the file or directory at the specified `path`.

- `path` (**string**): The path to the file or directory.
- `mode` (**string** or **number**): The new permissions for the file or directory. This can be a numeric mode (e.g. 666), or a string mode (e.g. 'rwxr-xr-x').
- `callback` (**function**): A callback function to call when the operation completes. The callback should take one argument, an error object, which will be null if the operation completes successfully.

```javascript
import chmod from 'chmod-cli';

chmod('./test.txt', '666', (err) => {
  if (err) throw err;
  console.log('File permissions have been changed.');
});
```

## File Permissions Explanation

In the numeric notation of file permissions, each digit represents a file permission group (owner permission, user group permission, other user permission). In this notation, the numeric value for each permission is:

- Read permission: `4`
- Write permission: `2`
- Execute permission: `1`

Therefore, `777` means:

- Owner permission: **Read** (4), **Write** (2), **Execute** (1) = `4+2+1 = 7`
- User group permission: **Read** (4), **Write** (2), **Execute** (1) = `4+2+1 = 7`
- Other user permission: **Read** (4), **Write** (2), **Execute** (1) = `4+2+1 = 7`

In total, this makes `777`, which means that the file's owner, members of the same user group, and all other users can read, write, and execute that file. This permission configuration is very open and should be used with caution.


## License

This package is licensed under the MIT License.
