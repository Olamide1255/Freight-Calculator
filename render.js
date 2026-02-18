const destinations = {
  "Turkish Airlines": [
  "IAD", "ATL", "LAX", "IAH", "ORD", "JFK", "MIA", "DFW", "EWR", "BOS",
  "SFO", "YYZ", "YUL", "YVR", "GRU", "EZE", "MEX", "BOG", "KWI", "ISB",
  "KHI", "BAH", "DXB", "DWC", "DOH", "TPE", "KUL", "CAN", "HND", "PEK",
  "PVG", "ICN", "HKG", "BEG", "OTP", "CGK", "SVO", "VKO", "BKK", "BEY",
  "MCT", "BUD", "BSL", "GVA", "ZRH", "SOF", "SIN", "LHR", "MAN", "BHX",
  "DUB", "ARN", "MST", "AMS", "WAW", "OSL", "ALA", "TBS", "TLV", "MXP",
  "VCE", "ATH", "FCO", "CPH", "BLL", "TLL", "BRU", "LGG", "FRA", "CDG",
  "PRG", "VIE", "SGN", "CAI", "BER", "MUC", "DUS", "HEL", "STR", "BRE",
  "LIS", "CGN", "NUE", "HAJ", "HAN", "AMM", "MAD", "BCN", "MNL", "VNO",
  "DMM", "DEL", "HYD", "BLR", "MAA", "ECN", "ADA", "IST", "ACC", "DAC",
  "NBO", "CPT", "JNB", "CMN", "DSS", "EBB", "TUN", "FNA", "BOM", "AMD",
  "DLA", "ZAG", "AUH", "SHJ", "LHE", "BLQ", "BRI", "NAP", "CTA", "TRN",
  "LJU", "JED", "EDI", "UIO", "NQZ", "NRT", "OPO", "DPS", "CKY", "SZX",
  "CGO", "BGW", "LCK", "MEL", "HAM", "ALG", "DEN", "FNA", "OUA", "LAD",
  "DTW", "RUH", "GOT", "ESB", "ABJ", "JUB", "VLC", "EBL", "FIH", "MRU",
  "BKO", "DAR", "STN"
  ],

  "Uganda Airlines": [
    "BJM", "BOM", "DAR", "DXB", "FIH", 
    "JNB", "HRE", "JRO", "JUB", "LUN", "MBA", 
    "MGQ", "NBO", "ZNZ"
  ]
};

