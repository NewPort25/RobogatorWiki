// Account json
var ARTICLES;

// Fulltext search 
var FUSE;

// Main height
var HEIGHT;
var SCROLL;

// Code colors
const COLORCODEBG = "#ffffff"; //"#0e1111";
const COLORDEFAULT = "#F4FDFF";
const COLORCSHARP = "#FCB900";
const COLORPOWERSHELL = "#8ED1FC";

var DESCRIPTION = false;

const MAXSEARCHCOUNT = 10;

const pathToArticles = "load/articles.js";
const pathToArticleImages = "load/images/";

const licenseStandard = "Beginners & Masters";
const licenseExecutive = "For Masters only";

const searchPlaceholder = "Search wiki";
const newestPlaceholder = "Newest available wiki article";
const searchByTagsPlaceholder = "Search by topic";
const backPlaceholder ="Back to wiki";
const backMorePlaceholder ="See more available wiki articles";
const foundByTagPlaceholder = "All wiki articles with topic ";
const foundNothingPlaceholder = "Nothing found in the wiki that matches your search phrase. Please try modifying your search phrase, hopefully this will help.";
const startTypingPlaceholder = "What are you looking for...";

const cleanUrl = window.location.origin + window.location.pathname;

// SVG
function svgLogoExecutive(color,width,height){
    return '<?xml version="1.0" encoding="UTF-8" standalone="no"?><!-- Created with Inkscape (http://www.inkscape.org/) --><svg   width="' + width + '"   height="' + height + '"   viewBox="0 0 77.584267 77.584267"   version="1.1"   id="svg11446"   sodipodi:docname="Robogator logo executive clean.svg"   inkscape:version="1.1.1 (3bf5ae0d25, 2021-09-20)"   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"   xmlns:xlink="http://www.w3.org/1999/xlink"   xmlns="http://www.w3.org/2000/svg"   xmlns:svg="http://www.w3.org/2000/svg">  <sodipodi:namedview     id="namedview11448"     pagecolor="#ffffff"     bordercolor="#666666"     borderopacity="1.0"     inkscape:pageshadow="2"     inkscape:pageopacity="0.0"     inkscape:pagecheckerboard="0"     inkscape:document-units="mm"     showgrid="false"     fit-margin-top="0"     fit-margin-left="0"     fit-margin-right="0"     fit-margin-bottom="0"     inkscape:zoom="4.0000001"     inkscape:cx="85.624998"     inkscape:cy="70.624998"     inkscape:window-width="1920"     inkscape:window-height="1111"     inkscape:window-x="-9"     inkscape:window-y="-9"     inkscape:window-maximized="1"     inkscape:current-layer="layer1" />  <defs     id="defs11443">    <linearGradient       inkscape:collect="always"       id="linearGradient1301">      <stop         style="stop-color:#000000;stop-opacity:1;"         offset="0"         id="stop1297" />      <stop         style="stop-color:#000000;stop-opacity:0;"         offset="1"         id="stop1299" />    </linearGradient>    <linearGradient       inkscape:collect="always"       id="linearGradient15780">      <stop         style="stop-color:#000000;stop-opacity:1;"         offset="0"         id="stop15776" />      <stop         style="stop-color:#000000;stop-opacity:0;"         offset="1"         id="stop15778" />    </linearGradient>    <linearGradient       inkscape:collect="always"       id="linearGradient15754">      <stop         style="stop-color:#000000;stop-opacity:1;"         offset="0"         id="stop15750" />      <stop         style="stop-color:#000000;stop-opacity:0;"         offset="1"         id="stop15752" />    </linearGradient>    <linearGradient       inkscape:collect="always"       id="linearGradient15648">      <stop         style="stop-color:#1a1a1a;stop-opacity:1;"         offset="0"         id="stop15644" />      <stop         style="stop-color:#1a1a1a;stop-opacity:0;"         offset="1"         id="stop15646" />    </linearGradient>    <linearGradient       inkscape:collect="always"       id="linearGradient15260">      <stop         style="stop-color:#000000;stop-opacity:1;"         offset="0"         id="stop15256" />      <stop         style="stop-color:#000000;stop-opacity:0;"         offset="1"         id="stop15258" />    </linearGradient>    <linearGradient       inkscape:collect="always"       id="linearGradient15233">      <stop         style="stop-color:#000000;stop-opacity:1;"         offset="0"         id="stop15229" />      <stop         style="stop-color:#000000;stop-opacity:0;"         offset="1"         id="stop15231" />    </linearGradient>    <linearGradient       inkscape:collect="always"       id="linearGradient14846">      <stop         style="stop-color:#000000;stop-opacity:1;"         offset="0"         id="stop14842" />      <stop         style="stop-color:#000000;stop-opacity:0;"         offset="1"         id="stop14844" />    </linearGradient>    <linearGradient       inkscape:collect="always"       id="linearGradient14699">      <stop         style="stop-color:#000000;stop-opacity:0.6"         offset="0"         id="stop14695" />      <stop         style="stop-color:#000000;stop-opacity:0;"         offset="1"         id="stop14697" />    </linearGradient>    <linearGradient       inkscape:collect="always"       id="linearGradient14420">      <stop         style="stop-color:#000000;stop-opacity:1;"         offset="0"         id="stop14416" />      <stop         style="stop-color:#000000;stop-opacity:0;"         offset="1"         id="stop14418" />    </linearGradient>    <linearGradient       inkscape:collect="always"       id="linearGradient13155">      <stop         style="stop-color:#333333;stop-opacity:1;"         offset="0"         id="stop13151" />      <stop         style="stop-color:#333333;stop-opacity:0;"         offset="1"         id="stop13153" />    </linearGradient>    <linearGradient       inkscape:collect="always"       id="linearGradient13052">      <stop         style="stop-color:#999999;stop-opacity:1;"         offset="0"         id="stop13048" />      <stop         style="stop-color:#999999;stop-opacity:0;"         offset="1"         id="stop13050" />    </linearGradient>    <linearGradient       inkscape:collect="always"       xlink:href="#SVGID_00000091000854627707922720000009781038660620578736_"       id="linearGradient11265"       x1="371.83179"       y1="343.67001"       x2="571.12"       y2="343.67001"       gradientUnits="userSpaceOnUse" />    <linearGradient       id="SVGID_00000091000854627707922720000009781038660620578736_"       gradientUnits="userSpaceOnUse"       x1="626.97357"       y1="374.2597"       x2="356.61349"       y2="216.8298">      <stop         offset="0"         style="stop-color:#156140"         id="stop148" />      <stop         offset="1"         style="stop-color:#14BA6A"         id="stop150" />    </linearGradient>    <clipPath       id="SVGID_00000177461585733685870330000006528038749306838958_">      <use         xlink:href="#SVGID_1_"         style="overflow:visible"         id="use7"         x="0"         y="0"         width="100%"         height="100%" />    </clipPath>    <clipPath       id="SVGID_00000140697861995181098320000000384905363011846583_"       style="stroke:url(#linearGradient11265)">      <use         xlink:href="#SVGID_00000019661357093030215730000002021134863187377562_"         style="overflow:visible;stroke:url(#linearGradient11265)"         id="use62"         x="0"         y="0"         width="100%"         height="100%" />    </clipPath>    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient10266"       id="linearGradient10268"       x1="396.50742"       y1="365.64999"       x2="541.97998"       y2="365.64999"       gradientUnits="userSpaceOnUse" />    <linearGradient       inkscape:collect="always"       id="linearGradient10266">      <stop         style="stop-color:#000000;stop-opacity:1;"         offset="0"         id="stop10262" />      <stop         style="stop-color:#000000;stop-opacity:0;"         offset="1"         id="stop10264" />    </linearGradient>    <clipPath       id="clipPath11379">      <use         xlink:href="#SVGID_1_"         style="overflow:visible"         id="use11377"         x="0"         y="0"         width="100%"         height="100%" />    </clipPath>    <mask       maskUnits="userSpaceOnUse"       x="396.5"       y="298.57"       width="145.48"       height="134.17"       id="SVGID_00000025442907986999820550000007097560835107214239_">      <g         style="filter:url(#Adobe_OpacityMaskFilter_00000143615908467236731810000012972321291253246900_)"         id="g331">        <linearGradient           id="SVGID_00000171694092343032096580000003101415339438394507_"           gradientUnits="userSpaceOnUse"           x1="-50.041801"           y1="573.41089"           x2="49.488201"           y2="546.74091"           gradientTransform="translate(396.5046,-174.8531)">          <stop             offset="0"             style="stop-color:#FFFFFF"             id="stop324" />          <stop             offset="1"             style="stop-color:#000000"             id="stop326" />        </linearGradient>        <rect           x="396.5"           y="298.57001"           style="fill:url(#SVGID_00000171694092343032096580000003101415339438394507_)"           width="145.48"           height="134.17"           clip-path="url(#SVGID_00000177461585733685870330000006528038749306838958_)"           id="rect329" />      </g>    </mask>    <filter       id="Adobe_OpacityMaskFilter_00000143615908467236731810000012972321291253246900_"       filterUnits="userSpaceOnUse"       x="396.5"       y="298.57001"       width="145.48"       height="134.17">      <feColorMatrix         type="matrix"         values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"         id="feColorMatrix319" />    </filter>    <linearGradient       id="linearGradient11393"       gradientUnits="userSpaceOnUse"       x1="-50.041801"       y1="573.41089"       x2="49.488201"       y2="546.74091"       gradientTransform="translate(396.5046,-174.8531)">      <stop         offset="0"         style="stop-color:#FFFFFF"         id="stop11389" />      <stop         offset="1"         style="stop-color:#000000"         id="stop11391" />    </linearGradient>    <clipPath       id="clipPath11397">      <use         xlink:href="#SVGID_1_"         style="overflow:visible"         id="use11395"         x="0"         y="0"         width="100%"         height="100%" />    </clipPath>    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient10266"       id="linearGradient4471"       x1="560.755"       y1="356.2435"       x2="461.43729"       y2="266.53912"       gradientUnits="userSpaceOnUse"       gradientTransform="matrix(0.26458333,0,0,0.26458333,16.897978,17.560707)" />    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient10266"       id="linearGradient2875"       x1="683.24768"       y1="366.43225"       x2="522.52948"       y2="244.64835"       gradientUnits="userSpaceOnUse"       gradientTransform="matrix(0.26458333,0,0,0.26458333,16.892686,17.568646)" />    <path       id="SVGID_00000019661357093030215730000002021134863187377562_"       d="m 440.73,298.5 h 130.39 c -11.73,50.7 -34.69,81.86 -88.64,90.34 H 380.39 c -15.03,-47.5 -18.48,-89.27 60.34,-90.34"       style="stroke:url(#linearGradient11265)" />    <linearGradient       inkscape:collect="always"       xlink:href="#SVGID_00000091000854627707922720000009781038660620578736_"       id="linearGradient11713"       gradientUnits="userSpaceOnUse"       x1="371.83179"       y1="343.67001"       x2="571.12"       y2="343.67001" />    <linearGradient       inkscape:collect="always"       xlink:href="#SVGID_00000091000854627707922720000009781038660620578736_"       id="linearGradient11715"       gradientUnits="userSpaceOnUse"       x1="371.83179"       y1="343.67001"       x2="571.12"       y2="343.67001" />    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient13052"       id="linearGradient13054"       x1="162.70616"       y1="107.44843"       x2="115.68233"       y2="86.823204"       gradientUnits="userSpaceOnUse"       gradientTransform="translate(4.7e-4)" />    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient13155"       id="linearGradient13237"       x1="159.29869"       y1="81.108353"       x2="154.36737"       y2="92.280685"       gradientUnits="userSpaceOnUse" />    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient14420"       id="linearGradient14422"       x1="168.21584"       y1="122.35158"       x2="139.65584"       y2="84.07486"       gradientUnits="userSpaceOnUse"       gradientTransform="translate(10e-6,0.0529528)" />    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient14699"       id="linearGradient14701"       x1="161.94153"       y1="105.31991"       x2="147.95299"       y2="108.13125"       gradientUnits="userSpaceOnUse" />    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient14846"       id="linearGradient14848"       x1="151.21626"       y1="113.72144"       x2="170.58107"       y2="123.96624"       gradientUnits="userSpaceOnUse" />    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient15233"       id="linearGradient15235"       x1="129.16356"       y1="101.38689"       x2="158.10924"       y2="127.11158"       gradientUnits="userSpaceOnUse" />    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient15260"       id="linearGradient15262"       x1="81.126785"       y1="102.63116"       x2="138.32635"       y2="134.24913"       gradientUnits="userSpaceOnUse" />    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient15648"       id="linearGradient15650"       x1="127.42547"       y1="119.09238"       x2="127.42547"       y2="87.53141"       gradientUnits="userSpaceOnUse"       gradientTransform="translate(-0.13229166,-0.01653646)" />    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient15754"       id="linearGradient15756"       x1="115.19263"       y1="108.49403"       x2="154.52364"       y2="108.49403"       gradientUnits="userSpaceOnUse" />    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient15780"       id="linearGradient15782"       x1="123.50453"       y1="98.800972"       x2="133.85147"       y2="114.84383"       gradientUnits="userSpaceOnUse" />    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient5212"       id="linearGradient5214"       x1="472.22314"       y1="199.47366"       x2="521.41022"       y2="200.66875"       gradientUnits="userSpaceOnUse"       gradientTransform="matrix(0.26458333,0,0,0.26458333,10.578603,-8.4864088)" />    <linearGradient       inkscape:collect="always"       id="linearGradient5212">      <stop         style="stop-color:#ab37c8;stop-opacity:1;"         offset="0"         id="stop5208" />      <stop         style="stop-color:#ab37c8;stop-opacity:0;"         offset="1"         id="stop5210" />    </linearGradient>    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient1301"       id="linearGradient1303"       x1="145.24802"       y1="77.508675"       x2="143.55931"       y2="75.631454"       gradientUnits="userSpaceOnUse" />  </defs>  <g     inkscape:label="Ebene 1"     inkscape:groupmode="layer"     id="layer1"     transform="translate(-104.95751,-64.411499)">    <rect       style="opacity:1;fill:' + color + ';fill-opacity:1;stroke-width:0.279135;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke"       id="rect2044"       width="21.629686"       height="4.2664061"       x="119.3773"       y="80.981033" />    <path       style="fill:' + color + ';fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 132.72666,79.418429 -4.6953,-1.341514 -5.9593,-3.553452 -5.38768,4.559588 1.04521,6.065864 z"       id="path6411"       sodipodi:nodetypes="cccccc" />    <rect       style="opacity:1;fill:' + color + ';fill-opacity:1;stroke-width:0.205918;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke"       id="rect1121"       width="7.8713541"       height="4.4635682"       x="146.28981"       y="72.945885" />    <path       style="fill:' + color + ';stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1"       d="m 149.71352,96.538831 6.03514,9.009059 -1.49754,11.40354 7.10142,9.06198 h 16.14752 l -4.08252,-5.31018 -5.20171,1.64835 -1.30969,-4.30742 5.76263,-12.34545 -9.51442,-9.183691 -13.44083,0.02381"       id="path1462" />    <path       style="fill:url(#linearGradient14848);fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;opacity:0.6"       d="m 149.71352,96.53883 6.03514,9.00906 -1.49754,11.40354 7.10142,9.06198 h 16.14752 l -4.08252,-5.31018 -5.20171,1.64835 -1.30969,-4.30742 5.76263,-12.34545 -9.51442,-9.18369 -13.44083,0.0238"       id="path1462-9" />    <path       style="fill:' + color + ';fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 117.2412,80.301312 7.08025,-3.291417 4.9874,2.293938 7.08025,-0.198438 7.08025,-4.987396 h 3.69094 l 2.19339,1.994959 5.0853,-0.796396 7.21783,3.058583 5.55625,-0.132292 1.28587,4.41325 5.70442,1.320271 0.34396,4.439708 5.03237,2.021417 -0.11377,5.188479 2.63525,3.505729 -2.52412,4.524373 c -3.46976,11.5952 -15.74533,16.73279 -35.02025,16.73754 32.04134,-2.78998 33.5065,-29.829664 3.50837,-36.504558 l -3.54012,-2.643188 -4.23863,3.042708 -2.667,-1.195916 -2.91571,1.494896 -2.59291,-1.370542 -3.09298,1.172104 -2.39448,-1.397 -2.39448,1.071563 -2.34421,-1.645709 -2.88925,2.209271 -1.75419,-4.325937"       id="path3619"       sodipodi:nodetypes="cccccccccccccccccccccccccccccc" />    <path       style="opacity:1;fill:' + color + ';fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 160.29684,96.557354 c -3.04614,9.929566 -4.95799,20.325566 -23.45266,23.902456 h -27.01131 c -4.92514,-14.12662 -2.45427,-23.617409 14.93006,-23.887705 11.80849,-0.09529 23.68631,-0.01724 35.53391,-0.01475 z"       id="path3184"       sodipodi:nodetypes="ccccc" />    <rect       style="opacity:1;fill:none;fill-opacity:1;stroke:none;stroke-width:0.246509;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1;paint-order:markers fill stroke"       id="rect11878"       width="77.584267"       height="77.584267"       x="104.95751"       y="64.411499" />    <path       style="fill:#ffcc00;fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 120.23629,87.733498 -1.23825,-3.053292 2.8866,-2.209271 2.34421,1.645709 2.39448,-1.071563 2.39448,1.397 3.09298,-1.172104 2.59291,1.370542 2.91571,-1.494896 2.667,1.195916 4.23863,-3.042708 3.54012,2.643188 c 33.23394,7.864559 24.9397,34.825551 -3.50837,36.504561 1.81171,-0.55695 4.72778,-2.44192 7.20024,-5.06559 2.47246,-2.62368 3.64497,-5.15851 3.92371,-8.65945 0.30939,-3.886 -4.27336,-12.122801 -11.37961,-14.195377 -7.52379,-2.194351 -9.94384,-3.040343 -24.06484,-4.792665 z"       id="path5713"       sodipodi:nodetypes="cccccccccccccsssc" />    <path       style="opacity:0.25;fill:url(#linearGradient14422);fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 120.2363,87.733494 -1.23825,-3.053292 2.8866,-2.209271 2.34421,1.645709 2.39448,-1.071563 2.39448,1.397 3.09298,-1.172104 2.59291,1.370542 2.91571,-1.494896 2.667,1.195916 4.23863,-3.042708 3.54012,2.643188 c 33.23394,7.864559 24.9397,34.825565 -3.50837,36.504575 1.81171,-0.55695 4.72778,-2.44192 7.20024,-5.06559 2.47246,-2.62368 3.64497,-5.15852 3.92371,-8.65946 0.30939,-3.886 -4.27336,-12.122805 -11.37961,-14.195381 -7.52379,-2.194351 -9.94384,-3.040343 -24.06484,-4.792665 z"       id="path5713-8"       sodipodi:nodetypes="cccccccccccccsssc" />    <path       style="fill:#00ff00;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 141.53525,77.298331 2.02406,-1.666875 2.73844,0.05821 c -0.57338,1.441487 -2.94836,1.666888 -4.7625,1.608665 z"       id="path4940"       sodipodi:nodetypes="cccc" />    <path       style="opacity:0.2;fill:url(#linearGradient1303);fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 141.53525,77.298331 2.02406,-1.666875 2.73844,0.05821 c -0.57338,1.441487 -2.94836,1.666888 -4.7625,1.608665 z"       id="path4940-6"       sodipodi:nodetypes="cccc" />    <rect       style="fill:none;fill-opacity:1;stroke-width:15.8522;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke"       id="rect9164"       width="77.584274"       height="77.584274"       x="104.95751"       y="62.823997" />    <g       clip-path="url(#SVGID_00000177461585733685870330000006528038749306838958_)"       id="g72"       style="fill:' + color + ';fill-opacity:1;stroke:url(#linearGradient11715);stroke-opacity:1"       transform="matrix(0.26458333,0,0,0.26458333,16.897977,17.560707)">      <defs         id="defs60"         style="stroke:url(#linearGradient11265)">        <path           id="path11688"           d="m 440.73,298.5 h 130.39 c -11.73,50.7 -34.69,81.86 -88.64,90.34 H 380.39 c -15.03,-47.5 -18.48,-89.27 60.34,-90.34"           style="stroke:url(#linearGradient11265)" />      </defs>      <clipPath         id="clipPath11418"         style="stroke:url(#linearGradient11265)">        <use           xlink:href="#SVGID_00000019661357093030215730000002021134863187377562_"           style="overflow:visible;stroke:url(#linearGradient11265)"           id="use11416"           x="0"           y="0"           width="100%"           height="100%" />      </clipPath>      <linearGradient         id="SVGID_00000120529741043823925420000010207598069181370511_"         gradientUnits="userSpaceOnUse"         x1="466.51709"         y1="391.46371"         x2="466.5271"         y2="-226.70621"         style="stroke:url(#linearGradient11265)">        <stop           offset="0"           style="stop-color:#156140;stroke:url(#linearGradient11265)"           id="stop65" />        <stop           offset="1"           style="stop-color:#14BA6A;stroke:url(#linearGradient11265)"           id="stop67" />      </linearGradient>      <rect         x="361.91"         y="298.5"         style="fill:' + color + ';fill-opacity:1;stroke:url(#linearGradient11713);stroke-opacity:1"         width="209.21001"         height="90.339996"         clip-path="url(#SVGID_00000140697861995181098320000000384905363011846583_)"         id="rect70" />    </g>    <path       style="opacity:0.5;fill:url(#linearGradient15756);stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1"       d="m 137.30191,96.541477 13.03338,3.302 3.19616,14.705543 0.99219,2.7305 c -2.94331,1.6873 -6.39711,2.52379 -9.96685,3.16706 h -27.01396 c -6.60818,-18.3618 1.35199,-24.030373 15.96496,-23.902457 -7.48594,1.313227 -9.9734,3.423314 -10.21135,5.892017 0.39085,5.48497 6.14781,8.82271 11.85743,9.64404 4.82804,-0.51997 6.41828,-3.14014 7.38944,-6.16187 l -5.2414,-9.376833"       id="path4617"       sodipodi:nodetypes="ccccccccccc" />    <path       style="opacity:0.7;fill:url(#linearGradient15650);fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 123.07201,96.475934 c 0.0789,4.291556 -5.18296,20.255786 -4.20626,23.948826 h 27.01131 l 5.4165,-1.13077 0.0395,-11.64004 -8.8956,-11.121067 z"       id="path10799"       sodipodi:nodetypes="ccccccc" />    <path       style="fill:' + color + ';stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1"       d="m 133.50779,96.562644 -10.43578,-0.08671 c -10.29395,0.875665 -15.83992,5.930736 -17.45018,11.995766 -2.61784,12.44625 10.3941,17.77318 22.19315,20.17739 12.14804,2.41028 23.90216,4.03273 35.20709,4.75678 -13.8511,-6.53357 -27.70043,-14.50405 -37.02523,-23.17532 -8.75345,-9.63539 -0.76177,-12.197061 7.51095,-13.667906"       id="path5835"       sodipodi:nodetypes="ccccccc" />    <path       style="opacity:0.5;fill:url(#linearGradient15262);fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 116.08762,97.864393 c -5.27327,3.020757 -5.42622,5.831267 -4.52068,9.819097 7.65045,15.81096 31.62613,19.04828 51.45512,25.71974 -19.40343,-2.37454 -44.08725,-3.74678 -53.35231,-12.32085 -10.300046,-9.94064 -0.22681,-22.01123 6.41787,-23.217987 z"       id="path6985"       sodipodi:nodetypes="ccccc" />    <path       style="clip-rule:evenodd;fill:url(#linearGradient10268);fill-opacity:1;fill-rule:evenodd"       d="m 407.96,345.28 c -17.57,-21.05 -14.98,-39.34 32.77,-46.69 l -0.87,-0.02 c -23.48,2.05 -40.68,10.6 -43.02,22.19 -1.67,8.28 3.19,17.1 9.19,24.52 3.5,4.33 7.38,8.17 10.57,11.15 12.85,11.99 28.33,22.78 43.48,32.4 2.67,1.7 5.34,3.36 7.97,4.98 21.71,13.37 49.79,27.01 73.94,38.92 -17.65,-8.82 -49.72,-25.32 -79.12,-43.9 -22.34,-14.12 -43.14,-29.45 -54.91,-43.55"       mask="url(#SVGID_00000025442907986999820550000007097560835107214239_)"       clip-path="url(#SVGID_00000177461585733685870330000006528038749306838958_)"       id="path334"       transform="matrix(0.26458333,0,0,0.26458333,16.897977,17.560707)" />    <path       style="opacity:0.5;fill:url(#linearGradient4471);fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 119.42931,85.738539 0.80698,1.989667 c 12.61001,2.488033 24.278,2.709299 30.67573,8.91128 l 9.34514,9.059224 C 163.64504,89.962178 143.92263,86.575594 119.42931,85.738539 Z"       id="path2524"       sodipodi:nodetypes="ccscc" />    <path       style="fill:url(#linearGradient13054);fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 121.88511,82.417979 2.34421,1.645708 2.39448,-1.071562 2.39448,1.397 3.09298,-1.172104 2.59291,1.370541 2.91571,-1.494896 2.66701,1.195917 4.23862,-3.042708 3.54012,2.643187 c 5.86565,1.084186 11.29754,3.218445 15.74854,7.131932 3.57527,3.359824 6.51321,7.075751 6.11712,12.641896 -0.94537,7.52562 -6.42842,10.97285 -10.53236,13.11263 -4.17779,2.04621 -9.91106,3.49308 -14.84167,3.6181 l 2.19604,-1.24089 c 4.1126,-0.51592 8.18345,-1.35737 12.11106,-3.31621 4.83085,-2.65711 9.37986,-6.02948 9.96983,-12.1776 -0.014,-6.925922 -5.48061,-11.364781 -5.93831,-11.853458 -4.53517,-3.616815 -9.61372,-5.929527 -15.26681,-6.863358 l -3.11415,-2.325688 -4.09839,2.939521 -2.7649,-1.240896 -2.95804,1.516063 -2.66171,-1.407583 -3.11679,1.182687 -2.36008,-1.375833 -2.4474,1.095375 -2.19339,-1.539875 -2.48444,1.899708 -0.43127,-1.063625 2.8866,-2.203979"       id="path8612"       sodipodi:nodetypes="ccccccccccccccccccccccccccccccc" />    <path       style="fill:url(#linearGradient13237);fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 144.52504,81.298831 3.54012,2.643188 c 5.77043,1.045928 10.38612,3.261844 13.93123,5.883068 3.51273,2.597281 6.11439,5.62369 7.45054,9.458624 l 0.25502,0.08384 c -0.92879,-3.317142 -3.07426,-6.944508 -8.71332,-10.874102 -4.93913,-3.12156 -8.96473,-4.358953 -12.71974,-5.038268 l -3.73856,-2.788708 -4.87449,3.408386 0.63058,0.266676 z"       id="path10943"       sodipodi:nodetypes="ccscccccccc" />    <path       style="opacity:0.5;fill:url(#linearGradient15782);stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1"       d="m 133.29246,96.555992 c -4.92145,0.47571 -11.30692,2.245915 -11.47173,6.662758 0.26599,5.39616 6.80874,9.83603 12.04438,14.10392 l 0.31377,-0.39592 c -4.88608,-3.94752 -11.91245,-8.98014 -11.96748,-13.68624 0.47631,-4.594421 6.26275,-5.716373 11.31124,-6.679229 l -0.23018,-0.0053"       id="path8807"       sodipodi:nodetypes="ccccccc" />    <path       style="opacity:0.3;fill:url(#linearGradient2875);fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 167.21306,78.29581 1.28587,4.41325 5.69913,1.320271 0.34925,4.439708 5.03237,2.021417 -0.11377,5.188479 2.63525,3.505729 -2.52941,4.524376 c -4.11565,12.32873 -16.5289,15.95829 -31.23671,16.67933 30.57898,-1.50107 41.51562,-31.208231 -2.04523,-42.978914 l 15.39346,1.029229 z"       id="path2074"       sodipodi:nodetypes="cccccccccccc" />    <path       style="fill:' + color + ';stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1"       d="m 137.30192,96.515021 6.03514,9.032879 -1.49754,11.40353 7.15433,9.12813 h 16.14753 l -4.13545,-5.37633 -5.2017,1.64835 -1.30969,-4.30742 5.76262,-12.34545 -9.51441,-9.183689 z"       id="path1877" />    <path       style="fill:url(#linearGradient15235);stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;opacity:0.3;fill-opacity:1"       d="m 137.30191,96.538834 7.27869,-0.01323 5.98223,7.670276 -2.39183,12.16818 4.88685,9.71551 -4.064,-1e-5 -7.15433,-9.12812 1.49754,-11.40354 z"       id="path2363" />    <path       style="fill:url(#linearGradient14701);stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1"       d="m 160.25716,105.69871 -9.48796,-9.159879 8.80534,9.286879 -5.08,12.21845 z"       id="path2780" />    <g       id="g953"       transform="translate(6.6036304,26.275619)">      <ellipse         style="fill:#1a1a1a;fill-opacity:1;stroke-width:4.77221;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke"         id="path1906"         cx="149.51894"         cy="17.460409"         rx="9.5495653"         ry="1.6576747"         transform="matrix(0.9784472,0.20649717,-0.16028296,0.98707111,0,0)" />      <ellipse         style="fill:#1a1a1a;fill-opacity:1;stroke-width:4.10506;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke"         id="path1906-2"         cx="145.13463"         cy="20.79311"         rx="7.1394153"         ry="1.640659"         transform="matrix(0.99003717,0.14080626,0.08401969,0.99646409,0,0)" />      <path         style="fill:#1a1a1a;stroke:none;stroke-width:0.27922px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"         d="m 138.29887,46.872891 0.22001,-6.982431 13.74447,2.624436 -2.62975,6.546607 z"         id="path2227"         sodipodi:nodetypes="ccccc" />      <path         style="fill:url(#linearGradient5214);fill-opacity:1;stroke:none;stroke-width:0.27922px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"         d="m 151.06464,43.109849 -2.12633,5.408223 c -3.2534,-0.137035 -7.04204,-0.936326 -9.92476,-2.101577 l -0.0613,-5.608378 c 3.46857,1.34548 7.05642,2.584233 12.11237,2.301732 z"         id="path2601"         sodipodi:nodetypes="ccccc" />    </g>  </g></svg>';          
}

