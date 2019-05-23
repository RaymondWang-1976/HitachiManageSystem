
/* JavaScript content from app/view/MyProcess/InformationTechnology/Permissions.js in folder common */
/*
 * File: app/view/IT_Permissions.js
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

Ext.define('HelcOA.view.MyProcess.InformationTechnology.Permissions', {
    extend: 'Ext.Panel',
    id: 'wdlc_Permissions_ID',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.Label',
        'Ext.field.Select',
        'Ext.field.TextArea'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                id: 'wdlc_surface_ID',
                title: '用户权限申请流程',
                items: [
                        {
                        xtype: 'button',
                        id: 'wdlc_returnMyProcess',
                        ui: 'back',
                        text: '返回'
                    }
                ]
            },
            {
                xtype: 'formpanel',
                id: 'fp',
                flex: 1,
                items: [
                    {
                        xtype: 'fieldset',
                        instructions: '',
                        title: '',
                        items: [
                            {
                                xtype: 'label',
                                html: '此流程只适用于用户权限的新增/变更的申请并且需简述清楚申请权限职能和原因，不适用于系统登陆账号申请，如要申请开通系统账号，请通过<系统网络帐号权限申请>电子流程进行申请即可。 <p/>如对本流程有任何疑问请致信息中心020-39908380(分机8380) 黎展亮。<p/>温馨提示：联系电话的填写，请分公司人员加手机号。',
                                style: 'color:red;text-indent:2em'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '',
                        items: [
                            {
                                xtype: 'textfield',
                                id: 'fileno',
                                label: '编号',
                                labelWidth: '40%',
                                name: 'fileno'
                            },
                            {
                                xtype: 'textfield',
                                id: 'subject',
                                label: '标题',
                                labelWidth: '40%',
                                name: 'subject',
                                required: true
                            },
                            {
                                xtype: 'textfield',
                                id: 'agentman',
                                label: '申请人',
                                labelWidth: '40%',
                                name: 'agentman'
                            },
                            {
                                xtype: 'textfield',
                                id: 'createdate',
                                label: '申请时间',
                                labelWidth: '40%',
                                name: 'createdate'
                            },
                            {
                                xtype: 'textfield',
                                id: 'dept',
                                label: '申请部门',
                                labelWidth: '40%',
                                name: 'dept'
                            },
                            {
                                xtype: 'textfield',
                                id: 'phone',
                                label: '联系电话',
                                labelWidth: '40%',
                                name: 'phone',
                                required: true
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '',
                        items: [
                            {
                                xtype: 'selectfield',
                                id: 'sqtype',
                                label: '申请类型',
                                labelWidth: '40%',
                                name: 'sqtype',
                                placeHolder: '请选择申请类型',
                                options: [
                                          {
      									    text: '',
      									    value: ''
      									},{
      									    text: '新增',
      									    value: '新增'
      									},{
      									    text: '变更',
      									    value: '变更'
      									},{
      									    text: '取消',
      									    value: '取消'
      									}
      								]
                            },
                            {
                                xtype: 'selectfield',
                                id: 'sysname',
                                label: '系统名称',
                                labelWidth: '40%',
                                name: 'sysname',
                                required: true,
                                placeHolder: '请选择系统名称',
                                options: [
                                          {
      									    text: '',
      									    value: ''
      									},{
      									    text: 'edoc文档系统',
      									    value: 'edoc文档系统'
      									},{
      									    text: 'OA系统',
      									    value: 'OA系统'
      									},{
      									    text: '新版通用查询',
      									    value: '新版通用查询'
      									},{
      									    text: '物资检验系统',
      									    value: '物资检验系统'
      									},{
      									    text: '医疗管理系统',
      									    value: '医疗管理系统'
      									},{
      									    text: '井道图系统(HEDS)',
      									    value: '井道图系统(HEDS)'
      									},{
      									    text: 'Windchill(PLM)',
      									    value: 'Windchill(PLM)'
      									},{
      									    text: '技术联络单系统（HEDS工厂部分）',
      									    value: '技术联络单系统（HEDS工厂部分）'
      									},{
      									    text: '技术联络单系统（HEDS营业部分）',
      									    value: '技术联络单系统（HEDS营业部分）'
      									},{
      									    text: '培训考试系统',
      									    value: '培训考试系统'
      									},{
      									    text: '日立电梯ERP系统',
      									    value: '日立电梯ERP系统'
      									},{
      									    text: 'RDMP研发管理平台',
      									    value: 'RDMP研发管理平台'
      									},{
      									    text: 'HEDS系统',
      									    value: 'HEDS系统'
      									},{
      									    text: 'Siebel系统（售前）',
      									    value: 'Siebel系统（售前）'
      									},{
      									    text: 'Siebel系统（售后）',
      									    value: 'Siebel系统（售后）'
      									},{
      									    text: '公司主页（www.hitachi-helc.com）',
      									    value: '公司主页（www.hitachi-helc.com）'
      									},{
      									    text: '财务预算系统',
      									    value: '财务预算系统'
      									},{
      									    text: '网络磁盘扩容',
      									    value: '网络磁盘扩容'
      									},{
      									    text: '网络文件夹权限',
      									    value: '网络文件夹权限'
      									},{
      									    text: '公用资源文件夹权限',
      									    value: '公用资源文件夹权限'
      									},{
      									    text: 'VPN系统',
      									    value: 'VPN系统'
      									},{
      									    text: 'XenApp系统',
      									    value: 'XenApp系统'
      									},{
      									    text: 'Xendesktop系统',
      									    value: 'Xendesktop系统'
      									},{
      									    text: 'E-HR系统',
      									    value: 'E-HR系统'
      									},{
      									    text: '单点登录系统',
      									    value: '单点登录系统'
      									}
      								]
                            },
                            {
                                xtype: 'textfield',
                                id: 'usedep',
                                label: '使用人部门',
                                labelWidth: '40%',
                                name: 'usedep',
                                required: true
                            },
                            {
                                xtype: 'textfield',
                                id: 'gangwei',
                                label: '使用人岗位',
                                labelWidth: '40%',
                                name: 'gangwei',
                                required: true
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '申请权限简述*',
                        items: [
                            {
                                xtype: 'textareafield',
                                id: 'sqyy1_textarea',
                                label: '简述',
                                labelWidth: '40%',
                                name: 'sqyy1_textarea',
                                required: true
                            }
                        ]
                    }, {
						xtype : 'fieldset',
						hidden : true,
						items : [ {
							xtype : 'textfield',
							id : 'conds',
							value : 'nocon',
							name : 'conds'
						}, {
							xtype : 'textfield',
							id : 'userid',
							name : 'userid'
						}, {
							xtype : 'textfield',
							id : 'type',
							name : 'type'
						}, {
							xtype : 'textfield',
							id : 'username',
							name : 'username'
						}, {
							xtype : 'textfield',
							id : 'node',
							name : 'node'
						}, {
							xtype : 'textfield',
							id : 'ctime',
							name : 'ctime'
						}, {
							xtype : 'textfield',
							id : 'piid',
							name : 'piid'
						}, {
							xtype : 'textfield',
							id : 'processname',
							name : 'processname'
						}, {
							xtype : 'textfield',
							id : 'curauthor',
							name : 'curauthor'
						}, {
							xtype : 'textfield',
							id : 'dealmen',
							name : 'dealmen'
						}, {
							xtype : 'textfield',
							id : 'ygbh',
							name : 'ygbh'
						}, {
							xtype : 'textfield',
							id : 'form',
							name : 'form'
						}, {
							xtype : 'textfield',
							id : 'arcpath',
							name : 'arcpath'
						}, {
							xtype : 'textfield',
							id : 'arcdate',
							name : 'arcdate'
						}, {
							xtype : 'textfield',
							id : 'endprocessdate',
							name : 'endprocessdate'
						},{
							xtype : 'textfield',
							id : 'taskid',
							name : 'taskid'
						}, {
							xtype : 'textfield',
							id : 'pi_flag',
							name : 'pi_flag'
						}, {
							xtype : 'textfield',
							id : 'cfg_id',
							name : 'cfg_id'
						}, {
							xtype : 'textfield',
							id : 'createflag',
							name : 'createflag'
						},{
							xtype : 'textfield',
							id : 'audit_list',
							name : 'audit_list'
						},{
							xtype : 'textfield',
							id : 'mast',
							name : 'mast'
						},{
							xtype : 'textfield',
							id : 'ext1',
							name : 'ext1'
						},{
							xtype : 'textfield',
							id : 'managermen',
							name : 'managermen'
						}]
					}
                ]
            }
        ]
    }

});