let xhr=new XMLHttpRequest();
xhr.open('GET',"https://restcountries.com/v2/all")
xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300){
    let countrilist=JSON.parse(this.response)
    countrilist.map((country,index)=>{
       console.log(`
        country_name: ${country.name}
        subregion: ${country.subregion}
        region: ${country.region}
        `)
    })
    }
    else{
        console.log("Error...")
    }
}
xhr.send()


//output


// country_name: Afghanistan
// subregion: Southern Asia
// region: Asia

// country_name.js:7 
// country_name: Åland Islands
// subregion: Northern Europe
// region: Europe

// country_name.js:7 
// country_name: Albania
// subregion: Southern Europe
// region: Europe

// country_name.js:7 
// country_name: Algeria
// subregion: Northern Africa
// region: Africa

// country_name.js:7 
// country_name: American Samoa
// subregion: Polynesia
// region: Oceania

// country_name.js:7 
// country_name: Andorra
// subregion: Southern Europe
// region: Europe

// country_name.js:7 
// country_name: Angola
// subregion: Middle Africa
// region: Africa

// country_name.js:7 
// country_name: Anguilla
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Antarctica
// subregion: Antarctica
// region: Polar

// country_name.js:7 
// country_name: Antigua and Barbuda
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Argentina
// subregion: South America
// region: Americas

// country_name.js:7 
// country_name: Armenia
// subregion: Western Asia
// region: Asia

// country_name.js:7 
// country_name: Aruba
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Australia
// subregion: Australia and New Zealand
// region: Oceania

// country_name.js:7 
// country_name: Austria
// subregion: Central Europe
// region: Europe

// country_name.js:7 
// country_name: Azerbaijan
// subregion: Western Asia
// region: Asia

// country_name.js:7 
// country_name: Bahamas
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Bahrain
// subregion: Western Asia
// region: Asia

// country_name.js:7 
// country_name: Bangladesh
// subregion: Southern Asia
// region: Asia

// country_name.js:7 
// country_name: Barbados
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Belarus
// subregion: Eastern Europe
// region: Europe

// country_name.js:7 
// country_name: Belgium
// subregion: Western Europe
// region: Europe

// country_name.js:7 
// country_name: Belize
// subregion: Central America
// region: Americas

// country_name.js:7 
// country_name: Benin
// subregion: Western Africa
// region: Africa

// country_name.js:7 
// country_name: Bermuda
// subregion: Northern America
// region: Americas

// country_name.js:7 
// country_name: Bhutan
// subregion: Southern Asia
// region: Asia

// country_name.js:7 
// country_name: Bolivia (Plurinational State of)
// subregion: South America
// region: Americas

// country_name.js:7 
// country_name: Bonaire, Sint Eustatius and Saba
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Bosnia and Herzegovina
// subregion: Southern Europe
// region: Europe

// country_name.js:7 
// country_name: Botswana
// subregion: Southern Africa
// region: Africa

// country_name.js:7 
// country_name: Bouvet Island
// subregion: South Antarctic Ocean
// region: Antarctic Ocean

// country_name.js:7 
// country_name: Brazil
// subregion: South America
// region: Americas

// country_name.js:7 
// country_name: British Indian Ocean Territory
// subregion: Eastern Africa
// region: Africa

// country_name.js:7 
// country_name: United States Minor Outlying Islands
// subregion: Northern America
// region: Americas

// country_name.js:7 
// country_name: Virgin Islands (British)
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Virgin Islands (U.S.)
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Brunei Darussalam
// subregion: South-Eastern Asia
// region: Asia

// country_name.js:7 
// country_name: Bulgaria
// subregion: Eastern Europe
// region: Europe

// country_name.js:7 
// country_name: Burkina Faso
// subregion: Western Africa
// region: Africa

// country_name.js:7 
// country_name: Burundi
// subregion: Eastern Africa
// region: Africa

// country_name.js:7 
// country_name: Cambodia
// subregion: South-Eastern Asia
// region: Asia

