/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Demo.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    onItemSelected: function (sender, record) {
        //Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
        Ext.getCmp('main').removeAll();
        Ext.getCmp('main').add (
            {
           loader: {
               url: "/ksana/getText",
               renderer: function(loader, response, active) {
                   var data = JSON.parse(response.responseText);
                   data.lines[data.hitIndex]=Ext.String.format("<mark>{0}</mark>",data.lines[data.hitIndex]);
                   loader.getTarget().setHtml(
                       Ext.String.format("<strong>{0}</strong><pre>{1}</pre>",data.title,data.lines.join("\n"))
                   );
                   return true;
               },
               autoLoad: true,
               params: {
                   hits: record.data.hits
               }
           }
        });
    },
    onSearchClick:function(sender){
        var storeSearch = Ext.data.StoreManager.lookup('sSearch');

        storeSearch.reload({
            params : {
                searchtext : this.getViewModel().data.searchtext
            }
        });

    },
    onSearchEnter:function (field, e) {
        if(e.getKey() == e.ENTER)
        {
            var storeSearch = Ext.data.StoreManager.lookup('sSearch');

            storeSearch.reload({
                params : {
                    searchtext : this.getViewModel().data.searchtext
                }
            });
        }
    },
    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