function svgLogo(color,width,height){
    return '<?xml version="1.0" encoding="UTF-8" standalone="no"?><!-- Created with Inkscape (http://www.inkscape.org/) --><svg   width="' + width + '"   height="' + height + '"   viewBox="0 0 77.584267 77.584267"   version="1.1"   id="svg11446"   sodipodi:docname="Robogator logo standard  clean.svg"   inkscape:version="1.1.1 (3bf5ae0d25, 2021-09-20)"   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"   xmlns:xlink="http://www.w3.org/1999/xlink"   xmlns="http://www.w3.org/2000/svg"   xmlns:svg="http://www.w3.org/2000/svg">  <sodipodi:namedview     id="namedview11448"     pagecolor="#ffffff"     bordercolor="#666666"     borderopacity="1.0"     inkscape:pageshadow="2"     inkscape:pageopacity="0.0"     inkscape:pagecheckerboard="0"     inkscape:document-units="mm"     showgrid="false"     fit-margin-top="0"     fit-margin-left="0"     fit-margin-right="0"     fit-margin-bottom="0"     inkscape:zoom="1.4142136"     inkscape:cx="70.357123"     inkscape:cy="39.951532"     inkscape:window-width="1920"     inkscape:window-height="1111"     inkscape:window-x="-9"     inkscape:window-y="-9"     inkscape:window-maximized="1"     inkscape:current-layer="layer1" />  <defs     id="defs11443">    <linearGradient       inkscape:collect="always"       id="linearGradient15780">      <stop         style="stop-color:#000000;stop-opacity:1;"         offset="0"         id="stop15776" />      <stop         style="stop-color:#000000;stop-opacity:0;"         offset="1"         id="stop15778" />    </linearGradient>    <linearGradient       inkscape:collect="always"       id="linearGradient15754">      <stop         style="stop-color:#000000;stop-opacity:1;"         offset="0"         id="stop15750" />      <stop         style="stop-color:#000000;stop-opacity:0;"         offset="1"         id="stop15752" />    </linearGradient>    <linearGradient       inkscape:collect="always"       id="linearGradient15648">      <stop         style="stop-color:#1a1a1a;stop-opacity:1;"         offset="0"         id="stop15644" />      <stop         style="stop-color:#1a1a1a;stop-opacity:0;"         offset="1"         id="stop15646" />    </linearGradient>    <linearGradient       inkscape:collect="always"       id="linearGradient15260">      <stop         style="stop-color:#000000;stop-opacity:1;"         offset="0"         id="stop15256" />      <stop         style="stop-color:#000000;stop-opacity:0;"         offset="1"         id="stop15258" />    </linearGradient>    <linearGradient       inkscape:collect="always"       id="linearGradient15233">      <stop         style="stop-color:#000000;stop-opacity:1;"         offset="0"         id="stop15229" />      <stop         style="stop-color:#000000;stop-opacity:0;"         offset="1"         id="stop15231" />    </linearGradient>    <linearGradient       inkscape:collect="always"       id="linearGradient14846">      <stop         style="stop-color:#000000;stop-opacity:1;"         offset="0"         id="stop14842" />      <stop         style="stop-color:#000000;stop-opacity:0;"         offset="1"         id="stop14844" />    </linearGradient>    <linearGradient       inkscape:collect="always"       id="linearGradient14699">      <stop         style="stop-color:#000000;stop-opacity:0.6"         offset="0"         id="stop14695" />      <stop         style="stop-color:#000000;stop-opacity:0;"         offset="1"         id="stop14697" />    </linearGradient>    <linearGradient       inkscape:collect="always"       id="linearGradient14420">      <stop         style="stop-color:#000000;stop-opacity:1;"         offset="0"         id="stop14416" />      <stop         style="stop-color:#000000;stop-opacity:0;"         offset="1"         id="stop14418" />    </linearGradient>    <linearGradient       inkscape:collect="always"       id="linearGradient13155">      <stop         style="stop-color:#333333;stop-opacity:1;"         offset="0"         id="stop13151" />      <stop         style="stop-color:#333333;stop-opacity:0;"         offset="1"         id="stop13153" />    </linearGradient>    <linearGradient       inkscape:collect="always"       id="linearGradient13052">      <stop         style="stop-color:#999999;stop-opacity:1;"         offset="0"         id="stop13048" />      <stop         style="stop-color:#999999;stop-opacity:0;"         offset="1"         id="stop13050" />    </linearGradient>    <linearGradient       inkscape:collect="always"       xlink:href="#SVGID_00000091000854627707922720000009781038660620578736_"       id="linearGradient11265"       x1="371.83179"       y1="343.67001"       x2="571.12"       y2="343.67001"       gradientUnits="userSpaceOnUse" />    <linearGradient       id="SVGID_00000091000854627707922720000009781038660620578736_"       gradientUnits="userSpaceOnUse"       x1="626.97357"       y1="374.2597"       x2="356.61349"       y2="216.8298">      <stop         offset="0"         style="stop-color:#156140"         id="stop148" />      <stop         offset="1"         style="stop-color:#14BA6A"         id="stop150" />    </linearGradient>    <clipPath       id="SVGID_00000177461585733685870330000006528038749306838958_">      <use         xlink:href="#SVGID_1_"         style="overflow:visible"         id="use7"         x="0"         y="0"         width="100%"         height="100%" />    </clipPath>    <clipPath       id="SVGID_00000140697861995181098320000000384905363011846583_"       style="stroke:url(#linearGradient11265)">      <use         xlink:href="#SVGID_00000019661357093030215730000002021134863187377562_"         style="overflow:visible;stroke:url(#linearGradient11265)"         id="use62"         x="0"         y="0"         width="100%"         height="100%" />    </clipPath>    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient10266"       id="linearGradient10268"       x1="396.50742"       y1="365.64999"       x2="541.97998"       y2="365.64999"       gradientUnits="userSpaceOnUse" />    <linearGradient       inkscape:collect="always"       id="linearGradient10266">      <stop         style="stop-color:#000000;stop-opacity:1;"         offset="0"         id="stop10262" />      <stop         style="stop-color:#000000;stop-opacity:0;"         offset="1"         id="stop10264" />    </linearGradient>    <clipPath       id="clipPath11379">      <use         xlink:href="#SVGID_1_"         style="overflow:visible"         id="use11377"         x="0"         y="0"         width="100%"         height="100%" />    </clipPath>    <mask       maskUnits="userSpaceOnUse"       x="396.5"       y="298.57"       width="145.48"       height="134.17"       id="SVGID_00000025442907986999820550000007097560835107214239_">      <g         style="filter:url(#Adobe_OpacityMaskFilter_00000143615908467236731810000012972321291253246900_)"         id="g331">        <linearGradient           id="SVGID_00000171694092343032096580000003101415339438394507_"           gradientUnits="userSpaceOnUse"           x1="-50.041801"           y1="573.41089"           x2="49.488201"           y2="546.74091"           gradientTransform="translate(396.5046,-174.8531)">          <stop             offset="0"             style="stop-color:#FFFFFF"             id="stop324" />          <stop             offset="1"             style="stop-color:#000000"             id="stop326" />        </linearGradient>        <rect           x="396.5"           y="298.57001"           style="fill:url(#SVGID_00000171694092343032096580000003101415339438394507_)"           width="145.48"           height="134.17"           clip-path="url(#SVGID_00000177461585733685870330000006528038749306838958_)"           id="rect329" />      </g>    </mask>    <filter       id="Adobe_OpacityMaskFilter_00000143615908467236731810000012972321291253246900_"       filterUnits="userSpaceOnUse"       x="396.5"       y="298.57001"       width="145.48"       height="134.17">      <feColorMatrix         type="matrix"         values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"         id="feColorMatrix319" />    </filter>    <linearGradient       id="linearGradient11393"       gradientUnits="userSpaceOnUse"       x1="-50.041801"       y1="573.41089"       x2="49.488201"       y2="546.74091"       gradientTransform="translate(396.5046,-174.8531)">      <stop         offset="0"         style="stop-color:#FFFFFF"         id="stop11389" />      <stop         offset="1"         style="stop-color:#000000"         id="stop11391" />    </linearGradient>    <clipPath       id="clipPath11397">      <use         xlink:href="#SVGID_1_"         style="overflow:visible"         id="use11395"         x="0"         y="0"         width="100%"         height="100%" />    </clipPath>    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient10266"       id="linearGradient4471"       x1="560.755"       y1="356.2435"       x2="461.43729"       y2="266.53912"       gradientUnits="userSpaceOnUse"       gradientTransform="matrix(0.26458333,0,0,0.26458333,16.897978,17.560707)" />    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient10266"       id="linearGradient2875"       x1="683.24768"       y1="366.43225"       x2="522.52948"       y2="244.64835"       gradientUnits="userSpaceOnUse"       gradientTransform="matrix(0.26458333,0,0,0.26458333,16.892686,17.568646)" />    <path       id="SVGID_00000019661357093030215730000002021134863187377562_"       d="m 440.73,298.5 h 130.39 c -11.73,50.7 -34.69,81.86 -88.64,90.34 H 380.39 c -15.03,-47.5 -18.48,-89.27 60.34,-90.34"       style="stroke:url(#linearGradient11265)" />    <linearGradient       inkscape:collect="always"       xlink:href="#SVGID_00000091000854627707922720000009781038660620578736_"       id="linearGradient11713"       gradientUnits="userSpaceOnUse"       x1="371.83179"       y1="343.67001"       x2="571.12"       y2="343.67001" />    <linearGradient       inkscape:collect="always"       xlink:href="#SVGID_00000091000854627707922720000009781038660620578736_"       id="linearGradient11715"       gradientUnits="userSpaceOnUse"       x1="371.83179"       y1="343.67001"       x2="571.12"       y2="343.67001" />    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient13052"       id="linearGradient13054"       x1="162.70616"       y1="107.44843"       x2="115.68233"       y2="86.823204"       gradientUnits="userSpaceOnUse"       gradientTransform="translate(4.7e-4)" />    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient13155"       id="linearGradient13237"       x1="159.29869"       y1="81.108353"       x2="154.36737"       y2="92.280685"       gradientUnits="userSpaceOnUse" />    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient14420"       id="linearGradient14422"       x1="168.21584"       y1="122.35158"       x2="139.65584"       y2="84.07486"       gradientUnits="userSpaceOnUse" />    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient14699"       id="linearGradient14701"       x1="161.94153"       y1="105.31991"       x2="147.95299"       y2="108.13125"       gradientUnits="userSpaceOnUse" />    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient14846"       id="linearGradient14848"       x1="151.21626"       y1="113.72144"       x2="170.58107"       y2="123.96624"       gradientUnits="userSpaceOnUse" />    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient15233"       id="linearGradient15235"       x1="129.16356"       y1="101.38689"       x2="158.10924"       y2="127.11158"       gradientUnits="userSpaceOnUse" />    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient15260"       id="linearGradient15262"       x1="81.126785"       y1="102.63116"       x2="138.32635"       y2="134.24913"       gradientUnits="userSpaceOnUse" />    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient15648"       id="linearGradient15650"       x1="127.42547"       y1="119.09238"       x2="127.42547"       y2="87.53141"       gradientUnits="userSpaceOnUse"       gradientTransform="translate(-0.13229166,-0.01653646)" />    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient15754"       id="linearGradient15756"       x1="115.19263"       y1="108.49403"       x2="154.52364"       y2="108.49403"       gradientUnits="userSpaceOnUse" />    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient15780"       id="linearGradient15782"       x1="123.50453"       y1="98.800972"       x2="133.85147"       y2="114.84383"       gradientUnits="userSpaceOnUse" />    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient15780"       id="linearGradient1303"       x1="145.24802"       y1="77.508675"       x2="143.55931"       y2="75.631454"       gradientUnits="userSpaceOnUse"       gradientTransform="translate(-4.27e-6)" />  </defs>  <g     inkscape:label="Ebene 1"     inkscape:groupmode="layer"     id="layer1"     transform="translate(-104.95751,-64.411499)">    <rect       style="fill:' + color + ';fill-opacity:1;stroke-width:0.279135;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke"       id="rect2044"       width="21.629686"       height="4.2664061"       x="118.99804"       y="80.413803" />    <path       style="fill:' + color + ';stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1"       d="m 149.71352,96.538831 6.03514,9.009059 -1.49754,11.40354 7.10142,9.06198 h 16.14752 l -4.08252,-5.31018 -5.20171,1.64835 -1.30969,-4.30742 5.76263,-12.34545 -9.51442,-9.183691 -13.44083,0.02381"       id="path1462" />    <path       style="fill:url(#linearGradient14848);fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;opacity:0.6"       d="m 149.71352,96.53883 6.03514,9.00906 -1.49754,11.40354 7.10142,9.06198 h 16.14752 l -4.08252,-5.31018 -5.20171,1.64835 -1.30969,-4.30742 5.76263,-12.34545 -9.51442,-9.18369 -13.44083,0.0238"       id="path1462-9" />    <path       style="fill:' + color + ';fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 117.2412,80.301312 7.08025,-3.291417 4.9874,2.293938 7.08025,-0.198438 7.08025,-4.987396 h 3.69094 l 2.19339,1.994959 5.0853,-0.796396 7.21783,3.058583 5.55625,-0.132292 1.28587,4.41325 5.70442,1.320271 0.34396,4.439708 5.03237,2.021417 -0.11377,5.188479 2.63525,3.505729 -2.52412,4.524373 c -3.46976,11.5952 -15.74533,16.73279 -35.02025,16.73754 32.04134,-2.78998 33.5065,-29.829664 3.50837,-36.504558 l -3.54012,-2.643188 -4.23863,3.042708 -2.667,-1.195916 -2.91571,1.494896 -2.59291,-1.370542 -3.09298,1.172104 -2.39448,-1.397 -2.39448,1.071563 -2.34421,-1.645709 -2.88925,2.209271 -1.75419,-4.325937"       id="path3619"       sodipodi:nodetypes="cccccccccccccccccccccccccccccc" />    <path       style="opacity:1;fill:' + color + ';fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 160.29684,96.557354 c -3.04614,9.929566 -4.95799,20.325566 -23.45266,23.902456 h -27.01131 c -4.92514,-14.12662 -2.45427,-23.617409 14.93006,-23.887705 11.80849,-0.09529 23.68631,-0.01724 35.53391,-0.01475 z"       id="path3184"       sodipodi:nodetypes="ccccc" />    <rect       style="opacity:1;fill:none;fill-opacity:1;stroke:none;stroke-width:0.246509;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1;paint-order:markers fill stroke"       id="rect11878"       width="77.584267"       height="77.584267"       x="104.95751"       y="64.411499" />    <path       style="fill:#e6e6e6;fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 120.23629,87.733498 -1.23825,-3.053292 2.8866,-2.209271 2.34421,1.645709 2.39448,-1.071563 2.39448,1.397 3.09298,-1.172104 2.59291,1.370542 2.91571,-1.494896 2.667,1.195916 4.23863,-3.042708 3.54012,2.643188 c 33.23394,7.864559 24.9397,34.825551 -3.50837,36.504561 1.81171,-0.55695 4.72778,-2.44192 7.20024,-5.06559 2.47246,-2.62368 3.64497,-5.15851 3.92371,-8.65945 0.30939,-3.886 -4.27336,-12.122801 -11.37961,-14.195377 -7.52379,-2.194351 -9.94384,-3.040343 -24.06484,-4.792665 z"       id="path5713"       sodipodi:nodetypes="cccccccccccccsssc" />    <path       style="fill:url(#linearGradient14422);fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;opacity:0.25"       d="m 120.23629,87.680541 -1.23825,-3.053292 2.8866,-2.209271 2.34421,1.645709 2.39448,-1.071563 2.39448,1.397 3.09298,-1.172104 2.59291,1.370542 2.91571,-1.494896 2.667,1.195916 4.23863,-3.042708 3.54012,2.643188 c 33.23394,7.864559 24.9397,34.825558 -3.50837,36.504568 1.81171,-0.55695 4.72778,-2.44192 7.20024,-5.06559 2.47246,-2.62368 3.64497,-5.15852 3.92371,-8.65946 0.30939,-3.886 -4.27336,-12.122798 -11.37961,-14.195374 -7.52379,-2.194351 -9.94384,-3.040343 -24.06484,-4.792665 z"       id="path5713-8"       sodipodi:nodetypes="cccccccccccccsssc" />    <path       style="fill:#ff0000;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 141.53525,77.298331 2.02406,-1.666875 2.73844,0.05821 c -0.57338,1.441487 -2.94836,1.666888 -4.7625,1.608665 z"       id="path4940"       sodipodi:nodetypes="cccc" />    <rect       style="fill:none;fill-opacity:1;stroke-width:15.8522;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke"       id="rect9164"       width="77.584274"       height="77.584274"       x="104.95751"       y="62.823997" />    <g       clip-path="url(#SVGID_00000177461585733685870330000006528038749306838958_)"       id="g72"       style="fill:' + color + ';fill-opacity:1;stroke:url(#linearGradient11715);stroke-opacity:1"       transform="matrix(0.26458333,0,0,0.26458333,16.897977,17.560707)">      <defs         id="defs60"         style="stroke:url(#linearGradient11265)">        <path           id="path11688"           d="m 440.73,298.5 h 130.39 c -11.73,50.7 -34.69,81.86 -88.64,90.34 H 380.39 c -15.03,-47.5 -18.48,-89.27 60.34,-90.34"           style="stroke:url(#linearGradient11265)" />      </defs>      <clipPath         id="clipPath11418"         style="stroke:url(#linearGradient11265)">        <use           xlink:href="#SVGID_00000019661357093030215730000002021134863187377562_"           style="overflow:visible;stroke:url(#linearGradient11265)"           id="use11416"           x="0"           y="0"           width="100%"           height="100%" />      </clipPath>      <linearGradient         id="SVGID_00000120529741043823925420000010207598069181370511_"         gradientUnits="userSpaceOnUse"         x1="466.51709"         y1="391.46371"         x2="466.5271"         y2="-226.70621"         style="stroke:url(#linearGradient11265)">        <stop           offset="0"           style="stop-color:#156140;stroke:url(#linearGradient11265)"           id="stop65" />        <stop           offset="1"           style="stop-color:#14BA6A;stroke:url(#linearGradient11265)"           id="stop67" />      </linearGradient>      <rect         x="361.91"         y="298.5"         style="fill:' + color + ';fill-opacity:1;stroke:url(#linearGradient11713);stroke-opacity:1"         width="209.21001"         height="90.339996"         clip-path="url(#SVGID_00000140697861995181098320000000384905363011846583_)"         id="rect70" />    </g>    <path       style="opacity:0.5;fill:url(#linearGradient15756);stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1"       d="m 137.30191,96.541477 13.03338,3.302 3.19616,14.705543 0.99219,2.7305 c -2.94331,1.6873 -6.39711,2.52379 -9.96685,3.16706 h -27.01396 c -6.60818,-18.3618 1.35199,-24.030373 15.96496,-23.902457 -7.48594,1.313227 -9.9734,3.423314 -10.21135,5.892017 0.39085,5.48497 6.14781,8.82271 11.85743,9.64404 4.82804,-0.51997 6.41828,-3.14014 7.38944,-6.16187 l -5.2414,-9.376833"       id="path4617"       sodipodi:nodetypes="ccccccccccc" />    <path       style="opacity:0.7;fill:url(#linearGradient15650);fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 123.07201,96.475934 c 0.0789,4.291556 -5.18296,20.255786 -4.20626,23.948826 h 27.01131 l 5.4165,-1.13077 0.0395,-11.64004 -8.8956,-11.121067 z"       id="path10799"       sodipodi:nodetypes="ccccccc" />    <path       style="fill:' + color + ';stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1"       d="m 133.50779,96.562644 -10.43578,-0.08671 c -10.29395,0.875665 -15.83992,5.930736 -17.45018,11.995766 -2.61784,12.44625 10.3941,17.77318 22.19315,20.17739 12.14804,2.41028 23.90216,4.03273 35.20709,4.75678 -13.8511,-6.53357 -27.70043,-14.50405 -37.02523,-23.17532 -8.75345,-9.63539 -0.76177,-12.197061 7.51095,-13.667906"       id="path5835"       sodipodi:nodetypes="ccccccc" />    <path       style="opacity:0.5;fill:url(#linearGradient15262);fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 116.08762,97.864393 c -5.27327,3.020757 -5.42622,5.831267 -4.52068,9.819097 7.65045,15.81096 31.62613,19.04828 51.45512,25.71974 -19.40343,-2.37454 -44.08725,-3.74678 -53.35231,-12.32085 -10.300046,-9.94064 -0.22681,-22.01123 6.41787,-23.217987 z"       id="path6985"       sodipodi:nodetypes="ccccc" />    <path       style="clip-rule:evenodd;fill:url(#linearGradient10268);fill-opacity:1;fill-rule:evenodd"       d="m 407.96,345.28 c -17.57,-21.05 -14.98,-39.34 32.77,-46.69 l -0.87,-0.02 c -23.48,2.05 -40.68,10.6 -43.02,22.19 -1.67,8.28 3.19,17.1 9.19,24.52 3.5,4.33 7.38,8.17 10.57,11.15 12.85,11.99 28.33,22.78 43.48,32.4 2.67,1.7 5.34,3.36 7.97,4.98 21.71,13.37 49.79,27.01 73.94,38.92 -17.65,-8.82 -49.72,-25.32 -79.12,-43.9 -22.34,-14.12 -43.14,-29.45 -54.91,-43.55"       mask="url(#SVGID_00000025442907986999820550000007097560835107214239_)"       clip-path="url(#SVGID_00000177461585733685870330000006528038749306838958_)"       id="path334"       transform="matrix(0.26458333,0,0,0.26458333,16.897977,17.560707)" />    <path       style="opacity:0.5;fill:url(#linearGradient4471);fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 119.42931,85.738539 0.80698,1.989667 c 12.61001,2.488033 24.278,2.709299 30.67573,8.91128 l 9.34514,9.059224 C 163.64504,89.962178 143.92263,86.575594 119.42931,85.738539 Z"       id="path2524"       sodipodi:nodetypes="ccscc" />    <path       style="fill:url(#linearGradient13054);fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 121.88511,82.417979 2.34421,1.645708 2.39448,-1.071562 2.39448,1.397 3.09298,-1.172104 2.59291,1.370541 2.91571,-1.494896 2.66701,1.195917 4.23862,-3.042708 3.54012,2.643187 c 5.86565,1.084186 11.29754,3.218445 15.74854,7.131932 3.57527,3.359824 6.51321,7.075751 6.11712,12.641896 -0.94537,7.52562 -6.42842,10.97285 -10.53236,13.11263 -4.17779,2.04621 -9.91106,3.49308 -14.84167,3.6181 l 2.19604,-1.24089 c 4.1126,-0.51592 8.18345,-1.35737 12.11106,-3.31621 4.83085,-2.65711 9.37986,-6.02948 9.96983,-12.1776 -0.014,-6.925922 -5.48061,-11.364781 -5.93831,-11.853458 -4.53517,-3.616815 -9.61372,-5.929527 -15.26681,-6.863358 l -3.11415,-2.325688 -4.09839,2.939521 -2.7649,-1.240896 -2.95804,1.516063 -2.66171,-1.407583 -3.11679,1.182687 -2.36008,-1.375833 -2.4474,1.095375 -2.19339,-1.539875 -2.48444,1.899708 -0.43127,-1.063625 2.8866,-2.203979"       id="path8612"       sodipodi:nodetypes="ccccccccccccccccccccccccccccccc" />    <path       style="fill:url(#linearGradient13237);fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 144.52504,81.298831 3.54012,2.643188 c 5.77043,1.045928 10.38612,3.261844 13.93123,5.883068 3.51273,2.597281 6.11439,5.62369 7.45054,9.458624 l 0.25502,0.08384 c -0.92879,-3.317142 -3.07426,-6.944508 -8.71332,-10.874102 -4.93913,-3.12156 -8.96473,-4.358953 -12.71974,-5.038268 l -3.73856,-2.788708 -4.87449,3.408386 0.63058,0.266676 z"       id="path10943"       sodipodi:nodetypes="ccscccccccc" />    <path       style="opacity:0.5;fill:url(#linearGradient15782);stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1"       d="m 133.29246,96.555992 c -4.92145,0.47571 -11.30692,2.245915 -11.47173,6.662758 0.26599,5.39616 6.80874,9.83603 12.04438,14.10392 l 0.31377,-0.39592 c -4.88608,-3.94752 -11.91245,-8.98014 -11.96748,-13.68624 0.47631,-4.594421 6.26275,-5.716373 11.31124,-6.679229 l -0.23018,-0.0053"       id="path8807"       sodipodi:nodetypes="ccccccc" />    <path       style="opacity:0.3;fill:url(#linearGradient2875);fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 167.21306,78.29581 1.28587,4.41325 5.69913,1.320271 0.34925,4.439708 5.03237,2.021417 -0.11377,5.188479 2.63525,3.505729 -2.52941,4.524376 c -4.11565,12.32873 -16.5289,15.95829 -31.23671,16.67933 30.57898,-1.50107 41.51562,-31.208231 -2.04523,-42.978914 l 15.39346,1.029229 z"       id="path2074"       sodipodi:nodetypes="cccccccccccc" />    <path       style="fill:' + color + ';stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1"       d="m 137.30192,96.515021 6.03514,9.032879 -1.49754,11.40353 7.15433,9.12813 h 16.14753 l -4.13545,-5.37633 -5.2017,1.64835 -1.30969,-4.30742 5.76262,-12.34545 -9.51441,-9.183689 z"       id="path1877" />    <path       style="fill:url(#linearGradient15235);stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;opacity:0.3;fill-opacity:1"       d="m 137.30191,96.538834 7.27869,-0.01323 5.98223,7.670276 -2.39183,12.16818 4.88685,9.71551 -4.064,-1e-5 -7.15433,-9.12812 1.49754,-11.40354 z"       id="path2363" />    <path       style="fill:url(#linearGradient14701);stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1"       d="m 160.25716,105.69871 -9.48796,-9.159879 8.80534,9.286879 -5.08,12.21845 z"       id="path2780" />    <path       style="opacity:0.2;fill:url(#linearGradient1303);fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 141.53525,77.298331 2.02406,-1.666875 2.73844,0.05821 c -0.57338,1.441487 -2.94836,1.666888 -4.7625,1.608665 z"       id="path4940-6"       sodipodi:nodetypes="cccc" />  </g></svg>';
                }

