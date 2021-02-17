require(["esri/views/MapView", "esri/WebMap"], function(MapView, WebMap) {
        
        var webmap = new WebMap({
          portalItem: {
            // autocasts as new PortalItem()
            id: "58f20c17b62d474b87781ea7513ebc53"
          }
        });
        
  
        var view = new MapView({
          map: webmap,
          container: "viewDiv"
        });
      });
