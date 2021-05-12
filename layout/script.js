addEventListener('click', e => this.onClick.bind(e)());

function onClick() {
    if (this.target.id) {
        reducer(this.target.id);
    }
}

function reducer(action) {
    switch (action) {
        case 'layer-trigger': switchToLayerExample(); break;
        case 'input-trigger': switchToInputExample(); break;
    }
}

function switchToLayerExample() {
    let content = `
    <section id="layer-example">
        <div class="layer-1">1</div>
        <div class="layer-2">2</div>
        <div class="layer-3">3</div>
    </section>
    `;
    this.setViewer(content);
}

function switchToInputExample() {
    let content = `
    <section id="input-example">
        <fieldset>
            <input placeholder="username" type="text">
            <legend>username</legend>
        </fieldset>
        <span>
            <input id="have-read" type="checkbox">
            <label for="have-read">我已閱讀</label>
        </span>
        <ul>
            <h4>性別:</h4>
            <li>
                <input id="gender-male" name="gender" type="radio" value="male">
                <label for="gender-male">男</label>
            </li>
            <li>
                <input id="gender-female" name="gender" type="radio" value="female">
                <label for="gender-female">女</label>
            </li>
            <li>
                <input id="gender-unknow" name="gender" type="radio" value="unknow">
                <label for="gender-unknow">未知</label>
            </li>
        </ul>
    </section>
    `;
    this.setViewer(content);
}

function setViewer(content) {
    let viewer = document.getElementsByTagName('main')[0];
    viewer.innerHTML = content;
}