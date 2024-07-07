'use strict';
function a() {
    const w = [
        'AIGN_NOT_E',
        'CANCELED_P',
        'ERROR_CAMP',
        'GN_NOT_IN_',
        'status',
        '__importDe',
        'PAIGN_FOUN',
        '828640uVbsvJ',
        '2980EHrjbY',
        'findOne',
        'BUBLd',
        'ERR_NO_UPD',
        'canceled',
        '120iwcDKK',
        'ls/Campaig',
        '141466cYdttO',
        '3826530PmfDUt',
        'ATE_CAMPAI',
        'destroy',
        'default',
        'rs/AppErro',
        'nXzFr',
        '2ukxjro',
        '../../mode',
        'kahIC',
        'ufKJK',
        '1186374NXITFr',
        'CGjpu',
        '../../erro',
        'pending',
        'rWjRh',
        'ENDING',
        'where',
        'erty',
        '__esModule',
        'EhLVc',
        '1278368oBnAsS',
        'fault',
        'value',
        '505464IsEXtQ',
        'ERR_NO_CAM',
        'tenantId',
        'XISTS',
        'defineProp'
    ];
    a = function () {
        return w;
    };
    return a();
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x12e)) / (0x1c98 + 0x17eb * -0x1 + -0x2e * 0x1a) * (-parseInt(q(0x135)) / (-0x2078 + 0xb7 * 0x4 + 0xdf * 0x22)) + parseInt(p(0x139)) / (0x765 + 0x1 * -0x1ce1 + -0x157f * -0x1) + parseInt(p(0x127)) / (0x1c28 + -0x13ca + 0x1 * -0x85a) * (parseInt(p(0x12c)) / (-0xb82 * 0x2 + -0xc2 * -0x1 + 0x1647)) + parseInt(q(0x11a)) / (0xd9e + -0xa8 * -0x17 + 0x48 * -0x66) + parseInt(q(0x117)) / (0x13d1 + -0x3 * -0x337 + -0x1d6f) + -parseInt(q(0x126)) / (0x18d7 * -0x1 + 0x11 * 0x61 + -0x2 * -0x937) + -parseInt(p(0x12f)) / (-0xa45 * -0x1 + -0x2398 + 0x195c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x28fde + 0x5fee8 * 0x1 + 0x10930));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x163f + -0x3 * -0x448 + -0x2200);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0x124) + r(0x118)] || function (c) {
    const t = s;
    return c && c[t(0x141)] ? c : { 'default': c };
};
const k = {};
k[s(0x119)] = !![], Object[r(0x11e) + r(0x140)](exports, s(0x141), k);
const Campaign_1 = __importDefault(require(r(0x136) + s(0x12d) + 'n')), AppError_1 = __importDefault(require(s(0x13b) + r(0x133) + 'r')), DeleteCampaignService = async ({
        id: f,
        tenantId: g
    }) => {
        const u = s, v = r, h = {};
        h[u(0x137)] = u(0x11b) + u(0x125) + 'D', h[u(0x142)] = function (n, o) {
            return n !== o;
        }, h[v(0x138)] = u(0x13c), h[v(0x129)] = function (n, o) {
            return n !== o;
        }, h[v(0x13d)] = u(0x12b), h[v(0x13a)] = v(0x12a) + v(0x130) + v(0x122) + v(0x120) + v(0x13e), h[u(0x134)] = u(0x121) + u(0x11f) + u(0x11d);
        const i = h, j = {};
        j['id'] = f, j[u(0x11c)] = g;
        const l = {};
        l[v(0x13f)] = j;
        const m = await Campaign_1[v(0x132)][u(0x128)](l);
        if (!m)
            throw new AppError_1[(u(0x132))](i[u(0x137)], 0x2 * 0xbc3 + 0x673 * -0x5 + 0xa4d);
        if (i[u(0x142)](m?.[u(0x123)], i[u(0x138)]) && i[v(0x129)](m?.[v(0x123)], i[u(0x13d)]))
            throw new AppError_1[(v(0x132))](i[v(0x13a)], 0x35 * 0x87 + -0x37 * 0x17 + -0xd3 * 0x1a);
        try {
            await m[u(0x131)]();
        } catch (n) {
            throw new AppError_1[(v(0x132))](i[v(0x134)], 0x1 * 0xb3f + 0x63d * -0x2 + -0x1 * -0x2cf);
        }
    };
exports[r(0x132)] = DeleteCampaignService;