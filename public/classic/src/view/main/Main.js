/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Demo.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Ext.layout.container.Border',
        'Demo.view.main.MainController',
        'Demo.view.main.MainModel',
        'Demo.view.main.List'
    ],
    title:'月光',
    controller: 'main',
    viewModel: 'main',

    layout: 'border',
    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 10
    },
    items:[
        {
            title: 'Menu',
            region:'west',
            floatable: false,
            margin: '5 0 0 0',
            width: 125,
            minWidth: 100,
            maxWidth: 250,
            collapsed:true
        },
        {
            id:'main',
            title: 'Main Content',
            collapsible: false,
            region: 'center',
            margin: '5 0 0 0',
            scrollable:true
        },
        {
            title: 'Search',
            region: 'east',
            margin: '5 0 0 0',
            width: 250,
            items:[
                {
                    name:'searchtext',
                    xtype:'textfield',
                    bind:{
                        value:'{searchtext}'
                    },
                    listeners:{
                        specialkey:'onSearchEnter'
                    }
                },
                {
                    xtype:'button',
                    text:'搜尋',
                    listeners: {
                        click: 'onSearchClick'
                    }
                },
                {
                    xtype: 'mainlist',
                    height: 500,
                    scrollable:true
                }
            ]
        }
    ]
});
