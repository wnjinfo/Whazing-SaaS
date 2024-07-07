'use strict';
const v = b, w = b;
function a() {
    const A = [
        'ls/Campaig',
        'GN_CONTACT',
        '__importDe',
        '35240cUjtMA',
        'rs/AppErro',
        'ERR_CAMPAI',
        'campaignId',
        'model',
        'erty',
        '../../mode',
        '1939830LxTwkq',
        '4530162fpCLsX',
        '../../erro',
        '2529ZMTllQ',
        'default',
        'include',
        '2148170qtAejv',
        'PAIGN_CONT',
        'tenantId',
        '1272548NmVCaq',
        'ERR_NO_CAM',
        'where',
        'fault',
        'nContacts',
        'findOne',
        'destroy',
        'required',
        '3590461yrTrRi',
        'S_NOT_EXIS',
        'value',
        '1oImIHk',
        'IqCpc',
        '18UqCAZg',
        '6305416NYXmDG',
        'defineProp',
        'OUND',
        'ACTS_NOT_F',
        'contactId',
        'zTmww',
        '__esModule'
    ];
    a = function () {
        return A;
    };
    return a();
}
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x1f0)) / (-0x2554 + -0x84 * -0x36 + -0x1 * -0x97d) * (-parseInt(u(0x204)) / (0x15cf + -0x23df + 0xe12)) + parseInt(u(0x205)) / (-0x599 * 0x2 + 0x85a + -0x2b * -0x11) + -parseInt(t(0x1e5)) / (-0x1 * 0x18b + 0x58c + -0x3fd) + parseInt(u(0x1e2)) / (-0x253f + 0x8b * 0x3d + 0x425) * (parseInt(u(0x1f2)) / (0xc2 * -0x20 + -0x256f + -0x3db5 * -0x1)) + -parseInt(t(0x1ed)) / (0x187c + 0x1869 + 0x116 * -0x2d) + parseInt(u(0x1f3)) / (-0x3b * 0x26 + -0x2006 * 0x1 + 0x28d0) + parseInt(t(0x1df)) / (-0x5e3 + -0x1fd6 + 0x25c2) * (-parseInt(u(0x1fd)) / (0x13e9 + 0x1b23 + -0x2f02));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xd0d9f * -0x1 + 0x152a3e + -0x1 * 0x1612d3));
var __importDefault = this && this[v(0x1fc) + v(0x1e8)] || function (c) {
    const x = v;
    return c && c[x(0x1f9)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xab8 + 0xb * 0x1d3 + 0xb * -0x2a1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[w(0x1ef)] = !![], Object[w(0x1f4) + w(0x202)](exports, v(0x1f9), k);
const CampaignContacts_1 = __importDefault(require(v(0x203) + v(0x1fa) + v(0x1e9))), AppError_1 = __importDefault(require(v(0x1de) + w(0x1fe) + 'r')), Campaign_1 = __importDefault(require(v(0x203) + v(0x1fa) + 'n')), DeleteCampaignContactsService = async ({
        campaignId: h,
        contactId: i,
        tenantId: j
    }) => {
        const y = v, z = w, l = {};
        l[y(0x1f8)] = y(0x1e6) + y(0x1e3) + y(0x1f6) + y(0x1f5), l[z(0x1f1)] = y(0x1ff) + y(0x1fb) + z(0x1ee) + 'TS';
        const m = l, n = {};
        n[y(0x200)] = h, n[y(0x1f7)] = i;
        const o = {};
        o['id'] = h, o[z(0x1e4)] = j;
        const p = {};
        p[z(0x201)] = Campaign_1[y(0x1e0)], p[y(0x1ec)] = !![], p[z(0x1e7)] = o;
        const q = {};
        q[z(0x1e7)] = n, q[z(0x1e1)] = [p];
        const r = await CampaignContacts_1[z(0x1e0)][y(0x1ea)](q);
        if (!r)
            throw new AppError_1[(z(0x1e0))](m[z(0x1f8)], 0x1fe3 + -0x4 * -0x532 + -0x3317);
        try {
            await r[z(0x1eb)]();
        } catch (s) {
            throw new AppError_1[(z(0x1e0))](m[y(0x1f1)], 0x4b6 + -0xcf7 * -0x3 + -0x2a07);
        }
    };
exports[w(0x1e0)] = DeleteCampaignContactsService;