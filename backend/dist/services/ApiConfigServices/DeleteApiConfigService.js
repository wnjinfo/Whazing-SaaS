'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x12d)) / (0x25ac + -0x15c8 * -0x1 + 0x321 * -0x13) + -parseInt(o(0x12e)) / (0xa7 * 0x1c + -0x1ff1 + -0x1f * -0x71) + parseInt(n(0x139)) / (-0x1627 + -0x7 * 0x52c + 0x3a5e) + -parseInt(n(0x132)) / (-0x36a + 0x1 * -0x8c7 + -0x5 * -0x271) + -parseInt(n(0x12c)) / (-0x64a * 0x6 + -0x218a + 0x474b) * (-parseInt(n(0x126)) / (0x300 * 0x1 + -0x7 * 0x1fd + 0xaf1)) + parseInt(o(0x13b)) / (0xca0 + 0x4 * 0x102 + -0x10a1) + -parseInt(n(0x130)) / (0x5 * 0x4e5 + 0x1233 + 0xaa9 * -0x4);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x134a9a + 0xc10e9 + 0x17 * 0xc16b));
var __importDefault = this && this[p(0x12f) + p(0x137)] || function (c) {
    const r = q;
    return c && c[r(0x128)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb26 + 0x2613 * 0x1 + -0x528 * 0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[p(0x13a)] = !![], Object[q(0x138) + q(0x133)](exports, p(0x128), k);
const AppError_1 = __importDefault(require(q(0x134) + p(0x136) + 'r')), ApiConfig_1 = __importDefault(require(p(0x13e) + p(0x13d) + 'ig')), DeleteApiConfigService = async ({
        apiId: f,
        tenantId: g
    }) => {
        const s = p, t = q, h = {};
        h[s(0x12a)] = t(0x12b) + s(0x13f) + t(0x125);
        const i = h, j = {};
        j['id'] = f, j[t(0x129)] = g;
        const l = {};
        l[s(0x131)] = j;
        const m = await ApiConfig_1[s(0x13c)][t(0x127)](l);
        if (!m)
            throw new AppError_1[(s(0x13c))](i[s(0x12a)], 0x5ac + 0x1393 * 0x1 + -0x17ab);
        await m[s(0x135)]();
    };
exports[q(0x13c)] = DeleteApiConfigService;
function a() {
    const u = [
        '2902476iMsXJd',
        'value',
        '6639598jwpnAW',
        'default',
        'ls/ApiConf',
        '../../mode',
        'NFIG_NOT_F',
        'OUND',
        '12108WtpalM',
        'findOne',
        '__esModule',
        'tenantId',
        'dOhMw',
        'ERR_API_CO',
        '2155JFmeNN',
        '337972vkiAyq',
        '373626gCZWRa',
        '__importDe',
        '2286520McgVZh',
        'where',
        '5239360OFiWGD',
        'erty',
        '../../erro',
        'destroy',
        'rs/AppErro',
        'fault',
        'defineProp'
    ];
    a = function () {
        return u;
    };
    return a();
}