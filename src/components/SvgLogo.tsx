"use client";
import { useTheme } from "next-themes";
import { SVGProps, useEffect, useState } from "react";

const svgStyle: SVGProps<SVGElement>["style"] = {
  shapeRendering: "geometricPrecision",
  textRendering: "geometricPrecision",
  imageRendering: "auto",
  fillRule: "evenodd",
  clipRule: "evenodd",
};

export default function SvgLogo() {
  const { resolvedTheme } = useTheme();
  const [fill, setFill] = useState("#000000");

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setFill("#ffffff");
    } else {
      setFill("#000000");
    }
  }, [resolvedTheme]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="150px"
      viewBox={"0 0 950 410"}
      style={svgStyle}
    >
      <g>
        <path
          fill="#b31e21"
          d="M 911.5,40.5 C 911.804,42.7957 912.804,43.129 914.5,41.5C 922.339,45.5009 929.506,50.5009 936,56.5C 936.901,59.0707 938.234,61.404 940,63.5C 941.348,72.8205 937.181,76.9872 927.5,76C 919.253,79.7868 910.919,83.6201 902.5,87.5C 900.199,93.617 897.699,99.617 895,105.5C 890.096,111.425 886.43,118.091 884,125.5C 876.814,136.738 869.814,148.071 863,159.5C 859.555,170.495 854.222,180.495 847,189.5C 840.062,202.029 833.062,214.696 826,227.5C 821.653,233.682 815.82,237.682 808.5,239.5C 802.55,239.046 800.217,235.879 801.5,230C 802.13,225.903 802.13,221.903 801.5,218C 810.167,198.658 820.333,180.158 832,162.5C 837.063,151.372 843.396,141.039 851,131.5C 851.874,127.213 853.707,123.379 856.5,120C 856.167,119.667 855.833,119.333 855.5,119C 863.326,108.193 869.826,96.6929 875,84.5C 878.397,82.4421 880.063,79.4421 880,75.5C 880.667,74.8333 881.333,74.1667 882,73.5C 880.897,64.8767 878.731,56.5434 875.5,48.5C 875.771,46.6203 875.104,45.287 873.5,44.5C 873.881,36.6196 878.048,32.6196 886,32.5C 890.546,33.1089 895.046,33.9422 899.5,35C 903.58,37.1283 907.58,38.9617 911.5,40.5 Z M 885.5,36.5 C 889.391,37.5018 893.391,38.3352 897.5,39C 898.609,40.813 897.942,41.6463 895.5,41.5C 895.286,43.1439 895.62,44.6439 896.5,46C 894.623,47.1853 892.623,48.1853 890.5,49C 889.359,49.7412 889.359,50.5745 890.5,51.5C 889.635,52.5827 888.635,52.7494 887.5,52C 884.314,48.9791 880.98,46.1458 877.5,43.5C 878.816,42.1934 879.816,40.6934 880.5,39C 882.491,38.6264 884.158,37.793 885.5,36.5 Z M 919.5,50.5 C 918.167,50.5 916.833,50.5 915.5,50.5C 914.167,50.5 912.833,50.5 911.5,50.5C 909.57,50.2294 908.236,49.2294 907.5,47.5C 906.04,45.5372 904.373,43.7038 902.5,42C 903,41.8333 903.5,41.6667 904,41.5C 907.62,43.7263 911.453,45.5596 915.5,47C 917.093,47.9487 918.426,49.1154 919.5,50.5 Z M 907.5,50.5 C 908.833,51.1667 910.167,51.8333 911.5,52.5C 912.26,54.9845 913.26,54.9845 914.5,52.5C 915.167,52.5 915.5,52.1667 915.5,51.5C 916.9,52.0998 917.9,53.0998 918.5,54.5C 918.031,56.0284 916.531,57.0284 914,57.5C 911.5,57 909,56.5 906.5,56C 903.684,53.6355 904.018,51.8022 907.5,50.5 Z M 895.5,56.5 C 898.187,56.3359 900.854,56.5026 903.5,57C 908.322,61.1561 913.655,64.4894 919.5,67C 921.728,67.8201 923.728,67.4868 925.5,66C 924.692,64.2942 923.359,63.4609 921.5,63.5C 921.33,62.1779 921.663,61.0113 922.5,60C 925.077,58.7496 927.743,58.4163 930.5,59C 933.002,61.6727 935.002,64.6727 936.5,68C 934.918,70.8716 932.418,72.0382 929,71.5C 918.455,69.9852 908.622,66.4852 899.5,61C 897.808,59.6927 896.475,58.1927 895.5,56.5 Z M 892.5,63.5 C 892.973,64.9063 893.973,65.573 895.5,65.5C 902.296,68.4805 908.963,71.6472 915.5,75C 911.707,76.7337 907.873,78.2337 904,79.5C 901.593,78.0458 899.093,76.7125 896.5,75.5C 894.798,71.2594 892.465,67.4261 889.5,64C 890.448,63.5172 891.448,63.3505 892.5,63.5 Z M 888.5,79.5 C 891.92,81.2385 895.42,82.9051 899,84.5C 899.225,90.6439 897.225,91.6439 893,87.5C 891.223,84.9406 889.723,82.2739 888.5,79.5 Z M 882.5,82.5 C 884.582,83.5849 884.916,85.0849 883.5,87C 885.527,89.6805 888.193,91.3472 891.5,92C 895.287,94.9404 895.12,97.7737 891,100.5C 889.739,100.241 888.739,99.5742 888,98.5C 885.929,95.4118 884.262,92.0785 883,88.5C 882.25,87.8742 881.416,87.3742 880.5,87C 881.267,85.5295 881.933,84.0295 882.5,82.5 Z M 879.5,96.5 C 878.609,97.1098 877.609,97.4431 876.5,97.5C 876.685,95.8042 877.519,94.4709 879,93.5C 879.483,94.448 879.649,95.448 879.5,96.5 Z M 879.5,99.5 C 881.762,100.823 884.096,102.157 886.5,103.5C 887.466,105.396 887.799,107.396 887.5,109.5C 883.236,108.235 880.236,105.568 878.5,101.5C 878.328,100.508 878.662,99.8417 879.5,99.5 Z M 871.5,106.5 C 874.443,108.979 877.776,110.979 881.5,112.5C 884.162,115.2 883.829,117.533 880.5,119.5C 878.183,116.683 875.683,114.016 873,111.5C 871.991,109.975 871.491,108.308 871.5,106.5 Z M 865.5,115.5 C 867.871,118.372 870.871,120.206 874.5,121C 875.211,122.255 876.044,123.421 877,124.5C 876.778,126.456 875.945,128.29 874.5,130C 873.833,130.667 873.167,130.667 872.5,130C 871.129,126.62 868.962,123.787 866,121.5C 864.759,119.452 864.592,117.452 865.5,115.5 Z M 859.5,124.5 C 861.247,126.428 862.913,128.594 864.5,131C 871.33,132.078 872.83,135.245 869,140.5C 863.512,136.52 860.345,131.187 859.5,124.5 Z M 856.5,138.5 C 856.5,139.167 856.167,139.5 855.5,139.5C 854.273,135.107 854.606,134.774 856.5,138.5 Z M 858.5,140.5 C 862.188,141.349 864.854,143.516 866.5,147C 865.667,147.833 864.833,148.667 864,149.5C 862.138,146.833 859.972,144.5 857.5,142.5C 857.328,141.508 857.662,140.842 858.5,140.5 Z M 848.5,145.5 C 850.067,146.681 850.901,148.347 851,150.5C 851.333,150.167 851.667,149.833 852,149.5C 854.041,150.032 856.208,151.032 858.5,152.5C 860.674,154.527 861.008,156.86 859.5,159.5C 858.448,159.649 857.448,159.483 856.5,159C 852.24,155.285 849.573,150.785 848.5,145.5 Z M 844.5,156.5 C 844.367,159.925 845.033,160.258 846.5,157.5C 848.962,159.402 851.462,161.069 854,162.5C 854.333,162.167 854.667,161.833 855,161.5C 855.938,164.88 855.271,167.88 853,170.5C 848.985,167.484 845.652,163.817 843,159.5C 842.294,157.029 842.627,154.695 844,152.5C 844.49,153.793 844.657,155.127 844.5,156.5 Z M 838.5,167.5 C 835.999,167.489 835.832,166.822 838,165.5C 838.464,166.094 838.631,166.761 838.5,167.5 Z M 838.5,167.5 C 840.894,170.091 843.894,171.758 847.5,172.5C 850.181,175.132 850.014,177.466 847,179.5C 842.404,176.606 839.571,172.606 838.5,167.5 Z M 831.5,175.5 C 833.619,176.791 835.285,178.625 836.5,181C 839.465,180.556 841.965,181.723 844,184.5C 844.636,187.522 843.47,189.022 840.5,189C 837.547,185.592 834.713,182.092 832,178.5C 831.517,177.552 831.351,176.552 831.5,175.5 Z M 826.5,183.5 C 827.198,185.667 828.531,187.5 830.5,189C 836.273,189.752 838.773,192.918 838,198.5C 837.692,199.308 837.192,199.975 836.5,200.5C 832.401,197.573 829.234,193.906 827,189.5C 825.388,187.544 825.222,185.544 826.5,183.5 Z M 823.5,196.5 C 823.5,197.167 823.5,197.833 823.5,198.5C 822.833,198.167 822.167,197.833 821.5,197.5C 821.711,195.576 822.377,195.243 823.5,196.5 Z M 823.5,198.5 C 827.554,199.52 830.887,201.687 833.5,205C 832.853,206.609 832.02,208.109 831,209.5C 827.6,206.887 824.767,203.72 822.5,200C 823.056,199.617 823.389,199.117 823.5,198.5 Z M 817.5,207.5 C 817.833,207.5 818.167,207.5 818.5,207.5C 820.972,209.62 823.806,211.286 827,212.5C 828.073,218.785 826.406,219.785 822,215.5C 819.843,213.183 818.343,210.516 817.5,207.5 Z M 811.5,212.5 C 814.148,216.302 817.648,219.302 822,221.5C 822.494,223.134 822.66,224.801 822.5,226.5C 819.901,226.451 817.734,225.451 816,223.5C 815.099,220.929 813.766,218.596 812,216.5C 811.51,215.207 811.343,213.873 811.5,212.5 Z M 810.5,227.5 C 815.678,226.492 817.178,228.159 815,232.5C 812.328,231.839 810.828,230.172 810.5,227.5 Z"
        />
      </g>
      <g>
        <path
          fill="#3b1711"
          d="M 911.5,40.5 C 912.791,40.2627 913.791,40.596 914.5,41.5C 912.804,43.129 911.804,42.7957 911.5,40.5 Z"
        />
      </g>
      <g>
        <path
          fill={fill}
          d="M 138.5,47.5 C 145.167,48.8333 151.833,48.8333 158.5,47.5C 158.833,47.5 159.167,47.5 159.5,47.5C 165.833,48.8333 172.167,48.8333 178.5,47.5C 188.005,48.3904 197.672,49.2237 207.5,50C 216.945,51.6327 226.278,53.6327 235.5,56C 244.045,59.4123 252.378,63.4123 260.5,68C 264.322,73.1535 268.489,77.9868 273,82.5C 281.529,100.189 280.196,116.856 269,132.5C 260.971,141.719 251.137,148.219 239.5,152C 234.956,153.736 230.29,155.07 225.5,156C 223.445,156.687 221.779,157.854 220.5,159.5C 232.426,162.314 244.093,165.814 255.5,170C 266.098,174.967 276.098,180.967 285.5,188C 298.137,202.474 302.97,219.307 300,238.5C 296.987,250.712 290.821,260.879 281.5,269C 266.822,279.101 250.489,285.101 232.5,287C 217.521,288.59 202.521,289.756 187.5,290.5C 150.221,287.834 112.888,287.001 75.5,288C 64.7125,288.095 54.0458,289.262 43.5,291.5C 40.2058,291.275 37.0391,290.608 34,289.5C 31.8602,285.846 32.0269,282.346 34.5,279C 45.7532,277.106 57.0866,274.439 68.5,271C 77.5486,265.24 81.8819,256.906 81.5,246C 81.496,194.958 81.496,143.958 81.5,93C 80.3051,82.5566 75.9717,73.7233 68.5,66.5C 57.2737,61.6319 45.607,59.1319 33.5,59C 28.1816,55.049 28.1816,51.049 33.5,47C 53.6787,47.1949 73.8454,48.0282 94,49.5C 101.412,49.0961 108.746,48.4294 116,47.5C 123.416,48.0002 130.916,48.0002 138.5,47.5 Z M 141.5,62.5 C 152.838,62.3335 164.172,62.5001 175.5,63C 182.004,64.8773 188.67,65.8773 195.5,66C 223.947,77.4265 233.28,97.9265 223.5,127.5C 216.876,139.622 206.876,147.455 193.5,151C 175.991,154.02 158.325,155.02 140.5,154C 138.413,153.208 136.579,152.041 135,150.5C 134.333,122.833 134.333,95.1667 135,67.5C 136.78,65.2059 138.947,63.5392 141.5,62.5 Z M 199.5,271.5 C 194.527,272.164 189.527,272.497 184.5,272.5C 175.78,272.004 167.113,272.004 158.5,272.5C 154.459,270.994 150.459,269.494 146.5,268C 139.631,262.896 136.298,256.063 136.5,247.5C 136.806,244.615 136.473,241.948 135.5,239.5C 134.346,218.24 134.179,196.906 135,175.5C 136.952,173.106 139.452,171.606 142.5,171C 153.582,169.696 164.582,169.696 175.5,171C 192.246,171.276 207.913,175.443 222.5,183.5C 240.601,198.422 246.768,217.422 241,240.5C 234.737,260.926 220.903,271.259 199.5,271.5 Z"
        />
      </g>
      <g>
        <path
          fill="#2a2c31"
          d="M 158.5,47.5 C 151.833,48.8333 145.167,48.8333 138.5,47.5C 145.223,46.3492 151.89,46.3492 158.5,47.5 Z"
        />
      </g>
      <g>
        <path
          fill="#282a2d"
          d="M 178.5,47.5 C 172.167,48.8333 165.833,48.8333 159.5,47.5C 165.833,46.1667 172.167,46.1667 178.5,47.5 Z"
        />
      </g>
      <g>
        <path
          fill="#ac7f69"
          d="M 873.5,44.5 C 875.104,45.287 875.771,46.6203 875.5,48.5C 874.326,47.4863 873.66,46.153 873.5,44.5 Z"
        />
      </g>
      <g>
        <path
          fill="#d99c8e"
          d="M 907.5,47.5 C 908.236,49.2294 909.57,50.2294 911.5,50.5C 911.5,51.1667 911.5,51.8333 911.5,52.5C 910.167,51.8333 908.833,51.1667 907.5,50.5C 907.5,49.5 907.5,48.5 907.5,47.5 Z"
        />
      </g>
      <g>
        <path
          fill="#191513"
          d="M 911.5,50.5 C 912.833,50.5 914.167,50.5 915.5,50.5C 915.5,50.8333 915.5,51.1667 915.5,51.5C 915.5,52.1667 915.167,52.5 914.5,52.5C 913.5,52.5 912.5,52.5 911.5,52.5C 911.5,51.8333 911.5,51.1667 911.5,50.5 Z"
        />
      </g>
      <g>
        <path
          fill="#e39c88"
          d="M 915.5,51.5 C 915.5,51.1667 915.5,50.8333 915.5,50.5C 916.833,50.5 918.167,50.5 919.5,50.5C 919.5,51.1667 919.5,51.8333 919.5,52.5C 918.662,52.8417 918.328,53.5084 918.5,54.5C 917.9,53.0998 916.9,52.0998 915.5,51.5 Z"
        />
      </g>
      <g>
        <path
          fill="#c3a67a"
          d="M 911.5,52.5 C 912.5,52.5 913.5,52.5 914.5,52.5C 913.26,54.9845 912.26,54.9845 911.5,52.5 Z"
        />
      </g>
      <g>
        <path
          fill="#d69d95"
          d="M 892.5,63.5 C 894.027,63.427 895.027,64.0937 895.5,65.5C 893.973,65.573 892.973,64.9063 892.5,63.5 Z"
        />
      </g>
      <g>
        <path
          fill="#af0f1c"
          d="M 658.5,78.5 C 668.071,77.894 674.238,82.2274 677,91.5C 682.473,107.347 677.306,117.347 661.5,121.5C 655.277,121.114 650.777,118.114 648,112.5C 643.397,100.512 645.23,89.6789 653.5,80C 655.382,79.8019 657.048,79.3019 658.5,78.5 Z"
        />
      </g>
      <g>
        <path
          fill="#fa9389"
          d="M 879.5,96.5 C 879.5,97.5 879.5,98.5 879.5,99.5C 878.662,99.8417 878.328,100.508 878.5,101.5C 877.326,100.486 876.66,99.153 876.5,97.5C 877.609,97.4431 878.609,97.1098 879.5,96.5 Z"
        />
      </g>
      <g>
        <path
          fill="#fc9489"
          d="M 856.5,138.5 C 857.5,138.833 858.167,139.5 858.5,140.5C 857.662,140.842 857.328,141.508 857.5,142.5C 856.599,141.71 855.932,140.71 855.5,139.5C 856.167,139.5 856.5,139.167 856.5,138.5 Z"
        />
      </g>
      <g>
        <path
          fill={fill}
          d="M 199.5,403.5 C 199.5,402.833 199.5,402.167 199.5,401.5C 200.756,401.539 201.756,401.039 202.5,400C 266.472,396.915 330.472,394.248 394.5,392C 422.008,390.446 449.341,388.613 476.5,386.5C 478.806,386.007 481.139,385.674 483.5,385.5C 488.467,386.038 493.134,385.371 497.5,383.5C 497.418,385.252 498.251,386.252 500,386.5C 502.791,385.594 505.624,384.927 508.5,384.5C 509.5,385.833 510.5,385.833 511.5,384.5C 547.874,384.046 584.207,382.546 620.5,380C 623.376,379.562 626.043,378.562 628.5,377C 631.504,373.496 634.838,370.329 638.5,367.5C 644.26,355.371 646.927,342.538 646.5,329C 645.244,269.545 645.91,210.045 648.5,150.5C 651.465,149.727 654.465,149.061 657.5,148.5C 662.803,149.236 668.137,149.736 673.5,150C 674,150.5 674.5,151 675,151.5C 676.587,207.487 676.92,263.487 676,319.5C 677.074,340.731 673.407,361.064 665,380.5C 660.945,385.199 655.778,388.032 649.5,389C 640.833,390 632.167,391 623.5,392C 482.296,400.498 340.963,404.332 199.5,403.5 Z"
        />
      </g>
      <g>
        <path
          fill="#df9985"
          d="M 844.5,156.5 C 845.492,156.328 846.158,156.662 846.5,157.5C 845.033,160.258 844.367,159.925 844.5,156.5 Z"
        />
      </g>
      <g>
        <path
          fill={fill}
          d="M 505.5,170.5 C 508.602,170.154 511.435,170.821 514,172.5C 514.226,178.59 514.226,184.257 514,189.5C 496.038,188.586 484.038,196.586 478,213.5C 476.951,226.307 476.451,239.14 476.5,252C 476.554,263.231 476.887,274.231 477.5,285C 476.5,286 475.5,287 474.5,288C 468.167,288.667 461.833,288.667 455.5,288C 455.072,250.043 454.905,211.877 455,173.5C 460.416,172.361 465.916,172.194 471.5,173C 472,173.5 472.5,174 473,174.5C 473.032,180.652 473.865,186.652 475.5,192.5C 481.983,180.269 491.983,172.935 505.5,170.5 Z"
        />
      </g>
      <g>
        <path
          fill={fill}
          d="M 567.5,170.5 C 579.131,169.942 590.131,172.109 600.5,177C 607.112,181.407 611.945,187.241 615,194.5C 615.687,198.58 616.687,202.58 618,206.5C 618.333,230.833 618.667,255.167 619,279.5C 620.432,282.002 620.598,284.502 619.5,287C 613.326,287.384 607.326,287.384 601.5,287C 600.512,283.255 599.845,279.422 599.5,275.5C 598.448,275.351 597.448,275.517 596.5,276C 579.161,293.376 559.828,296.043 538.5,284C 522.854,268.539 521.354,251.706 534,233.5C 541.618,225.631 550.785,220.465 561.5,218C 567.005,217.797 572.339,216.797 577.5,215C 583.416,214.193 589.25,214.359 595,215.5C 596.022,214.646 596.855,213.646 597.5,212.5C 596.959,194.471 587.459,185.804 569,186.5C 563.178,187.327 557.345,188.16 551.5,189C 547.456,190.175 543.789,192.008 540.5,194.5C 539.522,194.023 538.689,193.357 538,192.5C 536.54,189.101 535.374,185.601 534.5,182C 534.735,181.127 535.069,180.293 535.5,179.5C 545.537,174.04 556.204,171.04 567.5,170.5 Z M 586.5,229.5 C 589.681,229.742 592.681,229.742 595.5,229.5C 596.478,229.977 597.311,230.643 598,231.5C 598.393,240.235 597.727,248.902 596,257.5C 588.487,271.172 576.987,276.672 561.5,274C 549.902,269.949 545.402,261.783 548,249.5C 550.408,242.091 555.242,236.924 562.5,234C 570.426,231.417 578.426,229.917 586.5,229.5 Z"
        />
      </g>
      <g>
        <path
          fill={fill}
          d="M 743.5,215.5 C 751.384,216.795 758.05,216.795 763.5,215.5C 764.66,214.735 765.66,213.735 766.5,212.5C 766.917,197.76 759.917,189.26 745.5,187C 736.709,186.164 728.042,186.83 719.5,189C 716.204,190.65 713.037,192.483 710,194.5C 709.228,194.355 708.561,194.022 708,193.5C 706.197,189.291 705.197,184.958 705,180.5C 716.453,173.325 729.119,169.992 743,170.5C 764.809,169.999 779.142,179.999 786,200.5C 786.833,208.334 787.667,216.168 788.5,224C 788.149,235.27 787.816,246.603 787.5,258C 787.368,267.446 788.034,276.78 789.5,286C 783.277,287.581 776.944,287.915 770.5,287C 769.883,282.71 768.717,278.543 767,274.5C 754.781,286.908 739.948,292.408 722.5,291C 697.194,281.608 689.694,264.441 700,239.5C 705.234,231.126 712.4,224.96 721.5,221C 728.749,218.659 736.083,216.826 743.5,215.5 Z M 754.5,229.5 C 757.834,229.786 761,229.786 764,229.5C 765.225,229.862 766.391,230.362 767.5,231C 766.683,239.088 766.183,247.255 766,255.5C 758.729,269.417 747.229,275.584 731.5,274C 718.896,270.647 714.063,262.481 717,249.5C 719.061,241.771 723.894,236.605 731.5,234C 735.009,233.578 738.343,232.578 741.5,231C 746.019,230.825 750.353,230.325 754.5,229.5 Z"
        />
      </g>
      <g>
        <path
          fill="#32313a"
          d="M 383.5,171.5 C 377.5,172.833 371.5,172.833 365.5,171.5C 371.599,170.636 377.599,170.636 383.5,171.5 Z"
        />
      </g>
      <g>
        <path
          fill={fill}
          d="M 365.5,171.5 C 371.5,172.833 377.5,172.833 383.5,171.5C 400.268,172.815 411.434,181.482 417,197.5C 417.774,201.147 418.441,204.814 419,208.5C 419.333,232.167 419.667,255.833 420,279.5C 421.252,282.014 421.752,284.68 421.5,287.5C 415.203,288.539 408.87,288.706 402.5,288C 402.833,287.667 403.167,287.333 403.5,287C 401.955,285.312 400.955,283.312 400.5,281C 401.647,279.096 401.147,277.596 399,276.5C 391.959,282.435 384.126,286.935 375.5,290C 367.564,291.53 359.564,291.863 351.5,291C 346.5,287.833 341.5,284.667 336.5,281.5C 323.528,265.85 323.195,249.85 335.5,233.5C 347.94,222.451 362.607,216.451 379.5,215.5C 385.678,216.817 392.012,216.817 398.5,215.5C 398.376,214.893 398.043,214.56 397.5,214.5C 399.54,203.168 395.54,194.668 385.5,189C 380.83,188.166 376.163,187.332 371.5,186.5C 365.515,187.442 359.515,188.275 353.5,189C 349.339,190.269 345.505,192.103 342,194.5C 340.739,194.241 339.739,193.574 339,192.5C 337.98,188.958 336.813,185.458 335.5,182C 335.645,181.228 335.978,180.561 336.5,180C 345.794,175.846 355.461,173.012 365.5,171.5 Z M 376.5,230.5 C 383.833,230.5 391.167,230.5 398.5,230.5C 398.666,238.174 398.5,245.841 398,253.5C 395.779,261.72 390.946,267.887 383.5,272C 376.362,274.405 369.029,275.072 361.5,274C 348.535,267.785 345.035,257.952 351,244.5C 353.5,242 356,239.5 358.5,237C 364.633,234.729 370.633,232.563 376.5,230.5 Z"
        />
      </g>
      <g>
        <path
          fill={fill}
          d="M 881.5,184.5 C 901.682,183.538 918.682,190.371 932.5,205C 928.991,209.34 925.324,213.507 921.5,217.5C 914.536,209.192 905.87,203.692 895.5,201C 879.938,200.963 874.104,208.463 878,223.5C 883.694,229.194 889.36,234.86 895,240.5C 899.4,244.967 903.066,249.967 906,255.5C 911.423,276.487 904.256,290.987 884.5,299C 864.415,301.528 846.415,296.528 830.5,284C 827.716,281.888 825.716,279.221 824.5,276C 825.029,274.441 825.696,272.941 826.5,271.5C 828.564,268.71 831.064,266.376 834,264.5C 839.29,268.941 844.79,273.274 850.5,277.5C 857.895,281.79 865.895,283.624 874.5,283C 885.433,278.625 888.933,270.792 885,259.5C 878.4,251.897 871.4,244.564 864,237.5C 850.428,220.886 851.594,205.386 867.5,191C 872.227,188.715 876.893,186.548 881.5,184.5 Z"
        />
      </g>
      <g>
        <path
          fill="#ff9382"
          d="M 823.5,196.5 C 822.377,195.243 821.711,195.576 821.5,197.5C 820.596,196.791 820.263,195.791 820.5,194.5C 821.978,194.238 823.311,194.571 824.5,195.5C 824.376,196.107 824.043,196.44 823.5,196.5 Z"
        />
      </g>
      <g>
        <path
          fill="#ff958b"
          d="M 818.5,207.5 C 818.167,207.5 817.833,207.5 817.5,207.5C 817.158,206.662 816.492,206.328 815.5,206.5C 816.86,203.985 817.86,204.318 818.5,207.5 Z"
        />
      </g>
      <g>
        <path
          fill="#262629"
          d="M 397.5,214.5 C 398.043,214.56 398.376,214.893 398.5,215.5C 392.012,216.817 385.678,216.817 379.5,215.5C 385.409,214.545 391.409,214.211 397.5,214.5 Z"
        />
      </g>
      <g>
        <path
          fill="#2f2e31"
          d="M 763.5,215.5 C 758.05,216.795 751.384,216.795 743.5,215.5C 750.619,214.448 757.286,214.448 763.5,215.5 Z"
        />
      </g>
      <g>
        <path
          fill="#333333"
          d="M 135.5,239.5 C 136.473,241.948 136.806,244.615 136.5,247.5C 135.778,247.918 135.278,248.584 135,249.5C 134.192,245.973 134.359,242.64 135.5,239.5 Z"
        />
      </g>
      <g>
        <path
          fill="#363a43"
          d="M 199.5,271.5 C 199.389,272.117 199.056,272.617 198.5,273C 193.648,273.815 188.981,273.648 184.5,272.5C 189.527,272.497 194.527,272.164 199.5,271.5 Z"
        />
      </g>
      <g>
        <path
          fill={fill}
          d="M 511.5,384.5 C 510.5,384.5 509.5,384.5 508.5,384.5C 505.624,384.927 502.791,385.594 500,386.5C 498.251,386.252 497.418,385.252 497.5,383.5C 509.576,381.044 519.076,374.711 526,364.5C 532.502,354.665 531.335,345.832 522.5,338C 514.677,334.834 506.677,334.167 498.5,336C 493.787,338.743 489.12,341.409 484.5,344C 492.167,344.333 499.833,344.667 507.5,345C 514.534,348.918 516.7,354.752 514,362.5C 511.5,367.667 507.667,371.5 502.5,374C 494.28,376.57 485.946,377.57 477.5,377C 475.622,377.252 473.622,377.919 471.5,379C 473.349,380.093 475.016,381.426 476.5,383C 479.191,383.156 481.524,383.989 483.5,385.5C 481.139,385.674 478.806,386.007 476.5,386.5C 472.79,384.305 469.457,381.472 466.5,378C 456.346,377.978 446.179,378.145 436,378.5C 426.799,378.529 417.632,378.029 408.5,377C 403.749,374.208 401.915,370.041 403,364.5C 405.604,356.807 410.771,351.641 418.5,349C 419.517,347.951 419.684,346.784 419,345.5C 418,344.167 417,344.167 416,345.5C 411.85,341.594 406.85,339.261 401,338.5C 398.513,340.156 395.846,341.489 393,342.5C 375.544,344.043 367.878,336.043 370,318.5C 374.091,308.075 381.258,300.575 391.5,296C 396.776,294.518 402.11,293.351 407.5,292.5C 420.537,294.7 427.37,302.367 428,315.5C 431.942,317.07 435.775,318.903 439.5,321C 440.381,321.708 441.047,322.542 441.5,323.5C 442.15,323.196 442.817,322.863 443.5,322.5C 446.032,324.897 449.032,326.564 452.5,327.5C 453.038,325.236 452.704,322.903 451.5,320.5C 452.005,317.812 453.338,315.645 455.5,314C 464.401,309.727 473.734,305.727 483.5,302C 484.928,301.421 486.262,301.588 487.5,302.5C 487.815,299.269 487.982,295.936 488,292.5C 488.785,290.714 489.951,289.214 491.5,288C 491.167,287.667 490.833,287.333 490.5,287C 492.333,285.833 494.167,284.667 496,283.5C 496.671,284.252 497.504,284.586 498.5,284.5C 498.611,283.883 498.944,283.383 499.5,283C 516.875,281.078 531.875,286.078 544.5,298C 550.893,297.088 557.226,297.588 563.5,299.5C 564.554,299.32 565.554,298.987 566.5,298.5C 574.468,301.324 582.135,304.824 589.5,309C 596.869,315.105 598.202,322.105 593.5,330C 590.776,332.849 587.776,334.516 584.5,335C 578.917,335.191 573.417,335.691 568,336.5C 567.667,336.167 567.333,335.833 567,335.5C 559.741,343.762 551.575,350.929 542.5,357C 542.833,357.333 543.167,357.667 543.5,358C 540.899,358.92 538.232,359.587 535.5,360C 534.478,362.545 533.312,365.045 532,367.5C 525.908,374.095 519.074,379.762 511.5,384.5 Z M 441.5,323.5 C 441.916,325.752 443.249,327.252 445.5,328C 436.506,331.159 430.839,337.326 428.5,346.5C 421.767,344.335 415.767,341.502 410.5,338C 403.456,334.581 396.456,331.081 389.5,327.5C 387.041,324.429 387.041,321.262 389.5,318C 393.571,311.602 399.404,308.102 407,307.5C 417.145,312.102 426.978,317.268 436.5,323C 438.134,323.494 439.801,323.66 441.5,323.5 Z M 539.5,301.5 C 555.676,299.941 570.676,303.274 584.5,311.5C 588.014,315.03 590.347,319.197 591.5,324C 590.009,329.479 586.342,332.479 580.5,333C 577.773,333.818 575.106,333.652 572.5,332.5C 575.213,329.16 577.88,325.826 580.5,322.5C 579.656,319.322 577.989,316.655 575.5,314.5C 566.74,308.788 557.074,306.621 546.5,308C 541.67,311.334 537.337,315.167 533.5,319.5C 528.747,316.427 527.247,312.094 529,306.5C 532.147,303.841 535.647,302.174 539.5,301.5 Z M 399.5,298.5 C 405.176,298.334 410.843,298.501 416.5,299C 421.649,301.508 423.982,305.342 423.5,310.5C 419.396,310.116 415.729,308.616 412.5,306C 407.5,305.333 402.5,305.333 397.5,306C 393.341,309.159 389.508,312.659 386,316.5C 384.097,320.681 384.264,325.014 386.5,329.5C 390.765,332.146 395.098,334.646 399.5,337C 395.39,337.325 391.39,338.158 387.5,339.5C 379.686,339.011 375.02,335.011 373.5,327.5C 374.564,317.874 378.897,310.041 386.5,304C 390.923,302.115 395.256,300.281 399.5,298.5 Z M 487.5,302.5 C 493.259,301.894 498.592,300.061 503.5,297C 512.363,295.106 520.029,297.273 526.5,303.5C 524.719,307.626 524.052,311.959 524.5,316.5C 515.119,319.681 505.953,323.348 497,327.5C 496.667,327.167 496.333,326.833 496,326.5C 492.731,327.801 489.731,329.467 487,331.5C 483.171,321.51 476.004,315.177 465.5,312.5C 471.242,309.727 477.242,307.561 483.5,306C 485.093,305.051 486.426,303.885 487.5,302.5 Z M 498.5,284.5 C 512.736,284.186 525.069,288.686 535.5,298C 534.295,299.538 532.795,300.705 531,301.5C 527.317,299.493 523.651,297.493 520,295.5C 519.667,295.833 519.333,296.167 519,296.5C 515.042,292.643 510.375,291.643 505,293.5C 503.779,294.272 502.779,295.272 502,296.5C 501.439,295.978 500.772,295.645 500,295.5C 491.04,300.863 488.707,298.863 493,289.5C 495.029,287.967 496.862,286.301 498.5,284.5 Z M 551.5,310.5 C 560.348,310.373 568.181,313.04 575,318.5C 575.638,319.609 576.138,320.775 576.5,322C 573.061,326.278 569.395,330.445 565.5,334.5C 559.515,339.482 553.515,344.482 547.5,349.5C 546.008,347.844 544.342,346.344 542.5,345C 535.699,342.101 529.365,338.434 523.5,334C 529.651,326.903 536.318,320.237 543.5,314C 546.051,312.325 548.717,311.159 551.5,310.5 Z M 458.5,317.5 C 465.698,317.176 471.864,319.509 477,324.5C 479.441,329.608 477.774,332.275 472,332.5C 465.119,331.947 460.119,328.614 457,322.5C 456.387,320.505 456.887,318.838 458.5,317.5 Z M 523.5,319.5 C 528.982,319.124 530.148,320.791 527,324.5C 524.263,323.44 521.43,322.606 518.5,322C 520.653,321.901 522.319,321.067 523.5,319.5 Z M 495.5,334.5 C 489.563,336.594 484.23,339.76 479.5,344C 472.98,345.01 466.48,345.843 460,346.5C 459.308,345.975 458.808,345.308 458.5,344.5C 459.865,341.295 460.865,337.961 461.5,334.5C 466.21,337.095 471.21,338.262 476.5,338C 488.864,333.629 501.03,328.796 513,323.5C 516.675,325.392 520.509,326.892 524.5,328C 523.005,329.161 521.505,330.327 520,331.5C 514.267,331.518 508.434,331.684 502.5,332C 500.073,332.902 497.74,333.736 495.5,334.5 Z M 445.5,333.5 C 451.792,331.984 454.958,334.317 455,340.5C 453.235,343.473 450.735,345.64 447.5,347C 443.625,347.365 439.959,347.365 436.5,347C 435.203,344.455 435.369,341.955 437,339.5C 439.322,336.605 442.155,334.605 445.5,333.5 Z M 497.5,383.5 C 493.134,385.371 488.467,386.038 483.5,385.5C 481.524,383.989 479.191,383.156 476.5,383C 475.016,381.426 473.349,380.093 471.5,379C 473.622,377.919 475.622,377.252 477.5,377C 485.946,377.57 494.28,376.57 502.5,374C 507.667,371.5 511.5,367.667 514,362.5C 516.7,354.752 514.534,348.918 507.5,345C 499.833,344.667 492.167,344.333 484.5,344C 489.12,341.409 493.787,338.743 498.5,336C 506.677,334.167 514.677,334.834 522.5,338C 531.335,345.832 532.502,354.665 526,364.5C 519.076,374.711 509.576,381.044 497.5,383.5 Z M 460.5,347.5 C 476.1,347.454 491.767,347.621 507.5,348C 512.74,354.135 512.74,360.302 507.5,366.5C 504.005,369.751 500.005,372.251 495.5,374C 473.637,374.445 451.637,374.278 429.5,373.5C 437.724,369.318 440.891,362.651 439,353.5C 438.535,352.069 437.701,350.903 436.5,350C 444.496,349.541 452.496,348.708 460.5,347.5 Z M 537.5,348.5 C 539.476,349.427 539.809,350.76 538.5,352.5C 536.3,351.675 535.966,350.342 537.5,348.5 Z M 420.5,351.5 C 424.747,351.194 428.747,351.861 432.5,353.5C 433.536,365.057 428.203,371.391 416.5,372.5C 410.097,372.605 407.597,369.605 409,363.5C 410.984,357.684 414.817,353.684 420.5,351.5 Z"
        />
      </g>
    </svg>
  );
}
