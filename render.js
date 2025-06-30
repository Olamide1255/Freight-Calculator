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
    "DTW", "RUH", "GOT"
  ],
  "Uganda Airlines": [
    "BJM", "BOM", "DAR", "DXB", "EBB", "FIH", "JNB", "JRO", "JUB", "MBA", 
    "MGQ", "NBO", "ZNZ"
  ]
};

// Weight rates based on destination and weight range
// weightRates["Turkish_Airlines"]
// weightRates.TurkishAirlines
const weightRates = {
  "Turkish Airlines": {
    "general": {
    "IAD": [200, 11.15, 7.65, 6.65, 5.85, 5.65],
    "ATL": [200, 11.15, 7.65, 6.65, 5.85, 5.65],
    "LAX": [200, 11.15, 7.65, 6.65, 5.85, 5.65],
    "IAH": [200, 11.15, 7.65, 6.65, 5.85, 5.65],
    "ORD": [200, 11.15, 7.65, 6.65, 5.85, 5.65],
    "JFK": [200, 11.15, 7.65, 6.65, 5.85, 5.65],
    "MIA": [200, 11.15, 7.65, 6.65, 5.85, 5.65],
    "DFW": [200.5, 11.65, 8.15, 7.15, 6.35, 6.15],
    "EWR": [200, 11.15, 7.65, 6.65, 5.85, 5.65],
    "BOS": [200, 11.15, 7.65, 6.65, 5.85, 5.65],
    "SFO": [200, 11.15, 7.65, 6.65, 5.85, 5.65],
    "YYZ": [220, 12.15, 8.15, 7.65, 6.85, 6.65],
    "YUL": [220, 12.15, 8.15, 7.65, 6.85, 6.65],
    "YVR": [200, 9.15, 8.15, 7.65, 7.55, 7.45],
    "GRU": [270, 15.15, 11.15, 9.65, 8.65, 8.15],
    "EZE": [270, 15.15, 11.15, 9.65, 8.65, 8.15],
    "MEX": [270, 15.15, 11.15, 9.65, 8.65, 8.15],
    "BOG": [270, 15.15, 11.15, 9.65, 8.65, 8.15],
    "KWI": [90, 3.65, 2.65, 2.1, 1.95, 1.8],
    "ISB": [100, 4.15, 3.15, 2.55, 2.45, 2.35],
    "KHI": [100, 3.75, 2.75, 2.25, 2.15, 2.05],
    "BAH": [55, 2.8, 2.3, 2.1, 1.95, 1.8],
    "DXB": [90, 3.45, 2.45, 1.95, 1.85, 1.75],
    "DWC": [90, 3.45, 2.45, 1.95, 1.85, 1.75],
    "DOH": [90.5, 4.15, 3.15, 2.6, 2.45, 2.3],
    "TPE": [100, 4.15, 3.15, 2.65, 2.55, 2.45],
    "KUL": [90, 3.65, 2.65, 2.15, 1.95, 1.75],
    "CAN": [110, 4.65, 3.65, 3.15, 3.05, 2.95],
    "HND": [100, 4.15, 3.35, 2.85, 2.75, 2.65],
    "PEK": [110, 4.65, 3.65, 3.05, 2.95, 2.85],
    "PVG": [120, 5.15, 4.15, 4.05, 3.95, 3.85],
    "ICN": [100, 3.85, 2.85, 2.35, 2.25, 2.15],
    "HKG": [90, 3.65, 2.65, 2.05, 1.95, 1.85],
    "BEG": [100, 3.85, 2.85, 2.35, 2.25, 2.15],
    "OTP": [90, 3.65, 2.65, 2.05, 1.95, 1.85],
    "CGK": [110, 4.65, 3.65, 3.15, 3.05, 2.95],
    "SVO": [100, 3.75, 2.75, 2.25, 2.15, 2.05],
    "VKO": [100, 3.75, 2.75, 2.25, 2.15, 2.05],
    "BKK": [90, 3.65, 2.65, 2.15, 2.05, 1.95],
    "BEY": [100, 3.75, 2.75, 2.25, 2.15, 2.05],
    "MCT": [90, 3.65, 2.65, 2.15, 2.05, 1.95],
    "BUD": [90, 3.65, 2.65, 2.15, 2.05, 1.95],
    "BSL": [100, 3.75, 2.75, 2.25, 2.15, 2.05],
    "GVA": [100, 3.85, 2.85, 2.35, 2.25, 2.15],
    "ZRH": [90, 3.65, 2.65, 2.15, 2.05, 1.95],
    "SOF": [120, 4.85, 3.85, 3.35, 3.25, 3.15],
    "SIN": [100.5, 4.65, 3.65, 3.15, 3.05, 2.95],
    "LHR": [100.5, 4.25, 3.25, 2.75, 2.65, 2.55],
    "MAN": [100, 4.15, 3.15, 2.65, 2.55, 2.45],
    "BHX": [100, 3.85, 2.85, 2.35, 2.25, 2.15],
    "DUB": [100, 3.85, 2.85, 2.35, 2.25, 2.15],
    "ARN": [90, 3.65, 2.65, 2.1, 1.95, 1.8],
    "MST": [90, 3.65, 2.65, 2.15, 2.05, 1.95],
    "AMS": [100, 3.75, 2.75, 2.25, 2.15, 2.05],
    "WAW": [100, 4.15, 3.15, 2.55, 2.45, 2.35],
    "OSL": [90, 3.65, 2.65, 2.05, 1.95, 1.85],
    "ALA": [110, 4.55, 3.55, 2.95, 2.85, 2.75],
    "TBS": [120, 4.85, 3.85, 3.35, 3.25, 3.15],
    "TLV": [90, 3.65, 2.65, 2.15, 2.05, 1.95],
    "MXP": [90, 3.65, 2.65, 2.05, 1.9, 1.75],
    "VCE": [120, 4.85, 3.85, 3.35, 3.25, 3.15],
    "ATH": [90, 3.65, 2.65, 2.15, 2.05, 1.95],
    "FCO": [90, 3.65, 2.65, 2.15, 2.05, 1.95],
    "CPH": [100, 3.75, 2.75, 2.25, 2.15, 2.05],
    "BLL": [90, 3.65, 2.65, 2.15, 2.05, 1.95],
    "TLL": [100, 4.15, 3.15, 2.65, 2.55, 2.45],
    "BRU": [90, 3.55, 2.55, 1.95, 1.85, 1.75],
    "LGG": [100, 3.75, 2.75, 2.25, 2.15, 2.05],
    "FRA": [90, 3.65, 2.65, 2.15, 2.05, 1.95],
    "CDG": [90, 3.55, 2.55, 2.05, 1.95, 1.85],
    "PRG": [90, 3.65, 2.65, 2.1, 1.95, 1.8],
    "VIE": [100, 3.75, 2.75, 2.25, 2.15, 2.05],
    "SGN": [90, 3.65, 2.65, 2.15, 2.05, 1.95],
    "CAI": [100, 4.15, 3.35, 2.85, 2.75, 2.65],
    "BER": [100, 3.85, 2.85, 2.35, 2.25, 2.15],
    "MUC": [100, 3.75, 2.75, 2.25, 2.15, 2.05],
    "DUS": [100, 4.15, 3.15, 2.55, 2.45, 2.35],
    "HEL": [100, 3.85, 2.85, 2.35, 2.25, 2.15],
    "STR": [100, 3.85, 2.85, 2.35, 2.25, 2.15],
    "BRE": [100, 4.15, 3.15, 2.55, 2.45, 2.35],
    "LIS": [100, 3.85, 2.85, 2.35, 2.25, 2.15],
    "CGN": [100, 3.85, 2.85, 2.35, 2.25, 2.15],
    "NUE": [100, 3.85, 2.85, 2.35, 2.25, 2.15],
    "HAJ": [100, 4.15, 3.15, 2.55, 2.45, 2.35],
    "HAN": [90, 3.65, 2.65, 2.15, 2.05, 1.95],
    "AMM": [90, 3.65, 2.65, 2.1, 1.95, 1.8],
    "MAD": [100, 3.75, 2.75, 2.25, 2.15, 2.05],
    "BCN": [100, 3.75, 2.75, 2.25, 2.15, 2.05],
    "MNL": [100, 3.85, 2.85, 2.35, 2.25, 2.15],
    "VNO": [100, 3.85, 2.85, 2.35, 2.25, 2.15],
    "DMM": [100, 3.75, 2.75, 2.25, 2.15, 2.05],
    "DEL": [100, 3.75, 2.75, 2.25, 2.15, 2.05],
    "HYD": [90, 3.65, 2.65, 2.15, 2.05, 1.95],
    "BLR": [90, 3.65, 2.65, 2.05, 1.95, 1.85],
    "MAA": [90, 3.65, 2.65, 2.15, 2.05, 1.95],
    "ECN": [140, 5.85, 4.85, 4.35, 4.25, 4.15],
    "ADA": [100, 3.9, 2.9, 2.35, 2.2, 2.15],
    "IST": [90, 3.65, 2.65, 2.1, 1.95, 1.9],
    "ACC": [140, 5.85, 4.85, 4.35, 4.25, 4.15],
    "DAC": [100, 3.85, 2.85, 2.35, 2.25, 2.15],
    "NBO": [120, 4.85, 3.85, 3.35, 3.25, 3.15],
    "CPT": [140, 5.85, 4.85, 4.35, 4.25, 4.15],
    "JNB": [160, 6.85, 5.85, 5.35, 5.25, 5.15],
    "CMN": [120, 4.85, 3.85, 3.35, 3.25, 3.15],
    "DSS": [140, 5.85, 4.85, 4.35, 4.25, 4.15],
    "EBB": [140, 5.85, 4.85, 4.35, 4.25, 4.15],
    "TUN": [140, 6.15, 5.35, 4.85, 4.75, 4.65],
    "FNA": [180, 7.85, 6.85, 6.35, 6.25, 6.15],
    "BOM": [100, 3.75, 2.75, 2.25, 2.15, 2.05],
    "AMD": [90, 3.65, 2.65, 2.05, 1.95, 1.85],
    "DLA": [180, 7.85, 6.85, 6.35, 6.25, 6.15],
    "ZAG": [120, 4.85, 3.85, 3.35, 3.25, 3.15],
    "AUH": [90, 3.65, 2.65, 2.05, 1.95, 1.85],
    "SHJ": [120, 4.85, 3.85, 3.35, 3.25, 3.15],
    "LHE": [100, 4.15, 3.15, 2.55, 2.45, 2.35],
    "BLQ": [100, 4.15, 3.15, 2.55, 2.45, 2.35],
    "BRI": [120, 4.85, 3.85, 3.35, 3.25, 3.15],
    "NAP": [100, 4.15, 3.35, 2.85, 2.75, 2.65],
    "CTA": [120, 4.85, 3.85, 3.35, 3.25, 3.15],
    "TRN": [100, 4.15, 3.15, 2.55, 2.45, 2.35],
    "LJU": [100, 3.85, 2.85, 2.35, 2.25, 2.15],
    "JED": [90, 3.65, 2.65, 2.1, 1.95, 1.8],
    "EDI": [100, 3.85, 2.85, 2.35, 2.25, 2.15],
    "UIO": [270, 15.15, 11.15, 9.65, 8.65, 8.15],
    "NQZ": [120, 4.85, 3.85, 3.35, 3.25, 3.15],
    "NRT": [100, 4.15, 3.35, 2.85, 2.75, 2.65],
    "OPO": [100, 4.15, 3.35, 2.85, 2.75, 2.65],
    "DPS": [120, 4.85, 3.85, 3.35, 3.25, 3.15],
    "CKY": [180, 7.85, 6.85, 6.35, 6.25, 6.15],
    "SZX": [120, 4.85, 3.85, 3.35, 3.25, 3.15],
    "CGO": [110, 4.65, 3.65, 3.05, 2.95, 2.85],
    "BGW": [100, 3.95, 2.95, 2.45, 2.35, 2.25],
    "LCK": [180, 7.85, 6.85, 6.35, 6.25, 6.15],
    "MEL": [160, 7.15, 5.9, 4.65, 4.25, 4.15],
    "HAM": [100, 3.85, 2.85, 2.35, 2.25, 2.15],
    "ALG": [120, 4.85, 3.85, 3.35, 3.25, 3.15],
    "DEN": [170, 7.65, 6.65, 6.15, 6.05, 5.95],
    "FNA": [180, 7.85, 6.85, 6.35, 6.25, 6.15],
    "OUA": [160, 6.85, 5.85, 5.35, 5.25, 5.15],
    "LAD": [150, 6.65, 5.65, 5.1, 5, 4.9],
    "DTW": [200, 11.15, 7.65, 6.65, 5.85, 5.65],
    "RUH": [90, 3.65, 2.65, 2.15, 2.05, 1.95],
    "GOT": [100, 3.85, 2.85, 2.35, 2.25, 2.15],
    },
    "dangerous" : {
      "IAD": [255, 14.05, 9.68, 8.43, 7.43, 7.18],
      "ATL": [255, 14.05, 9.68, 8.43, 7.43, 7.18],
      "LAX": [255, 14.05, 9.68, 8.43, 7.43, 7.18],
      "IAH": [255, 14.05, 9.68, 8.43, 7.43, 7.18],
      "ORD": [255, 14.05, 9.68, 8.43, 7.43, 7.18],
      "JFK": [255, 14.05, 9.68, 8.43, 7.43, 7.18],
      "MIA": [255, 14.05, 9.68, 8.43, 7.43, 7.18],
      "DFW": [255.5, 14.55, 10.18, 8.93, 7.93, 7.68],
      "EWR": [255, 14.05, 9.68, 8.43, 7.43, 7.18],
      "BOS": [255, 14.05, 9.68, 8.43, 7.43, 7.18],
      "SFO": [255, 14.05, 9.68, 8.43, 7.43, 7.18],
      "YYZ": [280, 15.3, 10.3, 9.68, 8.68, 8.43],
      "YUL": [280, 15.3, 10.3, 9.68, 8.68, 8.43],
      "YVR": [255, 11.55, 10.3, 9.68, 9.55, 9.43],
      "GRU": [342.5, 19.05, 14.05, 12.18, 10.93, 10.3],
      "EZE": [342.5, 19.05, 14.05, 12.18, 10.93, 10.3],
      "MEX": [342.5, 19.05, 14.05, 12.18, 10.93, 10.3],
      "BOG": [342.5, 19.05, 14.05, 12.18, 10.93, 10.3],
      "KWI": [117.5, 4.68, 3.43, 2.74, 2.55, 2.37],
      "ISB": [130, 5.3, 4.05, 3.3, 3.18, 3.05],
      "KHI": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "BAH": [73.75, 3.62, 2.99, 2.74, 2.55, 2.37],
      "DXB": [117.5, 4.43, 3.18, 2.55, 2.43, 2.3],
      "DWC": [117.5, 4.43, 3.18, 2.55, 2.43, 2.3],
      "DOH": [118, 5.18, 3.93, 3.24, 3.05, 2.87],
      "TPE": [130, 5.3, 4.05, 3.43, 3.3, 3.18],
      "KUL": [117.5, 4.68, 3.43, 2.8, 2.55, 2.3],
      "CAN": [142.5, 5.93, 4.68, 4.05, 3.93, 3.8],
      "HND": [130, 5.3, 4.3, 3.68, 3.55, 3.43],
      "PEK": [142.5, 5.93, 4.68, 3.93, 3.8, 3.68],
      "PVG": [155, 6.55, 5.3, 5.18, 5.05, 4.93],
      "ICN": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "HKG": [117.5, 4.68, 3.43, 2.68, 2.55, 2.43],
      "BEG": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "OTP": [117.5, 4.68, 3.43, 2.68, 2.55, 2.43],
      "CGK": [142.5, 5.93, 4.68, 4.05, 3.93, 3.8],
      "SVO": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "VKO": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "BKK": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "BEY": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "MCT": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "BUD": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "BSL": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "GVA": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "ZRH": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "SOF": [155, 6.18, 4.93, 4.3, 4.18, 4.05],
      "SIN": [130.5, 5.8, 4.55, 3.93, 3.8, 3.68],
      "LHR": [130.5, 5.3, 4.05, 3.43, 3.3, 3.18],
      "MAN": [130, 5.3, 4.05, 3.43, 3.3, 3.18],
      "BHX": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "DUB": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "ARN": [117.5, 4.68, 3.43, 2.74, 2.55, 2.37],
      "MST": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "AMS": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "WAW": [130, 5.3, 4.05, 3.3, 3.18, 3.05],
      "OSL": [117.5, 4.68, 3.43, 2.68, 2.55, 2.43],
      "ALA": [142.5, 5.8, 4.55, 3.8, 3.68, 3.55],
      "TBS": [155, 6.18, 4.93, 4.3, 4.18, 4.05],
      "TLV": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "MXP": [117.5, 4.68, 3.43, 2.68, 2.49, 2.3],
      "VCE": [155, 6.18, 4.93, 4.3, 4.18, 4.05],
      "ATH": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "FCO": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "CPH": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "BLL": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "TLL": [130, 5.3, 4.05, 3.43, 3.3, 3.18],
      "BRU": [117.5, 4.55, 3.3, 2.55, 2.43, 2.3],
      "LGG": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "FRA": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "CDG": [117.5, 4.55, 3.3, 2.68, 2.55, 2.43],
      "PRG": [117.5, 4.68, 3.43, 2.74, 2.55, 2.37],
      "VIE": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "SGN": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "CAI": [130, 5.3, 4.3, 3.68, 3.55, 3.43],
      "BER": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "MUC": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "DUS": [130, 5.3, 4.05, 3.3, 3.18, 3.05],
      "HEL": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "STR": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "BRE": [130, 5.3, 4.05, 3.3, 3.18, 3.05],
      "LIS": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "CGN": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "NUE": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "HAJ": [130, 5.3, 4.05, 3.3, 3.18, 3.05],
      "HAN": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "AMM": [117.5, 4.68, 3.43, 2.74, 2.55, 2.37],
      "MAD": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "BCN": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "MNL": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "VNO": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "DMM": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "DEL": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "HYD": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "BLR": [117.5, 4.68, 3.43, 2.68, 2.55, 2.43],
      "MAA": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "ECN": [180, 7.43, 6.18, 5.55, 5.43, 5.3],
      "ADA": [130, 4.99, 3.74, 3.05, 2.87, 2.8],
      "IST": [117.5, 4.68, 3.43, 2.74, 2.55, 2.49],
      "ACC": [180, 7.43, 6.18, 5.55, 5.43, 5.3],
      "DAC": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "NBO": [155, 6.18, 4.93, 4.3, 4.18, 4.05],
      "CPT": [180, 7.43, 6.18, 5.55, 5.43, 5.3],
      "JNB": [205, 8.68, 7.43, 6.8, 6.68, 6.55],
      "CMN": [155, 6.18, 4.93, 4.3, 4.18, 4.05],
      "DSS": [180, 7.43, 6.18, 5.55, 5.43, 5.3],
      "EBB": [180, 7.43, 6.18, 5.55, 5.43, 5.3],
      "TUN": [180, 7.8, 6.8, 6.18, 6.05, 5.93],
      "FNA": [230, 9.93, 8.68, 8.05, 7.93, 7.8],
      "BOM": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "AMD": [117.5, 4.68, 3.43, 2.68, 2.55, 2.43],
      "DLA": [230, 9.93, 8.68, 8.05, 7.93, 7.8],
      "ZAG": [155, 6.18, 4.93, 4.3, 4.18, 4.05],
      "AUH": [117.5, 4.68, 3.43, 2.68, 2.55, 2.43],
      "SHJ": [155, 6.18, 4.93, 4.3, 4.18, 4.05],
      "LHE": [130, 5.3, 4.05, 3.3, 3.18, 3.05],
      "BLQ": [130, 5.3, 4.05, 3.3, 3.18, 3.05],
      "BRI": [155, 6.18, 4.93, 4.3, 4.18, 4.05],
      "NAP": [130, 5.3, 4.3, 3.68, 3.55, 3.43],
      "CTA": [155, 6.18, 4.93, 4.3, 4.18, 4.05],
      "TRN": [130, 5.3, 4.05, 3.3, 3.18, 3.05],
      "LJU": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "JED": [117.5, 4.68, 3.43, 2.74, 2.55, 2.37],
      "EDI": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "UIO": [342.5, 19.05, 14.05, 12.18, 10.93, 10.3],
      "NQZ": [155, 6.18, 4.93, 4.3, 4.18, 4.05],
      "NRT": [130, 5.3, 4.3, 3.68, 3.55, 3.43],
      "OPO": [130, 5.3, 4.3, 3.68, 3.55, 3.43],
      "DPS": [155, 6.18, 4.93, 4.3, 4.18, 4.05],
      "CKY": [230, 9.93, 8.68, 8.05, 7.93, 7.8],
      "SZX": [155, 6.18, 4.93, 4.3, 4.18, 4.05],
      "CGO": [142.5, 5.93, 4.68, 3.93, 3.8, 3.68],
      "BGW": [130, 5.05, 3.8, 3.18, 3.05, 2.93],
      "LCK": [230, 9.93, 8.68, 8.05, 7.93, 7.8],
      "MEL": [205, 9.05, 7.49, 5.93, 5.43, 5.3],
      "HAM": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "ALG": [155, 6.18, 4.93, 4.3, 4.18, 4.05],
      "DEN": [217.5, 9.68, 8.43, 7.8, 7.68, 7.55],
      "FNA": [230, 9.93, 8.68, 8.05, 7.93, 7.8],
      "OUA": [205, 8.68, 7.43, 6.8, 6.68, 6.55],
      "DTW": [255, 14.05, 9.68, 8.43, 7.43, 7.18],
      "RUH": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "GOT": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "LUX": [117.5, 4.68, 3.43, 2.74, 2.55, 2.37],
    },

    "radioactive" : {
      "IAD": [255, 14.05, 9.68, 8.43, 7.43, 7.18],
      "ATL": [255, 14.05, 9.68, 8.43, 7.43, 7.18],
      "LAX": [255, 14.05, 9.68, 8.43, 7.43, 7.18],
      "IAH": [255, 14.05, 9.68, 8.43, 7.43, 7.18],
      "ORD": [255, 14.05, 9.68, 8.43, 7.43, 7.18],
      "JFK": [255, 14.05, 9.68, 8.43, 7.43, 7.18],
      "MIA": [255, 14.05, 9.68, 8.43, 7.43, 7.18],
      "DFW": [255.5, 14.55, 10.18, 8.93, 7.93, 7.68],
      "EWR": [255, 14.05, 9.68, 8.43, 7.43, 7.18],
      "BOS": [255, 14.05, 9.68, 8.43, 7.43, 7.18],
      "SFO": [255, 14.05, 9.68, 8.43, 7.43, 7.18],
      "YYZ": [280, 15.3, 10.3, 9.68, 8.68, 8.43],
      "YUL": [280, 15.3, 10.3, 9.68, 8.68, 8.43],
      "YVR": [255, 11.55, 10.3, 9.68, 9.55, 9.43],
      "GRU": [342.5, 19.05, 14.05, 12.18, 10.93, 10.3],
      "EZE": [342.5, 19.05, 14.05, 12.18, 10.93, 10.3],
      "MEX": [342.5, 19.05, 14.05, 12.18, 10.93, 10.3],
      "BOG": [342.5, 19.05, 14.05, 12.18, 10.93, 10.3],
      "KWI": [117.5, 4.68, 3.43, 2.74, 2.55, 2.37],
      "ISB": [130, 5.3, 4.05, 3.3, 3.18, 3.05],
      "KHI": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "BAH": [73.75, 3.62, 2.99, 2.74, 2.55, 2.37],
      "DXB": [117.5, 4.43, 3.18, 2.55, 2.43, 2.3],
      "DWC": [117.5, 4.43, 3.18, 2.55, 2.43, 2.3],
      "DOH": [118, 5.18, 3.93, 3.24, 3.05, 2.87],
      "TPE": [130, 5.3, 4.05, 3.43, 3.3, 3.18],
      "KUL": [117.5, 4.68, 3.43, 2.8, 2.55, 2.3],
      "CAN": [142.5, 5.93, 4.68, 4.05, 3.93, 3.8],
      "HND": [130, 5.3, 4.3, 3.68, 3.55, 3.43],
      "PEK": [142.5, 5.93, 4.68, 3.93, 3.8, 3.68],
      "PVG": [155, 6.55, 5.3, 5.18, 5.05, 4.93],
      "ICN": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "HKG": [117.5, 4.68, 3.43, 2.68, 2.55, 2.43],
      "BEG": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "OTP": [117.5, 4.68, 3.43, 2.68, 2.55, 2.43],
      "CGK": [142.5, 5.93, 4.68, 4.05, 3.93, 3.8],
      "SVO": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "VKO": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "BKK": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "BEY": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "MCT": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "BUD": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "BSL": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "GVA": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "ZRH": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "SOF": [155, 6.18, 4.93, 4.3, 4.18, 4.05],
      "SIN": [130.5, 5.8, 4.55, 3.93, 3.8, 3.68],
      "LHR": [130.5, 5.3, 4.05, 3.43, 3.3, 3.18],
      "MAN": [130, 5.3, 4.05, 3.43, 3.3, 3.18],
      "BHX": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "DUB": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "ARN": [117.5, 4.68, 3.43, 2.74, 2.55, 2.37],
      "MST": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "AMS": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "WAW": [130, 5.3, 4.05, 3.3, 3.18, 3.05],
      "OSL": [117.5, 4.68, 3.43, 2.68, 2.55, 2.43],
      "ALA": [142.5, 5.8, 4.55, 3.8, 3.68, 3.55],
      "TBS": [155, 6.18, 4.93, 4.3, 4.18, 4.05],
      "TLV": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "MXP": [117.5, 4.68, 3.43, 2.68, 2.49, 2.3],
      "VCE": [155, 6.18, 4.93, 4.3, 4.18, 4.05],
      "ATH": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "FCO": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "CPH": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "BLL": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "TLL": [130, 5.3, 4.05, 3.43, 3.3, 3.18],
      "BRU": [117.5, 4.55, 3.3, 2.55, 2.43, 2.3],
      "LGG": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "FRA": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "CDG": [117.5, 4.55, 3.3, 2.68, 2.55, 2.43],
      "PRG": [117.5, 4.68, 3.43, 2.74, 2.55, 2.37],
      "VIE": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "SGN": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "CAI": [130, 5.3, 4.3, 3.68, 3.55, 3.43],
      "BER": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "MUC": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "DUS": [130, 5.3, 4.05, 3.3, 3.18, 3.05],
      "HEL": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "STR": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "BRE": [130, 5.3, 4.05, 3.3, 3.18, 3.05],
      "LIS": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "CGN": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "NUE": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "HAJ": [130, 5.3, 4.05, 3.3, 3.18, 3.05],
      "HAN": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "AMM": [117.5, 4.68, 3.43, 2.74, 2.55, 2.37],
      "MAD": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "BCN": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "MNL": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "VNO": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "DMM": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "DEL": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "HYD": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "BLR": [117.5, 4.68, 3.43, 2.68, 2.55, 2.43],
      "MAA": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "ECN": [180, 7.43, 6.18, 5.55, 5.43, 5.3],
      "ADA": [130, 4.99, 3.74, 3.05, 2.87, 2.8],
      "IST": [117.5, 4.68, 3.43, 2.74, 2.55, 2.49],
      "ACC": [180, 7.43, 6.18, 5.55, 5.43, 5.3],
      "DAC": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "NBO": [155, 6.18, 4.93, 4.3, 4.18, 4.05],
      "CPT": [180, 7.43, 6.18, 5.55, 5.43, 5.3],
      "JNB": [205, 8.68, 7.43, 6.8, 6.68, 6.55],
      "CMN": [155, 6.18, 4.93, 4.3, 4.18, 4.05],
      "DSS": [180, 7.43, 6.18, 5.55, 5.43, 5.3],
      "EBB": [180, 7.43, 6.18, 5.55, 5.43, 5.3],
      "TUN": [180, 7.8, 6.8, 6.18, 6.05, 5.93],
      "FNA": [230, 9.93, 8.68, 8.05, 7.93, 7.8],
      "BOM": [130, 4.8, 3.55, 2.93, 2.8, 2.68],
      "AMD": [117.5, 4.68, 3.43, 2.68, 2.55, 2.43],
      "DLA": [230, 9.93, 8.68, 8.05, 7.93, 7.8],
      "ZAG": [155, 6.18, 4.93, 4.3, 4.18, 4.05],
      "AUH": [117.5, 4.68, 3.43, 2.68, 2.55, 2.43],
      "SHJ": [155, 6.18, 4.93, 4.3, 4.18, 4.05],
      "LHE": [130, 5.3, 4.05, 3.3, 3.18, 3.05],
      "BLQ": [130, 5.3, 4.05, 3.3, 3.18, 3.05],
      "BRI": [155, 6.18, 4.93, 4.3, 4.18, 4.05],
      "NAP": [130, 5.3, 4.3, 3.68, 3.55, 3.43],
      "CTA": [155, 6.18, 4.93, 4.3, 4.18, 4.05],
      "TRN": [130, 5.3, 4.05, 3.3, 3.18, 3.05],
      "LJU": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "JED": [117.5, 4.68, 3.43, 2.74, 2.55, 2.37],
      "EDI": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "UIO": [342.5, 19.05, 14.05, 12.18, 10.93, 10.3],
      "NQZ": [155, 6.18, 4.93, 4.3, 4.18, 4.05],
      "NRT": [130, 5.3, 4.3, 3.68, 3.55, 3.43],
      "OPO": [130, 5.3, 4.3, 3.68, 3.55, 3.43],
      "DPS": [155, 6.18, 4.93, 4.3, 4.18, 4.05],
      "CKY": [230, 9.93, 8.68, 8.05, 7.93, 7.8],
      "SZX": [155, 6.18, 4.93, 4.3, 4.18, 4.05],
      "CGO": [142.5, 5.93, 4.68, 3.93, 3.8, 3.68],
      "BGW": [130, 5.05, 3.8, 3.18, 3.05, 2.93],
      "LCK": [230, 9.93, 8.68, 8.05, 7.93, 7.8],
      "MEL": [205, 9.05, 7.49, 5.93, 5.43, 5.3],
      "HAM": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "ALG": [155, 6.18, 4.93, 4.3, 4.18, 4.05],
      "DEN": [217.5, 9.68, 8.43, 7.8, 7.68, 7.55],
      "FNA": [230, 9.93, 8.68, 8.05, 7.93, 7.8],
      "OUA": [205, 8.68, 7.43, 6.8, 6.68, 6.55],
      "DTW": [255, 14.05, 9.68, 8.43, 7.43, 7.18],
      "RUH": [117.5, 4.68, 3.43, 2.8, 2.68, 2.55],
      "GOT": [130, 4.93, 3.68, 3.05, 2.93, 2.8],
      "LUX": [117.5, 4.68, 3.43, 2.74, 2.55, 2.37],
    }

  },

  "Uganda Airlines": {
    "general": {
      "BJM": [115, 2.85, 2.7, 2.55, 2.2, 1.95, 1.8],
      "BOM": [125, 3.25, 3.1, 2.95, 2.6, 2.35, 2.2],
      "DAR": [115, 2.95, 2.8, 2.65, 2.3, 2.05, 1.9],
      "DXB": [125, 3.3, 3.15, 3, 2.65, 2.3, 1.95],
      "EBB": [115, 2.5, 2.35, 2.2, 1.85, 1.7, 1.55],
      "FIH": [115, 3.25, 3.1, 2.95, 2.6, 2.35, 2.1],
      "JNB": [115, 2.95, 2.8, 2.65, 2.3, 2.05, 1.9],
      "JRO": [115, 2.85, 2.7, 2.55, 2.2, 1.95, 1.8],
      "JUB": [125, 3.05, 2.9, 2.75, 2.4, 2.15, 2],
      "MBA": [115, 2.9, 2.75, 2.6, 2.25, 2, 1.85],
      "MGQ": [125, 3.3, 3.15, 3, 2.55, 2.4, 2.25],
      "NBO": [115, 2.95, 2.8, 2.55, 2.3, 2.05, 1.9],
      "ZNZ": [115, 3.15, 3, 2.85, 2.5, 2.25, 2.1]
},
    "dangerous": {
      "BJM": [138, 3.42, 3.24, 3.06, 2.64, 2.34, 2.16],
      "BOM": [150, 3.9, 3.72, 3.54, 3.12, 2.82, 2.64],
      "DAR": [138, 3.54, 3.36, 3.18, 2.76, 2.46, 2.28],
      "DXB": [150, 3.96, 3.78, 3.6, 3.18, 2.76, 2.34],
      "EBB": [138, 3.0, 2.82, 2.64, 2.22, 2.04, 1.86],
      "FIH": [138, 3.9, 3.72, 3.54, 3.12, 2.82, 2.52],
      "JNB": [138, 3.54, 3.36, 3.18, 2.76, 2.46, 2.28],
      "JRO": [138, 3.42, 3.24, 3.06, 2.64, 2.34, 2.16],
      "JUB": [150, 3.66, 3.48, 3.3, 2.88, 2.58, 2.4],
      "MBA": [138, 3.48, 3.3, 3.12, 2.7, 2.4, 2.22],
      "MGQ": [150, 3.96, 3.78, 3.6, 3.06, 2.88, 2.7],
      "NBO": [138, 3.54, 3.36, 3.06, 2.76, 2.46, 2.28],
      "ZNZ": [138, 3.78, 3.6, 3.42, 3.0, 2.7, 2.52]
},
    "radioactive": {
      "BJM": [138, 3.42, 3.24, 3.06, 2.64, 2.34, 2.16],
      "BOM": [150, 3.9, 3.72, 3.54, 3.12, 2.82, 2.64],
      "DAR": [138, 3.54, 3.36, 3.18, 2.76, 2.46, 2.28],
      "DXB": [150, 3.96, 3.78, 3.6, 3.18, 2.76, 2.34],
      "EBB": [138, 3.0, 2.82, 2.64, 2.22, 2.04, 1.86],
      "FIH": [138, 3.9, 3.72, 3.54, 3.12, 2.82, 2.52],
      "JNB": [138, 3.54, 3.36, 3.18, 2.76, 2.46, 2.28],
      "JRO": [138, 3.42, 3.24, 3.06, 2.64, 2.34, 2.16],
      "JUB": [150, 3.66, 3.48, 3.3, 2.88, 2.58, 2.4],
      "MBA": [138, 3.48, 3.3, 3.12, 2.7, 2.4, 2.22],
      "MGQ": [150, 3.96, 3.78, 3.6, 3.06, 2.88, 2.7],
      "NBO": [138, 3.54, 3.36, 3.06, 2.76, 2.46, 2.28],
      "ZNZ": [138, 3.78, 3.6, 3.42, 3.0, 2.7, 2.52]
},



  },
};


