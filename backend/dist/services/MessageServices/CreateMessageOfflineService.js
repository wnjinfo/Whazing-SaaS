'use strict';
function _0x4378() {
    const _0x38765c = [
        'ion',
        'fault',
        'status',
        '../../util',
        '__esModule',
        'contact',
        'tenantId',
        '789szdkrj',
        'getTime',
        'NG_MESSAGE',
        'getIO',
        '__importDe',
        'indexOf',
        'include',
        'logger',
        'writeFile',
        's/logger',
        '../../libs',
        'bPLNV',
        '/socket',
        'body',
        'wId',
        'map',
        'zcoGH',
        'all',
        'chat',
        'ticketId',
        '../../mode',
        'ticket',
        'findByPk',
        '23226MIYqCz',
        'update',
        'OffLine',
        '-notificat',
        'split',
        'mimetype',
        'HRiEl',
        'public',
        'ageOffLine',
        'toString',
        '-appMessag',
        '2176645BYjoFO',
        'defineProp',
        'ls/Message',
        '3474XdUEgT',
        '18ZnEXhw',
        '1261152WKUWXq',
        'substr',
        'mediaUrl',
        'default',
        'util',
        '590778abmXDC',
        'erty',
        'join',
        'value',
        'read',
        'lEUgZ',
        'error',
        'base64',
        'Service',
        'cFFOj',
        'mediaType',
        'userId',
        'ls/Ticket',
        'EWLBm',
        'path',
        'contactId',
        'create',
        '1192618uvydqA',
        'quotedMsg',
        'fKnQL',
        'filename',
        'emit',
        '40ZWvjhn',
        'ERR_CREATI',
        'lluzS',
        'CreateMess',
        'mZfIW',
        'fromMe',
        '9764870tLSSVr',
        'sJfHa',
        'buffer',
        'timestamp',
        'promisify'
    ];
    _0x4378 = function () {
        return _0x38765c;
    };
    return _0x4378();
}
function _0x2ad0(_0x378b70, _0x2e5734) {
    const _0xb7b3bf = _0x4378();
    return _0x2ad0 = function (_0x298add, _0x2bd70c) {
        _0x298add = _0x298add - (-0x2 * 0x312 + -0x11de + -0x1 * -0x196d);
        let _0x1097e3 = _0xb7b3bf[_0x298add];
        return _0x1097e3;
    }, _0x2ad0(_0x378b70, _0x2e5734);
}
const _0x1c4144 = _0x2ad0;
(function (_0x360644, _0x3e5ad8) {
    const _0x2e0710 = _0x2ad0, _0x480756 = _0x360644();
    while (!![]) {
        try {
            const _0x44e2e1 = -parseInt(_0x2e0710(0x192)) / (-0x19f3 + 0x7c1 + 0x1233) + -parseInt(_0x2e0710(0x1a0)) / (-0x1113 + -0x199 * 0x6 + 0x1aab) * (-parseInt(_0x2e0710(0x17b)) / (0xa17 + 0x492 * 0x8 + -0x2ea4)) + parseInt(_0x2e0710(0x1a2)) / (-0x84 * -0x6 + 0x2a * -0xb7 + -0x1af2 * -0x1) + -parseInt(_0x2e0710(0x19d)) / (0x2617 * 0x1 + 0x38d + -0x853 * 0x5) + -parseInt(_0x2e0710(0x1a1)) / (0x22dd + 0x3c4 + -0x1 * 0x269b) * (parseInt(_0x2e0710(0x1b8)) / (0x2387 * -0x1 + -0x5 * 0x562 + 0x3e78)) + parseInt(_0x2e0710(0x1bd)) / (-0x135 + 0x1 * -0x1b1f + 0x1c5c) * (-parseInt(_0x2e0710(0x1a7)) / (-0x2 * -0x8c3 + 0x53d * -0x1 + -0xc40)) + parseInt(_0x2e0710(0x16f)) / (0x21bf + 0x1a * 0xd + 0xbad * -0x3);
            if (_0x44e2e1 === _0x3e5ad8)
                break;
            else
                _0x480756['push'](_0x480756['shift']());
        } catch (_0x333086) {
            _0x480756['push'](_0x480756['shift']());
        }
    }
}(_0x4378, -0xd4f * 0x35 + -0x69a90 + -0x81e45 * -0x2));
var __importDefault = this && this[_0x1c4144(0x17f) + _0x1c4144(0x175)] || function (_0x4be7c5) {
    const _0x270fb4 = _0x1c4144;
    return _0x4be7c5 && _0x4be7c5[_0x270fb4(0x178)] ? _0x4be7c5 : { 'default': _0x4be7c5 };
};
const _0x1495eb = {};
_0x1495eb[_0x1c4144(0x1aa)] = !![], Object[_0x1c4144(0x19e) + _0x1c4144(0x1a8)](exports, _0x1c4144(0x178), _0x1495eb);
const fs_1 = require('fs'), util_1 = require(_0x1c4144(0x1a6)), path_1 = require(_0x1c4144(0x1b5)), logger_1 = require(_0x1c4144(0x177) + _0x1c4144(0x184)), MessageOffLine_1 = __importDefault(require(_0x1c4144(0x18f) + _0x1c4144(0x19f) + _0x1c4144(0x194))), socket_1 = require(_0x1c4144(0x185) + _0x1c4144(0x187)), Ticket_1 = __importDefault(require(_0x1c4144(0x18f) + _0x1c4144(0x1b3))), Message_1 = __importDefault(require(_0x1c4144(0x18f) + _0x1c4144(0x19f))), writeFileAsync = (0x2179 + 0x18b * 0xa + 0x56f * -0x9, util_1[_0x1c4144(0x173)])(fs_1[_0x1c4144(0x183)]), CreateMessageOffilineService = async ({
        msg: _0x5355b9,
        tenantId: _0x337de9,
        medias: _0x48535f,
        ticket: _0x2712d4,
        userId: _0x273e37
    }) => {
        const _0x3d3f07 = _0x1c4144, _0x57a1bf = {
                'bPLNV': function (_0x41ac05, _0x457691, _0x320d12, _0x4d747c) {
                    return _0x41ac05(_0x457691, _0x320d12, _0x4d747c);
                },
                'lluzS': _0x3d3f07(0x199),
                'cFFOj': _0x3d3f07(0x1ae),
                'HRiEl': _0x3d3f07(0x179),
                'lEUgZ': _0x3d3f07(0x190),
                'mZfIW': _0x3d3f07(0x1b9),
                'EWLBm': _0x3d3f07(0x1be) + _0x3d3f07(0x17d),
                'sJfHa': _0x3d3f07(0x1b7),
                'fKnQL': _0x3d3f07(0x18d),
                'zcoGH': _0x3d3f07(0x16c) + _0x3d3f07(0x19a) + _0x3d3f07(0x1af)
            }, _0x23348b = (-0xe43 + 0x57a + 0x8c9, socket_1[_0x3d3f07(0x17e)])(), _0x11f742 = {};
        _0x11f742[_0x3d3f07(0x189)] = undefined, _0x11f742[_0x3d3f07(0x18e)] = _0x2712d4['id'], _0x11f742[_0x3d3f07(0x188)] = _0x5355b9[_0x3d3f07(0x188)], _0x11f742[_0x3d3f07(0x1b6)] = _0x2712d4[_0x3d3f07(0x1b6)], _0x11f742[_0x3d3f07(0x16e)] = _0x5355b9[_0x3d3f07(0x16e)], _0x11f742[_0x3d3f07(0x1ab)] = !![], _0x11f742[_0x3d3f07(0x1b1)] = _0x57a1bf[_0x3d3f07(0x1ba)], _0x11f742[_0x3d3f07(0x1a4)] = undefined, _0x11f742[_0x3d3f07(0x172)] = undefined, _0x11f742[_0x3d3f07(0x1b2)] = _0x273e37;
        const _0x5f04f3 = _0x11f742;
        try {
            if (_0x48535f)
                await Promise[_0x3d3f07(0x18c)](_0x48535f[_0x3d3f07(0x18a)](async _0x22f6ff => {
                    const _0x21ff7c = _0x3d3f07;
                    try {
                        if (!_0x22f6ff[_0x21ff7c(0x1bb)]) {
                            const _0x212006 = _0x22f6ff[_0x21ff7c(0x197)][_0x21ff7c(0x196)]('/')[-0x1 * -0x797 + 0x1e3 * 0x9 + -0x1891][_0x21ff7c(0x196)](';')[-0x1b48 + 0x1 * -0x12da + 0x2e22];
                            _0x22f6ff[_0x21ff7c(0x1bb)] = new Date()[_0x21ff7c(0x17c)]() + '.' + _0x212006;
                        }
                        await _0x57a1bf[_0x21ff7c(0x186)](writeFileAsync, (0x145d + 0x2084 * 0x1 + -0x34e1, path_1[_0x21ff7c(0x1a9)])(__dirname, '..', '..', '..', '..', _0x57a1bf[_0x21ff7c(0x16b)], _0x22f6ff[_0x21ff7c(0x1bb)]), _0x22f6ff[_0x21ff7c(0x171)], _0x57a1bf[_0x21ff7c(0x1b0)]);
                    } catch (_0x266a46) {
                        logger_1[_0x21ff7c(0x182)][_0x21ff7c(0x1ad)](_0x266a46);
                    }
                    const _0x5ae763 = {
                            ..._0x5f04f3,
                            'mediaUrl': _0x22f6ff[_0x21ff7c(0x1bb)],
                            'mediaType': _0x22f6ff[_0x21ff7c(0x197)][_0x21ff7c(0x1a3)](0x1 * 0x1b5 + -0x32 * -0x2f + -0xae3, _0x22f6ff[_0x21ff7c(0x197)][_0x21ff7c(0x180)]('/'))
                        }, _0x196f43 = await MessageOffLine_1[_0x21ff7c(0x1a5)][_0x21ff7c(0x1b7)](_0x5ae763), _0x2f9830 = {};
                    _0x2f9830[_0x21ff7c(0x17a)] = _0x337de9;
                    const _0x72c22a = {};
                    _0x72c22a[_0x21ff7c(0x181)] = [
                        _0x57a1bf[_0x21ff7c(0x198)],
                        {
                            'model': Ticket_1[_0x21ff7c(0x1a5)],
                            'as': _0x57a1bf[_0x21ff7c(0x1ac)],
                            'where': _0x2f9830,
                            'include': [_0x57a1bf[_0x21ff7c(0x198)]]
                        },
                        {
                            'model': Message_1[_0x21ff7c(0x1a5)],
                            'as': _0x57a1bf[_0x21ff7c(0x16d)],
                            'include': [_0x57a1bf[_0x21ff7c(0x198)]]
                        }
                    ];
                    const _0xec9ecb = await MessageOffLine_1[_0x21ff7c(0x1a5)][_0x21ff7c(0x191)](_0x196f43['id'], _0x72c22a);
                    if (!_0xec9ecb)
                        throw new Error(_0x57a1bf[_0x21ff7c(0x1b4)]);
                    _0x23348b['to'](_0x337de9 + '-' + _0xec9ecb[_0x21ff7c(0x18e)][_0x21ff7c(0x19b)]())['to'](_0x337de9 + '-' + _0xec9ecb[_0x21ff7c(0x190)][_0x21ff7c(0x176)])['to'](_0x337de9 + (_0x21ff7c(0x195) + _0x21ff7c(0x174)))[_0x21ff7c(0x1bc)](_0x337de9 + (_0x21ff7c(0x19c) + 'e'), {
                        'action': _0x57a1bf[_0x21ff7c(0x170)],
                        'message': _0xec9ecb,
                        'ticket': _0xec9ecb[_0x21ff7c(0x190)],
                        'contact': _0xec9ecb[_0x21ff7c(0x190)][_0x21ff7c(0x179)]
                    }), await _0x2712d4[_0x21ff7c(0x193)]({
                        'lastMessage': _0xec9ecb[_0x21ff7c(0x188)],
                        'lastMessageAt': new Date()[_0x21ff7c(0x17c)]()
                    });
                }));
            else {
                const _0x4dafbd = { ..._0x5f04f3 };
                _0x4dafbd[_0x3d3f07(0x1b1)] = _0x57a1bf[_0x3d3f07(0x1ba)];
                const _0x44e545 = await MessageOffLine_1[_0x3d3f07(0x1a5)][_0x3d3f07(0x1b7)](_0x4dafbd), _0x363dc8 = {};
                _0x363dc8[_0x3d3f07(0x17a)] = _0x337de9;
                const _0x15f6a3 = {};
                _0x15f6a3[_0x3d3f07(0x181)] = [
                    _0x57a1bf[_0x3d3f07(0x198)],
                    {
                        'model': Ticket_1[_0x3d3f07(0x1a5)],
                        'as': _0x57a1bf[_0x3d3f07(0x1ac)],
                        'where': _0x363dc8,
                        'include': [_0x57a1bf[_0x3d3f07(0x198)]]
                    },
                    {
                        'model': Message_1[_0x3d3f07(0x1a5)],
                        'as': _0x57a1bf[_0x3d3f07(0x16d)],
                        'include': [_0x57a1bf[_0x3d3f07(0x198)]]
                    }
                ];
                const _0x3db985 = await MessageOffLine_1[_0x3d3f07(0x1a5)][_0x3d3f07(0x191)](_0x44e545['id'], _0x15f6a3);
                if (!_0x3db985)
                    throw new Error(_0x57a1bf[_0x3d3f07(0x1b4)]);
                await _0x2712d4[_0x3d3f07(0x193)]({
                    'lastMessage': _0x3db985[_0x3d3f07(0x188)],
                    'lastMessageAt': new Date()[_0x3d3f07(0x17c)]()
                }), _0x23348b['to'](_0x337de9 + '-' + _0x3db985[_0x3d3f07(0x18e)][_0x3d3f07(0x19b)]())['to'](_0x337de9 + '-' + _0x3db985[_0x3d3f07(0x190)][_0x3d3f07(0x176)])['to'](_0x337de9 + (_0x3d3f07(0x195) + _0x3d3f07(0x174)))[_0x3d3f07(0x1bc)](_0x337de9 + (_0x3d3f07(0x19c) + 'e'), {
                    'action': _0x57a1bf[_0x3d3f07(0x170)],
                    'message': _0x3db985,
                    'ticket': _0x3db985[_0x3d3f07(0x190)],
                    'contact': _0x3db985[_0x3d3f07(0x190)][_0x3d3f07(0x179)]
                });
            }
        } catch (_0x13e02b) {
            logger_1[_0x3d3f07(0x182)][_0x3d3f07(0x1ad)](_0x57a1bf[_0x3d3f07(0x18b)], _0x13e02b);
        }
    };
exports[_0x1c4144(0x1a5)] = CreateMessageOffilineService;