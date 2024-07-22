'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1915 + -0x2421 + -0xbc0 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0xd4)) / (-0x2524 + 0x1a * -0x163 + 0x7 * 0xa75) * (-parseInt(s(0xce)) / (0x23b7 * -0x1 + -0x1df3 + -0x74c * -0x9)) + parseInt(r(0xc3)) / (0x1b99 + -0x2 * 0x445 + -0x130c) * (-parseInt(r(0xbd)) / (0x79 * 0x14 + 0x846 + -0x2 * 0x8db)) + parseInt(r(0xb6)) / (0xe2 * -0x9 + -0x1e0f + 0x9d * 0x3e) * (parseInt(s(0xbc)) / (-0xa26 + -0xbf5 * -0x1 + -0x1 * 0x1c9)) + parseInt(s(0xcc)) / (0x198c + 0x1241 * -0x1 + -0x744) * (-parseInt(r(0xd5)) / (-0x8 * 0x37f + 0x1941 * -0x1 + 0x3541)) + parseInt(s(0xbb)) / (-0x12d2 + -0x1ab9 + 0x2d94) + -parseInt(s(0xd1)) / (0x248b * 0x1 + 0x139 * -0x9 + 0x1 * -0x1980) + parseInt(r(0xd2)) / (-0x212a + 0x921 * -0x3 + -0xe * -0x454);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x19666c + 0x29 * -0x13c5 + -0x795b2));
function a() {
    const y = [
        '14442430gbrdRr',
        '12560757XpYyVR',
        'value',
        '11QIjXwF',
        '8PYZReq',
        'xjSFE',
        'rs/AppErro',
        'default',
        'update',
        '35SsgnXl',
        '../../erro',
        'urs',
        '../../mode',
        'where',
        '11545416YCLZaU',
        '1490850HBEsYl',
        '1420004IcGQOB',
        'KQxSc',
        'ANT_FOUND',
        'fault',
        'IoBQX',
        'reload',
        '9gygqzG',
        'inessHours',
        '__importDe',
        'erty',
        'ls/Tenant',
        'findOne',
        'messageBus',
        'ERR_NO_TEN',
        'defineProp',
        '6045011UQAspA',
        '__esModule',
        '30696LEZQcB',
        'attributes',
        'businessHo'
    ];
    a = function () {
        return y;
    };
    return a();
}
var __importDefault = this && this[t(0xc5) + u(0xc0)] || function (c) {
    const v = t;
    return c && c[v(0xcd)] ? c : { 'default': c };
};
const k = {};
k[u(0xd3)] = !![], Object[u(0xcb) + t(0xc6)](exports, u(0xcd), k);
const AppError_1 = __importDefault(require(t(0xb7) + t(0xd7) + 'r')), Tenant_1 = __importDefault(require(t(0xb9) + t(0xc7))), UpdateBusinessHoursService = async ({
        businessHours: h,
        tenantId: i
    }) => {
        const w = u, x = u, j = {};
        j[w(0xc1)] = w(0xca) + x(0xbf), j[x(0xbe)] = x(0xd0) + x(0xb8), j[w(0xd6)] = w(0xc9) + x(0xc4);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[x(0xba)] = m;
        const o = await Tenant_1[w(0xb4)][x(0xc8)](n);
        if (!o)
            throw new AppError_1[(x(0xb4))](l[x(0xc1)], 0x116 + -0x59d * 0x4 + 0xb79 * 0x2);
        const p = {};
        p[x(0xd0) + w(0xb8)] = h, await o[x(0xb5)](p);
        const q = {};
        return q[w(0xcf)] = [
            l[x(0xbe)],
            l[w(0xd6)]
        ], await o[x(0xc2)](q), o;
    };
exports[t(0xb4)] = UpdateBusinessHoursService;