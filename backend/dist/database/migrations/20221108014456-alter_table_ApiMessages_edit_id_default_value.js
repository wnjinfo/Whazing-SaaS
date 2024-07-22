'use strict';
const n = b, o = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1d7 * -0xb + 0x18e9 + -0x37a);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x14c)) / (0x22 * -0x101 + 0x1 * 0x1c5f + 0x5c4) + -parseInt(m(0x147)) / (0x3b * 0x4f + -0x59d + -0x9 * 0x166) * (parseInt(l(0x13b)) / (-0x1 * 0x23f3 + 0x96 * -0x39 + 0x455c)) + parseInt(m(0x134)) / (0x2302 + 0x1 * -0x72b + -0x1bd3) + -parseInt(m(0x146)) / (0x166f + -0xb66 + -0xb04) * (parseInt(l(0x138)) / (-0x71f * -0x4 + 0x23bb + -0x4031)) + -parseInt(m(0x13f)) / (-0x2360 + 0x1e2a + 0x53d) * (parseInt(m(0x13e)) / (0x1f0c + 0x268 * 0x8 + 0x4 * -0xc91)) + parseInt(m(0x14d)) / (-0x2159 + 0x14c + 0x2016) + parseInt(l(0x13c)) / (0xc5 * -0x2b + 0x43c * 0x1 + 0x1ce5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x14cf34 + 0x2 * 0x45dd9 + 0x1c * -0xa382));
const k = {};
function a() {
    const t = [
        '4WMQZQf',
        'defineProp',
        'changeColu',
        'USJCX',
        'literal',
        '471128mZnloH',
        '11469924VdVoJo',
        'ApiMessage',
        '__esModule',
        'exzXh',
        '974648nAiKHH',
        'mgaCa',
        'VMwTe',
        'UUID',
        '1250658NTppCn',
        'all',
        '_uuid()',
        '1291587cmTXMI',
        '24197430nsPGPE',
        'gen_random',
        '5984dSMYjy',
        '11382aByekf',
        'DataTypes',
        'sequelize',
        'Sequelize',
        'exports',
        'value',
        'erty',
        '15SWkISk'
    ];
    a = function () {
        return t;
    };
    return a();
}
k[n(0x144)] = !![], Object[o(0x148) + n(0x145)](exports, o(0x132), k);
const sequelize_1 = require(n(0x141));
module[n(0x143)] = {
    'up': d => {
        const p = n, q = o, e = {};
        e[p(0x135)] = p(0x14e) + 's', e[p(0x14a)] = p(0x13d) + q(0x13a);
        const f = e;
        return Promise[q(0x139)]([d[p(0x149) + 'mn'](f[p(0x135)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[q(0x140)][p(0x137)],
                'defaultValue': sequelize_1[p(0x142)][q(0x14b)](f[p(0x14a)])
            })]);
    },
    'down': d => {
        const r = n, s = n, e = {};
        e[r(0x136)] = r(0x14e) + 's', e[s(0x133)] = r(0x13d) + r(0x13a);
        const f = e;
        return Promise[r(0x139)]([d[r(0x149) + 'mn'](f[r(0x136)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[r(0x140)][s(0x137)],
                'defaultValue': sequelize_1[s(0x142)][r(0x14b)](f[r(0x133)])
            })]);
    }
};