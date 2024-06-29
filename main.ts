import { Plugin } from 'obsidian';

export default class RevealFilePlugin extends Plugin {
	async onload() {
		this.registerEvent(this.app.workspace.on('file-open', () => {
			(this.app as any).commands.executeCommandById('file-explorer:reveal-active-file');
		}));
	}

	onunload() {
		console.log('Unloading RevealFilePlugin');
	}
}