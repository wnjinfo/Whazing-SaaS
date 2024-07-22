'use strict';
const x = b, y = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1355 + 0x1 * 0x216f + -0x7 * 0x1eb);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const C = [
        'group',
        'where',
        '171ZwXxAN',
        'update',
        'ls/Group',
        'reload',
        'ERR_NO_GRO',
        '2578992EsOhCZ',
        '__esModule',
        'rs/AppErro',
        '1765685GvdbjU',
        'MgHvQ',
        'nxcpp',
        'fault',
        'isActive',
        'tenantId',
        '4671096hpvOgc',
        '__importDe',
        '334862NANCdR',
        'QDjCx',
        '62904XxLkwB',
        '../../erro',
        '7SHBqjW',
        '169hMPOOm',
        'erty',
        '4820ivEiaC',
        'attributes',
        'UP_FOUND',
        'userId',
        '270RxMyIH',
        '277UvFfcX',
        'defineProp',
        'value',
        'findOne',
        '402kLNemk',
        'XDpZj',
        'default',
        '646sdJQeO',
        '../../mode'
    ];
    a = function () {
        return C;
    };
    return a();
}
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0xbb)) / (0x1796 + -0x15c1 * -0x1 + -0x2d56) * (-parseInt(v(0xc2)) / (0x2 * -0x1017 + -0x128 + 0x2158)) + -parseInt(w(0xbf)) / (-0x112b + -0x1 * 0x23c7 + 0x34f5) * (parseInt(v(0xb6)) / (0xb8f * -0x2 + -0x1 * 0x1010 + 0x1d * 0x15a)) + -parseInt(w(0xce)) / (0x13a5 + 0x892 * -0x1 + -0xb0e) + -parseInt(w(0xad)) / (-0x43 * 0x67 + -0x18f5 * 0x1 + 0x33f0) * (parseInt(v(0xb3)) / (-0x1d6a + 0x1 * 0xeed + -0x1 * -0xe84)) + parseInt(v(0xb1)) / (0x1 * 0x2564 + 0xc * -0x338 + 0x144) * (-parseInt(w(0xc6)) / (-0x49e + 0x22f2 + 0x37 * -0x8d)) + parseInt(v(0xba)) / (0x1dc5 + -0x931 + -0x148a) * (-parseInt(w(0xaf)) / (0xb5 + 0x5be + -0x14 * 0x52)) + -parseInt(w(0xcb)) / (-0x1 * -0x1ba7 + -0x9 * 0x406 + 0x89b) * (-parseInt(v(0xb4)) / (0x1ed1 + -0x27 * -0xe + 0x1 * -0x20e6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xb60ee + -0x8b7dd + 0x1acf7a));
var __importDefault = this && this[x(0xae) + x(0xd1)] || function (c) {
    const z = y;
    return c && c[z(0xcc)] ? c : { 'default': c };
};
const k = {};
k[x(0xbd)] = !![], Object[x(0xbc) + y(0xb5)](exports, x(0xcc), k);
const AppError_1 = __importDefault(require(x(0xb2) + y(0xcd) + 'r')), Group_1 = __importDefault(require(x(0xc3) + x(0xc8))), UpdateGroupService = async ({
        groupData: h,
        groupId: i
    }) => {
        const A = y, B = y, j = {};
        j[A(0xd0)] = A(0xc4), j[B(0xc0)] = A(0xd2), j[B(0xb0)] = A(0xb9), j[B(0xcf)] = B(0xca) + B(0xb8);
        const l = j, {
                group: m,
                isActive: n,
                userId: o,
                tenantId: p
            } = h, q = {};
        q['id'] = i, q[B(0xd3)] = p;
        const r = {};
        r[A(0xc5)] = q, r[B(0xb7)] = [
            'id',
            l[A(0xd0)],
            l[B(0xc0)],
            l[A(0xb0)]
        ];
        const s = await Group_1[B(0xc1)][B(0xbe)](r);
        if (!s)
            throw new AppError_1[(A(0xc1))](l[A(0xcf)], -0x1ca5 + 0x7bc + -0x3 * -0x77f);
        const t = {};
        t[B(0xc4)] = m, t[B(0xd2)] = n, t[B(0xb9)] = o, await s[A(0xc7)](t);
        const u = {};
        return u[B(0xb7)] = [
            'id',
            l[B(0xd0)],
            l[A(0xc0)],
            l[A(0xb0)]
        ], await s[B(0xc9)](u), s;
    };
exports[x(0xc1)] = UpdateGroupService;