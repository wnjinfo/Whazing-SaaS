'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x1be)) / (-0x2 * -0xf3a + -0x6 * -0x32d + -0x3181) + parseInt(l(0x1c1)) / (0xdf + -0x3 * 0xb4 + 0x13f) * (-parseInt(m(0x1c6)) / (0x173e + 0x10dd + -0x2818)) + -parseInt(m(0x1cf)) / (0x1184 + -0xc3a + -0x546) + parseInt(m(0x1bc)) / (-0x1d * -0x30 + -0x9b3 + 0x448) + -parseInt(l(0x1bd)) / (-0x170 * -0x2 + 0x9f3 + -0x1 * 0xccd) * (-parseInt(m(0x1d3)) / (-0x2 * 0x82c + 0x1e8f + -0xe30)) + parseInt(m(0x1c4)) / (-0x8 * 0x472 + 0x5f6 + 0x2 * 0xed1) * (-parseInt(l(0x1bf)) / (-0x6f * -0x37 + -0xc50 + -0x1 * 0xb80)) + -parseInt(m(0x1c2)) / (0xf06 + -0x2b7 + -0x3 * 0x417) * (-parseInt(m(0x1ca)) / (-0x3a * 0x55 + -0x67 * 0x11 + 0x1 * 0x1a24));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5 * 0xa67e + 0x86d23 + 0x2f13f));
var __importDefault = this && this[n(0x1d0) + n(0x1c7)] || function (c) {
    const p = n;
    return c && c[p(0x1d4)] ? c : { 'default': c };
};
const k = {};
k[n(0x1d1)] = !![], Object[n(0x1d5) + o(0x1c9)](exports, o(0x1d4), k);
function a() {
    const s = [
        'ownerId',
        '../../mode',
        'findByPk',
        '5806820JozrLG',
        '__importDe',
        'value',
        'update',
        '161TpxJjC',
        '__esModule',
        'defineProp',
        '8909175vowgio',
        '241122JXaPgl',
        '1362155JazDWM',
        '18bcyvVF',
        'name',
        '4ivsQxh',
        '394340SZIRQs',
        'default',
        '6862504mIHPqX',
        'cnpj',
        '2393484JpVdvx',
        'fault',
        'status',
        'erty',
        '1221WsLZtk',
        'ls/Tenant'
    ];
    a = function () {
        return s;
    };
    return a();
}
const Tenant_1 = __importDefault(require(o(0x1cd) + o(0x1cb))), AdminStatusTenant = async ({
        id: e,
        status: f
    }) => {
        const q = o, r = n, g = await Tenant_1[q(0x1c3)][r(0x1ce)](e), h = {};
        h[q(0x1c8)] = f, await g[r(0x1d2)](h);
        const i = {};
        i['id'] = g['id'], i[r(0x1c0)] = g[q(0x1c0)], i[q(0x1c5)] = g[q(0x1c5)], i[q(0x1c8)] = f, i[r(0x1cc)] = g[q(0x1cc)];
        const j = i;
        return j;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1b4 + 0x1 * 0x2249 + 0x1ed9 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[n(0x1c3)] = AdminStatusTenant;