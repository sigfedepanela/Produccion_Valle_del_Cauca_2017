var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LimiteDepartamental_0 = new ol.format.GeoJSON();
var features_LimiteDepartamental_0 = format_LimiteDepartamental_0.readFeatures(json_LimiteDepartamental_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteDepartamental_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LimiteDepartamental_0.addFeatures(features_LimiteDepartamental_0);var lyr_LimiteDepartamental_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteDepartamental_0, 
                style: style_LimiteDepartamental_0,
                title: '<img src="styles/legend/LimiteDepartamental_0.png" /> Limite Departamental '
            });var format_ProduccinTonValledelCauca2017_1 = new ol.format.GeoJSON();
var features_ProduccinTonValledelCauca2017_1 = format_ProduccinTonValledelCauca2017_1.readFeatures(json_ProduccinTonValledelCauca2017_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProduccinTonValledelCauca2017_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ProduccinTonValledelCauca2017_1.addFeatures(features_ProduccinTonValledelCauca2017_1);var lyr_ProduccinTonValledelCauca2017_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProduccinTonValledelCauca2017_1, 
                style: style_ProduccinTonValledelCauca2017_1,
    title: 'Producción (Ton) Valle del Cauca 2017<br />\
    <img src="styles/legend/ProduccinTonValledelCauca2017_1_0.png" />  40 - 380 <br />\
    <img src="styles/legend/ProduccinTonValledelCauca2017_1_1.png" />  380 - 870 <br />\
    <img src="styles/legend/ProduccinTonValledelCauca2017_1_2.png" />  870 - 2040 <br />\
    <img src="styles/legend/ProduccinTonValledelCauca2017_1_3.png" />  2040 - 6490 <br />\
    <img src="styles/legend/ProduccinTonValledelCauca2017_1_4.png" />  6490 - 9900 <br />'
        });

lyr_LimiteDepartamental_0.setVisible(true);lyr_ProduccinTonValledelCauca2017_1.setVisible(true);
var layersList = [baseLayer,lyr_LimiteDepartamental_0,lyr_ProduccinTonValledelCauca2017_1];
lyr_LimiteDepartamental_0.set('fieldAliases', {'nombre_dep': 'nombre_dep', });
lyr_ProduccinTonValledelCauca2017_1.set('fieldAliases', {'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', 'CULTIVO': 'CULTIVO', 'AÑO': 'AÑO', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'R.(Ton/Ha)': 'R.(Ton/Ha)', 'No': 'No', });
lyr_LimiteDepartamental_0.set('fieldImages', {'nombre_dep': 'TextEdit', });
lyr_ProduccinTonValledelCauca2017_1.set('fieldImages', {'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CULTIVO': 'TextEdit', 'AÑO': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'R.(Ton/Ha)': 'TextEdit', 'No': 'TextEdit', });
lyr_LimiteDepartamental_0.set('fieldLabels', {'nombre_dep': 'inline label', });
lyr_ProduccinTonValledelCauca2017_1.set('fieldLabels', {'DEPT': 'inline label', 'MUNICIPIO': 'inline label', 'CULTIVO': 'inline label', 'AÑO': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'R.(Ton/Ha)': 'inline label', 'No': 'inline label', });
lyr_ProduccinTonValledelCauca2017_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});