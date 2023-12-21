/**
 * Changing file permissions
 * @param {import('fs').PathLike} path
 * @param {string|number} mode
 * @param {(err: Error | null) => void} callback
 */
export default function chmod(path: import('fs').PathLike, mode: string | number, callback: (err: Error | null) => void): void;