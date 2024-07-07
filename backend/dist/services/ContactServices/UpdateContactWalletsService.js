'use strict';
const x = b, y = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1a0b + 0x4a1 + 0x4 * 0x5c2);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x1aa)) / (0x41c + 0x1ccb + 0x20e6 * -0x1) + -parseInt(w(0x1be)) / (0x120f + -0x2c9 + -0xf44) * (parseInt(v(0x1a8)) / (0xbbe + 0x32e + 0x15b * -0xb)) + -parseInt(v(0x1c7)) / (0xa67 + 0x7 * 0x236 + -0x19dd) + parseInt(w(0x1ae)) / (-0x15da + 0x1cbb * 0x1 + -0x6dc) * (-parseInt(v(0x1af)) / (-0x7e9 * 0x4 + -0x1c9d + -0x3c47 * -0x1)) + -parseInt(v(0x1a2)) / (0x97 * -0x3d + -0x1ca6 + 0x40a8) + -parseInt(w(0x1ba)) / (0x5 * 0x267 + -0x7c9 + -0xb3 * 0x6) * (-parseInt(v(0x1cf)) / (0xa * -0x1f1 + 0x1b20 + -0x7ad)) + parseInt(w(0x1bc)) / (-0x124 + 0x2ad * -0x3 + 0x935);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xafb * -0x4a + 0x7 * -0x773b + 0x61930));
var __importDefault = this && this[x(0x1b1) + x(0x1c0)] || function (c) {
    const z = y;
    return c && c[z(0x1a4)] ? c : { 'default': c };
};
const o = {};
o[y(0x1a5)] = !![], Object[x(0x1b5) + x(0x19e)](exports, x(0x1a4), o);
const AppError_1 = __importDefault(require(x(0x19f) + x(0x1c2) + 'r')), Contact_1 = __importDefault(require(x(0x1a6) + y(0x1a1))), ContactWallet_1 = __importDefault(require(y(0x1a6) + y(0x1a1) + x(0x1b0))), UpdateContactWalletsService = async ({
        wallets: h,
        contactId: i,
        tenantId: j
    }) => {
        const A = x, B = x, k = {};
        k[A(0x1b4)] = A(0x1b7), k[A(0x1cd)] = B(0x1b8), k[A(0x1bb)] = A(0x1c8), k[A(0x1a9)] = A(0x1c5) + B(0x1bd), k[B(0x1c9)] = B(0x1cc), k[B(0x1a7)] = A(0x1b9), k[A(0x1c4)] = B(0x1c3), k[A(0x1ce)] = A(0x1bf) + A(0x1a0);
        const l = k, m = {};
        m[A(0x1ad)] = j, m[A(0x1b6)] = i;
        const n = {};
        n[B(0x1ac)] = m, await ContactWallet_1[B(0x1c1)][B(0x1ab)](n);
        const p = [];
        h[A(0x1b2)](t => {
            const C = A, D = A, u = {};
            u[C(0x1a3)] = !t['id'] ? t : t['id'], u[C(0x1b6)] = i, u[D(0x1ad)] = j, p[D(0x1c6)](u);
        }), await ContactWallet_1[A(0x1c1)][B(0x1b3)](p);
        const q = {};
        q['id'] = i, q[A(0x1ad)] = j;
        const r = {};
        r[A(0x1ac)] = q, r[A(0x1d0)] = [
            'id',
            l[B(0x1b4)],
            l[A(0x1cd)],
            l[A(0x1bb)],
            l[A(0x1a9)]
        ], r[A(0x1ca)] = [
            l[B(0x1c9)],
            l[B(0x1a7)],
            {
                'association': l[B(0x1c4)],
                'attributes': [
                    'id',
                    l[B(0x1b4)]
                ]
            }
        ];
        const s = await Contact_1[A(0x1c1)][A(0x1cb)](r);
        if (!s)
            throw new AppError_1[(A(0x1c1))](l[B(0x1ce)], 0xb17 + -0x1 * -0x1499 + 0x2 * -0xf0e);
        return s;
    };
exports[y(0x1c1)] = UpdateContactWalletsService;
function a() {
    const E = [
        'tags',
        '8528ySzHUu',
        'odqKu',
        '25381900yyPRiD',
        'Url',
        '60YDWhGU',
        'ERR_NO_CON',
        'fault',
        'default',
        'rs/AppErro',
        'wallets',
        'BTYKu',
        'profilePic',
        'push',
        '1796572SjAyVO',
        'email',
        'QaGgw',
        'include',
        'findOne',
        'extraInfo',
        'GtphQ',
        'DIbUe',
        '2790xfPyRv',
        'attributes',
        'erty',
        '../../erro',
        'TACT_FOUND',
        'ls/Contact',
        '3831772ldmlWP',
        'walletId',
        '__esModule',
        'value',
        '../../mode',
        'Uhmes',
        '71055QOTbAu',
        'ZbkvM',
        '162215sITNQE',
        'destroy',
        'where',
        'tenantId',
        '5GKYCgq',
        '3631974fdCXEX',
        'Wallet',
        '__importDe',
        'forEach',
        'bulkCreate',
        'dDMqn',
        'defineProp',
        'contactId',
        'name',
        'number'
    ];
    a = function () {
        return E;
    };
    return a();
}