// Weight rates based on destination and weight range
// weightRates["Turkish_Airlines"]
// weightRates.TurkishAirlines
const weightRates = {
  "Turkish Airlines": {
    "general": {
  "IAD": [180, 11, 7.5, 6.5, 5.7, 5.5],
  "ATL": [180, 11, 7.5, 6.5, 5.7, 5.5],
  "LAX": [180, 11, 7.5, 6.5, 5.7, 5.5],
  "IAH": [180, 11, 7.5, 6.5, 5.7, 5.5],
  "ORD": [180, 11, 7.5, 6.5, 5.7, 5.5],
  "JFK": [180, 11, 7.5, 6.5, 5.7, 5.5],
  "MIA": [180, 11, 7.5, 6.5, 5.7, 5.5],
  "DFW": [180, 11, 7.5, 6.5, 5.7, 5.5],
  "EWR": [180, 11, 7.5, 6.5, 5.7, 5.5],
  "BOS": [180, 11, 7.5, 6.5, 5.7, 5.5],
  "SFO": [180, 11, 7.5, 6.5, 5.7, 5.5],
  "YYZ": [200, 12, 8, 7.5, 6.7, 6.5],
  "YUL": [200, 12, 8, 7.5, 6.7, 6.5],
  "YVR": [180, 9, 8, 7.5, 7.4, 7.3],
  "GRU": [250, 15, 11, 9.5, 8.5, 8],
  "EZE": [250, 15, 11, 9.5, 8.5, 8],
  "MEX": [250, 15, 11, 9.5, 8.5, 8],
  "BOG": [250, 15, 11, 9.5, 8.5, 8],
  "KWI": [70, 3.5, 2.5, 1.95, 1.8, 1.65],
  "ISB": [80, 4, 3, 2.4, 2.3, 2.2],
  "KHI": [80, 3.6, 2.6, 2.1, 2, 1.9],
  "BAH": [35, 2.65, 2.15, 1.95, 1.8, 1.65],
  "DXB": [70, 3.3, 2.3, 1.8, 1.7, 1.6],
  "DWC": [70, 3.3, 2.3, 1.8, 1.7, 1.6],
  "DOH": [70, 3.5, 2.5, 1.95, 1.8, 1.65],
  "TPE": [80, 4, 3, 2.5, 2.4, 2.3],
  "KUL": [70, 3.5, 2.5, 2, 1.8, 1.6],
  "CAN": [90, 4.5, 3.5, 3, 2.9, 2.8],
  "HND": [80, 4, 3.2, 2.7, 2.6, 2.5],
  "PEK": [90, 4.5, 3.5, 2.9, 2.8, 2.7],
  "PVG": [100, 5, 4, 3.9, 3.8, 3.7],
  "ICN": [80, 3.7, 2.7, 2.2, 2.1, 2],
  "HKG": [70, 3.5, 2.5, 1.9, 1.8, 1.7],
  "BEG": [80, 3.7, 2.7, 2.2, 2.1, 2],
  "OTP": [70, 3.5, 2.5, 1.9, 1.8, 1.7],
  "CGK": [90, 4.5, 3.5, 3, 2.9, 2.8],
  "SVO": [80, 3.6, 2.6, 2.1, 2, 1.9],
  "VKO": [80, 3.6, 2.6, 2.1, 2, 1.9],
  "BKK": [70, 3.5, 2.5, 2, 1.9, 1.8],
  "BEY": [80, 3.6, 2.6, 2.1, 2, 1.9],
  "MCT": [70, 3.5, 2.5, 2, 1.9, 1.8],
  "BUD": [70, 3.5, 2.5, 2, 1.9, 1.8],
  "BSL": [80, 3.6, 2.6, 2.1, 2, 1.9],
  "GVA": [80, 3.7, 2.7, 2.2, 2.1, 2],
  "ZRH": [70, 3.5, 2.5, 2, 1.9, 1.8],
  "SOF": [100, 4.7, 3.7, 3.2, 3.1, 3],
  "SIN": [80, 4, 3, 2.5, 2.4, 2.3],
  "LHR": [80, 3.6, 2.6, 2.1, 2, 1.9],
  "MAN": [80, 4, 3, 2.5, 2.4, 2.3],
  "BHX": [80, 3.7, 2.7, 2.2, 2.1, 2],
  "DUB": [80, 3.7, 2.7, 2.2, 2.1, 2],
  "ARN": [70, 3.5, 2.5, 1.95, 1.8, 1.65],
  "MST": [70, 3.5, 2.5, 2, 1.9, 1.8],
  "AMS": [80, 3.6, 2.6, 2.1, 2, 1.9],
  "WAW": [80, 4, 3, 2.4, 2.3, 2.2],
  "OSL": [70, 3.5, 2.5, 1.9, 1.8, 1.7],
  "ALA": [90, 4.4, 3.4, 2.8, 2.7, 2.6],
  "TBS": [100, 4.7, 3.7, 3.2, 3.1, 3],
  "TLV": [70, 3.5, 2.5, 2, 1.9, 1.8],
  "MXP": [70, 3.5, 2.5, 1.9, 1.75, 1.6],
  "VCE": [100, 4.7, 3.7, 3.2, 3.1, 3],
  "ATH": [70, 3.5, 2.5, 2, 1.9, 1.8],
  "FCO": [70, 3.5, 2.5, 2, 1.9, 1.8],
  "CPH": [80, 3.6, 2.6, 2.1, 2, 1.9],
  "BLL": [70, 3.5, 2.5, 2, 1.9, 1.8],
  "TLL": [80, 4, 3, 2.5, 2.4, 2.3],
  "BRU": [70, 3.4, 2.4, 1.8, 1.7, 1.6],
  "LGG": [80, 3.6, 2.6, 2.1, 2, 1.9],
  "FRA": [70, 3.5, 2.5, 2, 1.9, 1.8],
  "CDG": [70, 3.4, 2.4, 1.9, 1.8, 1.7],
  "PRG": [70, 3.5, 2.5, 1.95, 1.8, 1.65],
  "VIE": [80, 3.6, 2.6, 2.1, 2, 1.9],
  "SGN": [70, 3.5, 2.5, 2, 1.9, 1.8],
  "CAI": [80, 4, 3.2, 2.7, 2.6, 2.5],
  "BER": [80, 3.7, 2.7, 2.2, 2.1, 2],
  "MUC": [80, 3.6, 2.6, 2.1, 2, 1.9],
  "DUS": [80, 4, 3, 2.4, 2.3, 2.2],
  "HEL": [80, 3.7, 2.7, 2.2, 2.1, 2],
  "STR": [80, 3.7, 2.7, 2.2, 2.1, 2],
  "BRE": [80, 4, 3, 2.4, 2.3, 2.2],
  "LIS": [80, 3.7, 2.7, 2.2, 2.1, 2],
  "CGN": [80, 3.7, 2.7, 2.2, 2.1, 2],
  "NUE": [80, 3.7, 2.7, 2.2, 2.1, 2],
  "HAJ": [80, 4, 3, 2.4, 2.3, 2.2],
  "HAN": [70, 3.5, 2.5, 2, 1.9, 1.8],
  "AMM": [70, 3.5, 2.5, 1.95, 1.8, 1.65],
  "MAD": [80, 3.6, 2.6, 2.1, 2, 1.9],
  "BCN": [80, 3.6, 2.6, 2.1, 2, 1.9],
  "MNL": [80, 3.7, 2.7, 2.2, 2.1, 2],
  "VNO": [80, 3.7, 2.7, 2.2, 2.1, 2],
  "DMM": [80, 3.6, 2.6, 2.1, 2, 1.9],
  "DEL": [80, 3.6, 2.6, 2.1, 2, 1.9],
  "HYD": [70, 3.5, 2.5, 2, 1.9, 1.8],
  "BLR": [70, 3.5, 2.5, 1.9, 1.8, 1.7],
  "MAA": [70, 3.5, 2.5, 2, 1.9, 1.8],
  "ECN": [120, 5.7, 4.7, 4.2, 4.1, 4],
  "ADA": [80, 3.75, 2.75, 2.2, 2.05, 2],
  "IST": [70, 3.5, 2.5, 1.95, 1.8, 1.75],
  "ACC": [120, 5.7, 4.7, 4.2, 4.1, 4],
  "DAC": [80, 3.7, 2.7, 2.2, 2.1, 2],
  "NBO": [100, 4.7, 3.7, 3.2, 3.1, 3],
  "CPT": [120, 5.7, 4.7, 4.2, 4.1, 4],
  "JNB": [140, 6.7, 5.7, 5.2, 5.1, 5],
  "CMN": [100, 4.7, 3.7, 3.2, 3.1, 3],
  "DSS": [120, 5.7, 4.7, 4.2, 4.1, 4],
  "EBB": [120, 5.7, 4.7, 4.2, 4.1, 4],
  "TUN": [120, 6, 5.2, 4.7, 4.6, 4.5],
  "FNA": [160, 7.7, 6.7, 6.2, 6.1, 6],
  "BOM": [80, 3.6, 2.6, 2.1, 2, 1.9],
  "AMD": [70, 3.5, 2.5, 1.9, 1.8, 1.7],
  "DLA": [160, 7.7, 6.7, 6.2, 6.1, 6],
  "ZAG": [100, 4.7, 3.7, 3.2, 3.1, 3],
  "AUH": [70, 3.5, 2.5, 1.9, 1.8, 1.7],
  "SHJ": [100, 4.7, 3.7, 3.2, 3.1, 3],
  "LHE": [80, 4, 3, 2.4, 2.3, 2.2],
  "BLQ": [80, 4, 3, 2.4, 2.3, 2.2],
  "BRI": [100, 4.7, 3.7, 3.2, 3.1, 3],
  "NAP": [80, 4, 3.2, 2.7, 2.6, 2.5],
  "CTA": [100, 4.7, 3.7, 3.2, 3.1, 3],
  "TRN": [80, 4, 3, 2.4, 2.3, 2.2],
  "LJU": [80, 3.7, 2.7, 2.2, 2.1, 2],
  "JED": [70, 3.5, 2.5, 1.95, 1.8, 1.65],
  "EDI": [80, 3.7, 2.7, 2.2, 2.1, 2],
  "UIO": [250, 15, 11, 9.5, 8.5, 8],
  "NQZ": [100, 4.7, 3.7, 3.2, 3.1, 3],
  "NRT": [80, 4, 3.2, 2.7, 2.6, 2.5],
  "OPO": [80, 4, 3.2, 2.7, 2.6, 2.5],
  "DPS": [100, 4.7, 3.7, 3.2, 3.1, 3],
  "CKY": [160, 7.7, 6.7, 6.2, 6.1, 6],
  "SZX": [100, 4.7, 3.7, 3.2, 3.1, 3],
  "CGO": [90, 4.5, 3.5, 2.9, 2.8, 2.7],
  "BGW": [80, 3.8, 2.8, 2.3, 2.2, 2.1],
  "LCK": [160, 7.7, 6.7, 6.2, 6.1, 6],
  "MEL": [140, 7, 5.75, 4.5, 4.1, 4],
  "HAM": [80, 3.7, 2.7, 2.2, 2.1, 2],
  "ALG": [100, 4.7, 3.7, 3.2, 3.1, 3],
  "DEN": [150, 7.5, 6.5, 6, 5.9, 5.8],
  "FNA": [160, 7.7, 6.7, 6.2, 6.1, 6],
  "OUA": [140, 6.7, 5.7, 5.2, 5.1, 5],
  "LAD": [130, 6.5, 5.5, 4.95, 4.85, 4.75],
  "DTW": [180, 11, 7.5, 6.5, 5.7, 5.5],
  "RUH": [70, 3.5, 2.5, 2, 1.9, 1.8],
  "GOT": [80, 3.7, 2.7, 2.2, 2.1, 2],
  "ESB": [80, 3.75, 2.75, 2.2, 2.05, 2],
  "ABJ": [140, 7, 6.2, 5.6, 5.5, 5.4],
  "JUB": [160, 7.7, 6.7, 6.2, 6, 6],
  "VLC": [80, 4, 3.2, 2.7, 2.6, 2.5],
  "EBL": [80, 4, 3, 2.5, 2.4, 2.3],
  "FIH": [130, 6.5, 5.5, 4.9, 4.8, 4.7],
  "MRU": [120, 6, 5, 4.5, 4.4, 4.3],
  "BKO": [140, 6.7, 5.7, 5.2, 5.1, 5],
  "DAR": [160, 7.7, 6.7, 6.2, 6.1, 6],
  "STN": [80, 3.7, 2.7, 2.2, 2.1, 2]
    },


    "dangerous" : {
  "IAD": [225, 13.75, 9.38, 8.13, 7.13, 6.88],
  "ATL": [225, 13.75, 9.38, 8.13, 7.13, 6.88],
  "LAX": [225, 13.75, 9.38, 8.13, 7.13, 6.88],
  "IAH": [225, 13.75, 9.38, 8.13, 7.13, 6.88],
  "ORD": [225, 13.75, 9.38, 8.13, 7.13, 6.88],
  "JFK": [225, 13.75, 9.38, 8.13, 7.13, 6.88],
  "MIA": [225, 13.75, 9.38, 8.13, 7.13, 6.88],
  "DFW": [225, 13.75, 9.38, 8.13, 7.13, 6.88],
  "EWR": [225, 13.75, 9.38, 8.13, 7.13, 6.88],
  "BOS": [225, 13.75, 9.38, 8.13, 7.13, 6.88],
  "SFO": [225, 13.75, 9.38, 8.13, 7.13, 6.88],
  "YYZ": [250, 15, 10, 9.38, 8.38, 8.13],
  "YUL": [250, 15, 10, 9.38, 8.38, 8.13],
  "YVR": [225, 11.25, 10, 9.38, 9.25, 9.13],
  "GRU": [312.5, 18.75, 13.75, 11.88, 10.63, 10],
  "EZE": [312.5, 18.75, 13.75, 11.88, 10.63, 10],
  "MEX": [312.5, 18.75, 13.75, 11.88, 10.63, 10],
  "BOG": [312.5, 18.75, 13.75, 11.88, 10.63, 10],
  "KWI": [87.5, 4.38, 3.13, 2.44, 2.25, 2.07],
  "ISB": [100, 5, 3.75, 3, 2.88, 2.75],
  "KHI": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "BAH": [43.75, 3.32, 2.69, 2.44, 2.25, 2.07],
  "DXB": [87.5, 4.13, 2.88, 2.25, 2.13, 2],
  "DWC": [87.5, 4.13, 2.88, 2.25, 2.13, 2],
  "DOH": [87.5, 4.38, 3.13, 2.44, 2.25, 2.07],
  "TPE": [100, 5, 3.75, 3.13, 3, 2.88],
  "KUL": [87.5, 4.38, 3.13, 2.5, 2.25, 2],
  "CAN": [112.5, 5.63, 4.38, 3.75, 3.63, 3.5],
  "HND": [100, 5, 4, 3.38, 3.25, 3.13],
  "PEK": [112.5, 5.63, 4.38, 3.63, 3.5, 3.38],
  "PVG": [125, 6.25, 5, 4.88, 4.75, 4.63],
  "ICN": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "HKG": [87.5, 4.38, 3.13, 2.38, 2.25, 2.13],
  "BEG": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "OTP": [87.5, 4.38, 3.13, 2.38, 2.25, 2.13],
  "CGK": [112.5, 5.63, 4.38, 3.75, 3.63, 3.5],
  "SVO": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "VKO": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "BKK": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "BEY": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "MCT": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "BUD": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "BSL": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "GVA": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "ZRH": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "SOF": [125, 5.88, 4.63, 4, 3.88, 3.75],
  "SIN": [100, 5, 3.75, 3.13, 3, 2.88],
  "LHR": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "MAN": [100, 5, 3.75, 3.13, 3, 2.88],
  "BHX": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "DUB": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "ARN": [87.5, 4.38, 3.13, 2.44, 2.25, 2.07],
  "MST": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "AMS": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "WAW": [100, 5, 3.75, 3, 2.88, 2.75],
  "OSL": [87.5, 4.38, 3.13, 2.38, 2.25, 2.13],
  "ALA": [112.5, 5.5, 4.25, 3.5, 3.38, 3.25],
  "TBS": [125, 5.88, 4.63, 4, 3.88, 3.75],
  "TLV": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "MXP": [87.5, 4.38, 3.13, 2.38, 2.19, 2],
  "VCE": [125, 5.88, 4.63, 4, 3.88, 3.75],
  "ATH": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "FCO": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "CPH": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "BLL": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "TLL": [100, 5, 3.75, 3.13, 3, 2.88],
  "BRU": [87.5, 4.25, 3, 2.25, 2.13, 2],
  "LGG": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "FRA": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "CDG": [87.5, 4.25, 3, 2.38, 2.25, 2.13],
  "PRG": [87.5, 4.38, 3.13, 2.44, 2.25, 2.07],
  "VIE": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "SGN": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "CAI": [100, 5, 4, 3.38, 3.25, 3.13],
  "BER": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "MUC": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "DUS": [100, 5, 3.75, 3, 2.88, 2.75],
  "HEL": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "STR": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "BRE": [100, 5, 3.75, 3, 2.88, 2.75],
  "LIS": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "CGN": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "NUE": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "HAJ": [100, 5, 3.75, 3, 2.88, 2.75],
  "HAN": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "AMM": [87.5, 4.38, 3.13, 2.44, 2.25, 2.07],
  "MAD": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "BCN": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "MNL": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "VNO": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "DMM": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "DEL": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "HYD": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "BLR": [87.5, 4.38, 3.13, 2.38, 2.25, 2.13],
  "MAA": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "ECN": [150, 7.13, 5.88, 5.25, 5.13, 5],
  "ADA": [100, 4.69, 3.44, 2.75, 2.57, 2.5],
  "IST": [87.5, 4.38, 3.13, 2.44, 2.25, 2.19],
  "ACC": [150, 7.13, 5.88, 5.25, 5.13, 5],
  "DAC": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "NBO": [125, 5.88, 4.63, 4, 3.88, 3.75],
  "CPT": [150, 7.13, 5.88, 5.25, 5.13, 5],
  "JNB": [175, 8.38, 7.13, 6.5, 6.38, 6.25],
  "CMN": [125, 5.88, 4.63, 4, 3.88, 3.75],
  "DSS": [150, 7.13, 5.88, 5.25, 5.13, 5],
  "EBB": [150, 7.13, 5.88, 5.25, 5.13, 5],
  "TUN": [150, 7.5, 6.5, 5.88, 5.75, 5.63],
  "FNA": [200, 9.63, 8.38, 7.75, 7.63, 7.5],
  "BOM": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "AMD": [87.5, 4.38, 3.13, 2.38, 2.25, 2.13],
  "DLA": [200, 9.63, 8.38, 7.75, 7.63, 7.5],
  "ZAG": [125, 5.88, 4.63, 4, 3.88, 3.75],
  "AUH": [87.5, 4.38, 3.13, 2.38, 2.25, 2.13],
  "SHJ": [125, 5.88, 4.63, 4, 3.88, 3.75],
  "LHE": [100, 5, 3.75, 3, 2.88, 2.75],
  "BLQ": [100, 5, 3.75, 3, 2.88, 2.75],
  "BRI": [125, 5.88, 4.63, 4, 3.88, 3.75],
  "NAP": [100, 5, 4, 3.38, 3.25, 3.13],
  "CTA": [125, 5.88, 4.63, 4, 3.88, 3.75],
  "TRN": [100, 5, 3.75, 3, 2.88, 2.75],
  "LJU": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "JED": [87.5, 4.38, 3.13, 2.44, 2.25, 2.07],
  "EDI": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "UIO": [312.5, 18.75, 13.75, 11.88, 10.63, 10],
  "NQZ": [125, 5.88, 4.63, 4, 3.88, 3.75],
  "NRT": [100, 5, 4, 3.38, 3.25, 3.13],
  "OPO": [100, 5, 4, 3.38, 3.25, 3.13],
  "DPS": [125, 5.88, 4.63, 4, 3.88, 3.75],
  "CKY": [200, 9.63, 8.38, 7.75, 7.63, 7.5],
  "SZX": [125, 5.88, 4.63, 4, 3.88, 3.75],
  "CGO": [112.5, 5.63, 4.38, 3.63, 3.5, 3.38],
  "BGW": [100, 4.75, 3.5, 2.88, 2.75, 2.63],
  "LCK": [200, 9.63, 8.38, 7.75, 7.63, 7.5],
  "MEL": [175, 8.75, 7.19, 5.63, 5.13, 5],
  "HAM": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "ALG": [125, 5.88, 4.63, 4, 3.88, 3.75],
  "DEN": [187.5, 9.38, 8.13, 7.5, 7.38, 7.25],
  "FNA": [200, 9.63, 8.38, 7.75, 7.63, 7.5],
  "OUA": [175, 8.38, 7.13, 6.5, 6.38, 6.25],
  "DTW": [225, 13.75, 9.38, 8.13, 7.13, 6.88],
  "RUH": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "GOT": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "LUX": [87.5, 4.38, 3.13, 2.44, 2.25, 2.07],
  "ESB": [100, 4.69, 3.44, 2.75, 2.57, 2.5],
  "ABJ": [175, 8.75, 7.75, 7, 6.88, 6.75],
  "JUB": [200, 9.6, 8.4, 7.75, 7.6, 7.5],
  "VLC": [70.3, 5, 4, 3.38, 3.25, 3.13],
  "EBL": [100, 5, 3.75, 3.13, 3, 2.88],
  "FIH": [162.5, 8.13, 6.88, 6.13, 6, 5.88],
  "MRU": [150, 7.5, 6.25, 5.63, 5.5, 5.38],
  "BKO": [175, 8.38, 7.13, 6.5, 6.38, 6.25],
  "DAR": [200, 9.63, 8.38, 7.75, 7.63, 7.5],
  "STN": [100, 4.63, 3.38, 2.75, 2.63, 2.5]
},

    "radioactive" : {
  "IAD": [225, 13.75, 9.38, 8.13, 7.13, 6.88],
  "ATL": [225, 13.75, 9.38, 8.13, 7.13, 6.88],
  "LAX": [225, 13.75, 9.38, 8.13, 7.13, 6.88],
  "IAH": [225, 13.75, 9.38, 8.13, 7.13, 6.88],
  "ORD": [225, 13.75, 9.38, 8.13, 7.13, 6.88],
  "JFK": [225, 13.75, 9.38, 8.13, 7.13, 6.88],
  "MIA": [225, 13.75, 9.38, 8.13, 7.13, 6.88],
  "DFW": [225, 13.75, 9.38, 8.13, 7.13, 6.88],
  "EWR": [225, 13.75, 9.38, 8.13, 7.13, 6.88],
  "BOS": [225, 13.75, 9.38, 8.13, 7.13, 6.88],
  "SFO": [225, 13.75, 9.38, 8.13, 7.13, 6.88],
  "YYZ": [250, 15, 10, 9.38, 8.38, 8.13],
  "YUL": [250, 15, 10, 9.38, 8.38, 8.13],
  "YVR": [225, 11.25, 10, 9.38, 9.25, 9.13],
  "GRU": [312.5, 18.75, 13.75, 11.88, 10.63, 10],
  "EZE": [312.5, 18.75, 13.75, 11.88, 10.63, 10],
  "MEX": [312.5, 18.75, 13.75, 11.88, 10.63, 10],
  "BOG": [312.5, 18.75, 13.75, 11.88, 10.63, 10],
  "KWI": [87.5, 4.38, 3.13, 2.44, 2.25, 2.07],
  "ISB": [100, 5, 3.75, 3, 2.88, 2.75],
  "KHI": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "BAH": [43.75, 3.32, 2.69, 2.44, 2.25, 2.07],
  "DXB": [87.5, 4.13, 2.88, 2.25, 2.13, 2],
  "DWC": [87.5, 4.13, 2.88, 2.25, 2.13, 2],
  "DOH": [87.5, 4.38, 3.13, 2.44, 2.25, 2.07],
  "TPE": [100, 5, 3.75, 3.13, 3, 2.88],
  "KUL": [87.5, 4.38, 3.13, 2.5, 2.25, 2],
  "CAN": [112.5, 5.63, 4.38, 3.75, 3.63, 3.5],
  "HND": [100, 5, 4, 3.38, 3.25, 3.13],
  "PEK": [112.5, 5.63, 4.38, 3.63, 3.5, 3.38],
  "PVG": [125, 6.25, 5, 4.88, 4.75, 4.63],
  "ICN": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "HKG": [87.5, 4.38, 3.13, 2.38, 2.25, 2.13],
  "BEG": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "OTP": [87.5, 4.38, 3.13, 2.38, 2.25, 2.13],
  "CGK": [112.5, 5.63, 4.38, 3.75, 3.63, 3.5],
  "SVO": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "VKO": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "BKK": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "BEY": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "MCT": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "BUD": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "BSL": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "GVA": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "ZRH": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "SOF": [125, 5.88, 4.63, 4, 3.88, 3.75],
  "SIN": [100, 5, 3.75, 3.13, 3, 2.88],
  "LHR": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "MAN": [100, 5, 3.75, 3.13, 3, 2.88],
  "BHX": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "DUB": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "ARN": [87.5, 4.38, 3.13, 2.44, 2.25, 2.07],
  "MST": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "AMS": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "WAW": [100, 5, 3.75, 3, 2.88, 2.75],
  "OSL": [87.5, 4.38, 3.13, 2.38, 2.25, 2.13],
  "ALA": [112.5, 5.5, 4.25, 3.5, 3.38, 3.25],
  "TBS": [125, 5.88, 4.63, 4, 3.88, 3.75],
  "TLV": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "MXP": [87.5, 4.38, 3.13, 2.38, 2.19, 2],
  "VCE": [125, 5.88, 4.63, 4, 3.88, 3.75],
  "ATH": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "FCO": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "CPH": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "BLL": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "TLL": [100, 5, 3.75, 3.13, 3, 2.88],
  "BRU": [87.5, 4.25, 3, 2.25, 2.13, 2],
  "LGG": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "FRA": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "CDG": [87.5, 4.25, 3, 2.38, 2.25, 2.13],
  "PRG": [87.5, 4.38, 3.13, 2.44, 2.25, 2.07],
  "VIE": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "SGN": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "CAI": [100, 5, 4, 3.38, 3.25, 3.13],
  "BER": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "MUC": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "DUS": [100, 5, 3.75, 3, 2.88, 2.75],
  "HEL": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "STR": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "BRE": [100, 5, 3.75, 3, 2.88, 2.75],
  "LIS": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "CGN": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "NUE": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "HAJ": [100, 5, 3.75, 3, 2.88, 2.75],
  "HAN": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "AMM": [87.5, 4.38, 3.13, 2.44, 2.25, 2.07],
  "MAD": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "BCN": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "MNL": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "VNO": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "DMM": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "DEL": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "HYD": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "BLR": [87.5, 4.38, 3.13, 2.38, 2.25, 2.13],
  "MAA": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "ECN": [150, 7.13, 5.88, 5.25, 5.13, 5],
  "ADA": [100, 4.69, 3.44, 2.75, 2.57, 2.5],
  "IST": [87.5, 4.38, 3.13, 2.44, 2.25, 2.19],
  "ACC": [150, 7.13, 5.88, 5.25, 5.13, 5],
  "DAC": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "NBO": [125, 5.88, 4.63, 4, 3.88, 3.75],
  "CPT": [150, 7.13, 5.88, 5.25, 5.13, 5],
  "JNB": [175, 8.38, 7.13, 6.5, 6.38, 6.25],
  "CMN": [125, 5.88, 4.63, 4, 3.88, 3.75],
  "DSS": [150, 7.13, 5.88, 5.25, 5.13, 5],
  "EBB": [150, 7.13, 5.88, 5.25, 5.13, 5],
  "TUN": [150, 7.5, 6.5, 5.88, 5.75, 5.63],
  "FNA": [200, 9.63, 8.38, 7.75, 7.63, 7.5],
  "BOM": [100, 4.5, 3.25, 2.63, 2.5, 2.38],
  "AMD": [87.5, 4.38, 3.13, 2.38, 2.25, 2.13],
  "DLA": [200, 9.63, 8.38, 7.75, 7.63, 7.5],
  "ZAG": [125, 5.88, 4.63, 4, 3.88, 3.75],
  "AUH": [87.5, 4.38, 3.13, 2.38, 2.25, 2.13],
  "SHJ": [125, 5.88, 4.63, 4, 3.88, 3.75],
  "LHE": [100, 5, 3.75, 3, 2.88, 2.75],
  "BLQ": [100, 5, 3.75, 3, 2.88, 2.75],
  "BRI": [125, 5.88, 4.63, 4, 3.88, 3.75],
  "NAP": [100, 5, 4, 3.38, 3.25, 3.13],
  "CTA": [125, 5.88, 4.63, 4, 3.88, 3.75],
  "TRN": [100, 5, 3.75, 3, 2.88, 2.75],
  "LJU": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "JED": [87.5, 4.38, 3.13, 2.44, 2.25, 2.07],
  "EDI": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "UIO": [312.5, 18.75, 13.75, 11.88, 10.63, 10],
  "NQZ": [125, 5.88, 4.63, 4, 3.88, 3.75],
  "NRT": [100, 5, 4, 3.38, 3.25, 3.13],
  "OPO": [100, 5, 4, 3.38, 3.25, 3.13],
  "DPS": [125, 5.88, 4.63, 4, 3.88, 3.75],
  "CKY": [200, 9.63, 8.38, 7.75, 7.63, 7.5],
  "SZX": [125, 5.88, 4.63, 4, 3.88, 3.75],
  "CGO": [112.5, 5.63, 4.38, 3.63, 3.5, 3.38],
  "BGW": [100, 4.75, 3.5, 2.88, 2.75, 2.63],
  "LCK": [200, 9.63, 8.38, 7.75, 7.63, 7.5],
  "MEL": [175, 8.75, 7.19, 5.63, 5.13, 5],
  "HAM": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "ALG": [125, 5.88, 4.63, 4, 3.88, 3.75],
  "DEN": [187.5, 9.38, 8.13, 7.5, 7.38, 7.25],
  "FNA": [200, 9.63, 8.38, 7.75, 7.63, 7.5],
  "OUA": [175, 8.38, 7.13, 6.5, 6.38, 6.25],
  "DTW": [225, 13.75, 9.38, 8.13, 7.13, 6.88],
  "RUH": [87.5, 4.38, 3.13, 2.5, 2.38, 2.25],
  "GOT": [100, 4.63, 3.38, 2.75, 2.63, 2.5],
  "LUX": [87.5, 4.38, 3.13, 2.44, 2.25, 2.07],
  "ESB": [100, 4.69, 3.44, 2.75, 2.57, 2.5],
  "ABJ": [175, 8.75, 7.75, 7, 6.88, 6.75],
  "JUB": [200, 9.6, 8.4, 7.75, 7.6, 7.5],
  "VLC": [70.3, 5, 4, 3.38, 3.25, 3.13],
  "EBL": [100, 5, 3.75, 3.13, 3, 2.88],
  "FIH": [162.5, 8.13, 6.88, 6.13, 6, 5.88],
  "MRU": [150, 7.5, 6.25, 5.63, 5.5, 5.38],
  "BKO": [175, 8.38, 7.13, 6.5, 6.38, 6.25],
  "DAR": [200, 9.63, 8.38, 7.75, 7.63, 7.5],
  "STN": [100, 4.63, 3.38, 2.75, 2.63, 2.5]
    }

  },

  "Uganda Airlines": {
    "general": {
      "BJM": [125, 2.85, 2.7, 2.55, 2.2, 1.95, 1.8],
      "BOM": [125, 3.25, 3.1, 2.95, 2.6, 2.35, 2.2],
      "DAR": [125, 2.95, 2.8, 2.65, 2.3, 2.05, 1.9],
      "DXB": [125, 3.3, 3.15, 3, 2.65, 2.3, 1.95],
      "HRE": [125, 3.50, 3.35, 3.20, 2.90, 2.60, 2.40],//
      "FIH": [125, 3.25, 3.1, 2.95, 2.6, 2.35, 2.1],
      "JNB": [125, 2.95, 2.8, 2.65, 2.3, 2.05, 1.9],
      "JRO": [125, 2.85, 2.7, 2.55, 2.2, 1.95, 1.8],
      "LUN": [125, 3.50, 3.35, 3.10, 2.90, 2.70, 2.45],//
      "JUB": [125, 3.05, 2.9, 2.75, 2.4, 2.15, 2],
      "MBA": [125, 2.9, 2.75, 2.6, 2.25, 2, 1.85],
      "MGQ": [125, 3.3, 3.15, 3, 2.55, 2.4, 2.25],
      "NBO": [125, 2.95, 2.8, 2.55, 2.3, 2.05, 1.9],
      "ZNZ": [125, 3.15, 3, 2.85, 2.5, 2.25, 2.1]
},
    "dangerous": {
      "BJM": [275.0, 6.27, 5.94, 5.61, 4.84, 4.29, 3.96],
      "BOM": [275.0, 7.15, 6.82, 6.49, 5.72, 5.17, 4.84],
      "DAR": [275.0, 6.49, 6.16, 5.83, 5.06, 4.51, 4.18],
      "DXB": [275.0, 7.26, 6.93, 6.6, 5.83, 5.06, 4.29],
      "HRE": [275.0, 7.7, 7.37, 7.04, 6.38, 5.72, 5.28],//
      "FIH": [275.0, 7.15, 6.82, 6.49, 5.72, 5.17, 4.62],
      "JNB": [275.0, 6.49, 6.16, 5.83, 5.06, 4.51, 4.18],
      "JRO": [275.0, 6.27, 5.94, 5.61, 4.84, 4.29, 3.96],
      "LUN": [275.0, 7.7, 7.37, 6.82, 6.38, 5.94, 5.39],//
      "JUB": [275.0, 6.71, 6.38, 6.05, 5.28, 4.73, 4.4],
      "MBA": [275.0, 6.38, 6.05, 5.72, 4.95, 4.4, 4.07],
      "MGQ": [275.0, 7.26, 6.93, 6.6, 5.61, 5.28, 4.95],
      "NBO": [275.0, 6.49, 6.16, 5.61, 5.06, 4.51, 4.18],
      "ZNZ": [275.0, 6.93, 6.6, 6.27, 5.5, 4.95, 4.62]
},
//     "radioactive": {
//       "BJM": [138, 3.42, 3.24, 3.06, 2.64, 2.34, 2.16],
//       "BOM": [150, 3.9, 3.72, 3.54, 3.12, 2.82, 2.64],
//       "DAR": [138, 3.54, 3.36, 3.18, 2.76, 2.46, 2.28],
//       "DXB": [150, 3.96, 3.78, 3.6, 3.18, 2.76, 2.34],
//       "FIH": [138, 3.9, 3.72, 3.54, 3.12, 2.82, 2.52],
//       "JNB": [138, 3.54, 3.36, 3.18, 2.76, 2.46, 2.28],
//       "JRO": [138, 3.42, 3.24, 3.06, 2.64, 2.34, 2.16],
//       "JUB": [150, 3.66, 3.48, 3.3, 2.88, 2.58, 2.4],
//       "MBA": [138, 3.48, 3.3, 3.12, 2.7, 2.4, 2.22],
//       "MGQ": [150, 3.96, 3.78, 3.6, 3.06, 2.88, 2.7],
//       "NBO": [138, 3.54, 3.36, 3.06, 2.76, 2.46, 2.28],
//       "ZNZ": [138, 3.78, 3.6, 3.42, 3.0, 2.7, 2.52]
// },

  },
};


