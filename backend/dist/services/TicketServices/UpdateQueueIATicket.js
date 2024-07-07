'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x14f)) / (0x1e54 + -0x15bd + -0x1 * 0x896) * (-parseInt(s(0x170)) / (0x859 * -0x1 + 0x3 * -0x7f1 + 0x202e)) + parseInt(r(0x15d)) / (-0x1 * 0x151f + 0x1928 + 0x203 * -0x2) + parseInt(s(0x168)) / (-0x2113 * -0x1 + 0x22b1 + -0x43c0) + parseInt(s(0x169)) / (0x1719 + -0x1 * 0x8bf + -0xe55) * (-parseInt(r(0x15f)) / (0x1 * -0x1b60 + 0x513 + -0x27b * -0x9)) + -parseInt(r(0x155)) / (-0x1 * -0x850 + 0xa1a + -0x1263) * (parseInt(s(0x150)) / (0x244d + 0x1945 + 0x2 * -0x1ec5)) + -parseInt(s(0x15b)) / (0xdb1 + 0x3ed + 0x283 * -0x7) + -parseInt(s(0x159)) / (0x1 * 0xa5e + 0xe5 + 0xd * -0xdd) * (-parseInt(r(0x14e)) / (-0x1704 + 0x4 * 0x5ea + 0x3 * -0x33));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xe * 0x7743 + 0x15d25 * -0x2 + 0x1a35b));
var __importDefault = this && this[t(0x152) + t(0x16c)] || function (c) {
    const v = t;
    return c && c[v(0x166)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x945 + -0x1ac4 + 0x2556);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const y = [
        'JeHIe',
        'KET_FOUND',
        '3|1|2|0|4',
        'WuCLU',
        'split',
        'ate',
        '29535usOjwm',
        '14907XdEaqy',
        '208WHlEps',
        'update',
        '__importDe',
        'ERR_NO_TIC',
        'ers/socket',
        '99729RtVJht',
        'payload',
        '../../help',
        'default',
        '2500sPCOTL',
        'value',
        '2919870jcLkRR',
        'defineProp',
        '1278687MmyCnA',
        'PvpXe',
        '120PMezNp',
        'ticket',
        'Emit',
        'userId',
        '../../erro',
        'is_chat_ia',
        'ticket:upd',
        '__esModule',
        'stepChatFl',
        '2723608khrNno',
        '10445zXPpLD',
        'chatFlowId',
        'tenantId',
        'fault',
        'reload',
        'erty',
        'queueId',
        '92rNgHvY',
        'rs/AppErro',
        'type'
    ];
    a = function () {
        return y;
    };
    return a();
}
const k = {};
k[u(0x15a)] = !![], Object[u(0x15c) + t(0x16e)](exports, t(0x166), k);
const AppError_1 = __importDefault(require(u(0x163) + u(0x171) + 'r')), socketEmit_1 = __importDefault(require(u(0x157) + u(0x154) + u(0x161))), UpdateQueueIATicket = async (g, h, i = null) => {
        const w = u, x = u, j = {};
        j[w(0x15e)] = w(0x175), j[x(0x173)] = w(0x165) + w(0x14d), j[w(0x176)] = w(0x153) + w(0x174);
        const l = j, m = l[x(0x15e)][x(0x177)]('|');
        let n = -0x1634 + -0x7 * 0x2a2 + -0x2 * -0x1451;
        while (!![]) {
            switch (m[n++]) {
            case '0':
                const o = {};
                o[w(0x16b)] = h[w(0x16b)], o[w(0x172)] = l[x(0x173)], o[x(0x156)] = h, (-0x1f00 + 0x2 * 0xd4e + -0x232 * -0x2, socketEmit_1[x(0x158)])(o);
                continue;
            case '1':
                const p = {};
                p[x(0x16f)] = g, p[x(0x167) + 'ow'] = null, p[x(0x16a)] = null, p[w(0x164)] = ![], p[w(0x162)] = i, await h[x(0x151)](p);
                continue;
            case '2':
                await h[x(0x16d)]();
                continue;
            case '3':
                if (!h)
                    throw new AppError_1[(x(0x158))](l[w(0x176)], 0xf97 + 0x827 * 0x2 + -0x1e51);
                continue;
            case '4':
                const q = {};
                q[w(0x160)] = h;
                return q;
            }
            break;
        }
    };
exports[u(0x158)] = UpdateQueueIATicket;