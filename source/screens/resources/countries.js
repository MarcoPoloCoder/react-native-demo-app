import LocalizationManager from '../../other/languages/localization_manager'
var countries = require('i18n-iso-countries')

const listCountries = [
	{ code: 'AF', code3: 'AFG', name: 'Afghanistan', name1: 'Afghanistan', number: '004' },
	{ code: 'AL', code3: 'ALB', name: 'Albania', name1: 'Albania', number: '008' },
	{ code: 'DZ', code3: 'DZA', name: 'Algeria', name1: 'Algeria', number: '012' },
	// { "code": "AS", "code3": "ASM", "name": "American Samoa", "number": "016" },
	{ code: 'AD', code3: 'AND', name: 'Andorra', name1: 'Andorra', number: '020' },
	// { "code": "AO", "code3": "AGO", "name": "Angola", "number": "024" },
	// { "code": "AI", "code3": "AIA", "name": "Anguilla", "number": "660" },
	// { "code": "AQ", "code3": "ATA", "name": "Antarctica", "number": "010" },
	// { "code": "AG", "code3": "ATG", "name": "Antigua and Barbuda", "number": "028" },
	{ code: 'AR', code3: 'ARG', name: 'Argentina', name1: 'Argentina', number: '032' },
	{ code: 'AM', code3: 'ARM', name: 'Armenia', name1: 'Armenia', number: '051' },
	// { "code": "AW", "code3": "ABW", "name": "Aruba", "number": "533" },
	{ code: 'AU', code3: 'AUS', name: 'Australia', name1: 'Australia', number: '036' },
	{ code: 'AT', code3: 'AUT', name: 'Austria', name1: 'Austria', number: '040' },
	// { "code": "AZ", "code3": "AZE", "name": "Azerbaijan", "number": "031" },
	// { "code": "BS", "code3": "BHS", "name": "Bahamas (the)", "number": "044" },
	{ code: 'BH', code3: 'BHR', name: 'Bahrain', name1: 'Bahrain', number: '048' },
	{ code: 'BD', code3: 'BGD', name: 'Bangladesh', name1: 'Bangladesh', number: '050' },
	// { "code": "BB", "code3": "BRB", "name": "Barbados", "number": "052" },
	{ code: 'BY', code3: 'BLR', name: 'Belarus', name1: 'Bielorrusia', number: '112' },
	{ code: 'BE', code3: 'BEL', name: 'Belgium', name1: 'Bélgica', number: '056' },
	// { "code": "BZ", "code3": "BLZ", "name": "Belize", "number": "084" },
	// { "code": "BJ", "code3": "BEN", "name": "Benin", "number": "204" },
	// { "code": "BM", "code3": "BMU", "name": "Bermuda", "number": "060" },
	// { "code": "BT", "code3": "BTN", "name": "Bhutan", "number": "064" },
	{
		code: 'BO',
		code3: 'BOL',
		name: 'Bolivia (Plurinational State of)',
		name1: 'Bolivia',
		number: '068'
	},
	// { "code": "BQ", "code3": "BES", "name": "Bonaire, Sint Eustatius and Saba", "number": "535" },
	{
		code: 'BA',
		code3: 'BIH',
		name: 'Bosnia and Herzegovina',
		name1: 'Bosnia y Herzegovina',
		number: '070'
	},
	// { "code": "BW", "code3": "BWA", "name": "Botswana", "number": "072" },
	// { "code": "BV", "code3": "BVT", "name": "Bouvet Island", "number": "074" },
	{ code: 'BR', code3: 'BRA', name: 'Brazil', name1: 'Brasil', number: '076' },
	// { "code": "IO", "code3": "IOT", "name": "British Indian Ocean Territory (the)", "number": "086" },
	// { "code": "BN", "code3": "BRN", "name": "Brunei Darussalam", "number": "096" },
	{ code: 'BG', code3: 'BGR', name: 'Bulgaria', name1: 'Bulgaria', number: '100' },
	// { "code": "BF", "code3": "BFA", "name": "Burkina Faso", "number": "854" },
	// { "code": "BI", "code3": "BDI", "name": "Burundi", "number": "108" },
	// { "code": "CV", "code3": "CPV", "name": "Cabo Verde", "number": "132" },
	// { "code": "KH", "code3": "KHM", "name": "Cambodia", "number": "116" },
	{ code: 'CM', code3: 'CMR', name: 'Cameroon', name1: 'Camerún', number: '120' },
	{ code: 'CA', code3: 'CAN', name: 'Canada', name1: 'Canadá', number: '124' },
	// { "code": "KY", "code3": "CYM", "name": "Cayman Islands (the)", "number": "136" },
	{
		code: 'CF',
		code3: 'CAF',
		name: 'Central African Republic (the)',
		name1: 'República Centroafricana',
		number: '140'
	},
	{ code: 'TD', code3: 'TCD', name: 'Chad', name1: 'Chad', number: '148' },
	{ code: 'CL', code3: 'CHL', name: 'Chile', name1: 'Chile', number: '152' },
	{ code: 'CN', code3: 'CHN', name: 'China', name1: 'China', number: '156' },
	// { "code": "CX", "code3": "CXR", "name": "Christmas Island", "number": "162" },
	// { "code": "CC", "code3": "CCK", "name": "Cocos (Keeling) Islands (the)", "number": "166" },
	{ code: 'CO', code3: 'COL', name: 'Colombia', name1: 'Colombia', number: '170' },
	// { "code": "KM", "code3": "COM", "name": "Comoros (the)", "number": "174" },
	{
		code: 'CD',
		code3: 'COD',
		name: 'Congo (the Democratic Republic of the)',
		name1: 'Congo republica',
		number: '180'
	},
	{ code: 'CG', code3: 'COG', name: 'Congo (the)', name1: 'Congo', number: '178' },
	// { "code": "CK", "code3": "COK", "name": "Cook Islands (the)", "number": "184" },
	{ code: 'CR', code3: 'CRI', name: 'Costa Rica', name1: 'Costa Rica', number: '188' },
	{ code: 'HR', code3: 'HRV', name: 'Croatia', name1: 'Croacia', number: '191' },
	{ code: 'CU', code3: 'CUB', name: 'Cuba', name1: 'Cuba', number: '192' },
	// { "code": "CW", "code3": "CUW", "name": "Curaçao", "number": "531" },
	{ code: 'CY', code3: 'CYP', name: 'Cyprus', name1: 'Chipre', number: '196' },
	{ code: 'CZ', code3: 'CZE', name: 'Czechia', name1: 'Chequia', number: '203' },
	{ code: 'CI', code3: 'CIV', name: "Côte d'Ivoire", name1: 'Costa de Marfil', number: '384' },
	{ code: 'DK', code3: 'DNK', name: 'Denmark', name1: 'Dinamarca', number: '208' },
	// { "code": "DJ", "code3": "DJI", "name": "Djibouti", "number": "262" },
	// { "code": "DM", "code3": "DMA", "name": "Dominica", "number": "212" },
	{
		code: 'DO',
		code3: 'DOM',
		name: 'Dominican Republic (the)',
		name1: 'República Dominicana',
		number: '214'
	},
	{ code: 'EC', code3: 'ECU', name: 'Ecuador', name1: 'Ecuador', number: '218' },
	{ code: 'EG', code3: 'EGY', name: 'Egypt', name1: 'Egipto', number: '818' },
	{ code: 'SV', code3: 'SLV', name: 'El Salvador', name1: 'El Salvador', number: '222' },
	{
		code: 'GQ',
		code3: 'GNQ',
		name: 'Equatorial Guinea',
		name1: 'Guinea Ecuatorial',
		number: '226'
	},
	// { "code": "ER", "code3": "ERI", "name": "Eritrea", "number": "232" },
	{ code: 'EE', code3: 'EST', name: 'Estonia', name1: 'Estonia', number: '233' },
	// { "code": "SZ", "code3": "SWZ", "name": "Eswatini", "number": "748" },
	{ code: 'ET', code3: 'ETH', name: 'Ethiopia', name1: 'Etiopía', number: '231' },
	// { "code": "FK", "code3": "FLK", "name": "Falkland Islands (the) [Malvinas]", "number": "238" },
	// { "code": "FO", "code3": "FRO", "name": "Faroe Islands (the)", "number": "234" },
	// { "code": "FJ", "code3": "FJI", "name": "Fiji", "number": "242" },
	{ code: 'FI', code3: 'FIN', name: 'Finland', name1: 'Finlandia', number: '246' },
	{ code: 'FR', code3: 'FRA', name: 'France', name1: 'Francia', number: '250' },
	// { "code": "GF", "code3": "GUF", "name": "French Guiana", "number": "254" },
	// { "code": "PF", "code3": "PYF", "name": "French Polynesia", "number": "258" },
	// { "code": "TF", "code3": "ATF", "name": "French Southern Territories (the)", "number": "260" },
	// { "code": "GA", "code3": "GAB", "name": "Gabon", "number": "266" },
	{ code: 'GM', code3: 'GMB', name: 'Gambia (the)', name1: 'Gambia', number: '270' },
	{ code: 'GE', code3: 'GEO', name: 'Georgia', name1: 'Georgia', number: '268' },
	{ code: 'DE', code3: 'DEU', name: 'Germany', name1: 'Alemania', number: '276' },
	{ code: 'GH', code3: 'GHA', name: 'Ghana', name1: 'Ghana', number: '288' },
	{ code: 'GI', code3: 'GIB', name: 'Gibraltar', name1: 'Gibraltar', number: '292' },
	{ code: 'GR', code3: 'GRC', name: 'Greece', name1: 'Grecia', number: '300' },
	{ code: 'GL', code3: 'GRL', name: 'Greenland', name1: 'Groenlandia', number: '304' },
	{ code: 'GP', code3: 'GLP', name: 'Guadeloupe', name1: 'Guadalupe', number: '312' },
	// { "code": "GU", "code3": "GUM", "name": "Guam", "number": "316" },
	{ code: 'GT', code3: 'GTM', name: 'Guatemala', name1: 'Guatemala', number: '320' },
	// { "code": "GG", "code3": "GGY", "name": "Guernsey", "number": "831" },
	{ code: 'GN', code3: 'GIN', name: 'Guinea', name1: 'Guinea', number: '324' },
	{ code: 'GW', code3: 'GNB', name: 'Guinea-Bissau', name1: 'Guinea- Bissau', number: '624' },
	{ code: 'GY', code3: 'GUY', name: 'Guyana', name1: 'Guayana', number: '328' },
	{ code: 'HT', code3: 'HTI', name: 'Haiti', name1: 'Haití', number: '332' },
	// { "code": "HM", "code3": "HMD", "name": "Heard Island and McDonald Islands", "number": "334" },
	// { "code": "VA", "code3": "VAT", "name": "Holy See (the)", "number": "336" },
	{ code: 'HN', code3: 'HND', name: 'Honduras', name1: 'Honduras', number: '340' },
	{ code: 'HK', code3: 'HKG', name: 'Hong Kong', name1: 'Hong Kong', number: '344' },
	{ code: 'HU', code3: 'HUN', name: 'Hungary', name1: 'Hungría', number: '348' },
	{ code: 'IS', code3: 'ISL', name: 'Iceland', name1: 'Islandia', number: '352' },
	{ code: 'IN', code3: 'IND', name: 'India', name1: 'India', number: '356' },
	{ code: 'ID', code3: 'IDN', name: 'Indonesia', name1: 'Indonesia', number: '360' },
	{
		code: 'IR',
		code3: 'IRN',
		name: 'Iran (Islamic Republic of)',
		name1: 'Irán',
		number: '364'
	},
	{ code: 'IQ', code3: 'IRQ', name: 'Iraq', name1: 'Irak', number: '368' },
	{ code: 'IE', code3: 'IRL', name: 'Ireland', name1: 'Irlanda', number: '372' },
	// { "code": "IM", "code3": "IMN", "name": "Isle of Man", "number": "833" },
	{ code: 'IL', code3: 'ISR', name: 'Israel', name1: 'Israel', number: '376' },
	{ code: 'IT', code3: 'ITA', name: 'Italy', name1: 'Italia', number: '380' },
	{ code: 'JM', code3: 'JAM', name: 'Jamaica', name1: 'Jamaica', number: '388' },
	{ code: 'JP', code3: 'JPN', name: 'Japan', name1: 'Japón', number: '392' },
	{ code: 'JE', code3: 'JEY', name: 'Jersey', name1: 'Jersey', number: '832' },
	{ code: 'JO', code3: 'JOR', name: 'Jordan', name1: 'Jordania', number: '400' },
	{ code: 'KZ', code3: 'KAZ', name: 'Kazakhstan', name1: 'Kazakhstan', number: '398' },
	{ code: 'KE', code3: 'KEN', name: 'Kenya', name1: 'Kenia', number: '404' },
	// { "code": "KI", "code3": "KIR", "name": "Kiribati", "number": "296" },
	{
		code: 'KP',
		code3: 'PRK',
		name: "Korea (the Democratic People's Republic of)",
		name1: 'Korea del Norte',
		number: '408'
	},
	{
		code: 'KR',
		code3: 'KOR',
		name: 'Korea (the Republic of)',
		name1: 'Corea del Sur',
		number: '410'
	},
	{ code: 'KW', code3: 'KWT', name: 'Kuwait', name1: 'Kuwait', number: '414' },
	// { "code": "KG", "code3": "KGZ", "name": "Kyrgyzstan", "number": "417" },
	// { "code": "LA", "code3": "LAO", "name": "Lao People's Democratic Republic (the)", "number": "418" },
	{ code: 'LV', code3: 'LVA', name: 'Latvia', name1: 'Letonia', number: '428' },
	{ code: 'LB', code3: 'LBN', name: 'Lebanon', name1: 'Líbano', number: '422' },
	{ code: 'LS', code3: 'LSO', name: 'Lesotho', name1: 'Lesoto', number: '426' },
	{ code: 'LR', code3: 'LBR', name: 'Liberia', name1: 'Liberia', number: '430' },
	{ code: 'LY', code3: 'LBY', name: 'Libya', name1: 'Libia', number: '434' },
	{ code: 'LI', code3: 'LIE', name: 'Liechtenstein', name1: 'Liechtenstein', number: '438' },
	{ code: 'LT', code3: 'LTU', name: 'Lithuania', name1: 'Lituania', number: '440' },
	{ code: 'LU', code3: 'LUX', name: 'Luxembourg', name1: 'Luxemburgo', number: '442' },
	{ code: 'MO', code3: 'MAC', name: 'Macao', name1: 'Macao', number: '446' },
	{ code: 'MG', code3: 'MDG', name: 'Madagascar', name1: 'Madagascar', number: '450' },
	{ code: 'MW', code3: 'MWI', name: 'Malawi', name1: 'Malawi', number: '454' },
	{ code: 'MY', code3: 'MYS', name: 'Malaysia', name1: 'Malasia', number: '458' },
	{ code: 'MV', code3: 'MDV', name: 'Maldives', name1: 'Maldivas', number: '462' },
	{ code: 'ML', code3: 'MLI', name: 'Mali', name1: 'Mali', number: '466' },
	{ code: 'MT', code3: 'MLT', name: 'Malta', name1: 'Malta', number: '470' },
	// { "code": "MH", "code3": "MHL", "name": "Marshall Islands (the)", "number": "584" },
	// { "code": "MQ", "code3": "MTQ", "name": "Martinique", "number": "474" },
	{ code: 'MR', code3: 'MRT', name: 'Mauritania', name1: 'Mauritania', number: '478' },
	// { "code": "MU", "code3": "MUS", "name": "Mauritius", "number": "480" },
	{ code: 'YT', code3: 'MYT', name: 'Mayotte', name1: 'Mayotte', number: '175' },
	{ code: 'MX', code3: 'MEX', name: 'Mexico', name1: 'Mexico', number: '484' },
	// { "code": "FM", "code3": "FSM", "name": "Micronesia (Federated States of)", "number": "583" },
	{
		code: 'MD',
		code3: 'MDA',
		name: 'Moldova (the Republic of)',
		name1: 'Moldavia',
		number: '498'
	},
	{ code: 'MC', code3: 'MCO', name: 'Monaco', name1: 'Mónaco', number: '492' },
	{ code: 'MN', code3: 'MNG', name: 'Mongolia', name1: 'Mongolia', number: '496' },
	{ code: 'ME', code3: 'MNE', name: 'Montenegro', name1: 'Montenegro', number: '499' },
	// { "code": "MS", "code3": "MSR", "name": "Montserrat", "number": "500" },
	{ code: 'MA', code3: 'MAR', name: 'Morocco', name1: 'Marruecos', number: '504' },
	{ code: 'MZ', code3: 'MOZ', name: 'Mozambique', name1: 'Mozambique', number: '508' },
	{ code: 'MM', code3: 'MMR', name: 'Myanmar', name1: 'Myanmar', number: '104' },
	{ code: 'NA', code3: 'NAM', name: 'Namibia', name1: 'Namibia', number: '516' },
	// { "code": "NR", "code3": "NRU", "name": "Nauru", "number": "520" },
	{ code: 'NP', code3: 'NPL', name: 'Nepal', name1: 'Nepal', number: '524' },
	{
		code: 'NL',
		code3: 'NLD',
		name: 'Netherlands (the)',
		name1: 'Países Bajos',
		number: '528'
	},
	// { "code": "NC", "code3": "NCL", "name": "New Caledonia", "number": "540" },
	{ code: 'NZ', code3: 'NZL', name: 'New Zealand', name1: 'Nueva Zelanda', number: '554' },
	{ code: 'NI', code3: 'NIC', name: 'Nicaragua', name1: 'Nicaragua', number: '558' },
	{ code: 'NE', code3: 'NER', name: 'Niger (the)', name1: 'Niger', number: '562' },
	{ code: 'NG', code3: 'NGA', name: 'Nigeria', name1: 'Nigeria', number: '566' },
	// { "code": "NU", "code3": "NIU", "name": "Niue", "number": "570" },
	// { "code": "NF", "code3": "NFK", "name": "Norfolk Island", "number": "574" },
	// { "code": "MP", "code3": "MNP", "name": "Northern Mariana Islands (the)", "number": "580" },
	{ code: 'NO', code3: 'NOR', name: 'Norway', name1: 'Noruega', number: '578' },
	{ code: 'OM', code3: 'OMN', name: 'Oman', name1: 'Oman', number: '512' },
	{ code: 'PK', code3: 'PAK', name: 'Pakistan', name1: 'Pakistán', number: '586' },
	// { "code": "PW", "code3": "PLW", "name": "Palau", "number": "585" },
	{ code: 'PS', code3: 'PSE', name: 'Palestine, State of', name1: 'Palestina', number: '275' },
	{ code: 'PA', code3: 'PAN', name: 'Panama', name1: 'Panamá', number: '591' },
	{
		code: 'PG',
		code3: 'PNG',
		name: 'Papua New Guinea',
		name1: 'Papúa Nueva Guinea',
		number: '598'
	},
	{ code: 'PY', code3: 'PRY', name: 'Paraguay', name1: 'Paraguay', number: '600' },
	{ code: 'PE', code3: 'PER', name: 'Peru', name1: 'Perú', number: '604' },
	{ code: 'PH', code3: 'PHL', name: 'Philippines (the)', name1: 'Filipinas', number: '608' },
	// { "code": "PN", "code3": "PCN", "name": "Pitcairn", "number": "612" },
	{ code: 'PL', code3: 'POL', name: 'Poland', name1: 'Polonia', number: '616' },
	{ code: 'PT', code3: 'PRT', name: 'Portugal', name1: 'Portugal', number: '620' },
	{ code: 'PR', code3: 'PRI', name: 'Puerto Rico', name1: 'Puerto Rico', number: '630' },
	{ code: 'QA', code3: 'QAT', name: 'Qatar', name1: 'Qatar', number: '634' },
	// { "code": "MK", "code3": "MKD", "name": "Republic of North Macedonia", "number": "807" },
	{ code: 'RO', code3: 'ROU', name: 'Romania', name1: 'Rumania', number: '642' },
	{ code: 'RU', code3: 'RUS', name: 'Russia', name1: 'Russia', number: '643' },
	{ code: 'RW', code3: 'RWA', name: 'Rwanda', name1: 'Ruanda', number: '646' },
	// { "code": "RE", "code3": "REU", "name": "Réunion", "number": "638" },
	// { "code": "BL", "code3": "BLM", "name": "Saint Barthélemy", "number": "652" },
	// { "code": "SH", "code3": "SHN", "name": "Saint Helena, Ascension and Tristan da Cunha", "number": "654" },
	// { "code": "KN", "code3": "KNA", "name": "Saint Kitts and Nevis", "number": "659" },
	// { "code": "LC", "code3": "LCA", "name": "Saint Lucia", "number": "662" },
	// { "code": "MF", "code3": "MAF", "name": "Saint Martin (French part)", "number": "663" },
	// { "code": "PM", "code3": "SPM", "name": "Saint Pierre and Miquelon", "number": "666" },
	// { "code": "VC", "code3": "VCT", "name": "Saint Vincent and the Grenadines", "number": "670" },
	{ code: 'WS', code3: 'WSM', name: 'Samoa', name1: 'Samoa', number: '882' },
	{ code: 'SM', code3: 'SMR', name: 'San Marino', name1: 'San Marino', number: '674' },
	// { "code": "ST", "code3": "STP", "name": "Sao Tome and Principe", "number": "678" },
	{ code: 'SA', code3: 'SAU', name: 'Saudi Arabia', name1: 'Arabia Saudita', number: '682' },
	{ code: 'SN', code3: 'SEN', name: 'Senegal', name1: 'Senegal', number: '686' },
	{ code: 'RS', code3: 'SRB', name: 'Serbia', name1: 'Serbia', number: '688' },
	{ code: 'SC', code3: 'SYC', name: 'Seychelles', name1: 'Seychelles', number: '690' },
	{ code: 'SL', code3: 'SLE', name: 'Sierra Leone', name1: 'Sierra Leone', number: '694' },
	{ code: 'SG', code3: 'SGP', name: 'Singapore', name1: 'Singapur', number: '702' },
	// { "code": "SX", "code3": "SXM", "name": "Sint Maarten (Dutch part)", "number": "534" },
	{ code: 'SK', code3: 'SVK', name: 'Slovakia', name1: 'Eslovaquia', number: '703' },
	{ code: 'SI', code3: 'SVN', name: 'Slovenia', name1: 'Eslovenia', number: '705' },
	// { "code": "SB", "code3": "SLB", "name": "Solomon Islands", "number": "090" },
	{ code: 'SO', code3: 'SOM', name: 'Somalia', name1: 'Somalia', number: '706' },
	{ code: 'ZA', code3: 'ZAF', name: 'South Africa', name1: 'Sudáfrica', number: '710' },
	// { "code": "GS", "code3": "SGS", "name": "South Georgia and the South Sandwich Islands", "number": "239" },
	{ code: 'SS', code3: 'SSD', name: 'South Sudan', name1: 'Sudán del Sur', number: '728' },
	{ code: 'ES', code3: 'ESP', name: 'Spain', name1: 'España', number: '724' },
	{ code: 'LK', code3: 'LKA', name: 'Sri Lanka', name1: 'Sri Lanka', number: '144' },
	{ code: 'SD', code3: 'SDN', name: 'Sudan (the)', name1: 'Sudán', number: '729' },
	// { "code": "SR", "code3": "SUR", "name": "Suriname", "number": "740" },
	// { "code": "SJ", "code3": "SJM", "name": "Svalbard and Jan Mayen", "number": "744" },
	{ code: 'SE', code3: 'SWE', name: 'Sweden', name1: 'Suecia', number: '752' },
	{ code: 'CH', code3: 'CHE', name: 'Switzerland', name1: 'Suiza', number: '756' },
	{ code: 'SY', code3: 'SYR', name: 'Syria', name1: 'Siria', number: '760' },
	{ code: 'TW', code3: 'TWN', name: 'Taiwan', name1: 'Taiwán', number: '158' },
	{ code: 'TJ', code3: 'TJK', name: 'Tajikistan', name1: 'Tayikistán', number: '762' },
	{ code: 'TZ', code3: 'TZA', name: 'Tanzania', name1: 'Tanzania', number: '834' },
	{ code: 'TH', code3: 'THA', name: 'Thailand', name1: 'Tailandia', number: '764' },
	// { "code": "TL", "code3": "TLS", "name": "Timor-Leste", "number": "626" },
	// { "code": "TG", "code3": "TGO", "name": "Togo", "number": "768" },
	// { "code": "TK", "code3": "TKL", "name": "Tokelau", "number": "772" },
	{ code: 'TO', code3: 'TON', name: 'Tonga', name1: 'Tonga', number: '776' },
	// { "code": "TT", "code3": "TTO", "name": "Trinidad and Tobago", "number": "780" },
	{ code: 'TN', code3: 'TUN', name: 'Tunisia', name1: 'Túnez', number: '788' },
	{ code: 'TR', code3: 'TUR', name: 'Turkey', name1: 'Turquía', number: '792' },
	// { "code": "TM", "code3": "TKM", "name": "Turkmenistan", "number": "795" },
	// { "code": "TC", "code3": "TCA", "name": "Turks and Caicos Islands (the)", "number": "796" },
	// { "code": "TV", "code3": "TUV", "name": "Tuvalu", "number": "798" },
	{ code: 'UG', code3: 'UGA', name: 'Uganda', name1: 'Uganda', number: '800' },
	{ code: 'UA', code3: 'UKR', name: 'Ukraine', name1: 'Ucrania', number: '804' },
	{
		code: 'AE',
		code3: 'ARE',
		name: 'United Arab Emirates (the)',
		name1: 'Emiratos Árabes Unidos',
		number: '784'
	},
	{ code: 'GB', code3: 'GBR', name: 'United Kingdom', name1: 'Reino Unido', number: '826' },
	// { "code": "UM", "code3": "UMI", "name": "United States Minor Outlying Islands (the)", "number": "581" },
	{
		code: 'US',
		code3: 'USA',
		name: 'United States of America (the)',
		name1: 'Estados Unidos',
		number: '840'
	},
	{ code: 'UY', code3: 'URY', name: 'Uruguay', name1: 'Uruguay', number: '858' },
	{ code: 'UZ', code3: 'UZB', name: 'Uzbekistan', name1: 'Uzbekistán', number: '860' },
	// { "code": "VU", "code3": "VUT", "name": "Vanuatu", "number": "548" },
	{ code: 'VE', code3: 'VEN', name: 'Venezuela', name1: 'Venezuela', number: '862' },
	{ code: 'VN', code3: 'VNM', name: 'Viet Nam', name1: 'Viet Nam', number: '704' },
	// { "code": "VG", "code3": "VGB", "name": "Virgin Islands (British)", "number": "092" },
	// { "code": "VI", "code3": "VIR", "name": "Virgin Islands (U.S.)", "number": "850" },
	// { "code": "WF", "code3": "WLF", "name": "Wallis and Futuna", "number": "876" },
	// { "code": "EH", "code3": "ESH", "name": "Western Sahara", "number": "732" },
	{ code: 'YE', code3: 'YEM', name: 'Yemen', name1: 'Yemen', number: '887' },
	{ code: 'ZM', code3: 'ZMB', name: 'Zambia', name1: 'Zambia', number: '894' },
	{ code: 'ZW', code3: 'ZWE', name: 'Zimbabwe', name1: 'Zimbabue', number: '716' }
	// { "code": "AX", "code3": "ALA", "name": "Åland Islands", "number": "248" }
]

const currentLanguage = LocalizationManager.getDeviceLocale().languageCode.split('-')[0]

countries.registerLocale(require('i18n-iso-countries/langs/en.json'))
countries.registerLocale(require('i18n-iso-countries/langs/es.json'))

export const finalList = listCountries.map(c => {
	return {
		code: c.code,
		name: countries.getName(c.code, currentLanguage)
	}
})
