
var thrust_12v = [-3.93, -3.87, -3.81, -3.76, -3.7, -3.65, -3.59, -3.54, -3.48, -3.43, -3.37, -3.31, -3.26, -3.21, -3.15, -3.08, -3.03, -2.97, -2.91, -2.86, -2.8, -2.75, -2.69, -2.64, -2.58, -2.52, -2.47, -2.41, -2.36, -2.31, -2.26, -2.21, -2.15, -2.1, -2.05, -2.0, -1.95, -1.9, -1.86, -1.81, -1.76, -1.71, -1.67, -1.62, -1.58, -1.54, -1.49, -1.45, -1.41, -1.37, -1.33, -1.29, -1.25, -1.21, -1.17, -1.14, -1.1, -1.06, -1.03, -0.99, -0.94, -0.9, -0.86, -0.82, -0.78, -0.74, -0.71, -0.68, -0.65, -0.61, -0.58, -0.55, -0.51, -0.48, -0.45, -0.42, -0.4, -0.38, -0.36, -0.34, -0.32, -0.29, -0.27, -0.24, -0.21, -0.19, -0.16, -0.13, -0.11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15, 0.19, 0.23, 0.27, 0.31, 0.35, 0.39, 0.43, 0.47, 0.51, 0.56, 0.6, 0.64, 0.69, 0.74, 0.79, 0.84, 0.89, 0.94, 1.0, 1.05, 1.1, 1.14, 1.19, 1.24, 1.28, 1.33, 1.39, 1.44, 1.49, 1.54, 1.59, 1.65, 1.7, 1.76, 1.82, 1.88, 1.94, 2.01, 2.07, 2.14, 2.2, 2.27, 2.34, 2.41, 2.48, 2.55, 2.62, 2.68, 2.75, 2.83, 2.9, 2.96, 3.03, 3.11, 3.18, 3.26, 3.33, 3.41, 3.49, 3.56, 3.64, 3.72, 3.8, 3.89, 3.97, 4.05, 4.13, 4.22, 4.3, 4.38, 4.47, 4.56, 4.64, 4.74, 4.83, 4.91, 5.0, 5.07, 5.16, 5.24, 5.33, 5.41, 5.5, 5.58, 5.67, 5.75, 5.83, 5.92]
var power_12v = [178.0, 174.5, 171.0, 167.5, 164.0, 160.5, 157.0, 153.5, 150.0, 146.6, 143.1, 140.2, 136.9, 133.4, 129.8, 126.3, 122.9, 119.5, 116.2, 113.1, 110.2, 107.3, 104.4, 101.5, 98.5, 95.5, 92.5, 89.6, 86.8, 84.1, 81.5, 79.1, 76.6, 74.2, 71.8, 69.5, 67.1, 64.9, 62.6, 60.4, 58.2, 56.2, 54.2, 52.5, 50.8, 49.1, 47.3, 45.6, 44.0, 42.4, 40.7, 39.0, 37.5, 35.9, 34.4, 33.0, 31.5, 30.2, 28.8, 27.5, 26.0, 24.4, 23.0, 21.6, 20.4, 19.2, 18.1, 17.0, 16.1, 15.1, 14.1, 13.2, 12.3, 11.5, 10.7, 10.0, 9.3, 8.7, 8.2, 7.7, 7.2, 6.6, 6.0, 5.4, 4.8, 4.2, 3.7, 3.1, 2.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.6, 3.2, 3.9, 4.5, 5.2, 5.8, 6.4, 7.1, 7.7, 8.4, 9.1, 9.8, 10.5, 11.4, 12.2, 13.1, 14.1, 15.1, 16.2, 17.2, 18.3, 19.4, 20.6, 21.8, 23.1, 24.5, 25.9, 27.4, 28.9, 30.4, 31.9, 33.3, 34.8, 36.3, 38.0, 39.8, 41.5, 43.2, 44.9, 46.7, 48.4, 50.1, 52.0, 54.0, 56.0, 58.0, 59.8, 62.0, 64.2, 66.5, 68.9, 71.1, 73.4, 75.9, 78.4, 81.0, 83.6, 86.2, 88.9, 91.7, 94.5, 97.3, 100.4, 103.7, 106.9, 110.2, 113.4, 116.5, 119.8, 123.0, 126.4, 130.0, 133.6, 137.4, 141.2, 145.1, 148.9, 152.5, 155.6, 159.4, 163.0, 166.7, 170.5, 174.2, 177.9, 181.7, 185.4, 189.2, 192.9]

