chmod-cli
===

A simple command line tool for changing file permissions

## Installation

```shell
$ npm install chmod-cli
# Or
$ npm install --global chmod-cli
```

## Usage

```bash
$ chmod --help

  A simple Node.js module for changing file permissions.

  Usage: $ chmod <path> …
  
  Options:
    --mode, -m    The new permissions for the file or directory.
                  This can be a numeric mode (e.g. 666),
                  or a string mode (e.g. 'rwxr-xr-x')
  
  Examples:
  
    $ chmod test.js xxx.js -m 777
    $ chmod test.js -m 777
    $ chmod-cli test.js -m 777

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

## License

This package is licensed under the MIT License.