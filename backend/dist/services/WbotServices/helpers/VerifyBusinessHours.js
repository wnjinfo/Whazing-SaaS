'use strict';
const C = b, D = b;
function a() {
    const H = [
        'd\x22\x20=\x20',
        'ntServices',
        '\x20m.\x22update',
        'atabase',
        '40GaBnOG',
        '22232MMuPih',
        '.\x22createdA',
        'defineProp',
        '\x22\x20m,\x20\x22Tick',
        'status',
        'length',
        'query',
        'dAt\x22\x20,\x20m.\x22',
        '5920152pbkTgt',
        'type',
        'fromMe',
        'value',
        '../../Tena',
        'Me\x22\x20=\x20true',
        'hr2',
        'parse',
        'inessHours',
        'businessHo',
        'messageBus',
        'pending',
        'QueryTypes',
        'body',
        '\x20m.\x22fromMe',
        'terval',
        'eatedAt\x22\x20,',
        'msg',
        'xGXXf',
        'tenantId',
        'ageService',
        'fault',
        'ets\x22\x20t\x20\x0a\x20\x20',
        'default',
        'ticketId\x22\x0a',
        '185SXhZcG',
        '../../../d',
        'fromUnixTi',
        '2888745aREBJb',
        '/ShowBusin',
        'essHoursAn',
        '__esModule',
        '1923723djthnD',
        '\x20t.id\x20=\x20',
        '\x22\x20=\x20true\x20\x0a',
        '\x20\x20\x20\x20\x20\x20and\x20',
        'aGHhO',
        'closed',
        'ect\x20max(m2',
        'messageTim',
        'XNuqr',
        '2.\x22ticketI',
        '\x20and\x20\x22from',
        'rvice',
        'hr1',
        'erty',
        'ssageSyste',
        'mService',
        '2839361IDRqLk',
        'ticket',
        '10002rBjYNX',
        't\x22)\x20from\x20\x22',
        '../../Mess',
        '\x0a\x20\x20\x20\x20\x20\x20and',
        'bot',
        'dIneb',
        '\x20\x20\x20\x20where\x20',
        'sendType',
        'ody,\x20m.\x22cr',
        'find',
        'wJccP',
        'select\x20m.b',
        'ticketId\x22\x20',
        'urs',
        'm2\x20where\x20m',
        'hr4',
        'OAXTy',
        'read',
        '\x20\x20\x20\x20\x20\x20from',
        'zthdE',
        't.id\x20=\x20m.\x22',
        'HH:mm',
        'VyXfR',
        'At\x22\x20=\x20(sel',
        'isGroup',
        'estamp',
        'IdqKz',
        'SELECT',
        'getDay',
        '__importDe',
        'm.\x22created',
        '3064136AvNKLD',
        'Messages\x22\x20',
        'day',
        'tnSyW',
        'dMessageSe',
        'date-fns',
        'sequelize',
        'hr3',
        'isWithinIn',
        's/CreateMe',
        '\x20\x22Messages'
    ];
    a = function () {
        return H;
    };
    return a();
}
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0x1cc)) / (-0x1d2d + -0x175 + -0xb * -0x2c9) * (parseInt(B(0x1e5)) / (-0x71 * -0x11 + 0x2 * -0x1334 + 0x1ee9)) + parseInt(B(0x1cf)) / (0xb * 0x2b6 + -0x25c3 * 0x1 + 0x7f4) + -parseInt(B(0x214)) / (-0x11 * -0x159 + 0x662 + 0x5 * -0x5db) * (-parseInt(B(0x213)) / (0xa6a + 0xb * -0x293 + 0x11ec)) + parseInt(B(0x21c)) / (-0x1d46 + -0x1 * 0x18b3 + 0x35ff) + -parseInt(B(0x1e3)) / (0x2322 + 0x1 * 0x1486 + -0x37a1) + parseInt(A(0x204)) / (-0x191e + 0x3be * 0x4 + 0x1 * 0xa2e) + -parseInt(B(0x1d3)) / (0x268f + -0xda + -0x12d6 * 0x2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x39bf * -0x69 + -0x7b499 + -0x346a9));
var __importDefault = this && this[C(0x202) + C(0x1c8)] || function (c) {
    const E = D;
    return c && c[E(0x1d2)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4a1 + 0x1 * -0xa39 + 0x1 * 0x1096);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[D(0x21f)] = !![], Object[C(0x216) + D(0x1e0)](exports, C(0x1d2), k);
const date_fns_1 = require(D(0x209)), ShowBusinessHoursAndMessageService_1 = __importDefault(require(D(0x220) + D(0x210) + D(0x1d0) + D(0x1d1) + C(0x208) + C(0x1de))), CreateMessageSystemService_1 = __importDefault(require(C(0x1e7) + D(0x1c7) + C(0x20d) + C(0x1e1) + D(0x1e2))), database_1 = __importDefault(require(C(0x1cd) + D(0x212))), sequelize_1 = require(D(0x20a)), verifyBusinessHours = async (h, i) => {
        const F = D, G = D, j = {};
        j[F(0x1d7)] = function (n, o) {
            return n !== o;
        }, j[G(0x207)] = F(0x1d8), j[G(0x1ff)] = function (n, o) {
            return n === o;
        }, j[F(0x1ef)] = F(0x1fa), j[G(0x1f8)] = function (n, o) {
            return n && o;
        }, j[F(0x1ea)] = function (n, o) {
            return n > o;
        }, j[F(0x1c5)] = function (n, o) {
            return n == o;
        }, j[F(0x1db)] = F(0x1c0), j[G(0x1fb)] = G(0x1e9), j[F(0x1f5)] = G(0x1be);
        const l = j;
        let m = !![];
        if (l[F(0x1d7)](i[F(0x218)], l[G(0x207)]) && !h[F(0x21e)] && !i[G(0x1fd)]) {
            const n = {};
            n[G(0x1c6)] = i[F(0x1c6)];
            const o = await (0x1e * -0xaf + 0xe6b * -0x1 + 0x22ed, ShowBusinessHoursAndMessageService_1[G(0x1ca)])(n), p = (-0x5 * 0x4ef + 0x1 * 0x2096 + -0x7eb, date_fns_1[G(0x1ce) + 'me'])(h[F(0x1da) + G(0x1fe)]), q = o[F(0x1bc) + F(0x1f2)][F(0x1ee)](t => t[F(0x206)] === p[F(0x201)]());
            if (!q)
                return m;
            if (l[F(0x1ff)](q[G(0x21d)], 'O'))
                return m;
            const r = (-0x1000 + 0x1951 + -0x951, date_fns_1[G(0x20c) + G(0x1c2)])(p, {
                    'start': (-0x1 * 0x2437 + 0x179a + 0xc9d, date_fns_1[G(0x223)])(q[F(0x1df)], l[G(0x1ef)], new Date()),
                    'end': (-0x833 * 0x1 + -0x1 * 0x42d + 0x8 * 0x18c, date_fns_1[G(0x223)])(q[F(0x222)], l[F(0x1ef)], new Date())
                }), s = (-0xc09 + 0xd15 * -0x1 + 0x191e, date_fns_1[G(0x20c) + F(0x1c2)])(p, {
                    'start': (-0xe9d + -0x431 + 0x12ce, date_fns_1[G(0x223)])(q[G(0x20b)], l[F(0x1ef)], new Date()),
                    'end': (0x1d84 + 0x8a7 * 0x1 + -0x3 * 0xcb9, date_fns_1[F(0x223)])(q[F(0x1f4)], l[F(0x1ef)], new Date())
                });
            if (l[G(0x1ff)](q[G(0x21d)], 'C') || l[G(0x1f8)](!r, !s)) {
                let t = G(0x1f0) + G(0x1ed) + F(0x1c3) + F(0x211) + F(0x21b) + G(0x1cb) + G(0x1f7) + F(0x20e) + G(0x217) + F(0x1c9) + F(0x1eb) + G(0x1f9) + G(0x1f1) + G(0x1e8) + F(0x1d4) + i['id'] + (F(0x1e8) + G(0x1c1) + F(0x1d5) + G(0x1d6) + G(0x203) + G(0x1fc) + F(0x1d9) + G(0x215) + G(0x1e6) + G(0x205) + F(0x1f3) + F(0x1dc) + F(0x20f)) + i['id'] + (G(0x1dd) + F(0x221) + '\x20)');
                const u = {};
                u[F(0x21d)] = sequelize_1[G(0x1bf)][F(0x200)];
                const v = await database_1[G(0x1ca)][G(0x21a)](t, u), w = '' + o[G(0x1bd) + F(0x224)];
                if (l[F(0x1ea)](v[G(0x219)], -0x303 * 0x6 + -0x1b14 + 0x1693 * 0x2) && l[F(0x1c5)](v[-0x5d * -0x7 + -0xa8b + 0x800 * 0x1][l[G(0x1db)]], w))
                    return ![];
                m = ![];
                const x = {};
                x[F(0x1c0)] = o[G(0x1bd) + F(0x224)], x[G(0x21e)] = !![], x[G(0x1f6)] = !![], x[G(0x1ec)] = l[F(0x1fb)], x[G(0x1c6)] = i[F(0x1c6)];
                const y = x, z = {};
                z[G(0x1c4)] = y, z[G(0x1c6)] = i[F(0x1c6)], z[F(0x1e4)] = i, z[F(0x1ec)] = y[F(0x1ec)], z[G(0x218)] = l[G(0x1f5)], await (-0x1b05 + 0x53 * -0x1b + 0x23c6, CreateMessageSystemService_1[F(0x1ca)])(z);
            }
        }
        return m;
    };
exports[D(0x1ca)] = verifyBusinessHours;