/*
 * File: app/view/MyPanel19.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */
/**
 * 安装计划之查询-工号列表
 * 2014-4-29 xcx
 */


Ext.define('HelcPDA.view.install.installplan.InstallPlanMPidQuery', {
    extend: 'Ext.Panel',
    id:'installplan_MQ',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '安装计划查询－工号列表',
                items: [
                    {
                        xtype: 'button',
                        id:'installPlanMPQ_FH_Button',
                        ui: 'back',
                        text: '返回'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        id:'installplan_MQ_YOU_ID',
                        handler: function(button, e) {
                            var menu = Ext.create('Ext.Menu', {
                                items: [
                                {
                                	xtype: 'button',
                                    text: '待提交',
                                    iconCls: 'refresh',
                                    id:'installplan_MQ_JRDTJ',
                                    handler:function(button,e){
                                    	Ext.Viewport.hideMenu('right');
                                    },
                                },{
                                	xtype: 'button',
                                	id:'installplanMQ_PLButton',
                                	iconCls: 'refresh',
                                	text: '批量',
                                	handler:function(button,e){
                                     	Ext.Viewport.hideMenu('right');
                                     },
                                }
                                ]
                            });
                            Ext.Viewport.setMenu(menu, {
                                side: 'right',
                                reveal: false
                            });
                            Ext.Viewport.showMenu('right');
                        },
                        itemId: 'mybutton7',
                        iconCls: 'more',
                        text: ''
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        id:'installplanMQ_PAZZYButton',
                        text: '批安装资源' 
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        id:'installplanMQ_QXButton',
                        text: '全选'
                    },
                    {
                        xtype: 'button',
                        id:'installplanMQ_FXButton',
                        text: '反选'
                    },
                    {
                    	//用于提交按钮的 合同号
        				xtype:'hiddenfield',
        				id:'PLselectHTH',
        			},
                    {
        				//用于获取选中数据仓的下标
        				xtype:'hiddenfield',
        				id:'newXb',
        			},
                    {
        				//用于批量判断是否直梯和扶梯
        				xtype:'hiddenfield',
        				id:'PLtzType',
        			},
                    {
        				//判断是批量还是单个
        				xtype:'hiddenfield',
        				id:'plnum',
        			},
                    {
        				//批量添加 用的数组
        				xtype:'hiddenfield',
        				id:'INSTALLPLTJ',
        			},
                    {
        				//单个添加 用的JSONStore条件
        				xtype:'hiddenfield',
        				id:'installaddDGTJ',
        			},{
        				//用于记录是从批量安装资源退出还是单个安装资源退出
        				xtype:'hiddenfield',
        				id:'installplan_AZZYLR_Ctrl_num',
        			}
                ]
            },
            {
                xtype: 'list',
                store:'HelIntTasksAllStoreTwo',
                id: 'MPid_mylist',
                height: '100%',
                itemTpl: [
                    '<table border=0 width=100% style="color:#666">',
                    '  <tr>',
                    '    <td width=10% rowspan="2">',
                    '	<div name="groupCheckboxinstall" class="p_judge_box" id="pid" style="color:{color};">3</div>',
                    //'      <span style="background:green;color:white;padding:3px;"><input id="pid" name="installPlangroupCheckbox" type="checkbox" /></span>',
                    '    </td>',
                    '      <td width=50% style="color:#000;height:32px">{ELEVATOR_NO}</td>',
                    '    <td width=40% style="text-align: right"><span style="margin-left:5px;background:green;color:white;border:green 2px solid;">{STATUS}</span></td>',
                    '  </tr>',
                    '  <tr>',
                    '      <td>{ELEVATOR_CLASS_NAME}/ 版本号:{VERSION_NUM}</td>',
                    '      <input type="hidden" name="install_ENGCONTRACT_NUMBER" value="{ENGCONTRACT_NUMBER}"> ',
                  /*  //批量资源录入用
                    '      <input type="hidden" name="install_TASK_PROCESS_ID" value="{TASK_PROCESS_ID}"> ',
                    '      <input type="hidden" name="install_TASK_ID" value="{TASK_ID}"> ',*/
                    //s
                    '    <td style="text-align: right">批次 {SEQ_NUM}</td>',
                   /* '    <span id="installQD" style="background:green;color:white;padding:3px;">确定</span>',*/
                    '  </tr>',
                    '</table>'
                ]
            }
        ],
        /*listeners: [
                    {
                        fn: 'installPMPQ_FXK',
                        event: 'itemtap',
                        delegate: '#MPid_mylist'
                    }
         ]*/
    },
    
/*    installPMPQ_FXK: function(dataview, index, target, record, e, eOpts) {
        if(e.target.id==='pid')
        {
            if(record.get('sel')==='0')
            {
                record.set('sel','1');
                record.set('color','#ccc');
            }
            else
            {
                record.set('sel','0');
                record.set('color','#e03a3e');
            }
        }
}   */


});