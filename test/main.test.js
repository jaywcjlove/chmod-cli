import fs from 'node:fs';
import chmod from '../chmod';

describe('chmod()', () => {
  it('should change file mode to 755', () => {
    const filePath = './test/test.txt';
    chmod(filePath, '755', (err) => {
      fs.stat(filePath, (err, stat) => {
        expect(stat.mode & 0o777).toEqual(0o755);
      });
    });
    expect(() => chmod()).toThrow(TypeError);
    expect(() => chmod(filePath)).toThrow(TypeError);
    expect(() => chmod(filePath, '755')).toThrow(TypeError);
    chmod('./filePath.test', '755', (err) => {
      expect(err.message).toEqual(`ENOENT: no such file or directory, chmod './filePath.test'`);
    })
    chmod(filePath, '755', (err) => {
      expect(err).toBeNull();
    })
  })
})