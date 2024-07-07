'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x174)) / (0x6ca + 0x319 * -0x3 + -0x2 * -0x141) + parseInt(u(0x190)) / (0x1 * 0x14c1 + -0xe1b * 0x1 + 0x5 * -0x154) + parseInt(u(0x182)) / (-0x2 * -0x30d + 0x74e + -0x477 * 0x3) + parseInt(t(0x17d)) / (0x1 * -0x145f + 0x194 * -0x4 + 0x1ab3) * (parseInt(t(0x18d)) / (0x258e + 0x210c + -0x4695)) + -parseInt(u(0x188)) / (-0x2367 + -0x1f * 0xb + -0x2 * -0x1261) * (parseInt(t(0x173)) / (0x2487 + 0x30 + 0x496 * -0x8)) + parseInt(t(0x17c)) / (0x146 + -0x1025 + 0xee7) + -parseInt(u(0x176)) / (-0x23c3 + -0x3d0 + 0x1fb * 0x14) * (parseInt(u(0x175)) / (0xe60 + -0x22b * -0xb + -0x262f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x73d48 + -0x25757 + -0x6bd7f * -0x3));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xfc6 + 0xd9a + 0x31b * -0x9);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[v(0x17f) + v(0x170)] || function (c) {
    const x = w;
    return c && c[x(0x179)] ? c : { 'default': c };
};
const k = {};
k[w(0x187)] = !![], Object[v(0x192) + w(0x177)](exports, v(0x179), k);
function a() {
    const A = [
        'nContacts',
        'required',
        'include',
        'GN_CONTACT',
        'FbMHj',
        'fault',
        'tenantId',
        'contactId',
        '1214234OJHhux',
        '1056353AdOsIJ',
        '10XfEhDr',
        '6474969sMLMsi',
        'erty',
        '../../erro',
        '__esModule',
        'where',
        'OUND',
        '4459752rtyeVm',
        '132212WNCRjY',
        'campaignId',
        '__importDe',
        'aRsAZ',
        'ls/Campaig',
        '199398GZosRY',
        '../../mode',
        'rs/AppErro',
        'destroy',
        'S_NOT_EXIS',
        'value',
        '6wrMkAI',
        'model',
        'ACTS_NOT_F',
        'default',
        'ERR_CAMPAI',
        '205EveZGF',
        'findOne',
        'PAIGN_CONT',
        '1334916dRPMAf',
        'ERR_NO_CAM',
        'defineProp'
    ];
    a = function () {
        return A;
    };
    return a();
}
const CampaignContacts_1 = __importDefault(require(v(0x183) + w(0x181) + v(0x193))), AppError_1 = __importDefault(require(v(0x178) + w(0x184) + 'r')), Campaign_1 = __importDefault(require(w(0x183) + v(0x181) + 'n')), DeleteCampaignContactsService = async ({
        campaignId: h,
        contactId: i,
        tenantId: j
    }) => {
        const y = w, z = v, l = {};
        l[y(0x16f)] = y(0x191) + y(0x18f) + y(0x18a) + y(0x17b), l[y(0x180)] = z(0x18c) + y(0x16e) + z(0x186) + 'TS';
        const m = l, n = {};
        n[y(0x17e)] = h, n[z(0x172)] = i;
        const o = {};
        o['id'] = h, o[z(0x171)] = j;
        const p = {};
        p[y(0x189)] = Campaign_1[z(0x18b)], p[y(0x194)] = !![], p[y(0x17a)] = o;
        const q = {};
        q[z(0x17a)] = n, q[y(0x16d)] = [p];
        const r = await CampaignContacts_1[z(0x18b)][y(0x18e)](q);
        if (!r)
            throw new AppError_1[(z(0x18b))](m[z(0x16f)], -0x2 * -0x432 + -0x10a4 + -0x9d4 * -0x1);
        try {
            await r[y(0x185)]();
        } catch (s) {
            throw new AppError_1[(y(0x18b))](m[y(0x180)], 0x1 * -0x14ea + 0x261f * 0x1 + 0x1 * -0xfa1);
        }
    };
exports[v(0x18b)] = DeleteCampaignContactsService;