// Content types (to avoid duplication)
const contentTypes = ["general", "dangerous", "radioactive"];

document.addEventListener('DOMContentLoaded', function() {
    // Populate content type dropdown
    const contentSelect = document.getElementById('content');
    contentTypes.forEach(function(content) {
        const option = document.createElement('option');
        option.value = content;
        option.textContent = content.charAt(0).toUpperCase() + content.slice(1);
        contentSelect.appendChild(option);
    });
});

// Update destinations based on selected airline
document.getElementById('airline').addEventListener('change', function() {
    const selectedAirline = this.value;
    const destinationDatalist = document.getElementById('destination-options');
    
    // Clear existing options
    destinationDatalist.innerHTML = '';
    
    if (destinations[selectedAirline]) {
        destinations[selectedAirline].forEach(function(destination) {
            const option = document.createElement('option');
            option.value = destination;
            destinationDatalist.appendChild(option);
            console.log('Adding Destination:', destination);
        });
    } else {
        console.log('No destinations found for selected airline:', selectedAirline);
    }
});

// Calculate total payment
document.getElementById('calculate-button').addEventListener('click', function() {
    const airline = document.getElementById('airline').value;
    const destination = document.getElementById('destination-input').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const exchangeRate = parseFloat(document.getElementById('exchangeRate').value);
    const contentType = document.getElementById('content').value;
    const houseAirwaybill = document.getElementById('houseAirwaybill')?.checked || false;
    const AVIServiceCharge = document.getElementById('AVIServiceCharge')?.checked || false;
    const Consolidation = document.getElementById('Consolidation')?.checked || false;
    const ChangeofConsine = document.getElementById('ChangeofConsine')?.checked || false;


    // Debugging logs
    console.log('Airline:', airline);
    console.log('Content Type:', contentType);
    console.log('Destination:', destination);
    console.log('Weight:', weight);
    console.log('House Airwaybill Checked:', houseAirwaybill);
    console.log('AVI Service Charge Checked:', AVIServiceCharge);
    console.log('Consolidation Fee Checked:', Consolidation);
    console.log('Change of Consine Checked:', ChangeofConsine);

    // Error handling for missing fields
    if (!weight || !exchangeRate || !destination || !contentType || !airline || airline === "#") {
        document.getElementById('error-message').innerText = 'Please fill in all required fields.';
        document.getElementById('error-message').style.display = 'block';
        return;
    } else {
        document.getElementById('error-message').style.display = 'none';
    }

    // Get weightRate array based on airline, contentType, and destination
    const rateArray = weightRates[airline]?.[contentType]?.[destination];

    // Validate rateArray
    if (!rateArray) {
        document.getElementById('error-message').innerText = 'Invalid destination or rate array.';
        document.getElementById('error-message').style.display = 'block';
        return;
    }

    // Determine weight rate based on weight ranges
    let weightRate = 0;
    
    if (airline === 'Turkish Airlines') {
        if (weight >= 1 && weight <= 20) {
            weightRate = rateArray[0];
        } else if (weight >= 21 && weight <= 44) {
            weightRate = rateArray[1];
        } else if (weight >= 45 && weight <= 99) {
            weightRate = rateArray[2];
        } else if (weight >= 100 && weight <= 499) {
            weightRate = rateArray[3];
        } else if (weight >= 500 && weight <= 999) {
            weightRate = rateArray[4];
        } else if (weight >= 1000) {
            weightRate = rateArray[5];
        } else {
            document.getElementById('error-message').innerText = 'Invalid weight.';
            document.getElementById('error-message').style.display = 'block';
            return;
        }
    } else if (airline === 'Uganda Airlines') {
        if (weight >= 0.1 && weight <= 30) {
            weightRate = rateArray[0];
        } else if (weight >= 31 && weight <= 44) {
            weightRate = rateArray[1];
        } else if (weight >= 45 && weight <= 99) {
            weightRate = rateArray[2];
        } else if (weight >= 100 && weight <= 249) {
            weightRate = rateArray[3];
        } else if (weight >= 250 && weight <= 499) {
            weightRate = rateArray[4];
        } else if (weight >= 500 && weight <= 999) {
            weightRate = rateArray[5];
        } else if (weight >= 1000) {
            weightRate = rateArray[6];
        } else {
            document.getElementById('error-message').innerText = 'Invalid weight.';
            document.getElementById('error-message').style.display = 'block';
            return;
        }
    }

    console.log('Weight Rate:', weightRate);

    // Calculate total cost
    const totalCost = calculateFreight(
    weight,
    weightRate,
    exchangeRate,
    contentType,
    airline,
    destination,
    houseAirwaybill,
    AVIServiceCharge,
    Consolidation,
    ChangeofConsine
);
    console.log(`Total Price: ₦${totalCost}`);
    console.log('House Airwaybill Fee Applied:', houseAirwaybill ? 'Yes' : 'No');
    console.log('AVI Service Charge Fee Applied:', AVIServiceCharge ? 'Yes' : 'No');
    console.log('Consolidation Fee Applied:', Consolidation ? 'Yes' : 'No');
    console.log('Change of Consine Fee Applied:', ChangeofConsine ? 'Yes' : 'No');

    // Display result
    document.getElementById('result').innerText = `Total Payment: ₦${totalCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
});

// Function to calculate total price for freight
function calculateFreight(weight, weightRate, exchangeRate, contentType, airline, destination, houseAirwaybill, AVIServiceCharge, Consolidation, ChangeofConsine) {
    // Initialize fees
    const CGC_AIRWAYBILL_FEE = 30 * exchangeRate;
    console.log('CGC_AIRWAYBILL_FEE:', CGC_AIRWAYBILL_FEE);

    const HOUSE_AIRWAYBILL_FEE = houseAirwaybill ? 35 * exchangeRate : 0;
    console.log('HOUSE_AIRWAYBILL_FEE:', HOUSE_AIRWAYBILL_FEE);

    const AVI_SERVICE_CHARGE_FEE = AVIServiceCharge  ? 100 * exchangeRate : 0;
    console.log('AVI_SERVICE_CHARGE_FEE:', AVI_SERVICE_CHARGE_FEE);

    const CONSOLIDATION_FEE = Consolidation ? 15 * exchangeRate : 0;
    console.log('CONSOLIDATION_FEE:', CONSOLIDATION_FEE);

    const CHANGE_OF_CONSINE_FEE = ChangeofConsine ? 50 * exchangeRate : 0;
    console.log('CHANGE_OF_CONSINE_FEE:', CHANGE_OF_CONSINE_FEE);

    const TRANSACTION_FEE = 50 ;
    console.log('TRANSACTION_FEE:', TRANSACTION_FEE);

    const HANDLING_FEE = (airline === 'Turkish Airlines') ? 7.5 * exchangeRate : 0;
    console.log('HANDLING_FEE:', HANDLING_FEE);

    const AIRWAYBILL_FEE = (airline === 'Turkish Airlines') ? 25 * exchangeRate : 0;
    console.log('AIRWAYBILL_FEE:', AIRWAYBILL_FEE);
    
    

    const STAMP_DUTY_FEE = (destination === 'IST' || destination === 'AMM' || destination === 'ECN') ? 10 * exchangeRate : 0;
    const RADIOACTIVE_FEE = contentType === 'radioactive' ? 100 * exchangeRate : 0;
    
    const transictFee = 
        airline === 'Uganda Airlines' && (destination === 'BJM' || destination === 'BOM' || destination === 'DAR' || destination === 'DXB' || 
        destination === 'FIH' || destination === 'JNB' || destination === 'JRO' || destination === 'JUB' || 
        destination === 'MBA' || destination === 'MGQ' || destination === 'NBO' || destination === 'ZNZ') 
        ? (weight < 45 ? 5 * exchangeRate : 0.05 * exchangeRate * weight) 
        : 0; 
    
    const mcc = airline === 'Uganda Airlines' && (destination === 'JUB') 
        ? (weight < 45 ? 5 * exchangeRate : 0.05 * exchangeRate * weight) 
        : 0;

    // Dangerous goods fee calculations
    const dangerousGoodFee = contentType === 'dangerous' 
        ? (airline === 'Turkish Airlines' 
            ? 40 * exchangeRate 
            : (airline === 'Uganda Airlines' && weight <= 30 
                ? 200 * exchangeRate 
                : 50 * exchangeRate)) 
        : 0;

    console.log('dangerousGoodFee:', dangerousGoodFee);

   let ADMIN_FEE_LIMIT;

// Check airline
if (airline === "Turkish Airlines") {
    // Turkish Airlines rule (unchanged)
    ADMIN_FEE_LIMIT = 40000;
    adminFee = (weight <= 200) ? ADMIN_FEE_LIMIT : (200 * weight);
}


// Uganda Airlines with new tier system
else if (airline === "Uganda Airlines") {

    if (weight >= 1 && weight <= 44) {
        adminFee = 10000;
    } 
    else if (weight >= 45 && weight <= 99) {
        adminFee = 15000;
    } 
    else if (weight >= 100 && weight <= 499) {
        adminFee = 20000;
    } 
    else if (weight >= 500 && weight <= 999) {
        adminFee = 25000;
    } 
    else if (weight >= 1000) {
        adminFee = weight * 40;  // ₦40 per kg
    }
}

console.log("Admin Fee:", adminFee);
  
    // Calculate freight

    let freight;
    // Check if destination requires rate adjustment
    const specialDestinations = ['DFW', 'SIN', 'LHR', 'DOH'];
    if (specialDestinations.includes(destination)) {
        weightRate += 0.3; // add 0.3 to weightRate
}

// Freight calculation based on airline and weight
    if (airline === 'Turkish Airlines' && weight <= 20) {
        freight = weightRate * exchangeRate;
    } else if (airline === 'Uganda Airlines' && weight < 31) {
        freight = weightRate * exchangeRate;
    } else {
        freight = weight * weightRate * exchangeRate;
    }

    console.log('Freight:', freight);

    const NCAA = freight * 0.075;
    console.log('NCAA:', NCAA);

    // Total fees
    const totalFees = CGC_AIRWAYBILL_FEE + AIRWAYBILL_FEE + STAMP_DUTY_FEE + RADIOACTIVE_FEE + dangerousGoodFee + transictFee + mcc + HOUSE_AIRWAYBILL_FEE + AVI_SERVICE_CHARGE_FEE + CONSOLIDATION_FEE + CHANGE_OF_CONSINE_FEE + TRANSACTION_FEE + HANDLING_FEE;


    // Total calculation
    const total = freight + NCAA + totalFees + adminFee;
    console.log('Total Fees:', totalFees);
    console.log('Total Price:', total);

    return total;

}
