// country_name.js:7 
// country_name: Cameroon
// subregion: Middle Africa
// region: Africa

// country_name.js:7 
// country_name: Canada
// subregion: Northern America
// region: Americas

// country_name.js:7 
// country_name: Cabo Verde
// subregion: Western Africa
// region: Africa

// country_name.js:7 
// country_name: Cayman Islands
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Central African Republic
// subregion: Middle Africa
// region: Africa

// country_name.js:7 
// country_name: Chad
// subregion: Middle Africa
// region: Africa

// country_name.js:7 
// country_name: Chile
// subregion: South America
// region: Americas

// country_name.js:7 
// country_name: China
// subregion: Eastern Asia
// region: Asia

// country_name.js:7 
// country_name: Christmas Island
// subregion: Australia and New Zealand
// region: Oceania

// country_name.js:7 
// country_name: Cocos (Keeling) Islands
// subregion: Australia and New Zealand
// region: Oceania

// country_name.js:7 
// country_name: Colombia
// subregion: South America
// region: Americas

// country_name.js:7 
// country_name: Comoros
// subregion: Eastern Africa
// region: Africa

// country_name.js:7 
// country_name: Congo
// subregion: Middle Africa
// region: Africa

// country_name.js:7 
// country_name: Congo (Democratic Republic of the)
// subregion: Middle Africa
// region: Africa

// country_name.js:7 
// country_name: Cook Islands
// subregion: Polynesia
// region: Oceania

// country_name.js:7 
// country_name: Costa Rica
// subregion: Central America
// region: Americas

// country_name.js:7 
// country_name: Croatia
// subregion: Southern Europe
// region: Europe

// country_name.js:7 
// country_name: Cuba
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Curaçao
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Cyprus
// subregion: Southern Europe
// region: Europe

// country_name.js:7 
// country_name: Czech Republic
// subregion: Central Europe
// region: Europe

// country_name.js:7 
// country_name: Denmark
// subregion: Northern Europe
// region: Europe

// country_name.js:7 
// country_name: Djibouti
// subregion: Eastern Africa
// region: Africa

// country_name.js:7 
// country_name: Dominica
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Dominican Republic
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Ecuador
// subregion: South America
// region: Americas

// country_name.js:7 
// country_name: Egypt
// subregion: Northern Africa
// region: Africa

// country_name.js:7 
// country_name: El Salvador
// subregion: Central America
// region: Americas

// country_name.js:7 
// country_name: Equatorial Guinea
// subregion: Middle Africa
// region: Africa

// country_name.js:7 
// country_name: Eritrea
// subregion: Eastern Africa
// region: Africa

// country_name.js:7 
// country_name: Estonia
// subregion: Northern Europe
// region: Europe

// country_name.js:7 
// country_name: Ethiopia
// subregion: Eastern Africa
// region: Africa

// country_name.js:7 
// country_name: Falkland Islands (Malvinas)
// subregion: South America
// region: Americas

// country_name.js:7 
// country_name: Faroe Islands
// subregion: Northern Europe
// region: Europe

// country_name.js:7 
// country_name: Fiji
// subregion: Melanesia
// region: Oceania

// country_name.js:7 
// country_name: Finland
// subregion: Northern Europe
// region: Europe

// country_name.js:7 
// country_name: France
// subregion: Western Europe
// region: Europe

// country_name.js:7 
// country_name: French Guiana
// subregion: South America
// region: Americas

// country_name.js:7 
// country_name: French Polynesia
// subregion: Polynesia
// region: Oceania

// country_name.js:7 
// country_name: French Southern Territories
// subregion: Southern Africa
// region: Africa

// country_name.js:7 
// country_name: Gabon
// subregion: Middle Africa
// region: Africa

// country_name.js:7 
// country_name: Gambia
// subregion: Western Africa
// region: Africa

// country_name.js:7 
// country_name: Georgia
// subregion: Western Asia
// region: Asia

