import { Plugin, Notice } from 'obsidian';

export default class RevealFilePlugin extends Plugin {
	private isToggled: boolean = false;

	async onload(): Promise<void> {
		this.addRibbonIcon('view', 'Toggle reveal file plugin', this.toggle.bind(this));
		this.registerEvent(this.app.workspace.on('file-open', this.revealActiveFileIfToggled.bind(this)));
	}

	async onunload(): Promise<void> {
		console.log('Unloading RevealFilePlugin');
	}

	private toggle(): void {
		new Notice(`File reveal toggle to ${this.isToggled ? 'OFF' : 'ON'}`);
		this.isToggled = !this.isToggled;
	}

	private revealActiveFileIfToggled(): void {
		if (this.isToggled) {
			(this.app as any).commands.executeCommandById('file-explorer:reveal-active-file');
		}
	}
}