'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x1df)) / (-0x102 + -0x21a1 * -0x1 + -0x686 * 0x5) + parseInt(v(0x1c3)) / (0xadc + -0xad6 * 0x3 + 0x15a8) * (parseInt(v(0x1c1)) / (-0xd1a + 0xeee + -0x1d1)) + parseInt(v(0x1c9)) / (-0x21d2 + -0xb41 * -0x1 + -0x1 * -0x1695) + -parseInt(v(0x1d3)) / (0xfab + -0x1514 + 0x56e) * (-parseInt(v(0x1c2)) / (0x2697 + -0x1 * -0x6c9 + -0x1 * 0x2d5a)) + -parseInt(v(0x1cc)) / (-0x141f + 0x21e3 + -0xdbd) + -parseInt(v(0x1d2)) / (0x3 * -0x5d5 + 0x1 * 0x1795 + -0x60e) + parseInt(w(0x1d5)) / (-0x1 * 0x136 + 0x3af + -0x270) * (parseInt(w(0x1b6)) / (0x1aa4 + -0x1 * -0x1a09 + -0x34a3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x56113 + -0x127c * -0x7b + 0x63dc4));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x13cd + -0x2a0 + 0x5 * -0x319);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[x(0x1da) + x(0x1d4)] || function (c) {
    const z = y;
    return c && c[z(0x1d0)] ? c : { 'default': c };
};
const o = {};
o[y(0x1cb)] = !![], Object[x(0x1e2) + y(0x1b5)](exports, y(0x1d0), o);
function a() {
    const E = [
        'email',
        '../../mode',
        '328230fLtQIE',
        'axqRe',
        'tagId',
        'defineProp',
        'extraInfo',
        'tenantId',
        'rs/AppErro',
        'wallets',
        'where',
        'erty',
        '2530sTgzAz',
        'SIDbI',
        'push',
        'fdQAb',
        'PMkny',
        'contactId',
        'name',
        'Url',
        'include',
        'syCoU',
        'tags',
        '138vjYCpL',
        '6UOiVlH',
        '33794dDEtOu',
        'attributes',
        'destroy',
        'ls/Contact',
        'KUQhV',
        'forEach',
        '4716492niRBVL',
        'bulkCreate',
        'value',
        '7669221RhwoaN',
        'Tag',
        'number',
        'QkrbV',
        '__esModule',
        'TACT_FOUND',
        '9178160gwjpDE',
        '2081635Moeyvd',
        'fault',
        '29772RggxLW',
        '../../erro',
        'profilePic',
        'findOne',
        'ALQWb',
        '__importDe',
        'ERR_NO_CON',
        'default'
    ];
    a = function () {
        return E;
    };
    return a();
}
const AppError_1 = __importDefault(require(y(0x1d6) + y(0x1b2) + 'r')), Contact_1 = __importDefault(require(x(0x1de) + y(0x1c6))), ContactTag_1 = __importDefault(require(y(0x1de) + x(0x1c6) + x(0x1cd))), UpdateContactService = async ({
        tags: h,
        contactId: i,
        tenantId: j
    }) => {
        const A = y, B = x, k = {};
        k[A(0x1e0)] = B(0x1bc), k[A(0x1ba)] = B(0x1ce), k[B(0x1d9)] = B(0x1dd), k[A(0x1b7)] = A(0x1d7) + B(0x1bd), k[A(0x1cf)] = A(0x1b0), k[B(0x1bf)] = B(0x1c0), k[B(0x1b9)] = A(0x1b3), k[B(0x1c7)] = B(0x1db) + A(0x1d1);
        const l = k, m = {};
        m[A(0x1b1)] = j, m[B(0x1bb)] = i;
        const n = {};
        n[A(0x1b4)] = m, await ContactTag_1[A(0x1dc)][B(0x1c5)](n);
        const p = [];
        h[B(0x1c8)](t => {
            const C = A, D = A, u = {};
            u[C(0x1e1)] = !t['id'] ? t : t['id'], u[D(0x1bb)] = i, u[C(0x1b1)] = j, p[D(0x1b8)](u);
        }), await ContactTag_1[B(0x1dc)][A(0x1ca)](p);
        const q = {};
        q['id'] = i, q[B(0x1b1)] = j;
        const r = {};
        r[B(0x1b4)] = q, r[A(0x1c4)] = [
            'id',
            l[A(0x1e0)],
            l[A(0x1ba)],
            l[B(0x1d9)],
            l[B(0x1b7)]
        ], r[B(0x1be)] = [
            l[A(0x1cf)],
            l[B(0x1bf)],
            {
                'association': l[A(0x1b9)],
                'attributes': [
                    'id',
                    l[A(0x1e0)]
                ]
            }
        ];
        const s = await Contact_1[B(0x1dc)][A(0x1d8)](r);
        if (!s)
            throw new AppError_1[(B(0x1dc))](l[B(0x1c7)], -0x13 * -0x1f5 + 0x76c * 0x5 + -0x49 * 0xff);
        return s;
    };
exports[y(0x1dc)] = UpdateContactService;