// country_name.js:7 
// country_name: Germany
// subregion: Central Europe
// region: Europe

// country_name.js:7 
// country_name: Ghana
// subregion: Western Africa
// region: Africa

// country_name.js:7 
// country_name: Gibraltar
// subregion: Southern Europe
// region: Europe

// country_name.js:7 
// country_name: Greece
// subregion: Southern Europe
// region: Europe

// country_name.js:7 
// country_name: Greenland
// subregion: Northern America
// region: Americas

// country_name.js:7 
// country_name: Grenada
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Guadeloupe
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Guam
// subregion: Micronesia
// region: Oceania

// country_name.js:7 
// country_name: Guatemala
// subregion: Central America
// region: Americas

// country_name.js:7 
// country_name: Guernsey
// subregion: Northern Europe
// region: Europe

// country_name.js:7 
// country_name: Guinea
// subregion: Western Africa
// region: Africa

// country_name.js:7 
// country_name: Guinea-Bissau
// subregion: Western Africa
// region: Africa

// country_name.js:7 
// country_name: Guyana
// subregion: South America
// region: Americas

// country_name.js:7 
// country_name: Haiti
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Heard Island and McDonald Islands
// subregion: Antarctic
// region: Antarctic

// country_name.js:7 
// country_name: Vatican City
// subregion: Southern Europe
// region: Europe

// country_name.js:7 
// country_name: Honduras
// subregion: Central America
// region: Americas

// country_name.js:7 
// country_name: Hungary
// subregion: Central Europe
// region: Europe

// country_name.js:7 
// country_name: Hong Kong
// subregion: Eastern Asia
// region: Asia

// country_name.js:7 
// country_name: Iceland
// subregion: Northern Europe
// region: Europe

// country_name.js:7 
// country_name: India
// subregion: Southern Asia
// region: Asia

// country_name.js:7 
// country_name: Indonesia
// subregion: South-Eastern Asia
// region: Asia

// country_name.js:7 
// country_name: Ivory Coast
// subregion: Western Africa
// region: Africa

// country_name.js:7 
// country_name: Iran (Islamic Republic of)
// subregion: Southern Asia
// region: Asia

// country_name.js:7 
// country_name: Iraq
// subregion: Western Asia
// region: Asia

// country_name.js:7 
// country_name: Ireland
// subregion: Northern Europe
// region: Europe

// country_name.js:7 
// country_name: Isle of Man
// subregion: Northern Europe
// region: Europe

// country_name.js:7 
// country_name: Israel
// subregion: Western Asia
// region: Asia

// country_name.js:7 
// country_name: Italy
// subregion: Southern Europe
// region: Europe

// country_name.js:7 
// country_name: Jamaica
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Japan
// subregion: Eastern Asia
// region: Asia

// country_name.js:7 
// country_name: Jersey
// subregion: Northern Europe
// region: Europe

// country_name.js:7 
// country_name: Jordan
// subregion: Western Asia
// region: Asia

// country_name.js:7 
// country_name: Kazakhstan
// subregion: Central Asia
// region: Asia

// country_name.js:7 
// country_name: Kenya
// subregion: Eastern Africa
// region: Africa

// country_name.js:7 
// country_name: Kiribati
// subregion: Micronesia
// region: Oceania

// country_name.js:7 
// country_name: Kuwait
// subregion: Western Asia
// region: Asia

// country_name.js:7 
// country_name: Kyrgyzstan
// subregion: Central Asia
// region: Asia

// country_name.js:7 
// country_name: Lao People's Democratic Republic
// subregion: South-Eastern Asia
// region: Asia

// country_name.js:7 
// country_name: Latvia
// subregion: Northern Europe
// region: Europe

// country_name.js:7 
// country_name: Lebanon
// subregion: Western Asia
// region: Asia

// country_name.js:7 
// country_name: Lesotho
// subregion: Southern Africa
// region: Africa

// country_name.js:7 
// country_name: Liberia
// subregion: Western Africa
// region: Africa

