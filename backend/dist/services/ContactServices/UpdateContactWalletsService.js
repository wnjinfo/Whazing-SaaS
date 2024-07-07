'use strict';
function a() {
    const E = [
        'where',
        'contactId',
        '../../erro',
        'email',
        'walletId',
        'ERR_NO_CON',
        'findOne',
        '1vfodkr',
        '252kjjews',
        '1854oJeJjI',
        'defineProp',
        'forEach',
        'push',
        'number',
        'Url',
        '../../mode',
        'Qhvio',
        '9153716NwUwiW',
        '__esModule',
        '52YqXQRy',
        'erty',
        'value',
        'BSvud',
        'name',
        'destroy',
        '1078490PGLVMz',
        'hkDkZ',
        '7365hCMrjx',
        '2210404tyAdxV',
        'Wallet',
        'profilePic',
        'default',
        '__importDe',
        '183858SgpVjY',
        'sNMMX',
        'bulkCreate',
        'ls/Contact',
        '101910mUcwRw',
        'tags',
        'TACT_FOUND',
        'wallets',
        'include',
        'rs/AppErro',
        'WIzAh',
        'extraInfo',
        'fault',
        'tenantId',
        '6028768DxANNl',
        'IkXYx',
        'pSqbi',
        'QMqSJ',
        'attributes'
    ];
    a = function () {
        return E;
    };
    return a();
}
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0xf9)) / (-0x209d + 0x4 * -0x66a + 0x2 * 0x1d23) * (parseInt(v(0xd7)) / (-0x229a + 0x1681 + 0x3 * 0x409)) + -parseInt(v(0xdf)) / (0x1d54 + -0x2 * 0x1363 + 0x10d * 0x9) * (-parseInt(w(0x105)) / (-0x18b * 0x13 + -0x36d + 0x20c2)) + parseInt(v(0xd9)) / (0x1cd0 + -0x33f * -0x9 + -0x3a02) * (-parseInt(w(0xfb)) / (0xd31 + 0x1bf7 + -0x2922)) + parseInt(v(0xda)) / (0x8 * -0x42b + 0x20e1 + 0x7e) + -parseInt(v(0xed)) / (0x1d3 + -0x2 * -0x1bb + 0x541 * -0x1) + parseInt(w(0xfa)) / (0xa7b * -0x1 + 0x1c36 + -0x11b2) * (parseInt(v(0xe3)) / (-0x1ab + -0x205e + 0x2213)) + parseInt(w(0x103)) / (-0x1 * 0x1152 + 0x260e * 0x1 + 0x1 * -0x14b1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x93e7 * 0x8 + 0xdde40 + -0x1e43c));
var __importDefault = this && this[x(0xde) + y(0xeb)] || function (c) {
    const z = x;
    return c && c[z(0x104)] ? c : { 'default': c };
};
const o = {};
o[y(0x107)] = !![], Object[y(0xfc) + x(0x106)](exports, y(0x104), o);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x15c4 + -0x65 * 0x22 + -0x4 * 0x1e1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(x(0xf4) + y(0xe8) + 'r')), Contact_1 = __importDefault(require(x(0x101) + y(0xe2))), ContactWallet_1 = __importDefault(require(x(0x101) + y(0xe2) + y(0xdb))), UpdateContactWalletsService = async ({
        wallets: h,
        contactId: i,
        tenantId: j
    }) => {
        const A = y, B = y, k = {};
        k[A(0xd8)] = A(0x109), k[A(0xe9)] = A(0xff), k[B(0xe0)] = A(0xf5), k[B(0xee)] = B(0xdc) + B(0x100), k[B(0x108)] = A(0xea), k[B(0xef)] = B(0xe4), k[A(0x102)] = A(0xe6), k[B(0xf0)] = A(0xf7) + B(0xe5);
        const l = k, m = {};
        m[A(0xec)] = j, m[B(0xf3)] = i;
        const n = {};
        n[B(0xf2)] = m, await ContactWallet_1[B(0xdd)][A(0xd6)](n);
        const p = [];
        h[A(0xfd)](t => {
            const C = A, D = B, u = {};
            u[C(0xf6)] = !t['id'] ? t : t['id'], u[D(0xf3)] = i, u[D(0xec)] = j, p[C(0xfe)](u);
        }), await ContactWallet_1[B(0xdd)][A(0xe1)](p);
        const q = {};
        q['id'] = i, q[B(0xec)] = j;
        const r = {};
        r[B(0xf2)] = q, r[A(0xf1)] = [
            'id',
            l[B(0xd8)],
            l[B(0xe9)],
            l[A(0xe0)],
            l[A(0xee)]
        ], r[B(0xe7)] = [
            l[B(0x108)],
            l[A(0xef)],
            {
                'association': l[B(0x102)],
                'attributes': [
                    'id',
                    l[B(0xd8)]
                ]
            }
        ];
        const s = await Contact_1[A(0xdd)][B(0xf8)](r);
        if (!s)
            throw new AppError_1[(A(0xdd))](l[B(0xf0)], 0x1 * -0x12b + -0x1769 + 0xd8 * 0x1f);
        return s;
    };
exports[y(0xdd)] = UpdateContactWalletsService;