function svgCosmos(color,width,height){
    return '<?xml version="1.0" encoding="UTF-8" standalone="no"?><!-- Created with Inkscape (http://www.inkscape.org/) --><svg   width="' + width + '"   height="' + height + '"   viewBox="0 0 361.42084 361.42084"   version="1.1"   id="svg5"   inkscape:version="1.1.1 (3bf5ae0d25, 2021-09-20)"   sodipodi:docname="orig.svg"   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"   xmlns="http://www.w3.org/2000/svg"   xmlns:svg="http://www.w3.org/2000/svg">  <sodipodi:namedview     id="namedview7"     pagecolor="#ffffff"     bordercolor="#666666"     borderopacity="1.0"     inkscape:pageshadow="2"     inkscape:pageopacity="0.0"     inkscape:pagecheckerboard="0"     inkscape:document-units="mm"     showgrid="false"     inkscape:zoom="0.32026164"     inkscape:cx="635.41796"     inkscape:cy="825.88722"     inkscape:window-width="1920"     inkscape:window-height="1111"     inkscape:window-x="-9"     inkscape:window-y="-9"     inkscape:window-maximized="1"     inkscape:current-layer="layer1"     fit-margin-top="0"     fit-margin-left="0"     fit-margin-right="0"     fit-margin-bottom="0" />  <defs     id="defs2" />  <g     inkscape:label="Ebene 1"     inkscape:groupmode="layer"     id="layer1">    <circle       style="opacity:1;fill:' + color + ';stroke:none;stroke-width:13.3965;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke"       id="path1663"       cx="182.55452"       cy="181.09409"       r="87.626167" />    <path       id="path1663-5"       style="opacity:0.25;fill:' + color + ';stroke:none;stroke-width:13.3965;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke"       d="M 182.37216,93.712983 A 87.626165,87.626165 0 0 0 132.04655,109.6996 l 102.93428,141.58619 a 87.626165,87.626165 0 0 0 35.01749,-69.94663 87.626165,87.626165 0 0 0 -87.62616,-87.626177 z" />    <path       id="path1663-9-6"       style="fill:#000000;stroke:none;stroke-width:50.6324;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke;opacity:0.45"       d="M 903.96875 430.77344 A 331.18551 331.18551 0 0 1 978.50391 640.04688 A 331.18551 331.18551 0 0 1 647.31836 971.23242 A 331.18551 331.18551 0 0 1 434.01367 893.11719 A 331.18551 331.18551 0 0 0 691.07422 1015.6348 A 331.18551 331.18551 0 0 0 1022.2598 684.44922 A 331.18551 331.18551 0 0 0 903.96875 430.77344 z "       transform="scale(0.26458333)" />    <rect       style="fill:none;stroke:none;stroke-width:8.85289;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke"       id="rect862"       x="0"       y="0"       height="361.42084"       width="361.42084"       inkscape:export-filename="C:\\Users\\demia\\Desktop\\Robogator\\cosmos\\cosmos_standard.png"       inkscape:export-xdpi="71.999992"       inkscape:export-ydpi="71.999992" />    <circle       style="opacity:1;fill:' + color + ';stroke:none;stroke-width:10.5833;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke"       id="path1461"       cx="84.989914"       cy="76.728439"       r="4.7503476" />    <circle       style="fill:' + color + ';stroke:none;stroke-width:10.5833;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke"       id="path1461-2"       cx="303.77072"       cy="128.51837"       r="4.7503476" />    <circle       style="fill:' + color + ';stroke:none;stroke-width:10.5833;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke"       id="path1461-0"       cx="291.50305"       cy="261.12598"       r="4.7503476" />    <circle       style="fill:' + color + ';stroke:none;stroke-width:10.5833;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke"       id="path1461-06"       cx="234.25395"       cy="290.91888"       r="4.7503476" />    <circle       style="fill:' + color + ';stroke:none;stroke-width:10.5833;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke"       id="path1461-8"       cx="104.56722"       cy="285.66132"       r="4.7503476" />    <circle       style="fill:' + color + ';stroke:none;stroke-width:10.5833;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke"       id="path1461-1"       cx="70.100937"       cy="238.92735"       r="4.7503476" />    <path       style="opacity:0.3;fill:#000000;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 102.10954,214.32418 c 2.81837,5.80399 5.54816,11.65227 9.43234,16.92335 48.63473,0.39497 97.18805,-1.16914 145.05674,-2.68928 l 9.20076,-18.83963 c -55.03091,6.40744 -109.82695,7.93169 -163.68984,4.60556 z"       id="path2431"       sodipodi:nodetypes="ccccc" />    <path       style="opacity:0.3;fill:#000000;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 95.220434,173.49981 c 59.677206,6.61538 117.047606,0.92773 174.446936,-4.60556 l 0.53749,15.23316 c -57.63262,9.19053 -115.88391,8.46844 -174.41797,5.26002 -0.53445,-4.95024 -0.573726,-10.39566 -0.566456,-15.88762 z"       id="path2943"       sodipodi:nodetypes="ccccc" />    <path       style="opacity:0.3;fill:#000000;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 100.52811,150.5459 c 54.27064,3.63633 108.16856,-0.92708 162.0583,-5.67064 l -8.47053,-14.7504 c -48.03857,3.76779 -95.49727,8.98525 -146.50984,5.31806 z"       id="path3616"       sodipodi:nodetypes="ccccc" />    <path       style="opacity:1;fill:' + color + ';stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 108.25113,224.04085 c -1.00471,0.66158 -3.08573,1.8644 -4.36309,2.11701 -14.05734,-0.42519 -30.186374,1.79281 -33.458974,-12.39222 -10.816411,-15.10837 51.573674,-49.73764 94.387344,-60.51529 32.60064,-11.55635 66.88625,-19.50203 104.92071,-19.41447 7.55152,1.40713 15.54633,1.37355 20.86847,10.02616 4.7317,14.85117 -14.30453,24.68449 -23.08936,31.36264 l -1.77329,-12.1794 c 6.03585,-3.75872 12.00703,-9.60686 14.7341,-14.33875 -5.20473,-4.00883 -11.80681,-2.98716 -17.89063,-3.83127 -32.30922,0.90768 -62.82403,8.69391 -92.81312,18.49539 -25.74347,8.82182 -50.92771,18.76209 -73.940189,33.0459 -5.63825,3.91942 -11.541337,7.54992 -14.251043,14.66411 5.943265,3.0295 14.432139,3.81369 22.024872,3.26934 z"       id="path4450"       sodipodi:nodetypes="ccccccccccccccc" />    <path       style="opacity:0.45;fill:#000000;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"       d="m 108.25114,224.04085 c -1.00472,0.66158 -3.08574,1.8644 -4.36309,2.11701 -14.05735,-0.42519 -30.18638,1.79281 -33.45898,-12.39222 -10.81641,-15.10837 51.57367,-49.73764 94.38734,-60.51529 32.60064,-11.55635 66.88625,-19.50203 104.92071,-19.41447 7.55152,1.40713 15.54633,1.37355 20.86847,10.02616 4.73171,14.85117 -14.30453,24.68449 -23.08935,31.36264 l -1.77329,-12.1794 c 6.03585,-3.75872 12.00703,-9.60686 14.7341,-14.33875 -5.20473,-4.00883 -11.80681,-2.98716 -17.89063,-3.83127 -32.30922,0.90768 -62.82403,8.69391 -92.81312,18.49539 -25.74347,8.82182 -50.92771,18.76209 -73.94019,33.0459 -5.63825,3.91942 -11.54134,7.54992 -14.25105,14.66411 5.94327,3.0295 14.43214,3.81369 22.02488,3.26934 z"       id="path4450-9"       sodipodi:nodetypes="ccccccccccccccc" />  </g></svg>';
}

