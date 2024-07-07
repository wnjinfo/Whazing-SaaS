'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x71)) / (0x26f5 + 0x1272 + -0x3966) + -parseInt(s(0x7d)) / (0x3cb * 0x1 + 0x16b3 + 0x2a6 * -0xa) + parseInt(t(0x85)) / (-0x11ea + 0x1 * -0x399 + -0x1d * -0xbe) + -parseInt(t(0x67)) / (-0x318 + -0x2 * 0xe04 + 0x1f24 * 0x1) * (-parseInt(t(0x75)) / (0x62b + -0x13d8 + 0x1 * 0xdb2)) + parseInt(s(0x86)) / (0x12e7 + -0x24f5 + 0x1214) * (parseInt(s(0x7b)) / (0x4d6 * -0x5 + -0x14f * -0x17 + -0x5e4 * 0x1)) + -parseInt(s(0x6b)) / (-0x9ef * -0x2 + 0xd50 + -0x2126) * (-parseInt(t(0x7a)) / (0x7cd * 0x2 + -0x2008 + 0x1077)) + -parseInt(s(0x80)) / (0x1a * -0x2e + 0x3cb + 0x2f * 0x5) * (-parseInt(s(0x6d)) / (-0x8fc + -0x781 * 0x1 + 0x1 * 0x1088));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xfa5af + 0x235a7 + 0x1 * 0x16c4c3));
function a() {
    const z = [
        'default',
        'NRJtU',
        '9eqiEOQ',
        '42yVeZEi',
        'GN_CONTACT',
        '1669718UKjzuD',
        'where',
        'campaignId',
        '6120BroIWz',
        'fault',
        'rs/AppErro',
        '__esModule',
        'ERR_CAMPAI',
        '647856jpBsch',
        '13704Oppdxe',
        'ls/Campaig',
        'findOne',
        '__importDe',
        '20TVyGlF',
        'nContacts',
        'tenantId',
        '../../mode',
        '7822552FhHNMB',
        'erty',
        '5401mZtqxg',
        'destroy',
        '../../erro',
        'value',
        '1111998LRhOTo',
        'defineProp',
        'ydNgL',
        'S_NOT_EXIS',
        '1050405wgplrB',
        'TS_OR_NOT_',
        'ACESSIBLE'
    ];
    a = function () {
        return z;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1a77 + 0x21e + 0x18c0);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[u(0x89) + u(0x81)] || function (c) {
    const w = u;
    return c && c[w(0x83)] ? c : { 'default': c };
};
const k = {};
k[v(0x70)] = !![], Object[v(0x72) + v(0x6c)](exports, v(0x83), k);
const CampaignContacts_1 = __importDefault(require(u(0x6a) + v(0x87) + u(0x68))), AppError_1 = __importDefault(require(u(0x6f) + v(0x82) + 'r')), Campaign_1 = __importDefault(require(v(0x6a) + v(0x87) + 'n')), DeleteAllCampaignContactsService = async ({
        campaignId: h,
        tenantId: i
    }) => {
        const x = u, y = u, j = {};
        j[x(0x79)] = x(0x84) + y(0x7c) + x(0x74) + x(0x76) + y(0x77), j[y(0x73)] = x(0x84) + x(0x7c) + 'S';
        const l = j;
        try {
            const m = {};
            m['id'] = h, m[y(0x69)] = i;
            const n = {};
            n[y(0x7e)] = m;
            const o = await Campaign_1[y(0x78)][y(0x88)](n);
            if (o?.['id']) {
                const p = {};
                p[y(0x7f)] = h;
                const q = {};
                q[y(0x7e)] = p, await CampaignContacts_1[y(0x78)][x(0x6e)](q);
            } else
                throw new AppError_1[(x(0x78))](l[y(0x79)], -0x5 * -0x342 + 0x59c + 0x11 * -0x132);
        } catch (r) {
            throw new AppError_1[(y(0x78))](l[y(0x73)], 0x61c + -0x14a3 * 0x1 + 0x101b);
        }
    };
exports[v(0x78)] = DeleteAllCampaignContactsService;