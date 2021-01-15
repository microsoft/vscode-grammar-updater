/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const grammarImporter = require('./');

if (process.argv.length <= 2) {
    console.log('Usage: vscode-grammar-importer repoName (repoPath destinationPath)+');
    return;
}
for (var i = 3; i < process.argv.length; i += 2) {
    grammarImporter.update(process.argv[2], process.argv[i], process.argv[i + 1]);
}