var thrust_14v = [-4.85, -4.78, -4.71, -4.64, -4.57, -4.5, -4.42, -4.36, -4.29, -4.22, -4.15, -4.08, -4.01, -3.94, -3.87, -3.79, -3.73, -3.65, -3.58, -3.53, -3.46, -3.4, -3.33, -3.27, -3.2, -3.14, -3.07, -3.0, -2.94, -2.88, -2.81, -2.75, -2.69, -2.63, -2.57, -2.51, -2.45, -2.4, -2.34, -2.28, -2.21, -2.15, -2.09, -2.02, -1.96, -1.9, -1.84, -1.78, -1.71, -1.65, -1.59, -1.53, -1.48, -1.42, -1.36, -1.31, -1.26, -1.21, -1.17, -1.12, -1.09, -1.05, -1.01, -0.96, -0.91, -0.86, -0.82, -0.78, -0.74, -0.71, -0.67, -0.63, -0.59, -0.55, -0.52, -0.48, -0.44, -0.41, -0.38, -0.35, -0.33, -0.31, -0.29, -0.27, -0.25, -0.23, -0.2, -0.18, -0.16, -0.14, -0.12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11, 0.16, 0.21, 0.27, 0.32, 0.38, 0.43, 0.49, 0.54, 0.59, 0.64, 0.68, 0.74, 0.78, 0.82, 0.88, 0.93, 1.0, 1.06, 1.13, 1.19, 1.25, 1.31, 1.37, 1.43, 1.48, 1.55, 1.61, 1.68, 1.76, 1.85, 1.93, 2.0, 2.07, 2.14, 2.21, 2.28, 2.35, 2.43, 2.51, 2.59, 2.67, 2.76, 2.84, 2.93, 3.01, 3.09, 3.18, 3.27, 3.35, 3.44, 3.53, 3.62, 3.71, 3.81, 3.9, 4.0, 4.09, 4.18, 4.27, 4.36, 4.46, 4.56, 4.66, 4.76, 4.87, 4.97, 5.07, 5.16, 5.25, 5.35, 5.44, 5.53, 5.63, 5.73, 5.83, 5.94, 6.04, 6.14, 6.24, 6.33, 6.43, 6.51, 6.61, 6.71, 6.81, 6.91, 7.01, 7.11, 7.21, 7.31]
var power_14v = [256.2, 251.3, 246.4, 241.4, 236.5, 231.6, 226.6, 221.7, 216.8, 211.7, 207.0, 202.6, 197.9, 192.9, 187.7, 182.5, 177.6, 172.7, 168.0, 163.6, 159.2, 154.9, 150.6, 146.4, 142.1, 137.9, 133.8, 129.7, 125.8, 121.8, 118.1, 114.6, 111.2, 107.7, 104.3, 101.0, 97.6, 94.3, 91.0, 87.9, 84.7, 81.7, 78.8, 76.3, 73.7, 71.2, 68.8, 66.4, 64.0, 61.7, 59.4, 57.1, 55.0, 52.8, 50.8, 48.8, 46.8, 44.9, 43.1, 41.2, 39.2, 37.2, 35.3, 33.4, 31.6, 29.8, 28.1, 26.5, 24.9, 23.4, 22.0, 20.7, 19.3, 18.0, 16.7, 15.5, 14.4, 13.3, 12.3, 11.4, 10.5, 9.7, 8.8, 8.0, 7.2, 6.3, 5.5, 4.7, 3.9, 3.1, 2.2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.9, 2.8, 3.8, 4.7, 5.7, 6.6, 7.6, 8.5, 9.5, 10.5, 11.4, 12.2, 13.2, 14.2, 15.1, 16.3, 17.6, 18.9, 20.3, 21.8, 23.4, 24.9, 26.5, 28.2, 29.9, 31.8, 33.6, 35.6, 37.8, 40.2, 42.5, 44.7, 47.0, 49.4, 51.5, 53.6, 55.8, 58.0, 60.3, 62.6, 65.0, 67.6, 70.1, 72.6, 75.3, 78.0, 80.7, 83.4, 86.4, 89.4, 92.4, 95.8, 99.2, 102.7, 106.2, 109.9, 113.6, 117.4, 121.2, 125.0, 128.9, 133.0, 137.1, 141.5, 145.8, 150.4, 154.9, 159.4, 164.0, 168.4, 173.0, 177.6, 182.4, 187.4, 192.5, 197.6, 203.2, 208.6, 213.8, 218.9, 223.5, 228.8, 234.0, 239.3, 244.7, 250.0, 255.3, 260.7, 266.0, 271.3, 276.7]

