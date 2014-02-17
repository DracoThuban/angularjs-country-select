'use strict';

angular.module('countrySelect', [])
    .directive('countrySelect', ['$parse',
        function($parse) {
            var countries = [{
                code: 'AF',
                name: 'Afganistán'
            }, {
                code: 'AX',
                name: 'Åland'
            }, {
                code: 'AL',
                name: 'Albania'
            }, {
                code: 'DE',
                name: 'Alemania'
            }, {
                code: 'DZ',
                name: 'Argelia'
            }, {
                code: 'AD',
                name: 'Andorra'
            }, {
                code: 'AO',
                name: 'Angola'
            }, {
                code: 'AI',
                name: 'Anguila'
            }, {
                code: 'AQ',
                name: 'Antártida'
            }, {
                code: 'AG',
                name: 'Antigua y Barbuda'
            }, {
                code: 'AN',
                name: 'Antillas Neerlandesas'
            }, {
                code: 'SA',
                name: 'Arabia Saudita'
            }, {
                code: 'AR',
                name: 'Argentina'
            }, {
                code: 'AM',
                name: 'Armenia'
            }, {
                code: 'AW',
                name: 'Aruba'
            }, {
                code: 'AU',
                name: 'Australia'
            }, {
                code: 'AT',
                name: 'Austria'
            }, {
                code: 'AZ',
                name: 'Azerbaiyán'
            }, {
                code: 'BS',
                name: 'Bahamas'
            }, {
                code: 'BH',
                name: 'Baréin'
            }, {
                code: 'BD',
                name: 'Bangladesh'
            }, {
                code: 'BB',
                name: 'Barbados'
            }, {
                code: 'BE',
                name: 'Bélgica'
            }, {
                code: 'BZ',
                name: 'Belice'
            }, {
                code: 'BJ',
                name: 'Benín'
            }, {
                code: 'BM',
                name: 'Bermudas'
            }, {
                code: 'BT',
                name: 'Bután'
            }, {
                code: 'BY',
                name: 'Bielorrusia'
            }, {
                code: 'BO',
                name: 'Bolivia'
            }, {
                code: 'BA',
                name: 'Bosnia-Herzegovina'
            }, {
                code: 'BW',
                name: 'Botsuana'
            }, {
                code: 'BR',
                name: 'Brasil'
            }, {
                code: 'BN',
                name: 'Brunéi'
            }, {
                code: 'BG',
                name: 'Bulgaria'
            }, {
                code: 'BF',
                name: 'Burkina Faso'
            }, {
                code: 'BI',
                name: 'Burundi'
            }, {
                code: 'KH',
                name: 'Camboya'
            }, {
                code: 'CM',
                name: 'Camerún'
            }, {
                code: 'CA',
                name: 'Canadá'
            }, {
                code: 'CV',
                name: 'Cabo Verde'
            }, {
                code: 'TD',
                name: 'Chad'
            }, {
                code: 'CL',
                name: 'Chile'
            }, {
                code: 'CN',
                name: 'China'
            }, {
                code: 'CY',
                name: 'Chipre'
            }, {
                code: 'VA',
                name: 'Ciudad del Vaticano'
            }, {
                code: 'CO',
                name: 'Colombia'
            }, {
                code: 'KM',
                name: 'Comoras'
            }, {
                code: 'CG',
                name: 'Congo'
            }, {
                code: 'KP',
                name: 'Corea del Norte'
            }, {
                code: 'KR',
                name: 'Corea del Sur'
            }, {
                code: 'CR',
                name: 'Costa Rica'
            }, {
                code: 'CI',
                name: 'Costa de Marfil'
            }, {
                code: 'HR',
                name: 'Croacia'
            }, {
                code: 'CU',
                name: 'Cuba'
            }, {
                code: 'DK',
                name: 'Dinamarca'
            }, {
                code: 'DM',
                name: 'Dominica'
            }, {
                code: 'EC',
                name: 'Ecuador'
            }, {
                code: 'EG',
                name: 'Egipto'
            }, {
                code: 'SV',
                name: 'El Salvador'
            }, {
                code: 'AE',
                name: 'Emiratos Arabes Unidos'
            }, {
                code: 'ER',
                name: 'Eritrea'
            }, {
                code: 'ES',
                name: 'España'
            }, {
                code: 'SK',
                name: 'Eslovaquia'
            }, {
                code: 'SI',
                name: 'Eslovenia'
            }, {
                code: 'US',
                name: 'Estados Unidos'
            }, {
                code: 'EE',
                name: 'Estonia'
            }, {
                code: 'ET',
                name: 'Etiopía'
            }, {
                code: 'FJ',
                name: 'Fiji'
            }, {
                code: 'PH',
                name: 'Filipinas'
            }, {
                code: 'FI',
                name: 'Finlandia'
            }, {
                code: 'FR',
                name: 'Francia'
            }, {
                code: 'FX',
                name: 'Francia Metropolitana'
            }, {
                code: 'GA',
                name: 'Gabón'
            }, {
                code: 'GM',
                name: 'Gambia'
            }, {
                code: 'GE',
                name: 'Georgia'
            }, {
                code: 'GG',
                name: 'Guernsey'
            }, {
                code: 'GH',
                name: 'Ghana'
            }, {
                code: 'GI',
                name: 'Gibraltar'
            }, {
                code: 'GQ',
                name: 'Guinea Ecuatorial'
            }, {
                code: 'GR',
                name: 'Grecia'
            }, {
                code: 'GD',
                name: 'Granada'
            }, {
                code: 'GL',
                name: 'Groenlandia'
            }, {
                code: 'GP',
                name: 'Guadalupe'
            }, {
                code: 'GU',
                name: 'Guam'
            }, {
                code: 'GT',
                name: 'Guatemala'
            }, {
                code: 'GN',
                name: 'Guinea'
            }, {
                code: 'GW',
                name: 'Guinea-Bissau'
            }, {
                code: 'GY',
                name: 'Guyana'
            }, {
                code: 'GF',
                name: 'Guayana Francesa'
            }, {
                code: 'HT',
                name: 'Haití'
            }, {
                code: 'HN',
                name: 'Honduras'
            }, {
                code: 'HK',
                name: 'Hong Kong'
            }, {
                code: 'HU',
                name: 'Hungría'
            }, {
                code: 'IN',
                name: 'India'
            }, {
                code: 'ID',
                name: 'Indonesia'
            }, {
                code: 'IR',
                name: 'Irán'
            }, {
                code: 'IQ',
                name: 'Iraq'
            }, {
                code: 'IE',
                name: 'Irlanda'
            }, {
                code: 'BV',
                name: 'Isla Bouvet'
            }, {
                code: 'CX',
                name: 'Isla de Navidad'
            }, {
                code: 'NF',
                name: 'Isla Norfolk'
            }, {
                code: 'KY',
                name: 'Islas Caimán'
            }, {
                code: 'CC',
                name: 'Islas Cocos'
            }, {
                code: 'CK',
                name: 'Islas Cook'
            }, {
                code: 'IM',
                name: 'Isla de Man'
            }, {
                code: 'FO',
                name: 'Islas Feroe'
            }, {
                code: 'GS',
                name: 'Islas Georgias del Sur y Sandwich del Sur'
            }, {
                code: 'HM',
                name: 'Islas Heard y McDonald'
            }, {
                code: 'FK',
                name: 'Islas Malvinas'
            }, {
                code: 'MP',
                name: 'Islas Marianas del Norte'
            }, {
                code: 'MH',
                name: 'Islas Marshall'
            }, {
                code: 'PN',
                name: 'Islas Pitcairn'
            }, {
                code: 'SB',
                name: 'Islas Salomon'
            }, {
                code: 'TC',
                name: 'Islas Turcas y Caicos'
            }, {
                code: 'UM',
                name: 'Islas Ultramarinas Menores de Estados Unidos'
            }, {
                code: 'VG',
                name: 'Islas Vírgenes Británicas'
            }, {
                code: 'VI',
                name: 'Islas Vírgenes de los Estados Unidos'
            }, {
                code: 'IS',
                name: 'Islandia'
            }, {
                code: 'IL',
                name: 'Israel'
            }, {
                code: 'IT',
                name: 'Italia'
            }, {
                code: 'JE',
                name: 'Jersey'
            }, {
                code: 'JM',
                name: 'Jamaica'
            }, {
                code: 'JP',
                name: 'Japón'
            }, {
                code: 'JO',
                name: 'Jordania'
            }, {
                code: 'KZ',
                name: 'Kazajistán'
            }, {
                code: 'KE',
                name: 'Kenia'
            }, {
                code: 'KI',
                name: 'Kiribati'
            }, {
                code: 'KW',
                name: 'Kuwait'
            }, {
                code: 'KG',
                name: 'Kirguistán'
            }, {
                code: 'LA',
                name: 'Laos'
            }, {
                code: 'LS',
                name: 'Lesoto'
            }, {
                code: 'LV',
                name: 'Letonia'
            }, {
                code: 'LB',
                name: 'Líbano'
            }, {
                code: 'LR',
                name: 'Liberia'
            }, {
                code: 'LY',
                name: 'Libia'
            }, {
                code: 'LI',
                name: 'Liechtenstein'
            }, {
                code: 'LT',
                name: 'Lituania'
            }, {
                code: 'LU',
                name: 'Luxemburgo'
            }, {
                code: 'MO',
                name: 'Macao'
            }, {
                code: 'MG',
                name: 'Madagascar'
            }, {
                code: 'MW',
                name: 'Malawi'
            }, {
                code: 'MY',
                name: 'Malasia'
            }, {
                code: 'MV',
                name: 'Maldivas'
            }, {
                code: 'ML',
                name: 'Mali'
            }, {
                code: 'MT',
                name: 'Malta'
            }, {
                code: 'MQ',
                name: 'Martinica'
            }, {
                code: 'MA',
                name: 'Marruecos'
            }, {
                code: 'MR',
                name: 'Mauritania'
            }, {
                code: 'MU',
                name: 'Mauricio'
            }, {
                code: 'YT',
                name: 'Mayotte'
            }, {
                code: 'MX',
                name: 'México'
            }, {
                code: 'FM',
                name: 'Micronesia'
            }, {
                code: 'MD',
                name: 'Moldavia'
            }, {
                code: 'MC',
                name: 'Mónaco'
            }, {
                code: 'MN',
                name: 'Mongolia'
            }, {
                code: 'ME',
                name: 'Montenegro'
            }, {
                code: 'MS',
                name: 'Montserrat'
            }, {
                code: 'MZ',
                name: 'Mozambique'
            }, {
                code: 'MM',
                name: 'Myanmar'
            }, {
                code: 'NA',
                name: 'Namibia'
            }, {
                code: 'NR',
                name: 'Nauru'
            }, {
                code: 'NP',
                name: 'Nepal'
            }, {
                code: 'NC',
                name: 'Nueva Caledonia'
            }, {
                code: 'NZ',
                name: 'Nueva Zelanda'
            }, {
                code: 'NI',
                name: 'Nicaragua'
            }, {
                code: 'NE',
                name: 'Niger'
            }, {
                code: 'NG',
                name: 'Nigeria'
            }, {
                code: 'NU',
                name: 'Niue'
            }, {
                code: 'NO',
                name: 'Noruega'
            }, {
                code: 'OM',
                name: 'Omán'
            }, {
                code: 'PK',
                name: 'Pakistán'
            }, {
                code: 'NL',
                name: 'Países Bajos'
            }, {
                code: 'PW',
                name: 'Palaos'
            }, {
                code: 'PS',
                name: 'Palestina'
            }, {
                code: 'PA',
                name: 'Panamá'
            }, {
                code: 'PG',
                name: 'Papúa New Guinea'
            }, {
                code: 'PY',
                name: 'Paraguay'
            }, {
                code: 'PE',
                name: 'Perú'
            }, {
                code: 'PF',
                name: 'Polinesia Francesa'
            }, {
                code: 'PL',
                name: 'Polonia'
            }, {
                code: 'PT',
                name: 'Portugal'
            }, {
                code: 'PR',
                name: 'Puerto Rico'
            }, {
                code: 'QA',
                name: 'Qatar'
            }, {
                code: 'GB',
                name: 'Reino Unido'
            }, {
                code: 'CF',
                name: 'República Centroafricana'
            }, {
                code: 'CZ',
                name: 'República Checa'
            }, {
                code: 'MK',
                name: 'República de Macedonia'
            }, {
                code: 'CD',
                name: 'República Democrática del Congo'
            }, {
                code: 'DO',
                name: 'República Dominicana'
            }, {
                code: 'RE',
                name: 'Reunión'
            }, {
                code: 'RW',
                name: 'Ruanda'
            }, {
                code: 'RO',
                name: 'Rumania'
            }, {
                code: 'RU',
                name: 'Rusia'
            }, {
                code: 'EH',
                name: 'Sahara Occidental'
            }, {
                code: 'SH',
                name: 'Santa Helena'
            }, {
                code: 'KN',
                name: 'San Cristóbal y Nieves'
            }, {
                code: 'LC',
                name: 'Santa Lucía'
            }, {
                code: 'PM',
                name: 'San Pedro y Miquelón'
            }, {
                code: 'VC',
                name: 'San Vicente y las Granadinas'
            }, {
                code: 'ST',
                name: 'Santo Tomé y Príncipe'
            }, {
                code: 'WS',
                name: 'Samoa'
            }, {
                code: 'AS',
                name: 'Samoa Americana'
            }, {
                code: 'SM',
                name: 'San Marino'
            }, {
                code: 'SN',
                name: 'Senegal'
            }, {
                code: 'RS',
                name: 'Serbia'
            }, {
                code: 'SC',
                name: 'Seychelles'
            }, {
                code: 'SL',
                name: 'Sierra Leona'
            }, {
                code: 'SG',
                name: 'Singapur'
            }, {
                code: 'SO',
                name: 'Somalia'
            }, {
                code: 'LK',
                name: 'Sri Lanka'
            }, {
                code: 'SD',
                name: 'Sudán'
            }, {
                code: 'SR',
                name: 'Surinam'
            }, {
                code: 'SZ',
                name: 'Suazilandia'
            }, {
                code: 'ZA',
                name: 'Sudáfrica'
            }, {
                code: 'SE',
                name: 'Suecia'
            }, {
                code: 'CH',
                name: 'Suiza'
            }, {
                code: 'SY',
                name: 'Siria'
            }, {
                code: 'SJ',
                name: 'Svalbard y Jan Mayen'
            }, {
                code: 'TH',
                name: 'Tailandia'
            }, {
                code: 'TW',
                name: 'Taiwán'
            }, {
                code: 'TJ',
                name: 'Tayikistán'
            }, {
                code: 'TZ',
                name: 'Tanzania'
            }, {
                code: 'IO',
                name: 'Territorio Británico del Océano Índico'
            }, {
                code: 'TF',
                name: 'Territorios Australes y Antárticos Franceses'
            }, {
                code: 'TP',
                name: 'Timor Oriental'
            }, {
                code: 'TG',
                name: 'Togo'
            }, {
                code: 'TK',
                name: 'Tokelau'
            }, {
                code: 'TO',
                name: 'Tonga'
            }, {
                code: 'TT',
                name: 'Trinidad y Tobago'
            }, {
                code: 'TN',
                name: 'Túnez'
            }, {
                code: 'TR',
                name: 'Turquía'
            }, {
                code: 'TM',
                name: 'Turkmenistán'
            }, {
                code: 'TV',
                name: 'Tuvalu'
            }, {
                code: 'UG',
                name: 'Uganda'
            }, {
                code: 'UA',
                name: 'Ucrania'
            }, {
                code: 'UY',
                name: 'Uruguay'
            }, {
                code: 'UZ',
                name: 'Uzbekistán'
            }, {
                code: 'VU',
                name: 'Vanuatu'
            }, {
                code: 'VE',
                name: 'Venezuela'
            }, {
                code: 'VN',
                name: 'Vietnam'
            }, {
                code: 'WF',
                name: 'Wallis y Futuna'
            }, {
                code: 'YE',
                name: 'Yemen'
            }, {
                code: 'DJ',
                name: 'Yibuti'
            }, {
                code: 'ZM',
                name: 'Zambia'
            }, {
                code: 'ZW',
                name: 'Zimbabue'
            }];

            return {
                template: '<select ng-options="c.code as c.name for c in countries">',
                replace: true,
                link: function(scope, elem, attrs) {
                    if ( !! attrs.ngModel) {
                        var assignCountry = $parse(attrs.ngModel).assign;

                        elem.bind('change', function(e) {
                            assignCountry(elem.val());
                        });

                        scope.$watch(attrs.ngModel, function(country) {
                            elem.val(country);
                        });
                    }
                }
            }
        }
    ]);
