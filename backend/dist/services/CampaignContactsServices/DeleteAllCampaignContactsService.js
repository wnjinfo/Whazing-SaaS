'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(s(0x146)) / (0xf09 * -0x2 + 0x10a * 0x4 + -0x5 * -0x52f) * (-parseInt(s(0x14c)) / (-0x31b + -0x104b + 0x1368)) + parseInt(s(0x154)) / (0x1b83 + 0x43a * 0x7 + -0x3916) + parseInt(s(0x161)) / (-0x6 * 0x48 + -0x147 + 0x2fb) * (-parseInt(s(0x14d)) / (0x2 * 0x751 + -0x164c + 0x7af * 0x1)) + parseInt(s(0x149)) / (0x20aa + -0x738 * 0x3 + -0x4c * 0x25) + parseInt(s(0x147)) / (-0x30 * -0x6a + 0x469 * 0x7 + -0x657 * 0x8) * (-parseInt(s(0x15a)) / (0xeab * 0x1 + -0x3 * 0x7b5 + -0x21f * -0x4)) + parseInt(s(0x159)) / (0x49 * 0x1 + 0x4 * -0x78e + -0xe * -0x224) + parseInt(t(0x145)) / (0x606 + 0xa * -0x257 + 0x116a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1c9 * 0x58f + -0x1b * 0x4b9d + 0x128 * 0x55c));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1e9 + 0x2e3 + 0x49);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[u(0x14e) + v(0x156)] || function (c) {
    const w = v;
    return c && c[w(0x155)] ? c : { 'default': c };
};
const k = {};
k[u(0x15e)] = !![], Object[v(0x148) + v(0x150)](exports, v(0x155), k);
const CampaignContacts_1 = __importDefault(require(v(0x15d) + v(0x160) + u(0x152))), AppError_1 = __importDefault(require(v(0x15c) + u(0x15f) + 'r')), Campaign_1 = __importDefault(require(u(0x15d) + v(0x160) + 'n')), DeleteAllCampaignContactsService = async ({
        campaignId: h,
        tenantId: i
    }) => {
        const x = u, y = u, j = {};
        j[x(0x151)] = x(0x144) + x(0x153) + x(0x143) + y(0x163) + y(0x15b), j[x(0x14a)] = y(0x144) + y(0x153) + 'S';
        const l = j;
        try {
            const m = {};
            m['id'] = h, m[x(0x14f)] = i;
            const n = {};
            n[y(0x162)] = m;
            const o = await Campaign_1[y(0x158)][y(0x14b)](n);
            if (o?.['id']) {
                const p = {};
                p[x(0x157)] = h;
                const q = {};
                q[y(0x162)] = p, await CampaignContacts_1[x(0x158)][x(0x164)](q);
            } else
                throw new AppError_1[(y(0x158))](l[x(0x151)], 0x2f5 * -0x1 + -0x22eb * 0x1 + 0x2774);
        } catch (r) {
            throw new AppError_1[(x(0x158))](l[x(0x14a)], -0x1ea7 + 0x153a + -0x1 * -0xb01);
        }
    };
exports[v(0x158)] = DeleteAllCampaignContactsService;
function a() {
    const z = [
        '54SvxMMg',
        '2080MfwjrW',
        '__importDe',
        'tenantId',
        'erty',
        'gLgdI',
        'nContacts',
        'GN_CONTACT',
        '2872623AGMiiK',
        '__esModule',
        'fault',
        'campaignId',
        'default',
        '262314nKSLjR',
        '8npVDhR',
        'ACESSIBLE',
        '../../erro',
        '../../mode',
        'value',
        'rs/AppErro',
        'ls/Campaig',
        '1936FwzJgT',
        'where',
        'TS_OR_NOT_',
        'destroy',
        'S_NOT_EXIS',
        'ERR_CAMPAI',
        '732490UtsYEk',
        '32921aTaGUU',
        '3068485LuLqqZ',
        'defineProp',
        '6014484xDCTVD',
        'bVcyJ',
        'findOne'
    ];
    a = function () {
        return z;
    };
    return a();
}