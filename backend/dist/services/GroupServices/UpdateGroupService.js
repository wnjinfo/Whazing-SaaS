'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x9f)) / (-0x1e4 + 0x1c84 + 0x553 * -0x5) * (-parseInt(v(0xb9)) / (-0xbdc + -0x1a15 + 0x25f3)) + -parseInt(v(0xa6)) / (0x1377 + -0x57 * -0x1b + 0x7 * -0x417) + parseInt(v(0xa0)) / (0x6a1 * -0x1 + -0x1e1 + 0x886) + -parseInt(v(0xb3)) / (-0x1c49 + -0xe2c + 0x153d * 0x2) * (parseInt(w(0xac)) / (0xcc2 + 0x2521 + 0x1 * -0x31dd)) + -parseInt(w(0x9e)) / (-0xf66 + -0x1 * -0x205 + 0xd68) + parseInt(v(0xaa)) / (-0x23ef + -0xd3 * -0x3 + 0x217e) + -parseInt(v(0xa7)) / (-0x62d + -0x1db1 * 0x1 + 0x23e7) * (parseInt(w(0xba)) / (0x1a0 + -0x45 * 0x81 + 0x6a3 * 0x5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x657 * -0x10 + -0x65df1 + 0xa7c93 * 0x1));
var __importDefault = this && this[x(0xa8) + x(0xb2)] || function (c) {
    const z = y;
    return c && c[z(0xa5)] ? c : { 'default': c };
};
function a() {
    const C = [
        'ALYWg',
        'value',
        'oakYD',
        '../../erro',
        'update',
        '316239HzOQsL',
        '2jbCASY',
        '1733032ddrMqD',
        'default',
        'erty',
        '../../mode',
        'findOne',
        '__esModule',
        '1298499KLjefy',
        '64485OsxPGg',
        '__importDe',
        'where',
        '1827496rmkfdB',
        'tenantId',
        '6vdcijX',
        'attributes',
        'ERR_NO_GRO',
        'userId',
        'isActive',
        'reload',
        'fault',
        '503645QCcxfC',
        'rs/AppErro',
        'defineProp',
        'kRVFt',
        'UP_FOUND',
        'KOsSV',
        '189722ZpwEiU',
        '40TpZeXa',
        'ls/Group',
        'group'
    ];
    a = function () {
        return C;
    };
    return a();
}
const k = {};
k[x(0xbe)] = !![], Object[y(0xb5) + y(0xa2)](exports, y(0xa5), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1ce5 + 0x9c1 + -0x8 * -0x278);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(y(0x9c) + x(0xb4) + 'r')), Group_1 = __importDefault(require(x(0xa3) + x(0xbb))), UpdateGroupService = async ({
        groupData: h,
        groupId: i
    }) => {
        const A = x, B = x, j = {};
        j[A(0xb6)] = B(0xbc), j[B(0xbf)] = A(0xb0), j[A(0xbd)] = B(0xaf), j[A(0xb8)] = B(0xae) + B(0xb7);
        const l = j, {
                group: m,
                isActive: n,
                userId: o,
                tenantId: p
            } = h, q = {};
        q['id'] = i, q[B(0xab)] = p;
        const r = {};
        r[A(0xa9)] = q, r[B(0xad)] = [
            'id',
            l[B(0xb6)],
            l[B(0xbf)],
            l[A(0xbd)]
        ];
        const s = await Group_1[B(0xa1)][B(0xa4)](r);
        if (!s)
            throw new AppError_1[(A(0xa1))](l[A(0xb8)], -0x19ee + 0x22a + 0x656 * 0x4);
        const t = {};
        t[B(0xbc)] = m, t[B(0xb0)] = n, t[A(0xaf)] = o, await s[B(0x9d)](t);
        const u = {};
        return u[A(0xad)] = [
            'id',
            l[A(0xb6)],
            l[B(0xbf)],
            l[B(0xbd)]
        ], await s[A(0xb1)](u), s;
    };
exports[y(0xa1)] = UpdateGroupService;