function svgImport(color,width,height){
    return '<?xml version="1.0" encoding="UTF-8" standalone="no"?><!-- Created with Inkscape (http://www.inkscape.org/) --><svg   version="1.1"   id="svg2"   width="' + width + '"   height="' + height + '"   viewBox="0 0 511.99999 511.99999"   sodipodi:docname="Scripty_import.svg"   inkscape:version="1.1.1 (3bf5ae0d25, 2021-09-20)"   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"   xmlns="http://www.w3.org/2000/svg"   xmlns:svg="http://www.w3.org/2000/svg">  <defs     id="defs6" />  <sodipodi:namedview     id="namedview4"     pagecolor="#ffffff"     bordercolor="#000000"     borderopacity="0.25"     inkscape:showpageshadow="2"     inkscape:pageopacity="0.0"     inkscape:pagecheckerboard="0"     inkscape:deskcolor="#d1d1d1"     inkscape:pageshadow="2"     showgrid="false"     fit-margin-top="0"     fit-margin-left="0"     fit-margin-right="0"     fit-margin-bottom="0"     inkscape:zoom="0.5"     inkscape:cx="143"     inkscape:cy="327"     inkscape:window-width="1920"     inkscape:window-height="1111"     inkscape:window-x="-9"     inkscape:window-y="-9"     inkscape:window-maximized="1"     inkscape:current-layer="g12-6" />  <g     id="g8"     inkscape:groupmode="layer"     inkscape:label="ink_ext_XXXXXX"     transform="matrix(1.3333333,0,0,-1.3333333,-235.46778,2833.209)">    <g       id="g10"       transform="scale(0.1)">      <g         id="g10-6"         transform="matrix(0.36242811,0,0,0.36242811,-5.2474496,15609.051)">        <g           transform="matrix(3.1072093,0,0,3.1072093,-23609.928,-35290.936)"           id="g260"           style="stroke:' + color + ';stroke-width:33.2996;stroke-miterlimit:4;stroke-dasharray:none">          <g             transform="matrix(0.94488904,0,0,0.94488904,8518.9408,12075.194)"             id="g10-9">            <g               transform="matrix(0.1,0,0,0.1,0,549.77208)"               id="g12-6">              <g                 transform="matrix(2.09904,0,0,2.09904,0,-5215.7869)"                 id="g14-1"                 style="fill:' + color + ';stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none">                <path                   id="path16-6"                   style="fill:' + color + ';fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"                   d="m 8981.55,8932.1705 2897.85,-2898.13 2897.8,2898.13 h -922.5 c -240.6,0 -435.8,194.95 -435.8,435.87 V 14427.143 H 10340.3 V 9368.0405 c 0,-240.92 -195.3,-435.87 -436.04,-435.87 z m 2897.85,-3950.33 c -115.6,0 -226.4,45.93 -308.3,127.68 l -3950.08,3950.33 c -124.77,124.68 -162.03,312.1 -94.57,474.89 67.56,163.07 226.44,269.17 402.76,269.17 h 1539.08 v 5059.1325 c 0,240.8 195.24,435.8 435.97,435.8 h 3950.44 c 240.7,0 435.9,-195 435.9,-435.8 V 9803.9105 h 1539.1 c 176.5,0 335.1,-106.1 403,-269.17 67.3,-162.79 30,-350.21 -94.9,-474.89 l -3950.2,-3950.33 c -81.7,-81.75 -192.5,-127.68 -308.2,-127.68"                   sodipodi:nodetypes="cccssccsscccccscsssscscccc" />              </g>              <g                 transform="matrix(2.62194,0,0,2.62194,0,845.8032)"                 id="g18-4"                 style="fill:' + color + ';stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none">                <path                   id="path20-4"                   style="fill:' + color + ';fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"                   d="m 13257.2,6189.2 h -1922.693 v 697.84 H 13257.2 c 1293,0 2344.7,1051.97 2344.7,2344.95 0,1239.81 -969.2,2267.81 -2206.9,2340.41 l -328.4,19.2 v 329.2 c 0,1210.5 -980.6,2191.3 -2186.3,2191.3 -853.2,0 -1634.16,-501.8 -1989.44,-1278.3 l -233.87,-511.2 -354.39,436.5 c -252.53,311.1 -626.91,489.5 -1027.29,489.5 -729.39,0 -1322.84,-593.5 -1322.84,-1323 v -323.2 l -322.13,-32.4 c -1214.18,-93.1 -2165.32,-1120.1 -2165.32,-2338.01 0,-1292.98 1051.75,-2344.95 2344.73,-2344.95 H 7709.7934 V 6189.2 H 5809.75 c -1677.84,0 -3042.79,1364.87 -3042.79,3042.79 0,1479.51 1081.68,2741.71 2512.42,2996.11 151.98,978.4 989.15,1718.3 1995.93,1718.3 444.86,0 868.78,-144 1215.32,-405.3 531.02,783.1 1425.28,1268.8 2389.67,1268.8 1486,0 2713.1,-1129.4 2867.7,-2575.1 1453.8,-236.5 2552,-1500 2552,-3002.81 0,-1677.92 -1365.1,-3042.79 -3042.8,-3042.79"                   sodipodi:nodetypes="cccssccsscccssccssccsscscscsc" />              </g>              <path                 style="fill:none;stroke:' + color + ';stroke-width:1691.61;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"                 d="M 13827.074,5094.4166 H 36056.001"                 id="path882"                 sodipodi:nodetypes="cc" />            </g>          </g>        </g>      </g>    </g>  </g></svg>';
}

