const color_list = [
  { name: 'black', rgb: '#000000' },
  { name: 'aliceblue', rgb: '#f0f8ff' },
  { name: 'darkcyan', rgb: '#008b8b' },
  { name: 'lightyellow', rgb: '#ffffe0' },
  { name: 'coral', rgb: '#ff7f50' },
  { name: 'dimgray', rgb: '#696969' },
  { name: 'lavender', rgb: '#e6e6fa' },
  { name: 'teal', rgb: '#008080' },
  { name: 'lightgoldenrodyellow', rgb: '#fafad2' },
  { name: 'tomato', rgb: '#ff6347' },
  { name: 'gray', rgb: '#808080' },
  { name: 'lightsteelblue', rgb: '#b0c4de' },
  { name: 'darkslategray', rgb: '#2f4f4f' },
  { name: 'lemonchiffon', rgb: '#fffacd' },
  { name: 'orangered', rgb: '#ff4500' },
  { name: 'darkgray', rgb: '#a9a9a9' },
  { name: 'lightslategray', rgb: '#778899' },
  { name: 'darkgreen', rgb: '#006400' },
  { name: 'wheat', rgb: '#f5deb3' },
  { name: 'red', rgb: '#ff0000' },
  { name: 'silver', rgb: '#c0c0c0' },
  { name: 'slategray', rgb: '#708090' },
  { name: 'green', rgb: '#008000' },
  { name: 'burlywood', rgb: '#deb887' },
  { name: 'crimson', rgb: '#dc143c' },
  { name: 'lightgray', rgb: '#d3d3d3' },
  { name: 'steelblue', rgb: '#4682b4' },
  { name: 'forestgreen', rgb: '#228b22' },
  { name: 'tan', rgb: '#d2b48c' },
  { name: 'mediumvioletred', rgb: '#c71585' },
  { name: 'gainsboro', rgb: '#dcdcdc' },
  { name: 'royalblue', rgb: '#4169e1' },
  { name: 'seagreen', rgb: '#2e8b57' },
  { name: 'khaki', rgb: '#f0e68c' },
  { name: 'deeppink', rgb: '#ff1493' },
  { name: 'whitesmoke', rgb: '#f5f5f5' },
  { name: 'midnightblue', rgb: '#191970' },
  { name: 'mediumseagreen', rgb: '#3cb371' },
  { name: 'yellow', rgb: '#ffff00' },
  { name: 'hotpink', rgb: '#ff69b4' },
  { name: 'white', rgb: '#ffffff' },
  { name: 'navy', rgb: '#000080' },
  { name: 'mediumaquamarine', rgb: '#66cdaa' },
  { name: 'gold', rgb: '#ffd700' },
  { name: 'palevioletred', rgb: '#db7093' },
  { name: 'snow', rgb: '#fffafa' },
  { name: 'darkblue', rgb: '#00008b' },
  { name: 'darkseagreen', rgb: '#8fbc8f' },
  { name: 'orange', rgb: '#ffa500' },
  { name: 'pink', rgb: '#ffc0cb' },
  { name: 'ghostwhite', rgb: '#f8f8ff' },
  { name: 'mediumblue', rgb: '#0000cd' },
  { name: 'aquamarine', rgb: '#7fffd4' },
  { name: 'sandybrown', rgb: '#f4a460' },
  { name: 'lightpink', rgb: '#ffb6c1' },
  { name: 'floralwhite', rgb: '#fffaf0' },
  { name: 'blue', rgb: '#0000ff' },
  { name: 'palegreen', rgb: '#98fb98' },
  { name: 'darkorange', rgb: '#ff8c00' },
  { name: 'thistle', rgb: '#d8bfd8' },
  { name: 'linen', rgb: '#faf0e6' },
  { name: 'dodgerblue', rgb: '#1e90ff' },
  { name: 'lightgreen', rgb: '#90ee90' },
  { name: 'goldenrod', rgb: '#daa520' },
  { name: 'magenta', rgb: '#ff00ff' },
  { name: 'antiquewhite', rgb: '#faebd7' },
  { name: 'cornflowerblue', rgb: '#6495ed' },
  { name: 'springgreen', rgb: '#00ff7f' },
  { name: 'peru', rgb: '#cd853f' },
  { name: 'fuchsia', rgb: '#ff00ff' },
  { name: 'papayawhip', rgb: '#ffefd5' },
  { name: 'deepskyblue', rgb: '#00bfff' },
  { name: 'mediumspringgreen', rgb: '#00fa9a' },
  { name: 'darkgoldenrod', rgb: '#b8860b' },
  { name: 'violet', rgb: '#ee82ee' },
  { name: 'blanchedalmond', rgb: '#ffebcd' },
  { name: 'lightskyblue', rgb: '#87cefa' },
  { name: 'lawngreen', rgb: '#7cfc00' },
  { name: 'chocolate', rgb: '#d2691e' },
  { name: 'plum', rgb: '#dda0dd' },
  { name: 'bisque', rgb: '#ffe4c4' },
  { name: 'skyblue', rgb: '#87ceeb' },
  { name: 'chartreuse', rgb: '#7fff00' },
  { name: 'sienna', rgb: '#a0522d' },
  { name: 'orchid', rgb: '#da70d6' },
  { name: 'moccasin', rgb: '#ffe4b5' },
  { name: 'lightblue', rgb: '#add8e6' },
  { name: 'greenyellow', rgb: '#adff2f' },
  { name: 'saddlebrown', rgb: '#8b4513' },
  { name: 'mediumorchid', rgb: '#ba55d3' },
  { name: 'navajowhite', rgb: '#ffdead' },
  { name: 'powderblue', rgb: '#b0e0e6' },
  { name: 'lime', rgb: '#00ff00' },
  { name: 'maroon', rgb: '#800000' },
  { name: 'darkorchid', rgb: '#9932cc' },
  { name: 'peachpuff', rgb: '#ffdab9' },
  { name: 'paleturquoise', rgb: '#afeeee' },
  { name: 'limegreen', rgb: '#32cd32' },
  { name: 'darkred', rgb: '#8b0000' },
  { name: 'darkviolet', rgb: '#9400d3' },
  { name: 'mistyrose', rgb: '#ffe4e1' },
  { name: 'lightcyan', rgb: '#e0ffff' },
  { name: 'yellowgreen', rgb: '#9acd32' },
  { name: 'brown', rgb: '#a52a2a' },
  { name: 'darkmagenta', rgb: '#8b008b' },
  { name: 'lavenderblush', rgb: '#fff0f5' },
  { name: 'cyan', rgb: '#00ffff' },
  { name: 'darkolivegreen', rgb: '#556b2f' },
  { name: 'firebrick', rgb: '#b22222' },
  { name: 'purple', rgb: '#800080' },
  { name: 'seashell', rgb: '#fff5ee' },
  { name: 'aqua', rgb: '#00ffff' },
  { name: 'olivedrab', rgb: '#6b8e23' },
  { name: 'indianred', rgb: '#cd5c5c' },
  { name: 'indigo', rgb: '#4b0082' },
  { name: 'oldlace', rgb: '#fdf5e6' },
  { name: 'turquoise', rgb: '#40e0d0' },
  { name: 'olive', rgb: '#808000' },
  { name: 'rosybrown', rgb: '#bc8f8f' },
  { name: 'darkslateblue', rgb: '#483d8b' },
  { name: 'ivory', rgb: '#fffff0' },
  { name: 'mediumturquoise', rgb: '#48d1cc' },
  { name: 'darkkhaki', rgb: '#bdb76b' },
  { name: 'darksalmon', rgb: '#e9967a' },
  { name: 'blueviolet', rgb: '#8a2be2' },
  { name: 'honeydew', rgb: '#f0fff0' },
  { name: 'darkturquoise', rgb: '#00ced1' },
  { name: 'palegoldenrod', rgb: '#eee8aa' },
  { name: 'lightcoral', rgb: '#f08080' },
  { name: 'mediumpurple', rgb: '#9370db' },
  { name: 'mintcream', rgb: '#f5fffa' },
  { name: 'lightseagreen', rgb: '#20b2aa' },
  { name: 'cornsilk', rgb: '#fff8dc' },
  { name: 'salmon', rgb: '#fa8072' },
  { name: 'slateblue', rgb: '#6a5acd' },
  { name: 'azure', rgb: '#f0ffff' },
  { name: 'cadetblue', rgb: '#5f9ea0' },
  { name: 'beige', rgb: '#f5f5dc' },
  { name: 'lightsalmon', rgb: '#ffa07a' },
  { name: 'mediumslateblue', rgb: '#7b68ee' },
];

const color_basic_list = [
  { name: 'black', rgb: '#000000'},
  { name: 'gray', rgb: '#808080'},
  { name: 'silver', rgb: '#C0C0C0'},
  { name: 'white', rgb: '#FFFFFF'},
  { name: 'blue', rgb: '#0000FF'},
  { name: 'navy', rgb: '#000080'},
  { name: 'teal', rgb: '#008080'},
  { name: 'green', rgb: '#008000'},
  { name: 'lime', rgb: '#00FF00'},
  { name: 'aqua', rgb: '#00FFFF'},
  { name: 'yellow', rgb: '#FFFF00'},
  { name: 'red', rgb: '#FF0000'},
  { name: 'fuchsia', rgb: '#FF00FF'},
  { name: 'olive', rgb: '#808000'},
  { name: 'purple', rgb: '#800080'},
  { name: 'maroon', rgb: '#800000'},
];