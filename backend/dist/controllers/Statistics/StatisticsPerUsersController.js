'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x1e4)) / (0x65 * 0x16 + -0x43f * -0x2 + 0x125 * -0xf) + parseInt(l(0x1ee)) / (-0x10 * 0x20 + -0xd50 + 0xf52) * (-parseInt(m(0x1ea)) / (0xdf7 + 0xa21 + -0x1 * 0x1815)) + parseInt(m(0x1d4)) / (0x3e4 * 0x4 + -0x3e * 0x8f + -0x15d * -0xe) + parseInt(m(0x1e3)) / (0xcaa + 0x5b3 * 0x3 + -0x1dbe) * (-parseInt(m(0x1dc)) / (0x116 * 0x4 + -0x1846 + -0x1 * -0x13f4)) + -parseInt(l(0x1e7)) / (0x5 * -0x527 + -0x5 * -0x527 + -0x1 * -0x7) + -parseInt(l(0x1d7)) / (-0x1e85 + 0x21c7 * 0x1 + -0x3b * 0xe) + parseInt(l(0x1e8)) / (0x13d9 * 0x1 + 0x23d8 + -0x37a8);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1ea1 + 0x1ffd2 + 0x40ea * -0x1));
var __importDefault = this && this[n(0x1e9) + o(0x1ef)] || function (c) {
    const p = o;
    return c && c[p(0x1dd)] ? c : { 'default': c };
};
const k = {};
function a() {
    const s = [
        '78KwtTmC',
        'defineProp',
        'value',
        'ices/Stati',
        '13358kfIaAh',
        'fault',
        '704840WlsafY',
        'endDate',
        'query',
        '115456EhwoKy',
        'json',
        'index',
        'tenantId',
        'erty',
        '18PdZtoR',
        '__esModule',
        'stics/Stat',
        '../../serv',
        'sers',
        'user',
        'isticsPerU',
        '281270QVJvcr',
        '115129wKyWoH',
        'default',
        'startDate',
        '309799LtZGev',
        '1946997rqEBGM',
        '__importDe'
    ];
    a = function () {
        return s;
    };
    return a();
}
k[o(0x1ec)] = !![], Object[o(0x1eb) + o(0x1db)](exports, n(0x1dd), k), exports[o(0x1d9)] = void (-0x19b0 + -0x1aa7 * 0x1 + 0x3457);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1d26 + -0x3 * 0xc92 + 0xa64);
        let h = e[f];
        return h;
    }, b(c, d);
}
const StatisticsPerUsers_1 = __importDefault(require(o(0x1df) + o(0x1ed) + n(0x1de) + n(0x1e2) + o(0x1e0))), index = async (d, e) => {
        const q = o, r = n, {tenantId: f} = d[q(0x1e1)], {
                startDate: g,
                endDate: h
            } = d[r(0x1d6)], i = {};
        i[q(0x1e6)] = g, i[q(0x1d5)] = h, i[q(0x1da)] = f;
        const j = await (-0x1 * 0x205d + 0xe37 + 0x65 * 0x2e, StatisticsPerUsers_1[q(0x1e5)])(i);
        return e[q(0x1d8)](j);
    };
exports[o(0x1d9)] = index;