var thrust_16v = [-6.1, -6.01, -5.93, -5.84, -5.76, -5.68, -5.59, -5.51, -5.42, -5.34, -5.26, -5.18, -5.09, -5.0, -4.91, -4.82, -4.74, -4.65, -4.56, -4.48, -4.4, -4.32, -4.24, -4.16, -4.07, -3.99, -3.91, -3.83, -3.75, -3.67, -3.6, -3.53, -3.45, -3.38, -3.3, -3.23, -3.16, -3.08, -3.01, -2.94, -2.86, -2.79, -2.72, -2.65, -2.58, -2.51, -2.44, -2.37, -2.3, -2.23, -2.16, -2.09, -2.03, -1.96, -1.9, -1.84, -1.78, -1.7, -1.63, -1.56, -1.49, -1.44, -1.38, -1.33, -1.28, -1.23, -1.19, -1.14, -1.09, -1.04, -0.99, -0.94, -0.89, -0.84, -0.81, -0.78, -0.74, -0.7, -0.66, -0.61, -0.57, -0.53, -0.48, -0.44, -0.4, -0.36, -0.32, -0.28, -0.24, -0.2, -0.16, -0.12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19, 0.25, 0.31, 0.37, 0.43, 0.49, 0.55, 0.61, 0.68, 0.74, 0.81, 0.87, 0.94, 1.01, 1.08, 1.15, 1.23, 1.31, 1.39, 1.47, 1.54, 1.63, 1.71, 1.78, 1.85, 1.92, 2.0, 2.07, 2.15, 2.22, 2.3, 2.38, 2.46, 2.55, 2.63, 2.71, 2.8, 2.9, 2.98, 3.07, 3.17, 3.27, 3.37, 3.47, 3.58, 3.69, 3.79, 3.9, 4.0, 4.1, 4.21, 4.31, 4.42, 4.53, 4.65, 4.76, 4.87, 4.99, 5.1, 5.21, 5.33, 5.44, 5.56, 5.67, 5.79, 5.91, 6.04, 6.16, 6.29, 6.41, 6.53, 6.65, 6.77, 6.89, 7.02, 7.15, 7.28, 7.41, 7.54, 7.67, 7.79, 7.91, 8.03, 8.16, 8.28, 8.41, 8.53, 8.66, 8.78, 8.91, 9.03, 9.16]
var power_16v = [358.3, 351.3, 344.4, 337.4, 330.4, 323.5, 316.5, 309.6, 302.6, 295.7, 288.8, 282.4, 275.8, 268.6, 261.5, 254.2, 247.4, 240.8, 234.3, 227.9, 222.0, 216.0, 210.1, 204.2, 198.2, 192.2, 186.5, 180.8, 175.3, 169.9, 164.8, 159.9, 155.1, 150.3, 145.5, 140.8, 136.1, 131.5, 127.0, 122.9, 118.9, 114.7, 111.1, 107.6, 104.1, 100.6, 97.3, 94.0, 90.7, 87.5, 84.3, 81.1, 78.1, 75.1, 72.3, 69.6, 66.5, 63.2, 60.3, 57.1, 53.9, 51.1, 48.4, 45.7, 43.2, 40.8, 38.5, 36.3, 34.1, 32.1, 30.1, 28.1, 26.3, 24.4, 22.9, 21.5, 20.2, 18.9, 17.5, 16.2, 14.9, 13.7, 12.5, 11.4, 10.3, 9.2, 8.1, 7.0, 6.0, 4.9, 3.8, 2.7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.5, 3.7, 4.9, 6.1, 7.3, 8.5, 9.7, 10.9, 12.1, 13.3, 14.6, 15.9, 17.4, 18.9, 20.5, 22.3, 24.1, 26.0, 28.1, 30.2, 32.3, 34.5, 36.7, 39.0, 41.3, 43.7, 46.3, 48.9, 51.6, 54.5, 57.4, 60.3, 63.3, 66.3, 69.4, 72.6, 75.5, 78.4, 81.4, 84.4, 87.7, 91.0, 94.4, 97.8, 101.4, 105.1, 108.8, 112.5, 116.3, 120.1, 124.0, 128.1, 132.3, 137.1, 141.9, 146.8, 151.8, 156.8, 161.8, 167.1, 172.3, 177.4, 182.8, 188.5, 194.2, 200.1, 206.3, 212.5, 218.7, 224.9, 230.9, 237.2, 243.4, 249.9, 256.8, 263.7, 270.7, 278.0, 285.5, 292.7, 299.7, 306.3, 312.8, 320.0, 327.1, 334.2, 341.4, 348.5, 355.6, 362.7, 369.9, 377.0]

