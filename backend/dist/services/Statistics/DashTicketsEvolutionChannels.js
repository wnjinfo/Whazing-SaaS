'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x11d)) / (0x13 * -0x15d + -0x1313 + -0x8ff * -0x5) * (parseInt(t(0x17a)) / (0x7c0 + -0x7 * 0x245 + 0x825)) + -parseInt(s(0x111)) / (0x192d + -0x15ed + -0x1 * 0x33d) * (-parseInt(t(0x144)) / (-0x8cb + -0x6f0 + -0x1d * -0x8b)) + -parseInt(s(0x119)) / (-0xfd * -0x17 + 0x936 + 0xc * -0x2a9) * (parseInt(t(0x140)) / (-0x2502 + 0x1 * 0xd9a + 0x176e)) + -parseInt(t(0x173)) / (0xaa0 + 0x75e + 0x1ff * -0x9) * (-parseInt(t(0x124)) / (-0x130 * 0x3 + 0x57 * -0x56 + 0x20d2 * 0x1)) + parseInt(s(0x114)) / (-0x17fb + -0x1 * 0x2249 + 0x4b * 0xc7) * (parseInt(s(0x16f)) / (-0x1334 * -0x1 + -0x490 + 0xe9a * -0x1)) + parseInt(s(0x138)) / (0x1927 + 0x22e2 + -0x3bfe) * (parseInt(t(0x133)) / (0xd * 0x6b + 0x28 * -0x7 + -0x44b)) + parseInt(t(0x15e)) / (-0xfd5 + -0x1a4c + 0x2a2e) * (-parseInt(s(0x160)) / (0x15d4 + -0x1d * 0xec + -0x2 * -0x27b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x101b23 + 0xb * -0x1503f + -0xf * -0x8861));
var __importDefault = this && this[u(0x15c) + u(0x181)] || function (c) {
    const w = u;
    return c && c[w(0x167)] ? c : { 'default': c };
};
const k = {};
k[u(0x143)] = !![], Object[v(0x125) + v(0x172)](exports, v(0x167), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x52 * -0x67 + -0x1c68 + 0x3e76);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(v(0x170)), database_1 = __importDefault(require(u(0x151) + u(0x14c))), query = v(0x128) + v(0x16b) + u(0x12b) + v(0x15a) + u(0x13b) + v(0x182) + v(0x16a) + u(0x16e) + v(0x134) + u(0x116) + u(0x168) + u(0x156) + v(0x161) + u(0x165) + v(0x164) + v(0x127) + v(0x171) + v(0x162) + v(0x148) + v(0x183) + v(0x147) + u(0x152) + u(0x145) + u(0x159) + u(0x11c) + u(0x12e) + v(0x122) + u(0x11e) + u(0x142) + v(0x12d) + v(0x126) + u(0x11a) + u(0x16d) + v(0x11b) + u(0x139) + v(0x153) + v(0x12a) + u(0x13e) + v(0x136) + v(0x13d) + v(0x17c) + v(0x155) + u(0x179) + u(0x121) + v(0x14d) + u(0x14a) + u(0x11f) + u(0x14f) + v(0x115) + v(0x17e) + u(0x127) + v(0x171) + u(0x177) + v(0x13c) + v(0x130) + v(0x149) + v(0x137) + v(0x110) + v(0x175) + v(0x15f) + v(0x129) + v(0x14e) + v(0x157) + v(0x118), queryAdmin = v(0x128) + v(0x16b) + u(0x12b) + v(0x15a) + u(0x13b) + u(0x182) + v(0x16a) + u(0x16e) + v(0x134) + v(0x116) + v(0x168) + v(0x156) + v(0x161) + v(0x165) + v(0x164) + u(0x127) + v(0x171) + u(0x162) + u(0x148) + v(0x183) + u(0x147) + u(0x152) + u(0x145) + u(0x159) + u(0x11c) + v(0x12e) + v(0x122) + u(0x11e) + u(0x142) + u(0x12d) + v(0x126) + v(0x11a) + v(0x16d) + u(0x11b) + v(0x139) + u(0x153) + u(0x12a) + v(0x13e) + v(0x136) + v(0x13a) + v(0x178) + u(0x141) + u(0x174) + v(0x112) + u(0x158) + u(0x14b) + u(0x17f) + v(0x147) + v(0x152) + v(0x145) + u(0x146) + u(0x176) + v(0x169) + v(0x123) + u(0x15b) + u(0x131) + v(0x166) + u(0x132) + u(0x150) + u(0x135) + v(0x16c), DashTicketsEvolutionChannels = async ({
        startDate: f,
        endDate: g,
        tenantId: h,
        userId: i,
        userProfile: j
    }) => {
        const x = v, y = v, l = {};
        l[x(0x120)] = function (q, r) {
            return q == r;
        }, l[x(0x15d)] = x(0x13f);
        const m = l, n = {};
        n[y(0x154)] = h, n[x(0x17b)] = f, n[y(0x163)] = g, n[y(0x117)] = i;
        const o = {};
        o[y(0x17d) + 'ts'] = n, o[y(0x12f)] = sequelize_1[x(0x113)][y(0x12c)];
        const p = await database_1[y(0x184)][x(0x180)](m[y(0x120)](j, m[y(0x15d)]) ? queryAdmin : query, o);
        return p;
    };
