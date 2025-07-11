 sap.ui.define([
    "sap/dm/dme/podfoundation/extension/PluginExtensionProvider",
    "myk/plugins/mykexampleplugin/dataCollectionEntryExtensionProvider/LifecycleExtension",
    "myk/plugins/mykexampleplugin/dataCollectionEntryExtensionProvider/PluginEventExtension",
    "myk/plugins/mykexampleplugin/dataCollectionEntryExtensionProvider/PropertyEditorExtension",
    "myk/plugins/mykexampleplugin/utils/ExtensionUtilities"
], function (PluginExtensionProvider, LifecycleExtension, PluginEventExtension, 
             PropertyEditorExtension, ExtensionUtilities) {
    "use strict";
    return PluginExtensionProvider.extend("myk/plugins/mykexampleplugin.dataCollectionEntryExtensionProvider.ExtensionProvider", {
        constructor: function () {
            this.oExtensionUtilities = new ExtensionUtilities();
        },
        getExtensions: function () {
           return [
               new LifecycleExtension(this.oExtensionUtilities),
               new PluginEventExtension(this.oExtensionUtilities),
               new PropertyEditorExtension(this.oExtensionUtilities)
           ];
        }
    })
});