var thrust_18v = [-7.26, -7.17, -7.07, -6.97, -6.88, -6.78, -6.68, -6.59, -6.49, -6.39, -6.29, -6.21, -6.11, -6.01, -5.91, -5.8, -5.7, -5.6, -5.51, -5.41, -5.32, -5.22, -5.13, -5.03, -4.93, -4.83, -4.74, -4.64, -4.55, -4.46, -4.36, -4.28, -4.19, -4.1, -4.01, -3.92, -3.84, -3.74, -3.66, -3.57, -3.49, -3.41, -3.32, -3.24, -3.16, -3.07, -2.99, -2.91, -2.83, -2.75, -2.67, -2.6, -2.53, -2.45, -2.38, -2.3, -2.23, -2.17, -2.1, -2.03, -1.97, -1.9, -1.84, -1.77, -1.71, -1.64, -1.58, -1.52, -1.45, -1.39, -1.33, -1.27, -1.21, -1.15, -1.09, -1.02, -0.96, -0.9, -0.84, -0.79, -0.73, -0.68, -0.62, -0.57, -0.52, -0.47, -0.42, -0.37, -0.32, -0.27, -0.22, -0.17, -0.12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22, 0.28, 0.34, 0.41, 0.47, 0.53, 0.6, 0.66, 0.72, 0.79, 0.86, 0.93, 1.0, 1.08, 1.16, 1.24, 1.32, 1.41, 1.5, 1.59, 1.67, 1.76, 1.84, 1.93, 2.01, 2.1, 2.19, 2.28, 2.37, 2.46, 2.56, 2.65, 2.74, 2.84, 2.93, 3.03, 3.13, 3.25, 3.36, 3.47, 3.59, 3.7, 3.82, 3.94, 4.07, 4.19, 4.31, 4.43, 4.55, 4.68, 4.8, 4.92, 5.05, 5.18, 5.31, 5.45, 5.58, 5.71, 5.85, 5.98, 6.12, 6.25, 6.38, 6.52, 6.66, 6.8, 6.94, 7.09, 7.23, 7.38, 7.51, 7.65, 7.79, 7.93, 8.08, 8.22, 8.38, 8.52, 8.68, 8.84, 8.98, 9.12, 9.25, 9.39, 9.53, 9.67, 9.81, 9.95, 10.09, 10.23, 10.38, 10.52, 10.66]
var power_18v = [478.3, 469.0, 459.6, 450.3, 441.0, 431.6, 422.3, 413.0, 403.6, 394.4, 385.1, 376.8, 367.9, 358.7, 349.1, 339.5, 330.4, 321.6, 312.7, 304.3, 296.5, 288.5, 280.7, 273.0, 264.9, 257.2, 249.5, 241.9, 234.5, 227.3, 220.3, 213.7, 207.2, 200.6, 194.2, 187.9, 181.7, 175.6, 169.5, 163.6, 157.8, 152.2, 146.8, 141.7, 137.0, 132.3, 127.8, 123.3, 119.0, 114.8, 110.7, 106.6, 102.7, 98.7, 95.0, 91.3, 87.8, 84.3, 81.0, 77.8, 74.5, 70.9, 67.4, 63.9, 60.5, 57.3, 54.1, 51.0, 48.1, 45.3, 42.5, 39.9, 37.3, 34.8, 32.3, 29.9, 27.7, 25.5, 23.6, 21.7, 20.0, 18.3, 16.8, 15.3, 13.8, 12.5, 11.1, 9.7, 8.3, 6.9, 5.5, 4.1, 2.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.6, 4.2, 5.7, 7.3, 8.8, 10.4, 12.0, 13.5, 15.1, 16.6, 18.3, 20.1, 21.9, 23.9, 26.0, 28.2, 30.5, 33.0, 35.6, 38.3, 41.1, 43.9, 46.7, 49.6, 52.6, 55.7, 59.0, 62.3, 65.8, 69.4, 73.1, 76.5, 79.8, 83.2, 86.7, 90.3, 94.0, 97.9, 101.9, 105.9, 110.2, 114.4, 118.9, 123.5, 128.0, 132.8, 137.7, 142.5, 147.9, 153.6, 159.2, 165.1, 171.1, 177.2, 183.5, 189.8, 196.3, 202.9, 209.6, 216.4, 223.3, 230.1, 237.0, 244.3, 251.9, 259.6, 267.5, 275.5, 283.4, 291.5, 299.4, 307.5, 315.6, 323.8, 332.5, 341.4, 350.5, 359.7, 369.4, 379.2, 388.7, 397.7, 406.2, 415.0, 424.3, 433.7, 443.2, 452.7, 462.2, 471.7, 481.1, 490.6, 500.1]