// country_name.js:7 
// country_name: Libya
// subregion: Northern Africa
// region: Africa

// country_name.js:7 
// country_name: Liechtenstein
// subregion: Central Europe
// region: Europe

// country_name.js:7 
// country_name: Lithuania
// subregion: Northern Europe
// region: Europe

// country_name.js:7 
// country_name: Luxembourg
// subregion: Western Europe
// region: Europe

// country_name.js:7 
// country_name: Macao
// subregion: Eastern Asia
// region: Asia

// country_name.js:7 
// country_name: North Macedonia
// subregion: Southern Europe
// region: Europe

// country_name.js:7 
// country_name: Madagascar
// subregion: Eastern Africa
// region: Africa

// country_name.js:7 
// country_name: Malawi
// subregion: Eastern Africa
// region: Africa

// country_name.js:7 
// country_name: Malaysia
// subregion: South-Eastern Asia
// region: Asia

// country_name.js:7 
// country_name: Maldives
// subregion: Southern Asia
// region: Asia

// country_name.js:7 
// country_name: Mali
// subregion: Western Africa
// region: Africa

// country_name.js:7 
// country_name: Malta
// subregion: Southern Europe
// region: Europe

// country_name.js:7 
// country_name: Marshall Islands
// subregion: Micronesia
// region: Oceania

// country_name.js:7 
// country_name: Martinique
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Mauritania
// subregion: Western Africa
// region: Africa

// country_name.js:7 
// country_name: Mauritius
// subregion: Eastern Africa
// region: Africa

// country_name.js:7 
// country_name: Mayotte
// subregion: Eastern Africa
// region: Africa

// country_name.js:7 
// country_name: Mexico
// subregion: North America
// region: Americas

// country_name.js:7 
// country_name: Micronesia (Federated States of)
// subregion: Micronesia
// region: Oceania

// country_name.js:7 
// country_name: Moldova (Republic of)
// subregion: Eastern Europe
// region: Europe

// country_name.js:7 
// country_name: Monaco
// subregion: Western Europe
// region: Europe

// country_name.js:7 
// country_name: Mongolia
// subregion: Eastern Asia
// region: Asia

// country_name.js:7 
// country_name: Montenegro
// subregion: Southern Europe
// region: Europe

// country_name.js:7 
// country_name: Montserrat
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Morocco
// subregion: Northern Africa
// region: Africa

// country_name.js:7 
// country_name: Mozambique
// subregion: Eastern Africa
// region: Africa

// country_name.js:7 
// country_name: Myanmar
// subregion: South-Eastern Asia
// region: Asia

// country_name.js:7 
// country_name: Namibia
// subregion: Southern Africa
// region: Africa

// country_name.js:7 
// country_name: Nauru
// subregion: Micronesia
// region: Oceania

// country_name.js:7 
// country_name: Nepal
// subregion: Southern Asia
// region: Asia

// country_name.js:7 
// country_name: Netherlands
// subregion: Western Europe
// region: Europe

// country_name.js:7 
// country_name: New Caledonia
// subregion: Melanesia
// region: Oceania

// country_name.js:7 
// country_name: New Zealand
// subregion: Australia and New Zealand
// region: Oceania

// country_name.js:7 
// country_name: Nicaragua
// subregion: Central America
// region: Americas

// country_name.js:7 
// country_name: Niger
// subregion: Western Africa
// region: Africa

// country_name.js:7 
// country_name: Nigeria
// subregion: Western Africa
// region: Africa

// country_name.js:7 
// country_name: Niue
// subregion: Polynesia
// region: Oceania

// country_name.js:7 
// country_name: Norfolk Island
// subregion: Australia and New Zealand
// region: Oceania

// country_name.js:7 
// country_name: Korea (Democratic People's Republic of)
// subregion: Eastern Asia
// region: Asia

// country_name.js:7 
// country_name: Northern Mariana Islands
// subregion: Micronesia
// region: Oceania

// country_name.js:7 
// country_name: Norway
// subregion: Northern Europe
// region: Europe

