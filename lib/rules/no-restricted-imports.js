/**
 * @author Jackson Hammond
 * See LICENSE file in root directory for full license.
 */
'use strict'

const { wrapCoreRule } = require('../utils')

// eslint-disable-next-line no-invalid-meta, no-invalid-meta-docs-categories
module.exports = wrapCoreRule('no-restricted-imports', {
  applyDocument: true
})
