'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(w(0x1c0)) / (-0x241 * 0xb + -0xd * -0xba + 0xf5a) * (-parseInt(w(0x1ce)) / (0x1e33 * -0x1 + -0x167 * -0x1 + -0xe67 * -0x2)) + -parseInt(x(0x1d1)) / (0x18be * -0x1 + -0x284 * 0xf + 0x3e7d) + -parseInt(x(0x1b6)) / (-0x1 * 0x1bd9 + -0x21fd + -0x196 * -0x27) * (parseInt(w(0x1d6)) / (0x3e8 * 0x2 + -0x1a10 + -0x3 * -0x617)) + parseInt(x(0x1bf)) / (0x38 * -0x40 + -0xa2 * -0x2 + 0xcc2) * (parseInt(x(0x1af)) / (-0x1 * -0x1a51 + 0x1631 + 0x3f * -0xc5)) + -parseInt(w(0x1b4)) / (-0x27 * -0x5b + -0x25f3 + 0x181e) + parseInt(w(0x1c7)) / (-0x270b + 0x102 * -0x11 + -0xb3e * -0x5) * (parseInt(x(0x1d0)) / (0xef5 + -0x150f + -0x624 * -0x1)) + parseInt(x(0x1b8)) / (-0x150e + -0x5ef + 0x1b08) * (parseInt(x(0x1d4)) / (-0x4f9 * 0x3 + 0x6e2 + 0x815));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5d5b5 + -0x74439 + 0xb962e));
var __importDefault = this && this[y(0x1bd) + y(0x1c1)] || function (c) {
    const A = y;
    return c && c[A(0x1ca)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xed7 + 0x8a9 + 0x7dd);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const D = [
        '5esxRPn',
        '3174801jEtOVW',
        'tag',
        'kTWqS',
        'isActive',
        'ERR_NO_TAG',
        '2663280mqbflE',
        'findOne',
        '860708MuYVmw',
        'erty',
        '110KkoWrn',
        'value',
        'reload',
        'default',
        'color',
        '__importDe',
        '../../mode',
        '6KdhUrX',
        '89689mKYbcZ',
        'fault',
        'tyaCi',
        'ls/Tag',
        'update',
        '_FOUND',
        'rs/AppErro',
        '225XvQxLY',
        'defineProp',
        'PxJAi',
        '__esModule',
        'kOqfp',
        '../../erro',
        'userId',
        '26aJQBDh',
        'tenantId',
        '345850ODoynS',
        '2442240RkvHDd',
        'aoqdq',
        'attributes',
        '2250564rJwfBl',
        'where'
    ];
    a = function () {
        return D;
    };
    return a();
}
k[y(0x1b9)] = !![], Object[y(0x1c8) + y(0x1b7)](exports, y(0x1ca), k);
const AppError_1 = __importDefault(require(y(0x1cc) + y(0x1c6) + 'r')), Tag_1 = __importDefault(require(z(0x1be) + y(0x1c3))), UpdateTagService = async ({
        tagData: h,
        tagId: i
    }) => {
        const B = y, C = y, j = {};
        j[B(0x1b1)] = C(0x1b0), j[B(0x1c9)] = B(0x1bc), j[B(0x1cb)] = C(0x1b2), j[C(0x1d2)] = B(0x1cd), j[B(0x1c2)] = C(0x1b3) + B(0x1c5);
        const l = j, {
                tag: m,
                color: n,
                isActive: o,
                userId: p,
                tenantId: q
            } = h, r = {};
        r['id'] = i, r[C(0x1cf)] = q;
        const s = {};
        s[B(0x1d5)] = r, s[B(0x1d3)] = [
            'id',
            l[C(0x1b1)],
            l[B(0x1c9)],
            l[C(0x1cb)],
            l[B(0x1d2)]
        ];
        const t = await Tag_1[C(0x1bb)][C(0x1b5)](s);
        if (!t)
            throw new AppError_1[(B(0x1bb))](l[C(0x1c2)], 0x1 * -0x2063 + 0x5c7 + 0x4 * 0x70c);
        const u = {};
        u[B(0x1b0)] = m, u[B(0x1bc)] = n, u[C(0x1b2)] = o, u[B(0x1cd)] = p, await t[C(0x1c4)](u);
        const v = {};
        return v[B(0x1d3)] = [
            'id',
            l[C(0x1b1)],
            l[B(0x1c9)],
            l[C(0x1cb)],
            l[B(0x1d2)]
        ], await t[B(0x1ba)](v), t;
    };
exports[y(0x1bb)] = UpdateTagService;