'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x115)) / (-0x5b6 + -0x1 * 0xdef + 0x13a6) + -parseInt(t(0x124)) / (0x1132 * 0x2 + 0x1a8c + -0x3cee * 0x1) * (parseInt(t(0x118)) / (-0x1bc3 + 0x4bd * 0x7 + -0x565 * 0x1)) + -parseInt(t(0x128)) / (0x1453 + -0x1e07 + 0x9b8) * (-parseInt(u(0x105)) / (0x2206 * -0x1 + 0x202 + 0x2009)) + parseInt(u(0x11e)) / (0x2 * 0x1258 + 0x188 + -0x2 * 0x1319) * (parseInt(t(0x10a)) / (-0xed7 + 0x1b0 + -0x1 * -0xd2e)) + parseInt(t(0x10c)) / (-0x3 * -0x6b + 0x1 * 0x1655 + -0x4b6 * 0x5) + -parseInt(u(0x123)) / (0x376 * 0x1 + -0x20d6 + -0x1 * -0x1d69) * (parseInt(u(0x11a)) / (0x1bb9 * 0x1 + -0x3be * 0x8 + 0x1 * 0x241)) + -parseInt(t(0x125)) / (-0x1ff4 + 0x13a * 0x12 + 0x9eb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xad * 0x427 + -0x44f2 * 0x7 + 0x1643e));
var __importDefault = this && this[v(0x122) + w(0x117)] || function (c) {
    const x = v;
    return c && c[x(0x11b)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xf58 + -0x1ebc + 0x1067);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[w(0x10b)] = !![], Object[v(0x126) + v(0x12b)](exports, v(0x11b), k);
const CampaignContacts_1 = __importDefault(require(v(0x109) + v(0x120) + w(0x129))), AppError_1 = __importDefault(require(w(0x104) + v(0x11f) + 'r')), Campaign_1 = __importDefault(require(v(0x109) + w(0x120) + 'n')), DeleteCampaignContactsService = async ({
        campaignId: h,
        contactId: i,
        tenantId: j
    }) => {
        const y = w, z = w, l = {};
        l[y(0x10f)] = z(0x103) + z(0x11c) + z(0x112) + y(0x108), l[z(0x10e)] = z(0x114) + z(0x111) + z(0x107) + 'TS';
        const m = l, n = {};
        n[y(0x116)] = h, n[z(0x12a)] = i;
        const o = {};
        o['id'] = h, o[z(0x106)] = j;
        const p = {};
        p[y(0x113)] = Campaign_1[y(0x10d)], p[y(0x110)] = !![], p[z(0x119)] = o;
        const q = {};
        q[z(0x119)] = n, q[z(0x127)] = [p];
        const r = await CampaignContacts_1[z(0x10d)][z(0x11d)](q);
        if (!r)
            throw new AppError_1[(z(0x10d))](m[z(0x10f)], 0x25a5 + -0x5f * -0x5f + -0x4752);
        try {
            await r[y(0x121)]();
        } catch (s) {
            throw new AppError_1[(z(0x10d))](m[z(0x10e)], -0x126c + 0x1d66 + -0x966);
        }
    };
function a() {
    const A = [
        'ERR_NO_CAM',
        '../../erro',
        '15vKJtTB',
        'tenantId',
        'S_NOT_EXIS',
        'OUND',
        '../../mode',
        '7CjEVwO',
        'value',
        '83312SIqEYY',
        'default',
        'wluWS',
        'wewYJ',
        'required',
        'GN_CONTACT',
        'ACTS_NOT_F',
        'model',
        'ERR_CAMPAI',
        '149190MJYBnZ',
        'campaignId',
        'fault',
        '16809piHqTt',
        'where',
        '340uTRiNj',
        '__esModule',
        'PAIGN_CONT',
        'findOne',
        '1436268uPqESE',
        'rs/AppErro',
        'ls/Campaig',
        'destroy',
        '__importDe',
        '36684SxAcyx',
        '48svJXZX',
        '1726252wHpgkm',
        'defineProp',
        'include',
        '243404uukijZ',
        'nContacts',
        'contactId',
        'erty'
    ];
    a = function () {
        return A;
    };
    return a();
}
exports[v(0x10d)] = DeleteCampaignContactsService;