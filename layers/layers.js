var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'vector',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Frequency_1 = new ol.format.GeoJSON();
var features_Frequency_1 = format_Frequency_1.readFeatures(json_Frequency_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frequency_1 = new ol.source.Vector({
    attributions: ' ',
});

jsonSource_Frequency_1.addFeatures(features_Frequency_1);
var lyr_Frequency_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frequency_1, 
                type: 'base',
                style: style_Frequency_1,
                interactive: true,
    title: 'Frequency<br />'
        });
var format_FrequencyBand_2 = new ol.format.GeoJSON();
var features_FrequencyBand_2 = format_FrequencyBand_2.readFeatures(json_FrequencyBand_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrequencyBand_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrequencyBand_2.addFeatures(features_FrequencyBand_2);
var lyr_FrequencyBand_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrequencyBand_2, 
                type: 'base',
                style: style_FrequencyBand_2,
                interactive: true,
    title: 'Frequency Band<br />'
        });
var format_CellEdgeMedian_3 = new ol.format.GeoJSON();
var features_CellEdgeMedian_3 = format_CellEdgeMedian_3.readFeatures(json_CellEdgeMedian_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CellEdgeMedian_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CellEdgeMedian_3.addFeatures(features_CellEdgeMedian_3);
var lyr_CellEdgeMedian_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CellEdgeMedian_3, 
                style: style_CellEdgeMedian_3,
                 
                type: 'base',
                interactive: true,
    title: 'Cell Edge/Median<br />'
        });
var format_ULMbpsLabels_4 = new ol.format.GeoJSON();
var features_ULMbpsLabels_4 = format_ULMbpsLabels_4.readFeatures(json_ULMbpsLabels_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ULMbpsLabels_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ULMbpsLabels_4.addFeatures(features_ULMbpsLabels_4);
var lyr_ULMbpsLabels_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ULMbpsLabels_4,  
                type: 'base',
                style: style_ULMbpsLabels_4,
                interactive: true,
    title: 'UL Mbps Labels<br />'
        });
var format_TestsbyULMbps_5 = new ol.format.GeoJSON();
var features_TestsbyULMbps_5 = format_TestsbyULMbps_5.readFeatures(json_TestsbyULMbps_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TestsbyULMbps_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TestsbyULMbps_5.addFeatures(features_TestsbyULMbps_5);
var lyr_TestsbyULMbps_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TestsbyULMbps_5,  
                type: 'base',
                style: style_TestsbyULMbps_5,
                interactive: true,
    title: 'Tests by UL Mbps<br />\
    <img src="styles/legend/TestsbyULMbps_5_0.png" /> 15.5 - 20<br />\
    <img src="styles/legend/TestsbyULMbps_5_1.png" /> 20 - 40<br />\
    <img src="styles/legend/TestsbyULMbps_5_2.png" /> 40 - 60<br />\
    <img src="styles/legend/TestsbyULMbps_5_3.png" /> 60 - 80<br />\
    <img src="styles/legend/TestsbyULMbps_5_4.png" /> 80 - 100<br />\
    <img src="styles/legend/TestsbyULMbps_5_5.png" /> 100 - 118.8<br />'
        });
var format_DLMbpsLabels_6 = new ol.format.GeoJSON();
var features_DLMbpsLabels_6 = format_DLMbpsLabels_6.readFeatures(json_DLMbpsLabels_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DLMbpsLabels_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DLMbpsLabels_6.addFeatures(features_DLMbpsLabels_6);
var lyr_DLMbpsLabels_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DLMbpsLabels_6,  
                type: 'base',
                style: style_DLMbpsLabels_6,
                interactive: true,
    title: 'DL Mbps Labels<br />'
        });
var format_TestsbyDLMbps_7 = new ol.format.GeoJSON();
var features_TestsbyDLMbps_7 = format_TestsbyDLMbps_7.readFeatures(json_TestsbyDLMbps_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TestsbyDLMbps_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TestsbyDLMbps_7.addFeatures(features_TestsbyDLMbps_7);
var lyr_TestsbyDLMbps_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TestsbyDLMbps_7,  
                type: 'base',
                style: style_TestsbyDLMbps_7,
                interactive: true,
    title: 'Tests by DL Mbps<br />\
    <img src="styles/legend/TestsbyDLMbps_7_0.png" /> 28 - 200<br />\
    <img src="styles/legend/TestsbyDLMbps_7_1.png" /> 200 - 400<br />\
    <img src="styles/legend/TestsbyDLMbps_7_2.png" /> 400 - 600<br />\
    <img src="styles/legend/TestsbyDLMbps_7_3.png" /> 600 - 800<br />\
    <img src="styles/legend/TestsbyDLMbps_7_4.png" /> 800 - 1000<br />\
    <img src="styles/legend/TestsbyDLMbps_7_5.png" /> 1000 - 1034<br />'
        });
