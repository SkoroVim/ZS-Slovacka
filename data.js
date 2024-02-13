var APP_DATA = {
  "scenes": [
    {
      "id": "0-vchod",
      "name": "Vchod",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.86601604192796,
        "pitch": -0.07781929511063446,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.8748048032846363,
          "pitch": 0.024919368789786844,
          "rotation": 0,
          "target": "1-za-vchodem"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-za-vchodem",
      "name": "Za Vchodem",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.807148171838982,
        "pitch": 0.0093176793224643,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.23564759289245885,
          "pitch": 0.24263985347667116,
          "rotation": 0,
          "target": "0-vchod"
        },
        {
          "yaw": -3.077268516965951,
          "pitch": 0.2769815529838553,
          "rotation": 0,
          "target": "2-rozcest"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-rozcest",
      "name": "Rozcestí",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.930039185527395,
        "pitch": -0.022194813583716666,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.0031930559439494743,
          "pitch": 0.3306748927707872,
          "rotation": 0,
          "target": "1-za-vchodem"
        },
        {
          "yaw": 1.8209436006930346,
          "pitch": 0.12214842574450557,
          "rotation": 0,
          "target": "3-u-sknk"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2951546438747137,
          "pitch": 0.13461839830048028,
          "title": "INFO",
          "text": "Tady bude první stupeň"
        },
        {
          "yaw": -3.0072718733796524,
          "pitch": 0.19764233350705496,
          "title": "INFO",
          "text": "Tady bude hlavní chodba"
        }
      ]
    },
    {
      "id": "3-u-sknk",
      "name": "U skříněk",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.786289360662373,
        "pitch": 0.010375452931153717,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.5873338741675855,
          "pitch": 0.061964732481804674,
          "rotation": 0,
          "target": "2-rozcest"
        },
        {
          "yaw": 2.5411757951187264,
          "pitch": 0.027135905881671363,
          "rotation": 0,
          "target": "4-roh-u-sknk"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-roh-u-sknk",
      "name": "Roh u skříněk",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.9179134367054083,
        "pitch": 0.1023294489821911,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.8019025397418744,
          "pitch": 0.08021835430833058,
          "rotation": 0,
          "target": "3-u-sknk"
        },
        {
          "yaw": -2.845676912318389,
          "pitch": 0.1647726148008104,
          "rotation": 0,
          "target": "5-druh-stupe---pzem-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-druh-stupe---pzem-1",
      "name": "Druhý stupeň - přízemí 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.491662312952937,
        "pitch": 0.03286466185726766,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.2817306201520093,
          "pitch": 0.06308355480917882,
          "rotation": 0,
          "target": "4-roh-u-sknk"
        },
        {
          "yaw": -2.8510357383001015,
          "pitch": 0.026925169238324997,
          "rotation": 0,
          "target": "12-schody-druh-stupen-1"
        },
        {
          "yaw": 1.8468984858542594,
          "pitch": 0.15312313436139746,
          "rotation": 0,
          "target": "6-druh-stupe---pzem-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-druh-stupe---pzem-2",
      "name": "Druhý stupeň - přízemí 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.4437876578336821,
        "pitch": 0.07050731188799197,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 3.125367667762437,
          "pitch": 0.10164435385648041,
          "rotation": 0,
          "target": "7-uebna-fyziky"
        },
        {
          "yaw": -1.8401209246010986,
          "pitch": 0.1114312559427777,
          "rotation": 0,
          "target": "5-druh-stupe---pzem-1"
        },
        {
          "yaw": 1.3524680145926382,
          "pitch": 0.11743972347645126,
          "rotation": 0,
          "target": "8-druh-stupe---pzem-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-uebna-fyziky",
      "name": "Učebna Fyziky",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.7224941345762197,
        "pitch": 0.09072470393913257,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.3052328515306755,
          "pitch": 0.2794579212027912,
          "rotation": 0,
          "target": "6-druh-stupe---pzem-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-druh-stupe---pzem-3",
      "name": "Druhý stupeň - přízemí 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.769723741525709,
        "pitch": 0.056846622749439746,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.33009306196597876,
          "pitch": 0.11673278962137701,
          "rotation": 0,
          "target": "6-druh-stupe---pzem-2"
        },
        {
          "yaw": -2.8227868408382086,
          "pitch": 0.15910776823405293,
          "rotation": 0,
          "target": "9-druh-stupe---pzem-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-druh-stupe---pzem-4",
      "name": "Druhý stupeň - přízemí 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.6655480422633602,
        "pitch": 0.09298148563294717,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.6903193418181406,
          "pitch": 0.10605796261241807,
          "rotation": 0,
          "target": "10-kuchyka"
        },
        {
          "yaw": -2.680692894551248,
          "pitch": 0.1397742944736713,
          "rotation": 0,
          "target": "11-hudebka"
        },
        {
          "yaw": 1.7179853745878528,
          "pitch": 0.13206177898404903,
          "rotation": 0,
          "target": "8-druh-stupe---pzem-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-kuchyka",
      "name": "Kuchyňka",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.869491143710431,
        "pitch": 0.09918019674586631,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.26752874445440966,
          "pitch": 0.20551687771163607,
          "rotation": 0,
          "target": "9-druh-stupe---pzem-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-hudebka",
      "name": "Hudebka",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.1373078593061887,
        "pitch": -0.0008252587124299993,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.1288909115260477,
          "pitch": 0.06708741016282005,
          "rotation": 0,
          "target": "9-druh-stupe---pzem-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-schody-druh-stupen-1",
      "name": "Schody druhý stupen 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.9279157400350222,
        "pitch": 0.1001208282018844,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.5560353592300586,
          "pitch": 0.45448365580489103,
          "rotation": 0,
          "target": "5-druh-stupe---pzem-1"
        },
        {
          "yaw": -1.2129707940688466,
          "pitch": 0.004270866385430949,
          "rotation": 0,
          "target": "13-druh-stupe---1-partro-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-druh-stupe---1-partro-1",
      "name": "Druhý stupeň - 1. partro 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.535895308667209,
        "pitch": 0.0904073507266272,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.1299622686025863,
          "pitch": 0.09679367506493008,
          "rotation": 0,
          "target": "14-vtvarka"
        },
        {
          "yaw": -2.635845252802376,
          "pitch": 0.40732311527490594,
          "rotation": 0,
          "target": "12-schody-druh-stupen-1"
        },
        {
          "yaw": 1.8151896542997719,
          "pitch": 0.17104273869705722,
          "rotation": 0,
          "target": "6-druh-stupe---pzem-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.075625030279296,
          "pitch": 0.03459184191613929,
          "title": "INFO",
          "text": "Tady bude 2.patro"
        }
      ]
    },
    {
      "id": "14-vtvarka",
      "name": "Výtvarka",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.6531691167578622,
        "pitch": 0.014409879232639256,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.6937483427458346,
          "pitch": 0.0130849798525432,
          "rotation": 0,
          "target": "13-druh-stupe---1-partro-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-druh-stupe---1-partro-2",
      "name": "Druhý stupeň - 1. partro 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.733775885475618,
        "pitch": 0.13844035703803392,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.2697611376803941,
          "pitch": 0.19557637792983584,
          "rotation": 0,
          "target": "13-druh-stupe---1-partro-1"
        },
        {
          "yaw": -2.842403031961968,
          "pitch": 0.2169818807172117,
          "rotation": 0,
          "target": "16-druh-stupe---1-partro-3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6084544571964763,
          "pitch": 0.13682453373289682,
          "title": "INFO",
          "text": "Tady bude učebna chemie"
        }
      ]
    },
    {
      "id": "16-druh-stupe---1-partro-3",
      "name": "Druhý stupeň - 1. partro 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.6939107454517988,
        "pitch": 0.05580574332099708,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.8977365533513932,
          "pitch": 0.13017975585496622,
          "rotation": 0,
          "target": "17-uebna-prodopisu"
        },
        {
          "yaw": 0.2505739276611667,
          "pitch": 0.14718834686427584,
          "rotation": 0,
          "target": "15-druh-stupe---1-partro-2"
        },
        {
          "yaw": -2.895551912585029,
          "pitch": 0.1534036193851449,
          "rotation": 0,
          "target": "18-druh-stupe---1-partro-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-uebna-prodopisu",
      "name": "Učebna Přírodopisu",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.3526345305584044,
        "pitch": -0.014124188264185378,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -3.1021286888069515,
          "pitch": 0.06726992007916266,
          "rotation": 0,
          "target": "16-druh-stupe---1-partro-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-druh-stupe---1-partro-4",
      "name": "Druhý stupeň - 1. partro 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.1010100529109614,
        "pitch": 0.033392195767277144,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.9914388240625627,
          "pitch": 0.1954577999408329,
          "rotation": 0,
          "target": "16-druh-stupe---1-partro-3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "ZŠ Slovácká",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
