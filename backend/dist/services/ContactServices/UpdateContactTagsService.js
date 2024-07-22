'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x19d)) / (-0x23cd + 0x449 * -0x6 + 0x3d84) + parseInt(w(0x185)) / (-0x9f * -0x2b + -0x7bd + 0x12f6 * -0x1) * (-parseInt(v(0x1a6)) / (-0x1477 + 0x72 + -0x281 * -0x8)) + parseInt(v(0x19e)) / (0xec7 * 0x1 + 0x1427 + -0x22ea) + parseInt(v(0x191)) / (-0x20eb + -0x59 * 0x43 + -0x5 * -0xb3f) + -parseInt(v(0x196)) / (0x217 * 0x9 + 0x1842 + -0x2b0b) + parseInt(v(0x18f)) / (0x365 * -0x9 + 0x4c1 + 0x1 * 0x19d3) + parseInt(w(0x17b)) / (0x11af * 0x1 + -0x1 * -0x609 + -0x17b0) * (-parseInt(v(0x1aa)) / (0x2 * 0x1132 + -0x1 * 0x1772 + -0x1 * 0xae9));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xfaab * 0x17 + -0x146 * -0xc74 + -0x18565e));
var __importDefault = this && this[x(0x1a8) + x(0x17c)] || function (c) {
    const z = x;
    return c && c[z(0x189)] ? c : { 'default': c };
};
const o = {};
o[x(0x198)] = !![], Object[y(0x19a) + x(0x1a3)](exports, y(0x189), o);
const AppError_1 = __importDefault(require(y(0x17d) + x(0x181) + 'r')), Contact_1 = __importDefault(require(y(0x194) + x(0x180))), ContactTag_1 = __importDefault(require(x(0x194) + y(0x180) + y(0x18e))), UpdateContactService = async ({
        tags: h,
        contactId: i,
        tenantId: j
    }) => {
        const A = x, B = y, k = {};
        k[A(0x19c)] = B(0x1a4), k[B(0x197)] = A(0x19b), k[B(0x18c)] = A(0x1a7), k[A(0x18b)] = A(0x192) + B(0x184), k[B(0x188)] = A(0x19f), k[A(0x18a)] = B(0x1a1), k[A(0x195)] = B(0x179), k[B(0x1a2)] = B(0x186) + B(0x187);
        const l = k, m = {};
        m[A(0x1a9)] = j, m[A(0x182)] = i;
        const n = {};
        n[B(0x183)] = m, await ContactTag_1[A(0x1a5)][B(0x193)](n);
        const p = [];
        h[B(0x1a0)](t => {
            const C = B, D = A, u = {};
            u[C(0x17a)] = !t['id'] ? t : t['id'], u[D(0x182)] = i, u[D(0x1a9)] = j, p[C(0x17f)](u);
        }), await ContactTag_1[A(0x1a5)][B(0x199)](p);
        const q = {};
        q['id'] = i, q[A(0x1a9)] = j;
        const r = {};
        r[A(0x183)] = q, r[B(0x190)] = [
            'id',
            l[A(0x19c)],
            l[A(0x197)],
            l[B(0x18c)],
            l[B(0x18b)]
        ], r[B(0x18d)] = [
            l[A(0x188)],
            l[A(0x18a)],
            {
                'association': l[B(0x195)],
                'attributes': [
                    'id',
                    l[A(0x19c)]
                ]
            }
        ];
        const s = await Contact_1[A(0x1a5)][A(0x17e)](r);
        if (!s)
            throw new AppError_1[(A(0x1a5))](l[A(0x1a2)], -0x1 * -0x1a06 + -0x17d4 + -0x9e);
        return s;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x114d + 0x9a0 + 0x926);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[y(0x1a5)] = UpdateContactService;
function a() {
    const E = [
        '1176858oOnXkX',
        'xVieh',
        'value',
        'bulkCreate',
        'defineProp',
        'number',
        'QTNnx',
        '1003148Dmaqwi',
        '1331188dsPBCn',
        'extraInfo',
        'forEach',
        'tags',
        'UCTKB',
        'erty',
        'name',
        'default',
        '6uTYKRE',
        'email',
        '__importDe',
        'tenantId',
        '18JCMbXb',
        'wallets',
        'tagId',
        '9334792rFyjOl',
        'fault',
        '../../erro',
        'findOne',
        'push',
        'ls/Contact',
        'rs/AppErro',
        'contactId',
        'where',
        'Url',
        '890392dhtARq',
        'ERR_NO_CON',
        'TACT_FOUND',
        'CHaex',
        '__esModule',
        'dxYtt',
        'kfobL',
        'AFoNW',
        'include',
        'Tag',
        '11560234CYOtqF',
        'attributes',
        '6765365MZTRdy',
        'profilePic',
        'destroy',
        '../../mode',
        'XlvCn'
    ];
    a = function () {
        return E;
    };
    return a();
}