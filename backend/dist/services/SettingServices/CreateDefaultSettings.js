'use strict';
const _0x4f4dea = _0x2078;
(function (_0x44d7ed, _0x19983d) {
    const _0x4d86b6 = _0x2078, _0xede14b = _0x44d7ed();
    while (!![]) {
        try {
            const _0x265cec = parseInt(_0x4d86b6(0x184)) / (0x17a4 + -0x2042 + -0x89f * -0x1) + -parseInt(_0x4d86b6(0x194)) / (0xb * -0x322 + -0x25 * -0x3d + 0x19a7) * (parseInt(_0x4d86b6(0x17a)) / (0xd0 * 0x10 + -0x7 * -0x131 + 0x23 * -0x9c)) + parseInt(_0x4d86b6(0x16c)) / (-0x268b + 0x21d + -0x1239 * -0x2) * (parseInt(_0x4d86b6(0x1b1)) / (-0x1c9 * 0x5 + -0x1c25 + 0x2517)) + -parseInt(_0x4d86b6(0x164)) / (0x2590 + -0x5ab * -0x4 + -0x3c36) * (parseInt(_0x4d86b6(0x177)) / (0x768 + 0x19b0 + -0x2111)) + parseInt(_0x4d86b6(0x19a)) / (-0x15f2 + -0xc24 + -0x1 * -0x221e) * (-parseInt(_0x4d86b6(0x188)) / (0x196 * 0x4 + -0x1 * -0x19a1 + 0x124 * -0x1c)) + -parseInt(_0x4d86b6(0x1b6)) / (-0x5a6 + 0xfa4 + -0x9f4) * (-parseInt(_0x4d86b6(0x1ad)) / (0x176 * 0x1 + 0x1 * -0x6a6 + 0x53b)) + -parseInt(_0x4d86b6(0x173)) / (0xd6 * 0xd + -0x2a0 + -0x832) * (-parseInt(_0x4d86b6(0x190)) / (0x10a8 + -0x4 * 0x84 + -0x33 * 0x49));
            if (_0x265cec === _0x19983d)
                break;
            else
                _0xede14b['push'](_0xede14b['shift']());
        } catch (_0x31d42d) {
            _0xede14b['push'](_0xede14b['shift']());
        }
    }
}(_0x2fe1, -0x65 * 0x1379 + 0x82ce2 + -0x4e135 * -0x1));
var __importDefault = this && this[_0x4f4dea(0x17f) + _0x4f4dea(0x1b2)] || function (_0x2dbc75) {
    const _0x5d9746 = _0x4f4dea;
    return _0x2dbc75 && _0x2dbc75[_0x5d9746(0x19f)] ? _0x2dbc75 : { 'default': _0x2dbc75 };
};
function _0x2078(_0x3f7722, _0x1c51d0) {
    const _0x584641 = _0x2fe1();
    return _0x2078 = function (_0x2f0301, _0x1e66a0) {
        _0x2f0301 = _0x2f0301 - (-0xd * -0x6c + 0x201e + 0x305 * -0xc);
        let _0x40aeba = _0x584641[_0x2f0301];
        return _0x40aeba;
    }, _0x2078(_0x3f7722, _0x1c51d0);
}
const _0x34649a = {};
_0x34649a[_0x4f4dea(0x181)] = !![], Object[_0x4f4dea(0x1b8) + _0x4f4dea(0x18f)](exports, _0x4f4dea(0x19f), _0x34649a);
const Setting_1 = __importDefault(require(_0x4f4dea(0x1aa) + _0x4f4dea(0x1a4))), createSetting = async (_0x5e672c, _0x5419c6, _0x100a52) => {
        const _0x1d7056 = _0x4f4dea, _0x138a2a = {
                'floYe': function (_0x4eaf10, _0x5a977e) {
                    return _0x4eaf10(_0x5a977e);
                },
                'rlNoR': _0x1d7056(0x17c) + _0x1d7056(0x170) + _0x1d7056(0x15f)
            }, _0xc87fa = await Setting_1[_0x1d7056(0x18d)][_0x1d7056(0x187)]({
                'where': {
                    'tenantId': _0x138a2a[_0x1d7056(0x1a3)](Number, _0x5e672c),
                    'key': _0x5419c6
                }
            });
        if (_0xc87fa)
            return console[_0x1d7056(0x192)](_0x1d7056(0x19c) + _0x1d7056(0x1a9) + _0x1d7056(0x183) + _0x5419c6 + (_0x1d7056(0x1ab) + _0x1d7056(0x1ac) + _0x1d7056(0x1ba)) + _0x5e672c + '.'), _0xc87fa;
        try {
            const _0x41736b = await Setting_1[_0x1d7056(0x18d)][_0x1d7056(0x16b)]({
                'key': _0x5419c6,
                'value': _0x100a52,
                'createdAt': new Date(),
                'updatedAt': new Date(),
                'tenantId': _0x138a2a[_0x1d7056(0x1a3)](Number, _0x5e672c)
            });
            return _0x41736b;
        } catch (_0x59c768) {
            console[_0x1d7056(0x1b4)](_0x138a2a[_0x1d7056(0x16e)], _0x59c768);
            throw _0x59c768;
        }
    }, CreateDefaultSettings = async _0x31a485 => {
        const _0x78759e = _0x4f4dea, _0x55f9a8 = {
                'qQFVC': function (_0x2998c9, _0x5eeae2, _0x255f79, _0x46a08d) {
                    return _0x2998c9(_0x5eeae2, _0x255f79, _0x46a08d);
                },
                'Kpqts': _0x78759e(0x1b0) + 'on',
                'BgQrK': _0x78759e(0x189),
                'nrzqF': function (_0x25b5ec, _0x3946bf, _0x465599, _0x2372f1) {
                    return _0x25b5ec(_0x3946bf, _0x465599, _0x2372f1);
                },
                'DwcDh': _0x78759e(0x179) + _0x78759e(0x1a5) + _0x78759e(0x1b3),
                'ShFKu': function (_0x17e48e, _0x2d4ea9, _0x52ffe0, _0x49f93b) {
                    return _0x17e48e(_0x2d4ea9, _0x52ffe0, _0x49f93b);
                },
                'CSwjc': _0x78759e(0x179) + _0x78759e(0x1a2) + 't',
                'FMxMC': _0x78759e(0x19d) + _0x78759e(0x18a) + 'ts',
                'bbrYm': _0x78759e(0x1a0) + _0x78759e(0x195) + 'ts',
                'DpFKD': function (_0x5dd183, _0x431abc, _0x54a87c, _0x40c3c2) {
                    return _0x5dd183(_0x431abc, _0x54a87c, _0x40c3c2);
                },
                'zerub': _0x78759e(0x16d) + _0x78759e(0x1a7),
                'dnGer': _0x78759e(0x193) + 's',
                'BlCEA': function (_0x1febd1, _0x771536, _0x252aeb, _0x58993c) {
                    return _0x1febd1(_0x771536, _0x252aeb, _0x58993c);
                },
                'slsUx': _0x78759e(0x1b5) + _0x78759e(0x19b),
                'PVfeg': _0x78759e(0x176) + _0x78759e(0x1ae) + _0x78759e(0x17d) + _0x78759e(0x17b) + _0x78759e(0x1af) + _0x78759e(0x166) + _0x78759e(0x162) + _0x78759e(0x185) + _0x78759e(0x18b) + _0x78759e(0x198),
                'WRYyk': _0x78759e(0x1a1) + _0x78759e(0x1a6),
                'kQZMU': _0x78759e(0x1bb),
                'ofaMT': function (_0x45d7fe, _0x5e5801, _0x2e2731, _0xbcbf62) {
                    return _0x45d7fe(_0x5e5801, _0x2e2731, _0xbcbf62);
                },
                'ssBQk': _0x78759e(0x16f) + _0x78759e(0x1a8),
                'oYvuP': function (_0x1a8cb5, _0x199a74, _0x274d87, _0x5461bc) {
                    return _0x1a8cb5(_0x199a74, _0x274d87, _0x5461bc);
                },
                'sOBaB': _0x78759e(0x1b9) + _0x78759e(0x186),
                'NZATx': _0x78759e(0x17c) + _0x78759e(0x170) + _0x78759e(0x174) + _0x78759e(0x191)
            }, _0x2b78c8 = [
                _0x55f9a8[_0x78759e(0x169)](createSetting, _0x31a485, _0x55f9a8[_0x78759e(0x180)], _0x55f9a8[_0x78759e(0x161)]),
                _0x55f9a8[_0x78759e(0x1b7)](createSetting, _0x31a485, _0x55f9a8[_0x78759e(0x16a)], _0x55f9a8[_0x78759e(0x161)]),
                _0x55f9a8[_0x78759e(0x171)](createSetting, _0x31a485, _0x55f9a8[_0x78759e(0x197)], _0x55f9a8[_0x78759e(0x161)]),
                _0x55f9a8[_0x78759e(0x1b7)](createSetting, _0x31a485, _0x55f9a8[_0x78759e(0x175)], _0x55f9a8[_0x78759e(0x161)]),
                _0x55f9a8[_0x78759e(0x169)](createSetting, _0x31a485, _0x55f9a8[_0x78759e(0x163)], _0x55f9a8[_0x78759e(0x161)]),
                _0x55f9a8[_0x78759e(0x19e)](createSetting, _0x31a485, _0x55f9a8[_0x78759e(0x167)], _0x55f9a8[_0x78759e(0x161)]),
                _0x55f9a8[_0x78759e(0x169)](createSetting, _0x31a485, _0x55f9a8[_0x78759e(0x182)], _0x55f9a8[_0x78759e(0x161)]),
                _0x55f9a8[_0x78759e(0x17e)](createSetting, _0x31a485, _0x55f9a8[_0x78759e(0x178)], _0x55f9a8[_0x78759e(0x199)]),
                _0x55f9a8[_0x78759e(0x171)](createSetting, _0x31a485, _0x55f9a8[_0x78759e(0x18c)], _0x55f9a8[_0x78759e(0x196)]),
                _0x55f9a8[_0x78759e(0x15e)](createSetting, _0x31a485, _0x55f9a8[_0x78759e(0x172)], _0x55f9a8[_0x78759e(0x161)]),
                _0x55f9a8[_0x78759e(0x160)](createSetting, _0x31a485, _0x55f9a8[_0x78759e(0x168)], _0x55f9a8[_0x78759e(0x161)])
            ];
        try {
            const _0x1d482e = await Promise[_0x78759e(0x165)](_0x2b78c8);
            return _0x1d482e;
        } catch (_0x31437d) {
            console[_0x78759e(0x1b4)](_0x55f9a8[_0x78759e(0x18e)], _0x31437d);
            throw _0x31437d;
        }
    };
