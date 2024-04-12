<p align="center">
<img alt="kz logo" height="70" src="https://raw.githubusercontent.com/i11n/.github/main/img/kz/kz-text-fc.svg" />
<strong>kz-${pkgName}</strong>
</p>


<p align="center">
kz is a collection of easy-to-use utility and feature libraries for creating anything you want with the <a href="https://deno.com">Deno</a> runtime.
</p>

<h1 align="center">kz/${pkgName}</h1>

<p align="center">
<!-- @TODO Package description -->
</p>

<p align="center">
<!-- @TODO Link to documentation and other resources -->
</p>

<p align="center">
<sub>Built with ❤ by integereleven and <a href="https://github.com/i11n/kz-${pkgName}/graphs/contributors">contributors</a></sub>
</p>

<p align="center">
<a href="https://github.com/i11n/.github/blob/main/.github/CODE_OF_CONDUCT.md">
  <img alt="Contributor Covenant" src="https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg?style=flat-square" />
</a>
<a href="https://github.com/i11n/kz-${pkgName}/commits">
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/i11n/kz-${pkgName}?style=flat-square">
</a>
<a href="https://github.com/i11n/kz-${pkgName}/releases">
  <img alt="GitHub release (latest SemVer)" src="https://img.shields.io/github/v/release/i11n/kz-${pkgName}?style=flat-square" />
</a>
<a href="https://github.com/i11n/kz-${pkgName}/issues">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues-raw/i11n/kz-${pkgName}?style=flat-square">
</a>
</p>

## Table of contents

- [Features](#features)
- [Installation](#installation)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Features

[(to top)](#table-of-contents)

<!-- @TODO Enumerate key features -->

## Installation

[(to top)](#table-of-contents)

### JSR

[jsr][JSR] is used for stable releases.

To install, simply run the `deno add` command:

```bash
$ deno add @kz/${pkgName}
```

You may also specify a specific version:

```bash
$ deno add @kz/${pkgName}@^0.0.1
```

And then import into your module.

```ts
import {} from '@kz/${pkgName}';
```

### denopkg.com

If you require a development or unstable release, you can use denopkg.com to import a package.

```ts
// deno.json
{
  "imports": {
    "@kz/${pkgName}": "https://denopkg.com/i11n/kz-${pkgName}",
  }
}
```

You may also specify a release or branch.

```ts
// deno.json
{
  "imports": {
    "@kz/${pkgName}": "https://denopkg.com/i11n/kz-${pkgName}@dev",
  }
}
```

And then import into your module.

```ts
import {} from '@kz/${pkgName}';
```


## Examples

[(to top)](#table-of-contents)

<!-- @TODO Add an example, or add links to examples -->

```ts
```

## Contributing

[(to top)](#table-of-contents)

Contributions are welcome! Take a look at our [contributing guidelines][contributing] to get started.

## License

[(to top)](#table-of-contents)

The MIT License (MIT) 2022 integereleven. Refer to [LICENSE][license] for details.

<p align="center">
<img
  alt="kz.io logo"
  height="64"
  src="https://raw.githubusercontent.com/i11n/.github/main/profile/img/fc/open.svg"
/>
</p>

[deno]: https://deno.dom "Deno homepage"
[jsr]: https://jsr.io "JSR homepage"
[branches]: https://github.com/i11n/kz-${pkgName}/branches "@kz/${pkgName} branches on GitHub"
[releases]: https://github.com/i11n/kz-${pkgName}/releases "@kz/${pkgName} releases on GitHub"
[contributing]: https://github.com/i11n/kz-${pkgName}/blob/main/CONTRIBUTING.md "@kz/${pkgName} contributing guidelines"
[license]: https://github.com/i11n/kz-${pkgName}/blob/main/LICENSE "@kz/${pkgName} license"
