import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Features");
    }

    async getHtml() {
        return `
            <section id="hero">
                <h2>Handcrafted, Home-made masterpieces</h2>
                <form id="form" action="https://www.freecodecamp.com/email-submit">
                    <input type="email" id="email" name="email" placeholder="Enter your email address" required>
                    <input id="submit" type="submit" value="GET STARTED" class="btn">
                </form>		
            </section>
            <br>
            <div class="container">
                <section id="features">
                    <div class="grid">
                        <div class="icon"><i class="fa fa-3x fa-fire"></i></div>
                        <div class="desc">
                            <h2>Premium Materials</h2>
                            <p>Our trombones use the shiniest brass which is sourced locally. This
                                will increase the longevity of your purchase with optimum performance.</p>
                        </div>	
                    </div>
                    <div class="grid">
                        <div class="icon"><i class="fa fa-3x fa-truck"></i></div>
                        <div class="desc">
                            <h2>Fast Shipping</h2>
                            <p>We make sure you recieve your trombone as soon as we have finished
                                making it. We also provide free returns if you are not satisfied.</p>
                        </div>
                    </div>
                    <div class="grid">
                        <div class="icon"><i class="fa fa-3x fa-battery-full" aria-hidden="true"></i></div>
                        <div class="desc">
                            <h2>Quality Assurance</h2>
                            <p>For every purchase you make, we will ensure there are no damages or faults and we will check and test the pitch of your instrument.</p>
                        </div>
                    </div>
                </section>
        `;
    }
}