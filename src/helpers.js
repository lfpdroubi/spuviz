function ibge(name){
  
  var owsrootUrl = 'https://geoservicos.ibge.gov.br/geoserver/ows';
  
  var defaultParameters = {
      service : 'WFS',
      version : '2.0',
      request : 'GetFeature',
      typeName : name,
      outputFormat : 'application/json',
      format_options : 'callback:getJson',
      SrsName : 'EPSG:4326'
  };
  
  var parameters = L.Util.extend(defaultParameters);
  var URL = owsrootUrl + L.Util.getParamString(parameters);
  
  return URL;
}

function sinauTipo (feature){
  console.log(feature);
	switch (feature.properties.Tipo_Proje){
  	case 'Parque Aquícola Marinho': return 'OrangeRed';
    case 'Parque Aquícola Estuarino': return 'LightYellow';
    case 'Parque Aquícola Continental': return 'LightGray';
    case 'Área Aquícola': return 'LightBlue';
    case 'Área emergencial': return 'red';
    	break;
  }
}

function sinauStyle(feature){
  return{
    fillColor: sinauTipo(feature),
    weight: 2,
    opacity: 0.5,
    color: 'white',
    fillOpacity: 0.5
  };
}

function gestaoPraiaStatus(feature){
  switch (feature.properties.gest_praia){
  	case 1 : return 'Sim' ;
    case 0 : return 'Não' ;
    	break;
  }
}

function getAreaColor(feature){
  console.log(feature);
	switch (feature.properties.gest_praia){
  	case 1 : return 'OrangeRed' ;
    case 0 : return 'LightYellow' ;
    	break;
  }
}

function tipoDest(feature){
  switch(feature.properties.destinacao){
    case 'cessao': return '#f66';
    case 'ocupacao': return '#f6f';
    case 'disponibilidade': return '#66f';
    case 'autorizacao': return '#DCDCDC';
     break;
  }
}

function destStyle(feature){
  return{
    fillColor:tipoDest(feature),
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: ((feature.properties.concedida) ? '0' : '5, 10'),
    fillOpacity: 0.5
  };
}

function areaStyle(feature){
	return {
  	fillColor: getAreaColor(feature),
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: 3,
    fillOpacity: 0.5
  };
}
          
function link(feature){
  return "<a href= http://www.marineregions.org/gazetteer.php?p=details&id=" + 
  feature.properties.MRGID + " target='_blank    '>Link.</a>"; 
}

function Area(feature){
  return turf.area(feature)/1000000;
}

function areaUniao(feature){
  
  f = polUniao.responseJSON.features;
  
  conflictlist = [];

  for (var j = 0; j < f.length; j++) {

    var parcel = f[j];

    console.log("Processing", j);
      var conflict = turf.intersect(feature, parcel);
        if (conflict !== null) {
            conflictlist.push(conflict);
        }
  }
  
  return(turf.area(turf.featureCollection(conflictlist)));
}
function setDefaultVal(value, defaultValue){
   return (value === undefined) ? defaultValue : value;
}  