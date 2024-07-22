'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x1f3)) / (0x1993 + -0xc68 + -0xd2a) + -parseInt(w(0x200)) / (-0x3a1 + 0x2228 + 0xd * -0x259) + -parseInt(v(0x1e9)) / (0x36 * 0xaa + 0x962 * 0x3 + -0x3fff) * (parseInt(v(0x20a)) / (0x1bf * 0xb + -0x13 + -0x2 * 0x98f)) + -parseInt(v(0x20f)) / (0x1c4c + -0x29 * 0xcf + 0x4e0) + -parseInt(w(0x1fa)) / (0x1 * 0x1993 + 0x1325 + -0x2cb2) + -parseInt(v(0x1fe)) / (-0x1 * 0x3fb + -0xd6d + 0x116f) * (-parseInt(v(0x205)) / (0xae3 * 0x1 + 0x2438 + -0x2f13)) + parseInt(w(0x1ee)) / (0x17 * -0xad + 0x316 + -0x3 * -0x42a) * (parseInt(v(0x1f4)) / (0x5 * -0x1fb + 0x2 * -0xdb4 + -0x2559 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1a * 0x141d + 0x59 * 0xd00 + 0x604dc));
function a() {
    const E = [
        'extraInfo',
        '../../mode',
        'ocqit',
        'name',
        '3497010ivpQbl',
        'ERR_NO_CON',
        'WvwHj',
        'Url',
        '9172989mSZWwc',
        'KKNZS',
        '2946976IqvNMV',
        'push',
        'forEach',
        'bulkCreate',
        '../../erro',
        '8gVnzsJ',
        '__esModule',
        'value',
        'email',
        'Rljwu',
        '4KdbViI',
        'defineProp',
        'TACT_FOUND',
        'contactId',
        'wallets',
        '8068425SZHpym',
        'fault',
        'findOne',
        'tenantId',
        'ItCeM',
        '__importDe',
        'destroy',
        'number',
        'Wallet',
        'erty',
        'include',
        'rs/AppErro',
        'default',
        '3746706AyFACH',
        'attributes',
        'CYmDg',
        'where',
        'YGdal',
        '549SwihIx',
        'dpMLd',
        'tags',
        'profilePic',
        'ls/Contact',
        '1111220XuEYBT',
        '908890bWNUcY',
        'walletId'
    ];
    a = function () {
        return E;
    };
    return a();
}
var __importDefault = this && this[x(0x214) + x(0x210)] || function (c) {
    const z = x;
    return c && c[z(0x206)] ? c : { 'default': c };
};
const o = {};
o[x(0x207)] = !![], Object[y(0x20b) + y(0x1e5)](exports, y(0x206), o);
const AppError_1 = __importDefault(require(y(0x204) + y(0x1e7) + 'r')), Contact_1 = __importDefault(require(y(0x1f7) + x(0x1f2))), ContactWallet_1 = __importDefault(require(y(0x1f7) + x(0x1f2) + y(0x1e4))), UpdateContactWalletsService = async ({
        wallets: h,
        contactId: i,
        tenantId: j
    }) => {
        const A = y, B = y, k = {};
        k[A(0x213)] = A(0x1f9), k[B(0x1eb)] = A(0x1e3), k[B(0x1ef)] = B(0x208), k[A(0x1fc)] = A(0x1f1) + B(0x1fd), k[A(0x209)] = A(0x1f6), k[A(0x1ed)] = B(0x1f0), k[B(0x1f8)] = B(0x20e), k[A(0x1ff)] = A(0x1fb) + B(0x20c);
        const l = k, m = {};
        m[A(0x212)] = j, m[B(0x20d)] = i;
        const n = {};
        n[A(0x1ec)] = m, await ContactWallet_1[A(0x1e8)][B(0x1e2)](n);
        const p = [];
        h[B(0x202)](t => {
            const C = B, D = B, u = {};
            u[C(0x1f5)] = !t['id'] ? t : t['id'], u[C(0x20d)] = i, u[C(0x212)] = j, p[D(0x201)](u);
        }), await ContactWallet_1[B(0x1e8)][B(0x203)](p);
        const q = {};
        q['id'] = i, q[A(0x212)] = j;
        const r = {};
        r[B(0x1ec)] = q, r[B(0x1ea)] = [
            'id',
            l[B(0x213)],
            l[A(0x1eb)],
            l[B(0x1ef)],
            l[B(0x1fc)]
        ], r[B(0x1e6)] = [
            l[B(0x209)],
            l[B(0x1ed)],
            {
                'association': l[A(0x1f8)],
                'attributes': [
                    'id',
                    l[A(0x213)]
                ]
            }
        ];
        const s = await Contact_1[B(0x1e8)][B(0x211)](r);
        if (!s)
            throw new AppError_1[(A(0x1e8))](l[B(0x1ff)], -0x19 * -0xef + -0x27f * 0x7 + -0x44a);
        return s;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x25e * 0x1 + 0x1d7f + -0x17 * 0x119);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[y(0x1e8)] = UpdateContactWalletsService;