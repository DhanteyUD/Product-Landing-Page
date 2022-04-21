import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("About Us");
    }

    async getHtml() {
        return `
            <section id="how-it-works">
                <iframe id="video" height="315" src="https://www.youtube-nocookie.com/embed/y8Yv4pnO7qc?rel=0&amp;controls=0&amp;showinfo=0"
                frameborder="0" allowfullscreen></iframe>
            </section>
        `;
    }
}