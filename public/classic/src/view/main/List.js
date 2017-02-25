/**
 * This view is an example list of people.
 */
Ext.define('Demo.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Demo.store.SearchResult'
    ],

    hideHeaders:true,

    store: {
        type: 'searchresult'
    },

    columns: [
        { text: 'Text',  dataIndex: 'text', flex: 1  }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