function _0x2fe1() {
    const _0x50acb8 = [
        'nrzqF',
        'defineProp',
        'userContac',
        'nantId\x20',
        'enabled',
        'ofaMT',
        'uração:',
        'oYvuP',
        'BgQrK',
        'App,\x20favor',
        'bbrYm',
        '6pSxgHC',
        'all',
        'esse\x20Whats',
        'zerub',
        'sOBaB',
        'qQFVC',
        'DwcDh',
        'create',
        '8FZGfkp',
        'botTicketA',
        'rlNoR',
        'ignoreGrou',
        'iar\x20config',
        'ShFKu',
        'ssBQk',
        '1704agoItX',
        'urações\x20pa',
        'FMxMC',
        'As\x20chamada',
        '4034947FNcCyN',
        'slsUx',
        'NotViewTic',
        '3DoFLkv',
        'ão\x20desabil',
        'Erro\x20ao\x20cr',
        '\x20vídeo\x20est',
        'BlCEA',
        '__importDe',
        'Kpqts',
        'value',
        'dnGer',
        'have\x20',
        '224427CGmvgC',
        '\x20enviar\x20um',
        'tWallet',
        'findOne',
        '259317znLkBV',
        'disabled',
        'ignedTicke',
        'a\x20mensagem',
        'WRYyk',
        'default',
        'NZATx',
        'erty',
        '82147aPcxdw',
        'drão:',
        'log',
        'rejectCall',
        '993874SvTZKU',
        'etsToWalle',
        'kQZMU',
        'CSwjc',
        '\x20de\x20texto',
        'PVfeg',
        '88Ywqnvm',
        'Message',
        'Configuraç',
        'NotViewAss',
        'DpFKD',
        '__esModule',
        'DirectTick',
        'userDisabl',
        'ketsChatBo',
        'floYe',
        'ls/Setting',
        'ketsQueueU',
        'eSignature',
        'ctive',
        'pMsg',
        'ão\x20com\x20a\x20c',
        '../../mode',
        '\x20já\x20existe',
        '\x20para\x20o\x20te',
        '165sDurLS',
        's\x20de\x20voz\x20e',
        'itas\x20para\x20',
        'userCreati',
        '105065yvcFvT',
        'fault',
        'ndefined',
        'error',
        'callReject',
        '385760ixxDss'
    ];
    _0x2fe1 = function () {
        return _0x50acb8;
    };
    return _0x2fe1();
}
exports[_0x4f4dea(0x18d)] = CreateDefaultSettings;