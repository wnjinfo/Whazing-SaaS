'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x8e)) / (-0x83e + 0x10d * 0x1f + -0x207 * 0xc) * (parseInt(q(0x9b)) / (-0x2 * 0x11ab + -0x17d7 + 0x3b2f)) + parseInt(q(0x96)) / (-0x7 * -0x239 + 0x94 + 0x60 * -0x2b) + parseInt(q(0xab)) / (0x4 * -0x2db + 0x1f49 * -0x1 + 0x2ab9) + -parseInt(q(0xae)) / (0xadc + -0xa4 + -0xa33 * 0x1) + parseInt(p(0x99)) / (0x2 * -0x6ed + 0x1f05 + -0x1125) * (parseInt(p(0x8c)) / (-0xa4f + 0x911 * 0x3 + -0x10dd)) + parseInt(p(0xa2)) / (0x126f * 0x2 + 0x15 + -0x24eb * 0x1) + -parseInt(q(0xaf)) / (0x12cc + -0x1238 + -0x1 * 0x8b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xbdda * -0xd + -0x42561 + -0x4f85 * -0x1));
var __importDefault = this && this[r(0xa5) + s(0xac)] || function (c) {
    const t = s;
    return c && c[t(0x9f)] ? c : { 'default': c };
};
function a() {
    const y = [
        '../../conf',
        '1537236OeKrIz',
        'fault',
        'AMQP_URL',
        '458930vDoffx',
        '9625338SbtgSW',
        'erty',
        'value',
        '75761FFQMAb',
        'verify',
        '1zFaHXd',
        'content',
        'server',
        'ssage360',
        'default',
        'waba360',
        'ig/auth',
        '../../libs',
        '596088jPGUKb',
        'secret',
        '/rabbitmq-',
        '396wcsKgl',
        'parse',
        '381314ohNYnB',
        'messages',
        'KwWCz',
        'consume',
        '__esModule',
        'jsonwebtok',
        'whatsappId',
        '3480576IFcuyZ',
        'env',
        'token',
        '__importDe',
        'start',
        'defineProp',
        'toString',
        './HandleMe'
    ];
    a = function () {
        return y;
    };
    return a();
}
const o = {};
o[s(0x8b)] = !![], Object[s(0xa7) + r(0xb0)](exports, r(0x9f), o);
const jsonwebtoken_1 = require(s(0xa0) + 'en'), rabbitmq_server_1 = __importDefault(require(s(0x95) + s(0x98) + s(0x90))), auth_1 = __importDefault(require(s(0xaa) + r(0x94))), HandleMessage360_1 = __importDefault(require(r(0xa9) + s(0x91))), Consumer360 = async () => {
        const u = s, v = r, d = {};
        d[u(0x9d)] = v(0x93);
        const e = d, f = new rabbitmq_server_1[(u(0x92))](process[v(0xa3)][u(0xad)] || '');
        await f[v(0xa6)](), f[v(0x9e)](e[v(0x9d)], g => {
            const w = v, x = u, h = JSON[w(0x9a)](g[x(0x8f)][x(0xa8)]()), i = (-0x2121 + -0xbeb + 0x2d0c, jsonwebtoken_1[x(0x8d)])(h[x(0xa4)], auth_1[x(0x92)][x(0x97)]);
            (-0x420 + 0x1 * -0x1ecf + 0x22ef, HandleMessage360_1[w(0x92)])(h[x(0x9c)], i[x(0xa1)]);
        });
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x308 + -0x265f + 0x23e2);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[s(0x92)] = Consumer360;