// country_name.js:7 
// country_name: Oman
// subregion: Western Asia
// region: Asia

// country_name.js:7 
// country_name: Pakistan
// subregion: Southern Asia
// region: Asia

// country_name.js:7 
// country_name: Palau
// subregion: Micronesia
// region: Oceania

// country_name.js:7 
// country_name: Palestine, State of
// subregion: Western Asia
// region: Asia

// country_name.js:7 
// country_name: Panama
// subregion: Central America
// region: Americas

// country_name.js:7 
// country_name: Papua New Guinea
// subregion: Melanesia
// region: Oceania

// country_name.js:7 
// country_name: Paraguay
// subregion: South America
// region: Americas

// country_name.js:7 
// country_name: Peru
// subregion: South America
// region: Americas

// country_name.js:7 
// country_name: Philippines
// subregion: South-Eastern Asia
// region: Asia

// country_name.js:7 
// country_name: Pitcairn
// subregion: Polynesia
// region: Oceania

// country_name.js:7 
// country_name: Poland
// subregion: Central Europe
// region: Europe

// country_name.js:7 
// country_name: Portugal
// subregion: Southern Europe
// region: Europe

// country_name.js:7 
// country_name: Puerto Rico
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Qatar
// subregion: Western Asia
// region: Asia

// country_name.js:7 
// country_name: Republic of Kosovo
// subregion: Eastern Europe
// region: Europe

// country_name.js:7 
// country_name: Réunion
// subregion: Eastern Africa
// region: Africa

// country_name.js:7 
// country_name: Romania
// subregion: Eastern Europe
// region: Europe

// country_name.js:7 
// country_name: Russian Federation
// subregion: Eastern Europe
// region: Europe

// country_name.js:7 
// country_name: Rwanda
// subregion: Eastern Africa
// region: Africa

// country_name.js:7 
// country_name: Saint Barthélemy
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Saint Helena, Ascension and Tristan da Cunha
// subregion: Western Africa
// region: Africa

// country_name.js:7 
// country_name: Saint Kitts and Nevis
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Saint Lucia
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Saint Martin (French part)
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Saint Pierre and Miquelon
// subregion: Northern America
// region: Americas

// country_name.js:7 
// country_name: Saint Vincent and the Grenadines
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Samoa
// subregion: Polynesia
// region: Oceania

// country_name.js:7 
// country_name: San Marino
// subregion: Southern Europe
// region: Europe

// country_name.js:7 
// country_name: Sao Tome and Principe
// subregion: Middle Africa
// region: Africa

// country_name.js:7 
// country_name: Saudi Arabia
// subregion: Western Asia
// region: Asia

// country_name.js:7 
// country_name: Senegal
// subregion: Western Africa
// region: Africa

// country_name.js:7 
// country_name: Serbia
// subregion: Southern Europe
// region: Europe

// country_name.js:7 
// country_name: Seychelles
// subregion: Eastern Africa
// region: Africa

// country_name.js:7 
// country_name: Sierra Leone
// subregion: Western Africa
// region: Africa

// country_name.js:7 
// country_name: Singapore
// subregion: South-Eastern Asia
// region: Asia

// country_name.js:7 
// country_name: Sint Maarten (Dutch part)
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Slovakia
// subregion: Central Europe
// region: Europe

// country_name.js:7 
// country_name: Slovenia
// subregion: Southern Europe
// region: Europe

// country_name.js:7 
// country_name: Solomon Islands
// subregion: Melanesia
// region: Oceania

// country_name.js:7 
// country_name: Somalia
// subregion: Eastern Africa
// region: Africa

// country_name.js:7 
// country_name: South Africa
// subregion: Southern Africa
// region: Africa

// country_name.js:7 
// country_name: South Georgia and the South Sandwich Islands
// subregion: South America
// region: Americas

// country_name.js:7 
// country_name: Korea (Republic of)
// subregion: Eastern Asia
// region: Asia

