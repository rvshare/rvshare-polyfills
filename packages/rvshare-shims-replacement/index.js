/**
 * "Forked" from: https://gist.github.com/lencioni/6bccd9e5071271da4175776de29f25d0
 *
 * Usage:
 *
 *    plugins: [
 *      ...moduleReplacementsPlugins().map(
 *        ([regex, filePath]) => new webpack.NormalModuleReplacementPlugin(regex, filePath),
 *      ),
 *    ]
 */
function shimsReplacements() {
  // Avoid unnecessary shims packages nested in dependencies.
  const moduleReplacements = [
    [/^object[-.]assign$/, require.resolve('./shims/object.assign')],
    [/^array-includes$/, require.resolve('./shims/array.includes')],
    [/^array\.prototype\.flat(ten)?$/, require.resolve('./shims/array.prototype.flat')],
    [/^array\.prototype\.flatmap$/, require.resolve('./shims/array.prototype.flatmap')],
    [/^function-bind$/, require.resolve('./shims/function-bind')],
    [/^function\.prototype\.name$/, require.resolve('./shims/function.prototype.name')],
    [/^has$/, require.resolve('./shims/has')],
    [/^is-?array$/, require.resolve('./shims/isarray')],
    [/^promise\.prototype\.finally$/, require.resolve('./shims/promise.prototype.finally')],
    [/^object-keys$/, require.resolve('./shims/object.keys')],
    [/^object\.entries$/, require.resolve('./shims/object.entries')],
    [/^object\.values$/, require.resolve('./shims/object.values')],
    [/^object\.fromentries$/, require.resolve('./shims/object.fromentries')],
    [
      /^object\.getownpropertydescriptors$/,
      require.resolve('./shims/object.getownpropertydescriptors'),
    ],
    [/^raf$/, require.resolve('./shims/raf')],
    [/^regexp\.prototype\.flags$/, require.resolve('./shims/regexp.prototype.flags')],
    [/^string\.prototype\.matchall$/, require.resolve('./shims/string.prototype.matchall')],
    [/^string\.prototype\.padstart$/, require.resolve('./shims/string.prototype.padstart')],
    [/^string\.prototype\.padend$/, require.resolve('./shims/string.prototype.padend')],
    [/^string\.prototype\.trim$/, require.resolve('./shims/string.prototype.trim')],
    [/^symbol\.prototype\.description$/, require.resolve('./shims/symbol.prototype.description')],
  ];

  return moduleReplacements;
}

module.exports = shimsReplacements;
