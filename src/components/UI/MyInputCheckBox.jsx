import * as React from "react";
import {styled} from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import {PRIME_COLOR} from "../../const";

const BpIcon = styled("span")(() => ({
    borderRadius: 2,
    width: 20,
    height: 20,
    boxShadow: "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    ".Mui-focusVisible &": {
        outline: "2px auto rgba(19,124,189,.6)",
        outlineOffset: 2
    },
    "input:hover ~ &": {
        borderColor: "#ebf1f5"
    },
    "input:disabled ~ &": {

        background: "unset",
        boxShadow: "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    }
}));

const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: PRIME_COLOR,
    boxShadow: "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",

    backgroundImage:
        "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
        display: "block",
        width: 20,
        height: 20,
        backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""'
    },
    "input:hover ~ &": {
        backgroundColor: PRIME_COLOR
    }

});

// Inspired by blueprintjs
function BpCheckbox(props) {
    return (
        <Checkbox
            checkedIcon={<BpCheckedIcon/>}
            icon={<BpIcon/>}
            {...props}
        />
    );
}

export default function CustomizedCheckbox({...props}) {
    return (
        <BpCheckbox {...props}/>
    );
}
