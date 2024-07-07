'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x157)) / (-0x158 * 0x3 + -0x2560 + 0x1 * 0x2969) * (parseInt(s(0x150)) / (-0x2651 + -0x10d6 + 0x3729)) + parseInt(s(0x148)) / (-0x55e + 0x13c6 + -0x14f * 0xb) * (parseInt(s(0x175)) / (0x55 * 0x5d + -0x1a9e * 0x1 + -0x43f)) + -parseInt(s(0x15e)) / (0x1 * 0x1893 + -0x2630 + 0xda2) * (-parseInt(t(0x153)) / (-0x2405 + -0x2511 * 0x1 + -0x1 * -0x491c)) + parseInt(s(0x169)) / (0x95c + -0x5d * -0x56 + 0x263 * -0x11) * (-parseInt(s(0x168)) / (0x1 * -0x391 + -0x184f + 0x37d * 0x8)) + -parseInt(s(0x14a)) / (0x2292 + 0x1f76 + 0x1f * -0x221) + -parseInt(s(0x16b)) / (0x57 * 0x19 + 0x2244 + -0x2ab9) + -parseInt(t(0x171)) / (-0x5e * 0x3b + -0x19b1 + 0x2f66) * (-parseInt(t(0x151)) / (-0x1eb6 + 0x189 + 0x1d39));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x15f6b6 + 0x5a9d3 * -0x3 + -0x1 * -0x67ef8));
var __importDefault = this && this[u(0x152) + u(0x14f)] || function (c) {
    const w = v;
    return c && c[w(0x14c)] ? c : { 'default': c };
};
function a() {
    const z = [
        'LIKE',
        'default',
        '48ZoOcVV',
        'records',
        '3781584GnZCLW',
        'count',
        '__esModule',
        'sequelize',
        'value',
        'fault',
        '1328804ucuVjT',
        '12awdnXt',
        '__importDe',
        '42dFBBgX',
        'urZPZ',
        'where',
        'SyEJt',
        '1XWgcdZ',
        'LOWER',
        'ASC',
        'CCvtX',
        'defineProp',
        'xMBUC',
        'xoKjM',
        '260450fApWZQ',
        'SxSji',
        'findAndCou',
        'length',
        '../../mode',
        'ls/Help',
        'hasMore',
        'erty',
        'LVefl',
        'toLowerCas',
        '194696HUpqwL',
        '378iaRylW',
        'trim',
        '8203150HpQgls',
        'limit',
        'title',
        'col',
        'CMHiL',
        'Sequelize',
        '30161494RHVrlo',
        'ntAll',
        'offset',
        'order',
        '216044zynUES'
    ];
    a = function () {
        return z;
    };
    return a();
}
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x19c * 0x8 + 0x3b * 0x1 + -0x5 * -0x2c9);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[u(0x14e)] = !![], Object[u(0x15b) + v(0x165)](exports, v(0x14c), k);
const sequelize_1 = require(v(0x14d)), Help_1 = __importDefault(require(v(0x162) + v(0x163))), ListService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1'
    }) => {
        const x = u, y = v, f = {};
        f[x(0x156)] = x(0x158), f[y(0x154)] = y(0x16d), f[y(0x16f)] = y(0x176), f[y(0x15f)] = function (q, r) {
            return q * r;
        }, f[x(0x15c)] = function (q, r) {
            return q - r;
        }, f[y(0x15d)] = x(0x159), f[x(0x166)] = function (q, r) {
            return q > r;
        }, f[y(0x15a)] = function (q, r) {
            return q + r;
        };
        const g = f, h = { [sequelize_1['Op']['or']]: [{ 'title': sequelize_1[y(0x170)][x(0x155)](sequelize_1[y(0x170)]['fn'](g[x(0x156)], sequelize_1[x(0x170)][x(0x16e)](g[y(0x154)])), g[y(0x16f)], '%' + searchParam[y(0x167) + 'e']()[y(0x16a)]() + '%') }] }, i = 0xe3 * -0x1f + 0xa * -0x361 + 0x3d5b, j = g[x(0x15f)](i, g[x(0x15c)](+pageNumber, 0x2e4 + -0x2467 + 0x2184)), l = {};
        l[x(0x155)] = h, l[x(0x16c)] = i, l[x(0x173)] = j, l[x(0x174)] = [[
                g[y(0x154)],
                g[y(0x15d)]
            ]];
        const {
                count: m,
                rows: n
            } = await Help_1[x(0x177)][y(0x160) + x(0x172)](l), o = g[x(0x166)](m, g[x(0x15a)](j, n[y(0x161)])), p = {};
        return p[y(0x149)] = n, p[y(0x14b)] = m, p[y(0x164)] = o, p;
    };
exports[u(0x177)] = ListService;