'use strict';
const L = b, M = b;
(function (c, d) {
    const J = b, K = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(J(0x13a)) / (-0xa * -0x209 + 0x835 + -0x2 * 0xe47) + -parseInt(J(0x136)) / (0x549 + 0x84a + 0x97 * -0x17) * (parseInt(K(0x16f)) / (0x248e + -0x419 * 0x2 + -0x973 * 0x3)) + parseInt(K(0x12a)) / (-0xc0d + 0x9 * 0x3bf + 0x1 * -0x15a6) * (parseInt(K(0x122)) / (0x17b2 + 0x2121 + -0x38ce)) + parseInt(J(0x180)) / (-0x2 * 0xd63 + 0x1718 + 0x3b4) + -parseInt(J(0x16b)) / (-0x191 * 0x2 + -0x33 * -0xa3 + 0x7 * -0x430) + -parseInt(J(0x14f)) / (-0x68 * 0x43 + 0x1d * 0x5 + 0x1aaf) + -parseInt(K(0x146)) / (0x9f0 + -0x2027 * 0x1 + -0x4 * -0x590) * (-parseInt(K(0x152)) / (-0x72c + 0x4b5 + 0x281));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x67 * 0x4cc + 0x10bb3d + -0x5 * 0x143fd));
var __importDefault = this && this[L(0x126) + M(0x14b)] || function (c) {
    const N = M;
    return c && c[N(0x148)] ? c : { 'default': c };
};
const H = {};
H[M(0x12b)] = !![], Object[L(0x181) + M(0x173)](exports, L(0x148), H), exports[L(0x15a) + L(0x129)] = exports[L(0x128) + 't'] = exports[M(0x137) + 'ot'] = void (0xe5 * 0x11 + 0x193f + 0xd7c * -0x3);
const instagram_private_api_1 = require(M(0x163) + M(0x13f) + 'i'), instagram_mqtt_1 = require(L(0x156) + L(0x119)), AppError_1 = __importDefault(require(M(0x12d) + L(0x16a))), logger_1 = require(M(0x164) + M(0x143)), sessions = [], initInstaBot = async (f, g = -0x1267 + -0x4b4 * 0x8 + -0x1 * -0x380c) => {
        const O = M, P = L, h = {};
        h[O(0x14c)] = function (k, l) {
            return k !== l;
        }, h[O(0x11d)] = P(0x160) + P(0x17d), h[P(0x134)] = O(0x187), h[O(0x178)] = function (k, l) {
            return k < l;
        }, h[P(0x179)] = function (k, l) {
            return k === l;
        }, h[P(0x14e)] = P(0x159), h[P(0x133)] = O(0x17e), h[P(0x16d)] = function (k, l) {
            return k || l;
        }, h[P(0x15b)] = function (k, l) {
            return k === l;
        }, h[O(0x166)] = O(0x12c), h[P(0x14a)] = function (k, l) {
            return k !== l;
        }, h[O(0x130)] = O(0x16c), h[O(0x138)] = O(0x13b), h[P(0x11e)] = P(0x161), h[P(0x141)] = P(0x158), h[P(0x149)] = function (k, l) {
            return k !== l;
        }, h[O(0x167)] = P(0x15f), h[P(0x142)] = function (k, l) {
            return k !== l;
        }, h[O(0x125)] = P(0x17f), h[O(0x11b)] = O(0x185), h[P(0x11a)] = O(0x15c), h[O(0x11f)] = P(0x165) + O(0x14d) + P(0x169) + O(0x175) + P(0x144) + '.';
        const i = h;
        let j = 0x1e9f * 0x1 + -0x30 * -0x54 + -0x2e5f;
        while (i[P(0x178)](j, g)) {
            try {
                if (i[O(0x179)](i[P(0x14e)], i[O(0x133)]))
                    try {
                        const l = s[O(0x186)](I => I['id'] === z['id']);
                        i[P(0x14c)](l, -(-0x1d5b + -0x4 * -0x590 + 0x23 * 0x34)) && (z[l][P(0x11c)][P(0x147)](), A[l][P(0x150)][O(0x13c)](), B[l][P(0x188)][O(0x13c)](), C[P(0x135)](l, -0x1226 + 0x242d + -0x6 * 0x301));
                        const m = {};
                        m[O(0x174)] = '', y[P(0x162)](m);
                    } catch (n) {
                        E[O(0x17a)][P(0x153)](O(0x140) + P(0x154) + n);
                    }
                else {
                    let l, m;
                    const n = '@' + f[O(0x15e) + P(0x155)], o = f[P(0x131) + 'ey'];
                    if (i[P(0x16d)](!n, !o)) {
                        if (i[P(0x15b)](i[O(0x166)], i[O(0x166)]))
                            throw new Error(i[P(0x11d)]);
                        else {
                            const u = {};
                            return u[P(0x177)] = j, g && h[P(0x148)] ? i : u;
                        }
                    }
                    if (f && f[O(0x174)]) {
                        if (i[O(0x14a)](i[P(0x130)], i[O(0x138)]))
                            l = JSON[P(0x183)](f[O(0x174)]);
                        else {
                            const v = j[P(0x186)](x => x['id'] === q['id']);
                            i[O(0x14c)](v, -(0xb51 * 0x1 + -0x1d21 + 0x11d1)) && (q[v][P(0x11c)][P(0x147)](), r[v][O(0x150)][O(0x13c)](), s[v][O(0x188)][P(0x13c)](), t[O(0x135)](v, 0x1365 * -0x2 + 0x8c2 + 0x1e09));
                            const w = {};
                            w[O(0x174)] = '', p[O(0x162)](w);
                        }
                    }
                    const p = (-0x2 * 0x76a + 0xb1 * 0x2 + 0xd72, instagram_mqtt_1[P(0x127) + P(0x168)])(new instagram_private_api_1[(O(0x16e)) + 't']());
                    p['id'] = f['id'], p[O(0x13e)][O(0x139) + O(0x184)](n), m = await p[O(0x11c)][P(0x145)](n, o), p[O(0x157) + 'in'] = m, process[P(0x15d)](async () => {
                        const Q = P, R = P;
                        if (i[Q(0x14c)](i[R(0x134)], i[R(0x134)]))
                            throw new q(i[R(0x11d)]);
                        else
                            await p[R(0x12f)][R(0x123) + Q(0x121)]();
                    }), l = await p[P(0x17b) + 'e']();
                    const q = {};
                    q[O(0x174)] = l, await f[P(0x162)](q), await p[P(0x150)][O(0x171)]({ 'irisData': await p[O(0x120)][P(0x13d) + 'x']()[P(0x124)]() });
                    const r = {};
                    r[O(0x176) + P(0x151)] = !![], await p[O(0x188)][O(0x171)](r);
                    const s = sessions[P(0x186)](v => v['id'] === f['id']);
                    if (i[P(0x15b)](s, -(0x1952 + -0x23 * -0xe8 + -0x3909)))
                        i[P(0x14c)](i[O(0x11e)], i[P(0x141)]) ? (p['id'] = f['id'], !p[P(0x157) + 'in'] && (i[P(0x149)](i[P(0x167)], i[O(0x167)]) ? (k[l][O(0x11c)][O(0x147)](), m[n][O(0x150)][O(0x13c)](), o[p][P(0x188)][O(0x13c)](), q[P(0x135)](r, -0x71 * 0xd + 0xe * -0x13f + 0x1730 * 0x1)) : p[O(0x157) + 'in'] = await p[O(0x11c)][O(0x182) + 'r']()), sessions[O(0x12e)](p)) : r[O(0x17a)][O(0x153)](O(0x140) + O(0x154) + f);
                    else {
                        if (i[P(0x142)](i[O(0x125)], i[P(0x11b)]))
                            p['id'] = f['id'], !p[O(0x157) + 'in'] && (i[P(0x179)](i[P(0x11a)], i[O(0x11a)]) ? p[O(0x157) + 'in'] = await p[O(0x11c)][P(0x182) + 'r']() : f = g[O(0x183)](h[O(0x174)])), sessions[s] = p;
                        else {
                            const z = f[O(0x186)](A => A['id'] === z);
                            return h[z];
                        }
                    }
                    return p;
                }
            } catch (z) {
                logger_1[P(0x17a)][P(0x153)](P(0x170) + P(0x17c) + O(0x172) + z), j++, await new Promise(A => setTimeout(A, -0x40 * -0x2 + 0xd * 0x14 + 0x264));
            }
        }
        throw new AppError_1[(P(0x177))](i[P(0x11f)], -0x2 * 0x4d9 + -0x226c + 0x2 * 0x16d9);
    };
