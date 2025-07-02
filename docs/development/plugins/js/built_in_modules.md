# 内置模块

为方便插件开发者使用，Serein 按照 NodeJs 的风格内置了一些基本的函数

所有模块已默认导入到上下文中，所以你可以直接使用

## `fs`

```ts title="示例"
fs.writeFileSync("1.txt", "Hello, World!");
fs.copyFileSync("1.txt", "2.txt");
```

:::warning

- ~~因懒得实现`Buffer`类~~，所有`Buffer`均使用`integer[]`代替，方便内部.NET 代码转换
- 只实现了部分同步函数，剩余的函数可能在未来补全
- 没有进行过严格的测试，**其行为可能和 NodeJs 中的存在差异**

:::

- [`appendFileSync(path: string, data: string, options?: string | object): void`](https://nodejs.org/docs/latest/api/fs.html#fsappendfilesyncpath-data-options)
- [`appendFileSync(path: string, data: integer[], options?: string | object): void`](https://nodejs.org/docs/latest/api/fs.html#fsappendfilesyncpath-data-options)
- [`closeSync(fd: integer): void`](https://nodejs.org/docs/latest/api/fs.html#fsclosesyncfd)
- [`copyFileSync(src: string, dest: string, flags: integer = 0): void`](https://nodejs.org/docs/latest/api/fs.html#fscopyfilesyncsrc-dest-mode)
  - `flags != 1`时会覆盖原有文件（如果存在）
- [`existsSync(path: string): boolean`](https://nodejs.org/docs/latest/api/fs.html#fsexistssyncpath)
- [`fsyncSync(fd: integer)`](https://nodejs.org/docs/latest/api/fs.html#fsfsyncsyncfd)
- [`ftruncateSync(fd: integer, len: integer = 0): void`](https://nodejs.org/docs/latest/api/fs.html#fsftruncatesyncfd-len)
- [`futimesSync(fd: integer, atime: Date, mtime: Date): void`](https://nodejs.org/docs/latest/api/fs.html#fsfutimessyncfd-atime-mtime)
- [`globSync(pattern: string, options?: object): string`](https://nodejs.org/docs/latest/api/fs.html#fsglobsyncpattern-options)
- [`globSync(pattern: string[], options?: object): string`](https://nodejs.org/docs/latest/api/fs.html#fsglobsyncpattern-options)
- [`mkdirSync(path: string, options?: object): void`](https://nodejs.org/docs/latest/api/fs.html#fsmkdirsyncpath-options)
  - `options.mode`仅在非 Windows 平台上生效，这与 NodeJs 中一致，下同
- [`mkdirSync(path: string, options?: integer = 0o777): void`](https://nodejs.org/docs/latest/api/fs.html#fsmkdirsyncpath-options)
- [`mkdtempSync(prefix: string, options?: object): string`](https://nodejs.org/docs/latest/api/fs.html#fsmkdtempsyncprefix-options)
- [`openSync(path: string, flags: string, mode?: string | integer): integer`](https://nodejs.org/docs/latest/api/fs.html#fsopensyncpath-flags-mode)
  - `mode`总是会被忽略
- [`readdirSync(path: string, options?: object): string[]`](https://nodejs.org/docs/latest/api/fs.html#fsreaddirsyncpath-options)
  - 仅有`options.recursive`会生效
- [`readFileSync(path: string, options?: object): string`](https://nodejs.org/docs/latest/api/fs.html#fsreadfilesyncpath-options)
- [`readSync(fd: integet, buffer: integer[], offset: integer, length: integer, position: integer = 0): integer`](https://nodejs.org/docs/latest/api/fs.html#fsreadsyncfd-buffer-offset-length-position)
- [`renameSync(oldPath: string, newPath: string): void`](https://nodejs.org/docs/latest/api/fs.html#fsrenamesyncoldpath-newpath)
- [`rmdirSync(path: string, options?: object): void`](https://nodejs.org/docs/latest/api/fs.html#fsrmdirsyncpath-options)
  - 仅有`options.recursive`会生效
- [`rmSync(path: string, options?: object): void`](https://nodejs.org/docs/latest/api/fs.html#fsrmsyncpath-options)
  - 仅有`options.recursive`会生效
- [`symlinkSync(target: string, path: string, type?: string): void`](https://nodejs.org/docs/latest/api/fs.html#fssymlinksynctarget-path-type)
  - `type`总是会被忽略
- [`truncateSync(path: string, len: integer = 0): void`](https://nodejs.org/docs/latest/api/fs.html#fstruncatesyncpath-len)
- [`unlinkSync(path: string): void`](https://nodejs.org/docs/latest/api/fs.html#fsunlinksyncpath)
  - 实际上是删除`path`
- [`utimesSync(path: string, atime: Date, mtime: Date): void`](https://nodejs.org/docs/latest/api/fs.html#fsutimessyncpath-atime-mtime)
- [`writeFileSync(path: string, data: string, options?: string | object): void`](https://nodejs.org/docs/latest/api/fs.html#fswritefilesyncpath-data-options)
- [`writeFileSync(path: string, data: integer[], options?: string | object): void`](https://nodejs.org/docs/latest/api/fs.html#fswritefilesyncpath-data-options)
- [`writeSync(fd: integer, buffer: integer[], offset: integer, length: integer, position: integer): integer`](https://nodejs.org/docs/latest/api/fs.html#fswritesyncfd-buffer-offset-length-position)
- [`writeSync(fd: integer, data: string, position: integer = 0, encoding: string = 'utf8'): integer`](https://nodejs.org/docs/latest/api/fs.html#fswritesyncfd-buffer-offset-length-position)

## `process`

- `arch: string`
  - 实际上只会返回`"x64"`或`"arm64"`，这是因为 Serein 的发行版没有 x86 的构建（
- `argv: string[]`
- `argv0: string`
  - 即`argv[0]`
- `chdir(directory: string): string`
  - 不推荐使用此函数，否则可能**导致文件错位**
- `cwd(): string`
- `exit(code: integer = 0): void`
  - 不推荐使用此函数
- `env: { [key: string]: string }`
- `execPath: string`
- `exitCode: integer`
- `kill(pid: integer)`
- `pid: integer`
- `platform: string`
  - 实际上仅会返回`"win32nt"`、`"unix"`或`"other"`
- `version: string`
  - 返回的是.NET 运行时版本
