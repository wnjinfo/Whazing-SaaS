'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0xbf)) / (0x459 + -0x1c96 + -0x1 * -0x183e) + parseInt(n(0xc2)) / (0x147d + -0x1654 + 0x2b * 0xb) * (parseInt(n(0xd3)) / (-0x79f * 0x5 + -0x411 * -0x6 + 0xdb8 * 0x1)) + -parseInt(n(0xc7)) / (-0x3fa * -0x4 + -0x49 * -0x19 + -0x1705 * 0x1) + -parseInt(n(0xc4)) / (-0x1 * -0x864 + 0xc52 + 0x1 * -0x14b1) * (-parseInt(o(0xcc)) / (-0xf4f * 0x2 + 0x1 * 0x13f3 + -0x77 * -0x17)) + parseInt(n(0xda)) / (0x5 * 0x67 + -0x13c6 + 0x11ca) * (-parseInt(n(0xc0)) / (0x14e6 + 0x1163 * -0x1 + -0x3 * 0x129)) + parseInt(n(0xd2)) / (-0x919 * -0x1 + 0xa7d + -0x138d) + parseInt(o(0xd5)) / (-0x16e5 * 0x1 + -0x1f72 + 0x1 * 0x3661);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0xd47e5 + 0x172ee + 0x1a6366));
function a() {
    const u = [
        '../../mode',
        'findAll',
        'dYcbM',
        '7150869oMuNka',
        '553773qDkotv',
        'defineProp',
        '6912710XVoVMn',
        'value',
        'tenant',
        'where',
        '__importDe',
        '7fcDerM',
        'default',
        'fault',
        '23595IJaoNb',
        '1109992DMAsXZ',
        'erty',
        '2NXoCah',
        '__esModule',
        '908515ENvZvk',
        'model',
        'tenantId',
        '6577240PrYSHC',
        'ls/Whatsap',
        'name',
        'include',
        'qprGg',
        '36UXgFDZ',
        'attributes',
        'ls/Tenant'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[p(0xd9) + p(0xdc)] || function (c) {
    const r = p;
    return c && c[r(0xc3)] ? c : { 'default': c };
};
const k = {};
k[p(0xd6)] = !![], Object[q(0xd4) + p(0xc1)](exports, q(0xc3), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x4a4 + -0x36d * -0xb + -0xc * 0x377);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Tenant_1 = __importDefault(require(p(0xcf) + p(0xce))), Whatsapp_1 = __importDefault(require(q(0xcf) + p(0xc8) + 'p')), AdminListChannelsService = async ({tenantId: f}) => {
        const s = p, t = q, g = {};
        g[s(0xcb)] = t(0xd7), g[t(0xd1)] = t(0xc9);
        const h = g, i = {};
        f && (i[t(0xc6)] = f);
        const j = {};
        j[s(0xc5)] = Tenant_1[s(0xdb)], j['as'] = h[s(0xcb)], j[s(0xcd)] = [
            'id',
            h[s(0xd1)]
        ];
        const l = {};
        l[s(0xd8)] = i, l[s(0xca)] = [j];
        const m = await Whatsapp_1[t(0xdb)][t(0xd0)](l);
        return m;
    };
exports[p(0xdb)] = AdminListChannelsService;