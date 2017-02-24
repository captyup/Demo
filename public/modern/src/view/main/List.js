/**
 * This view is an example list of people.
 */
Ext.define('Demo.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'Demo.store.SearchResult'
    ],

    title: 'SearchResult',

    store: {
        type: 'searchresult'
    },

    columns: [
        { text: 'Title',  dataIndex: 'title', flex: 2  },
        { text: 'Text',  dataIndex: 'text', flex: 2  },
        { text: 'Hits', dataIndex: 'hits', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
