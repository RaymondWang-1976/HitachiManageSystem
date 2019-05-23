/*
 * File: app/store/Lifecycle_Elevator_List.js
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

Ext.define('HelcRemote.store.Lifecycle_Elevator_List', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json',
        'Ext.data.Field'
    ],

    config: {
        storeId: 'Lifecycle_Elevator_List',
        proxy: {
            type: 'jsonp',
            reader: {
                type: 'json',
                idProperty: 'asset_num',
                rootProperty: 'data'
            }
        },
        listeners: [
            {
                fn: 'onJsonpstoreBeforeLoad',
                event: 'beforeload'
            }
        ],
        fields: [
            {
                name: 'elevator_code'
            },
            {
                name: 'lifecycle_node'
            }
        ]
    },

    onJsonpstoreBeforeLoad: function(store, operation, eOpts) {
        var url = 'http://' + remote.getCmsIP() + '/YL_SCDG/hitachi/rmonitor/getLifeCycleElevatorListByDomain.do';
        url = url + '?customer_name=' + this.parm.customer_name + '&domain_name=' + this.parm.domain_name;
        store.getProxy().setUrl(encodeURI(url));
        // console.log(store.getProxy().getUrl());
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;

        // 生命周期->区域->分公司->客户+楼盘->工号
        var me = this;

        if(global.isWorklight()) {
            me.parm = parm;
            me.load();
        } else {
            this.setData([
                {elevator_code:'11G027404',lifecycle_node:'未知'},
                {elevator_code:'11G027405',lifecycle_node:'未知'},
                {elevator_code:'11G027406',lifecycle_node:'未知'},
                {elevator_code:'11G027407',lifecycle_node:'未知'},
                {elevator_code:'11G027404',lifecycle_node:'未知'},
                {elevator_code:'11G027405',lifecycle_node:'未知'},
                {elevator_code:'11G027406',lifecycle_node:'未知'},
                {elevator_code:'11G027407',lifecycle_node:'未知'},
                {elevator_code:'11G027404',lifecycle_node:'未知'},
                {elevator_code:'11G027405',lifecycle_node:'未知'},
                {elevator_code:'11G027406',lifecycle_node:'未知'},
                {elevator_code:'11G027407',lifecycle_node:'未知'},
                {elevator_code:'11G027404',lifecycle_node:'未知'},
                {elevator_code:'11G027405',lifecycle_node:'未知'},
                {elevator_code:'11G027406',lifecycle_node:'未知'},
                {elevator_code:'11G027407',lifecycle_node:'未知'},
            ]);
            onSuccess();
        }
    }

});