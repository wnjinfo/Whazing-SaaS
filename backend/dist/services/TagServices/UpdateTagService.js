'use strict';
const y = b, z = b;
function a() {
    const D = [
        'default',
        'ZFvDT',
        'attributes',
        '../../erro',
        '130834YAqntp',
        '602418ucbzGV',
        'ls/Tag',
        'erty',
        '5tolwnt',
        'tag',
        'tenantId',
        'value',
        '__esModule',
        'isActive',
        '1072jrJiOH',
        'update',
        'CSKMf',
        'ERR_NO_TAG',
        '28651YVYwNR',
        'reload',
        'fault',
        'FXbqm',
        '../../mode',
        '3125692SCKbtm',
        'findOne',
        '205892orkUrI',
        'where',
        '12581928AQuKas',
        'defineProp',
        'xyOHY',
        'FYDrl',
        'userId',
        'rs/AppErro',
        'color',
        '_FOUND',
        '__importDe',
        '437847qIHZFE'
    ];
    a = function () {
        return D;
    };
    return a();
}
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(w(0xab)) / (-0xaee * -0x1 + 0x1595 + -0x2082) + parseInt(w(0xbb)) / (-0xffe + 0x1ec3 + -0xec3) + parseInt(w(0xb6)) / (-0xc53 + 0x1d88 + -0x899 * 0x2) + -parseInt(w(0xa9)) / (0x1845 * 0x1 + 0xc0b + -0x244c) * (-parseInt(x(0x9a)) / (-0x1219 + 0x83 * -0xc + 0x87 * 0x2e)) + parseInt(w(0xbc)) / (-0x12c7 + 0x1edf + -0xc12) + parseInt(w(0xa4)) / (-0xe90 + -0x2016 + 0x2ead) * (parseInt(x(0xa0)) / (0x1 * 0x468 + -0xecd + 0xa6d)) + -parseInt(x(0xad)) / (0xa31 + -0x1 * -0x20af + 0x3e5 * -0xb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x9da2e * -0x1 + -0x885c + 0x113e9c));
var __importDefault = this && this[y(0xb5) + z(0xa6)] || function (c) {
    const A = z;
    return c && c[A(0x9e)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb5 * -0x1a + -0x8b * 0x41 + 0x1183);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[y(0x9d)] = !![], Object[y(0xae) + z(0xbe)](exports, y(0x9e), k);
const AppError_1 = __importDefault(require(y(0xba) + y(0xb2) + 'r')), Tag_1 = __importDefault(require(z(0xa8) + z(0xbd))), UpdateTagService = async ({
        tagData: h,
        tagId: i
    }) => {
        const B = z, C = z, j = {};
        j[B(0xb0)] = C(0x9b), j[C(0xa2)] = B(0xb3), j[B(0xa7)] = C(0x9f), j[C(0xb8)] = B(0xb1), j[B(0xaf)] = C(0xa3) + B(0xb4);
        const l = j, {
                tag: m,
                color: n,
                isActive: o,
                userId: p,
                tenantId: q
            } = h, r = {};
        r['id'] = i, r[B(0x9c)] = q;
        const s = {};
        s[C(0xac)] = r, s[B(0xb9)] = [
            'id',
            l[B(0xb0)],
            l[B(0xa2)],
            l[C(0xa7)],
            l[C(0xb8)]
        ];
        const t = await Tag_1[C(0xb7)][B(0xaa)](s);
        if (!t)
            throw new AppError_1[(C(0xb7))](l[B(0xaf)], 0x1788 + -0x1 * -0x1ff8 + -0x35ec);
        const u = {};
        u[C(0x9b)] = m, u[B(0xb3)] = n, u[C(0x9f)] = o, u[C(0xb1)] = p, await t[C(0xa1)](u);
        const v = {};
        return v[C(0xb9)] = [
            'id',
            l[C(0xb0)],
            l[B(0xa2)],
            l[B(0xa7)],
            l[B(0xb8)]
        ], await t[B(0xa5)](v), t;
    };
exports[y(0xb7)] = UpdateTagService;