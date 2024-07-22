'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x1b5)) / (0x765 + -0x91a + 0x1b6) * (-parseInt(t(0x1c9)) / (0x1289 + -0x9ec + -0x89b)) + parseInt(t(0x1a8)) / (-0x11b3 * -0x2 + -0x1fd3 + -0x39 * 0x10) + -parseInt(s(0x1b9)) / (0x112 * 0x6 + 0x21b + 0x1 * -0x883) * (-parseInt(s(0x1ab)) / (-0x20e6 + 0x7c0 + 0x11 * 0x17b)) + parseInt(s(0x19e)) / (-0xa9e * 0x2 + -0xcf + 0x1611) * (-parseInt(s(0x1b2)) / (-0xd77 + 0xb * -0x34f + -0x21 * -0x183)) + -parseInt(t(0x1c3)) / (-0x1d93 * -0x1 + -0x13f4 * 0x1 + -0x997) + parseInt(s(0x1c0)) / (-0x1b55 + -0x409 * 0x1 + -0x1 * -0x1f67) + parseInt(s(0x19f)) / (-0x478 + 0x196 * -0xd + 0x1920);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x11 * -0x840e + -0x4195b + -0x3e87 * -0x55));
function a() {
    const z = [
        'records',
        'oFWrO',
        'title',
        'hjXBS',
        'LIKE',
        '714372DYGVXD',
        'findAndCou',
        'order',
        '3301965PjsQHc',
        'length',
        'ntAll',
        'LOWER',
        'hasMore',
        'fault',
        'value',
        '8519hVuknJ',
        '__importDe',
        'where',
        '151KrBTBF',
        'erty',
        'rxmzp',
        'ls/Help',
        '4ZYaynO',
        '../../mode',
        'TAUkH',
        'Sequelize',
        'PELxQ',
        '__esModule',
        'count',
        '1784421QBhMBs',
        'limit',
        'toLowerCas',
        '2936936EbIBta',
        'default',
        'trim',
        'hEoxN',
        'ASC',
        'NaIMz',
        '2894cXXZpZ',
        'offset',
        'col',
        '4974UjHPPr',
        '5779850ZhrCwf',
        'sequelize',
        'defineProp',
        'ZmRIo'
    ];
    a = function () {
        return z;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5 * -0xb7 + 0x61 * -0x42 + -0x1 * -0x1e33);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[u(0x1b3) + u(0x1b0)] || function (c) {
    const w = u;
    return c && c[w(0x1be)] ? c : { 'default': c };
};
const k = {};
k[u(0x1b1)] = !![], Object[v(0x1a1) + v(0x1b6)](exports, u(0x1be), k);
const sequelize_1 = require(v(0x1a0)), Help_1 = __importDefault(require(u(0x1ba) + v(0x1b8))), ListService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1'
    }) => {
        const x = v, y = u, f = {};
        f[x(0x1c8)] = x(0x1ae), f[y(0x1bb)] = x(0x1a5), f[y(0x1bd)] = y(0x1a7), f[x(0x1a4)] = function (q, r) {
            return q * r;
        }, f[y(0x1c6)] = function (q, r) {
            return q - r;
        }, f[x(0x1b7)] = y(0x1c7), f[x(0x1a6)] = function (q, r) {
            return q > r;
        }, f[y(0x1a2)] = function (q, r) {
            return q + r;
        };
        const g = f, h = { [sequelize_1['Op']['or']]: [{ 'title': sequelize_1[x(0x1bc)][x(0x1b4)](sequelize_1[x(0x1bc)]['fn'](g[y(0x1c8)], sequelize_1[x(0x1bc)][x(0x1cb)](g[y(0x1bb)])), g[y(0x1bd)], '%' + searchParam[x(0x1c2) + 'e']()[y(0x1c5)]() + '%') }] }, i = 0x1dc * -0x1 + -0x999 + 0x1 * 0xb89, j = g[y(0x1a4)](i, g[y(0x1c6)](+pageNumber, 0x1349 * -0x2 + 0xe * -0x12d + 0x3709)), l = {};
        l[y(0x1b4)] = h, l[x(0x1c1)] = i, l[y(0x1ca)] = j, l[y(0x1aa)] = [[
                g[y(0x1bb)],
                g[x(0x1b7)]
            ]];
        const {
                count: m,
                rows: n
            } = await Help_1[x(0x1c4)][x(0x1a9) + y(0x1ad)](l), o = g[x(0x1a6)](m, g[y(0x1a2)](j, n[y(0x1ac)])), p = {};
        return p[y(0x1a3)] = n, p[x(0x1bf)] = m, p[y(0x1af)] = o, p;
    };
exports[u(0x1c4)] = ListService;