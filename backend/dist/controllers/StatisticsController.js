'use strict';
function a() {
    const C = [
        '2109317gwSnDw',
        'TIskl',
        's/Statisti',
        'defineProp',
        'status',
        '3KLtiZI',
        'ice',
        'erty',
        '__esModule',
        'value',
        'QueuesServ',
        '207tsNVeu',
        '449289AXErXE',
        'cs/Tickets',
        '3914305qmVwBh',
        'query',
        'admin',
        'sReportSer',
        '231274jcCrkq',
        'port',
        'ddds',
        'userId',
        'wallets',
        'searchPara',
        'vice',
        'json',
        '3666216dvznuu',
        'default',
        'startDate',
        'ContactsRe',
        'cs/Contact',
        '763000QtPfdm',
        '../service',
        'ouvYQ',
        'sQueues',
        'endDate',
        '__importDe',
        'DashTicket',
        'profile',
        'user',
        '980556blGqZY',
        'fault',
        'tenantId',
        'tags'
    ];
    a = function () {
        return C;
    };
    return a();
}
const v = b, w = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1248 + 0x1f3c + 0x8f * -0x56);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x18b)) / (0x10db + 0x2029 * 0x1 + -0x3103 * 0x1) + -parseInt(u(0x191)) / (-0xbc + 0x3 * -0x2e3 + 0x967) * (-parseInt(t(0x184)) / (0xe24 * 0x1 + 0xba5 + 0x19c6 * -0x1)) + parseInt(u(0x199)) / (0x1 * 0x165a + -0x124f + 0x1 * -0x407) + parseInt(u(0x18d)) / (0x25e0 + 0x22a1 + 0x243e * -0x2) + parseInt(t(0x17b)) / (0x1 * -0x1ad5 + 0x164c + 0x48f) + parseInt(t(0x17f)) / (0x1e86 * 0x1 + 0x6c0 + 0x1 * -0x253f) + -parseInt(t(0x19e)) / (-0x1040 + -0xcd2 + 0x1d1a * 0x1) * (parseInt(u(0x18a)) / (0x1 * -0xc97 + -0x27 * -0x25 + 0x6fd));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x9 * -0x2b32 + 0x2f067 + 0x3b688));
var __importDefault = this && this[v(0x1a3) + w(0x17c)] || function (c) {
    const x = v;
    return c && c[x(0x187)] ? c : { 'default': c };
};
const k = {};
k[w(0x188)] = !![], Object[w(0x182) + w(0x186)](exports, v(0x187), k), exports[w(0x19c) + v(0x192)] = exports[w(0x1a4) + v(0x1a1)] = void (-0x16bd * 0x1 + -0x3e * 0x68 + 0x2fed);
const TicketsQueuesService_1 = __importDefault(require(w(0x19f) + v(0x181) + v(0x18c) + w(0x189) + v(0x185))), ContactsReportService_1 = __importDefault(require(w(0x19f) + w(0x181) + w(0x19d) + v(0x190) + w(0x197))), DashTicketsQueues = async (d, e) => {
        const y = w, z = w, f = {};
        f[y(0x180)] = function (r, s) {
            return r === s;
        }, f[z(0x1a0)] = z(0x18f);
        const g = f, {
                tenantId: h,
                profile: i,
                id: j
            } = d[y(0x17a)], {
                dateStart: l,
                dateEnd: m,
                status: n,
                queuesIds: o,
                showAll: p
            } = d[y(0x18e)], q = await (0x1 * 0x164c + 0xc81 + -0x22cd, TicketsQueuesService_1[z(0x19a)])({
                'showAll': g[y(0x180)](i, g[y(0x1a0)]) ? p : ![],
                'dateStart': l,
                'dateEnd': m,
                'status': n,
                'queuesIds': o,
                'userId': j,
                'tenantId': h
            });
        return e[z(0x183)](-0x1cb1 + -0x30 * 0x89 + -0x20b * -0x1b)[z(0x198)](q);
    };
exports[v(0x1a4) + v(0x1a1)] = DashTicketsQueues;
const ContactsReport = async (d, e) => {
    const A = v, B = v, {tenantId: f} = d[A(0x17a)], {
            startDate: g,
            endDate: h,
            tags: i,
            ddds: j,
            searchParam: l,
            wallets: m
        } = d[A(0x18e)], n = {};
    n[A(0x19b)] = g, n[B(0x1a2)] = h, n[B(0x17e)] = i, n[B(0x193)] = j, n[B(0x195)] = m, n[B(0x17d)] = f, n[A(0x1a5)] = d[A(0x17a)][A(0x1a5)], n[A(0x194)] = +d[A(0x17a)]['id'], n[A(0x196) + 'm'] = l;
    const o = await (-0x8b1 * 0x2 + -0xe65 + 0x1fc7, ContactsReportService_1[A(0x19a)])(n);
    return e[B(0x183)](0x12ec * -0x1 + 0x20d1 * 0x1 + -0xd1d)[B(0x198)](o);
};
exports[v(0x19c) + w(0x192)] = ContactsReport;