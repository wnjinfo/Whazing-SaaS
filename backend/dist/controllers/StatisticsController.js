'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x1d8)) / (0xa8 * -0x1e + -0x20bf * 0x1 + -0x4 * -0xd1c) + parseInt(u(0x1df)) / (0x1 * 0x1b1a + 0x1374 + -0x2e8c) + -parseInt(t(0x1e3)) / (-0xddc + -0x4bc * 0x5 + -0x258b * -0x1) + -parseInt(u(0x1cc)) / (0x1 * 0x256a + -0x1a2e + -0x8 * 0x167) + parseInt(u(0x1ea)) / (0x336 * -0xc + 0x2f5 + 0x43 * 0x88) * (-parseInt(t(0x1e0)) / (0xef0 * -0x2 + 0x1174 + 0x1b * 0x76)) + -parseInt(t(0x1ce)) / (0x264f + -0x3 * -0x26e + -0x2d92) + parseInt(u(0x1d3)) / (-0x261e + 0x5fd * 0x1 + 0x1 * 0x2029);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4ba61 + 0x15bf4 + 0xa7773 * 0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb7c + 0x2025 * 0x1 + -0x2f * 0x67);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[v(0x1c0) + w(0x1d9)] || function (c) {
    const x = w;
    return c && c[x(0x1c1)] ? c : { 'default': c };
};
const k = {};
k[v(0x1dc)] = !![], Object[v(0x1db) + w(0x1cb)](exports, w(0x1c1), k), exports[w(0x1c8) + v(0x1c3)] = exports[v(0x1e4) + v(0x1d7)] = void (0x2 * 0xdd + -0x94 * 0x40 + 0x2346);
const TicketsQueuesService_1 = __importDefault(require(w(0x1e6) + w(0x1ca) + w(0x1d1) + w(0x1c7) + w(0x1c2))), ContactsReportService_1 = __importDefault(require(w(0x1e6) + w(0x1ca) + w(0x1cd) + w(0x1e1) + v(0x1e7))), DashTicketsQueues = async (d, e) => {
        const y = w, z = v, f = {};
        f[y(0x1d6)] = function (r, s) {
            return r === s;
        }, f[z(0x1de)] = z(0x1da);
        const g = f, {
                tenantId: h,
                profile: i,
                id: j
            } = d[z(0x1d2)], {
                dateStart: l,
                dateEnd: m,
                status: n,
                queuesIds: o,
                showAll: p
            } = d[z(0x1d4)], q = await (0x347 * 0x8 + 0x8 * 0x17c + -0x2618, TicketsQueuesService_1[y(0x1cf)])({
                'showAll': g[z(0x1d6)](i, g[z(0x1de)]) ? p : ![],
                'dateStart': l,
                'dateEnd': m,
                'status': n,
                'queuesIds': o,
                'userId': j,
                'tenantId': h
            });
        return e[z(0x1dd)](0x12a2 + -0x251f + 0x1 * 0x1345)[y(0x1d5)](q);
    };
function a() {
    const C = [
        '__importDe',
        '__esModule',
        'ice',
        'port',
        'wallets',
        'tags',
        'startDate',
        'QueuesServ',
        'ContactsRe',
        'tenantId',
        's/Statisti',
        'erty',
        '3432396ldlRbk',
        'cs/Contact',
        '2569518IpmKyM',
        'default',
        'endDate',
        'cs/Tickets',
        'user',
        '20776520KFJsPR',
        'query',
        'json',
        'VRUMf',
        'sQueues',
        '917853vbUEUa',
        'fault',
        'admin',
        'defineProp',
        'value',
        'status',
        'CrUkc',
        '1615022cXlDOF',
        '84246UXtPkT',
        'sReportSer',
        'ddds',
        '1336101oSooRC',
        'DashTicket',
        'searchPara',
        '../service',
        'vice',
        'profile',
        'userId',
        '125KYEukm'
    ];
    a = function () {
        return C;
    };
    return a();
}
exports[w(0x1e4) + v(0x1d7)] = DashTicketsQueues;
const ContactsReport = async (d, e) => {
    const A = v, B = w, {tenantId: f} = d[A(0x1d2)], {
            startDate: g,
            endDate: h,
            tags: i,
            ddds: j,
            searchParam: l,
            wallets: m
        } = d[B(0x1d4)], n = {};
    n[B(0x1c6)] = g, n[B(0x1d0)] = h, n[B(0x1c5)] = i, n[A(0x1e2)] = j, n[A(0x1c4)] = m, n[B(0x1c9)] = f, n[B(0x1e8)] = d[A(0x1d2)][B(0x1e8)], n[A(0x1e9)] = +d[B(0x1d2)]['id'], n[A(0x1e5) + 'm'] = l;
    const o = await (0x6bd + -0x3e * 0x49 + -0x1 * -0xaf1, ContactsReportService_1[A(0x1cf)])(n);
    return e[A(0x1dd)](-0xe3 + -0x137c + 0x70d * 0x3)[B(0x1d5)](o);
};
exports[v(0x1c8) + w(0x1c3)] = ContactsReport;