document.addEventListener('DOMContentLoaded', function() {
  // Populate airline dropdown
  const airlineSelect = document.getElementById('airline').value;
  console.log ('airlineSelect');
  console.log (airlineSelect);
  Object.keys(destinations).forEach(function(airline) {
    const option = document.createElement('option');
    option.value = airline;
    option.textContent = airline;
    airlineSelect.appendChild(option);
  });

  // Populate content type dropdown
  const contentSelect = document.getElementById('content');
  Object.keys(weightRates).forEach(function(content) {
    const option = document.createElement('option');
    option.value = content;
    option.textContent = content;
    contentSelect.appendChild(option);
  });
});

// Update destinations based on selected airline
document.getElementById('airline').addEventListener('change', function() {
  const selectedAirline = this.value;
  const destinationSelect = document.getElementById('destination');

  // Clear existing options
  destinationSelect.innerHTML = '<option value="">Select a destination</option>';
  
  if (destinations[selectedAirline]) {
    destinations[selectedAirline].forEach(function(destination) {
      const option = document.createElement('option');
      option.value = destination;
      option.textContent = destination;
      destinationSelect.appendChild(option);
      console.log('Adding Destination:', destination); // Log added destination
            });
        } else {
            console.log('No destinations found for selected airline:', selectedAirline);
        }
    });

 

