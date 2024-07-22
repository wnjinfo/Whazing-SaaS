'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x198)) / (-0x65f * -0x2 + -0x12 * 0x161 + 0x1 * 0xc15) + -parseInt(r(0x18f)) / (0x1a41 + 0x6a7 + -0x20e6) + parseInt(r(0x19d)) / (0xb49 * -0x3 + -0x1430 + 0x360e) + parseInt(r(0x191)) / (-0x17 * -0x13a + -0x122b * 0x1 + -0xa07) * (parseInt(r(0x19f)) / (-0x1c23 * -0x1 + -0x67f * 0x5 + 0x1 * 0x45d)) + parseInt(s(0x19c)) / (0x1c1 * 0x1 + 0x1652 + -0x180d) + -parseInt(r(0x19b)) / (0x66a + 0xad8 + -0x113b) * (parseInt(r(0x19a)) / (0x1 * 0x721 + 0x1b24 + 0x5 * -0x6d9)) + -parseInt(s(0x1a0)) / (0xf8f + -0x90b * -0x3 + -0x2aa7 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xbaaf * -0x1 + 0xb99c * -0x3 + 0x30fd3));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xe55 + 0x1 * 0x210e + -0x2ddd);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[t(0x1a2) + t(0x196)] || function (c) {
    const v = u;
    return c && c[v(0x18a)] ? c : { 'default': c };
};
const k = {};
k[u(0x199)] = !![], Object[u(0x187) + t(0x18b)](exports, t(0x18a), k);
const AppError_1 = __importDefault(require(u(0x194) + t(0x189) + 'r')), Tenant_1 = __importDefault(require(t(0x1a6) + t(0x1a5))), UpdateMessageBusinessHoursService = async ({
        messageBusinessHours: h,
        tenantId: i
    }) => {
        const w = t, x = t, j = {};
        j[w(0x19e)] = x(0x186) + x(0x192), j[x(0x193)] = w(0x18e) + w(0x1a1), j[x(0x18d)] = x(0x1a4) + x(0x190);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[w(0x1a3)] = m;
        const o = await Tenant_1[w(0x188)][x(0x1a7)](n);
        if (!o)
            throw new AppError_1[(w(0x188))](l[w(0x19e)], -0x6 * -0x1df + -0xa8c + 0xa * 0x17);
        const p = {};
        p[x(0x1a4) + w(0x190)] = h, await o[x(0x195)](p);
        const q = {};
        return q[w(0x18c)] = [
            l[x(0x193)],
            l[w(0x18d)]
        ], await o[w(0x197)](q), o;
    };
exports[u(0x188)] = UpdateMessageBusinessHoursService;
function a() {
    const y = [
        'findOne',
        'ERR_NO_TEN',
        'defineProp',
        'default',
        'rs/AppErro',
        '__esModule',
        'erty',
        'attributes',
        'UhWuh',
        'businessHo',
        '248658JLnmJb',
        'inessHours',
        '7780jSCyVh',
        'ANT_FOUND',
        'ksVAh',
        '../../erro',
        'update',
        'fault',
        'reload',
        '78293WIcNMc',
        'value',
        '272amORqa',
        '20594IecerR',
        '289452PiYiEw',
        '559194FLUmlg',
        'JqAnA',
        '125NNnxWw',
        '281691KEfHuo',
        'urs',
        '__importDe',
        'where',
        'messageBus',
        'ls/Tenant',
        '../../mode'
    ];
    a = function () {
        return y;
    };
    return a();
}