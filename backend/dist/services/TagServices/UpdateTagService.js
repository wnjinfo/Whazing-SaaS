'use strict';
function a() {
    const D = [
        '424221HsVStt',
        'nNlqC',
        'MziJi',
        'isActive',
        'vgbTJ',
        '__importDe',
        'FKTxv',
        'value',
        '483303vtHEwp',
        '../../mode',
        '_FOUND',
        'defineProp',
        'userId',
        'ERR_NO_TAG',
        'erty',
        'findOne',
        '__esModule',
        'ls/Tag',
        '611368wFdAez',
        '7733605PHQgwj',
        'color',
        'lqxcI',
        '2MCpIai',
        '8GPzJKp',
        'rs/AppErro',
        'where',
        '../../erro',
        'update',
        'attributes',
        '45kcmldC',
        'tenantId',
        '66EtTXXc',
        'tag',
        '1111745TBDnZE',
        '197960yztLnk',
        '324712ydXsrC',
        'reload',
        'default',
        'fault'
    ];
    a = function () {
        return D;
    };
    return a();
}
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(w(0x121)) / (0xbd8 + -0x222a + 0x1653) * (parseInt(w(0x13b)) / (-0x1fa9 * 0x1 + -0x9 * -0x26b + 0x9e8)) + -parseInt(w(0x12d)) / (0x7ae * -0x1 + -0x6d * -0x40 + 0x685 * -0x3) * (-parseInt(w(0x13c)) / (0xfa1 * -0x1 + 0xb * 0x296 + -0x71 * 0x1d)) + parseInt(w(0x11f)) / (-0x1 * -0x100a + -0x139c + 0x1 * 0x397) + parseInt(x(0x11d)) / (-0xa7f * -0x2 + -0x1ffc + 0xb04) * (parseInt(w(0x125)) / (0x6d * 0x13 + -0x55b + -0x2b5 * 0x1)) + parseInt(x(0x137)) / (0x105f + -0x3 * 0x856 + 0x13d * 0x7) * (-parseInt(w(0x11b)) / (0x1a8a + -0xb67 * -0x3 + -0x3cb6)) + -parseInt(w(0x120)) / (0x2401 + 0x1b71 + 0x3f68 * -0x1) + -parseInt(w(0x138)) / (-0x1 * 0x26b + 0x1 * 0x130a + 0x84a * -0x2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x13856 * 0x7 + 0x3 * 0x2d836 + 0x1a545 * 0x4));
var __importDefault = this && this[y(0x12a) + y(0x124)] || function (c) {
    const A = z;
    return c && c[A(0x135)] ? c : { 'default': c };
};
const k = {};
k[y(0x12c)] = !![], Object[y(0x130) + y(0x133)](exports, y(0x135), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1ec0 + -0x2679 + 0x8cf);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(z(0x118) + y(0x116) + 'r')), Tag_1 = __importDefault(require(z(0x12e) + z(0x136))), UpdateTagService = async ({
        tagData: h,
        tagId: i
    }) => {
        const B = z, C = z, j = {};
        j[B(0x126)] = C(0x11e), j[C(0x129)] = B(0x139), j[C(0x127)] = B(0x128), j[B(0x13a)] = B(0x131), j[C(0x12b)] = C(0x132) + C(0x12f);
        const l = j, {
                tag: m,
                color: n,
                isActive: o,
                userId: p,
                tenantId: q
            } = h, r = {};
        r['id'] = i, r[C(0x11c)] = q;
        const s = {};
        s[B(0x117)] = r, s[B(0x11a)] = [
            'id',
            l[C(0x126)],
            l[B(0x129)],
            l[C(0x127)],
            l[B(0x13a)]
        ];
        const t = await Tag_1[C(0x123)][B(0x134)](s);
        if (!t)
            throw new AppError_1[(B(0x123))](l[C(0x12b)], -0x1 * -0x152 + -0x1a98 + 0x1ada);
        const u = {};
        u[B(0x11e)] = m, u[C(0x139)] = n, u[B(0x128)] = o, u[B(0x131)] = p, await t[C(0x119)](u);
        const v = {};
        return v[B(0x11a)] = [
            'id',
            l[B(0x126)],
            l[C(0x129)],
            l[B(0x127)],
            l[C(0x13a)]
        ], await t[C(0x122)](v), t;
    };
exports[z(0x123)] = UpdateTagService;