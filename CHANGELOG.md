# [3.1.0](https://github.com/xobotyi/cnbuilder/compare/v3.0.1...v3.1.0) (2021-12-27)


### Features

* enhance performance ([7aefefd](https://github.com/xobotyi/cnbuilder/commit/7aefefd2a3f9ee73326e32cf7b820a5b3a3280b2))

## [3.0.1](https://github.com/xobotyi/cnbuilder/compare/v3.0.0...v3.0.1) (2021-07-11)


### Bug Fixes

* proper package.json configuration ([a1d2e43](https://github.com/xobotyi/cnbuilder/commit/a1d2e43b22274e0cc229d503a69e4ddc3598f35a))

# [3.0.0](https://github.com/xobotyi/cnbuilder/compare/v2.7.1...v3.0.0) (2021-07-11)


### Features

* tweak distribution bundle and build process ([09ee7ce](https://github.com/xobotyi/cnbuilder/commit/09ee7ceffbb6125dac1670039606566cc817ed75))


### BREAKING CHANGES

* now distributed version contained in separate folders: `cjs`, `esm` and
`esnext`

To include esnext version of package you now have to do
`import { cnb } from 'cnbuilder/esnext'`

## [2.7.1](https://github.com/xobotyi/cnbuilder/compare/v2.7.0...v2.7.1) (2021-07-10)


### Bug Fixes

* get rid of types.ts file ([37071e7](https://github.com/xobotyi/cnbuilder/commit/37071e782b527391199c6b21581ac881af242904))

# [2.7.0](https://github.com/xobotyi/cnbuilder/compare/v2.6.0...v2.7.0) (2021-07-10)


### Features

* improve performance on arrays and objects ([58dda12](https://github.com/xobotyi/cnbuilder/commit/58dda1220efa6f5dee98d07513b8eb441303c6a4))

# [2.6.0](https://github.com/xobotyi/cnbuilder/compare/v2.5.0...v2.6.0) (2020-06-11)


### Features

* export ClassValue type from index file. ([4778493](https://github.com/xobotyi/cnbuilder/commit/4778493f85e28e716ecf797fe64abaf7496f5470))

# [2.5.0](https://github.com/xobotyi/cnbuilder/compare/v2.4.0...v2.5.0) (2020-05-21)


### Features

* add patreon funding link ([5e4ebce](https://github.com/xobotyi/cnbuilder/commit/5e4ebce409b718d3593f2530bea0ffe41ae96ba8))
* compatibility level now at ES5 ([de0b7b0](https://github.com/xobotyi/cnbuilder/commit/de0b7b0bf71341c0477ff7a6fe1bc6477d290e59))

# [2.4.0](https://github.com/xobotyi/cnbuilder/compare/v2.3.0...v2.4.0) (2020-03-02)


### Bug Fixes

* **lint:** rename interface to pass linting. ([d981f98](https://github.com/xobotyi/cnbuilder/commit/d981f983e985be01105563e465e7f0020047f971))


### Features

* **benchmarks:** add the common version browser benchmarks. ([aed60ac](https://github.com/xobotyi/cnbuilder/commit/aed60ac7991e62b4c1b3d46a290fced0fb03f331))

# [2.3.0](https://github.com/xobotyi/cnbuilder/compare/v2.2.1...v2.3.0) (2020-02-18)


### Features

* **types:** object value now can be anything, cause we only need to cast it to boolean, it gives more versatile usage; ([7d1ced4](https://github.com/xobotyi/cnbuilder/commit/7d1ced48d7439972917b372c42cd223fb963428a))

## [2.2.1](https://github.com/xobotyi/cnbuilder/compare/v2.2.0...v2.2.1) (2020-02-18)


### Bug Fixes

* **readme:** fix travis and codacy badges links; ([ce61eca](https://github.com/xobotyi/cnbuilder/commit/ce61ecab2d5e7efe8e2ac15c6abf42d56258d1c6))

# [2.2.0](https://github.com/xobotyi/cnbuilder/compare/v2.1.0...v2.2.0) (2020-02-17)


### Features

* add prepublish build script so dist dir never lost; ([23538b4](https://github.com/xobotyi/cnbuilder/commit/23538b4db4a8fc4d6297a8f94c9e01d4170a64a9))

# [2.1.0](https://github.com/xobotyi/cnbuilder/compare/v2.0.0...v2.1.0) (2020-02-17)


### Features

* dcnb tests; ([fc1f1f0](https://github.com/xobotyi/cnbuilder/commit/fc1f1f08dd0ea2070fe5186545016ad917f3ed3c))
* rewritten cnb tests; ([52355ce](https://github.com/xobotyi/cnbuilder/commit/52355ce51dcc59ec8bfe1da055fbf1910144c1b1))

# [2.0.0](https://github.com/xobotyi/cnbuilder/compare/v1.2.1...v2.0.0) (2020-02-17)


### Features

* added dedupe module version; ([1c61c3f](https://github.com/xobotyi/cnbuilder/commit/1c61c3fd2567d8586e22e46f02c6cc8050f8dcb5))


### BREAKING CHANGES

* now package have named exports `cnb` and `dcnb` from the index;

## [1.2.1](https://github.com/xobotyi/cnbuilder/compare/v1.2.0...v1.2.1) (2020-02-16)


### Bug Fixes

* **travis:** fix travis jobs; ([31382fb](https://github.com/xobotyi/cnbuilder/commit/31382fb2953d44facaa099fb30c671af15f86779))

# [1.2.0](https://github.com/xobotyi/cnbuilder/compare/v1.1.7...v1.2.0) (2020-02-16)


### Bug Fixes

* **deps:** add semantic release plugins; ([be22328](https://github.com/xobotyi/cnbuilder/commit/be2232809e601e60772a8296e663bb9ab3c9047c))
* **deps:** add semantic release plugins; ([62f987c](https://github.com/xobotyi/cnbuilder/commit/62f987ca2c4cd42accf60b8bc87b30ba388526ab))
* **readme:** lost a line during edits; ([80a6414](https://github.com/xobotyi/cnbuilder/commit/80a641437d153a8d098dfaa797b6400bee1984c8))
* **readme:** reword a bit; ([002b9e8](https://github.com/xobotyi/cnbuilder/commit/002b9e8d7e823b8b9d5605627dd71b8b64c7cd91))
* **readme:** typo; ([e5567f5](https://github.com/xobotyi/cnbuilder/commit/e5567f584b18b6f42ec0a75739c41193a9229577))


### Features

* add npm cnb to benchmarking (useful for development) ([ec7706c](https://github.com/xobotyi/cnbuilder/commit/ec7706ce129a7338f046bb3e45457c64d08801e6))
* benchmarks now are way simpler; ([340167b](https://github.com/xobotyi/cnbuilder/commit/340167b2a8d8300f29e3e17fd5637d1efa1da60e))
* bring in the eslint; ([f6ad0d5](https://github.com/xobotyi/cnbuilder/commit/f6ad0d50bfbd933a67986c044738ad84df5840d9))
* jest config moved to separate file; ([dddeb73](https://github.com/xobotyi/cnbuilder/commit/dddeb73d22d65fb4eed9472dce053c6120419a62))
* put versioning under semantic release control. ([e26be38](https://github.com/xobotyi/cnbuilder/commit/e26be38f1d5aae203d43e624c05a36a3cb72fa3e))
* rework the method, now it works faster on most cases + now it does not emit most of eslint errors; ([a884d61](https://github.com/xobotyi/cnbuilder/commit/a884d617103d9266d19a507e60097b55a0073b0f))
