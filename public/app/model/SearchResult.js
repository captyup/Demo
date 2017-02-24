Ext.define('Demo.model.SearchResult', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'text', type: 'auto' },
        { name: 'hits', type: 'auto' },
        { name: 'group', type: 'auto' }

    ]
});
