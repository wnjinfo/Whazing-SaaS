'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0xab)) / (0x1 * -0x1937 + -0x13af + 0x2ce7) + parseInt(t(0x90)) / (-0x15b * -0x3 + 0x17 * -0x19a + -0x1 * -0x20c7) + parseInt(u(0x8c)) / (-0x4d3 + -0x38a + 0x8 * 0x10c) + -parseInt(t(0x85)) / (-0x1 * 0x15b5 + 0x4c * 0x5 + 0x143d) + parseInt(t(0xa3)) / (-0xa27 * -0x1 + 0x9cb + -0x13ed) + -parseInt(t(0x94)) / (0x137 * 0x17 + -0x84e * 0x2 + -0xb4f) * (-parseInt(u(0x86)) / (-0x3 * 0x6fd + 0x1ecc + 0x1f6 * -0x5)) + parseInt(u(0x97)) / (-0x672 * -0x6 + 0x1d01 + 0x1 * -0x43a5) * (-parseInt(t(0xb2)) / (-0xcbd * -0x2 + -0x11a7 * 0x1 + -0x7ca));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x9bcb6 + -0x135436 + 0x17f5be));
function a() {
    const A = [
        'value',
        '4228440CclRkD',
        'cgRsH',
        'yLAtP',
        '../../mode',
        'MkAjc',
        'findAndCou',
        '__esModule',
        'defineProp',
        '99458zfGJUd',
        'ntAll',
        'hasMore',
        'length',
        'kfoEh',
        'erty',
        'faDIt',
        '252621uwXeaw',
        'zGiHu',
        'ASC',
        '2231912utrZKs',
        '7puwqXG',
        'offset',
        'Sequelize',
        'LIKE',
        'ofeJD',
        'trim',
        '4946070tiQmaV',
        'name',
        'plans',
        'col',
        '1292678LpxqDf',
        'where',
        'toLowerCas',
        'FslJV',
        '7071654nUHden',
        'order',
        'LOWER',
        '832JqcgTn',
        'limit',
        'sequelize',
        '__importDe',
        'false',
        'hGCbB',
        'noNkA',
        'default',
        'ls/Plan',
        'fault',
        'count'
    ];
    a = function () {
        return A;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x652 + 0x22e6 + -0x1c11);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[v(0x9a) + w(0xa0)] || function (c) {
    const x = w;
    return c && c[x(0xa9)] ? c : { 'default': c };
};
const k = {};
k[w(0xa2)] = !![], Object[v(0xaa) + w(0xb0)](exports, w(0xa9), k);
const sequelize_1 = require(w(0x99)), Plan_1 = __importDefault(require(v(0xa6) + v(0x9f))), ListPlansService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1',
        listPublic: f
    }) => {
        const y = v, z = w, g = {};
        g[y(0xa5)] = y(0x96), g[y(0xa7)] = y(0x8d), g[z(0xaf)] = z(0x89), g[y(0x93)] = function (r, s) {
            return r * s;
        }, g[y(0x8a)] = function (r, s) {
            return r - s;
        }, g[z(0xa4)] = function (r, s) {
            return r === s;
        }, g[z(0x83)] = z(0x9b), g[z(0x9c)] = y(0x84), g[y(0xb1)] = function (r, s) {
            return r > s;
        }, g[z(0x9d)] = function (r, s) {
            return r + s;
        };
        const h = g;
        let i = { [sequelize_1['Op']['or']]: [{ 'name': sequelize_1[z(0x88)][z(0x91)](sequelize_1[z(0x88)]['fn'](h[y(0xa5)], sequelize_1[y(0x88)][z(0x8f)](h[y(0xa7)])), h[z(0xaf)], '%' + searchParam[z(0x92) + 'e']()[z(0x8b)]() + '%') }] };
        const j = -0x20f6 + -0x1 * 0xfe3 + 0x30ed, l = h[y(0x93)](j, h[z(0x8a)](+pageNumber, 0x1774 + 0x16f8 + -0x2e6b));
        h[y(0xa4)](f, h[z(0x83)]) && (i = {
            ...i,
            'isPublic': ![]
        });
        const m = {};
        m[z(0x91)] = i, m[y(0x98)] = j, m[z(0x87)] = l, m[y(0x95)] = [[
                h[z(0xa7)],
                h[y(0x9c)]
            ]];
        const {
                count: n,
                rows: o
            } = await Plan_1[z(0x9e)][z(0xa8) + z(0xac)](m), p = h[z(0xb1)](n, h[z(0x9d)](l, o[z(0xae)])), q = {};
        return q[y(0x8e)] = o, q[z(0xa1)] = n, q[y(0xad)] = p, q;
    };
exports[w(0x9e)] = ListPlansService;