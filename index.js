(function() {
    "use strict";

    var MyApp = window.MyApp = { };
    
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    $(function() {
        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,
            
            navigationType: "navbar",
            navigation: [
              {
                title: "Overview",
                action: "#overview",
                icon: "info"
              },
              {
                title: "Create",
                action: "#createlecture",
                icon: "add"
              },
              {
                title: "Calendar",
                action: "#calendar",
                icon: "event"
              }
            ]
        });
        
        MyApp.app.router.register(":view", { view: "overview" });
        MyApp.app.navigate();
    });
    
})();