'use strict';
const t = b, u = b;
function a() {
    const y = [
        'tenantId',
        '5937270WvZwju',
        '2951304ZmiYFd',
        '__importDe',
        '../../mode',
        'where',
        '151822rpDUUJ',
        'open',
        'IRKmj',
        'IOZil',
        'erty',
        'value',
        '136407FDYmsa',
        '33944sSZxkQ',
        'Mfyzw',
        'tsStatus',
        'HHuwH',
        'rs/AppErro',
        'fault',
        '1126321Nngnbw',
        'length',
        'findOne',
        'tickets',
        '3iSMUvO',
        '90rlVzjS',
        '../../help',
        'R_FOUND',
        'ls/User',
        'destroy',
        'rOpenTicke',
        '$get',
        'defineProp',
        'DeletedUse',
        'DllYs',
        'ERR_NO_USE',
        '1779510YpPBEh',
        'default',
        '../../erro',
        '__esModule',
        'ers/Update'
    ];
    a = function () {
        return y;
    };
    return a();
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0xa0)) / (0xb53 * -0x3 + -0x22bd * -0x1 + -0x41 * 0x3) + -parseInt(s(0x9a)) / (0x1 * 0x1271 + 0x145a * -0x1 + 0x1 * 0x1eb) * (parseInt(s(0xab)) / (-0x1 * -0x1c99 + 0xa91 + -0x2727)) + -parseInt(s(0xbe)) / (-0x1d * -0x3e + -0x3e2 + 0x19 * -0x20) + parseInt(s(0xb7)) / (-0x27f * 0xb + 0xe69 + 0xd11) + parseInt(r(0xbd)) / (-0xcaf + 0x2302 + -0x164d) + parseInt(r(0xa7)) / (-0x1 * 0x25c5 + 0xd12 + 0x18ba) + parseInt(s(0xa1)) / (0xa9f * 0x1 + -0x16fa + 0xc63) * (parseInt(r(0xac)) / (-0xe77 + 0x18b5 + -0xa35));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5a362 + -0xa40a + 0x1c * 0x25d3));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2639 + 0x1a41 + 0x649 * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[t(0xbf) + u(0xa6)] || function (c) {
    const v = u;
    return c && c[v(0xba)] ? c : { 'default': c };
};
const k = {};
k[u(0x9f)] = !![], Object[t(0xb3) + u(0x9e)](exports, t(0xba), k);
const User_1 = __importDefault(require(u(0xc0) + u(0xaf))), AppError_1 = __importDefault(require(t(0xb9) + u(0xa5) + 'r')), UpdateDeletedUserOpenTicketsStatus_1 = __importDefault(require(t(0xad) + u(0xbb) + u(0xb4) + u(0xb1) + t(0xa3))), DeleteUserService = async (f, g, h) => {
        const w = u, x = t, i = {};
        i[w(0xa4)] = function (p, q) {
            return p !== q;
        }, i[x(0xa2)] = w(0xb6) + x(0xae), i[x(0x9c)] = w(0xaa), i[x(0xb5)] = x(0x9b), i[w(0x9d)] = function (p, q) {
            return p > q;
        };
        const j = i, l = {};
        l['id'] = f, l[x(0xbc)] = g;
        const m = {};
        m[x(0xc1)] = l;
        const n = await User_1[w(0xb8)][x(0xa9)](m);
        if (!n || j[w(0xa4)](g, n[w(0xbc)]))
            throw new AppError_1[(w(0xb8))](j[w(0xa2)], -0x2 * -0x10b3 + 0x3c * 0x1f + -0x2 * 0x138b);
        const o = await n[w(0xb2)](j[x(0x9c)], {
            'where': {
                'status': j[w(0xb5)],
                'tenantId': g
            }
        });
        j[x(0x9d)](o[x(0xa8)], 0x1a81 + -0x1d5f + 0x2de) && (0xe52 + -0x23d1 + -0x1 * -0x157f, UpdateDeletedUserOpenTicketsStatus_1[x(0xb8)])(o, g, h), await n[x(0xb0)]();
    };
exports[t(0xb8)] = DeleteUserService;