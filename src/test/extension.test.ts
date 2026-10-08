// src/test/extension.test.ts
import * as assert from 'assert';
import * as vscode from 'vscode';

const EXT_ID = 'kych-net.underhell-elements';

suite('Extension Test Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    test('Extension should be present', () => {
        assert.ok(vscode.extensions.getExtension(EXT_ID));
    });

    test('Extension should activate', async () => {
        const extension = vscode.extensions.getExtension(EXT_ID);
        if (extension) {
            await extension.activate();
            assert.strictEqual(extension.isActive, true);
        }
    });

    test('Element commands should be registered', async () => {
        const commands = await vscode.commands.getCommands();
        for (const name of ['scan', 'complement', 'cleanup', 'sort', 'rename', 'refresh']) {
            assert.ok(commands.includes(`underhell.elements.${name}`));
        }
    });

    test('Package.json should have required fields', () => {
        const packageJson = require('../../package.json');
        assert.ok(packageJson.name);
        assert.ok(packageJson.displayName);
        assert.ok(packageJson.description);
        assert.ok(packageJson.version);
        assert.ok(packageJson.engines.vscode);
    });
});
