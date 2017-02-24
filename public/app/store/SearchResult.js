Ext.define('Demo.store.SearchResult', {
    extend: 'Ext.data.Store',
    alias: 'store.searchresult',
    storeId:'sSearch',
    model:'Demo.model.SearchResult',

    proxy: {
        type: 'ajax',
        url: '/ksana/search',
        reader: {
            type: 'json'
        }
    }
});
