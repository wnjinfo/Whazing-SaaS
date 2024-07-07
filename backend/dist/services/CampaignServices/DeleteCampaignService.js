'use strict';
const r = b, s = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1db0 * -0x1 + 0xbbf + 0x2909 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x66)) / (-0x106 * 0x1 + 0x5c4 + 0x4bd * -0x1) * (parseInt(q(0x77)) / (0x1396 + -0x1273 * -0x2 + -0x387a)) + parseInt(p(0x8c)) / (-0x403 * 0x4 + -0x75d + 0x176c) + parseInt(p(0x68)) / (0xa7 * -0x3 + -0x167 * -0x7 + 0x7d8 * -0x1) * (-parseInt(p(0x7b)) / (0x1cd * -0xa + 0x1351 + -0x6 * 0x37)) + parseInt(q(0x8a)) / (-0x127e + 0x1029 * 0x1 + -0x43 * -0x9) * (-parseInt(q(0x82)) / (0x1 * 0x215f + 0x1fc + -0x2354)) + -parseInt(p(0x6f)) / (0x688 + -0x128d * -0x1 + -0x190d * 0x1) * (parseInt(q(0x89)) / (-0x6 * -0x551 + 0x1259 + -0x3236 * 0x1)) + parseInt(q(0x7d)) / (-0x1 * -0x95 + -0x1b6a + 0x1 * 0x1adf) * (-parseInt(p(0x91)) / (0x2b * -0xc7 + 0x2 * -0xceb + 0x1 * 0x3b4e)) + parseInt(q(0x92)) / (0xeba + 0x7ec + 0x107 * -0x16) * (parseInt(p(0x79)) / (-0x86 * -0x43 + -0x227 * -0x7 + -0x3216));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0xdfc36 + -0x52b27 * -0x1 + -0xc62 * 0x89));
var __importDefault = this && this[r(0x7a) + s(0x70)] || function (c) {
    const t = s;
    return c && c[t(0x76)] ? c : { 'default': c };
};
const k = {};
k[s(0x87)] = !![], Object[r(0x73) + s(0x74)](exports, s(0x76), k);
const Campaign_1 = __importDefault(require(s(0x67) + s(0x86) + 'n')), AppError_1 = __importDefault(require(r(0x7e) + r(0x8f) + 'r')), DeleteCampaignService = async ({
        id: f,
        tenantId: g
    }) => {
        const u = r, v = s, h = {};
        h[u(0x8e)] = v(0x75) + v(0x88) + 'D', h[u(0x90)] = function (n, o) {
            return n !== o;
        }, h[v(0x78)] = u(0x8b), h[v(0x80)] = function (n, o) {
            return n !== o;
        }, h[v(0x81)] = u(0x6a), h[u(0x6d)] = v(0x69) + v(0x71) + u(0x8d) + v(0x85) + u(0x84), h[u(0x93)] = u(0x94) + v(0x7f) + u(0x72);
        const i = h, j = {};
        j['id'] = f, j[u(0x6e)] = g;
        const l = {};
        l[u(0x6c)] = j;
        const m = await Campaign_1[v(0x7c)][u(0x83)](l);
        if (!m)
            throw new AppError_1[(u(0x7c))](i[u(0x8e)], -0x17f * 0x13 + -0x8ef * -0x4 + -0x9 * 0xa3);
        if (i[v(0x90)](m?.[v(0x95)], i[u(0x78)]) && i[v(0x80)](m?.[v(0x95)], i[v(0x81)]))
            throw new AppError_1[(v(0x7c))](i[u(0x6d)], -0x18e * -0x2 + -0x24e3 + 0x15 * 0x1af);
        try {
            await m[u(0x6b)]();
        } catch (n) {
            throw new AppError_1[(v(0x7c))](i[v(0x93)], -0x1 * -0x21e + 0x1e9b * 0x1 + -0x11 * 0x1d5);
        }
    };
exports[r(0x7c)] = DeleteCampaignService;
function a() {
    const w = [
        'AIGN_NOT_E',
        'OYRGl',
        'FqbRQ',
        '7zlKUNo',
        'findOne',
        'ENDING',
        'CANCELED_P',
        'ls/Campaig',
        'value',
        'PAIGN_FOUN',
        '9ddUkbI',
        '7087242yMzbHR',
        'pending',
        '1697871LVMxoD',
        'GN_NOT_IN_',
        'JYHUG',
        'rs/AppErro',
        'dQZxj',
        '3198767ZFePwC',
        '27155244JVeNPm',
        'UuPrI',
        'ERROR_CAMP',
        'status',
        '448GQJSaq',
        '../../mode',
        '2816232xfdIdV',
        'ERR_NO_UPD',
        'canceled',
        'destroy',
        'where',
        'rKTFQ',
        'tenantId',
        '3059624lPCfud',
        'fault',
        'ATE_CAMPAI',
        'XISTS',
        'defineProp',
        'erty',
        'ERR_NO_CAM',
        '__esModule',
        '2458hJaTBK',
        'NnAuW',
        '13aVRMVX',
        '__importDe',
        '5Ubbthu',
        'default',
        '10AMloeM',
        '../../erro'
    ];
    a = function () {
        return w;
    };
    return a();
}