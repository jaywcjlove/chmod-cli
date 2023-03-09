import fs from 'node:fs';

/**
 * Changing file permissions
 * @param {import('fs').PathLike} path 
 * @param {string|number} mode 
 * @param {(err: Error | null) => void} callback 
 */
export default function chmod(path, mode, callback) {
  // 检查参数
  if (typeof path !== 'string') {
    throw new TypeError('path must be a string');
  }
  if (typeof mode !== 'string' && typeof mode !== 'number') {
    throw new TypeError('mode must be a string or number');
  }
  if (typeof callback !== 'function') {
    throw new TypeError('callback must be a function');
  }

  fs.chmod(path, mode, (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  });
}