// Calculate total payment
document.getElementById('calculate-button').addEventListener('click', function() {
  const airlineElement = document.getElementById('airline');
  const airline = airlineElement.options[airlineElement.selectedIndex].value;
  const destination = document.getElementById('destination').value;
  const weight = parseFloat(document.getElementById('weight').value);
  const exchangeRate = parseFloat(document.getElementById('exchangeRate').value);
  const contentType = document.getElementById('content').value;
  const houseAirwaybill = document.getElementById('houseAirwaybill').checked;
  console.log('House Airwaybill Checked:', houseAirwaybill);

   // Debugging: log the airline, contentType, destination, and weightRates
   console.log('Airline:', airline);
   console.log('Content Type:', contentType);
   console.log('Destination:', destination);
   console.log('weight:', weight);
   console.log('House Airwaybill Checked:', houseAirwaybill);
   

// Event listener for button click
document.getElementById('calculate-button').addEventListener('click', function() {
  const weight = parseFloat(document.getElementById('weight').value);
  const exchangeRate = parseFloat(document.getElementById('exchangeRate').value);
  // const airline = document.getElementById('airline').value;
  const destination = document.getElementById('destination').value;
  const houseAirwaybill = document.getElementById('houseAirwaybill').checked;
  const contentType = document.getElementById('content').value;
  const airline = document.getElementById('airline').value;

  
  // const weightRate = weightRates[airline]?.[contentType]?.[destination];
  // console.log('Weight Rates:', weightRate ); // Check if weightRates for the selected airline exist

  // Error handling for missing fields
  if (!weight || !exchangeRate || !destination || !contentType) {
    document.getElementById('error-message').innerText = 'Please fill in all required fields.';
    return;
  } else {
    document.getElementById('error-message').innerText = '';
  }
  console.log('airline');
  console.log (airline);
  // Get weightRate array based on airline, contentType, and destination
  const rateArray = weightRates[airline]?.[contentType]?.[destination];

  // Validate rateArray
  if (!rateArray || rateArray.length < 6) {
    document.getElementById('error-message').innerText = 'Invalid destination or rate array.';
    return;
  }
 


  // Determine weight rate based on weight ranges
  // weightRate = 0;
  let weightRate = 0;
  if (airline== 'Turkish Airlines') {
// weightRate for Turkish Airlines

        if (weight >= 1 && weight <= 19) {
          weightRate = rateArray[0];
        } else if (weight >= 20 && weight <= 44) {
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
          return;
        }
}
else if(airline== 'Uganda Airlines'){
  
  console.log ('weightRate')
  console.log(weightRate);
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
  } else if (weight >=500 && weight<= 999) {
    weightRate = rateArray[5];
  } else if (weight >=1000 ) {
    weightRate = rateArray[6];
  } else {
    document.getElementById('error-message').innerText = 'Invalid weight.';
    return;
  }
 
}else{
  weight=0
}

console.log(weightRate);

  // Calculate total cost
  const totalCost = calculateFreight(weight, weightRate, exchangeRate, contentType, airline, destination, houseAirwaybill);
  console.log(`Total Price: ₦${totalCost}`);
  console.log('House Airwaybill Fee Applied:', houseAirwaybill ? 'Yes' : 'No');


  // Display result
  document.getElementById('result').innerText = `Total Payment: ₦${totalCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
});

// Function to calculate total price for freight
function calculateFreight(weight, weightRate, exchangeRate, contentType, airline, destination, houseAirwaybill) {
  // Initialize fees
  const CGC_AIRWAYBILL_FEE = 30 * exchangeRate;
  console.log('CGC_AIRWAYBILL_FEE:', CGC_AIRWAYBILL_FEE);

  const HOUSE_AIRWAYBILL_FEE = houseAirwaybill ? 35 * exchangeRate : 0;
  console.log('HOUSE_AIRWAYBILL_FEE:', HOUSE_AIRWAYBILL_FEE);

  const STAMP_DUTY_FEE = (destination === 'IST' || destination === 'AMM' || destination === 'ECN') ? 10 * exchangeRate : 0;
  const RADIOACTIVE_FEE = contentType === 'radioactive' ? 75 * exchangeRate : 0;
  const transictFee = 
   airline =='Uganda Airlines' && (destination === 'BJM' || destination === 'BOM' || destination === 'DAR' || destination === 'DXB' || 
   destination === 'FIH' || destination === 'JNB' || destination === 'JRO' || destination === 'JUB' || 
   destination === 'MBA' || destination === 'MGQ' || destination === 'NBO' || destination === 'ZNZ') 
   ? (weight < 45 ? 5 * exchangeRate : 0.05 * exchangeRate * weight) 
   : 0; 
  

   const mcc = airline='Uganda Airlines' && (destination === 'JUB')? (weight < 45 ? 5 * exchangeRate : 0.05 * exchangeRate * weight) 
   : 0;



  // Dangerous goods fee calculations

  const dangerousGoodFee = contentType === 'dangerous goods' 
  ? (airline === 'Turkish Airlines' 
      ? 35 * exchangeRate 
      : (airline === 'Uganda Airlines' && weight <= 30 
          ? 200 * exchangeRate 
          : 50 * exchangeRate)) 
  : 0;

console.log('dangerousGoodFee:', dangerousGoodFee);






  // Admin fee based on weight
  const ADMIN_FEE_LIMIT = 10000;
  let adminFee = (weight <= 200) ? ADMIN_FEE_LIMIT : (200 * weight);
  console.log('Admin Fee:', adminFee);

 
  

  // Calculate freight

const freight = airline = 'Turkish Airlines' && (weight < 20) ?  weightRate * exchangeRate: weight * weightRate * exchangeRate;
  'Uganda Airlines' && (weight < 31) ?  weightRate * exchangeRate: weight * weightRate * exchangeRate;
  



console.log('freight:', freight);

  const NCAA = freight * 0.075;
  console.log('NCAA:', NCAA);



  // Total fees
  const totalFees = CGC_AIRWAYBILL_FEE + STAMP_DUTY_FEE + RADIOACTIVE_FEE + dangerousGoodFee + transictFee + mcc + HOUSE_AIRWAYBILL_FEE;

  // Total calculation
  const total = freight + NCAA + totalFees + adminFee;
  console.log('Total Fees:', totalFees);
  console.log('Total Price:', total);


 // Format total with commas
 const formattedTotal = total.toLocaleString('en-US');

 return formattedTotal;
}

});