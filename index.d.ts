/**
 * Updates a TextMate grammar from a GitHub repository.
 *
 * @param {string} repoId Github identifier of the grammar repository. For example `microsoft/TypeScript-TmLanguage`.
 * @param {string} repoPath Path to the grammar file inside the repository.
 * @param {string} dest Path to write the generated grammar file to
 * @param {undefined | ((grammar: any) => any)} modifyGrammar Optional function which modifies the grammar data object before it is written.
 * @param {string} version Branch to get the repo from
 * @param {string} packageJsonPathOverride
 *
 * @returns {Promise<void>}
 */
export function update(repoId: string, repoPath: string, dest: string, modifyGrammar: ((grammar: any) => any) | undefined, version?: string, packageJsonPathOverride?: string): Promise<void>;
