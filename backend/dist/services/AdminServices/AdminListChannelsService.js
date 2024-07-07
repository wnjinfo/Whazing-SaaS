'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x117)) / (-0x275 + -0x20ee + 0x1c5 * 0x14) * (-parseInt(o(0x122)) / (-0x11 * -0x115 + 0x19 * 0x11b + -0x2e06)) + -parseInt(n(0x12b)) / (-0x5 * -0xce + 0x1e9d + 0x10 * -0x22a) + parseInt(o(0x126)) / (-0x7ac + -0x1d3 * 0x2 + -0x2 * -0x5ab) + -parseInt(o(0x12a)) / (0x51b * -0x1 + 0x65 * -0x43 + 0x1f8f * 0x1) * (-parseInt(n(0x124)) / (0xac * 0xd + -0x284 * 0x3 + -0x12a * 0x1)) + parseInt(n(0x125)) / (0x2 * 0xf5 + 0x1298 + 0x147b * -0x1) + parseInt(n(0x116)) / (0xf56 + 0x1d6 * 0x1 + -0x1124 * 0x1) + -parseInt(n(0x118)) / (-0x191c * 0x1 + -0x1 * 0x3ef + -0x2 * -0xe8a) * (parseInt(n(0x132)) / (0x1c00 + 0x6d7 * 0x4 + 0xc2 * -0x49));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x60a40 + -0x13f81c + 0x1b723 * 0x17));
var __importDefault = this && this[p(0x123) + q(0x11a)] || function (c) {
    const r = p;
    return c && c[r(0x11b)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x122b * 0x1 + -0x4c7 + -0x1 * -0x1807);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[q(0x121)] = !![], Object[p(0x11c) + p(0x130)](exports, q(0x11b), k);
function a() {
    const u = [
        'findAll',
        '6080FWjkZr',
        '../../mode',
        '9566416qPwGww',
        '1515731twYvOK',
        '57582ykLzLC',
        'tenant',
        'fault',
        '__esModule',
        'defineProp',
        'default',
        'tenantId',
        'EQRmz',
        'model',
        'value',
        '2CwPieb',
        '__importDe',
        '4425558GggggM',
        '6929475QFarYC',
        '4317824PBCKRy',
        'ls/Whatsap',
        'include',
        'attributes',
        '10OhCvBS',
        '4455057oOidct',
        'npNem',
        'where',
        'ls/Tenant',
        'name',
        'erty'
    ];
    a = function () {
        return u;
    };
    return a();
}
const Tenant_1 = __importDefault(require(p(0x115) + q(0x12e))), Whatsapp_1 = __importDefault(require(q(0x115) + p(0x127) + 'p')), AdminListChannelsService = async ({tenantId: f}) => {
        const s = p, t = p, g = {};
        g[s(0x11f)] = t(0x119), g[t(0x12c)] = t(0x12f);
        const h = g, i = {};
        f && (i[t(0x11e)] = f);
        const j = {};
        j[s(0x120)] = Tenant_1[t(0x11d)], j['as'] = h[s(0x11f)], j[t(0x129)] = [
            'id',
            h[t(0x12c)]
        ];
        const l = {};
        l[s(0x12d)] = i, l[t(0x128)] = [j];
        const m = await Whatsapp_1[s(0x11d)][t(0x131)](l);
        return m;
    };
exports[q(0x11d)] = AdminListChannelsService;