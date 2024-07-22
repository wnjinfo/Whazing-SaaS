'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xdc9 + -0x1215 * -0x2 + -0x14f9);
        let h = e[f];
        return h;
    }, b(c, d);
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x18a)) / (-0x2 * -0x1348 + -0x1f5 * 0xf + -0x934) * (parseInt(p(0x176)) / (0x1e0f * 0x1 + -0x2 * 0x4d5 + -0x1463)) + -parseInt(p(0x180)) / (-0xba1 + -0x1fbf + -0x17f * -0x1d) * (parseInt(p(0x186)) / (0x1 * -0xf85 + 0xe1 * -0x16 + 0x22df)) + parseInt(q(0x16c)) / (0x15eb + 0x565 + 0x19b * -0x11) + parseInt(q(0x18f)) / (-0x2 * -0x1319 + -0x3 * 0x2f3 + 0x1 * -0x1d53) + parseInt(q(0x184)) / (0xcb * -0x6 + 0x1e * 0xeb + -0x16c1) + -parseInt(q(0x187)) / (-0x12b6 + -0x17b5 * -0x1 + -0x4f7) * (-parseInt(p(0x171)) / (0x9 * 0x40 + 0x204e + -0x2285)) + -parseInt(q(0x179)) / (-0x4 * -0x490 + -0x66f + -0xbc7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x15049d + 0xba9e * 0x3 + 0x329 * 0xa85));
function a() {
    const w = [
        '1266bqpsKW',
        'jViXo',
        '__esModule',
        '18308300hkYBed',
        'ls/Campaig',
        'ATE_CAMPAI',
        'findOne',
        'tenantId',
        'value',
        'destroy',
        '64323xFuqWI',
        'fault',
        'where',
        'AIGN_NOT_E',
        '1608152szoPYs',
        'PAIGN_FOUN',
        '236uHXLLx',
        '14527616ECKUtY',
        'CANCELED_P',
        'ERROR_CAMP',
        '246LTEgKy',
        'dRqBu',
        'erty',
        'rs/AppErro',
        'ERR_NO_CAM',
        '10122222oRXNqP',
        'ERR_NO_UPD',
        '__importDe',
        'ENDING',
        'default',
        'Bjzsn',
        '../../erro',
        'XISTS',
        'GxJXF',
        'status',
        '2316820xFqeLi',
        'pending',
        'defineProp',
        'canceled',
        '../../mode',
        '9FUdFTQ',
        'uKcVF',
        'rXhzR',
        'GN_NOT_IN_',
        'ZaBIZ'
    ];
    a = function () {
        return w;
    };
    return a();
}
var __importDefault = this && this[r(0x191) + s(0x181)] || function (c) {
    const t = r;
    return c && c[t(0x178)] ? c : { 'default': c };
};
const k = {};
k[s(0x17e)] = !![], Object[r(0x16e) + r(0x18c)](exports, r(0x178), k);
const Campaign_1 = __importDefault(require(s(0x170) + r(0x17a) + 'n')), AppError_1 = __importDefault(require(s(0x168) + s(0x18d) + 'r')), DeleteCampaignService = async ({
        id: f,
        tenantId: g
    }) => {
        const u = s, v = r, h = {};
        h[u(0x173)] = v(0x18e) + u(0x185) + 'D', h[v(0x175)] = function (n, o) {
            return n !== o;
        }, h[u(0x177)] = v(0x16d), h[u(0x18b)] = function (n, o) {
            return n !== o;
        }, h[v(0x16a)] = u(0x16f), h[u(0x172)] = u(0x190) + v(0x17b) + v(0x174) + v(0x188) + u(0x192), h[v(0x194)] = v(0x189) + v(0x183) + u(0x169);
        const i = h, j = {};
        j['id'] = f, j[v(0x17d)] = g;
        const l = {};
        l[u(0x182)] = j;
        const m = await Campaign_1[v(0x193)][v(0x17c)](l);
        if (!m)
            throw new AppError_1[(u(0x193))](i[u(0x173)], 0x2626 + 0x1a04 + -0x3e96);
        if (i[v(0x175)](m?.[u(0x16b)], i[v(0x177)]) && i[u(0x18b)](m?.[u(0x16b)], i[v(0x16a)]))
            throw new AppError_1[(v(0x193))](i[u(0x172)], 0x1682 + 0x1936 * -0x1 + 0x448);
        try {
            await m[u(0x17f)]();
        } catch (n) {
            throw new AppError_1[(u(0x193))](i[u(0x194)], 0x1 * -0x11f2 + 0x21fc + 0x269 * -0x6);
        }
    };
exports[r(0x193)] = DeleteCampaignService;