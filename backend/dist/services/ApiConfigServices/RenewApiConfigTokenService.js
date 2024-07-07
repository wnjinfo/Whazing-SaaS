'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(s(0x1ca)) / (-0x5c + -0xc7 * -0x29 + -0x1f82) + -parseInt(t(0x1ad)) / (-0x49e + 0x128 * -0x1f + 0x2878) * (-parseInt(t(0x1ce)) / (-0x6b9 + 0x94 * -0x1 + 0x750)) + parseInt(s(0x1bc)) / (-0x2 * 0x1296 + 0x3 * -0x5bf + 0x366d) * (parseInt(t(0x1c9)) / (0x767 * -0x2 + -0x274 * -0x4 + 0x1 * 0x503)) + parseInt(s(0x1c6)) / (-0x2cf * 0x4 + -0x1afa + 0x263c) * (-parseInt(s(0x1cd)) / (0x400 + 0xd72 + -0x116b)) + parseInt(s(0x1b5)) / (0x11ab * 0x1 + 0x59f + -0x1742) * (-parseInt(t(0x1ab)) / (-0x2038 + -0x891 + -0x1a2 * -0x19)) + -parseInt(t(0x1b3)) / (0x134 + -0x1a51 + 0x1927) + parseInt(t(0x1af)) / (0x455 + -0x283 * -0x5 + -0x10d9) * (parseInt(s(0x1bd)) / (-0x40 * -0xf + 0x1e59 + -0x1 * 0x220d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x21e87 * 0x3 + -0x318f * 0x22 + -0x1caf * -0xb7));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1a6 * -0x1 + -0x26b4 + -0x4 * -0xa81);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[u(0x1cb) + u(0x1d2)] || function (c) {
    const w = v;
    return c && c[w(0x1b0)] ? c : { 'default': c };
};
const k = {};
k[v(0x1ae)] = !![], Object[u(0x1b7) + v(0x1b6)](exports, v(0x1b0), k);
function a() {
    const z = [
        '__esModule',
        'reload',
        'default',
        '2599950WBVGmb',
        'uSacU',
        '7538512fryCxY',
        'erty',
        'defineProp',
        'token',
        'jsonwebtok',
        'sign',
        'sessionId',
        '66644qFxmfO',
        '5854296zMVOML',
        'ig/auth',
        'ls/ApiConf',
        '../../erro',
        'tenantId',
        'OUND',
        'admin',
        'OVEKT',
        'DkGwH',
        '95574eSMxCc',
        'profile',
        'expiresIn',
        '195XlgCZh',
        '308908CVwiKf',
        '__importDe',
        'rs/AppErro',
        '161EXXYwP',
        '168513hRgNNb',
        '../../mode',
        'update',
        'ERR_API_CO',
        'fault',
        'NFIG_NOT_F',
        'findByPk',
        '../../conf',
        '9ezrNCG',
        '730d',
        '22dcBZcb',
        'value',
        '11RrsVci'
    ];
    a = function () {
        return z;
    };
    return a();
}
const jsonwebtoken_1 = require(u(0x1b9) + 'en'), ApiConfig_1 = __importDefault(require(u(0x1cf) + u(0x1bf) + 'ig')), auth_1 = __importDefault(require(u(0x1aa) + v(0x1be))), AppError_1 = __importDefault(require(v(0x1c0) + v(0x1cc) + 'r')), RenewApiConfigTokenService = async ({
        apiId: g,
        sessionId: h,
        tenantId: i
    }) => {
        const x = u, y = v, j = {};
        j[x(0x1b4)] = x(0x1d1) + x(0x1d3) + y(0x1c2), j[x(0x1c4)] = x(0x1c3), j[x(0x1c5)] = y(0x1ac);
        const l = j, {secret: m} = auth_1[x(0x1b2)], n = await ApiConfig_1[y(0x1b2)][x(0x1d4)](g);
        if (!n)
            throw new AppError_1[(x(0x1b2))](l[x(0x1b4)], -0x1b77 + 0x4f * 0x19 + 0x1554);
        const o = {};
        o[y(0x1c1)] = i, o[y(0x1c7)] = l[x(0x1c4)], o[x(0x1bb)] = h;
        const p = {};
        p[y(0x1c8)] = l[x(0x1c5)];
        const q = (-0x455 * -0x5 + 0xe47 + -0x23f0, jsonwebtoken_1[y(0x1ba)])(o, m, p), r = {};
        return r[y(0x1b8)] = q, n[x(0x1d0)](r), n[x(0x1b1)](), n;
    };
exports[v(0x1b2)] = RenewApiConfigTokenService;