// src/test/suite/integration.test.ts - Integration tests
import * as assert from 'assert';
import * as vscode from 'vscode';

const EXT_ID = 'kych-net.underhell-elements';

suite('Integration Test Suite', () => {
    test('Extension contributes correct commands', () => {
        const extension = vscode.extensions.getExtension(EXT_ID);
        const packageJson = extension?.packageJSON;

        assert.ok(packageJson.contributes.commands);
        assert.strictEqual(packageJson.contributes.commands.length, 6);
        assert.strictEqual(packageJson.contributes.commands[0].command, 'underhell.elements.scan');
    });

    test('Extension contributes the element management view', () => {
        const extension = vscode.extensions.getExtension(EXT_ID);
        const packageJson = extension?.packageJSON;
        assert.ok(packageJson.contributes.views.underhellElementExplorer);
    });
});
