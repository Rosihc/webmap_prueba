var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_albergues_bcs_2020_1 = new ol.format.GeoJSON();
var features_albergues_bcs_2020_1 = format_albergues_bcs_2020_1.readFeatures(json_albergues_bcs_2020_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_albergues_bcs_2020_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_albergues_bcs_2020_1.addFeatures(features_albergues_bcs_2020_1);cluster_albergues_bcs_2020_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_albergues_bcs_2020_1
});
var lyr_albergues_bcs_2020_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_albergues_bcs_2020_1, 
                style: style_albergues_bcs_2020_1,
                interactive: true,
                title: '<img src="styles/legend/albergues_bcs_2020_1.png" /> albergues_bcs_2020'
            });

lyr_OSMStandard_0.setVisible(true);lyr_albergues_bcs_2020_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_albergues_bcs_2020_1];
lyr_albergues_bcs_2020_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_albergues_bcs_2020_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_albergues_bcs_2020_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'header label', 'icon': 'no label', });
lyr_albergues_bcs_2020_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});