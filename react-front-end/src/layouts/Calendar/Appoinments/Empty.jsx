import React from "react";
// import sdf from "./images/add.png"
export default function Empty(props) {
  return (
    <main className="appointment__add">
      <svg
        className="appointment__add-button"
        onClick={props.onAdd}
        id="Layer_1"
        enable-background="new 0 0 512 512"
        height="512"
        viewBox="0 0 512 512"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <g id="XMLID_312_">
            <g>
              <g id="XMLID_1069_">
                <g id="XMLID_1070_">
                  <g id="XMLID_1071_">
                    <g id="XMLID_1072_">
                      <g id="XMLID_1073_">
                        <g id="XMLID_1074_">
                          <g id="XMLID_1075_">
                            <g id="XMLID_1076_">
                              <g id="XMLID_1077_">
                                <g id="XMLID_1078_">
                                  <g id="XMLID_1079_">
                                    <g id="XMLID_1080_">
                                      <g id="XMLID_1081_">
                                        <g id="XMLID_1082_">
                                          <circle
                                            cx="256"
                                            cy="256"
                                            fill="#776d6b"
                                            r="256"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
          <path
            d="m512 256c0-4.545-.123-9.061-.357-13.548l-118.221-118.221-269.191 269.191 118.221 118.221c4.487.234 9.003.357 13.548.357 141.385 0 256-114.615 256-256z"
            fill="#57555c"
          />
          <g>
            <circle cx="256" cy="256" fill="#5eefee" r="190.395" />
            <path
              d="m446.39 256c0 105.15-85.24 190.39-190.39 190.39v-380.78c105.15 0 190.39 85.24 190.39 190.39z"
              fill="#54c9fc"
            />
            <path
              d="m360.463 225.816h-74.279v-74.279h-60.368v74.279h-74.279v60.368h74.279v74.279h60.368v-74.279h74.279z"
              fill="#fff"
            />
            <path
              d="m286.184 286.184h74.279v-60.368h-74.279v-74.279h-30.184v208.926h30.184z"
              fill="#eae1dc"
            />
          </g>
        </g>
      </svg>
    </main>
  );
}
