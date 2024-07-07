'use strict';
function a() {
    const t = [
        'Sequelize',
        'value',
        'DataTypes',
        '12145uZBkrW',
        '43879ywzKNq',
        '384ipQaYN',
        'BkDve',
        '_uuid()',
        '136323tOjFOt',
        'literal',
        'sequelize',
        '18945volMph',
        '693028FqugXD',
        'UUID',
        'defineProp',
        'erty',
        'QKFex',
        '370QuZcyi',
        '21dpzXuV',
        '472KdiSDq',
        '5GldESe',
        'gen_random',
        'all',
        'XCeKI',
        'exports',
        '366nnyGNp',
        'changeColu',
        '__esModule',
        '193713pOeIKl',
        'djJRe',
        'ApiConfigs',
        '58202QhPYLf'
    ];
    a = function () {
        return t;
    };
    return a();
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x1b0)) / (-0x2089 * -0x1 + 0x15 * 0x66 + 0xf * -0x2ba) + -parseInt(m(0x1a7)) / (-0x211a * 0x1 + -0xdd * -0x6 + 0x1bee) * (-parseInt(l(0x1ba)) / (-0x1fd0 + 0x1942 + 0x691 * 0x1)) + parseInt(l(0x1b4)) / (-0xd67 + -0x79d + 0x1508) * (parseInt(m(0x1bc)) / (-0xb5e + -0xc69 * -0x2 + -0xd6f)) + parseInt(m(0x1a1)) / (0x1 * 0xf07 + -0x1264 + 0x121 * 0x3) * (-parseInt(m(0x1ab)) / (-0x11 * -0xe6 + 0x203a + -0x2f79)) + parseInt(l(0x1bb)) / (0x1bca + -0xb * -0xf9 + -0x2675 * 0x1) * (parseInt(m(0x1b3)) / (0x1 * 0x1bd + 0x61f + 0x1 * -0x7d3)) + parseInt(m(0x1b9)) / (0x16 * 0x2 + -0xba9 + 0xb87) * (parseInt(m(0x1ac)) / (-0x224a + 0x145 + 0x2110)) + parseInt(l(0x1ad)) / (0x899 + 0x132c + -0x1bb9) * (-parseInt(l(0x1a4)) / (0x263a + 0x6be + -0x2ceb));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3a4c0 + -0x194eb * -0x1 + -0x22303));
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb9 * -0x9 + -0xdf * -0x21 + -0x21a1);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[n(0x1a9)] = !![], Object[n(0x1b6) + o(0x1b7)](exports, o(0x1a3), k);
const sequelize_1 = require(o(0x1b2));
module[n(0x1a0)] = {
    'up': d => {
        const p = n, q = o, e = {};
        e[p(0x1a5)] = p(0x1a6), e[q(0x19f)] = p(0x1bd) + p(0x1af);
        const f = e;
        return Promise[p(0x1be)]([d[p(0x1a2) + 'mn'](f[q(0x1a5)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[p(0x1aa)][p(0x1b5)],
                'defaultValue': sequelize_1[q(0x1a8)][q(0x1b1)](f[p(0x19f)])
            })]);
    },
    'down': d => {
        const r = o, s = n, e = {};
        e[r(0x1b8)] = r(0x1a6), e[r(0x1ae)] = r(0x1bd) + s(0x1af);
        const f = e;
        return Promise[s(0x1be)]([d[r(0x1a2) + 'mn'](f[r(0x1b8)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[s(0x1aa)][r(0x1b5)],
                'defaultValue': sequelize_1[r(0x1a8)][r(0x1b1)](f[s(0x1ae)])
            })]);
    }
};