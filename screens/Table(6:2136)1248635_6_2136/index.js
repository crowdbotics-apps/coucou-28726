import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_6_1172}>
        <View style={styles.View_6_1173}>
          <Text style={styles.Text_6_1173}>Rows per page</Text>
        </View>
        <View style={styles.View_6_1174}>
          <View style={styles.View_6_1175}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20bf/2be3/c54f477bfeb9c72539d9a4717dc01c29"
              }}
              style={styles.ImageBackground_6_1176}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0ce/8876/4c2d513becd424e86fd7110b87b1651f"
              }}
              style={styles.ImageBackground_6_1178}
            />
          </View>
          <View style={styles.View_6_1179}>
            <Text style={styles.Text_6_1179}>15</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0fe/0c1e/84d39263eda17a4dd3d0b9e772cfc037"
            }}
            style={styles.ImageBackground_6_1181}
          />
        </View>
      </View>
      <View style={styles.View_6_1110}>
        <View style={styles.View_6_1112}>
          <Text style={styles.Text_6_1112}>16</Text>
        </View>
        <View style={styles.View_6_1111}>
          <Text style={styles.Text_6_1111}>/</Text>
        </View>
        <View style={styles.View_6_1137}>
          <View style={styles.View_6_1138}>
            <View style={styles.View_6_1139}>
              <View style={styles.View_6_1140}>
                <View style={styles.View_6_1141}>
                  <View style={styles.View_6_1142} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cb0/abed/ee541f9b0e0cb37a230fd1c78864a89f"
                    }}
                    style={styles.ImageBackground_6_1151}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cb0/abed/ee541f9b0e0cb37a230fd1c78864a89f"
                    }}
                    style={styles.ImageBackground_6_1155}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cb0/abed/ee541f9b0e0cb37a230fd1c78864a89f"
                    }}
                    style={styles.ImageBackground_6_1143}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cb0/abed/ee541f9b0e0cb37a230fd1c78864a89f"
                    }}
                    style={styles.ImageBackground_6_1147}
                  />
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ed3/b5a9/84223b9dcdc796c601b878b4f9aa73ec"
            }}
            style={styles.ImageBackground_6_1159}
          />
        </View>
        <View style={styles.View_6_1113}>
          <View style={styles.View_6_1114}>
            <View style={styles.View_6_1115}>
              <View style={styles.View_6_1116}>
                <View style={styles.View_6_1117}>
                  <View style={styles.View_6_1118} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cb0/abed/ee541f9b0e0cb37a230fd1c78864a89f"
                    }}
                    style={styles.ImageBackground_6_1127}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cb0/abed/ee541f9b0e0cb37a230fd1c78864a89f"
                    }}
                    style={styles.ImageBackground_6_1131}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cb0/abed/ee541f9b0e0cb37a230fd1c78864a89f"
                    }}
                    style={styles.ImageBackground_6_1119}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cb0/abed/ee541f9b0e0cb37a230fd1c78864a89f"
                    }}
                    style={styles.ImageBackground_6_1123}
                  />
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12f9/1ef7/95ad0f9a26b56de8da5c5229c0274d16"
            }}
            style={styles.ImageBackground_6_1135}
          />
        </View>
        <View style={styles.View_6_1161}>
          <View style={styles.View_6_1162}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff65/5788/b44590e26967204df5cbc29522d78b2d"
              }}
              style={styles.ImageBackground_6_1163}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2497/0c22/f351f62d9f1645d955d742e2e3d54864"
              }}
              style={styles.ImageBackground_6_1165}
            />
          </View>
          <View style={styles.View_6_1166}>
            <Text style={styles.Text_6_1166}>1</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_9_2603}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/336c/fb28/f945ec8b31155608cf000f98a15e9cbb"
          }}
          style={styles.ImageBackground_I9_2603_9_1580}
        />
      </View>
      <View style={styles.View_9_2604}>
        <View style={styles.View_I9_2604_9_1585}>
          <View style={styles.View_I9_2604_9_1586} />
          <View style={styles.View_I9_2604_9_1587} />
        </View>
        <View style={styles.View_I9_2604_9_1591}>
          <Text style={styles.Text_I9_2604_9_1591}>$845.59</Text>
        </View>
      </View>
      <View style={styles.View_9_2610}>
        <View style={styles.View_I9_2610_31_5306}>
          <View style={styles.View_I9_2610_31_5306_31_5139}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b534/67f8/4fb9b21361e92a1921e06ac308aa84fe"
              }}
              style={styles.ImageBackground_I9_2610_31_5306_31_5140}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34d8/614c/5a48925b460124b2a044dc10760b9092"
              }}
              style={styles.ImageBackground_I9_2610_31_5306_31_5141}
            />
          </View>
          <View style={styles.View_I9_2610_31_5306_31_5142}>
            <Text style={styles.Text_I9_2610_31_5306_31_5142}>
              Gladys Jones
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_9_2609}>
        <View style={styles.View_I9_2609_9_1886}>
          <View style={styles.View_I9_2609_9_1886_9_1884}>
            <Text style={styles.Text_I9_2609_9_1886_9_1884}>9011</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_31_5688}>
        <View style={styles.View_I31_5688_9_1841}>
          <View style={styles.View_I31_5688_9_1841_31_5107}>
            <Text style={styles.Text_I31_5688_9_1841_31_5107}>Danger</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_31_3663}>
        <View style={styles.View_I31_3663_9_1599}>
          <Text style={styles.Text_I31_3663_9_1599}>Gold</Text>
        </View>
      </View>
      <View style={styles.View_31_3651}>
        <View style={styles.View_I31_3651_9_1599}>
          <Text style={styles.Text_I31_3651_9_1599}>IBM</Text>
        </View>
      </View>
      <View style={styles.View_9_2606}>
        <View style={styles.View_I9_2606_9_1607}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63e3/9e15/dd55260964b19a87793d85cf5a19574d"
            }}
            style={styles.ImageBackground_I9_2606_9_1608}
          />
        </View>
      </View>
      <View style={styles.View_9_2607}>
        <View style={styles.View_I9_2607_9_1648}>
          <View style={styles.View_I9_2607_9_1649}>
            <View source={{ uri: "null" }} style={styles.View_I9_2607_9_1650} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88fd/0b96/c627dd7f3d3684b218c56cb563e29c55"
              }}
              style={styles.ImageBackground_I9_2607_9_1651}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_9_2464}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/336c/fb28/f945ec8b31155608cf000f98a15e9cbb"
          }}
          style={styles.ImageBackground_I9_2464_9_1580}
        />
      </View>
      <View style={styles.View_9_2465}>
        <View style={styles.View_I9_2465_9_1585}>
          <View style={styles.View_I9_2465_9_1586} />
          <View style={styles.View_I9_2465_9_1587} />
        </View>
        <View style={styles.View_I9_2465_9_1591}>
          <Text style={styles.Text_I9_2465_9_1591}>$828.90</Text>
        </View>
      </View>
      <View style={styles.View_9_2471}>
        <View style={styles.View_I9_2471_31_5306}>
          <View style={styles.View_I9_2471_31_5306_31_5139}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b534/67f8/4fb9b21361e92a1921e06ac308aa84fe"
              }}
              style={styles.ImageBackground_I9_2471_31_5306_31_5140}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cff/0946/d7c38d41fa21e721204b3c34198c8f8b"
              }}
              style={styles.ImageBackground_I9_2471_31_5306_31_5141}
            />
          </View>
          <View style={styles.View_I9_2471_31_5306_31_5142}>
            <Text style={styles.Text_I9_2471_31_5306_31_5142}>Jorge Black</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_9_2470}>
        <View style={styles.View_I9_2470_9_1886}>
          <View style={styles.View_I9_2470_9_1886_9_1884}>
            <Text style={styles.Text_I9_2470_9_1886_9_1884}>9892</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_31_5685}>
        <View style={styles.View_I31_5685_9_1841}>
          <View style={styles.View_I31_5685_9_1841_31_5109}>
            <Text style={styles.Text_I31_5685_9_1841_31_5109}>Pending</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_31_3662}>
        <View style={styles.View_I31_3662_9_1599}>
          <Text style={styles.Text_I31_3662_9_1599}>Bravo</Text>
        </View>
      </View>
      <View style={styles.View_31_3650}>
        <View style={styles.View_I31_3650_9_1599}>
          <Text style={styles.Text_I31_3650_9_1599}>Mitsubishi</Text>
        </View>
      </View>
      <View style={styles.View_9_2467}>
        <View style={styles.View_I9_2467_9_1607}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5568/1e5f/0d4d70dc40b92cdae1817424fb763d5a"
            }}
            style={styles.ImageBackground_I9_2467_9_1608}
          />
        </View>
      </View>
      <View style={styles.View_9_2468}>
        <View style={styles.View_I9_2468_9_1648}>
          <View style={styles.View_I9_2468_9_1649}>
            <View source={{ uri: "null" }} style={styles.View_I9_2468_9_1650} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88fd/0b96/c627dd7f3d3684b218c56cb563e29c55"
              }}
              style={styles.ImageBackground_I9_2468_9_1651}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_9_2325}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/336c/fb28/f945ec8b31155608cf000f98a15e9cbb"
          }}
          style={styles.ImageBackground_I9_2325_9_1580}
        />
      </View>
      <View style={styles.View_9_2326}>
        <View style={styles.View_I9_2326_9_1585}>
          <View style={styles.View_I9_2326_9_1586} />
          <View style={styles.View_I9_2326_9_1587} />
        </View>
        <View style={styles.View_I9_2326_9_1591}>
          <Text style={styles.Text_I9_2326_9_1591}>$510.30</Text>
        </View>
      </View>
      <View style={styles.View_9_2332}>
        <View style={styles.View_I9_2332_31_5306}>
          <View style={styles.View_I9_2332_31_5306_31_5139}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b534/67f8/4fb9b21361e92a1921e06ac308aa84fe"
              }}
              style={styles.ImageBackground_I9_2332_31_5306_31_5140}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c4d/1f61/b9b282af3d0c7d73ea4ae3d000693f93"
              }}
              style={styles.ImageBackground_I9_2332_31_5306_31_5141}
            />
          </View>
          <View style={styles.View_I9_2332_31_5306_31_5142}>
            <Text style={styles.Text_I9_2332_31_5306_31_5142}>
              Philip Steward
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_9_2331}>
        <View style={styles.View_I9_2331_9_1886}>
          <View style={styles.View_I9_2331_9_1886_9_1884}>
            <Text style={styles.Text_I9_2331_9_1886_9_1884}>3128</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_31_5682}>
        <View style={styles.View_I31_5682_9_1841}>
          <View style={styles.View_I31_5682_9_1841_31_5107}>
            <Text style={styles.Text_I31_5682_9_1841_31_5107}>Danger</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_31_3661}>
        <View style={styles.View_I31_3661_9_1599}>
          <Text style={styles.Text_I31_3661_9_1599}>Alfa</Text>
        </View>
      </View>
      <View style={styles.View_31_3649}>
        <View style={styles.View_I31_3649_9_1599}>
          <Text style={styles.Text_I31_3649_9_1599}>The Walt Disney </Text>
        </View>
      </View>
      <View style={styles.View_9_2328}>
        <View style={styles.View_I9_2328_9_1607}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c07/a112/faba759b5ca4de6349cbd554550f4bd0"
            }}
            style={styles.ImageBackground_I9_2328_9_1608}
          />
        </View>
      </View>
      <View style={styles.View_9_2329}>
        <View style={styles.View_I9_2329_9_1648}>
          <View style={styles.View_I9_2329_9_1649}>
            <View source={{ uri: "null" }} style={styles.View_I9_2329_9_1650} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88fd/0b96/c627dd7f3d3684b218c56cb563e29c55"
              }}
              style={styles.ImageBackground_I9_2329_9_1651}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_9_2186}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/336c/fb28/f945ec8b31155608cf000f98a15e9cbb"
          }}
          style={styles.ImageBackground_I9_2186_9_1580}
        />
      </View>
      <View style={styles.View_9_2187}>
        <View style={styles.View_I9_2187_9_1585}>
          <View style={styles.View_I9_2187_9_1586} />
          <View style={styles.View_I9_2187_9_1587} />
        </View>
        <View style={styles.View_I9_2187_9_1591}>
          <Text style={styles.Text_I9_2187_9_1591}>$641.20</Text>
        </View>
      </View>
      <View style={styles.View_9_2193}>
        <View style={styles.View_I9_2193_31_5306}>
          <View style={styles.View_I9_2193_31_5306_31_5139}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b534/67f8/4fb9b21361e92a1921e06ac308aa84fe"
              }}
              style={styles.ImageBackground_I9_2193_31_5306_31_5140}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2014/ac77/02c0341c8085c2341997a7f274462820"
              }}
              style={styles.ImageBackground_I9_2193_31_5306_31_5141}
            />
          </View>
          <View style={styles.View_I9_2193_31_5306_31_5142}>
            <Text style={styles.Text_I9_2193_31_5306_31_5142}>
              Jennie Cooper
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_9_2192}>
        <View style={styles.View_I9_2192_9_1886}>
          <View style={styles.View_I9_2192_9_1886_9_1884}>
            <Text style={styles.Text_I9_2192_9_1886_9_1884}>9195</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_31_5679}>
        <View style={styles.View_I31_5679_9_1841}>
          <View style={styles.View_I31_5679_9_1841_31_5109}>
            <Text style={styles.Text_I31_5679_9_1841_31_5109}>Pending</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_31_3660}>
        <View style={styles.View_I31_3660_9_1599}>
          <Text style={styles.Text_I31_3660_9_1599}>Bravo</Text>
        </View>
      </View>
      <View style={styles.View_31_3648}>
        <View style={styles.View_I31_3648_9_1599}>
          <Text style={styles.Text_I31_3648_9_1599}>Starbucks</Text>
        </View>
      </View>
      <View style={styles.View_9_2189}>
        <View style={styles.View_I9_2189_9_1607}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2708/a7a5/a9616ced1a2000fce91457ac9d0a31a4"
            }}
            style={styles.ImageBackground_I9_2189_9_1608}
          />
        </View>
      </View>
      <View style={styles.View_9_2190}>
        <View style={styles.View_I9_2190_9_1648}>
          <View style={styles.View_I9_2190_9_1649}>
            <View source={{ uri: "null" }} style={styles.View_I9_2190_9_1650} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88fd/0b96/c627dd7f3d3684b218c56cb563e29c55"
              }}
              style={styles.ImageBackground_I9_2190_9_1651}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_9_2047}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/336c/fb28/f945ec8b31155608cf000f98a15e9cbb"
          }}
          style={styles.ImageBackground_I9_2047_9_1580}
        />
      </View>
      <View style={styles.View_9_2048}>
        <View style={styles.View_I9_2048_9_1585}>
          <View style={styles.View_I9_2048_9_1586} />
          <View style={styles.View_I9_2048_9_1587} />
        </View>
        <View style={styles.View_I9_2048_9_1591}>
          <Text style={styles.Text_I9_2048_9_1591}>$901.31</Text>
        </View>
      </View>
      <View style={styles.View_9_2054}>
        <View style={styles.View_I9_2054_31_5306}>
          <View style={styles.View_I9_2054_31_5306_31_5139}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b534/67f8/4fb9b21361e92a1921e06ac308aa84fe"
              }}
              style={styles.ImageBackground_I9_2054_31_5306_31_5140}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55dd/5b71/d52853fc7e0df14d058eb3efef3ab7da"
              }}
              style={styles.ImageBackground_I9_2054_31_5306_31_5141}
            />
          </View>
          <View style={styles.View_I9_2054_31_5306_31_5142}>
            <Text style={styles.Text_I9_2054_31_5306_31_5142}>
              Arlene Wilson
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_9_2053}>
        <View style={styles.View_I9_2053_9_1886}>
          <View style={styles.View_I9_2053_9_1886_9_1884}>
            <Text style={styles.Text_I9_2053_9_1886_9_1884}>3064</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_31_5676}>
        <View style={styles.View_I31_5676_9_1841}>
          <View style={styles.View_I31_5676_9_1841_31_5107}>
            <Text style={styles.Text_I31_5676_9_1841_31_5107}>Danger</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_31_3659}>
        <View style={styles.View_I31_3659_9_1599}>
          <Text style={styles.Text_I31_3659_9_1599}>Alfa</Text>
        </View>
      </View>
      <View style={styles.View_31_3647}>
        <View style={styles.View_I31_3647_9_1599}>
          <Text style={styles.Text_I31_3647_9_1599}>Johnson &amp; Johnson</Text>
        </View>
      </View>
      <View style={styles.View_9_2050}>
        <View style={styles.View_I9_2050_9_1607}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/558e/ff87/18306a7b77c2046987f291b49e2cf154"
            }}
            style={styles.ImageBackground_I9_2050_9_1608}
          />
        </View>
      </View>
      <View style={styles.View_9_2051}>
        <View style={styles.View_I9_2051_9_1648}>
          <View style={styles.View_I9_2051_9_1649}>
            <View source={{ uri: "null" }} style={styles.View_I9_2051_9_1650} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88fd/0b96/c627dd7f3d3684b218c56cb563e29c55"
              }}
              style={styles.ImageBackground_I9_2051_9_1651}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_9_1908}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/336c/fb28/f945ec8b31155608cf000f98a15e9cbb"
          }}
          style={styles.ImageBackground_I9_1908_9_1580}
        />
      </View>
      <View style={styles.View_9_1909}>
        <View style={styles.View_I9_1909_9_1585}>
          <View style={styles.View_I9_1909_9_1586} />
          <View style={styles.View_I9_1909_9_1587} />
        </View>
        <View style={styles.View_I9_1909_9_1591}>
          <Text style={styles.Text_I9_1909_9_1591}>$452.85</Text>
        </View>
      </View>
      <View style={styles.View_9_1915}>
        <View style={styles.View_I9_1915_31_5306}>
          <View style={styles.View_I9_1915_31_5306_31_5139}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b534/67f8/4fb9b21361e92a1921e06ac308aa84fe"
              }}
              style={styles.ImageBackground_I9_1915_31_5306_31_5140}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54ea/5241/2c647da7457c1375c76714fb4b42835f"
              }}
              style={styles.ImageBackground_I9_1915_31_5306_31_5141}
            />
          </View>
          <View style={styles.View_I9_1915_31_5306_31_5142}>
            <Text style={styles.Text_I9_1915_31_5306_31_5142}>Evan Flores</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_9_1914}>
        <View style={styles.View_I9_1914_9_1886}>
          <View style={styles.View_I9_1914_9_1886_9_1884}>
            <Text style={styles.Text_I9_1914_9_1886_9_1884}>9177</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_9_1913}>
        <View style={styles.View_I9_1913_9_1841}>
          <View style={styles.View_I9_1913_9_1841_9_1753}>
            <Text style={styles.Text_I9_1913_9_1841_9_1753}>Active</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_31_3658}>
        <View style={styles.View_I31_3658_9_1599}>
          <Text style={styles.Text_I31_3658_9_1599}>Bravo</Text>
        </View>
      </View>
      <View style={styles.View_31_3646}>
        <View style={styles.View_I31_3646_9_1599}>
          <Text style={styles.Text_I31_3646_9_1599}>Louis Vuitton</Text>
        </View>
      </View>
      <View style={styles.View_9_1911}>
        <View style={styles.View_I9_1911_9_1607}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b767/d3cf/6dd34b32c7c2445e72b359bfeef3668d"
            }}
            style={styles.ImageBackground_I9_1911_9_1608}
          />
        </View>
      </View>
      <View style={styles.View_9_1912}>
        <View style={styles.View_I9_1912_9_1648}>
          <View style={styles.View_I9_1912_9_1649}>
            <View source={{ uri: "null" }} style={styles.View_I9_1912_9_1650} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88fd/0b96/c627dd7f3d3684b218c56cb563e29c55"
              }}
              style={styles.ImageBackground_I9_1912_9_1651}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_9_1385}>
        <View style={styles.View_I9_1385_31_2228}>
          <View style={styles.View_I9_1385_6_1345}>
            <Text style={styles.Text_I9_1385_6_1345}>Action</Text>
          </View>
        </View>
        <View style={styles.View_I9_1385_31_2207} />
      </View>
      <View style={styles.View_9_1369}>
        <View style={styles.View_I9_1369_31_2228}>
          <View style={styles.View_I9_1369_6_1345}>
            <Text style={styles.Text_I9_1369_6_1345}>Contact</Text>
          </View>
        </View>
        <View style={styles.View_I9_1369_31_2207}>
          <View style={styles.View_I9_1369_6_1346}>
            <Text style={styles.Text_I9_1369_6_1346}>Search</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_9_1352}>
        <View style={styles.View_I9_1352_31_2804}>
          <View style={styles.View_I9_1352_6_1684}>
            <Text style={styles.Text_I9_1352_6_1684}>Price USD </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d333/53ec/13d5f2a67a9c297e62438c8d221e614e"
            }}
            style={styles.ImageBackground_I9_1352_6_1688}
          />
        </View>
        <View style={styles.View_I9_1352_31_2749}>
          <View style={styles.View_I9_1352_6_1685}>
            <Text style={styles.Text_I9_1352_6_1685}>All</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdd8/58fd/98eb09b72d2ae5253aaaead3f82473be"
            }}
            style={styles.ImageBackground_I9_1352_6_1686}
          />
        </View>
      </View>
      <View style={styles.View_9_1361}>
        <View style={styles.View_I9_1361_31_2228}>
          <View style={styles.View_I9_1361_6_1345}>
            <Text style={styles.Text_I9_1361_6_1345}>SKU</Text>
          </View>
        </View>
        <View style={styles.View_I9_1361_31_2207}>
          <View style={styles.View_I9_1361_6_1346}>
            <Text style={styles.Text_I9_1361_6_1346}>Search</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_9_15507}>
        <View style={styles.View_I9_15507_31_2804}>
          <View style={styles.View_I9_15507_6_1684}>
            <Text style={styles.Text_I9_15507_6_1684}>Type</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d333/53ec/13d5f2a67a9c297e62438c8d221e614e"
            }}
            style={styles.ImageBackground_I9_15507_6_1688}
          />
        </View>
        <View style={styles.View_I9_15507_31_2749}>
          <View style={styles.View_I9_15507_6_1685}>
            <Text style={styles.Text_I9_15507_6_1685}>All</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdd8/58fd/98eb09b72d2ae5253aaaead3f82473be"
            }}
            style={styles.ImageBackground_I9_15507_6_1686}
          />
        </View>
      </View>
      <View style={styles.View_9_1287}>
        <View style={styles.View_I9_1287_31_2804}>
          <View style={styles.View_I9_1287_6_1684}>
            <Text style={styles.Text_I9_1287_6_1684}>Status</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d333/53ec/13d5f2a67a9c297e62438c8d221e614e"
            }}
            style={styles.ImageBackground_I9_1287_6_1688}
          />
        </View>
        <View style={styles.View_I9_1287_31_2749}>
          <View style={styles.View_I9_1287_6_1685}>
            <Text style={styles.Text_I9_1287_6_1685}>All</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdd8/58fd/98eb09b72d2ae5253aaaead3f82473be"
            }}
            style={styles.ImageBackground_I9_1287_6_1686}
          />
        </View>
      </View>
      <View style={styles.View_9_1285}>
        <View style={styles.View_I9_1285_31_2228}>
          <View style={styles.View_I9_1285_6_1345}>
            <Text style={styles.Text_I9_1285_6_1345}>Company</Text>
          </View>
        </View>
        <View style={styles.View_I9_1285_31_2207}>
          <View style={styles.View_I9_1285_6_1346}>
            <Text style={styles.Text_I9_1285_6_1346}>Search</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_9_1286}>
        <View style={styles.View_I9_1286_8_1167}>
          <View source={{ uri: "null" }} style={styles.View_I9_1286_8_1168} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88fd/0b96/c627dd7f3d3684b218c56cb563e29c55"
            }}
            style={styles.ImageBackground_I9_1286_8_1169}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111.47540983606557%") },
  View_6_1172: {
    width: wp("13.853503184713375%"),
    minWidth: wp("13.853503184713375%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.40286624203821%"),
    top: hp("92.62295081967213%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_1173: {
    flexGrow: 1,
    width: wp("8.121019108280255%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475557%"),
    justifyContent: "flex-start"
  },
  Text_6_1173: {
    color: "rgba(69, 77, 89, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_6_1174: {
    width: wp("4.777070063694268%"),
    minWidth: wp("4.777070063694268%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.076433121019107%"),
    top: hp("-3.1420765027322375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_1175: {
    flexGrow: 1,
    width: wp("4.777070063694268%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1420765027322375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_6_1176: {
    width: wp("4.777070063694268%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_6_1178: {
    width: wp("4.777070063694268%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_1179: {
    flexGrow: 1,
    width: wp("2.8662420382165608%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388564%"),
    top: hp("3.961748633879793%"),
    justifyContent: "flex-start"
  },
  Text_6_1179: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_6_1181: {
    width: wp("1.2738853503184715%"),
    height: hp("2.185792349726776%"),
    top: hp("4.234972677595636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.866242038216569%")
  },
  View_6_1110: {
    width: wp("12.340764331210192%"),
    minWidth: wp("12.340764331210192%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.678343949044585%"),
    top: hp("92.62295081967213%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_1112: {
    width: wp("1.3535031847133758%"),
    minWidth: wp("1.3535031847133758%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.802547770700638%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_6_1112: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_6_1111: {
    width: wp("0.7165605095541402%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.449044585987261%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_6_1111: {
    color: "rgba(176, 186, 201, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_6_1137: {
    width: wp("2.547770700636943%"),
    minWidth: wp("2.547770700636943%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.79299363057325%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_1138: {
    width: wp("2.547770700636943%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_1139: {
    flexGrow: 1,
    width: wp("2.547770700636943%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_1140: {
    width: wp("2.547770700636943%"),
    height: hp("4.371584699453552%"),
    top: hp("-0.0003126801037325322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_1141: {
    flexGrow: 1,
    width: wp("4.45859872611465%"),
    height: hp("7.650565058807206%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.9554140127388564%"),
    top: hp("-1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_6_1142: {
    flexGrow: 1,
    width: wp("2.547770700636943%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388564%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(95, 216, 85, 1)"
  },
  ImageBackground_6_1151: {
    width: wp("0.9554139368093697%"),
    height: hp("1.6393441320117053%"),
    top: hp("5.191256830601091%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.025477707006374%")
  },
  ImageBackground_6_1155: {
    width: wp("0.9554139368093697%"),
    height: hp("1.6393441320117053%"),
    top: hp("5.191256830601091%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4777070063694282%")
  },
  ImageBackground_6_1143: {
    width: wp("0.9554139368093697%"),
    height: hp("1.6393441320117053%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.025477707006374%")
  },
  ImageBackground_6_1147: {
    width: wp("0.9554139368093697%"),
    height: hp("1.6393441320117053%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4777070063694282%")
  },
  ImageBackground_6_1159: {
    width: wp("1.4331210191082804%"),
    height: hp("2.459016393442623%"),
    top: hp("0.9562841530054698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5573248407643305%")
  },
  View_6_1113: {
    width: wp("2.547770700636943%"),
    minWidth: wp("2.547770700636943%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_1114: {
    width: wp("2.547770700636943%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_1115: {
    flexGrow: 1,
    width: wp("2.547770700636943%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_1116: {
    width: wp("2.547770700636943%"),
    height: hp("4.371584699453552%"),
    top: hp("-0.0003126801037325322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_1117: {
    flexGrow: 1,
    width: wp("4.45859872611465%"),
    height: hp("7.650565058807206%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.9554140127388528%"),
    top: hp("-1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_6_1118: {
    flexGrow: 1,
    width: wp("2.547770700636943%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388528%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(95, 216, 85, 1)"
  },
  ImageBackground_6_1127: {
    width: wp("0.9554139368093697%"),
    height: hp("1.6393441320117053%"),
    top: hp("5.191256830601091%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0254777070063703%")
  },
  ImageBackground_6_1131: {
    width: wp("0.9554139368093697%"),
    height: hp("1.6393441320117053%"),
    top: hp("5.191256830601091%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4777070063694264%")
  },
  ImageBackground_6_1119: {
    width: wp("0.9554139368093697%"),
    height: hp("1.6393441320117053%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0254777070063703%")
  },
  ImageBackground_6_1123: {
    width: wp("0.9554139368093697%"),
    height: hp("1.6393441320117053%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4777070063694264%")
  },
  ImageBackground_6_1135: {
    width: wp("1.4331210191082804%"),
    height: hp("2.459016393442623%"),
    top: hp("0.9562841530054698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5573248407643323%")
  },
  View_6_1161: {
    width: wp("2.627388535031847%"),
    minWidth: wp("2.627388535031847%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1847133757961785%"),
    top: hp("-3.1420765027322375%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_6_1162: {
    flexGrow: 1,
    width: wp("2.627388535031847%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1420765027322375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_6_1163: {
    width: wp("2.627388535031847%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_6_1165: {
    width: wp("2.627388535031847%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_1166: {
    flexGrow: 1,
    width: wp("0.7165605095541402%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388546%"),
    top: hp("3.961748633879793%"),
    justifyContent: "flex-start"
  },
  Text_6_1166: {
    color: "rgba(48, 79, 254, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_9_2603: {
    width: wp("7.484076433121019%"),
    height: hp("6.557377049180328%"),
    top: hp("80.60109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.73248407643312%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I9_2603_9_1580: {
    flexGrow: 1,
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.617834394904463%"),
    top: hp("1.639344262295083%")
  },
  View_9_2604: {
    width: wp("12.261146496815286%"),
    minWidth: wp("12.261146496815286%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.51114649681529%"),
    top: hp("80.60109289617486%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I9_2604_9_1585: {
    flexGrow: 1,
    width: wp("12.261146496815286%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I9_2604_9_1586: {
    width: wp("12.261146496815286%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I9_2604_9_1587: {
    flexGrow: 1,
    width: wp("12.261146496815286%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.420765027322403%"),
    backgroundColor: "rgba(223, 226, 233, 1)"
  },
  View_I9_2604_9_1591: {
    flexGrow: 1,
    width: wp("10.35031847133758%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388564%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "center"
  },
  Text_I9_2604_9_1591: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_9_2610: {
    width: wp("11.703821656050955%"),
    height: hp("6.557377049180328%"),
    top: hp("80.60109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.80732484076433%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_2610_31_5306: {
    flexGrow: 1,
    width: wp("9.713375796178344%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388493%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_2610_31_5306_31_5139: {
    flexGrow: 1,
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I9_2610_31_5306_31_5140: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  ImageBackground_I9_2610_31_5306_31_5141: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I9_2610_31_5306_31_5142: {
    flexGrow: 1,
    width: wp("6.8471337579617835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.866242038216562%"),
    top: hp("0.2732240437158566%"),
    justifyContent: "flex-start"
  },
  Text_I9_2610_31_5306_31_5142: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_9_2609: {
    width: wp("11.703821656050955%"),
    height: hp("6.557377049180328%"),
    top: hp("80.60109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.103503184713375%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_2609_9_1886: {
    flexGrow: 1,
    width: wp("4.538216560509554%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388564%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_2609_9_1886_9_1884: {
    flexGrow: 1,
    width: wp("2.627388535031847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388564%"),
    top: hp("0.2732240437158566%"),
    justifyContent: "flex-start"
  },
  Text_I9_2609_9_1886_9_1884: {
    color: "rgba(69, 77, 89, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_31_5688: {
    width: wp("9.474522292993631%"),
    height: hp("6.557377049180328%"),
    top: hp("80.60109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.503184713375795%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I31_5688_9_1841: {
    flexGrow: 1,
    width: wp("5.414012738853503%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0302547770700627%"),
    top: hp("1.9125683060109395%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I31_5688_9_1841_31_5107: {
    flexGrow: 1,
    width: wp("3.5031847133757963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.95541401273886%"),
    top: hp("0.1366120218579141%"),
    justifyContent: "flex-start"
  },
  Text_I31_5688_9_1841_31_5107: {
    color: "rgba(219, 48, 63, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_31_3663: {
    width: wp("7.165605095541401%"),
    minWidth: wp("7.165605095541401%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.93789808917197%"),
    top: hp("80.60109289617486%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I31_3663_9_1599: {
    flexGrow: 1,
    width: wp("2.547770700636943%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388493%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "center"
  },
  Text_I31_3663_9_1599: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_31_3651: {
    width: wp("12.818471337579618%"),
    minWidth: wp("12.818471337579618%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.684713375796179%"),
    top: hp("80.60109289617486%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I31_3651_9_1599: {
    flexGrow: 1,
    width: wp("2.1496815286624202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388528%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "center"
  },
  Text_I31_3651_9_1599: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_9_2606: {
    width: wp("3.821656050955414%"),
    minWidth: wp("3.821656050955414%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.863057324840764%"),
    top: hp("80.60109289617486%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_2606_9_1607: {
    flexGrow: 1,
    width: wp("3.1847133757961785%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3184713375796182%"),
    top: hp("0.546448087431699%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I9_2606_9_1608: {
    width: wp("5.955414255713202%"),
    height: hp("5.737704918032787%"),
    top: hp("-0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_9_2607: {
    width: wp("3.821656050955414%"),
    minWidth: wp("3.821656050955414%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.04140127388535%"),
    top: hp("80.60109289617486%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_2607_9_1648: {
    flexGrow: 1,
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388528%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_2607_9_1649: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I9_2607_9_1650: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I9_2607_9_1651: {
    width: wp("1.4331210191082804%"),
    height: hp("2.459016393442623%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2388535031847141%")
  },
  View_9_2464: {
    width: wp("7.484076433121019%"),
    height: hp("6.557377049180328%"),
    top: hp("74.04371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.73248407643312%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I9_2464_9_1580: {
    flexGrow: 1,
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.617834394904463%"),
    top: hp("1.6393442622950687%")
  },
  View_9_2465: {
    width: wp("12.261146496815286%"),
    minWidth: wp("12.261146496815286%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.51114649681529%"),
    top: hp("74.04371584699454%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I9_2465_9_1585: {
    flexGrow: 1,
    width: wp("12.261146496815286%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I9_2465_9_1586: {
    width: wp("12.261146496815286%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I9_2465_9_1587: {
    flexGrow: 1,
    width: wp("12.261146496815286%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.420765027322389%"),
    backgroundColor: "rgba(223, 226, 233, 1)"
  },
  View_I9_2465_9_1591: {
    flexGrow: 1,
    width: wp("10.35031847133758%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388564%"),
    top: hp("1.912568306010911%"),
    justifyContent: "center"
  },
  Text_I9_2465_9_1591: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_9_2471: {
    width: wp("11.703821656050955%"),
    height: hp("6.557377049180328%"),
    top: hp("74.04371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.80732484076433%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_2471_31_5306: {
    flexGrow: 1,
    width: wp("8.837579617834395%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388493%"),
    top: hp("1.6393442622950687%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_2471_31_5306_31_5139: {
    flexGrow: 1,
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I9_2471_31_5306_31_5140: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  ImageBackground_I9_2471_31_5306_31_5141: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I9_2471_31_5306_31_5142: {
    flexGrow: 1,
    width: wp("5.971337579617835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.866242038216562%"),
    top: hp("0.2732240437158424%"),
    justifyContent: "flex-start"
  },
  Text_I9_2471_31_5306_31_5142: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_9_2470: {
    width: wp("11.703821656050955%"),
    height: hp("6.557377049180328%"),
    top: hp("74.04371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.103503184713375%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_2470_9_1886: {
    flexGrow: 1,
    width: wp("4.538216560509554%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388564%"),
    top: hp("1.6393442622950687%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_2470_9_1886_9_1884: {
    flexGrow: 1,
    width: wp("2.627388535031847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388564%"),
    top: hp("0.2732240437158424%"),
    justifyContent: "flex-start"
  },
  Text_I9_2470_9_1886_9_1884: {
    color: "rgba(69, 77, 89, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_31_5685: {
    width: wp("9.474522292993631%"),
    height: hp("6.557377049180328%"),
    top: hp("74.04371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.503184713375795%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I31_5685_9_1841: {
    flexGrow: 1,
    width: wp("5.812101910828026%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.831210191082807%"),
    top: hp("1.912568306010911%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I31_5685_9_1841_31_5109: {
    flexGrow: 1,
    width: wp("3.901273885350318%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388528%"),
    top: hp("0.1366120218579283%"),
    justifyContent: "flex-start"
  },
  Text_I31_5685_9_1841_31_5109: {
    color: "rgba(219, 140, 40, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_31_3662: {
    width: wp("7.165605095541401%"),
    minWidth: wp("7.165605095541401%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.93789808917197%"),
    top: hp("74.04371584699454%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I31_3662_9_1599: {
    flexGrow: 1,
    width: wp("3.1847133757961785%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388493%"),
    top: hp("1.912568306010911%"),
    justifyContent: "center"
  },
  Text_I31_3662_9_1599: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_31_3650: {
    width: wp("12.818471337579618%"),
    minWidth: wp("12.818471337579618%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.684713375796179%"),
    top: hp("74.04371584699454%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I31_3650_9_1599: {
    flexGrow: 1,
    width: wp("5.573248407643312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388528%"),
    top: hp("1.912568306010911%"),
    justifyContent: "center"
  },
  Text_I31_3650_9_1599: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_9_2467: {
    width: wp("3.821656050955414%"),
    minWidth: wp("3.821656050955414%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.863057324840764%"),
    top: hp("74.04371584699454%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_2467_9_1607: {
    flexGrow: 1,
    width: wp("3.1847133757961785%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3184713375796182%"),
    top: hp("0.5464480874316848%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I9_2467_9_1608: {
    width: wp("5.955414255713202%"),
    height: hp("5.737704918032787%"),
    top: hp("-0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_9_2468: {
    width: wp("3.821656050955414%"),
    minWidth: wp("3.821656050955414%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.04140127388535%"),
    top: hp("74.04371584699454%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_2468_9_1648: {
    flexGrow: 1,
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388528%"),
    top: hp("1.6393442622950687%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_2468_9_1649: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I9_2468_9_1650: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I9_2468_9_1651: {
    width: wp("1.4331210191082804%"),
    height: hp("2.459016393442623%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2388535031847141%")
  },
  View_9_2325: {
    width: wp("7.484076433121019%"),
    height: hp("6.557377049180328%"),
    top: hp("67.4863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.73248407643312%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I9_2325_9_1580: {
    flexGrow: 1,
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.617834394904463%"),
    top: hp("1.639344262295083%")
  },
  View_9_2326: {
    width: wp("12.261146496815286%"),
    minWidth: wp("12.261146496815286%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.51114649681529%"),
    top: hp("67.4863387978142%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I9_2326_9_1585: {
    flexGrow: 1,
    width: wp("12.261146496815286%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I9_2326_9_1586: {
    width: wp("12.261146496815286%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I9_2326_9_1587: {
    flexGrow: 1,
    width: wp("12.261146496815286%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.4207650273224175%"),
    backgroundColor: "rgba(223, 226, 233, 1)"
  },
  View_I9_2326_9_1591: {
    flexGrow: 1,
    width: wp("10.35031847133758%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388564%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "center"
  },
  Text_I9_2326_9_1591: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_9_2332: {
    width: wp("11.703821656050955%"),
    height: hp("6.557377049180328%"),
    top: hp("67.4863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.80732484076433%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_2332_31_5306: {
    flexGrow: 1,
    width: wp("10.589171974522294%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388493%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_2332_31_5306_31_5139: {
    flexGrow: 1,
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I9_2332_31_5306_31_5140: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  ImageBackground_I9_2332_31_5306_31_5141: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I9_2332_31_5306_31_5142: {
    flexGrow: 1,
    width: wp("7.722929936305732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.866242038216562%"),
    top: hp("0.2732240437158566%"),
    justifyContent: "flex-start"
  },
  Text_I9_2332_31_5306_31_5142: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_9_2331: {
    width: wp("11.703821656050955%"),
    height: hp("6.557377049180328%"),
    top: hp("67.4863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.103503184713375%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_2331_9_1886: {
    flexGrow: 1,
    width: wp("4.538216560509554%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388564%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_2331_9_1886_9_1884: {
    flexGrow: 1,
    width: wp("2.627388535031847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388564%"),
    top: hp("0.2732240437158566%"),
    justifyContent: "flex-start"
  },
  Text_I9_2331_9_1886_9_1884: {
    color: "rgba(69, 77, 89, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_31_5682: {
    width: wp("9.474522292993631%"),
    height: hp("6.557377049180328%"),
    top: hp("67.4863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.503184713375795%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I31_5682_9_1841: {
    flexGrow: 1,
    width: wp("5.414012738853503%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0302547770700627%"),
    top: hp("1.9125683060109395%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I31_5682_9_1841_31_5107: {
    flexGrow: 1,
    width: wp("3.5031847133757963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.95541401273886%"),
    top: hp("0.1366120218579283%"),
    justifyContent: "flex-start"
  },
  Text_I31_5682_9_1841_31_5107: {
    color: "rgba(219, 48, 63, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_31_3661: {
    width: wp("7.165605095541401%"),
    minWidth: wp("7.165605095541401%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.93789808917197%"),
    top: hp("67.4863387978142%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I31_3661_9_1599: {
    flexGrow: 1,
    width: wp("2.0700636942675157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388493%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "center"
  },
  Text_I31_3661_9_1599: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_31_3649: {
    width: wp("12.818471337579618%"),
    minWidth: wp("12.818471337579618%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.684713375796179%"),
    top: hp("67.4863387978142%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I31_3649_9_1599: {
    flexGrow: 1,
    width: wp("8.678343949044585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388528%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "center"
  },
  Text_I31_3649_9_1599: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_9_2328: {
    width: wp("3.821656050955414%"),
    minWidth: wp("3.821656050955414%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.863057324840764%"),
    top: hp("67.4863387978142%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_2328_9_1607: {
    flexGrow: 1,
    width: wp("3.1847133757961785%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3184713375796182%"),
    top: hp("0.546448087431699%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I9_2328_9_1608: {
    width: wp("5.955414255713202%"),
    height: hp("5.737704918032787%"),
    top: hp("-0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_9_2329: {
    width: wp("3.821656050955414%"),
    minWidth: wp("3.821656050955414%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.04140127388535%"),
    top: hp("67.4863387978142%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_2329_9_1648: {
    flexGrow: 1,
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388528%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_2329_9_1649: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I9_2329_9_1650: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I9_2329_9_1651: {
    width: wp("1.4331210191082804%"),
    height: hp("2.459016393442623%"),
    top: hp("0.40983606557378494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2388535031847141%")
  },
  View_9_2186: {
    width: wp("7.484076433121019%"),
    height: hp("6.557377049180328%"),
    top: hp("60.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.73248407643312%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I9_2186_9_1580: {
    flexGrow: 1,
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.617834394904463%"),
    top: hp("1.639344262295083%")
  },
  View_9_2187: {
    width: wp("12.261146496815286%"),
    minWidth: wp("12.261146496815286%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.51114649681529%"),
    top: hp("60.92896174863388%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I9_2187_9_1585: {
    flexGrow: 1,
    width: wp("12.261146496815286%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I9_2187_9_1586: {
    width: wp("12.261146496815286%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I9_2187_9_1587: {
    flexGrow: 1,
    width: wp("12.261146496815286%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.420765027322403%"),
    backgroundColor: "rgba(223, 226, 233, 1)"
  },
  View_I9_2187_9_1591: {
    flexGrow: 1,
    width: wp("10.35031847133758%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388564%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "center"
  },
  Text_I9_2187_9_1591: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_9_2193: {
    width: wp("11.703821656050955%"),
    height: hp("6.557377049180328%"),
    top: hp("60.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.80732484076433%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_2193_31_5306: {
    flexGrow: 1,
    width: wp("10.429936305732484%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388493%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_2193_31_5306_31_5139: {
    flexGrow: 1,
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I9_2193_31_5306_31_5140: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  ImageBackground_I9_2193_31_5306_31_5141: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I9_2193_31_5306_31_5142: {
    flexGrow: 1,
    width: wp("7.563694267515923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.866242038216562%"),
    top: hp("0.2732240437158495%"),
    justifyContent: "flex-start"
  },
  Text_I9_2193_31_5306_31_5142: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_9_2192: {
    width: wp("11.703821656050955%"),
    height: hp("6.557377049180328%"),
    top: hp("60.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.103503184713375%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_2192_9_1886: {
    flexGrow: 1,
    width: wp("4.538216560509554%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388564%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_2192_9_1886_9_1884: {
    flexGrow: 1,
    width: wp("2.627388535031847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388564%"),
    top: hp("0.2732240437158495%"),
    justifyContent: "flex-start"
  },
  Text_I9_2192_9_1886_9_1884: {
    color: "rgba(69, 77, 89, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_31_5679: {
    width: wp("9.474522292993631%"),
    height: hp("6.557377049180328%"),
    top: hp("60.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.503184713375795%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I31_5679_9_1841: {
    flexGrow: 1,
    width: wp("5.812101910828026%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.831210191082807%"),
    top: hp("1.9125683060109324%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I31_5679_9_1841_31_5109: {
    flexGrow: 1,
    width: wp("3.901273885350318%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388528%"),
    top: hp("0.1366120218579141%"),
    justifyContent: "flex-start"
  },
  Text_I31_5679_9_1841_31_5109: {
    color: "rgba(219, 140, 40, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_31_3660: {
    width: wp("7.165605095541401%"),
    minWidth: wp("7.165605095541401%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.93789808917197%"),
    top: hp("60.92896174863388%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I31_3660_9_1599: {
    flexGrow: 1,
    width: wp("3.1847133757961785%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388493%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "center"
  },
  Text_I31_3660_9_1599: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_31_3648: {
    width: wp("12.818471337579618%"),
    minWidth: wp("12.818471337579618%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.684713375796179%"),
    top: hp("60.92896174863388%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I31_3648_9_1599: {
    flexGrow: 1,
    width: wp("5.334394904458599%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388528%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "center"
  },
  Text_I31_3648_9_1599: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_9_2189: {
    width: wp("3.821656050955414%"),
    minWidth: wp("3.821656050955414%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.863057324840764%"),
    top: hp("60.92896174863388%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_2189_9_1607: {
    flexGrow: 1,
    width: wp("3.1847133757961785%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3184713375796182%"),
    top: hp("0.5464480874316919%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I9_2189_9_1608: {
    width: wp("5.955414255713202%"),
    height: hp("5.737704918032787%"),
    top: hp("-0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_9_2190: {
    width: wp("3.821656050955414%"),
    minWidth: wp("3.821656050955414%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.04140127388535%"),
    top: hp("60.92896174863388%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_2190_9_1648: {
    flexGrow: 1,
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388528%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_2190_9_1649: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I9_2190_9_1650: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I9_2190_9_1651: {
    width: wp("1.4331210191082804%"),
    height: hp("2.459016393442623%"),
    top: hp("0.4098360655737636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2388535031847141%")
  },
  View_9_2047: {
    width: wp("7.484076433121019%"),
    height: hp("6.557377049180328%"),
    top: hp("54.37158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.73248407643312%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I9_2047_9_1580: {
    flexGrow: 1,
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.617834394904463%"),
    top: hp("1.6393442622950758%")
  },
  View_9_2048: {
    width: wp("12.261146496815286%"),
    minWidth: wp("12.261146496815286%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.51114649681529%"),
    top: hp("54.37158469945356%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I9_2048_9_1585: {
    flexGrow: 1,
    width: wp("12.261146496815286%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I9_2048_9_1586: {
    width: wp("12.261146496815286%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I9_2048_9_1587: {
    flexGrow: 1,
    width: wp("12.261146496815286%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.420765027322396%"),
    backgroundColor: "rgba(223, 226, 233, 1)"
  },
  View_I9_2048_9_1591: {
    flexGrow: 1,
    width: wp("10.35031847133758%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388564%"),
    top: hp("1.9125683060109182%"),
    justifyContent: "center"
  },
  Text_I9_2048_9_1591: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_9_2054: {
    width: wp("11.703821656050955%"),
    height: hp("6.557377049180328%"),
    top: hp("54.37158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.80732484076433%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_2054_31_5306: {
    flexGrow: 1,
    width: wp("10.270700636942676%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388493%"),
    top: hp("1.6393442622950758%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_2054_31_5306_31_5139: {
    flexGrow: 1,
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I9_2054_31_5306_31_5140: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  ImageBackground_I9_2054_31_5306_31_5141: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I9_2054_31_5306_31_5142: {
    flexGrow: 1,
    width: wp("7.404458598726114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.866242038216562%"),
    top: hp("0.2732240437158424%"),
    justifyContent: "flex-start"
  },
  Text_I9_2054_31_5306_31_5142: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_9_2053: {
    width: wp("11.703821656050955%"),
    height: hp("6.557377049180328%"),
    top: hp("54.37158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.103503184713375%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_2053_9_1886: {
    flexGrow: 1,
    width: wp("4.538216560509554%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388564%"),
    top: hp("1.6393442622950758%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_2053_9_1886_9_1884: {
    flexGrow: 1,
    width: wp("2.627388535031847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388564%"),
    top: hp("0.2732240437158424%"),
    justifyContent: "flex-start"
  },
  Text_I9_2053_9_1886_9_1884: {
    color: "rgba(69, 77, 89, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_31_5676: {
    width: wp("9.474522292993631%"),
    height: hp("6.557377049180328%"),
    top: hp("54.37158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.503184713375795%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I31_5676_9_1841: {
    flexGrow: 1,
    width: wp("5.414012738853503%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0302547770700627%"),
    top: hp("1.9125683060109182%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I31_5676_9_1841_31_5107: {
    flexGrow: 1,
    width: wp("3.5031847133757963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.95541401273886%"),
    top: hp("0.1366120218579283%"),
    justifyContent: "flex-start"
  },
  Text_I31_5676_9_1841_31_5107: {
    color: "rgba(219, 48, 63, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_31_3659: {
    width: wp("7.165605095541401%"),
    minWidth: wp("7.165605095541401%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.93789808917197%"),
    top: hp("54.37158469945356%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I31_3659_9_1599: {
    flexGrow: 1,
    width: wp("2.0700636942675157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388493%"),
    top: hp("1.9125683060109182%"),
    justifyContent: "center"
  },
  Text_I31_3659_9_1599: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_31_3647: {
    width: wp("12.818471337579618%"),
    minWidth: wp("12.818471337579618%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.684713375796179%"),
    top: hp("54.37158469945356%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I31_3647_9_1599: {
    flexGrow: 1,
    width: wp("10.191082802547772%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388528%"),
    top: hp("1.9125683060109182%"),
    justifyContent: "center"
  },
  Text_I31_3647_9_1599: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_9_2050: {
    width: wp("3.821656050955414%"),
    minWidth: wp("3.821656050955414%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.863057324840764%"),
    top: hp("54.37158469945356%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_2050_9_1607: {
    flexGrow: 1,
    width: wp("3.1847133757961785%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3184713375796182%"),
    top: hp("0.5464480874316919%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I9_2050_9_1608: {
    width: wp("5.955414255713202%"),
    height: hp("5.737704918032787%"),
    top: hp("-0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_9_2051: {
    width: wp("3.821656050955414%"),
    minWidth: wp("3.821656050955414%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.04140127388535%"),
    top: hp("54.37158469945356%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_2051_9_1648: {
    flexGrow: 1,
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388528%"),
    top: hp("1.6393442622950758%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_2051_9_1649: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I9_2051_9_1650: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I9_2051_9_1651: {
    width: wp("1.4331210191082804%"),
    height: hp("2.459016393442623%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2388535031847141%")
  },
  View_9_1908: {
    width: wp("7.484076433121019%"),
    height: hp("6.557377049180328%"),
    top: hp("47.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.73248407643312%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I9_1908_9_1580: {
    flexGrow: 1,
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.617834394904463%"),
    top: hp("1.63934426229509%")
  },
  View_9_1909: {
    width: wp("12.261146496815286%"),
    minWidth: wp("12.261146496815286%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.51114649681529%"),
    top: hp("47.81420765027322%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I9_1909_9_1585: {
    flexGrow: 1,
    width: wp("12.261146496815286%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I9_1909_9_1586: {
    width: wp("12.261146496815286%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I9_1909_9_1587: {
    flexGrow: 1,
    width: wp("12.261146496815286%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.42076502732241%"),
    backgroundColor: "rgba(223, 226, 233, 1)"
  },
  View_I9_1909_9_1591: {
    flexGrow: 1,
    width: wp("10.35031847133758%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388564%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "center"
  },
  Text_I9_1909_9_1591: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_9_1915: {
    width: wp("11.703821656050955%"),
    height: hp("6.557377049180328%"),
    top: hp("47.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.80732484076433%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_1915_31_5306: {
    flexGrow: 1,
    width: wp("8.996815286624203%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388493%"),
    top: hp("1.63934426229509%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_1915_31_5306_31_5139: {
    flexGrow: 1,
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I9_1915_31_5306_31_5140: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  ImageBackground_I9_1915_31_5306_31_5141: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I9_1915_31_5306_31_5142: {
    flexGrow: 1,
    width: wp("6.130573248407643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.866242038216562%"),
    top: hp("0.2732240437158424%"),
    justifyContent: "flex-start"
  },
  Text_I9_1915_31_5306_31_5142: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_9_1914: {
    width: wp("11.703821656050955%"),
    height: hp("6.557377049180328%"),
    top: hp("47.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.103503184713375%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_1914_9_1886: {
    flexGrow: 1,
    width: wp("4.538216560509554%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388564%"),
    top: hp("1.63934426229509%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_1914_9_1886_9_1884: {
    flexGrow: 1,
    width: wp("2.627388535031847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388564%"),
    top: hp("0.2732240437158424%"),
    justifyContent: "flex-start"
  },
  Text_I9_1914_9_1886_9_1884: {
    color: "rgba(69, 77, 89, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_9_1913: {
    width: wp("9.474522292993631%"),
    height: hp("6.557377049180328%"),
    top: hp("47.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.503184713375795%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_1913_9_1841: {
    flexGrow: 1,
    width: wp("4.777070063694268%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.348726114649679%"),
    top: hp("1.9125683060109324%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_1913_9_1841_9_1753: {
    flexGrow: 1,
    width: wp("2.8662420382165608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.95541401273886%"),
    top: hp("0.1366120218579283%"),
    justifyContent: "flex-start"
  },
  Text_I9_1913_9_1841_9_1753: {
    color: "rgba(127, 192, 8, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_31_3658: {
    width: wp("7.165605095541401%"),
    minWidth: wp("7.165605095541401%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.93789808917197%"),
    top: hp("47.81420765027322%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I31_3658_9_1599: {
    flexGrow: 1,
    width: wp("3.1847133757961785%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388493%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "center"
  },
  Text_I31_3658_9_1599: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_31_3646: {
    width: wp("12.818471337579618%"),
    minWidth: wp("12.818471337579618%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.684713375796179%"),
    top: hp("47.81420765027322%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I31_3646_9_1599: {
    flexGrow: 1,
    width: wp("7.085987261146497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388528%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "center"
  },
  Text_I31_3646_9_1599: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_9_1911: {
    width: wp("3.821656050955414%"),
    minWidth: wp("3.821656050955414%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.863057324840764%"),
    top: hp("47.81420765027322%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_1911_9_1607: {
    flexGrow: 1,
    width: wp("3.1847133757961785%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3184713375796182%"),
    top: hp("0.546448087431699%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I9_1911_9_1608: {
    width: wp("5.955414255713202%"),
    height: hp("5.737704918032787%"),
    top: hp("-0.2732240437158495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_9_1912: {
    width: wp("3.821656050955414%"),
    minWidth: wp("3.821656050955414%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.04140127388535%"),
    top: hp("47.81420765027322%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_1912_9_1648: {
    flexGrow: 1,
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388528%"),
    top: hp("1.63934426229509%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_1912_9_1649: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I9_1912_9_1650: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I9_1912_9_1651: {
    width: wp("1.4331210191082804%"),
    height: hp("2.459016393442623%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2388535031847141%")
  },
  View_9_1385: {
    width: wp("7.563694267515923%"),
    height: hp("8.743169398907105%"),
    top: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.69267515923568%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I9_1385_31_2228: {
    flexGrow: 1,
    width: wp("3.5031847133757963%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388422%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_1385_6_1345: {
    width: wp("3.5031847133757963%"),
    minWidth: wp("3.5031847133757963%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I9_1385_6_1345: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I9_1385_31_2207: {
    flexGrow: 1,
    width: wp("3.662420382165605%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388422%"),
    top: hp("4.644808743169399%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_9_1369: {
    width: wp("11.703821656050955%"),
    height: hp("8.743169398907105%"),
    top: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.847133757961785%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I9_1369_31_2228: {
    flexGrow: 1,
    width: wp("4.219745222929936%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388564%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_1369_6_1345: {
    width: wp("4.219745222929936%"),
    minWidth: wp("4.219745222929936%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I9_1369_6_1345: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I9_1369_31_2207: {
    flexGrow: 1,
    width: wp("3.662420382165605%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388564%"),
    top: hp("4.644808743169399%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_1369_6_1346: {
    width: wp("3.662420382165605%"),
    minWidth: wp("3.662420382165605%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I9_1369_6_1346: {
    color: "rgba(201, 207, 218, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_9_1352: {
    width: wp("12.181528662420382%"),
    height: hp("8.743169398907105%"),
    top: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.51114649681529%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I9_1352_31_2804: {
    flexGrow: 1,
    width: wp("7.802547770700636%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388564%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_1352_6_1684: {
    flexGrow: 1,
    width: wp("5.254777070063694%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I9_1352_6_1684: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I9_1352_6_1688: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.891719745222929%")
  },
  View_I9_1352_31_2749: {
    flexGrow: 1,
    width: wp("6.289808917197452%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388564%"),
    top: hp("4.644808743169399%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_1352_6_1685: {
    flexGrow: 1,
    width: wp("3.821656050955414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%"),
    justifyContent: "center"
  },
  Text_I9_1352_6_1685: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_I9_1352_6_1686: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.378980891719749%")
  },
  View_9_1361: {
    width: wp("11.305732484076433%"),
    height: hp("8.743169398907105%"),
    top: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.54140127388535%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I9_1361_31_2228: {
    flexGrow: 1,
    width: wp("2.229299363057325%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388564%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_1361_6_1345: {
    width: wp("2.229299363057325%"),
    minWidth: wp("2.229299363057325%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I9_1361_6_1345: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I9_1361_31_2207: {
    flexGrow: 1,
    width: wp("3.662420382165605%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388564%"),
    top: hp("4.644808743169399%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_1361_6_1346: {
    width: wp("3.662420382165605%"),
    minWidth: wp("3.662420382165605%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I9_1361_6_1346: {
    color: "rgba(201, 207, 218, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_9_15507: {
    width: wp("7.563694267515923%"),
    height: hp("8.743169398907105%"),
    top: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.97770700636943%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I9_15507_31_2804: {
    flexGrow: 1,
    width: wp("5.17515923566879%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388493%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_15507_6_1684: {
    flexGrow: 1,
    width: wp("2.627388535031847%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I9_15507_6_1684: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I9_15507_6_1688: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.264331210191088%")
  },
  View_I9_15507_31_2749: {
    flexGrow: 1,
    width: wp("6.289808917197452%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388493%"),
    top: hp("4.644808743169399%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_15507_6_1685: {
    flexGrow: 1,
    width: wp("3.821656050955414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%"),
    justifyContent: "center"
  },
  Text_I9_15507_6_1685: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_I9_15507_6_1686: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.378980891719749%")
  },
  View_9_1287: {
    width: wp("9.474522292993631%"),
    height: hp("8.743169398907105%"),
    top: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.503184713375795%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I9_1287_31_2804: {
    flexGrow: 1,
    width: wp("5.971337579617835%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388528%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_1287_6_1684: {
    flexGrow: 1,
    width: wp("3.4235668789808917%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I9_1287_6_1684: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I9_1287_6_1688: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.060509554140129%")
  },
  View_I9_1287_31_2749: {
    flexGrow: 1,
    width: wp("6.289808917197452%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388528%"),
    top: hp("4.644808743169399%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_1287_6_1685: {
    flexGrow: 1,
    width: wp("3.821656050955414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%"),
    justifyContent: "center"
  },
  Text_I9_1287_6_1685: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_I9_1287_6_1686: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3789808917197455%")
  },
  View_9_1285: {
    width: wp("16.64012738853503%"),
    height: hp("8.743169398907105%"),
    top: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.863057324840764%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I9_1285_31_2228: {
    flexGrow: 1,
    width: wp("5.17515923566879%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388546%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_1285_6_1345: {
    width: wp("5.17515923566879%"),
    minWidth: wp("5.17515923566879%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I9_1285_6_1345: {
    color: "rgba(0, 7, 43, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I9_1285_31_2207: {
    flexGrow: 1,
    width: wp("3.662420382165605%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388546%"),
    top: hp("4.644808743169399%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_1285_6_1346: {
    width: wp("3.662420382165605%"),
    minWidth: wp("3.662420382165605%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I9_1285_6_1346: {
    color: "rgba(201, 207, 218, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_9_1286: {
    width: wp("3.821656050955414%"),
    height: hp("8.743169398907105%"),
    top: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.04140127388535%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_1286_8_1167: {
    flexGrow: 1,
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9554140127388528%"),
    top: hp("2.732240437158474%")
  },
  View_I9_1286_8_1168: {
    width: wp("1.910828025477707%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I9_1286_8_1169: {
    width: wp("1.4331210191082804%"),
    height: hp("2.459016393442623%"),
    top: hp("0.4098360655737636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2388535031847141%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