var format_RSRPLabels_8 = new ol.format.GeoJSON();
var features_RSRPLabels_8 = format_RSRPLabels_8.readFeatures(json_RSRPLabels_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSRPLabels_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSRPLabels_8.addFeatures(features_RSRPLabels_8);
var lyr_RSRPLabels_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSRPLabels_8,  
                type: 'base',
                style: style_RSRPLabels_8,
                interactive: true,
    title: 'RSRP Labels<br />'
        });
var format_TestsbyRSRP_9 = new ol.format.GeoJSON();
var features_TestsbyRSRP_9 = format_TestsbyRSRP_9.readFeatures(json_TestsbyRSRP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TestsbyRSRP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TestsbyRSRP_9.addFeatures(features_TestsbyRSRP_9);
var lyr_TestsbyRSRP_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TestsbyRSRP_9,  
                type: 'base',
                style: style_TestsbyRSRP_9,
                interactive: true,
    title: 'Tests by RSRP<br />\
    <img src="styles/legend/TestsbyRSRP_9_0.png" /> -96 - -90<br />\
    <img src="styles/legend/TestsbyRSRP_9_1.png" /> -90 - -80<br />\
    <img src="styles/legend/TestsbyRSRP_9_2.png" /> -80 - -70<br />\
    <img src="styles/legend/TestsbyRSRP_9_3.png" /> -70 - -62<br />'
        });
var format_tower_10 = new ol.format.GeoJSON();
var features_tower_10 = format_tower_10.readFeatures(json_tower_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tower_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tower_10.addFeatures(features_tower_10);
var lyr_tower_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tower_10, 
                style: style_tower_10,
                interactive: true,
                title: '<img src="styles/legend/tower_10.png" /> tower'
            });
var format_gridcells_ashburn_11 = new ol.format.GeoJSON();
var features_gridcells_ashburn_11 = format_gridcells_ashburn_11.readFeatures(json_gridcells_ashburn_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gridcells_ashburn_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gridcells_ashburn_11.addFeatures(features_gridcells_ashburn_11);
var lyr_gridcells_ashburn_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gridcells_ashburn_11, 
                style: style_gridcells_ashburn_11,
                interactive: true,
                title: '<img src="styles/legend/gridcells_ashburn_11.png" /> gridcells_ashburn'
            });
var format_testing_groups_12 = new ol.format.GeoJSON();
var features_testing_groups_12 = format_testing_groups_12.readFeatures(json_testing_groups_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_testing_groups_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_testing_groups_12.addFeatures(features_testing_groups_12);
var lyr_testing_groups_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_testing_groups_12, 
                style: style_testing_groups_12,
                interactive: true,
                title: '<img src="styles/legend/testing_groups_12.png" /> testing_groups'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Frequency_1.setVisible(false);lyr_FrequencyBand_2.setVisible(false);lyr_CellEdgeMedian_3.setVisible(false);lyr_ULMbpsLabels_4.setVisible(false);lyr_TestsbyULMbps_5.setVisible(false);lyr_DLMbpsLabels_6.setVisible(false);lyr_TestsbyDLMbps_7.setVisible(false);lyr_RSRPLabels_8.setVisible(false);lyr_TestsbyRSRP_9.setVisible(true);lyr_tower_10.setVisible(true);lyr_gridcells_ashburn_11.setVisible(false);lyr_testing_groups_12.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_Frequency_1,lyr_FrequencyBand_2,lyr_CellEdgeMedian_3,lyr_ULMbpsLabels_4,lyr_TestsbyULMbps_5,lyr_DLMbpsLabels_6,lyr_TestsbyDLMbps_7,lyr_RSRPLabels_8,lyr_TestsbyRSRP_9,lyr_tower_10,lyr_gridcells_ashburn_11,lyr_testing_groups_12];