var thrust_20v = [-8.26, -8.17, -8.07, -7.97, -7.88, -7.78, -7.68, -7.59, -7.49, -7.39, -7.3, -7.21, -7.09, -6.99, -6.87, -6.76, -6.64, -6.53, -6.41, -6.3, -6.19, -6.08, -5.97, -5.85, -5.74, -5.63, -5.52, -5.4, -5.29, -5.2, -5.08, -4.98, -4.88, -4.78, -4.69, -4.59, -4.49, -4.38, -4.28, -4.18, -4.08, -3.97, -3.88, -3.78, -3.68, -3.58, -3.49, -3.39, -3.29, -3.2, -3.1, -3.0, -2.92, -2.83, -2.75, -2.68, -2.6, -2.52, -2.44, -2.36, -2.28, -2.2, -2.12, -2.04, -1.96, -1.88, -1.8, -1.71, -1.63, -1.55, -1.46, -1.38, -1.3, -1.22, -1.15, -1.08, -1.01, -0.94, -0.88, -0.82, -0.76, -0.7, -0.65, -0.6, -0.56, -0.51, -0.47, -0.42, -0.37, -0.33, -0.28, -0.24, -0.19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22, 0.29, 0.37, 0.44, 0.52, 0.59, 0.67, 0.74, 0.82, 0.91, 1.0, 1.09, 1.19, 1.28, 1.38, 1.48, 1.59, 1.7, 1.81, 1.99, 2.11, 2.24, 2.36, 2.47, 2.58, 2.69, 2.79, 2.83, 2.9, 3.02, 3.13, 3.25, 3.37, 3.49, 3.61, 3.73, 3.85, 3.97, 4.09, 4.21, 4.34, 4.48, 4.63, 4.78, 4.93, 5.08, 5.22, 5.37, 5.51, 5.65, 5.8, 5.94, 6.09, 6.24, 6.4, 6.55, 6.71, 6.86, 7.02, 7.16, 7.3, 7.46, 7.62, 7.77, 7.93, 8.09, 8.26, 8.42, 8.59, 8.75, 8.92, 9.08, 9.24, 9.4, 9.56, 9.72, 9.89, 10.06, 10.24, 10.41, 10.59, 10.76, 10.93, 11.08, 11.24, 11.41, 11.58, 11.74, 11.91, 12.08, 12.24, 12.41, 12.58, 12.74]
var power_20v = [621.9, 609.8, 597.6, 585.5, 573.4, 561.2, 549.1, 537.0, 524.8, 512.7, 501.2, 490.1, 478.4, 466.1, 453.6, 441.4, 429.5, 417.9, 406.4, 395.4, 385.2, 374.8, 364.7, 354.5, 344.2, 334.1, 324.0, 314.2, 304.8, 295.5, 286.6, 278.0, 269.5, 261.2, 252.8, 244.7, 236.6, 228.5, 220.5, 212.7, 205.2, 197.9, 190.8, 184.1, 177.3, 170.7, 164.8, 159.0, 153.3, 147.7, 142.2, 136.9, 131.7, 126.7, 122.0, 117.5, 113.0, 108.5, 104.1, 99.8, 95.7, 91.7, 87.6, 83.1, 78.8, 74.6, 70.6, 66.7, 62.9, 59.3, 55.8, 52.4, 49.1, 45.8, 42.7, 39.5, 36.6, 33.8, 31.2, 28.7, 26.3, 24.1, 22.1, 20.1, 18.2, 16.4, 14.6, 12.7, 10.9, 9.0, 7.2, 5.4, 3.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.0, 3.8, 5.7, 7.5, 9.4, 11.2, 13.1, 14.9, 16.8, 18.9, 21.0, 23.2, 25.6, 28.0, 30.6, 33.4, 36.4, 39.6, 43.0, 47.3, 51.0, 54.9, 58.7, 62.7, 66.7, 70.8, 75.1, 77.1, 79.6, 84.3, 89.1, 94.1, 99.3, 104.5, 109.8, 114.5, 119.8, 125.1, 130.0, 135.1, 140.2, 145.6, 151.8, 158.1, 164.1, 170.1, 176.0, 182.2, 188.4, 194.8, 201.4, 207.8, 215.2, 222.4, 229.8, 238.0, 246.1, 254.3, 262.7, 270.7, 278.7, 287.3, 296.0, 304.9, 314.4, 324.0, 333.6, 343.4, 353.5, 363.5, 373.8, 384.0, 394.2, 404.7, 415.3, 425.8, 437.2, 448.8, 460.8, 472.9, 485.2, 497.1, 508.9, 519.9, 531.1, 543.4, 555.5, 567.6, 579.7, 591.9, 604.0, 616.1, 628.3, 640.4]

