import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Contact Us");
    }

    async getHtml() {
        return `
            <section id="pricing">
                <div class="product" id="tenor">
                    <div class="level">Tenor Trombone</div>
                    <h2>$500</h2>
                    <ol>
                        <li>Cat ipsum.</li>
                        <li>Cat ipsum.</li>
                        <li>Cat ipsum dolor.</li>
                        <li>Cat ipsum.</li>
                    </ol>
                    <button class="btn">Select</button>
                </div>	
                <div class="product" id="bass">
                    <div class="level">Bass</div>
                    <h2>$800</h2>
                    <ol>
                        <li>Cat ipsum.</li>
                        <li>Cat ipsum.</li>
                        <li>Cat ipsum dolor.</li>
                        <li>Cat ipsum.</li>
                    </ol>
                    <button class="btn">Select</button>
                </div>
                <div class="product" id="valve">
                    <div class="level">Valve Trombone</div>
                    <h2>$1100</h2>
                    <ol>
                        <li>Plays similar, just like a Trumpet.</li>
                        <li>Amazing for Jazz Bands.</li>
                        <li>Cat ipsum dolor.</li>
                        <li>Cat ipsum.</li>
                    </ol>
                    <button class="btn">Select</button>
                </div>	
            </section>
            
            <footer>
			    <ul>
				    <li><a href="#">Privacy</a></li>
				    <li><a href="#">Terms</a></li>
				    <li><a href="#">Contact</a></li>
			    </ul>
			    <span>Copyright 2021, Original Trombones</span>
		    </footer>
        `;
    }
}