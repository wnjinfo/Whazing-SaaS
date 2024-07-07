'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x1f0)) / (0x10bb + -0xd68 + -0x352) * (-parseInt(m(0x1ea)) / (0xda9 * -0x2 + 0x3 * 0xa19 + -0x2f7 * 0x1)) + parseInt(l(0x1f1)) / (-0xe33 + 0x1045 + -0x1f * 0x11) * (parseInt(m(0x1f9)) / (0x209 * 0x5 + 0xd3a + -0x1763)) + parseInt(m(0x1fb)) / (-0xaa1 + -0x88a * 0x3 + 0x2c * 0xd3) * (parseInt(l(0x1f4)) / (0xb5a + 0x24d5 + -0x3029)) + parseInt(m(0x1e9)) / (0x9b * 0x1c + -0x7f * -0x2b + -0x2642) + -parseInt(m(0x200)) / (0x204d + -0x86 * 0x1f + -0x100b) + parseInt(m(0x1f2)) / (-0x7d9 + 0x1776 + -0x1 * 0xf94) + -parseInt(m(0x1ee)) / (0x1f7e + -0x13 * 0x73 + -0x16eb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2 * -0x31427 + -0x7cb0a + 0xb * 0x1b09a));
var __importDefault = this && this[n(0x1ed) + n(0x201)] || function (c) {
    const p = n;
    return c && c[p(0x1eb)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xa21 + -0x12c5 + -0xa8d * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[n(0x1f7)] = !![], Object[n(0x1f6) + o(0x1ec)](exports, o(0x1eb), k);
function a() {
    const s = [
        'findByPk',
        '1XuTpIk',
        '4275vCPDLt',
        '4112604bEuaDh',
        'ownerId',
        '323436VDSrGO',
        'update',
        'defineProp',
        'value',
        'cnpj',
        '616FbvgSn',
        'ls/Tenant',
        '15EMxnrC',
        'name',
        'status',
        'default',
        '../../mode',
        '465496frtLmB',
        'fault',
        '1631091VrjKRE',
        '817358mdyeDM',
        '__esModule',
        'erty',
        '__importDe',
        '3003290ZoLBPE'
    ];
    a = function () {
        return s;
    };
    return a();
}
const Tenant_1 = __importDefault(require(o(0x1ff) + o(0x1fa))), AdminStatusTenant = async ({
        id: e,
        status: f
    }) => {
        const q = n, r = n, g = await Tenant_1[q(0x1fe)][q(0x1ef)](e), h = {};
        h[r(0x1fd)] = f, await g[r(0x1f5)](h);
        const i = {};
        i['id'] = g['id'], i[q(0x1fc)] = g[r(0x1fc)], i[q(0x1f8)] = g[r(0x1f8)], i[q(0x1fd)] = f, i[r(0x1f3)] = g[q(0x1f3)];
        const j = i;
        return j;
    };
exports[o(0x1fe)] = AdminStatusTenant;