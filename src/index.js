// Add AJAX request for data

// LATIN AMERICAN DATA

// Fronteiras
var latinamerica = $.ajax({
  url:"https://raw.githubusercontent.com/Cadastro-Marinho/LatinAmericaData/master/LatinAmerica.geojson",
  dataType: "json",
  success: console.log("Latin America boundaries data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

// Zonas Econômicas Exclusivas
var eez = $.ajax({
  url:"https://raw.githubusercontent.com/Cadastro-Marinho/LatinAmericaData/master/EEZ.geojson",
  dataType: "json",
  success: console.log("EEZ data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

// BRASIL DATA

// WFS Server IBGE

/*
var zonasmaritimasbrasil = $.ajax({
  url : ibge('CCAR:BCIM_Outros_Limites_Oficiais_L'),
  dataType : 'json',
  jsonpCallback : 'getJson',
  success: console.log("zonasmaritimasbrasil data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});
*/

var linhadecosta = $.ajax({
  url : ibge('CGEO:AtlasMar_Linhadecosta'),
  dataType : 'json',
  jsonpCallback : 'getJson',
  success: console.log("Linha De Costa data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

// Zona Contígua
var cz = $.ajax({
  url:"https://raw.githubusercontent.com/Cadastro-Marinho/BrasilData/master/CZ.geojson",
  dataType: "json",
  success: console.log("CZ data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

// Mar Territorial
var ts = $.ajax({
  url:"https://raw.githubusercontent.com/Cadastro-Marinho/BrasilData/master/TS.geojson",
  dataType: "json",
  success: console.log("TS data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

//Águas Internas
var iw = $.ajax({
  url:"https://raw.githubusercontent.com/Cadastro-Marinho/BrasilData/master/IW.geojson",
  dataType: "json",
  success: console.log("IW data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

// Extensão da plataforma continental
var extensao = $.ajax({
  url:"https://raw.githubusercontent.com/Cadastro-Marinho/BrasilData/master/extensao_pc.geojson",
  dataType: "json",
  success: console.log("CP Extension data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

// Unidades de Conservação Ambiental
var uc = $.ajax({
  url:"https://raw.githubusercontent.com/Cadastro-Marinho/BrasilData/master/UC.geojson",
  dataType: "json",
  success: console.log("UC data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

// Portos públicos
var portos = $.ajax({
  url:"https://raw.githubusercontent.com/geoSPU/SPUData/master/portos.geojson",
  dataType: "json",
  success: console.log("Ports data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

// Aeroportos
var aeroportos = $.ajax({
  url:"https://raw.githubusercontent.com/geoSPU/SPUData/master/aeroportos.geojson",
  dataType: "json",
  success: console.log("Airports data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

//Parques Aquícolas
var sinau = $.ajax({
  url:"https://raw.githubusercontent.com/Cadastro-Marinho/BrasilData/master/MAPA/sinau.geojson",
  dataType: "json",
  success: console.log("Sinau data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

// SANTA CATARINA DATA
var municipios = $.ajax({
  url:"https://raw.githubusercontent.com/geoSPU/SPUData/master/municipios.geojson",
  dataType: "json",
  success: console.log("municipios data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});


// Itajai Waterway polygon (unofficial)
var waterway = $.ajax({
  url:"https://raw.githubusercontent.com/geoSPU/SPUData/master/poligono_canal_4326.geojson",
  dataType: "json",
  success: console.log("waterway data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

// SPUData

// Destinação

var cessoes = $.ajax({
  url:"https://raw.githubusercontent.com/geoSPU/SPUData/master/cessoes.geojson",
  dataType: "json",
  success: console.log("Cessions data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var ocupacoes = $.ajax({
  url:"https://raw.githubusercontent.com/geoSPU/SPU-SC-NUPRIV/master/ocupacoes.geojson",
  dataType: "json",
  success: console.log("Ocupations data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var certdisp = $.ajax({
  url:"https://raw.githubusercontent.com/geoSPU/SPUData/master/certdisp.geojson",
  dataType: "json",
  success: console.log("CertDisp data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var autobras = $.ajax({
  url:"https://raw.githubusercontent.com/geoSPU/SPUData/master/autobras.geojson",
  dataType: "json",
  success: console.log("autobras data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var entregas = $.ajax({
  url: "https://raw.githubusercontent.com/geoSPU/SPUData/master/entregas.geojson",
  dataType: "json",
  success: console.log("entregas data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var nujuc = $.ajax({
  url: "https://raw.githubusercontent.com/geoSPU/SPU-SC-NUJUC/master/nujuc.geojson",
  dataType: "json",
  success: console.log("SPU-SC-NUJUC data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }  
});

// Demarcacao

// Manguezais

var manguezais = $.ajax({
  url:"https://raw.githubusercontent.com/geoSPU/SPU-SC-NUDEM/master/manguezal_2015_babitonga.geojson",
  dataType: "json",
  success: console.log("Mangrove data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

// Poligonos da Uniao

var polUniao = $.ajax({
  url:"https://raw.githubusercontent.com/geoSPU/SPU-SC-NUDEM/master/Poligonos_LPM_Homologada.geojson",
  dataType: "json",
  success: console.log("Polígonos da União data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

// Linhas

var LLTM_DEMARCADA = $.ajax({
  url:"https://raw.githubusercontent.com/geoSPU/SPU-SC-NUDEM/master/linhas/LLTM_DEMARCADA.geojson",
  dataType: "json",
  success: console.log("LLTM Demarcada data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var LLTM_HOMOLOGADA = $.ajax({
  url:"https://raw.githubusercontent.com/geoSPU/SPU-SC-NUDEM/master/linhas/LLTM_HOMOLOGADA.geojson",
  dataType: "json",
  success: console.log("LLTM Homologada data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var LLTM_PRESUMIDA = $.ajax({
  url:"https://raw.githubusercontent.com/geoSPU/SPU-SC-NUDEM/master/linhas/LLTM_PRESUMIDA.geojson",
  dataType: "json",
  success: console.log("LLTM Presumida data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var LPM_DEMARCADA = $.ajax({
  url:"https://raw.githubusercontent.com/geoSPU/SPU-SC-NUDEM/master/linhas/LPM_DEMARCADA.geojson",
  dataType: "json",
  success: console.log("LPM Demarcada data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var LPM_HOMOLOGADA = $.ajax({
  url:"https://raw.githubusercontent.com/geoSPU/SPU-SC-NUDEM/master/linhas/LPM_HOMOLOGADA.geojson",
  dataType: "json",
  success: console.log("LPM Homologada data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var LPM_PRESUMIDA = $.ajax({
  url:"https://raw.githubusercontent.com/geoSPU/SPU-SC-NUDEM/master/linhas/LPM_PRESUMIDA.geojson",
  dataType: "json",
  success: console.log("LPM Presumida data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var transporte_aquaviario = $.ajax({
  url:"https://raw.githubusercontent.com/geoSPU/SPUData/master/transporte-aquaviario.geojson",
  dataType: "json",
  success: console.log("transporte_aquaviario data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var ranchos_pesca = $.ajax({
  url:"https://raw.githubusercontent.com/geoSPU/SPUData/master/ranchos_de_pesca.geojson",
  dataType: "json",
  success: console.log("ranchos_de_pesca data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});  

var consultasNUDEPU = $.ajax({
  url:"https://raw.githubusercontent.com/NUDEPU/consultas/master/ilha_FLN.geojson",
  dataType: "json",
  success: console.log("Consultas NUDEPU data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});




/* when().done() SECTION*/
// Add the variable for each of your AJAX requests to $.when()
$.when(portos, aeroportos, cessoes, ocupacoes, certdisp, autobras, entregas,
  nujuc, linhadecosta, polUniao, LLTM_DEMARCADA, LLTM_HOMOLOGADA, LLTM_PRESUMIDA, 
  LPM_DEMARCADA, LPM_HOMOLOGADA, LPM_PRESUMIDA, consultasNUDEPU, 
  waterway).done(function() {
  
  var WSM = L.tileLayer(
    'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}.png', {
		maxZoom: 18,
		label: "World Street Map",
		attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    });
              
  var OpenStreetMap_Mapnik = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      label: "OpenStreetMap",
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  var OpenTopoMap = L.tileLayer(
    'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      label: "OpenTopoMap",
      attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https ap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });

  var wmsLayer = L.tileLayer.wms(
    'http://sigsc.sc.gov.br/sigserver/SIGSC/wms', {
      maxNativeZoom: 19,
      maxZoom: 100,
      layers: 'OrtoRGB-Landsat-2012',
      label: "SIG/SC",
      iconURL: 'sig-sc.png'
  });

  var CBERS = L.tileLayer.wms(
    'http://brazildatacube.dpi.inpe.br/bdc/geoserver/bdc_brmosaic/wms', {
      maxNativeZoom: 19,
      maxZoom: 100,
      layers: 'cbers_full_resolution_tiles',
      labels: 'CBERS'
  });

  var Esri_WorldImagery = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxNativeZoom: 17,
      maxZoom: 100,
      label: "Esri World Imagery",
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  });
  
  var Esri_OceanBasemap = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}', {
     maxZoom: 13,
     label: "Esri Ocean Basemap",
     attribution: 'Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri'
  });
     
  var Esri_NatGeoWorldMap = L.tileLayer(
   'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
     maxZoom: 16,
     label: 'Esri NatGeo World Map',
     attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC'
  });
  
  var Esri_WorldShadedRelief = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}', {
	  attribution: 'Tiles &copy; Esri &mdash; Source: Esri',
	  maxZoom: 13
  });
  
  var stamenTerrain = L.tileLayer(
    'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
    subdomains: 'abcd',
	  minZoom: 0,
	  maxZoom: 18,
	  ext: 'png'
  });
  
  var stamenWatercolor = L.tileLayer(
    'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	    subdomains: 'abcd',
    	minZoom: 1,
	    maxZoom: 16,
	    ext: 'jpg'
  });
  
  var Esri_WorldGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
  });
  
  var mappos = L.Permalink.getMapLocation(zoom= 8, center = [-27.5000, -50.5000]);
  
  var map = L.map('map', {
      center: mappos.center,
	    zoom: mappos.zoom,
//    drawControl: true,
      zoomControl: false,
      preferCanvas: false,
      attributionControl: false,
      fullscreenControl: true,
      fullscreenControlOptions: {
      position: 'topright'
      },
      measureControl:true,
  }),
  geojsonOpts = {
    style: destStyle,
			onEachFeature: function(feature, layer) {
				return layer.bindPopup(
				  "<b>RIP: </b>" + setDefaultVal(feature.properties.rip, '-') + "<br>" +
          "<b>Interessado: </b>" + feature.properties.interessado + "<br>" +
          "<b>NUP: </b>" + feature.properties.nup + "<br>" +
          "<b>Perímetro: </b>" + turf.length(feature, {units: 'meters'}).toLocaleString('de-DE', { maximumFractionDigits: 2 }) + " m<br>" +
          "<b>Área Total: </b>" + feature.properties.area + " m<sup>2</sup><br>" +
          "<b>Área União: </b>" + feature.properties.area_uniao + " m<sup>2</sup><br>" +
          "<b>Município: </b>" + feature.properties.municipio + "<br>" +
          "<b>Logradouro-Trecho: </b>" + feature.properties.logradouro + "-" +
          feature.properties.trecho+ "<br>" +
          "<b>Avaliação: </b>" + feature.properties.aval + "<br>" +
          "<b>Data da Avaliação: </b>" + feature.properties.dataaval + "<br>" +
          "<b>Data Início: </b>" + feature.properties.inicio + "<br>" +
          "<b>Data Vigência: </b>" + feature.properties.vigencia + "<br>" +
          "<b>Centróide: </b>" + turf.getCoord(turf.centroid(feature)).toLocaleString('de-DE', { maximumFractionDigits: 4})
          
          );
			}
	};
	
	L.Permalink.setup(map);
  
/*
  // FeatureGroup is to store editable layers
  var drawnItems = new L.FeatureGroup();
  
  map.addLayer(drawnItems);
  
  var drawControl = new L.Control.Draw({
      edit: {
          featureGroup: drawnItems
      }
  });
  map.addControl(drawControl);
*/

  // Add Minimap
  var miniMap = new L.Control.MiniMap(Esri_WorldGrayCanvas, {
      position: 'topright',
      toggleDisplay: true,
      zoomLevelOffset: -6
    }
  ).addTo(map);
  
  // Adds Territorial Limits layers
  
    proj4.defs('EPSG:31982', '+proj=utm +zone=22 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ');

  // Adds SIRGAS2000 GeoJSON
  var LatinAmerica = L.geoJSON(latinamerica.responseJSON, {
    snapIgnore : true,
    style: function(feature) {
      return{
        fillOpacity: 0.25,
        color: feature.COLORMAP,
        weight: 0.75
      };
    },
    onEachFeature: function( feature, layer ){
      layer.bindPopup(
        "<b>Nome: </b>" + feature.properties.LOCLNGNAM + "<br>" +
        "<b>Status: </b>" + feature.properties.STATUS + "<br>" +
        "<b>Área: </b>" + feature.properties.SQKM.toLocaleString('de-DE', { maximumFractionDigits: 2 }) + " km &#178; <br>" +
        "<b>População (2019): </b>" + feature.properties.POP_CNTRY.toLocaleString('de-DE', { maximumFractionDigits: 0 })
        );
      layer.bindTooltip(feature.properties.LOCSHRTNAM,{
        permanent: false
      });
    }
  });
  
  var UF_2013 = new L.WFS({
    crs: L.CRS.EPSG4326,
    filter: new L.Filter.NotEQ('nomuf', 'Santa Catarina'),
    geometryField: 'geom',
    url: `https://geoservicos.ibge.gov.br/geoserver/ows`,
    typeNS: 'CGEO',
    typeName: 'UF_2013',
    opacity: 1,
    style: function(layer) {
      return {
        color:  'LightGray',
        weight: 2,
        opacity: 1
      };
    }
  }).addTo(map);
  
  var MUNICIPIOS = L.geoJSON(municipios.responseJSON, {
    snapIgnore : true,
    style: areaStyle,
    onEachFeature: function( feature, layer ){
      layer.bindPopup(
        "<b>Município: </b>" + feature.properties.nome + "<br>" +
        "<b>Geocodigo: </b>" + feature.properties.geocodigo + "<br>" +
        "<b>Gestão de Praias: </b>" + gestaoPraiaStatus(feature)  + "<br>" +
        "<b>NUP: </b>" + feature.properties.nup_gpraia 
      );
      layer.bindTooltip(feature.properties.nome,{
        permanent: false
      });
    }
  });


  var zonasMaritimasBrasil = new L.WFS({
    crs: L.CRS.EPSG4326,
    showExisting: true,
    geometryField: 'geom',
    url: `https://geoservicos.ibge.gov.br/geoserver/ows`,
    typeNS: 'CCAR',
    typeName: 'BCIM_Outros_Limites_Oficiais_L',
    opacity: 1,
    style: function(layer) {
      return {
        color:  'RoyalBlue',
        weight: 1,
        opacity: 1,
        dashArray: 3
      };
    }
  }).addTo(map);
  
  var popup = new L.Popup();
  
  zonasMaritimasBrasil.on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent(e.layer.feature.properties.nome)
      .openOn(map);
  });
  
  zonasMaritimasBrasil.bindTooltip("Limites Zonas Marítimas", {
    sticky: true // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
  }).addTo(map);
  
  // https://geoservicos.ibge.gov.br/geoserver/ows?service=WFS&version=2.0.0&request=GetFeature&typeName=CGEO:AtlasMar_Linhadecosta&outputFormat=application/json
  
  /*
  var linhaCosta = new L.WFS({
    crs: L.CRS.EPSG4326,
    showExisting: true,
    geometryField: 'shape',
    url: `https://geoservicos.ibge.gov.br/geoserver/ows`,
    typeNS: 'CGEO',
    typeName: 'AtlasMar_Linhadecosta',
    opacity: 1,
    style: function(layer) {
      return {
        color:  'RoyalBlue',
        weight: 1,
        opacity: 1
      };
    }
  }).addTo(map);
  */
  
  var linhaCosta = L.geoJson(linhadecosta.responseJSON, {
      style: function (feature) {
        return {
          weight: 2,
          opacity: 1,
          color: 'brown',
          dashArray: '3',
        };
      }
  });

  var oneHundredMetersOut = turf.buffer(linhadecosta.responseJSON, 200, { 
    units: 'meters'
  });
  
  var LCBuff =  L.geoJSON(oneHundredMetersOut, {
    style:{
      color: 'brown',
      weight: 2,
      fillOpacity: 0.25
    }
  }
  );
  
  /*
  var zonasMaritimasBrasil = L.geoJson(zonasmaritimasbrasil.responseJSON, {
      style: function (feature) {
        return {
          weight: 2,
          opacity: 1,
          color: 'LightGray',
          dashArray: '3',
        };
      }
  }).addTo(map);
  */
  
  var waterWay = L.geoJson(waterway.responseJSON, {
      style: function (feature) {
        return {
          weight: 2,
          opacity: 1,
          color: 'yellow',
          dashArray: '3',
        };
      }
  }).addTo(map);

  var oneHundredMetersOut = turf.buffer(linhadecosta.responseJSON, 200, { 
    units: 'meters'
  });
  
  // Camadas WMS do IBGE
  
  // Demarcação
  // var UF_2013 = IBGE.getLayer('CGEO:UF_2013').addTo(map);
  // var linhaCosta = IBGE.getLayer('CGEO:AtlasMar_Linhadecosta').addTo(map);
  var faixaFronteira = IBGE.getLayer('CGEO:ANMS2010_02_faixafronteira');
  var massaDagua = IBGE.getLayer('CCAR:BC250_2019_Massa_Dagua_A');
  var INDIOS = IBGE.getLayer('CCAR:BCIM_Terra_Indigena_A');
  
  // batimetria
  var batimetriaFlorianopolis = IBGE.getLayer('CGEO:AtlasMar_Batimetria_Florianopolis');
  var curvaBatimetrica = IBGE.getLayer('CCAR:BCIM_Curva_Batimetrica_L');
  var pontoCotado = IBGE.getLayer('CCAR:BCIM_Ponto_Cotado_Batimetrico_P');  
  
  // Meio Ambiente
  var UC_Estaduais = IBGE.getLayer('CGEO:AtlasMar_UC_Estaduais');
  var UC_Federais = IBGE.getLayer('CGEO:AtlasMar_UC_Federais');
  var UProtIntegral = IBGE.getLayer('CGEO:IDS_17_Uni_de_Conserv_Protecao_Int_2_2');

  // Minérios
  var potencialidadeMineral = IBGE.getLayer('CGEO:AtlasMar_RecursosMinerais_polygon');
  var PreSal = IBGE.getLayer('CGEO:AtlasMar_AreaPreSal');
  var plataformasPetroleo = IBGE.getLayer('CGEO:LE2015_17_plataformas_petroleo');
  var Blocos = IBGE.getLayer('CGEO:AtlasMar_BlocosExploratorios');
  var Campos = IBGE.getLayer('CGEO:LE2015_00_campos_petroleo_gas');
  var baciasSedimentares = IBGE.getLayer('CGEO:AtlasMar_BaciasSedimentaresOceanicas');

//  var GASBOL = IBGE.getLayer('CGEO:C02_gasoduto');
  var Dutos = IBGE.getLayer('CGEO:ANMS2010_06_dutospetroleogas2009');
  
  // Camadas WMS da ANA
  
  var Bacias = ANA.getLayer('143');
  
  // Camadas WMS do MP
  
  var marinhaMercante = MP.getLayer('Marinha_Mercante');
  
  var airports = MP.getLayer('cosiplan_aeroportos1');
  
  // Camadas WMS do ICA
  
  var REAFLN = ICA.getLayer('REA_FLORIANOPOLIS', {
    'format': 'image/png', 
    'transparent': true, 
    'opacity': 1
  });
  
  /*
  var UCs = L.WMS.tileLayer("https://geoservicos.ibge.gov.br/geoserver/ows", {
    'tileSize': 512,
    'layers': 'CGEO:AtlasMar_UC_Estaduais,CGEO:AtlasMar_UC_Federais',
    'format': 'image/png',
    'transparent': true,
    'opacity': 0.3,
    'attribution': "<a href='http://geoservicos.ibge.gov.br/'>IBGE</a>",
    'info_format': 'text/html'
  });
  */
  

  var EEZ = L.geoJSON(eez.responseJSON, {
    snapIgnore : true,
    style: {
      color: '#133863',
      weight: 2,
      fillOpacity: 0.25
    },
    onEachFeature: function( feature, layer ){
                 layer.bindPopup(
                   "<b>Descrição: </b>" + feature.properties.GEONAME + "<br>" +
                   "<b>Fonte: </b>" + link(feature) + "<br>" +
                   "<b>Área (km &#178; ): " + feature.properties.AREA_KM2.toLocaleString('de-DE', { maximumFractionDigits: 2 }) + "    <br>" +
                   "<b>Obs.: </b>" + "Não contempla a extensão da plataforma continental."
                   );
    }
  }
  );
  
  var EXTENSAO = L.geoJSON(extensao.responseJSON, {
    snapIgnore : true,
    style: {
      color: 'LightGray',
      weight: 2,
      fillOpacity: 0.25
    },
    onEachFeature: function( feature, layer ){
                   layer.bindPopup(
                     "<b>Nome: </b>" + feature.properties.nome + "<br>" +
                     "<b>Região: </b>" +  feature.properties.regiao + "<br>" +
                     "<b>Área (km &#178;): </b>" + 
                     Area(feature).toLocaleString('de-DE', { 
                       maximumFractionDigits: 2 })
                     );
      }
    }
  ).addTo(map);
  
  var CZ = L.geoJSON(cz.responseJSON, {
    snapIgnore : true,
    style:{
      color: '#236AB9',
      weight: 2,
      fillOpacity: 0.25
    },
    onEachFeature: function( feature, layer ){
                   layer.bindPopup(
                     "<b>Descrição: </b>" + "Zona Contígua (24 MN)" + "<br>" +
                     "<b>Fonte: </b>" + "<a href= http://www.marineregions.org/gazetteer.php?p=details&id=49410 target='_blank'>Link.</a>" + "<br>" +
                     "<b>Área (km &#178; ): " + feature.properties.area_km2.toLocaleString('de-DE', { maximumFractionDigits: 2 }) + "<br>" +
                     "<b>Obs.: </b>" + "-."
                     );
      }
    }
  );

  var TS = L.geoJSON(ts.responseJSON, {
    snapIgnore : true,
    style:{
      color: '#609CE1',
      fillOpacity: 0.25
    },
    onEachFeature: function( feature, layer ){
                   layer.bindPopup(
                     "<b>Descrição: </b>" + "Mar Territorial (12 MN)" + "<br>" +
                     "<b>Fonte: </b>" + "<a href=  http://www.marineregions.org/gazetteer.php?p=details&id=49178 target='_blank'>Link.</a>" + "<br>" +
                     "<b>Área (km &#178; ): " + feature.properties.area_km2.toLocaleString('de-DE', { maximumFractionDigits: 2 }) + "<br>" +
                     "<b>Obs.: </b>" + "-."
                     );
      }
    }
  );

  var IW = L.geoJSON(iw.responseJSON, {
    snapIgnore : true,
    style:{
      color: '#E1ECF9',
      weight: 2,
      fillOpacity: 0.25
    },
      onEachFeature: function( feature, layer ){
                     layer.bindPopup(
                       "<b>Descrição: </b>" + "Águas Internas (12 MN)" + "<br>" +
                       "<b>Fonte: </b>" + "<a href=  http://www.marineregions.org/gazetteer.php?p=details&id=49532 target='_blank'>Link.</a>" + "<br>" +
                       "<b>Área (km &#178; ): " + feature.properties.area_km2.toLocaleString('de-DE', { maximumFractionDigits: 2 }) + "<br>" +
                       "<b>Obs.: </b>" + "-."
                       );
        }
      }
  );
  
  var SINAU = L.geoJSON(sinau.responseJSON,{
    style: sinauStyle,
    onEachFeature: function(feature, layer){
      layer.bindPopup(
        "<b>Tipo do Projeto: </b>" + feature.properties.Tipo_Proje + "<br>" +
        "<b>Status: </b>" + feature.properties.StatusProc + "<br>" +
        "<b>Área: </b>" + turf.area(feature).toLocaleString('de-DE', {
          maximumFractionDigits: 2 }) + " m<sup>2</sup><br>" 
      )
    }
  });
  
  var POLUNIAO = L.geoJSON(polUniao.responseJSON, {
    style: {
      color: 'Tomato',
      weight: 2
    },
    onEachFeature: function( feature, layer ){
      layer.bindPopup(
        "<b>Tipo: </b>" + feature.properties.TIPO + "<br>" +
        "<b>Processo: </b>" + feature.properties.PROCESSO + "<br>" +
        "<b>Trecho: </b>" + feature.properties.TRECHO  + "<br>" +
        "<b>Subtrecho: </b>" + feature.properties.SUBTRECHO  + "<br>" +
        "<b>LPM_LTM: </b>" + feature.properties.LPM_LTM  + "<br>" +
        "<b>Fonte: </b>" + feature.properties.FONTE  + "<br>" +
        "<b>Área: </b>" + feature.properties.AREA_M2_FM  + "m <sup>2</sup><br>" +
        "<b>Status: </b>" + feature.properties.STATUS  + "<br>" +
        "<b>Edital: </b>" + feature.properties.EDITAL_NUM  + "<br>" +
        "<b>Data da homologação: </b>" + feature.properties.DATA_HOMOL
      );
    }
  }
  );
  
  var MANGUEZAIS = L.geoJSON(manguezais.responseJSON, {
    style: {
      color: 'DarkOliveGreen',
      weight: 1
    },
    onEachFeature: function( feature, layer ){
      layer.bindPopup(
        "<b>Classe: </b>" + feature.properties.CLASSE + "<br>" +
        "<b>Área: </b>" + feature.properties.AREA  + "m <sup>2</sup>"
      );
    }
  }
  );

  
  var UC = L.geoJSON(uc.responseJSON, {
    snapIgnore : true,
    style:{
      color: 'DarkOliveGreen',
      weight: 2,
      fillOpacity: 0.25
    },
    onEachFeature: function( feature, layer ){
                   layer.bindPopup(
                     "<b>Nome: </b>" + feature.properties.NOME_UC1 + "<br>" +
                     "<b>Categoria: </b>" + feature.properties.CATEGORI3 + "<br>" +
                     "<b>Esfera: </b>" + feature.properties.ESFERA5  + "<br>" +
                     "<b>Organização: </b>" + feature.properties.NOME_ORG12
                     );

    }
  }
  )

  var Portos = L.geoJSON(portos.responseJSON, {
    style: function(feature) {
      return{
        fillOpacity: 0.25,
        color: 'orange',
        weight: 0.75
      };
    },
    onEachFeature: function( feature, layer ){
                   layer.bindPopup(
                     "<b>Descrição: </b>" + feature.properties.descricao + "<br>" +
                     "<b>Área: </b>" + feature.properties.area.toLocaleString('de-DE', { 
                       maximumFractionDigits: 2 }) + " m<sup>2</sup><br>" +
                     "<b>Área da União: </b>" + feature.properties.area_uniao +  " m<sup>2</sup><br>" + 
                     "<b>NUP: </b>" + feature.properties.nup + "<br>" +
                     "<b>Portaria: </b>" + feature.properties.portaria + "<br>" +
                     "<b>Anexo: </b>" + feature.properties.anexo + "<br>" +
                     "<b>Data: </b>" + feature.properties.data + "<br>" +
                     "<b>Fonte: </b>" + "<a href=" + feature.properties.fonte + ">Link para portaria.</a>" + "<br>" +
                     "<b>Observação: </b>" + feature.properties.obs
                     );

      }
    }
  ).addTo(map);
  
  const airportIcon = L.divIcon({
    html: '<i class="fas fa-plane" style="color: magenta"></i>',
    iconSize: [30, 30],
    className: 'myDivIcon' // We don't want to use the default class
  });
  
  var Aeroportos = L.geoJSON(aeroportos.responseJSON,{
    pointToLayer: function(feature, latlng) {
      if (feature.geometry.type === 'Point') {
        return new L.marker(latlng, { icon: airportIcon });  
      }
      }, onEachFeature: function(feature,layer){
                        if (feature.geometry.type === 'Polygon' || feature.geometry.type === 'MultiPolygon') {
                            console.log('Polygon detected');
                            L.marker(turf.getCoord(turf.flip(turf.centroid(feature))),
                            {icon: airportIcon}).addTo(map);
                        }
                   layer.bindPopup(
                    "<b>ICAO: </b>" + feature.properties.ICAO + "<br>" +
                    "<b>IATA: </b>" + feature.properties.IATA + "<br>" +
                    "<b>Nome: </b>" + feature.properties.nome + "<br>" +
                    "<b>Administração: </b>" + feature.properties.interessado + "<br>" +
                    "<b>NUP: </b>" + feature.properties.nup + "<br>" +
                    "<b>Perímetro: </b>" + feature.properties.perimetro + "<br>" +
                    "<b>Área: </b>" + feature.properties.area + "<br>"
                  );
                }
  }
  ).addTo(map);

  
  /*
  var Aeroportos = L.geoJSON(aeroportos.responseJSON, {
    style: function(feature) {
      return{
        fillOpacity: 0.25,
        color: 'DodgerBlue',
        weight: 0.75
      };
    },
    onEachFeature: function( feature, layer ){
      if (feature.geometry.type === 'Polygon') {
        console.log('Polygon detected');
        var centroid = turf.centroid(feature);
        L.marker(turf.getCoords(turf.flip(centroid)), {icon:pesca}).addTo(map);
      }
      layer.bindPopup(

      );
    }
  }).addTo(map);
  
  */
  
  // Adds Union destination objects
  
  var Destinacao = L.layerGroup([
		L.geoJson(certdisp.responseJSON, geojsonOpts),
		L.geoJson(cessoes.responseJSON, geojsonOpts),
		L.geoJson(ocupacoes.responseJSON, geojsonOpts),
		L.geoJson(autobras.responseJSON, geojsonOpts),
		L.geoJson(entregas.responseJSON, geojsonOpts)
	]
	).addTo(map);
	

	
  /*
  
  var CertDisp = L.geoJSON(certdisp.responseJSON, {
    style:{
      color: 'Grey',
      weight: 2,
      fillOpacity: 0.25
    },
    onEachFeature: function( feature, layer ){
                   layer.bindPopup(
                     "<b>Interessado: </b>" + feature.properties.interessado + "<br>" +
                     "<b>NUP: </b>" + feature.properties.nup + "<br>" +
                     "<b>Concedida: </b>" + feature.properties.concedida  + "<br>"
                     );

    }
  }
  ).addTo(map);
  
  var Cessoes = L.geoJSON(cessoes.responseJSON, {
      style: function(feature) {
        return{
          color: 'Grey',
          weight: 2,
          fillOpacity: 0.25
        };
      },
      onEachFeature: function( feature, layer ){
                   layer.bindPopup(
                     "<b>Interessado: </b>" + feature.properties.interessado + "<br>" +
                     "<b>CNPJ: </b>" + feature.properties.cnpj + "<br>" +
                     "<b>Protocolo: </b>" + feature.properties.protocolo + "<br>" +
                     "<b>NUP: </b>" + feature.properties.nup + "<br>" +
                     "<b>Referência: </b>" + feature.properties.ref + "<br>" +
                     "<b>Perímetro: </b>" + turf.length(feature, {units: 'meters'}).toLocaleString('de-DE', { maximumFractionDigits: 2 }) + " m<br>" +
                     "<b>Área Total: </b>" + turf.area(feature).toLocaleString('de-DE', { maximumFractionDigits: 2 }) + " m<sup>2</sup><br>" +
                     "<b>Área União: </b>" + areaUniao(feature).toLocaleString('de-DE', { maximumFractionDigits: 2 }) + " m<sup>2</sup><br>"
                    );

      }
    }
  ).addTo(map);

  var Ocupacoes = L.geoJSON(ocupacoes.responseJSON, {
      style: {
        color: 'Grey',
        weight: 2,
        fillOpacity: 0.25
      },
      onEachFeature: function( feature, layer ){
                   layer.bindPopup(
                     "<b>RIP: </b>" + feature.properties.rip + "<br>" +
                     "<b>Interessado: </b>" + feature.properties.interessado + "<br>" +
                     "<b>NUP: </b>" + feature.properties.nup + "<br>" +
                     "<b>Área Total: </b>" + feature.properties.area.toLocaleString('de-DE', { maximumFractionDigits: 2 }) + "<br>" +
                     "<b>Área União: </b>" + feature.properties.area_uniao.toLocaleString('de-DE', { maximumFractionDigits: 2 })
                     );
      }
    }
  ).addTo(map);
  
  var AutObras = L.geoJSON(autobras.responseJSON, {
      style: function(feature) {
        return{
          color: 'Grey',
          weight:  2,
          fillOpacity: 0.25
        };
      },
      onEachFeature: function( feature, layer ){
                   layer.bindPopup(
                     "<b>Interessado: </b>" + feature.properties.interessado + "<br>" +
                     "<b>CNPJ: </b>" + feature.properties.cnpj + "<br>" +
                     "<b>Protocolo: </b>" + feature.properties.protocolo + "<br>" +
                     "<b>NUP: </b>" + feature.properties.nup + "<br>" +
                     "<b>Referência: </b>" + feature.properties.ref + "<br>" +
                     "<b>Área: </b>" + feature.properties.area.toLocaleString('de-DE', { maximumFractionDigits: 2 })
                     );

      }
    }
  ).addTo(map);
  
  */
  
  var NUJUC = L.geoJSON(nujuc.responseJSON, {
    style: {
      color: 'red',
      weight: 2,
      dashArray: "20 20" 
    },
    onEachFeature: function( feature, layer ){
      layer.bindPopup(
        "<b>ID: </b>" + feature.properties.ID + "<br>" +
        "<b>Procedimento: </b>" + feature.properties.procedimento + "<br>" +
        "<b>Resumo: </b>" + feature.properties.resumo + "<br>" +
        "<b>Descrição: </b>" + feature.properties.descricao 
      )
    }
  })
  
  var CONSULTASNUDEPU = L.geoJSON(consultasNUDEPU.responseJSON, {
    style: {
      color: 'red',
      weight: 2,
      dashArray: "20 20" 
    },
    onEachFeature: function( feature, layer ){
      layer.bindPopup(
        "<b>Obs.: </b>" + feature.properties.observacoes
      )
    }
  }).addTo(map);
  
  var LLTM_DEM = L.geoJSON(LLTM_DEMARCADA.responseJSON, {
    style: {
      color: 'red',
      weight: 2,
      dashArray: "20 20" 
    },
    onEachFeature: function( feature, layer ){
      layer.bindPopup(
        "<b>Linha: </b>" + feature.properties.Linha + "<br>" +
        "<b>Status: </b>" + feature.properties.Status + "<br>" +
        "<b>SRID Origem: </b>" + feature.properties.SRID  
      );
      layer.setText(feature.properties.Linha + " " +
                    feature.properties.Status, {
                      repeat: false,
                      offset: 12,
                      attributes: {
                        'font-weight': 'bold',
                        'font-size': '12'}
                    });
    }
  }
  ).addTo(map);
  

  var LLTM_HOM = L.geoJSON(LLTM_HOMOLOGADA.responseJSON, {
    style: {
      color: 'red',
      weight: 2
    },
    onEachFeature: function( feature, layer ){
      layer.bindPopup(
        "<b>Linha: </b>" + feature.properties.Linha + "<br>" +
        "<b>Status: </b>" + feature.properties.Status + "<br>" +
        "<b>SRID Origem: </b>" + feature.properties.SRID  
      );
      layer.setText(setDefaultVal(feature.properties.Linha, '') + " " +
                    setDefaultVal(feature.properties.Status, ''), {
                      repeat: false,
                      offset: 12,
                      attributes: {
                        'font-weight': 'bold',
                        'font-size': '12'}
                    });
    }
  }
  ).addTo(map);              

  var LLTM_PRE = L.geoJSON(LLTM_PRESUMIDA.responseJSON, {
    style: {
      color: 'red',
      weight: 2,
      opacity: 0.25,
      dashArray: "20 20"                
    },
    onEachFeature: function( feature, layer ){
      layer.bindPopup(
        "<b>Linha: </b>" + feature.properties.Linha + "<br>" +
        "<b>Status: </b>" + feature.properties.Status + "<br>" +
        "<b>SRID Origem: </b>" + feature.properties.SRID  
      );
      layer.setText(feature.properties.Linha + " " +
                    feature.properties.Status, {
                      repeat: false,
                      offset: 12,
                      attributes: {
                        'font-weight': 'bold',
                        'font-size': '12'}
                    });
    }
  }
  ).addTo(map);   
  
  var LPM_DEM = L.geoJSON(LPM_DEMARCADA.responseJSON, {
    style: {
      color: 'blue',
      weight: 2,
      dashArray: "20 20"  
    },
    onEachFeature: function( feature, layer ){
      layer.bindPopup(
        "<b>Linha: </b>" + feature.properties.Linha + "<br>" +
        "<b>Status: </b>" + feature.properties.Status + "<br>" +
        "<b>SRID Origem: </b>" + feature.properties.SRID  
      );
      layer.setText(feature.properties.Linha + " " +
                    feature.properties.Status, {
                      repeat: false,
                      offset: 12,
                      attributes: {
                        'font-weight': 'bold',
                        'font-size': '12'}
                    });
    }
  }
  ).addTo(map); 
      
  var LPM_HOM = L.geoJSON(LPM_HOMOLOGADA.responseJSON, {
    style: {
      color: 'blue',
      weight: 2
    },
    onEachFeature: function( feature, layer ){
      layer.bindPopup(
        "<b>Linha: </b>" + feature.properties.Linha + "<br>" +
        "<b>Status: </b>" + feature.properties.Status + "<br>" +
        "<b>SRID Origem: </b>" + feature.properties.SRID  
      );
      layer.setText(setDefaultVal(feature.properties.Linha, '') + " " +
                    setDefaultVal(feature.properties.Status, ''), {
                      repeat: false,
                      offset: 12,
                      attributes: {
                        'font-weight': 'bold',
                        'font-size': '12'}
                    });
    }
  }
  ).addTo(map);

  var LPM_PRE = L.geoJSON(LPM_PRESUMIDA.responseJSON, {
    style: {
      color: 'blue',
      weight: 2,
      opacity: 0.25,
      dashArray: "20 20"  
    },
    onEachFeature: function( feature, layer ){
      layer.bindPopup(
        "<b>Linha: </b>" + feature.properties.Linha + "<br>" +
        "<b>Status: </b>" + feature.properties.Status + "<br>" +
        "<b>SRID Origem: </b>" + feature.properties.SRID  
      );
      layer.setText(feature.properties.Linha + " " +
                    feature.properties.Status, {
                      repeat: false,
                      offset: 12,
                      attributes: {
                        'font-weight': 'bold',
                        'font-size': '12'}
                    });
    }
  }
  ).addTo(map);
  
  // Creating MapkeyIcon object
  var balsa = L.icon.mapkey({
    icon: 'sailboat',
    color:'#725139',
    background:'#f2c357',
    size:30
  });
  
  /*
  var aeroporto = L.icon.mapkey({
    icon: 'airport',
    color:'#725139',
    background:'#f2c357',
    size:30
  });
  */
  
  var marina = L.icon.mapkey({
    icon: 'marina',
    color:'#725139',
    background:'#f2c357',
    size:30
  });
  
  var heliponto = L.icon.mapkey({
    icon: 'helicopter',
    color:'#725139',
    background:'#f2c357',
    size:30
  });
  
  var pesca = L.icon.mapkey({
    icon:"fishing",
    color:'#725139',
    background:'#f2c357',
    size:30
  });
  
  // Append to marker:
  var Balsas = L.geoJSON(transporte_aquaviario.responseJSON, {
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, {icon:marina});
    }
  }
  );
  
  
  // Append to marker:
  var Pesca = L.geoJSON(ranchos_pesca.responseJSON, {
    pointToLayer: function(feature, latlng) {
      if (feature.geometry.type === 'Point') {
        return new L.marker(latlng, { icon: pesca });  
      }
      }, onEachFeature: function(feature,layer){
                        if (feature.geometry.type === 'Polygon' || feature.geometry.type === 'MultiPolygon') {
                            console.log('Polygon detected');
                            L.marker(turf.getCoord(turf.flip(turf.centroid(feature))),
                            {icon: pesca}).addTo(map);
                        }
      }
  });
  
  var baseLayers = {
      "CBERS": CBERS,
      "SIG-SC": wmsLayer,
      "OpenTopo": OpenTopoMap,
      "Esri World Imagery": Esri_WorldImagery,
      "World Street Map": WSM
      };

  var groupedOverlays = {
    "SPU": {
      "Destinação": Destinacao,
//      "Cessões": Cessoes,
//      "Ocupações": Ocupacoes,
//      "Certidões de Disponibilidade": CertDisp,
//      "Autorizações de Obras": AutObras,
      "TAUS": Pesca,
      "RESTRIÇÕES": NUJUC
    },
    "Terrenos de Marinha": {
      "Polígonos da União": POLUNIAO,
      "Manguezais": MANGUEZAIS,
      "LPM Homologada": LPM_HOM,
      "LPM Demarcada": LPM_DEM,
      "LPM Presumida": LPM_PRE,
      "LLTM Homologada": LLTM_HOM,
      "LLTM Demarcada": LLTM_DEM,
      "LLTM Presumida": LLTM_PRE
    },
    "Infraestrutura": {
      "Portos": Portos,
      "Aeroportos": Aeroportos,
      "Transporte Marítimo": Balsas
    }, 
    "Óleo e Gás": {
      "Área do Pré-Sal": PreSal,
      "Blocos Exploratórios": Blocos,
      "Campos de Exploração": Campos,
      "Plataformas de Petróleo": plataformasPetroleo,
      "Dutos": Dutos
    },
    "Limites territoriais":{
      "América Latina": LatinAmerica,
      "Municípios SC": MUNICIPIOS
    },
    "Zonas Marítimas": {
      "Águas Internas": IW,
      "Mar Territorial (12MN)": TS,
      "Zona Contígua (24MN)": CZ,
      "Zona Econômica Exclusiva (200MN)": EEZ,
      "Extensão da PC": EXTENSAO
    },
    "IBGE": {
      "Unidades da Federação": UF_2013,
      "Massa Dágua": massaDagua,
      "Potencialidade Mineral": potencialidadeMineral,
      "Bacias Sedimentares Oceânicas": baciasSedimentares,
      "Linha de Costa": linhaCosta,
      "Linha de Costa (buffer 100m)": LCBuff,
      "Faixa de Fronteira": faixaFronteira,
      "Territórios Indígenas": INDIOS,
      "Unidades de Conservação": UC,
//      "Unidades de Conservação (IBGE)": UCs
      "Unidades de Conservação Estaduais": UC_Estaduais,
      "Unidades de Conservação Federais": UC_Federais,
      "Unidades de Conservação de Proteção Integral": UProtIntegral
    },
    "Batimetria (IBGE)": {
      "Florianópolis": batimetriaFlorianopolis,
      "Curva batimétrica": curvaBatimetrica,
      "Pontos Cotados": pontoCotado
    },
    "ANA": {
      "Bacias Hidrográficas": Bacias
    },
    "MP": {
      "Marinha Mercante": marinhaMercante,
      "Aeroportos": airports
    },
    "ICA": {
      "REA Florianópolis": REAFLN
    },
    "MAPA": {
      "Parques Aquícolas": SINAU
    }
  };
  
  var basemaps = [
    wmsLayer, Esri_WorldImagery, Esri_WorldShadedRelief, Esri_OceanBasemap, 
    Esri_NatGeoWorldMap, OpenStreetMap_Mapnik, OpenTopoMap, stamenWatercolor, 
    CBERS
    ]
  
  map.addControl(L.control.basemaps({
    basemaps: basemaps,
    tileX: 0,  // tile X coordinate
    tileY: 0,  // tile Y coordinate
    tileZ: 1   // tile zoom level
  }));

  L.control.groupedLayers(null, groupedOverlays, {
    position: 'topleft'
  }).addTo(map);

  var searchControl = new L.Control.Search({
    layer: Destinacao,
  	propertyName: 'interessado',
    marker: false,
    moveToLocation: function(latlng, title, map) {
        //map.fitBounds( latlng.layer.getBounds() );
        var zoom = map.getBoundsZoom(latlng.layer.getBounds());
        map.setView(latlng, zoom); // access the zoom
        },
    buildTip: function(text, val) {
			var type = val.layer.feature.properties.destinacao;
			return '<a href="#" class="'+ type + '">' + text + '<b> ' + type + '</b></a>';
		}
  }
  ).addTo(map);

  L.control.mousePosition({
    position: 'bottomleft'
  }).addTo(map);

  L.control.betterscale({
    metric:  true,
    imperial: false,
    position: 'bottomleft'
  }).addTo(map);
  
  L.easyPrint({
    tileLayer: OpenStreetMap_Mapnik,
    title: 'Screenshot',
    position: 'topleft',
    sizeModes: ['Current', 'A4Landscape', 'A4Portrait'],
    exportOnly: true,
    hideControlContainer: false,
    hideClasses: ['leaflet-control-search', 
    'leaflet-control-mouseposition', 'leaflet-control-layers',
    'leaflet-control-easyPrint', 'leaflet-control-zoom-fullscreen', 
    'basemaps']
  }).addTo(map);
  
  L.latlngGraticule({
    showLabel: true,
    color: '#222',
    zoomInterval: [
      {start: 2, end: 3, interval: 30},
      {start: 4, end: 4, interval: 10},
      {start: 5, end: 7, interval: 5},
      {start: 8, end: 10, interval: 1},
      {start: 11, end:15, interval:.5}
    ]
  }).addTo(map);
  
  //logo position: bottomright, topright, topleft, bottomleft
  var logo = L.control({position: 'bottomleft'});
  
  logo.onAdd = function(map){
    var div = L.DomUtil.create('div', 'logoContainer');
    div.innerHTML= "<img src='https://raw.githubusercontent.com/geoSPU/SPUData/master/SPU.jpg' width='60' height='60' style='position: absolute; bottom: -5px; left: 0px; opacity:0.5;filter:alpha(opacity=50);' />";
    return div;
  }
  
  logo.addTo(map);
  
  var featureGroup = L.featureGroup().addTo(map);
  
  /*
  // add leaflet-geoman controls with some options to the map
  map.pm.addControls({
    position: 'topleft',
    drawCircle: true,
    edit: {
          featureGroup: featureGroup
      }
  });
  
  map.pm.setLang('pt_br');
  
  map.on('pm:create', function(e) {

      // Each time a feaute is created, it's added to the over arching feature group
      featureGroup.addLayer(e.layer);
  });
  */
  
  var drawControl = new L.Control.Draw({
      edit: {
          featureGroup: featureGroup
      }
  }).addTo(map);

  map.on('draw:created', function(e) {

      // Each time a feaute is created, it's added to the over arching feature group
      featureGroup.addLayer(e.layer);
  });

  /*
  // on click, clear all layers
  document.getElementById('delete').onclick = function(e) {
    featureGroup.clearLayers();
  }
  */
  
  document.getElementById('export').onclick = function(e) {
    // Extract GeoJson from featureGroup
    var data = featureGroup.toGeoJSON();

    // Stringify the GeoJson
    var convertedData = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));

    // Create export
    document.getElementById('export').setAttribute('href', 'data:' + convertedData);
    document.getElementById('export').setAttribute('download','data.geojson');
  }
  
  L.Control.FileLayerLoad.LABEL = '<img class="icon" src="folder.svg" alt="file icon"/>';
  control = L.Control.fileLayerLoad({
      // Allows you to use a customized version of L.geoJson.
      // For example if you are using the Proj4Leaflet leaflet plugin,
      // you can pass L.Proj.geoJson and load the files into the
      // L.Proj.GeoJson instead of the L.geoJson.
      layer: L.geoJson,
      // See http://leafletjs.com/reference.html#geojson-options
      layerOptions: {
        style: {
          color:'red',
          opacity: 1.0,
          fillOpacity: 0.5,
          weight: 2,
          clickable: false
        }
      },
      // Add to map after loading (default: true) ?
      addToMap: true,
      // File size limit in kb (default: 1024) ?
      fileSizeLimit: 1024,
      // Restrict accepted file formats (default: .geojson, .json, .kml, and .gpx) ?
      formats: [
          '.geojson',
          '.kml'
      ]
  });
  
  control.addTo(map);
  
  control.loader.on('data:loaded', function (e) {
      var layer = e.layer;
      console.log(layer);
  });
  
  var sidebar = L.control.sidebar({
    autopan: false,       // whether to maintain the centered map point when opening the sidebar
    closeButton: true,    // whether t add a close button to the panes
    container: 'sidebar', // the DOM container or #ID of a predefined sidebar container that should be used
    position: 'left',     // left or right
}).addTo(map);
  
});