var thrust_22v = [-9.55, -9.44, -9.33, -9.21, -9.1, -8.99, -8.88, -8.76, -8.65, -8.54, -8.42, -8.31, -8.2, -8.08, -7.95, -7.81, -7.68, -7.56, -7.44, -7.32, -7.2, -7.08, -6.96, -6.84, -6.71, -6.59, -6.46, -6.34, -6.21, -6.09, -5.97, -5.86, -5.75, -5.64, -5.52, -5.41, -5.29, -5.18, -5.06, -4.94, -4.82, -4.71, -4.6, -4.49, -4.38, -4.27, -4.16, -4.05, -3.94, -3.83, -3.72, -3.61, -3.5, -3.39, -3.28, -3.18, -3.08, -2.98, -2.89, -2.8, -2.71, -2.62, -2.54, -2.45, -2.36, -2.28, -2.2, -2.12, -2.04, -1.96, -1.88, -1.8, -1.71, -1.63, -1.56, -1.54, -1.45, -1.36, -1.28, -1.19, -1.11, -1.03, -0.95, -0.88, -0.8, -0.73, -0.66, -0.59, -0.53, -0.46, -0.39, -0.33, -0.26, -0.19, -0.13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.26, 0.35, 0.43, 0.52, 0.61, 0.69, 0.78, 0.86, 0.95, 1.04, 1.13, 1.24, 1.34, 1.45, 1.56, 1.68, 1.8, 1.92, 2.04, 2.17, 2.3, 2.42, 2.54, 2.67, 2.79, 2.92, 3.05, 3.17, 3.29, 3.42, 3.54, 3.67, 3.8, 3.94, 4.07, 4.2, 4.34, 4.47, 4.62, 4.77, 4.92, 5.08, 5.24, 5.4, 5.57, 5.74, 5.9, 6.07, 6.24, 6.41, 6.58, 6.75, 6.91, 7.08, 7.26, 7.43, 7.61, 7.79, 7.97, 8.15, 8.33, 8.51, 8.69, 8.87, 9.04, 9.23, 9.41, 9.6, 9.79, 9.98, 10.18, 10.38, 10.56, 10.75, 10.94, 11.12, 11.31, 11.51, 11.71, 11.9, 12.11, 12.3, 12.5, 12.68, 12.85, 13.04, 13.23, 13.41, 13.59, 13.78, 13.96, 14.14, 14.33, 14.51, 14.69]
var power_22v = [789.8, 774.5, 759.2, 743.9, 728.7, 713.4, 698.1, 682.8, 667.5, 652.5, 637.4, 623.6, 608.8, 593.5, 577.6, 561.8, 546.5, 532.0, 517.4, 503.4, 490.2, 476.6, 463.4, 450.5, 437.2, 424.1, 411.3, 398.6, 386.3, 374.4, 362.9, 352.0, 341.4, 331.5, 321.7, 311.4, 302.0, 292.9, 284.2, 275.5, 266.7, 258.3, 250.1, 242.2, 234.4, 226.8, 219.3, 211.8, 204.5, 197.4, 189.7, 182.0, 175.3, 167.9, 160.6, 153.7, 147.0, 140.6, 134.3, 128.3, 122.3, 116.5, 110.8, 105.3, 99.8, 94.2, 88.7, 83.2, 77.9, 72.8, 68.0, 63.2, 58.7, 54.3, 52.0, 50.1, 46.0, 42.1, 38.5, 35.1, 31.8, 28.7, 25.9, 23.4, 21.2, 19.3, 17.6, 15.9, 14.2, 12.4, 10.7, 9.0, 7.3, 5.6, 3.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.1, 4.4, 6.6, 8.9, 11.1, 13.4, 15.6, 17.9, 20.2, 22.6, 25.2, 27.8, 30.7, 33.8, 36.9, 40.1, 43.6, 47.3, 51.2, 55.3, 59.4, 63.7, 68.1, 72.6, 77.2, 81.9, 86.8, 91.9, 97.2, 102.6, 108.2, 114.0, 120.0, 126.2, 132.5, 138.2, 144.0, 149.8, 155.8, 162.1, 168.3, 174.9, 181.9, 188.9, 196.3, 203.8, 211.2, 218.9, 226.9, 234.8, 243.0, 251.3, 260.2, 269.6, 279.4, 289.5, 299.7, 310.2, 320.8, 331.4, 342.3, 353.2, 364.0, 375.2, 386.3, 398.1, 410.1, 422.5, 435.3, 448.4, 461.7, 475.2, 488.4, 501.5, 514.9, 528.1, 542.5, 557.2, 572.0, 587.4, 603.2, 619.1, 634.5, 649.3, 663.0, 678.5, 693.4, 708.7, 724.0, 739.3, 754.7, 770.0, 785.3, 800.6, 815.9]

