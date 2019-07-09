let mapOptions = {
  map: {
    source: "wiki",
    style: {
      background: "#FFFFFF"
    },
    marker: {
      enabled: true,
      maxOnScreen: 1000,
      ttl: 0,
      minDisplayTime: 0,
      style: {
        colour: "#45A8D6",
        opacity: 0.2,
        stroke: {
          colour: "#45A8D6",
          width: 2,
          opacity: 0.8
        },
        radius: 8
      }
    },
    popup: {
      enabled: true,
      maxOnScreen: 5,
      ttl: 15,
      minDisplayTime: 5
    },
    default: {
      coordinates: {
        lat: 55.00366,
        lon: -2.547855,
      },
      zoom: 6.2
    },
    api: {
      bing: "AogIhohUQ1o7v7zTSZD2OM1eaiWAFdUjMGawqm1VUQLJKUFf2KYXS2HbsH5i-IPH"
    }
  },
  demoMode: true
};

window.map = new DMap(mapOptions);

if (mapOptions.demoMode) {
  map.map.on('singleclick', function(evt) {
    let coords = map.functions.toLonLat(evt.coordinate);
    testSale.shipping.lon = coords[0];
    testSale.shipping.lat = coords[1];
    testSale.orderNumber = Math.floor((Math.random() * 100000) + 1);
    map.addFeature(testSale);
  });
}

function loadGraph(id, data) {
  let max = data.target + (data.target * 0.25);
  if (data.value > max) {
    max = data.value;
  }

  window[id] = new JustGage({
    id: id,
    value: data.value,
    min: 0,
    max: max,
    target: data.target,
    pointer: true,
    targetPointer: true,
    targetPointerOptions: {
      toplength: -15,
      bottomlength: 3,
      bottomwidth: 3,
      color: '#f9c802'
    },
    animateTarget: false,
    gaugeWidthScale: 0.6,
    counter: true,
    relativeGaugeSize: true,
    noGradient: true,
    customSectors : {
      ranges: [{
        "lo": 0,
        "hi": data.target-1,
        "color": "#f9c802"
      }, {
        "lo": data.target,
        "hi": max,
        "color": "#3aa914"
      }]
    }
  });
}

let graphData = {
  value: 150,
  target: 300
};

loadGraph("sales", graphData);
loadGraph("revenue", graphData);
