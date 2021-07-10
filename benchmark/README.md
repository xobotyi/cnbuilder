## `cnbuilder` benchmarks

### Node.js

To run benchmarks - run below command from package root;

```bash
# to run cnb benchmarks
yarn && yarn build && cd benchmark && yarn bench:common
# or dcnb
yarn && yarn build && cd benchmark && yarn bench:dedupe
```

##### Recent results
Below results received with nodejs 16 run on Win10 Ryzen 3950x with 32 Gb of RAM.

#### `cnb` (common version)
> *Note:* `classcat` has different api, not compatible with `classnames`.
```
# strings
  classnames x 4,083,509 ops/sec ±0.22% (93 runs sampled)
  classcat   x 8,472,407 ops/sec ±0.42% (93 runs sampled)
  clsx       x 9,088,617 ops/sec ±0.38% (94 runs sampled)
  cnbuilder  x 9,603,856 ops/sec ±0.37% (94 runs sampled)
 Fastest is cnbuilder

# objects
  classnames x 3,811,117 ops/sec ±0.29% (95 runs sampled)
  classcat   x 7,446,222 ops/sec ±1.07% (94 runs sampled)
  clsx       x 5,821,173 ops/sec ±1.51% (94 runs sampled)
  cnbuilder  x 7,519,923 ops/sec ±0.21% (95 runs sampled)
 Fastest is cnbuilder (npm), classcat

# arrays
  classnames x 2,069,671 ops/sec ±0.28% (93 runs sampled)
  classcat   x 6,669,109 ops/sec ±0.96% (92 runs sampled)
  clsx       x 6,680,288 ops/sec ±0.55% (96 runs sampled)
  cnbuilder  x 6,959,989 ops/sec ±0.51% (94 runs sampled)
 Fastest is cnbuilder

# nested arrays
  classnames x 1,249,296 ops/sec ±0.22% (94 runs sampled)
  classcat   x 5,470,455 ops/sec ±0.65% (94 runs sampled)
  clsx       x 5,295,335 ops/sec ±0.31% (96 runs sampled)
  cnbuilder  x 5,739,216 ops/sec ±1.03% (93 runs sampled)
 Fastest is cnbuilder

# objects nested in arrays
  classnames x 1,938,154 ops/sec ±0.35% (95 runs sampled)
  classcat   x 5,719,322 ops/sec ±1.71% (91 runs sampled)
  clsx       x 5,164,636 ops/sec ±0.33% (95 runs sampled)
  cnbuilder  x 5,787,434 ops/sec ±0.64% (98 runs sampled)
 Fastest is cnbuilder

# mixed
  classnames x 2,552,973 ops/sec ±0.21% (93 runs sampled)
  classcat   x 5,967,660 ops/sec ±1.46% (93 runs sampled)
  clsx       x 5,684,660 ops/sec ±0.52% (95 runs sampled)
  cnbuilder  x 6,140,257 ops/sec ±0.98% (94 runs sampled)
 Fastest is cnbuilder 

# mixed with wrong data
  classnames x 1,210,149 ops/sec ±0.31% (95 runs sampled)
  classcat   x 1,607,124 ops/sec ±0.23% (97 runs sampled)
  clsx       x 1,935,682 ops/sec ±0.24% (96 runs sampled)
  cnbuilder  x 1,994,307 ops/sec ±1.19% (92 runs sampled)
 Fastest is cnbuilder
```

#### `dcnb` (dedupe version)

```
# strings
  classnamesx 705,991 ops/sec ±0.22% (96 runs sampled)
  cnbuilder x 853,845 ops/sec ±0.42% (93 runs sampled)
 Fastest is cnbuilder

# objects
  classnamesx 2,664,555 ops/sec ±0.67% (96 runs sampled)
  cnbuilder x 4,066,849 ops/sec ±1.01% (94 runs sampled)
 Fastest is cnbuilder

# arrays
  classnames x 636,730 ops/sec ±0.39% (95 runs sampled)
  cnbuilder  x 678,502 ops/sec ±0.34% (97 runs sampled)
 Fastest is cnbuilder

# nested arrays
  classnamesx 748,978 ops/sec ±0.23% (95 runs sampled)
  cnbuilder x 860,963 ops/sec ±0.30% (96 runs sampled)
 Fastest is cnbuilder

# objects nested in arrays
  classnames x 1,309,636 ops/sec ±0.65% (95 runs sampled)
  cnbuilder  x 1,400,022 ops/sec ±0.62% (92 runs sampled)
 Fastest is cnbuilder

# mixed
  classnames x 1,537,635 ops/sec ±0.25% (97 runs sampled)
  cnbuilder  x 1,985,006 ops/sec ±0.24% (97 runs sampled)
 Fastest is cnbuilder

# mixed with wrong data
  classnames x 425,943 ops/sec ±0.26% (93 runs sampled)
  cnbuilder  x 468,798 ops/sec ±0.46% (96 runs sampled)
 Fastest is cnbuilder
```

