import { Plugin } from 'obsidian';

export default class RevealFilePlugin extends Plugin {
	async onload(): Promise<void> {
		this.registerEvent(this.app.workspace.on('file-open', () => {
			(this.app as any).commands.executeCommandById('file-explorer:reveal-active-file');
		}));
	}

	async onunload(): Promise<void> {
		console.log('Unloading RevealFilePlugin');
	}
}