function svgExport(color,width,height){
   return '<?xml version="1.0" encoding="UTF-8" standalone="no"?><!-- Created with Inkscape (http://www.inkscape.org/) --><svg   version="1.1"   id="svg2"   width="' + width + '"   height="' + height + '"   viewBox="0 0 511.99999 511.99999"   sodipodi:docname="Scripty_export.svg"   inkscape:version="1.1.1 (3bf5ae0d25, 2021-09-20)"   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"   xmlns="http://www.w3.org/2000/svg"   xmlns:svg="http://www.w3.org/2000/svg">  <defs     id="defs6" />  <sodipodi:namedview     id="namedview4"     pagecolor="#ffffff"     bordercolor="#000000"     borderopacity="0.25"     inkscape:showpageshadow="2"     inkscape:pageopacity="0.0"     inkscape:pagecheckerboard="0"     inkscape:deskcolor="#d1d1d1"     inkscape:pageshadow="2"     showgrid="false"     fit-margin-top="0"     fit-margin-left="0"     fit-margin-right="0"     fit-margin-bottom="0"     inkscape:zoom="0.35355339"     inkscape:cx="97.580736"     inkscape:cy="12.727922"     inkscape:window-width="1920"     inkscape:window-height="1111"     inkscape:window-x="-9"     inkscape:window-y="-9"     inkscape:window-maximized="1"     inkscape:current-layer="g12-6" />  <g     id="g8"     inkscape:groupmode="layer"     inkscape:label="ink_ext_XXXXXX"     transform="matrix(1.3333333,0,0,-1.3333333,-235.46778,2833.209)">    <g       id="g10"       transform="scale(0.1)">      <g         id="g10-6"         transform="matrix(0.36242811,0,0,0.36242811,-5.2474496,15609.051)">        <g           transform="matrix(3.1072093,0,0,3.1072093,-23609.928,-35290.936)"           id="g260"           style="stroke:' + color + ';stroke-width:33.2996;stroke-miterlimit:4;stroke-dasharray:none">          <g             transform="matrix(0.94488904,0,0,0.94488904,8518.9408,12075.194)"             id="g10-9">            <g               transform="matrix(0.1,0,0,0.1,0,549.77208)"               id="g12-6">              <g                 transform="matrix(2.09904,0,0,-2.09904,0,41160.288)"                 id="g14-1"                 style="fill:' + color + ';stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none">                <path                   id="path16-6"                   style="fill:' + color + ';fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"                   d="m 8981.55,8932.1705 2897.85,-2898.13 2897.8,2898.13 h -922.5 c -240.6,0 -435.8,194.95 -435.8,435.87 V 14427.143 H 10340.3 V 9368.0405 c 0,-240.92 -195.3,-435.87 -436.04,-435.87 z m 2897.85,-3950.33 c -115.6,0 -226.4,45.93 -308.3,127.68 l -3950.08,3950.33 c -124.77,124.68 -162.03,312.1 -94.57,474.89 67.56,163.07 226.44,269.17 402.76,269.17 h 1539.08 v 5059.1325 c 0,240.8 195.24,435.8 435.97,435.8 h 3950.44 c 240.7,0 435.9,-195 435.9,-435.8 V 9803.9105 h 1539.1 c 176.5,0 335.1,-106.1 403,-269.17 67.3,-162.79 30,-350.21 -94.9,-474.89 l -3950.2,-3950.33 c -81.7,-81.75 -192.5,-127.68 -308.2,-127.68"                   sodipodi:nodetypes="cccssccsscccccscsssscscccc" />              </g>              <g                 transform="matrix(2.62194,0,0,2.62194,0,845.8032)"                 id="g18-4"                 style="fill:' + color + ';stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none">                <path                   id="path20-4"                   style="fill:' + color + ';fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"                   d="m 13257.2,6189.2 h -1922.693 v 697.84 H 13257.2 c 1293,0 2344.7,1051.97 2344.7,2344.95 0,1239.81 -969.2,2267.81 -2206.9,2340.41 l -328.4,19.2 v 329.2 c 0,1210.5 -980.6,2191.3 -2186.3,2191.3 -853.2,0 -1634.16,-501.8 -1989.44,-1278.3 l -233.87,-511.2 -354.39,436.5 c -252.53,311.1 -626.91,489.5 -1027.29,489.5 -729.39,0 -1322.84,-593.5 -1322.84,-1323 v -323.2 l -322.13,-32.4 c -1214.18,-93.1 -2165.32,-1120.1 -2165.32,-2338.01 0,-1292.98 1051.75,-2344.95 2344.73,-2344.95 H 7709.7934 V 6189.2 H 5809.75 c -1677.84,0 -3042.79,1364.87 -3042.79,3042.79 0,1479.51 1081.68,2741.71 2512.42,2996.11 151.98,978.4 989.15,1718.3 1995.93,1718.3 444.86,0 868.78,-144 1215.32,-405.3 531.02,783.1 1425.28,1268.8 2389.67,1268.8 1486,0 2713.1,-1129.4 2867.7,-2575.1 1453.8,-236.5 2552,-1500 2552,-3002.81 0,-1677.92 -1365.1,-3042.79 -3042.8,-3042.79"                   sodipodi:nodetypes="cccssccsscccssccssccsscscscsc" />              </g>              <path                 style="fill:none;stroke:' + color + ';stroke-width:1691.61;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"                 d="M 13827.074,5094.4166 H 36056.001"                 id="path882"                 sodipodi:nodetypes="cc" />            </g>          </g>        </g>      </g>    </g>  </g></svg>';
}

function svgCertificate(color,width,height){
    return '<?xml version="1.0" encoding="UTF-8" standalone="no"?><!-- Created with Inkscape (http://www.inkscape.org/) --><svg   width="' + width + '"   height="' + height + '"   viewBox="0 0 169.33333 169.33333"   version="1.1"   id="svg5"   inkscape:version="1.1.1 (3bf5ae0d25, 2021-09-20)"   sodipodi:docname="certificate.svg"   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"   xmlns:xlink="http://www.w3.org/1999/xlink"   xmlns="http://www.w3.org/2000/svg"   xmlns:svg="http://www.w3.org/2000/svg">  <sodipodi:namedview     id="namedview7"     pagecolor="#ffffff"     bordercolor="#666666"     borderopacity="1.0"     inkscape:pageshadow="2"     inkscape:pageopacity="0.0"     inkscape:pagecheckerboard="0"     inkscape:document-units="mm"     showgrid="false"     fit-margin-top="0"     fit-margin-left="0"     fit-margin-right="0"     fit-margin-bottom="0"     inkscape:zoom="0.15201958"     inkscape:cx="299.30355"     inkscape:cy="-1154.4566"     inkscape:window-width="1920"     inkscape:window-height="1129"     inkscape:window-x="1912"     inkscape:window-y="-8"     inkscape:window-maximized="1"     inkscape:current-layer="layer1" />  <defs     id="defs2">    <linearGradient       inkscape:collect="always"       id="linearGradient3765">      <stop         style="stop-color:#000000;stop-opacity:1;"         offset="0"         id="stop3761" />      <stop         style="stop-color:#000000;stop-opacity:0;"         offset="1"         id="stop3763" />    </linearGradient>    <linearGradient       inkscape:collect="always"       xlink:href="#linearGradient3765"       id="linearGradient3767"       x1="-373.72815"       y1="32.875427"       x2="-11.366769"       y2="-337.83096"       gradientUnits="userSpaceOnUse" />  </defs>  <g     inkscape:label="Ebene 1"     inkscape:groupmode="layer"     id="layer1"     transform="translate(-44.611961,-56.178024)">    <rect       style="fill:none;stroke:none;stroke-width:8.60003;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke"       id="rect846"       width="169.33333"       height="169.33333"       x="44.611961"       y="56.178024"       rx="0"       ry="0" />    <path       sodipodi:type="star"       style="fill:' + color + ';stroke:none;stroke-width:11.3386;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke"       id="path1055"       inkscape:flatsided="false"       sodipodi:sides="12"       sodipodi:cx="-193.59171"       sodipodi:cy="-152.99989"       sodipodi:r1="197.4809"       sodipodi:r2="172.19321"       sodipodi:arg1="0.96525166"       sodipodi:arg2="1.227051"       inkscape:rounded="0.21756483"       inkscape:randomized="0"       d="M -81.183608,9.3673571 C -90.910545,16.101391 -124.4215,5.1327852 -135.5599,9.1198454 c -11.1384,3.9870616 -30.07637,33.7300976 -41.86716,34.6984736 -11.79079,0.968376 -35.32783,-25.286193 -46.96749,-27.402496 -11.63967,-2.116303 -42.91195,14.172935 -53.60727,9.116177 -10.69531,-5.056758 -17.9517,-39.5624 -26.97379,-47.215003 -9.0221,-7.652606 -44.24931,-9.181854 -50.98335,-18.908793 -6.73403,-9.726937 4.23458,-43.237893 0.24752,-54.376288 -3.98707,-11.138396 -33.7301,-30.076376 -34.69848,-41.867166 -0.96837,-11.79079 25.2862,-35.32783 27.4025,-46.96749 2.1163,-11.63967 -14.17294,-42.91195 -9.11618,-53.60727 5.05676,-10.69531 39.5624,-17.9517 47.215,-26.97379 7.65261,-9.0221 9.18186,-44.24931 18.9088,-50.98334 9.72693,-6.73404 43.23789,4.23457 54.37629,0.24751 11.13839,-3.98706 30.07637,-33.7301 41.86716,-34.69848 11.79079,-0.96837 35.32783,25.2862 46.96749,27.4025 11.63967,2.1163 42.91195,-14.17293 53.60727,-9.11618 10.695312,5.05676 17.951699,39.5624 26.973792,47.21501 9.022096,7.6526 44.249307,9.18185 50.983343,18.90879 6.734034,9.72694 -4.234572,43.23789 -0.247512,54.37629 3.987062,11.1384 33.7300975,30.07637 34.6984738,41.86716 0.968376,11.7908 -25.2861928,35.32783 -27.4024958,46.9675 -2.116303,11.63966 14.172935,42.911946 9.116177,53.607262 -5.056758,10.695312 -39.5624,17.951699 -47.215003,26.973792 -7.652606,9.022096 -9.181854,44.2493075 -18.908793,50.9833431 z"       transform="matrix(0.41667864,0,0,0.41667864,209.94416,204.59648)"       inkscape:transform-center-x="-0.57904054"       inkscape:transform-center-y="-7.304877" />    <path       sodipodi:type="star"       style="opacity:0.35;fill:url(#linearGradient3767);fill-opacity:1;stroke:none;stroke-width:11.3386;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke"       id="path1055-4"       inkscape:flatsided="false"       sodipodi:sides="12"       sodipodi:cx="-193.59171"       sodipodi:cy="-152.99989"       sodipodi:r1="197.4809"       sodipodi:r2="172.19321"       sodipodi:arg1="0.96525166"       sodipodi:arg2="1.227051"       inkscape:rounded="0.21756483"       inkscape:randomized="0"       transform="matrix(0.41667864,0,0,0.41667864,209.94416,204.59648)"       inkscape:transform-center-x="-0.57904054"       inkscape:transform-center-y="-7.304877"       d="M -81.183608,9.3673571 C -90.910545,16.101391 -124.4215,5.1327852 -135.5599,9.1198454 c -11.1384,3.9870616 -30.07637,33.7300976 -41.86716,34.6984736 -11.79079,0.968376 -35.32783,-25.286193 -46.96749,-27.402496 -11.63967,-2.116303 -42.91195,14.172935 -53.60727,9.116177 -10.69531,-5.056758 -17.9517,-39.5624 -26.97379,-47.215003 -9.0221,-7.652606 -44.24931,-9.181854 -50.98335,-18.908793 -6.73403,-9.726937 4.23458,-43.237893 0.24752,-54.376288 -3.98707,-11.138396 -33.7301,-30.076376 -34.69848,-41.867166 -0.96837,-11.79079 25.2862,-35.32783 27.4025,-46.96749 2.1163,-11.63967 -14.17294,-42.91195 -9.11618,-53.60727 5.05676,-10.69531 39.5624,-17.9517 47.215,-26.97379 7.65261,-9.0221 9.18186,-44.24931 18.9088,-50.98334 9.72693,-6.73404 43.23789,4.23457 54.37629,0.24751 11.13839,-3.98706 30.07637,-33.7301 41.86716,-34.69848 11.79079,-0.96837 35.32783,25.2862 46.96749,27.4025 11.63967,2.1163 42.91195,-14.17293 53.60727,-9.11618 10.695312,5.05676 17.951699,39.5624 26.973792,47.21501 9.022096,7.6526 44.249307,9.18185 50.983343,18.90879 6.734034,9.72694 -4.234572,43.23789 -0.247512,54.37629 3.987062,11.1384 33.7300975,30.07637 34.6984738,41.86716 0.968376,11.7908 -25.2861928,35.32783 -27.4024958,46.9675 -2.116303,11.63966 14.172935,42.911946 9.116177,53.607262 -5.056758,10.695312 -39.5624,17.951699 -47.215003,26.973792 -7.652606,9.022096 -9.181854,44.2493075 -18.908793,50.9833431 z" />  </g></svg>';
}