exports[M(0x137) + 'ot'] = initInstaBot;
const getInstaBot = c => {
    const S = L, d = sessions[S(0x186)](e => e['id'] === c);
    return sessions[d];
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3e9 * 0x3 + 0xfd0 + -0x2fc);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[M(0x128) + 't'] = getInstaBot;
const removeInstaBot = e => {
    const T = L, U = M, f = {};
    f[T(0x132)] = function (h, i) {
        return h !== i;
    };
    const g = f;
    try {
        const h = sessions[T(0x186)](j => j['id'] === e['id']);
        g[U(0x132)](h, -(-0x1cba + 0xf83 + -0x48 * -0x2f)) && (sessions[h][T(0x11c)][T(0x147)](), sessions[h][U(0x150)][U(0x13c)](), sessions[h][T(0x188)][U(0x13c)](), sessions[U(0x135)](h, -0x10e0 + 0x106 * -0x15 + -0x2f * -0xd1));
        const i = {};
        i[T(0x174)] = '', e[U(0x162)](i);
    } catch (j) {
        logger_1[T(0x17a)][U(0x153)](T(0x140) + T(0x154) + j);
    }
};
function a() {
    const V = [
        'instagram-',
        '../utils/l',
        'Max\x20retrie',
        'wMUGT',
        'rMIyq',
        'dRealtime',
        '\x20Unable\x20to',
        'AppError',
        '6967205JpsZOe',
        'gkAbn',
        'lMLMR',
        'IgApiClien',
        '7758YQxERa',
        'initWbot\x20e',
        'connect',
        'or:\x20',
        'erty',
        'session',
        '\x20initializ',
        'autoReconn',
        'default',
        'ikkrO',
        'YComw',
        'logger',
        'exportStat',
        'rror\x20|\x20Err',
        'tials',
        'ULSQG',
        'vIlJm',
        '1231254WTRoSD',
        'defineProp',
        'currentUse',
        'parse',
        'vice',
        'listW',
        'findIndex',
        'qPPDW',
        'fbns',
        'mqtt',
        'JCmFG',
        'DiJeI',
        'account',
        'zuCGu',
        'dIGfp',
        'TSBJu',
        'feed',
        'low',
        '90125vSRkdg',
        'postLoginF',
        'request',
        'Edwoa',
        '__importDe',
        'withFbnsAn',
        'getInstaBo',
        'aBot',
        '92fXouNJ',
        'value',
        'XJrIf',
        '../errors/',
        'push',
        'simulate',
        'cLgIA',
        'instagramK',
        'AusDo',
        'WcrWZ',
        'Dcvnp',
        'splice',
        '86ftNbfi',
        'initInstaB',
        'iuUur',
        'generateDe',
        '549921cmqEuB',
        'megeV',
        'disconnect',
        'directInbo',
        'state',
        'private-ap',
        'removeWbot',
        'yqtic',
        'xkzUD',
        'ogger',
        'e\x20InstaBot',
        'login',
        '50607kercrg',
        'logout',
        '__esModule',
        'jtKgX',
        'KXaFP',
        'fault',
        'qmmfG',
        's\x20reached.',
        'zIShU',
        '6067552pVFyUj',
        'realtime',
        'ect',
        '4180CEVeRW',
        'error',
        '\x20|\x20Error:\x20',
        'ser',
        'instagram_',
        'accountLog',
        'mOZGl',
        'tDgYK',
        'removeInst',
        'zLZvB',
        'wImAc',
        'nextTick',
        'instagramU',
        'JAPTv',
        'Not\x20creden',
        'wzIBU',
        'update'
    ];
    a = function () {
        return V;
    };
    return a();
}
exports[M(0x15a) + L(0x129)] = removeInstaBot;