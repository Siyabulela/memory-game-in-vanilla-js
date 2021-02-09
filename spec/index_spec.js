var { JSDOM } = require(`jsdom`);

describe(`index.html`, function() {
    var browser;

    beforeEach(function(done) {
        JSDOM.fromFile(`index.html`).then(function(res) {
            browser = res;
            done();
        });
    });

    afterEach(function() {
        browser.window.close();
    });

    it(`should have <section/> element`, function() {
        var section = browser.window.document.querySelector(`section`);
        expect(section).not.toBe(null);
    });
    it(`should have <div/> element`, function() {
        var h1 = browser.window.document.querySelector(`div`);
        expect(h1).not.toBe(null);
    });
    it(`should have <img/> element`, function() {
        var img = browser.window.document.querySelector(`img`);
        expect(img).not.toBe(null);
    });
    it(`should have <script/> element`, function() {
        var script = browser.window.document.querySelector(`script`);
        expect(script).not.toBe(null);
    });
});