(function() {
    "use strict";

    var WeVote = window.WeVote = { };
    
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    $(function() {
        WeVote.app = new DevExpress.framework.html.HtmlApplication({
            namespace: WeVote,
            
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
                title: "Exercise",
                action: "#exercise",
                icon: "event"
              },
              {
                title: "Settings",
                action: "#settings",
                icon: "preferences"
              }
            ]
        });
        
        WeVote.app.router.register(":view", { view: "login" });
        WeVote.app.navigate();
    });
    
})();