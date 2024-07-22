'use strict';
const t = b, u = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x15c5 + -0x224e + 0x4f * 0xbb);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x1b8)) / (-0x1b42 + -0x197a + 0x34bd) + -parseInt(s(0x1c4)) / (-0x1 * -0x26a1 + -0x1f11 + -0x78e * 0x1) * (-parseInt(r(0x1a3)) / (-0xa95 + 0x1 * -0x47 + -0x79 * -0x17)) + parseInt(r(0x1c1)) / (-0x1 * 0xd39 + -0x20f7 + 0x2e34 * 0x1) * (-parseInt(r(0x1c3)) / (0x140e * 0x1 + 0x831 * -0x3 + 0x53 * 0xe)) + parseInt(r(0x1c9)) / (-0xb * 0x27 + -0x6ff + -0x2a * -0x35) + -parseInt(s(0x1a9)) / (-0x23bb * 0x1 + 0x8 * 0x2e + 0x2252) * (-parseInt(s(0x1a8)) / (0x1558 + 0x101b + -0xc79 * 0x3)) + parseInt(r(0x1a7)) / (0x14e9 + -0x1ad7 + 0x5f7 * 0x1) + -parseInt(r(0x1bf)) / (-0x1 * 0x201d + -0x413 + 0x121d * 0x2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0xb8881 + 0x178d7 * -0x3 + 0x2 * 0x9cf));
var __importDefault = this && this[t(0x1bb) + t(0x1b2)] || function (c) {
    const v = u;
    return c && c[v(0x1be)] ? c : { 'default': c };
};
function a() {
    const y = [
        'EFFkS',
        'fault',
        'is_chat_ia',
        '../../erro',
        'KET_FOUND',
        'jsRkQ',
        'ate',
        '49950PTNkuR',
        'update',
        'INKnE',
        '__importDe',
        'split',
        'value',
        '__esModule',
        '10172820VCNGDk',
        'defineProp',
        '19804cNZLHC',
        '4|3|0|2|1',
        '335Ndweje',
        '12xTbFJA',
        'reload',
        'ers/socket',
        'Emit',
        'stepChatFl',
        '245376thhidq',
        'type',
        'erty',
        'queueId',
        '266793fPbbBA',
        'default',
        'ERR_NO_TIC',
        'payload',
        '4920084LpEMKA',
        '5194728ZSwmSa',
        '7EtCVhD',
        'ticket',
        'userId',
        'rs/AppErro',
        '../../help',
        'tenantId',
        'chatFlowId',
        'ticket:upd'
    ];
    a = function () {
        return y;
    };
    return a();
}
const k = {};
k[u(0x1bd)] = !![], Object[u(0x1c0) + u(0x1cb)](exports, u(0x1be), k);
const AppError_1 = __importDefault(require(t(0x1b4) + t(0x1ac) + 'r')), socketEmit_1 = __importDefault(require(t(0x1ad) + u(0x1c6) + t(0x1c7))), UpdateQueueIATicket = async (g, h, i = null) => {
        const w = t, x = u, j = {};
        j[w(0x1b6)] = w(0x1c2), j[w(0x1ba)] = w(0x1b0) + w(0x1b7), j[w(0x1b1)] = x(0x1a5) + w(0x1b5);
        const l = j, m = l[w(0x1b6)][x(0x1bc)]('|');
        let n = -0x506 + 0x2086 + 0x580 * -0x5;
        while (!![]) {
            switch (m[n++]) {
            case '0':
                await h[w(0x1c5)]();
                continue;
            case '1':
                const o = {};
                o[w(0x1aa)] = h;
                return o;
            case '2':
                const p = {};
                p[w(0x1ae)] = h[x(0x1ae)], p[x(0x1ca)] = l[x(0x1ba)], p[w(0x1a6)] = h, (0xb * 0x37f + 0x1 * 0x1d75 + -0x1 * 0x43ea, socketEmit_1[x(0x1a4)])(p);
                continue;
            case '3':
                const q = {};
                q[x(0x1a2)] = g, q[x(0x1c8) + 'ow'] = null, q[x(0x1af)] = null, q[x(0x1b3)] = ![], q[w(0x1ab)] = i, await h[x(0x1b9)](q);
                continue;
            case '4':
                if (!h)
                    throw new AppError_1[(w(0x1a4))](l[x(0x1b1)], 0x72 * 0x1f + 0x1 * 0xd15 + -0x194f);
                continue;
            }
            break;
        }
    };
exports[t(0x1a4)] = UpdateQueueIATicket;