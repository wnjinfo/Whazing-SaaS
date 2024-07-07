'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0x1d8)) / (-0x1 * 0x2413 + 0x1 * 0x7a5 + -0x1c6f * -0x1) * (-parseInt(v(0x1cf)) / (0x2 * 0x5df + -0x1 * -0xb2e + -0x16ea)) + -parseInt(u(0x1d4)) / (-0x1 * -0x22c6 + -0x6 * 0x358 + -0x35 * 0x47) + -parseInt(u(0x1c4)) / (0x1370 * 0x1 + -0x1 * 0xeef + -0x47d) + -parseInt(v(0x1d5)) / (-0x1 * -0x150d + 0x1 * -0x1791 + 0x289) + -parseInt(u(0x1d1)) / (-0x173f + 0x1eb + 0x155a) * (parseInt(v(0x1da)) / (-0x24fd + -0x1934 + 0xf8e * 0x4)) + parseInt(v(0x1d0)) / (-0xcb3 + -0x2 * 0x26e + 0x1197) + -parseInt(v(0x1d2)) / (0x1403 * -0x1 + 0x3 * 0x4d6 + 0x58a) * (-parseInt(u(0x1c9)) / (-0xb72 + 0xed1 + -0x355));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x130 * -0x82d + 0x2abd8 + -0x1 * -0x1102fd));
function a() {
    const A = [
        '583816IMohFk',
        '8284488XMdufZ',
        '18kathYg',
        '2148309wwsPvr',
        '__esModule',
        '2454300nqOzEs',
        '2490055SJKunM',
        'erty',
        'default',
        '3mNDJwn',
        'RVOpq',
        '1384957blItwH',
        'cket',
        'toString',
        'value',
        'payload',
        'contact:',
        '256220wwehme',
        'type',
        ':ticketLis',
        'getIO',
        '../libs/so',
        '30YvyxgD',
        ':contactLi',
        'KUqhG',
        'indexOf',
        'emit',
        'defineProp'
    ];
    a = function () {
        return A;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xfe9 * 0x2 + 0xe * 0x2ad + -0x3e1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const t = {};
t[w(0x1dd)] = !![], Object[x(0x1ce) + w(0x1d6)](exports, w(0x1d3), t);
const socket_1 = require(w(0x1c8) + w(0x1db)), emitEvent = ({
        tenantId: e,
        type: f,
        payload: g
    }) => {
        const y = w, z = x, h = {};
        h[y(0x1cb)] = function (m, n) {
            return m !== n;
        }, h[z(0x1d9)] = y(0x1c3);
        const i = h, j = (0x76b + -0x15c7 + 0xe5c, socket_1[z(0x1c7)])();
        let k = e + (z(0x1c6) + 't');
        i[y(0x1cb)](f[z(0x1cc)](i[y(0x1d9)]), -(-0x70b + -0x55d * 0x4 + 0x1c80)) && (k = e + (z(0x1ca) + 'st'));
        const l = {};
        l[z(0x1c5)] = f, l[z(0x1de)] = g, j['to'](e[y(0x1dc)]())[y(0x1cd)](k, l);
    };
exports[w(0x1d7)] = emitEvent;