// country_name.js:7 
// country_name: Spain
// subregion: Southern Europe
// region: Europe

// country_name.js:7 
// country_name: Sri Lanka
// subregion: Southern Asia
// region: Asia

// country_name.js:7 
// country_name: Sudan
// subregion: Northern Africa
// region: Africa

// country_name.js:7 
// country_name: South Sudan
// subregion: Middle Africa
// region: Africa

// country_name.js:7 
// country_name: Suriname
// subregion: South America
// region: Americas

// country_name.js:7 
// country_name: Svalbard and Jan Mayen
// subregion: Northern Europe
// region: Europe

// country_name.js:7 
// country_name: Swaziland
// subregion: Southern Africa
// region: Africa

// country_name.js:7 
// country_name: Sweden
// subregion: Northern Europe
// region: Europe

// country_name.js:7 
// country_name: Switzerland
// subregion: Central Europe
// region: Europe

// country_name.js:7 
// country_name: Syrian Arab Republic
// subregion: Western Asia
// region: Asia

// country_name.js:7 
// country_name: Taiwan
// subregion: Eastern Asia
// region: Asia

// country_name.js:7 
// country_name: Tajikistan
// subregion: Central Asia
// region: Asia

// country_name.js:7 
// country_name: Tanzania, United Republic of
// subregion: Eastern Africa
// region: Africa

// country_name.js:7 
// country_name: Thailand
// subregion: South-Eastern Asia
// region: Asia

// country_name.js:7 
// country_name: Timor-Leste
// subregion: South-Eastern Asia
// region: Asia

// country_name.js:7 
// country_name: Togo
// subregion: Western Africa
// region: Africa

// country_name.js:7 
// country_name: Tokelau
// subregion: Polynesia
// region: Oceania

// country_name.js:7 
// country_name: Tonga
// subregion: Polynesia
// region: Oceania

// country_name.js:7 
// country_name: Trinidad and Tobago
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Tunisia
// subregion: Northern Africa
// region: Africa

// country_name.js:7 
// country_name: Turkey
// subregion: Western Asia
// region: Asia

// country_name.js:7 
// country_name: Turkmenistan
// subregion: Central Asia
// region: Asia

// country_name.js:7 
// country_name: Turks and Caicos Islands
// subregion: Caribbean
// region: Americas

// country_name.js:7 
// country_name: Tuvalu
// subregion: Polynesia
// region: Oceania

// country_name.js:7 
// country_name: Uganda
// subregion: Eastern Africa
// region: Africa

// country_name.js:7 
// country_name: Ukraine
// subregion: Eastern Europe
// region: Europe

// country_name.js:7 
// country_name: United Arab Emirates
// subregion: Western Asia
// region: Asia

// country_name.js:7 
// country_name: United Kingdom of Great Britain and Northern Ireland
// subregion: Northern Europe
// region: Europe

// country_name.js:7 
// country_name: United States of America
// subregion: Northern America
// region: Americas

// country_name.js:7 
// country_name: Uruguay
// subregion: South America
// region: Americas

// country_name.js:7 
// country_name: Uzbekistan
// subregion: Central Asia
// region: Asia

// country_name.js:7 
// country_name: Vanuatu
// subregion: Melanesia
// region: Oceania

// country_name.js:7 
// country_name: Venezuela (Bolivarian Republic of)
// subregion: South America
// region: Americas

// country_name.js:7 
// country_name: Vietnam
// subregion: South-Eastern Asia
// region: Asia

// country_name.js:7 
// country_name: Wallis and Futuna
// subregion: Polynesia
// region: Oceania

// country_name.js:7 
// country_name: Western Sahara
// subregion: Northern Africa
// region: Africa

// country_name.js:7 
// country_name: Yemen
// subregion: Western Asia
// region: Asia

// country_name.js:7 
// country_name: Zambia
// subregion: Eastern Africa
// region: Africa

// country_name.js:7 
// country_name: Zimbabwe
// subregion: Southern Africa
// region: Africa