function svgSearch(color,width,height){
    return '<?xml version="1.0" encoding="UTF-8" standalone="no"?><!-- Created with Inkscape (http://www.inkscape.org/) --><svg   version="1.1"   id="svg2"   width="' + width + '"   height="' + height + '"   viewBox="0 0 511.99999 511.99999"   sodipodi:docname="Scripty_search.svg"   inkscape:version="1.1.1 (3bf5ae0d25, 2021-09-20)"   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"   xmlns="http://www.w3.org/2000/svg"   xmlns:svg="http://www.w3.org/2000/svg">  <defs     id="defs6" />  <sodipodi:namedview     id="namedview4"     pagecolor="#ffffff"     bordercolor="#000000"     borderopacity="0.25"     inkscape:showpageshadow="2"     inkscape:pageopacity="0.0"     inkscape:pagecheckerboard="0"     inkscape:deskcolor="#d1d1d1"     inkscape:pageshadow="2"     showgrid="false"     fit-margin-top="0"     fit-margin-left="0"     fit-margin-right="0"     fit-margin-bottom="0"     inkscape:zoom="0.125"     inkscape:cx="-1764"     inkscape:cy="588"     inkscape:window-width="2560"     inkscape:window-height="1369"     inkscape:window-x="-8"     inkscape:window-y="-8"     inkscape:window-maximized="1"     inkscape:current-layer="g12-6" />  <g     id="g8"     inkscape:groupmode="layer"     inkscape:label="ink_ext_XXXXXX"     transform="matrix(1.3333333,0,0,-1.3333333,-235.46778,2833.209)">    <g       id="g10"       transform="scale(0.1)">      <g         id="g10-6"         transform="matrix(0.36242811,0,0,0.36242811,-5.2474496,15609.051)">        <g           transform="matrix(3.1072093,0,0,3.1072093,-23609.928,-35290.936)"           id="g260"           style="stroke:' + color + ';stroke-width:33.2996;stroke-miterlimit:4;stroke-dasharray:none">          <g             transform="matrix(0.94488904,0,0,0.94488904,8518.9408,12075.194)"             id="g10-9">            <g               transform="matrix(0.1,0,0,0.1,0,549.77208)"               id="g12-6">              <path                 style="fill:none;stroke:' + color + ';stroke-width:5638.69;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"                 d="M 30284.993,16583.243 39368.729,7279.4082"                 id="path882"                 sodipodi:nodetypes="cc" />              <circle                 style="opacity:1;fill:none;stroke:' + color + ';stroke-width:4229.02;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;paint-order:markers fill stroke"                 id="path933"                 cx="21353.119"                 cy="-25605.148"                 r="11686.305"                 transform="scale(1,-1)" />            </g>          </g>        </g>      </g>    </g>  </g></svg>';
}

function svgDeactivate(color,width,height){
    return '<?xml version="1.0" encoding="UTF-8" standalone="no"?><!-- Created with Inkscape (http://www.inkscape.org/) --><svg   version="1.1"   id="svg2"   width="' + width + '"   height="' + height + '"   viewBox="0 0 511.99999 511.99999"   sodipodi:docname="Scripty_deactivate.svg"   inkscape:version="1.1.1 (3bf5ae0d25, 2021-09-20)"   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"   xmlns="http://www.w3.org/2000/svg"   xmlns:svg="http://www.w3.org/2000/svg">  <defs     id="defs6" />  <sodipodi:namedview     id="namedview4"     pagecolor="#ffffff"     bordercolor="#000000"     borderopacity="0.25"     inkscape:showpageshadow="2"     inkscape:pageopacity="0.0"     inkscape:pagecheckerboard="0"     inkscape:deskcolor="#d1d1d1"     inkscape:pageshadow="2"     showgrid="false"     fit-margin-top="0"     fit-margin-left="0"     fit-margin-right="0"     fit-margin-bottom="0"     inkscape:zoom="0.5266113"     inkscape:cx="397.82663"     inkscape:cy="160.45991"     inkscape:window-width="1920"     inkscape:window-height="1129"     inkscape:window-x="1912"     inkscape:window-y="-8"     inkscape:window-maximized="1"     inkscape:current-layer="g10-6" />  <g     id="g8"     inkscape:groupmode="layer"     inkscape:label="ink_ext_XXXXXX"     transform="matrix(1.3333333,0,0,-1.3333333,-235.46778,2833.209)">    <g       id="g10"       transform="scale(0.1)">      <g         id="g10-6"         transform="matrix(0.36242811,0,0,0.36242811,-5.2474496,15609.051)">        <rect           style="fill:none;stroke:none;stroke-width:437.132;stroke-linejoin:round;paint-order:markers fill stroke"           id="rect854-6"           width="10595.205"           height="10595.205"           x="4887.1924"           y="-15561.754"           transform="scale(1,-1)" />        <g           transform="matrix(0.76331066,0,0,0.76331066,2633.6689,2705.4415)"           id="g22"           style="fill:none;stroke:' + color + ';stroke-width:636.176;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none">          <path             id="path24"             style="fill:none;fill-opacity:1;fill-rule:nonzero;stroke:' + color + ';stroke-width:636.176;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none"             d="m 12955.5,6107.37 c -3782.12,0 -6848.15,3066.04 -6848.15,6848.13 0,1214.7 316.26,2355.4 870.88,3344.5 -2090.72,-1172.3 -3503.68,-3409.8 -3503.68,-5977.3 0,-3782.17 3066.02,-6848.11 6848.15,-6848.11 2567.5,0 4804.9,1412.89 5977.3,3503.65 -989.1,-554.58 -2129.9,-870.87 -3344.5,-870.87" />        </g>        <path           id="path26"           style="fill:' + color + ';fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.780823"           d="m 9368.6304,11355.968 c -75.0216,14.132 -138.7364,65.198 -168.3222,136.955 -33.1848,80.426 -17.5995,172.796 40.1658,237.917 l 1428.515,1610.292 -1142.898,71.913 c -125.5098,7.887 -220.8555,116.03 -212.9619,241.509 7.8867,125.556 116.0384,220.894 241.5476,213.008 l 1608.5733,-101.195 c 86.827,-5.465 163.035,-59.966 196.22,-140.392 33.186,-80.502 17.57,-172.874 -40.134,-237.993 L 9890.8288,11777.69 11033.71,11705.854 c 125.479,-7.885 220.818,-116.03 212.931,-241.587 -7.886,-125.478 -116.03,-220.816 -241.508,-212.929 l -1608.6042,101.115 c -9.4398,0.625 -18.7549,1.797 -27.8984,3.515" />        <path           id="path28"           style="fill:' + color + ';fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.780823"           d="m 13236.88,11658.536 c -15.148,2.89 -30.295,7.34 -45.131,13.509 l -1146.873,474.74 c -80.424,33.341 -134.77,109.549 -140.157,196.454 -5.31,86.829 39.276,169.206 115.015,212.072 l 1349.027,764.269 -715.701,296.245 c -116.187,48.098 -171.39,181.307 -123.293,297.494 48.098,116.186 181.307,171.468 297.494,123.292 l 1146.794,-474.741 c 80.425,-33.341 134.849,-109.549 140.237,-196.377 5.309,-86.906 -39.354,-169.283 -115.094,-212.149 l -1348.95,-764.27 715.701,-296.244 c 116.187,-48.099 171.391,-181.308 123.292,-297.494 -42.007,-101.351 -148.667,-156.319 -252.361,-136.8" />        <path           id="path30"           style="fill:' + color + ';fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.780823"           d="m 12570.682,9036.22 c -54.736,10.3069 -104.865,40.6029 -139.611,86.6714 -52.471,69.4155 -60.67,162.7237 -21.237,240.3373 l 444.834,875.1473 -416.726,-81.284 c -123.447,-24.049 -242.992,56.532 -267.118,179.98 -24.05,123.37 56.531,242.992 179.978,267.041 l 874.756,170.532 c 85.423,16.632 172.875,-16.866 225.346,-86.28 52.393,-69.494 60.67,-162.803 21.238,-240.417 l -444.913,-875.1463 416.804,81.2833 c 123.37,24.0496 242.992,-56.5313 267.041,-179.9013 24.05,-123.4483 -56.453,-243.0699 -179.901,-267.1196 l -874.757,-170.5313 c -28.811,-5.622 -57.859,-5.5439 -85.734,-0.3128" />      </g>    </g>  </g></svg>';
}

function svgReactivate(color,width,height){
    return '<?xml version="1.0" encoding="UTF-8" standalone="no"?><!-- Created with Inkscape (http://www.inkscape.org/) --><svg   version="1.1"   id="svg2"   width="' + width + '"   height="' + height + '"   viewBox="0 0 511.99999 511.99999"   sodipodi:docname="Scripty_reactivate.svg"   inkscape:version="1.1.1 (3bf5ae0d25, 2021-09-20)"   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"   xmlns="http://www.w3.org/2000/svg"   xmlns:svg="http://www.w3.org/2000/svg">  <defs     id="defs6" />  <sodipodi:namedview     id="namedview4"     pagecolor="#ffffff"     bordercolor="#000000"     borderopacity="0.25"     inkscape:showpageshadow="2"     inkscape:pageopacity="0.0"     inkscape:pagecheckerboard="0"     inkscape:deskcolor="#d1d1d1"     inkscape:pageshadow="2"     showgrid="false"     fit-margin-top="0"     fit-margin-left="0"     fit-margin-right="0"     fit-margin-bottom="0"     inkscape:zoom="0.74474084"     inkscape:cx="128.23253"     inkscape:cy="89.292807"     inkscape:window-width="1920"     inkscape:window-height="1129"     inkscape:window-x="1912"     inkscape:window-y="-8"     inkscape:window-maximized="1"     inkscape:current-layer="g10" />  <g     id="g8"     inkscape:groupmode="layer"     inkscape:label="ink_ext_XXXXXX"     transform="matrix(1.3333333,0,0,-1.3333333,-235.46778,2833.209)">    <g       id="g10"       transform="scale(0.1)">      <rect         style="fill:none;stroke:none;stroke-width:158.429;stroke-linejoin:round;paint-order:markers fill stroke"         id="rect854-6"         width="3840.0002"         height="3840.0002"         x="1766.0084"         y="-21249.068"         transform="scale(1,-1)" />      <g         transform="matrix(2.1091916,0,0,2.1091916,1456.6007,16814.892)"         id="g10-1"         style="stroke:' + color + ';stroke-width:42.9139;stroke-miterlimit:4;stroke-dasharray:none">        <g           transform="scale(0.1)"           id="g12"           style="stroke:' + color + ';stroke-width:429.139;stroke-miterlimit:4;stroke-dasharray:none">          <g             transform="matrix(1.18506,0,0,1.18506,0,-492.93909)"             id="g14"             style="fill:' + color + ';stroke:' + color + ';stroke-width:362.124;stroke-miterlimit:4;stroke-dasharray:none">            <path               id="path16"               style="fill:' + color + ';fill-opacity:1;fill-rule:nonzero;stroke:' + color + ';stroke-width:362.124;stroke-miterlimit:4;stroke-dasharray:none"               d="m 15726.9,7633.23 c -129,-264.21 -321.3,-516.43 -573.1,-730.35 -418.3,-355.51 -915,-531.03 -1366.1,-530.77 -141.3,0 -277.9,17.46 -406.6,51.05 470,878.61 736.9,1882.53 736.9,2948.05 0,113.51 -3.4,226.22 -9.5,338.15 146.8,34.71 292.9,52.01 434.6,51.89 215.3,0 419.8,-39.6 601.9,-116.81 182.4,-77.27 342.5,-191.55 472.4,-344.54 102.3,-120.41 177.7,-255.26 228.1,-400.99 50.4,-145.65 75.6,-302.27 75.6,-464.87 0.1,-260.75 -65.2,-536.6 -194.2,-800.81 z m -3710,-2419.64 C 10952.3,4149.26 9483.52,3491.57 7859.3,3491.48 6235.04,3491.57 4766.28,4149.26 3701.64,5213.59 2637.31,6278.27 1979.59,7746.98 1979.5,9371.21 c 0,259.34 18.1,514.32 50.86,764.69 H 13688.2 c 32.8,-250.4 50.9,-505.35 50.9,-764.69 -0.2,-1624.23 -657.9,-3092.94 -1722.2,-4157.62 z m 3889.4,4331.57 c -169.6,199.77 -380.4,349.63 -613.4,448.18 -233.2,98.76 -488.2,146.86 -749.8,146.86 -154.1,-0.1 -310.5,-17.4 -466.7,-50.3 -10.3,88.9 -22.1,177.3 -36,265.1 -14.6,92 -94,159.9 -187.1,159.9 H 1865.41 c -93.22,0 -172.56,-67.8 -187.14,-159.9 -50.71,-320.3 -77.66,-648.84 -77.66,-983.79 -0.1,-1727.69 700.8,-3293.52 1833.12,-4425.45 637.4,-637.6 1412.37,-1138.34 2276.34,-1454.28 H 3836.34 c -104.64,0 -189.45,-84.8 -189.45,-189.44 0,-104.64 84.81,-189.44 189.45,-189.44 h 7711.56 c 104.6,0 189.4,84.8 189.4,189.44 0,104.64 -84.8,189.44 -189.4,189.44 h -1539.3 c 863.9,315.94 1638.9,816.68 2276.3,1454.28 342.6,342.6 645.6,725.11 901.7,1139.7 191.2,-61.61 394,-92.24 601.1,-92.24 548.3,0.34 1127.2,210.12 1611.3,620.9 291.3,247.42 516,540.82 668.3,852.87 152.4,312.14 232.6,643.27 232.7,967.05 0,201.76 -31.3,400.65 -96.5,588.75 -64.9,188.09 -163.9,365.38 -297.2,522.37" />          </g>        </g>      </g>      <path         style="fill:none;stroke:' + color + ';stroke-width:174.164;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"         d="m 2457.8706,19710.036 c -45.4504,64.633 -318.5648,225.941 -203.7769,490.754 110.373,254.628 475.1452,144.978 506.3846,461.128 36.2885,367.248 -454.3703,410.068 -454.3703,410.068"         id="path1378-3"         sodipodi:nodetypes="cssc" />      <path         style="fill:none;stroke:' + color + ';stroke-width:174.164;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"         d="m 3482.5548,19710.036 c -45.4504,64.633 -318.5648,225.941 -203.7769,490.754 110.373,254.628 475.1452,144.978 506.3846,461.128 36.2885,367.248 -454.3703,410.068 -454.3703,410.068"         id="path1378-3-3"         sodipodi:nodetypes="cssc" />      <path         style="fill:none;stroke:' + color + ';stroke-width:174.164;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"         d="m 4514.6872,19710.036 c -45.4504,64.633 -318.5648,225.941 -203.7769,490.754 110.373,254.628 475.1452,144.978 506.3846,461.128 36.2885,367.248 -454.3703,410.068 -454.3703,410.068"         id="path1378-3-7"         sodipodi:nodetypes="cssc" />    </g>  </g></svg>';
}

