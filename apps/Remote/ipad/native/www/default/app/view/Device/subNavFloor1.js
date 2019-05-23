
/* JavaScript content from app/view/Device/subNavFloor1.js in folder common */
/*
 * File: app/view/Device/subNavFloor1.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HelcRemote.view.Device.subNavFloor1', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Panel',
        'Ext.Label',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        id: 'Device_subNavFloor1',
        itemId: 'Device_subNavFloor1',
        layout: 'vbox',
        items: [
            {
                xtype: 'panel',
                cls: 'remote-breadCrumbMini',
                docked: 'top',
                items: [
                    {
                        xtype: 'label',
                        cls: 'remote-breadCrumb-con',
                        html: '1楼大堂'
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 1,
                cls: 'remote-leftsideBar',
                docked: 'left',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'list',
                        flex: 1,
                        data: [
                            {
                                text: '系统控制'
                            },
                            {
                                text: '音量控制'
                            },
                            {
                                text: '技术展示区灯光'
                            },
                            {
                                text: '轿厢区灯光'
                            },
                            {
                                text: '通道灯光'
                            },
                            
                        ],
                        id: 'device_ListNavFloor1',
                        itemTpl: [
                            '<div>{text}</div>'
                        ]
                    }
                ]
            }
        ]
    }

});