function a() {
    const z = [
        '.\x22createdA',
        '14GaUQxx',
        'ntual\x20\x20fro',
        'tedAt\x22)\x20dt',
        'endDate',
        'ct\x0a\x20\x20date_',
        'm\x20(\x0a\x20\x20sele',
        ',\x20t.\x22creat',
        '__esModule',
        ')\x20over\x20())',
        'and\x20:endDa',
        'a\x20,\x20label,',
        'dt_ref,\x20to',
        'r\x20by\x201\x0a',
        '\x22LogTicket',
        '\x20qtd,\x20ROUN',
        '1461420cIFxYu',
        'sequelize',
        '\x27,\x20t.\x22crea',
        'erty',
        '96411lgSzrZ',
        'en\x27\x20OR\x20lt.',
        'c(\x27day\x27,\x20t',
        'startDate\x20',
        'tedAt\x22)\x20be',
        '\x20(lt.\x22type',
        'd\x0a\x20\x20and\x20(l',
        '8fCYciw',
        'startDate',
        'lt.\x22userId',
        'replacemen',
        '\x20and\x20date_',
        ')\x0a\x20\x20and\x20da',
        'query',
        'fault',
        '_referenci',
        'to_char(da',
        'default',
        '\x20date_trun',
        '284463pLVSpi',
        '\x22type\x22\x20LIK',
        'QueryTypes',
        '18YxAkwx',
        'ansfer\x27)\x0a\x20',
        'td/sum(qtd',
        'userId',
        'y\x201\x0a',
        '190CXowCx',
        'NNER\x20JOIN\x20',
        's\x22\x20lt\x20ON\x20l',
        'YYY\x27)\x20,\x0a\x20\x20',
        '83883uorLsd',
        '\x20\x20count(1)',
        'pe\x22\x20LIKE\x20\x27',
        'cUena',
        't.\x22type\x22\x20L',
        'as\x20label,\x0a',
        'te\x0a\x20\x20group',
        '8VpVhjJ',
        'defineProp',
        'ets\x22\x20t\x0a\x20\x20I',
        'trunc(\x27day',
        '\x0a\x20\x20select\x20',
        't\x22),\x20t.cha',
        '\x22\x0a\x20\x20where\x20',
        '_char(dt_r',
        'SELECT',
        'from\x20\x22Tick',
        't.channel\x20',
        'type',
        'rtDate\x20and',
        'runc(\x27day\x27',
        'edAt\x22),\x20t.',
        '10188564epOaDi',
        'D(100.0*(q',
        ')\x20a\x0a\x20\x20orde',
        'd\x22\x20=\x20:tena',
        '\x20\x20group\x20by',
        '11bzBlDI',
        't.\x22ticketI',
        'ntId\x0a\x20\x20and',
        '/YYYY\x27)\x20dt',
        'tween\x20:sta',
        'ntId\x20\x20AND\x20',
        't.\x22tenantI',
        'admin',
        '128874YNZBeh',
        '\x22\x20LIKE\x20\x27op',
        '\x20as\x20qtd\x0a\x20\x20',
        'value',
        '32HsmhFp',
        'reatedAt\x22)',
        '\x20between\x20:',
        'te_trunc(\x27',
        '_ref,\x0a\x20\x20--',
        '\x20:endDate\x0a',
        '\x20OR\x20lt.\x22ty',
        'dTransfer\x27',
        'base',
        'IKE\x20\x27open\x27',
        'nnel\x0a\x20\x20)\x20a',
        'receivedTr',
        'channel\x0a\x20\x20',
        '../../data',
        'day\x27,\x20t.\x22c',
        'd\x22\x20=\x20t.\x22id',
        'tenantId',
        '\x22\x20=\x20:userI',
        ',\x202)\x20perte',
        '\x0a\x20\x20order\x20b',
        'E\x20\x27receive',
        ',\x20\x27DD/MM/Y',
        'ef,\x20\x27DD/MM',
        '\x20by\x20date_t',
        '__importDe',
        'vEvDg',
        '1684657PgpALl'
    ];
    a = function () {
        return z;
    };
    return a();
}
exports[v(0x184)] = DashTicketsEvolutionChannels;