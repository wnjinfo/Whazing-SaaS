'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x8d)) / (-0x5d * -0x53 + -0x1 * 0x1252 + -0x4 * 0x2f5) + parseInt(v(0x99)) / (-0xf15 + -0x17 * -0x23 + 0x5f9 * 0x2) * (parseInt(w(0x84)) / (-0x1 * 0xbee + -0x1 * -0xa6a + 0x1 * 0x187)) + -parseInt(w(0x91)) / (-0x54 * -0x2f + -0x9d * -0x37 + -0x3123) * (parseInt(w(0x92)) / (0x1058 + 0x18b0 + -0x2903 * 0x1)) + -parseInt(w(0x96)) / (-0x2258 + 0x24c4 + -0x266 * 0x1) + -parseInt(w(0x80)) / (0x2354 + -0x2527 + 0x3 * 0x9e) + -parseInt(w(0x86)) / (-0x1737 + -0x1993 + 0x30d2) + parseInt(w(0x8f)) / (0x1031 * 0x2 + -0x1 * -0x2142 + 0x5 * -0xd1f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x44343 + -0x1 * -0xdfa3e + -0x3 * 0xd037));
function a() {
    const C = [
        'where',
        'UP_FOUND',
        'tenantId',
        '../../mode',
        'wMTXK',
        'value',
        '150804jlCxwS',
        'DAuHa',
        '11771838zRqxEP',
        'erty',
        '1362992WSrLJE',
        '10nfyjud',
        'attributes',
        'userId',
        'reload',
        '432384TFiwfj',
        'update',
        'findOne',
        '12952gATmeQ',
        'ERR_NO_GRO',
        'default',
        'ls/Group',
        'fault',
        'group',
        '__esModule',
        'rs/AppErro',
        '__importDe',
        'defineProp',
        '793744OqRRFi',
        '../../erro',
        'TzEhH',
        'xjNYz',
        '54drgcVj',
        'isActive',
        '1853152CArdoM'
    ];
    a = function () {
        return C;
    };
    return a();
}
var __importDefault = this && this[x(0x7e) + x(0x7a)] || function (c) {
    const z = y;
    return c && c[z(0x7c)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4f9 + 0x48b + 0xe7);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[y(0x8c)] = !![], Object[x(0x7f) + x(0x90)](exports, x(0x7c), k);
const AppError_1 = __importDefault(require(x(0x81) + y(0x7d) + 'r')), Group_1 = __importDefault(require(y(0x8a) + y(0x79))), UpdateGroupService = async ({
        groupData: h,
        groupId: i
    }) => {
        const A = x, B = x, j = {};
        j[A(0x8e)] = B(0x7b), j[A(0x83)] = B(0x85), j[B(0x8b)] = A(0x94), j[A(0x82)] = B(0x9a) + A(0x88);
        const l = j, {
                group: m,
                isActive: n,
                userId: o,
                tenantId: p
            } = h, q = {};
        q['id'] = i, q[B(0x89)] = p;
        const r = {};
        r[A(0x87)] = q, r[B(0x93)] = [
            'id',
            l[B(0x8e)],
            l[B(0x83)],
            l[A(0x8b)]
        ];
        const s = await Group_1[B(0x9b)][B(0x98)](r);
        if (!s)
            throw new AppError_1[(B(0x9b))](l[A(0x82)], 0x211a + -0xe * -0x31 + -0x2234);
        const t = {};
        t[B(0x7b)] = m, t[B(0x85)] = n, t[B(0x94)] = o, await s[A(0x97)](t);
        const u = {};
        return u[A(0x93)] = [
            'id',
            l[B(0x8e)],
            l[A(0x83)],
            l[B(0x8b)]
        ], await s[A(0x95)](u), s;
    };
exports[y(0x9b)] = UpdateGroupService;