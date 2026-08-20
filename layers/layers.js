var wms_layers = [];


        var lyr_AustraliaTasmaniaLISTTopographic_0 = new ol.layer.Tile({
            'title': 'Australia - Tasmania LIST Topographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="http://listdata.thelist.tas.gov.au/public/outgoing/sif/LIST_Spatial_Web_Services_User_Guide.pdf">The LIST © State of Tasmania</a>',
                url: 'https://services.thelist.tas.gov.au/arcgis/rest/services/Basemaps/Topographic/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_CatManagementAreasMGA2020_1 = new ol.format.GeoJSON();
var features_CatManagementAreasMGA2020_1 = format_CatManagementAreasMGA2020_1.readFeatures(json_CatManagementAreasMGA2020_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CatManagementAreasMGA2020_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CatManagementAreasMGA2020_1.addFeatures(features_CatManagementAreasMGA2020_1);
var lyr_CatManagementAreasMGA2020_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CatManagementAreasMGA2020_1, 
                style: style_CatManagementAreasMGA2020_1,
                popuplayertitle: 'Cat Management Areas MGA2020',
                interactive: false,
                title: '<img src="styles/legend/CatManagementAreasMGA2020_1.png" /> Cat Management Areas MGA2020'
            });
var format_ExistingCatProhibitedAreasMGA2020_2 = new ol.format.GeoJSON();
var features_ExistingCatProhibitedAreasMGA2020_2 = format_ExistingCatProhibitedAreasMGA2020_2.readFeatures(json_ExistingCatProhibitedAreasMGA2020_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingCatProhibitedAreasMGA2020_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingCatProhibitedAreasMGA2020_2.addFeatures(features_ExistingCatProhibitedAreasMGA2020_2);
var lyr_ExistingCatProhibitedAreasMGA2020_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingCatProhibitedAreasMGA2020_2, 
                style: style_ExistingCatProhibitedAreasMGA2020_2,
                popuplayertitle: 'Existing Cat Prohibited Areas MGA2020',
                interactive: true,
                title: '<img src="styles/legend/ExistingCatProhibitedAreasMGA2020_2.png" /> Existing Cat Prohibited Areas MGA2020'
            });
var format_KIThornbillandScrubtitRecordingsMGA2020_3 = new ol.format.GeoJSON();
var features_KIThornbillandScrubtitRecordingsMGA2020_3 = format_KIThornbillandScrubtitRecordingsMGA2020_3.readFeatures(json_KIThornbillandScrubtitRecordingsMGA2020_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KIThornbillandScrubtitRecordingsMGA2020_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KIThornbillandScrubtitRecordingsMGA2020_3.addFeatures(features_KIThornbillandScrubtitRecordingsMGA2020_3);
var lyr_KIThornbillandScrubtitRecordingsMGA2020_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KIThornbillandScrubtitRecordingsMGA2020_3, 
                style: style_KIThornbillandScrubtitRecordingsMGA2020_3,
                popuplayertitle: 'KI Thornbill and Scrubtit Recordings MGA2020',
                interactive: true,
                title: '<img src="styles/legend/KIThornbillandScrubtitRecordingsMGA2020_3.png" /> KI Thornbill and Scrubtit Recordings MGA2020'
            });

lyr_AustraliaTasmaniaLISTTopographic_0.setVisible(true);lyr_CatManagementAreasMGA2020_1.setVisible(true);lyr_ExistingCatProhibitedAreasMGA2020_2.setVisible(true);lyr_KIThornbillandScrubtitRecordingsMGA2020_3.setVisible(true);
var layersList = [lyr_AustraliaTasmaniaLISTTopographic_0,lyr_CatManagementAreasMGA2020_1,lyr_ExistingCatProhibitedAreasMGA2020_2,lyr_KIThornbillandScrubtitRecordingsMGA2020_3];
lyr_CatManagementAreasMGA2020_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ExistingCatProhibitedAreasMGA2020_2.set('fieldAliases', {'TEN_CLASS': 'TEN_CLASS', 'ACT': 'ACT', 'FEAT_NAME': 'FEAT_NAME', 'TENURE_ID': 'TENURE_ID', 'CREATED_ON': 'CREATED_ON', 'LIST_GUID': 'LIST_GUID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_KIThornbillandScrubtitRecordingsMGA2020_3.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_CatManagementAreasMGA2020_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ExistingCatProhibitedAreasMGA2020_2.set('fieldImages', {'TEN_CLASS': 'TextEdit', 'ACT': 'TextEdit', 'FEAT_NAME': 'TextEdit', 'TENURE_ID': 'TextEdit', 'CREATED_ON': 'TextEdit', 'LIST_GUID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_KIThornbillandScrubtitRecordingsMGA2020_3.set('fieldImages', {'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_CatManagementAreasMGA2020_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ExistingCatProhibitedAreasMGA2020_2.set('fieldLabels', {'TEN_CLASS': 'no label', 'ACT': 'no label', 'FEAT_NAME': 'no label', 'TENURE_ID': 'hidden field', 'CREATED_ON': 'hidden field', 'LIST_GUID': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_KIThornbillandScrubtitRecordingsMGA2020_3.set('fieldLabels', {'Latitude': 'no label', 'Longitude': 'no label', });
lyr_KIThornbillandScrubtitRecordingsMGA2020_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});