var thrust_24v = [-10.31, -10.21, -10.11, -10.01, -9.91, -9.81, -9.71, -9.61, -9.51, -9.39, -9.28, -9.18, -9.07, -8.97, -8.83, -8.7, -8.57, -8.45, -8.33, -8.21, -8.08, -7.95, -7.81, -7.67, -7.54, -7.41, -7.29, -7.16, -7.02, -6.89, -6.77, -6.66, -6.54, -6.42, -6.29, -6.16, -6.03, -5.9, -5.79, -5.68, -5.56, -5.43, -5.3, -5.16, -5.04, -4.92, -4.8, -4.67, -4.55, -4.43, -4.3, -4.18, -4.06, -3.95, -3.84, -3.71, -3.6, -3.49, -3.39, -3.29, -3.19, -3.08, -2.98, -2.88, -2.79, -2.69, -2.6, -2.5, -2.41, -2.32, -2.23, -2.13, -2.04, -1.94, -1.85, -1.75, -1.65, -1.55, -1.46, -1.37, -1.28, -1.19, -1.11, -1.02, -0.94, -0.86, -0.78, -0.7, -0.62, -0.55, -0.47, -0.39, -0.31, -0.23, -0.16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.26, 0.37, 0.49, 0.6, 0.71, 0.83, 0.94, 1.05, 1.17, 1.28, 1.41, 1.53, 1.66, 1.79, 1.92, 2.05, 2.19, 2.32, 2.47, 2.62, 2.77, 2.9, 3.03, 3.16, 3.3, 3.43, 3.56, 3.7, 3.83, 3.97, 4.12, 4.26, 4.4, 4.56, 4.71, 4.86, 5.01, 5.17, 5.35, 5.53, 5.7, 5.88, 6.06, 6.24, 6.43, 6.62, 6.81, 7.0, 7.2, 7.39, 7.58, 7.77, 7.96, 8.15, 8.35, 8.54, 8.75, 8.95, 9.15, 9.35, 9.55, 9.76, 9.95, 10.15, 10.35, 10.56, 10.77, 10.98, 11.19, 11.41, 11.62, 11.83, 12.04, 12.24, 12.45, 12.65, 12.85, 13.06, 13.26, 13.48, 13.7, 13.91, 14.11, 14.31, 14.49, 14.69, 14.88, 15.07, 15.27, 15.46, 15.66, 15.85, 16.05, 16.24, 16.44]
var power_24v = [983.1, 964.1, 945.2, 926.2, 907.2, 888.3, 869.3, 850.4, 831.4, 812.6, 794.2, 777.1, 758.8, 739.6, 720.0, 700.4, 681.6, 663.8, 645.9, 628.8, 612.3, 595.8, 579.4, 562.7, 546.2, 529.8, 513.7, 497.8, 482.3, 467.3, 452.8, 439.1, 425.6, 412.5, 399.4, 386.7, 374.9, 363.5, 352.1, 340.7, 329.0, 317.3, 306.3, 295.6, 285.1, 275.6, 266.2, 256.9, 247.9, 239.1, 230.2, 221.6, 213.2, 204.0, 195.1, 186.6, 178.6, 171.4, 164.6, 157.9, 151.3, 144.9, 137.9, 131.0, 124.4, 118.0, 112.0, 106.1, 100.5, 94.9, 89.5, 84.2, 79.0, 74.0, 69.2, 64.5, 59.8, 55.5, 51.3, 47.3, 43.4, 39.7, 36.1, 32.8, 29.6, 26.6, 23.8, 21.2, 18.6, 16.0, 13.3, 10.7, 8.1, 5.4, 2.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4.1, 6.5, 8.9, 11.3, 13.8, 16.2, 18.6, 21.1, 23.5, 26.4, 29.6, 33.0, 36.6, 40.5, 44.4, 48.5, 52.9, 57.4, 62.2, 67.2, 72.4, 77.9, 83.7, 89.8, 95.8, 101.9, 108.0, 114.2, 120.6, 127.2, 134.0, 141.1, 148.5, 156.1, 163.9, 172.0, 179.3, 186.6, 194.2, 202.0, 209.7, 217.8, 226.4, 235.2, 244.2, 253.5, 262.8, 272.3, 282.0, 291.7, 301.6, 311.7, 321.7, 333.0, 345.0, 357.2, 369.9, 382.6, 395.6, 408.7, 421.8, 435.2, 448.5, 462.1, 475.8, 490.3, 505.3, 520.7, 536.5, 552.6, 568.9, 585.3, 601.7, 617.8, 634.3, 650.5, 667.5, 685.3, 703.1, 721.7, 741.2, 760.8, 779.9, 798.1, 814.9, 834.1, 852.4, 871.4, 890.3, 909.3, 928.3, 947.2, 966.2, 985.1, 1004.1]


