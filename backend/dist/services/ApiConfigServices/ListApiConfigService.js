'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x1c7)) / (-0x10f9 + 0x11d7 * -0x1 + -0x22d1 * -0x1) + parseInt(p(0x1b2)) / (0xfdf + -0x1 * -0x1b5c + -0x1 * 0x2b39) * (-parseInt(o(0x1af)) / (0x1834 + -0x1ada + -0x3 * -0xe3)) + parseInt(o(0x1bb)) / (0x39a + 0xfe6 + 0x2b * -0x74) * (parseInt(p(0x1b8)) / (0x81 * 0x24 + 0x1 * 0x1430 + -0x264f)) + parseInt(o(0x1b9)) / (0xeee + 0xab5 + 0x4f * -0x53) + parseInt(p(0x1ae)) / (0xf6d + -0x1e0a + -0x1 * -0xea4) * (-parseInt(o(0x1b1)) / (-0x99f + -0xa20 + -0x13c7 * -0x1)) + parseInt(o(0x1bf)) / (0x695 * -0x2 + 0x1 * -0x16a2 + 0x23d5) * (-parseInt(p(0x1c8)) / (0x2 * -0x209 + -0x1daf + 0xd3 * 0x29)) + parseInt(o(0x1c5)) / (-0x7 * -0x5b + 0x577 * -0x5 + 0x18e1) * (parseInt(p(0x1c6)) / (0x1bf8 + 0x1198 * -0x2 + 0xf * 0x7c));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x23b01 + -0x49c8e + 0x953ea));
var __importDefault = this && this[q(0x1c3) + q(0x1b4)] || function (c) {
    const s = q;
    return c && c[s(0x1b6)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x1d02 + -0xcc8 * 0x1 + -0xe8d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[q(0x1be)] = !![], Object[q(0x1b3) + q(0x1ad)](exports, r(0x1b6), k);
function a() {
    const v = [
        '114McoCfA',
        'tenantId',
        '312ibDBjK',
        '6814ToYLwQ',
        'defineProp',
        'fault',
        'findAll',
        '__esModule',
        'CyisH',
        '371505JEASZl',
        '1198284LguzMB',
        'ASC',
        '8EhWWCu',
        '../../mode',
        'where',
        'value',
        '9YcYoyz',
        'order',
        'name',
        'ls/ApiConf',
        '__importDe',
        'default',
        '234685XJYxIB',
        '12JFbzUh',
        '113343vdNLHf',
        '1513870HiSWKN',
        'jrdLX',
        'apis',
        'erty',
        '7042uuCTpj'
    ];
    a = function () {
        return v;
    };
    return a();
}
const ApiConfig_1 = __importDefault(require(r(0x1bc) + q(0x1c2) + 'ig')), ListApiConfigService = async ({tenantId: g}) => {
        const t = q, u = r, h = {};
        h[t(0x1b7)] = u(0x1c1), h[u(0x1c9)] = u(0x1ba);
        const i = h, j = {};
        j[u(0x1b0)] = g;
        const l = {};
        l[u(0x1bd)] = j, l[t(0x1c0)] = [[
                i[u(0x1b7)],
                i[t(0x1c9)]
            ]];
        const m = await ApiConfig_1[t(0x1c4)][t(0x1b5)](l), n = {};
        return n[u(0x1ca)] = m, n;
    };
exports[q(0x1c4)] = ListApiConfigService;