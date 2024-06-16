'use strict';
const _0x3f5fe5 = _0x4351;
function _0x1844() {
    const _0x3b2780 = [
        '674184JbZSHT',
        'Whatsapps',
        '__esModule',
        'VJZLr',
        'value',
        'XPTZO',
        '_uuid()',
        '1018TbxbAl',
        'SET\x20NULL',
        '7319697jXzgWA',
        'Tenants',
        '4104530byEBDy',
        'PphtS',
        'Sequelize',
        'Users',
        'CASCADE',
        'all',
        'dropTable',
        'CQCan',
        'DATE',
        'EQkhf',
        'CzLnL',
        'exports',
        '8oIYBwx',
        'UUID',
        '3655180BNtmLL',
        'fPcnY',
        'createTabl',
        '281223HZNdKh',
        'INTEGER',
        'literal',
        'erty',
        'DataTypes',
        'TEXT',
        'sequelize',
        '18809560xaCgDh',
        'defineProp',
        '6yFkVTQ',
        'ZfEOS',
        'STRING',
        'gen_random',
        'BOOLEAN',
        'ApiConfigs',
        'isUrl',
        '523jbcTbv'
    ];
    _0x1844 = function () {
        return _0x3b2780;
    };
    return _0x1844();
}
function _0x4351(_0x2c5e0c, _0x361faf) {
    const _0x29e2a5 = _0x1844();
    return _0x4351 = function (_0x238b7f, _0x29b8b8) {
        _0x238b7f = _0x238b7f - (-0xee3 + -0x205a + 0x48 * 0xad);
        let _0x50697a = _0x29e2a5[_0x238b7f];
        return _0x50697a;
    }, _0x4351(_0x2c5e0c, _0x361faf);
}
(function (_0x42a2d3, _0xd17b2b) {
    const _0x4d516c = _0x4351, _0x143350 = _0x42a2d3();
    while (!![]) {
        try {
            const _0x19ef7f = parseInt(_0x4d516c(0x16f)) / (0x1 * -0x255f + 0x625 + 0x1f3b) * (-parseInt(_0x4d516c(0x177)) / (0x207d + -0x12e * 0x18 + -0x42b)) + -parseInt(_0x4d516c(0x170)) / (0x2403 + -0x455 * 0x7 + -0x5ad) + -parseInt(_0x4d516c(0x189)) / (0x923 + 0x60a * -0x2 + 0x2f5) + -parseInt(_0x4d516c(0x17b)) / (0x174d * 0x1 + 0x1a52 + -0x319a) + -parseInt(_0x4d516c(0x195)) / (-0xabe + 0x270e + -0xd5 * 0x22) * (-parseInt(_0x4d516c(0x179)) / (0x350 + 0x1 * 0xad5 + -0xe1e)) + parseInt(_0x4d516c(0x187)) / (0x1 * 0x14fd + 0x93b * 0x1 + 0x284 * -0xc) * (-parseInt(_0x4d516c(0x18c)) / (0x2452 * -0x1 + 0x3fb + -0x103 * -0x20)) + parseInt(_0x4d516c(0x193)) / (-0x20ac + 0xccb + 0x13eb);
            if (_0x19ef7f === _0xd17b2b)
                break;
            else
                _0x143350['push'](_0x143350['shift']());
        } catch (_0x54ef52) {
            _0x143350['push'](_0x143350['shift']());
        }
    }
}(_0x1844, 0x1178c0 + -0x104e14 + 0x90d84));
const _0xc89ddc = {};
_0xc89ddc[_0x3f5fe5(0x174)] = !![], Object[_0x3f5fe5(0x194) + _0x3f5fe5(0x18f)](exports, _0x3f5fe5(0x172), _0xc89ddc);
const sequelize_1 = require(_0x3f5fe5(0x192));
module[_0x3f5fe5(0x186)] = {
    'up': _0x2c9d74 => {
        const _0x286677 = _0x3f5fe5, _0xf242ad = {};
        _0xf242ad[_0x286677(0x18a)] = _0x286677(0x16d), _0xf242ad[_0x286677(0x196)] = _0x286677(0x16b) + _0x286677(0x176), _0xf242ad[_0x286677(0x182)] = _0x286677(0x171), _0xf242ad[_0x286677(0x17c)] = _0x286677(0x17f), _0xf242ad[_0x286677(0x184)] = _0x286677(0x178), _0xf242ad[_0x286677(0x173)] = _0x286677(0x17e), _0xf242ad[_0x286677(0x175)] = _0x286677(0x17a);
        const _0x334bbd = _0xf242ad, _0x55bfaf = {};
        _0x55bfaf[_0x286677(0x16e)] = !![];
        const _0x200d2f = {};
        return _0x200d2f[_0x286677(0x16e)] = !![], Promise[_0x286677(0x180)]([_0x2c9d74[_0x286677(0x18b) + 'e'](_0x334bbd[_0x286677(0x18a)], {
                'id': {
                    'allowNull': ![],
                    'primaryKey': !![],
                    'type': sequelize_1[_0x286677(0x190)][_0x286677(0x188)],
                    'defaultValue': sequelize_1[_0x286677(0x17d)][_0x286677(0x18e)](_0x334bbd[_0x286677(0x196)])
                },
                'sessionId': {
                    'type': sequelize_1[_0x286677(0x190)][_0x286677(0x18d)],
                    'references': {
                        'model': _0x334bbd[_0x286677(0x182)],
                        'key': 'id'
                    },
                    'onUpdate': _0x334bbd[_0x286677(0x17c)],
                    'onDelete': _0x334bbd[_0x286677(0x184)]
                },
                'name': {
                    'type': sequelize_1[_0x286677(0x190)][_0x286677(0x197)],
                    'allowNull': ![],
                    'defaultValue': ''
                },
                'isActive': {
                    'type': sequelize_1[_0x286677(0x190)][_0x286677(0x16c)],
                    'allowNull': ![],
                    'defaultValue': !![]
                },
                'token': {
                    'type': sequelize_1[_0x286677(0x190)][_0x286677(0x197)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'userId': {
                    'type': sequelize_1[_0x286677(0x190)][_0x286677(0x18d)],
                    'references': {
                        'model': _0x334bbd[_0x286677(0x173)],
                        'key': 'id'
                    },
                    'onUpdate': _0x334bbd[_0x286677(0x17c)],
                    'onDelete': _0x334bbd[_0x286677(0x184)]
                },
                'tenantId': {
                    'type': sequelize_1[_0x286677(0x190)][_0x286677(0x18d)],
                    'references': {
                        'model': _0x334bbd[_0x286677(0x175)],
                        'key': 'id'
                    },
                    'onUpdate': _0x334bbd[_0x286677(0x17c)],
                    'onDelete': _0x334bbd[_0x286677(0x17c)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'urlServiceStatus': {
                    'type': sequelize_1[_0x286677(0x190)][_0x286677(0x191)],
                    'allowNull': !![],
                    'defaultValue': null,
                    'validate': _0x55bfaf
                },
                'urlMessageStatus': {
                    'type': sequelize_1[_0x286677(0x190)][_0x286677(0x191)],
                    'allowNull': !![],
                    'defaultValue': null,
                    'validate': _0x200d2f
                },
                'createdAt': {
                    'type': sequelize_1[_0x286677(0x190)][_0x286677(0x183)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[_0x286677(0x190)][_0x286677(0x183)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': _0x2cf557 => {
        const _0x3a1982 = _0x3f5fe5, _0x2b55d5 = {};
        _0x2b55d5[_0x3a1982(0x185)] = _0x3a1982(0x16d);
        const _0x25e5b5 = _0x2b55d5;
        return Promise[_0x3a1982(0x180)]([_0x2cf557[_0x3a1982(0x181)](_0x25e5b5[_0x3a1982(0x185)])]);
    }
};