var thrust_power_12v = thrust_12v.map((x, i) => {
  return {
    x: x,
    y: power_12v[i]
  };
});

var thrust_power_14v = thrust_14v.map((x, i) => {
  return {
    x: x,
    y: power_14v[i]
  };
});

var thrust_power_16v = thrust_16v.map((x, i) => {
  return {
    x: x,
    y: power_16v[i]
  };
});

var thrust_power_18v = thrust_18v.map((x, i) => {
  return {
    x: x,
    y: power_18v[i]
  };
});

var thrust_power_20v = thrust_20v.map((x, i) => {
  return {
    x: x,
    y: power_20v[i]
  };
});

var thrust_power_22v = thrust_22v.map((x, i) => {
  return {
    x: x,
    y: power_22v[i]
  };
});

var thrust_power_24v = thrust_24v.map((x, i) => {
  return {
    x: x,
    y: power_24v[i]
  };
});



var ctx = document.getElementById("t500_thrust_power");

var t500_thrust_power = new Chart(ctx, {
     type: 'scatter',
    data: {
        datasets: [{
            data: thrust_power_12v,
            showLine:true,
            label: "12 V Thrust and Power                    ",
            borderColor: "#9d3ecd",
            fill: false,
        },
        {
            data: thrust_power_14v,
            showLine:true,
            label: "14 V Thrust and Power                    ",
            borderColor: "#3e95cd",
            fill: false,
        },
        {
            data: thrust_power_16v,
            showLine:true,
            label: "16 V Thrust and Power                    ",
            borderColor: "#3ecd43",
            fill: false,
        },
        {
            data: thrust_power_18v,
            showLine:true,
            label: "18 V Thrust and Power                    ",
            borderColor: "#c8cd3e",
            fill: false,
        },
        {
            data: thrust_power_20v,
            showLine:true,
            label: "20 V Thrust and Power                    ",
            borderColor: "#FF6D2D",
            fill: false,
        },
                {
            data: thrust_power_22v,
            showLine:true,
            label: "22 V Thrust and Power                    ",
            borderColor: "#cd3e3e",
            fill: false,
        },
        {
            data: thrust_power_24v,
            showLine:true,
            label: "24 V Thrust and Power                    ",
            borderColor: "#000000",
            fill: false,
        }]
    },
    options: {
      tooltips: {
            mode: 'single',
            intersect: true,
           // position: 'average',
            axis: 'x'
        },
legend: {
            display: true,
            position: 'bottom',
  
        },
        scales: {
                yAxes: [{
        id: 'Efficiency',
        type: 'linear',
        position: 'left',
        scaleLabel: {
        display: true,
        labelString: 'Power (W)',
        fontSize: 20,
      },
        ticks: {
//                max: 40,
//                min: 0,
                stepSize: 50,
        }
      }, 
],
            xAxes: [{
                type: 'linear',
                position: 'bottom',
                ticks: {
                          maxTicksLimit: 100,
                          stepsize: 0.5
        },
        scaleLabel: {
        display: true,
        labelString: 'Reverse                    Thrust (Kg f)                    Forward',
        fontSize: 20,
      }

            }]
        },
        elements: { 
        point: { 
        radius: 0,
        hitRadius: 10, 
        hoverRadius: 5,
      } 
    }
    }
});