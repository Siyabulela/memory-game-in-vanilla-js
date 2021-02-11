let { JSDOM } = require(`jsdom`);

describe(`index.html`, function () {
  let browser;
  beforeEach(function (done) {
    JSDOM.fromFile(`index.html`).then(function (res) {
      browser = res;
      done();
    });
  });

  afterEach(function () {
    browser.window.close();
  });

  it(`should have <section/> element`, function () {
    let section = browser.window.document.querySelector(`section`);
    expect(section).not.toBe(null);
  });
  it(`should have <div/> element`, function () {
    let h1 = browser.window.document.querySelector(`div`);
    expect(h1).not.toBe(null);
  });
  it(`should have <img/> element`, function () {
    let img = browser.window.document.querySelector(`img`);
    expect(img).not.toBe(null);
  });
  it(`should have <script/> element`, function () {
    let script = browser.window.document.querySelector(`script`);
    expect(script).not.toBe(null);
  });
  it(`should have <table/> and other table element`, function () {
    let table = browser.window.document.querySelector(`table`);
    let td = browser.window.document.querySelector(`td`);
    let th = browser.window.document.querySelector(`th`);
    let tr = browser.window.document.querySelector(`tr`);
    expect(table).not.toBe(null);
    expect(td).not.toBe(null);
    expect(th).not.toBe(null);
    expect(tr).not.toBe(null);
  });
});

