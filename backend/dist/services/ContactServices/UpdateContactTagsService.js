'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x26be + -0x3a1 * 0x4 + -0x175d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0xff)) / (-0xb69 + 0x1bf7 + -0x1 * 0x108d) * (parseInt(w(0xf7)) / (-0x2563 * 0x1 + 0xf58 + 0x160d)) + parseInt(v(0xe0)) / (-0x18d8 + 0x342 + 0x1599) + -parseInt(w(0x100)) / (0x1 * 0x22f3 + 0x14d4 + -0x37c3) * (-parseInt(v(0xde)) / (0x6 * 0xdc + -0x16 * 0x1c5 + 0x21cb)) + parseInt(w(0xdf)) / (-0xecc + 0xc * -0xfa + -0x2b * -0x9e) * (-parseInt(w(0x10b)) / (0x805 * -0x2 + 0x2606 * -0x1 + -0x1 * -0x3617)) + parseInt(v(0x107)) / (-0x2 * 0x887 + -0x126a * 0x1 + 0x2380) * (-parseInt(w(0xef)) / (0x599 * 0x1 + 0x3 * -0x522 + 0x2 * 0x4eb)) + -parseInt(w(0xfa)) / (-0x7ec + 0x2 * 0xc25 + 0x14 * -0xd1) * (parseInt(v(0x108)) / (-0x18d5 + 0x4 * 0x45a + 0x778)) + -parseInt(w(0xe7)) / (0x16ef + -0x24fe + 0xe1b) * (-parseInt(v(0xfe)) / (0x903 + -0x953 + -0x3 * -0x1f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x121b0d + -0x144dd9 + 0x35943f));
var __importDefault = this && this[x(0xf5) + x(0xe2)] || function (c) {
    const z = x;
    return c && c[z(0xe4)] ? c : { 'default': c };
};
const o = {};
o[y(0x10e)] = !![], Object[y(0x110) + y(0xfb)](exports, y(0xe4), o);
function a() {
    const E = [
        '1950680cICTXR',
        'erty',
        'rs/AppErro',
        'contactId',
        '143ibpuEP',
        '9600yUYTbB',
        '70836AvhUVG',
        'fLPom',
        'name',
        'Url',
        'extraInfo',
        'dxdKO',
        'push',
        '16wFSLul',
        '11fVfvQd',
        'attributes',
        'findOne',
        '338961fOWkFG',
        'WwcYS',
        'tags',
        'value',
        'wallets',
        'defineProp',
        'ERR_NO_CON',
        'TACT_FOUND',
        'email',
        '95qBpZXS',
        '78fuUONX',
        '2710986HnbkFY',
        '../../mode',
        'fault',
        'default',
        '__esModule',
        'include',
        'zNybz',
        '565716rtpKvb',
        'HTtNt',
        'forEach',
        'where',
        'tagId',
        'profilePic',
        'bDlaA',
        'bulkCreate',
        '6166809SzMlUb',
        '../../erro',
        'tenantId',
        'ls/Contact',
        'JqAvx',
        'destroy',
        '__importDe',
        'vjEUC',
        '298VSElpr',
        'number',
        'Tag'
    ];
    a = function () {
        return E;
    };
    return a();
}
const AppError_1 = __importDefault(require(y(0xf0) + x(0xfc) + 'r')), Contact_1 = __importDefault(require(y(0xe1) + y(0xf2))), ContactTag_1 = __importDefault(require(x(0xe1) + y(0xf2) + x(0xf9))), UpdateContactService = async ({
        tags: h,
        contactId: i,
        tenantId: j
    }) => {
        const A = x, B = y, k = {};
        k[A(0xed)] = B(0x102), k[A(0x105)] = B(0xf8), k[A(0x10c)] = B(0xdd), k[B(0xf6)] = B(0xec) + B(0x103), k[A(0x101)] = A(0x104), k[A(0xf3)] = B(0x10d), k[A(0xe8)] = B(0x10f), k[B(0xe6)] = B(0x111) + B(0x112);
        const l = k, m = {};
        m[B(0xf1)] = j, m[B(0xfd)] = i;
        const n = {};
        n[A(0xea)] = m, await ContactTag_1[B(0xe3)][A(0xf4)](n);
        const p = [];
        h[B(0xe9)](t => {
            const C = A, D = A, u = {};
            u[C(0xeb)] = !t['id'] ? t : t['id'], u[C(0xfd)] = i, u[D(0xf1)] = j, p[D(0x106)](u);
        }), await ContactTag_1[B(0xe3)][A(0xee)](p);
        const q = {};
        q['id'] = i, q[A(0xf1)] = j;
        const r = {};
        r[A(0xea)] = q, r[A(0x109)] = [
            'id',
            l[A(0xed)],
            l[B(0x105)],
            l[A(0x10c)],
            l[A(0xf6)]
        ], r[A(0xe5)] = [
            l[A(0x101)],
            l[A(0xf3)],
            {
                'association': l[B(0xe8)],
                'attributes': [
                    'id',
                    l[B(0xed)]
                ]
            }
        ];
        const s = await Contact_1[A(0xe3)][A(0x10a)](r);
        if (!s)
            throw new AppError_1[(A(0xe3))](l[A(0xe6)], 0x1744 + 0x2054 + -0x3604);
        return s;
    };
exports[y(0xe3)] = UpdateContactService;