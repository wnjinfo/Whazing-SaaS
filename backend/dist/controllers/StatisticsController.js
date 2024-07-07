'use strict';
const v = b, w = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x58c + 0x1 * 0x2636 + -0xd6 * 0x26);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x10e)) / (0x1705 + 0xd2f + -0x2433) * (parseInt(t(0xeb)) / (-0x43 * 0x61 + 0xb * -0x32b + 0x57a * 0xb)) + parseInt(t(0xea)) / (-0x1e59 * -0x1 + 0x169f + 0x11a7 * -0x3) + -parseInt(t(0x106)) / (0xb3 * 0xa + 0x30b * 0x5 + -0xf7 * 0x17) * (-parseInt(u(0xfc)) / (0x15d * 0x4 + 0x4 * 0x169 + -0x69 * 0x1b)) + parseInt(u(0xf8)) / (-0xb7 * 0x1 + 0x12cd + -0x1210) * (-parseInt(t(0x10a)) / (0x7ef + -0x8 * -0x499 + 0xb0 * -0x41)) + parseInt(t(0x107)) / (-0x1005 * -0x2 + 0x2 * 0x19f + -0x2340) + -parseInt(t(0xf0)) / (-0x883 + 0xb29 * 0x3 + 0x1eb * -0xd) + -parseInt(u(0xf1)) / (-0x1bd * 0x5 + -0x649 * -0x1 + 0x272);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x461e6 + -0x46ea5 + -0x3 * -0xfc17));
var __importDefault = this && this[v(0xfb) + v(0x111)] || function (c) {
    const x = w;
    return c && c[x(0x104)] ? c : { 'default': c };
};
const k = {};
k[w(0xfd)] = !![], Object[v(0x112) + w(0x103)](exports, w(0x104), k), exports[w(0x100) + w(0x101)] = exports[v(0xec) + v(0xe8)] = void (0x638 + -0x1c24 + -0xaf6 * -0x2);
const TicketsQueuesService_1 = __importDefault(require(v(0xf7) + w(0x10d) + v(0xf2) + w(0xff) + v(0x110))), ContactsReportService_1 = __importDefault(require(v(0xf7) + v(0x10d) + w(0x109) + w(0xe7) + v(0xf3))), DashTicketsQueues = async (d, e) => {
        const y = v, z = w, f = {};
        f[y(0x105)] = function (r, s) {
            return r === s;
        }, f[y(0x10c)] = y(0xfe);
        const g = f, {
                tenantId: h,
                profile: i,
                id: j
            } = d[y(0xf6)], {
                dateStart: l,
                dateEnd: m,
                status: n,
                queuesIds: o,
                showAll: p
            } = d[y(0xef)], q = await (0x43a + 0x1c66 + -0x20a0, TicketsQueuesService_1[z(0x10b)])({
                'showAll': g[z(0x105)](i, g[z(0x10c)]) ? p : ![],
                'dateStart': l,
                'dateEnd': m,
                'status': n,
                'queuesIds': o,
                'userId': j,
                'tenantId': h
            });
        return e[z(0xe9)](-0x94 * 0x1f + -0xf8b * 0x2 + 0x31ca)[y(0xf9)](q);
    };
exports[v(0xec) + v(0xe8)] = DashTicketsQueues;
function a() {
    const C = [
        'searchPara',
        '__importDe',
        '5DpOSJA',
        'value',
        'admin',
        'QueuesServ',
        'ContactsRe',
        'port',
        'userId',
        'erty',
        '__esModule',
        'wamsY',
        '910348xldLjY',
        '579312zqmBMc',
        'startDate',
        'cs/Contact',
        '2198371MgUFHM',
        'default',
        'rhdDj',
        's/Statisti',
        '368285hmWEkx',
        'profile',
        'ice',
        'fault',
        'defineProp',
        'ddds',
        'sReportSer',
        'sQueues',
        'status',
        '834159Vvlhex',
        '2SKakFm',
        'DashTicket',
        'tags',
        'wallets',
        'query',
        '873000euHQyL',
        '3449440CdlhMC',
        'cs/Tickets',
        'vice',
        'endDate',
        'tenantId',
        'user',
        '../service',
        '6trPIBl',
        'json'
    ];
    a = function () {
        return C;
    };
    return a();
}
const ContactsReport = async (d, e) => {
    const A = w, B = w, {tenantId: f} = d[A(0xf6)], {
            startDate: g,
            endDate: h,
            tags: i,
            ddds: j,
            searchParam: l,
            wallets: m
        } = d[B(0xef)], n = {};
    n[B(0x108)] = g, n[A(0xf4)] = h, n[B(0xed)] = i, n[B(0xe6)] = j, n[A(0xee)] = m, n[B(0xf5)] = f, n[A(0x10f)] = d[A(0xf6)][A(0x10f)], n[B(0x102)] = +d[B(0xf6)]['id'], n[B(0xfa) + 'm'] = l;
    const o = await (0xd2c + 0xfbc + -0x1ce8, ContactsReportService_1[B(0x10b)])(n);
    return e[A(0xe9)](0x677 * -0x1 + -0x1 * 0x1dfb + -0x1 * -0x253a)[B(0xf9)](o);
};
exports[v(0x100) + w(0x101)] = ContactsReport;