lyr_Frequency_1.set('fieldAliases', {'Test_id': 'Test_id', 'Grid cell ID': 'Grid cell ID', 'Testing Group ID': 'Testing Group ID', 'Testing Group Name': 'Testing Group Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'App': 'App', 'Provider': 'Provider', 'DL Mbps': 'DL Mbps', 'UL Mbps': 'UL Mbps', 'Status': 'Status', 'Spectrum band': 'Spectrum band', 'Frequency (Down/Up)': 'Frequency (Down/Up)', 'Cell ID': 'Cell ID', 'Physical Cell ID': 'Physical Cell ID', 'Network': 'Network', 'Network Subtype': 'Network Subtype', 'signal_strength': 'signal_strength', 'rssi': 'rssi', 'csi_rsrp': 'csi_rsrp', 'csi_rsrq': 'csi_rsrq', 'csi_sinr': 'csi_sinr', 'tests.download.cells.beginning.arfcn': 'tests.download.cells.beginning.arfcn', 'Download Server': 'Download Server', 'Timestamp': 'Timestamp', 'Test Result': 'Test Result', });
lyr_FrequencyBand_2.set('fieldAliases', {'Test_id': 'Test_id', 'Grid cell ID': 'Grid cell ID', 'Testing Group ID': 'Testing Group ID', 'Testing Group Name': 'Testing Group Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'App': 'App', 'Provider': 'Provider', 'DL Mbps': 'DL Mbps', 'UL Mbps': 'UL Mbps', 'Status': 'Status', 'Spectrum band': 'Spectrum band', 'Frequency (Down/Up)': 'Frequency (Down/Up)', 'Cell ID': 'Cell ID', 'Physical Cell ID': 'Physical Cell ID', 'Network': 'Network', 'Network Subtype': 'Network Subtype', 'signal_strength': 'signal_strength', 'rssi': 'rssi', 'csi_rsrp': 'csi_rsrp', 'csi_rsrq': 'csi_rsrq', 'csi_sinr': 'csi_sinr', 'tests.download.cells.beginning.arfcn': 'tests.download.cells.beginning.arfcn', 'Download Server': 'Download Server', 'Timestamp': 'Timestamp', 'Test Result': 'Test Result', });
lyr_CellEdgeMedian_3.set('fieldAliases', {'Test_id': 'Test_id', 'Grid cell ID': 'Grid cell ID', 'Testing Group ID': 'Testing Group ID', 'Testing Group Name': 'Testing Group Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'App': 'App', 'Provider': 'Provider', 'DL Mbps': 'DL Mbps', 'UL Mbps': 'UL Mbps', 'Status': 'Status', 'Spectrum band': 'Spectrum band', 'Frequency (Down/Up)': 'Frequency (Down/Up)', 'Cell ID': 'Cell ID', 'Physical Cell ID': 'Physical Cell ID', 'Network': 'Network', 'Network Subtype': 'Network Subtype', 'signal_strength': 'signal_strength', 'rssi': 'rssi', 'csi_rsrp': 'csi_rsrp', 'csi_rsrq': 'csi_rsrq', 'csi_sinr': 'csi_sinr', 'tests.download.cells.beginning.arfcn': 'tests.download.cells.beginning.arfcn', 'Download Server': 'Download Server', 'Timestamp': 'Timestamp', 'Test Result': 'Test Result', });
lyr_ULMbpsLabels_4.set('fieldAliases', {'Test_id': 'Test_id', 'Grid cell ID': 'Grid cell ID', 'Testing Group ID': 'Testing Group ID', 'Testing Group Name': 'Testing Group Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'App': 'App', 'Provider': 'Provider', 'DL Mbps': 'DL Mbps', 'UL Mbps': 'UL Mbps', 'Status': 'Status', 'Spectrum band': 'Spectrum band', 'Frequency (Down/Up)': 'Frequency (Down/Up)', 'Cell ID': 'Cell ID', 'Physical Cell ID': 'Physical Cell ID', 'Network': 'Network', 'Network Subtype': 'Network Subtype', 'signal_strength': 'signal_strength', 'rssi': 'rssi', 'csi_rsrp': 'csi_rsrp', 'csi_rsrq': 'csi_rsrq', 'csi_sinr': 'csi_sinr', 'tests.download.cells.beginning.arfcn': 'tests.download.cells.beginning.arfcn', 'Download Server': 'Download Server', 'Timestamp': 'Timestamp', 'Test Result': 'Test Result', });
lyr_TestsbyULMbps_5.set('fieldAliases', {'Test_id': 'Test_id', 'Grid cell ID': 'Grid cell ID', 'Testing Group ID': 'Testing Group ID', 'Testing Group Name': 'Testing Group Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'App': 'App', 'Provider': 'Provider', 'DL Mbps': 'DL Mbps', 'UL Mbps': 'UL Mbps', 'Status': 'Status', 'Spectrum band': 'Spectrum band', 'Frequency (Down/Up)': 'Frequency (Down/Up)', 'Cell ID': 'Cell ID', 'Physical Cell ID': 'Physical Cell ID', 'Network': 'Network', 'Network Subtype': 'Network Subtype', 'signal_strength': 'signal_strength', 'rssi': 'rssi', 'csi_rsrp': 'csi_rsrp', 'csi_rsrq': 'csi_rsrq', 'csi_sinr': 'csi_sinr', 'tests.download.cells.beginning.arfcn': 'tests.download.cells.beginning.arfcn', 'Download Server': 'Download Server', 'Timestamp': 'Timestamp', 'Test Result': 'Test Result', });
lyr_DLMbpsLabels_6.set('fieldAliases', {'Test_id': 'Test_id', 'Grid cell ID': 'Grid cell ID', 'Testing Group ID': 'Testing Group ID', 'Testing Group Name': 'Testing Group Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'App': 'App', 'Provider': 'Provider', 'DL Mbps': 'DL Mbps', 'UL Mbps': 'UL Mbps', 'Status': 'Status', 'Spectrum band': 'Spectrum band', 'Frequency (Down/Up)': 'Frequency (Down/Up)', 'Cell ID': 'Cell ID', 'Physical Cell ID': 'Physical Cell ID', 'Network': 'Network', 'Network Subtype': 'Network Subtype', 'signal_strength': 'signal_strength', 'rssi': 'rssi', 'csi_rsrp': 'csi_rsrp', 'csi_rsrq': 'csi_rsrq', 'csi_sinr': 'csi_sinr', 'tests.download.cells.beginning.arfcn': 'tests.download.cells.beginning.arfcn', 'Download Server': 'Download Server', 'Timestamp': 'Timestamp', 'Test Result': 'Test Result', });
lyr_TestsbyDLMbps_7.set('fieldAliases', {'Test_id': 'Test_id', 'Grid cell ID': 'Grid cell ID', 'Testing Group ID': 'Testing Group ID', 'Testing Group Name': 'Testing Group Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'App': 'App', 'Provider': 'Provider', 'DL Mbps': 'DL Mbps', 'UL Mbps': 'UL Mbps', 'Status': 'Status', 'Spectrum band': 'Spectrum band', 'Frequency (Down/Up)': 'Frequency (Down/Up)', 'Cell ID': 'Cell ID', 'Physical Cell ID': 'Physical Cell ID', 'Network': 'Network', 'Network Subtype': 'Network Subtype', 'signal_strength': 'signal_strength', 'rssi': 'rssi', 'csi_rsrp': 'csi_rsrp', 'csi_rsrq': 'csi_rsrq', 'csi_sinr': 'csi_sinr', 'tests.download.cells.beginning.arfcn': 'tests.download.cells.beginning.arfcn', 'Download Server': 'Download Server', 'Timestamp': 'Timestamp', 'Test Result': 'Test Result', });
lyr_RSRPLabels_8.set('fieldAliases', {'Test_id': 'Test_id', 'Grid cell ID': 'Grid cell ID', 'Testing Group ID': 'Testing Group ID', 'Testing Group Name': 'Testing Group Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'App': 'App', 'Provider': 'Provider', 'DL Mbps': 'DL Mbps', 'UL Mbps': 'UL Mbps', 'Status': 'Status', 'Spectrum band': 'Spectrum band', 'Frequency (Down/Up)': 'Frequency (Down/Up)', 'Cell ID': 'Cell ID', 'Physical Cell ID': 'Physical Cell ID', 'Network': 'Network', 'Network Subtype': 'Network Subtype', 'signal_strength': 'signal_strength', 'rssi': 'rssi', 'csi_rsrp': 'csi_rsrp', 'csi_rsrq': 'csi_rsrq', 'csi_sinr': 'csi_sinr', 'tests.download.cells.beginning.arfcn': 'tests.download.cells.beginning.arfcn', 'Download Server': 'Download Server', 'Timestamp': 'Timestamp', 'Test Result': 'Test Result', });
lyr_TestsbyRSRP_9.set('fieldAliases', {'Test_id': 'Test_id', 'Grid cell ID': 'Grid cell ID', 'Testing Group ID': 'Testing Group ID', 'Testing Group Name': 'Testing Group Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'App': 'App', 'Provider': 'Provider', 'DL Mbps': 'DL Mbps', 'UL Mbps': 'UL Mbps', 'Status': 'Status', 'Spectrum band': 'Spectrum band', 'Frequency (Down/Up)': 'Frequency (Down/Up)', 'Cell ID': 'Cell ID', 'Physical Cell ID': 'Physical Cell ID', 'Network': 'Network', 'Network Subtype': 'Network Subtype', 'signal_strength': 'signal_strength', 'rssi': 'rssi', 'csi_rsrp': 'csi_rsrp', 'csi_rsrq': 'csi_rsrq', 'csi_sinr': 'csi_sinr', 'tests.download.cells.beginning.arfcn': 'tests.download.cells.beginning.arfcn', 'Download Server': 'Download Server', 'Timestamp': 'Timestamp', 'Test Result': 'Test Result', });
lyr_tower_10.set('fieldAliases', {'id': 'id', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_gridcells_ashburn_11.set('fieldAliases', {'id': 'id', });
lyr_testing_groups_12.set('fieldAliases', {'id': 'id', 'location': 'location', });
lyr_Frequency_1.set('fieldImages', {'Test_id': 'TextEdit', 'Grid cell ID': 'TextEdit', 'Testing Group ID': 'TextEdit', 'Testing Group Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'App': 'TextEdit', 'Provider': 'TextEdit', 'DL Mbps': 'TextEdit', 'UL Mbps': 'TextEdit', 'Status': 'TextEdit', 'Spectrum band': 'TextEdit', 'Frequency (Down/Up)': 'TextEdit', 'Cell ID': 'Range', 'Physical Cell ID': 'Range', 'Network': 'TextEdit', 'Network Subtype': 'TextEdit', 'signal_strength': 'Range', 'rssi': 'Range', 'csi_rsrp': 'Range', 'csi_rsrq': 'Range', 'csi_sinr': 'Range', 'tests.download.cells.beginning.arfcn': 'Range', 'Download Server': 'TextEdit', 'Timestamp': 'DateTime', 'Test Result': 'TextEdit', });
lyr_FrequencyBand_2.set('fieldImages', {'Test_id': 'TextEdit', 'Grid cell ID': 'TextEdit', 'Testing Group ID': 'TextEdit', 'Testing Group Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'App': 'TextEdit', 'Provider': 'TextEdit', 'DL Mbps': 'TextEdit', 'UL Mbps': 'TextEdit', 'Status': 'TextEdit', 'Spectrum band': 'TextEdit', 'Frequency (Down/Up)': 'TextEdit', 'Cell ID': 'Range', 'Physical Cell ID': 'Range', 'Network': 'TextEdit', 'Network Subtype': 'TextEdit', 'signal_strength': 'Range', 'rssi': 'Range', 'csi_rsrp': 'Range', 'csi_rsrq': 'Range', 'csi_sinr': 'Range', 'tests.download.cells.beginning.arfcn': 'Range', 'Download Server': 'TextEdit', 'Timestamp': 'DateTime', 'Test Result': 'TextEdit', });
lyr_CellEdgeMedian_3.set('fieldImages', {'Test_id': 'TextEdit', 'Grid cell ID': 'TextEdit', 'Testing Group ID': 'TextEdit', 'Testing Group Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'App': 'TextEdit', 'Provider': 'TextEdit', 'DL Mbps': 'TextEdit', 'UL Mbps': 'TextEdit', 'Status': 'TextEdit', 'Spectrum band': 'TextEdit', 'Frequency (Down/Up)': 'TextEdit', 'Cell ID': 'Range', 'Physical Cell ID': 'Range', 'Network': 'TextEdit', 'Network Subtype': 'TextEdit', 'signal_strength': 'Range', 'rssi': 'Range', 'csi_rsrp': 'Range', 'csi_rsrq': 'Range', 'csi_sinr': 'Range', 'tests.download.cells.beginning.arfcn': 'Range', 'Download Server': 'TextEdit', 'Timestamp': 'DateTime', 'Test Result': 'TextEdit', });
lyr_ULMbpsLabels_4.set('fieldImages', {'Test_id': 'TextEdit', 'Grid cell ID': '', 'Testing Group ID': '', 'Testing Group Name': '', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'App': 'TextEdit', 'Provider': 'TextEdit', 'DL Mbps': 'TextEdit', 'UL Mbps': 'TextEdit', 'Status': 'TextEdit', 'Spectrum band': 'TextEdit', 'Frequency (Down/Up)': '', 'Cell ID': 'Range', 'Physical Cell ID': 'Range', 'Network': 'TextEdit', 'Network Subtype': 'TextEdit', 'signal_strength': 'Range', 'rssi': 'Range', 'csi_rsrp': 'Range', 'csi_rsrq': 'Range', 'csi_sinr': 'Range', 'tests.download.cells.beginning.arfcn': 'Range', 'Download Server': 'TextEdit', 'Timestamp': 'DateTime', 'Test Result': 'TextEdit', });
lyr_TestsbyULMbps_5.set('fieldImages', {'Test_id': 'TextEdit', 'Grid cell ID': 'TextEdit', 'Testing Group ID': 'TextEdit', 'Testing Group Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'App': 'TextEdit', 'Provider': 'TextEdit', 'DL Mbps': 'TextEdit', 'UL Mbps': 'TextEdit', 'Status': 'TextEdit', 'Spectrum band': 'TextEdit', 'Frequency (Down/Up)': 'TextEdit', 'Cell ID': 'Range', 'Physical Cell ID': 'Range', 'Network': 'TextEdit', 'Network Subtype': 'TextEdit', 'signal_strength': 'Range', 'rssi': 'Range', 'csi_rsrp': 'Range', 'csi_rsrq': 'Range', 'csi_sinr': 'Range', 'tests.download.cells.beginning.arfcn': 'Range', 'Download Server': 'TextEdit', 'Timestamp': 'DateTime', 'Test Result': 'TextEdit', });
lyr_DLMbpsLabels_6.set('fieldImages', {'Test_id': 'TextEdit', 'Grid cell ID': '', 'Testing Group ID': '', 'Testing Group Name': '', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'App': 'TextEdit', 'Provider': 'TextEdit', 'DL Mbps': 'TextEdit', 'UL Mbps': 'TextEdit', 'Status': 'TextEdit', 'Spectrum band': 'TextEdit', 'Frequency (Down/Up)': '', 'Cell ID': 'Range', 'Physical Cell ID': 'Range', 'Network': 'TextEdit', 'Network Subtype': 'TextEdit', 'signal_strength': 'Range', 'rssi': 'Range', 'csi_rsrp': 'Range', 'csi_rsrq': 'Range', 'csi_sinr': 'Range', 'tests.download.cells.beginning.arfcn': 'Range', 'Download Server': 'TextEdit', 'Timestamp': 'DateTime', 'Test Result': 'TextEdit', });
lyr_TestsbyDLMbps_7.set('fieldImages', {'Test_id': 'TextEdit', 'Grid cell ID': '', 'Testing Group ID': '', 'Testing Group Name': '', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'App': 'TextEdit', 'Provider': 'TextEdit', 'DL Mbps': 'TextEdit', 'UL Mbps': 'TextEdit', 'Status': 'TextEdit', 'Spectrum band': 'TextEdit', 'Frequency (Down/Up)': '', 'Cell ID': 'Range', 'Physical Cell ID': 'Range', 'Network': 'TextEdit', 'Network Subtype': 'TextEdit', 'signal_strength': 'Range', 'rssi': 'Range', 'csi_rsrp': 'Range', 'csi_rsrq': 'Range', 'csi_sinr': 'Range', 'tests.download.cells.beginning.arfcn': 'Range', 'Download Server': 'TextEdit', 'Timestamp': 'DateTime', 'Test Result': 'TextEdit', });
lyr_RSRPLabels_8.set('fieldImages', {'Test_id': 'TextEdit', 'Grid cell ID': '', 'Testing Group ID': '', 'Testing Group Name': '', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'App': 'TextEdit', 'Provider': 'TextEdit', 'DL Mbps': 'TextEdit', 'UL Mbps': 'TextEdit', 'Status': 'TextEdit', 'Spectrum band': 'TextEdit', 'Frequency (Down/Up)': '', 'Cell ID': 'Range', 'Physical Cell ID': 'Range', 'Network': 'TextEdit', 'Network Subtype': 'TextEdit', 'signal_strength': 'Range', 'rssi': 'Range', 'csi_rsrp': 'Range', 'csi_rsrq': 'Range', 'csi_sinr': 'Range', 'tests.download.cells.beginning.arfcn': 'Range', 'Download Server': 'TextEdit', 'Timestamp': 'DateTime', 'Test Result': 'TextEdit', });
lyr_TestsbyRSRP_9.set('fieldImages', {'Test_id': 'TextEdit', 'Grid cell ID': '', 'Testing Group ID': '', 'Testing Group Name': '', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'App': 'TextEdit', 'Provider': 'TextEdit', 'DL Mbps': 'TextEdit', 'UL Mbps': 'TextEdit', 'Status': 'TextEdit', 'Spectrum band': 'TextEdit', 'Frequency (Down/Up)': '', 'Cell ID': 'Range', 'Physical Cell ID': 'Range', 'Network': 'TextEdit', 'Network Subtype': 'TextEdit', 'signal_strength': 'Range', 'rssi': 'Range', 'csi_rsrp': 'Range', 'csi_rsrq': 'Range', 'csi_sinr': 'Range', 'tests.download.cells.beginning.arfcn': 'Range', 'Download Server': 'TextEdit', 'Timestamp': 'DateTime', 'Test Result': 'TextEdit', });
lyr_tower_10.set('fieldImages', {'id': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_gridcells_ashburn_11.set('fieldImages', {'id': 'TextEdit', });
lyr_testing_groups_12.set('fieldImages', {'id': 'TextEdit', 'location': 'TextEdit', });
lyr_Frequency_1.set('fieldLabels', {'Test_id': 'inline label', 'Grid cell ID': 'inline label', 'Testing Group ID': 'inline label', 'Testing Group Name': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'App': 'header label', 'Provider': 'header label', 'DL Mbps': 'header label', 'UL Mbps': 'header label', 'Status': 'header label', 'Spectrum band': 'header label', 'Frequency (Down/Up)': 'header label', 'Cell ID': 'header label', 'Physical Cell ID': 'header label', 'Network': 'header label', 'Network Subtype': 'header label', 'signal_strength': 'header label', 'rssi': 'header label', 'csi_rsrp': 'header label', 'csi_rsrq': 'header label', 'csi_sinr': 'header label', 'tests.download.cells.beginning.arfcn': 'header label', 'Download Server': 'header label', 'Timestamp': 'header label', 'Test Result': 'header label', });
lyr_FrequencyBand_2.set('fieldLabels', {'Test_id': 'inline label', 'Grid cell ID': 'inline label', 'Testing Group ID': 'inline label', 'Testing Group Name': 'header label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'App': 'header label', 'Provider': 'header label', 'DL Mbps': 'header label', 'UL Mbps': 'header label', 'Status': 'header label', 'Spectrum band': 'header label', 'Frequency (Down/Up)': 'header label', 'Cell ID': 'header label', 'Physical Cell ID': 'header label', 'Network': 'header label', 'Network Subtype': 'header label', 'signal_strength': 'header label', 'rssi': 'header label', 'csi_rsrp': 'header label', 'csi_rsrq': 'header label', 'csi_sinr': 'header label', 'tests.download.cells.beginning.arfcn': 'header label', 'Download Server': 'header label', 'Timestamp': 'header label', 'Test Result': 'header label', });
lyr_CellEdgeMedian_3.set('fieldLabels', {'Test_id': 'inline label', 'Grid cell ID': 'inline label', 'Testing Group ID': 'inline label', 'Testing Group Name': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'App': 'header label', 'Provider': 'header label', 'DL Mbps': 'header label', 'UL Mbps': 'header label', 'Status': 'header label', 'Spectrum band': 'header label', 'Frequency (Down/Up)': 'header label', 'Cell ID': 'header label', 'Physical Cell ID': 'header label', 'Network': 'header label', 'Network Subtype': 'header label', 'signal_strength': 'header label', 'rssi': 'header label', 'csi_rsrp': 'header label', 'csi_rsrq': 'header label', 'csi_sinr': 'header label', 'tests.download.cells.beginning.arfcn': 'header label', 'Download Server': 'header label', 'Timestamp': 'header label', 'Test Result': 'header label', });
lyr_ULMbpsLabels_4.set('fieldLabels', {'Test_id': 'inline label', 'Grid cell ID': 'inline label', 'Testing Group ID': 'inline label', 'Testing Group Name': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'App': 'header label', 'Provider': 'header label', 'DL Mbps': 'header label', 'UL Mbps': 'header label', 'Status': 'header label', 'Spectrum band': 'header label', 'Frequency (Down/Up)': 'header label', 'Cell ID': 'header label', 'Physical Cell ID': 'header label', 'Network': 'header label', 'Network Subtype': 'header label', 'signal_strength': 'header label', 'rssi': 'header label', 'csi_rsrp': 'header label', 'csi_rsrq': 'header label', 'csi_sinr': 'header label', 'tests.download.cells.beginning.arfcn': 'header label', 'Download Server': 'header label', 'Timestamp': 'header label', 'Test Result': 'header label', });
lyr_TestsbyULMbps_5.set('fieldLabels', {'Test_id': 'inline label', 'Grid cell ID': 'inline label', 'Testing Group ID': 'inline label', 'Testing Group Name': 'header label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'App': 'header label', 'Provider': 'header label', 'DL Mbps': 'header label', 'UL Mbps': 'header label', 'Status': 'header label', 'Spectrum band': 'header label', 'Frequency (Down/Up)': 'header label', 'Cell ID': 'header label', 'Physical Cell ID': 'header label', 'Network': 'header label', 'Network Subtype': 'header label', 'signal_strength': 'header label', 'rssi': 'header label', 'csi_rsrp': 'header label', 'csi_rsrq': 'header label', 'csi_sinr': 'header label', 'tests.download.cells.beginning.arfcn': 'header label', 'Download Server': 'header label', 'Timestamp': 'header label', 'Test Result': 'header label', });
lyr_DLMbpsLabels_6.set('fieldLabels', {'Test_id': 'inline label', 'Grid cell ID': 'inline label', 'Testing Group ID': 'inline label', 'Testing Group Name': 'header label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'App': 'header label', 'Provider': 'header label', 'DL Mbps': 'header label', 'UL Mbps': 'header label', 'Status': 'header label', 'Spectrum band': 'header label', 'Frequency (Down/Up)': 'header label', 'Cell ID': 'header label', 'Physical Cell ID': 'header label', 'Network': 'header label', 'Network Subtype': 'header label', 'signal_strength': 'header label', 'rssi': 'header label', 'csi_rsrp': 'header label', 'csi_rsrq': 'header label', 'csi_sinr': 'header label', 'tests.download.cells.beginning.arfcn': 'header label', 'Download Server': 'header label', 'Timestamp': 'header label', 'Test Result': 'header label', });
lyr_TestsbyDLMbps_7.set('fieldLabels', {'Test_id': 'inline label', 'Grid cell ID': 'inline label', 'Testing Group ID': 'header label', 'Testing Group Name': 'header label', 'Latitude': 'header label', 'Longitude': 'header label', 'App': 'header label', 'Provider': 'header label', 'DL Mbps': 'header label', 'UL Mbps': 'header label', 'Status': 'header label', 'Spectrum band': 'header label', 'Frequency (Down/Up)': 'header label', 'Cell ID': 'header label', 'Physical Cell ID': 'header label', 'Network': 'header label', 'Network Subtype': 'header label', 'signal_strength': 'header label', 'rssi': 'header label', 'csi_rsrp': 'header label', 'csi_rsrq': 'header label', 'csi_sinr': 'header label', 'tests.download.cells.beginning.arfcn': 'header label', 'Download Server': 'header label', 'Timestamp': 'header label', 'Test Result': 'header label', });
lyr_RSRPLabels_8.set('fieldLabels', {'Test_id': 'inline label', 'Grid cell ID': 'inline label', 'Testing Group ID': 'inline label', 'Testing Group Name': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'App': 'header label', 'Provider': 'header label', 'DL Mbps': 'header label', 'UL Mbps': 'header label', 'Status': 'header label', 'Spectrum band': 'header label', 'Frequency (Down/Up)': 'header label', 'Cell ID': 'header label', 'Physical Cell ID': 'header label', 'Network': 'header label', 'Network Subtype': 'header label', 'signal_strength': 'header label', 'rssi': 'header label', 'csi_rsrp': 'header label', 'csi_rsrq': 'header label', 'csi_sinr': 'header label', 'tests.download.cells.beginning.arfcn': 'header label', 'Download Server': 'header label', 'Timestamp': 'header label', 'Test Result': 'header label', });
lyr_TestsbyRSRP_9.set('fieldLabels', {'Test_id': 'inline label', 'Grid cell ID': 'inline label', 'Testing Group ID': 'inline label', 'Testing Group Name': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'App': 'header label', 'Provider': 'header label', 'DL Mbps': 'header label', 'UL Mbps': 'header label', 'Status': 'header label', 'Spectrum band': 'header label', 'Frequency (Down/Up)': 'header label', 'Cell ID': 'header label', 'Physical Cell ID': 'header label', 'Network': 'header label', 'Network Subtype': 'header label', 'signal_strength': 'header label', 'rssi': 'header label', 'csi_rsrp': 'header label', 'csi_rsrq': 'header label', 'csi_sinr': 'header label', 'tests.download.cells.beginning.arfcn': 'header label', 'Download Server': 'header label', 'Timestamp': 'header label', 'Test Result': 'header label', });
lyr_tower_10.set('fieldLabels', {'id': 'inline label', 'Longitude': 'inline label', 'Latitude': 'inline label', });
lyr_gridcells_ashburn_11.set('fieldLabels', {'id': 'header label', });
lyr_testing_groups_12.set('fieldLabels', {'id': 'header label', 'location': 'header label', });
lyr_testing_groups_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