function svgDelete(color,width,height){
    return '<?xml version="1.0" encoding="UTF-8" standalone="no"?><!-- Created with Inkscape (http://www.inkscape.org/) --><svg   version="1.1"   id="svg2"   width="' + width +  '"   height="' + height + '"   viewBox="0 0 511.99999 511.99999"   sodipodi:docname="Scripty_deleteTask-stretched.svg"   inkscape:version="1.1.1 (3bf5ae0d25, 2021-09-20)"   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"   xmlns="http://www.w3.org/2000/svg"   xmlns:svg="http://www.w3.org/2000/svg">  <defs     id="defs6" />  <sodipodi:namedview     id="namedview4"     pagecolor="#ffffff"     bordercolor="#000000"     borderopacity="0.25"     inkscape:showpageshadow="2"     inkscape:pageopacity="0.0"     inkscape:pagecheckerboard="0"     inkscape:deskcolor="#d1d1d1"     inkscape:pageshadow="2"     showgrid="false"     fit-margin-top="0"     fit-margin-left="0"     fit-margin-right="0"     fit-margin-bottom="0"     inkscape:zoom="0.13165282"     inkscape:cx="-2214.1568"     inkscape:cy="535.49933"     inkscape:window-width="1920"     inkscape:window-height="1111"     inkscape:window-x="-9"     inkscape:window-y="-9"     inkscape:window-maximized="1"     inkscape:current-layer="g909" />  <g     id="g8"     inkscape:groupmode="layer"     inkscape:label="ink_ext_XXXXXX"     transform="matrix(1.3333333,0,0,-1.3333333,-235.46778,2833.209)">    <g       id="g10"       transform="scale(0.1)">      <g         id="g10-6"         transform="matrix(0.36242811,0,0,0.36242811,-5.2474496,15609.051)">        <g           id="g909"           transform="matrix(0.1294789,0,0,0.1294789,10288.881,8818.1084)"           style="stroke:' + color +  ';stroke-width:1253.69;stroke-miterlimit:4;stroke-dasharray:none">          <path             d="m -17680.799,-25560.421 h 38494.696 l 6023.724,45192.963 h -50567.304 z m 39912.211,-2428.895 h -41354.885 c -809.754,0 -1493.352,466.299 -1594.347,1088.216 l -6352.585,47621.582 c -50.679,349.863 100.993,680.135 405.055,952.189 303.703,252.464 733.917,407.805 1189.291,407.805 h 54085.217 c 455.732,0 885.948,-155.341 1189.649,-407.805 303.702,-252.74 455.374,-602.326 404.697,-952.189 L 23851.276,-26901.1 c -101.352,-621.917 -784.593,-1088.216 -1619.864,-1088.216"             style="fill:' + color +  ';fill-opacity:1;fill-rule:nonzero;stroke:' + color +  ';stroke-width:799.1170615;stroke-miterlimit:4;stroke-dasharray:none"             id="path14" />          <path             d="M 22500.874,-20664.277 H -18903.55 c -846.102,0 -1522.982,544.108 -1522.982,1223.967 0,680.135 676.88,1224.243 1522.982,1224.243 h 41380.053 c 846.103,0 1522.64,-544.108 1522.64,-1224.243 0,-679.859 -676.537,-1223.967 -1498.269,-1223.967"             style="fill:' + color +  ';fill-opacity:1;fill-rule:nonzero;stroke:' + color +  ';stroke-width:1398.31;stroke-miterlimit:4;stroke-dasharray:none"             id="path16" />          <path             d="m -7987.489,-10891.304 c -784.5939,0 -1493.352,466.299 -1569.1876,1088.2154 L -12745.729,10966.824 c -100.994,660.82 531.569,1282.461 1391.999,1360.269 885.947,77.533 1670.5408,-408.08 1771.8946,-1068.625 l 3188.6927,-20789.7786 c 101.3538,-660.5444 -531.5687,-1282.1854 -1391.9982,-1359.9934 -75.8356,0 -126.5126,0 -202.3481,0"             style="fill:' + color +  ';fill-opacity:1;fill-rule:nonzero;stroke:' + color +  ';stroke-width:799.1170615;stroke-miterlimit:4;stroke-dasharray:none"             id="path18" />          <path             d="m 11120.587,-10891.304 c -50.317,0 -126.512,0 -177.19,0 -860.429,77.808 -1492.9924,680.134 -1391.6385,1359.9934 L 12740.452,11238.878 c 101.353,660.544 885.947,1146.434 1771.536,1068.625 860.788,-77.808 1493.351,-679.859 1391.997,-1359.994 L 12715.293,-9822.6787 c -126.513,-621.6403 -810.112,-1068.6253 -1594.706,-1068.6253"             style="fill:' + color +  ';fill-opacity:1;fill-rule:nonzero;stroke:' + color +  ';stroke-width:799.1170615;stroke-miterlimit:4;stroke-dasharray:none"             id="path20" />          <path             d="m 1553.7897,-10891.304 c -885.58822,0 -1594.346325,544.107 -1594.346325,1224.2424 V 11083.536 c 0,679.859 708.758105,1223.967 1594.346325,1223.967 885.9477,0 1594.7058,-544.108 1594.7058,-1223.967 V -9686.6517 c 0,-660.5453 -708.7581,-1204.6523 -1594.7058,-1204.6523"             style="fill:' + color +  ';fill-opacity:1;fill-rule:nonzero;stroke:' + color +  ';stroke-width:799.1170615;stroke-miterlimit:4;stroke-dasharray:none"             id="path22" />          <path             d="m 31798.21,19632.542 h -62057.668 c -885.588,0 -1594.346,543.832 -1594.346,1223.967 v 4119.162 c 0,679.859 708.758,1223.967 1594.346,1223.967 885.948,0 1594.706,-544.108 1594.706,-1223.967 v -2895.195 h 58868.256 v 3672.177 h -53300.623 c -885.588,0 -1594.346,544.108 -1594.346,1224.242 0,679.859 708.758,1223.967 1594.346,1223.967 H 31798.21 c 885.589,0 1594.346,-544.108 1594.346,-1223.967 v -6101.072 c -25.159,-699.449 -733.918,-1243.281 -1594.346,-1243.281"             style="fill:' + color +  ';fill-opacity:1;fill-rule:nonzero;stroke:' + color +  ';stroke-width:1430.86;stroke-miterlimit:4;stroke-dasharray:none"             id="path24" />          <path             d="m 16005.339,45318.188 c -936.265,0 -1872.889,-136.027 -2783.996,-388.491 L -31246.399,32494.679 c -2050.081,-563.422 -3669.837,-1729.17 -4606.281,-3244.505 -885.805,-1476.707 -1012.353,-3108.755 -329.005,-4643.68 l 59779.577,16728.559 c -759.075,1496.297 -2226.908,2700.95 -4150.476,3380.809 -1088.295,408.081 -2252.428,602.326 -3442.077,602.326 z M -37143.433,21828.012 c -227.759,0 -455.553,38.904 -683.348,116.437 -379.61,136.027 -683.347,388.767 -835.199,680.135 l -480.855,1010.407 c -1037.655,2176.156 -911.107,4546.557 379.646,6644.904 1290.752,2098.347 3543.25,3711.081 6402.974,4507.653 L 12107.889,47222.29 c 2834.673,796.572 5922.011,699.449 8655.69,-291.368 2733.319,-990.817 4833.716,-2720.264 5871.695,-4915.734 l 480.892,-1010.407 c 151.67,-310.682 126.511,-640.955 -50.679,-932.599 -177.189,-291.368 -506.408,-524.518 -885.947,-640.955 L -36586.634,21866.916 c -177.153,-19.59 -379.645,-38.904 -556.799,-38.904"             style="fill:' + color +  ';fill-opacity:1;fill-rule:nonzero;stroke:' + color +  ';stroke-width:1430.86;stroke-miterlimit:4;stroke-dasharray:none"             id="path26" />          <path             d="m -22211.171,41209.928 1005.729,-3439.027 22848.5286,6807.273 -1325.37648,3438.751 z m 683.24,-5917.176 c -227.508,0 -455.374,38.628 -683.24,116.436 -379.538,136.027 -683.24,388.491 -835.271,680.135 l -1774.38,5731.62 c -209.824,677.779 126.514,1340.679 961.783,1573.829 L -261.69253,50078.58 c 835.27078,233.15 1746.37723,-97.398 2050.07923,-738.353 l 2094.0257,-5731.895 c 151.6714,-310.683 126.5126,-640.955 -50.677,-932.599 -177.1895,-291.368 -506.0504,-524.518 -885.9477,-640.955 L -20970.845,35370.284 c -177.189,-58.218 -379.897,-77.532 -557.086,-77.532"             style="fill:' + color +  ';fill-opacity:1;fill-rule:nonzero;stroke:' + color +  ';stroke-width:1430.86;stroke-miterlimit:4;stroke-dasharray:none"             id="path28"             sodipodi:nodetypes="ccccccccscccccccc" />          <path             style="fill:none;stroke:' + color +  ';stroke-width:3787.81;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"             d="m 21559.835,32659.347 13884.854,5766.386 2124.458,-6297.501 z"             id="path3208"             sodipodi:nodetypes="cccc" />        </g>      </g>    </g>  </g></svg>';
}


// Check if the user prefers dark mode
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Get params
const urlParams = new URLSearchParams(window.location.search);
var styleTheme = urlParams.get('style');
var styleHighlight = urlParams.get('highlight');
var licenseType = urlParams.get('license');

// Get task if exists
var accountIdKey = urlParams.get('article');

// Check cookie first
if(styleTheme == null)
    styleTheme = getCookie("style")

// Get standard
if(styleTheme == null){
    if (prefersDarkMode){
        styleTheme = "freshdark";
    } else {
        styleTheme = "freshlight";
    }
}

// Check cookie first
if(styleHighlight == null)
    styleHighlight = getCookie("highlight")

// Get standard
if(styleHighlight == null)
    styleHighlight = "#0096F7";

// Check cookie first
if(licenseType == null)
    licenseType = getCookie("license");

// Get standard
if(licenseType == null)
    licenseType = 0;

// Save values to cookies if they came from URL parameters
setCookie("style", styleTheme);
setCookie("highlight", styleHighlight);
setCookie("license", licenseType);

// Set color of links
document.getElementById("links").style.color = styleHighlight;
document.getElementById("back").style.color = styleHighlight;

loadCSS("styles/" + styleTheme + ".css"); // Replace with your CSS file path



if(licenseType == 1){
    setFaviconFromSVG(svgLogoExecutive(styleHighlight,128,128));
    document.getElementById("footer").innerHTML = svgLogoExecutive(styleHighlight,256,256);
    document.getElementById("footerDescription").innerHTML = svgLogoExecutive(styleHighlight,256,256);
    document.title += " for Masters";
    document.getElementById("icon").innerHTML = svgLogoExecutive(styleHighlight,30,30);
    document.getElementById("logo").innerHTML = svgLogoExecutive(styleHighlight,512,512);
}
    
if(licenseType == 0){
    setFaviconFromSVG(svgLogo(styleHighlight,128,128));
    document.getElementById("footer").innerHTML = svgLogo(styleHighlight,256,256);
    document.getElementById("footerDescription").innerHTML = svgLogo(styleHighlight,256,256);
    document.title += " for Beginners";
    document.getElementById("icon").innerHTML = svgLogo(styleHighlight,30,30);
    document.getElementById("logo").innerHTML = svgLogo(styleHighlight,512,512);
}

// Add start text
document.getElementById("title").innerHTML = newestPlaceholder;
document.getElementById("info").innerHTML = searchByTagsPlaceholder;
document.getElementById("searchField").placeholder = startTypingPlaceholder;

// Add footer year
document.getElementById("terms").textContent += " " + new Date().getFullYear();
document.getElementById("termsDescription").textContent += " " + new Date().getFullYear();

function loadCSS(url) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    link.type = "text/css";
    document.head.appendChild(link);

    link.onload = function () {
        // Get disabled color
        const sourceElement = document.querySelector('.mainTextDisabledColor');
        const disabledColor = getComputedStyle(sourceElement).color;
        document.getElementById("searchField").style.setProperty("--placeholder-color", disabledColor);

        // Add magnifier
        const style = getComputedStyle(document.body);
        document.getElementById("magnifier").innerHTML = svgSearch(style.color,18,18);
    };
}

function articleStandard(id,title,topic,content,images,code,date,view){

    // Set font color for code
    var codeColor = COLORDEFAULT;
    if(topic.includes("Powershell"))
        codeColor = COLORPOWERSHELL;
    if(topic.includes("C#"))
        codeColor = COLORCSHARP;

    var formatedTopic = '<div class="mainSecondColor tag" onclick="loadAccountsForTagName(\''+  topic + '\')" style="color: ' + styleHighlight + ' ">' + topic + '</div>';

    // Create speacial header 
    var formatedContent = "";
    var divTitleClass = "account_standard_title_small";
    var divHeaderBackground = ""; 
    if(code.length > 0 && (view == "search" || view == "tag")){
        // Header for code
        divHeaderBackground = '<div class="account_standard_image" style="background-color:' + COLORCODEBG + ';"><div class="account_standard_code_short" style="color: ' + codeColor + ';" >' + code[0] + '</div></div>'
        divTitleClass = "account_standard_title_large";
    } else if (content.includes("ROBOBUTTON") && (view == "search" || view == "tag")){
        // header for button description
        const size = 24;
        const word = (content.match(/ROBOBUTTON(\w+)/) || [])[1];
        divHeaderBackground = '<div class="account_standard_for_button">' + robogatorSvgButton(word,styleHighlight,size,size) + '</div>';
        divTitleClass = "account_standard_title_for_button";
    } else if (images.length > 0 && (view == "search" || view == "tag")){
        divHeaderBackground = '<div class="mainThirdColor account_standard_image" style="background-image: url(' + pathToArticleImages + images[0] + ')" ></div>'
        divTitleClass = "account_standard_title_large";
    }

    // Formated text
    if(view == "search"){
        // Short text
        formatedContent = '<div class="account_standard_description_short">' + replaceRobogatorPlaceholdersWithEllipsis(content) + '</div>';
    } else if(view == "tag"){
        // Medium text
        formatedContent = '<div class="account_standard_description_medium">' + replaceRobogatorPlaceholdersWithEllipsis(content) + '</div>';
    } else {
        // Rich text
        formatedContent = '<div class="account_standard_description_full">' + replaceRobogatorPlaceholdersWithContent(content, images, code, codeColor) + '</div>';
    }

    // Body
    var html =
      '<div idKey="' + id + '" class="mainColor mainTextColor account_standard_container" onclick="loadFullDescription(\'' + id + '\')">' + 
         divHeaderBackground +
         '<div class="' + divTitleClass  + '">' + title + '</div>' +
         formatedContent +
         '<div class="account_standard_tags">' + formatedTopic  + '</div>' +
         '<div class="mainTextDisabledColor account_standard_preview">Preview</div>' +
      '</div>';
    return html;
}

