/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Demo.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: '月光大藏經',
        searchtext:'剎那定者',
        text:{searchtitle:'搜尋',menutitle:'選單'}
    }

    //TODO - add data, formulas and/or methods to support your view
});