function articleFullsize(id,title,topic,content,images,code,date,view){

    // Set font color for code
    var codeColor = COLORDEFAULT;
    if(topic.includes("Powershell"))
        codeColor = COLORPOWERSHELL;
    if(topic.includes("C#"))
        codeColor = COLORCSHARP;

    var formatedTopic = '<div class="mainSecondColor tag flv" onclick="loadAccountsForTagName(\''+  topic + '\')" style="color: ' + styleHighlight + ' ">' + topic + '</div>';

    var formatedContent = "";
   
    // Rich text
    formatedContent = replaceRobogatorPlaceholdersWithContent(content, images, code, codeColor);

    var html =
      '<div idKey="' + id + '" class="mainColor mainTextColor account_fullview_container flv">' + 
         '<div class="account_fullview_description flv">' + formatedContent + '</div>' +
         '<div class="account_standard_tags flv">' + formatedTopic  + '</div>' +
         '<div class="account_standard_license flv"><div class="tag share" onclick="shareAccount(\''+ id + '\')" style="color: ' + styleHighlight + ' ">Share it</div></div>' +
      '</div>'+
      '<div class="account_fullview_container_annex flv">' + 
         '<div class="mainTextDisabledColor account_fullview_idKey flv">Updated on ' + formatedDate(date) + '</div>' +
       '</div>';
    return html;
}

function loadTags(tagsJson){

    var formatedTags = "";
    var jsonTags = JSON.parse(tagsJson); // Handle the response

    jsonTags.forEach(item => {
        formatedTags += '<div class="mainThirdColor tag" onclick="loadAccountsForTagName(\'' + item + '\')" style="color: ' + styleHighlight + ' ">' + item + '</div>';
    });
    
    var html ='<div class="mainTextColor tag_standard_container">' + formatedTags + '</div>';

    return html;
}

function loadJson(){

    // Scroll to top
    window.scrollTo(0, 0);

    var output = "";
    var lastDate = 0;
    var tags = [];
    
    ARTICLES.forEach(item => {
        
        // Show just the newest article
        if(lastDate < item.Date){
            output = articleStandard(item.Id,item.Title,item.Topic,item.Content,item.Images,item.Code,item.Date);
            lastDate = item.Date;
        }

        // Handle tags -> articel topics
        if (!tags.includes(item.Topic)) {
            tags.push(item.Topic); // Add only if not already in the existingTags array
        }

        // Sort A - Z
        //tags.sort();

    });

    document.getElementById("articles").innerHTML = output;

    // Load json tags
    document.getElementById("topics").innerHTML = loadTags(JSON.stringify(tags));

    // Show curtain
    document.getElementById("wall").style.display = "none";
    
    // Add back button
    document.getElementById("backButton").innerHTML = backPlaceholder;

    // Load fulltext search
    const options = {keys: ["Title", "Content", "Topic"], threshold: 0.5, }; // Lower threshold means stricter match
    FUSE = new Fuse(ARTICLES, options);

    // Show all
    document.querySelectorAll(".hidden").forEach(element => {
        element.classList.replace("hidden", "visible");
    });

    // If task id exists load this task
    if(accountIdKey != null){
        // Open in detail view
        loadFullDescription(accountIdKey);
    } else {
        
        // Add full size hover effect
        document.querySelectorAll('.account_standard_image_panel').forEach(scrollWrapper => {
            scrollWrapper.addEventListener('mouseenter', () => {
            // Add the 'expanded' class to allow vertical overflow when hovered
            scrollWrapper.classList.add('expanded');
            });
        
            scrollWrapper.addEventListener('mouseleave', () => {
            // Remove the 'expanded' class when hover ends
            scrollWrapper.classList.remove('expanded');
            });
        });
    
    }
}

function loadFullDescription(idKey){

    DESCRIPTION = true;

    var output = "";
    var title = "";

    var tags = [];

    // Set height
    HEIGHT = document.getElementById("viewport").clientHeight;

    // Set scroll position 
    SCROLL = document.documentElement.scrollTop;

    // Cut height
    document.getElementById("viewport").style.height= "0";

    // Add animation
    if (document.getElementById("description").classList.contains("fast_fade_out"))
        document.getElementById("description").classList.replace("fast_fade_out", "fast_fade_in");

    // Show     
    document.getElementById("description").style.display = "block";

    // Scroll to top
    document.documentElement.scrollTo(0, 0);

    
    ARTICLES.forEach(item => {

        // Just include accounts with the same tag in it
        if(item.Id.includes(idKey)){
            title = item.Title;
            output = articleFullsize(item.Id,item.Title,item.Topic,item.Content,item.Images,item.Code,item.Date);
        }
    
    });

    // Add title
    document.getElementById("titleFullview").innerHTML = title;

    // Add back button
    if(accountIdKey != null)
        document.getElementById("backButton").innerHTML = backMorePlaceholder;
    
    document.getElementById("accountFullview").innerHTML = output;

    // Add full size hover effect
    document.querySelectorAll('.account_standard_image_panel').forEach(scrollWrapper => {
        scrollWrapper.addEventListener('mouseenter', () => {
          // Add the 'expanded' class to allow vertical overflow when hovered
          scrollWrapper.classList.add('expanded');
        });
      
        scrollWrapper.addEventListener('mouseleave', () => {
          // Remove the 'expanded' class when hover ends
          scrollWrapper.classList.remove('expanded');
        });
    });
}

function replaceRobogatorPlaceholdersWithEllipsis(text) {
    
    // Replace string
    const replaceString = ' ... ';

    // Remove ROBOCODE/IMAGE if at the end (possibly followed by whitespace)
    text = text.replace(/((ROBOCODE\d+|ROBOIMAGE\d+|ROBONAVIGATION\w+|ROBOBUTTON\w+|ROBOMASTER)\s*)+$/, '');
    
    // Replace ROBOCODE/IMAGE everywhere else with ...
    text = text.replace(/ROBOCODE\d+/g, replaceString);
    text = text.replace(/ROBOIMAGE\d+/g, replaceString);
    text = text.replace(/ROBONAVIGATION\w+/g, replaceString);
    text = text.replace(/ROBOBUTTON\w+/g, replaceString);
    text = text.replace(/ROBOMASTER/g, replaceString);
    text = text.replace(/<br>/g, ' ');

    return text;
}

function replaceRobogatorPlaceholdersWithContent(text, images, code, color) {
    
    const navigation =  ["Topics","Accounts","Tasks","Trails","Keys","Settings"];

    // Formatting new line
    text = text.replace(/<br>/g, '<div class="new"></div>');
    
    // Formatting code
    text = text.replace(/ROBOCODE(\d+)/g, (match, number) => {return '<div class="account_standard_code_panel" style="background-color:' + COLORCODEBG + ';"><div class="account_standard_code" style="color: ' + color + ';" >' + code[number] + '</div></div>'});

    // Formatting images
    text = text.replace(/ROBOIMAGE(\d+)/g, (match, number) => {return '<div class="mainColor account_standard_image_panel"><img src="'+ 
        pathToArticleImages + images[number]  + '" ></div>'});

    // Formatting navigation
    text = text.replace(/ROBONAVIGATION(\w+)/g, (match, word) => {
        
        var out = '<div class="mainSecondColor account_standard_navigation_panel">';

        navigation.forEach(item => {
            if(item.toUpperCase().includes(word)){
                out += '<div class="account_standard_navigation" style="color:' + styleHighlight + ';">' + item + '</div>';
            } else {
                out += '<div class="account_standard_navigation">' + item + '</div>';
            } 

        });

        out += '</div>';
        return out;
    });

    // Formatting button
    text = text.replace(/ROBOBUTTON(\w+)/g, (match, word) => {
        return '<div class="account_standard_button_panel"><div class="mainSecondColor account_standard_button">' + robogatorSvgButton(word,styleHighlight,36,36) + '</div></div>';
    });

    // Formatting master
    if(licenseType == 0){
        text = text.replace(/ROBOMASTER/g, '<div class="tag_license_image">' + svgLogoExecutive(styleHighlight,20,20) + '</div>This is only available with a Master Plan license');
    } else {
        text = text.replace(/ROBOMASTER/g, '');
    }
   
    return text;
}

function robogatorSvgButton(id,color,width,height){

    switch (id) {
        case 'DEACTIVATE':
            return svgDeactivate(color,width,height);
        case 'REACTIVATE':
            return svgReactivate(color,width,height) ;
        case 'DELETE':
            return svgDelete(color,width,height);
        case 'IMPORT':
            return svgImport(color,width,height);
        case 'EXPORT':
            return svgExport(color,width,height);    
    }
    return "";
}

function formatedDate(dateInt){

    const input = dateInt.toString();

    const year = input.substring(0, 4);
    const month = input.substring(4, 6);
    const day = input.substring(6, 8);

    const date = new Date(year + "-" + month+ "-" + day);

    // Format using `toLocaleDateString`
    return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
    });

}

function hideFullDescription(){

    if(DESCRIPTION == true){
        // Add animation
    if (document.getElementById("description").classList.contains("fast_fade_in"))
        document.getElementById("description").classList.replace("fast_fade_in", "fast_fade_out");
    
        // Close fullview
        setTimeout(() => {
            document.getElementById("description").style.display = "none";
    
            // Set height again
            document.getElementById("viewport").style.height = "auto";
    
            // Set scroll position again
            window.scrollTo(0, SCROLL);
    
            DESCRIPTION = false;

        }, 150); // Wait for fade-out animation to complete
    }
}
    

function loadAccountsForTagName(tag){

    // Stops bubbling
    event.stopPropagation(); 

    // Close if open
    hideFullDescription();

    var output = "";
    var counter = 0;

    ARTICLES.forEach(item => {
        
        // Just include accounts with the same tag in it
        if(item.Topic.includes(tag)){
            output +=  articleStandard(item.Id,item.Title,item.Topic,item.Content,item.Images,item.Code,item.Date,"tag");
            counter++;
        }
    
    });

    document.getElementById("title").innerHTML = foundByTagPlaceholder + tag + " (" + counter + ")";
    document.getElementById("articles").innerHTML = output;

    // Scroll to
    scrollToListTop();
	
}

function loadAccountsForSearchInput(){

    // Found output
    var output = "";
    var counter = 0;

    // Check search input
    const input = document.getElementById("searchField").value;
    if(input.length > 0){

        // Perform a search
        const result = FUSE.search(input); // Search query

        // Returns matching documents
        result.forEach(r => {
            if(counter < MAXSEARCHCOUNT){
                output +=  articleStandard(r.item.Id,r.item.Title,r.item.Topic,r.item.Content,r.item.Images,r.item.Code,r.item.Date,"search");
                counter++;
            }
        });

    }

    if(counter == 0 && input.length > 0)
        output = '<div class="found_nothing">' + foundNothingPlaceholder + '</div>';

    document.getElementById("found").innerHTML = output;

    // Edit height
    adjustSearchHeight("large");

    // Stop indicate
    const indicatorElement = document.getElementById("indicator");
    if (indicatorElement.classList.contains("indicator_on"))
        indicatorElement.classList.replace("indicator_on", "indicator_off");
}

function shareAccount(idKey) {

    // Create url
    const url = cleanUrl + "?article=" +  idKey; 

    // Stops bubbling
    event.stopPropagation(); 

    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: url
        }).catch(err => console.error("Sharing failed:", err));
    } else {
        navigator.clipboard.writeText(url).then(() => {
            alert("Link copied to clipboard!");
        }).catch(err => console.error("Copy failed:", err));
    }
}

function scrollToListTop() {
    // Select the target div by its id
    const targetDiv = document.getElementById('list');

    // Close fullview
    setTimeout(() => {
        window.scrollTo({
            top: targetDiv.getBoundingClientRect().top + window.scrollY,
            behavior: "smooth"  // Optional: Enables smooth scrolling
          });
    }, 200); // Wait for fade-out animation to complete
}

// Load accounts from js file
const startTime = Date.now(); // Record start time
const script = document.createElement("script");
script.src = pathToArticles;
script.onload = function () {
	const elapsedTime = Date.now() - startTime; // Calculate time difference
    if (elapsedTime >= 500) {
        loadJson();
    } else {
        setTimeout(() => {
            loadJson();
        }, 500 - elapsedTime);
    }	
};

// Add to header
document.head.appendChild(script);

function setMaxWithToSmallSearch(){
    const searchElement = document.getElementById("search");
    if (searchElement.classList.contains("search_small")) {
        if(window.innerWidth <= (660 + 40)){
            searchElement.style.maxWidth = window.innerWidth * 0.6 + "px";  
        }
        else{
            searchElement.style.maxWidth = 600 + "px";  
        } 
    }
}

function debounce(func, delay) {
    let timeout;
    return function(args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

function adjustSearchHeight(toggle){

    if(toggle == "large")
        document.getElementById("search").style.height = (document.getElementById("found").offsetHeight + 60 + 20) + "px";

    if(toggle == "small")
        document.getElementById("search").style.height = "60px";

}

const searchElement = document.getElementById("search");
const searchField = document.getElementById("searchField");
const searchFound = document.getElementById("found");

searchField.value = searchPlaceholder;
setMaxWithToSmallSearch();

// Set params to navigatin
addParamsToLinksByClass("robogatorLink", { style: styleTheme, highlight: styleHighlight, license: licenseType });

function addParamsToLinksByClass(className, params) {
    const anchors = document.querySelectorAll(`.${className}`);
    
    anchors.forEach(anchor => {
        if (!anchor.href) return;

        const url = new URL(anchor.href);
        
        // Add new parameters
        Object.keys(params).forEach(key => url.searchParams.set(key, params[key]));

        anchor.href = url.toString();
    });
}
function setCookie(name, value, days = 30) {
    if (!value) return; // Don't store null/undefined values
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
}

function getCookie(name) {
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? match[2] : null;
}

function setFaviconFromSVG(svgString) {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/svg+xml';
    
    // Create a data URI from the SVG string
    link.href = 'data:image/svg+xml;base64,' + btoa(svgString);
  
    // Append the link to the head of the document
    document.head.appendChild(link);
}

document.addEventListener("click", function() {
    
    if(searchField.contains(event.target)){
        // Open it
        searchFound.innerHTML = "";
        adjustSearchHeight("large");
        if (searchElement.classList.contains("search_small")) {
            searchElement.classList.replace("search_small", "search_large");
            searchField.classList.replace("search_field_padding_small", "search_field_padding_large");
            searchField.value = "";
            setMaxWithToSmallSearch();
        }
    }
    else if(searchFound.contains(event.target) || event.target.classList.contains("flv")){
        // Do nothing if clicking inside the found container or while clicking an account in the full view mode
    }
    else
    {
        // Close it
        searchField.value = searchPlaceholder;
        adjustSearchHeight("small");
        searchElement.focus();
        if (searchElement.classList.contains("search_large")) {
            searchElement.classList.replace("search_large", "search_small");
            searchField.classList.replace("search_field_padding_large","search_field_padding_small");
            setMaxWithToSmallSearch();
        }
    }	
});

window.addEventListener('resize', function() {
    setMaxWithToSmallSearch();
});

document.getElementById("searchField").addEventListener("input", debounce(function(event) {
    loadAccountsForSearchInput();
}, 500)); // Fires after 500ms of no typing

document.getElementById("searchField").addEventListener("keydown", function(event) {
    
    // Start indicate
    const indicatorElement = document.getElementById("indicator");
    if (indicatorElement.classList.contains("indicator_off"))
        indicatorElement.classList.replace("indicator_off", "indicator_on");

});

window.addEventListener('resize', function() {

        const searchElement = document.getElementById("search");
        if (searchElement.classList.contains("search_large"))
            adjustSearchHeight("large");
});

document.getElementById("backButton").addEventListener("click", function(event) {
    
    hideFullDescription();
    
});

