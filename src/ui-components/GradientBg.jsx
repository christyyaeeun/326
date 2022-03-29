/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function GradientBg(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="404px"
      height="812px"
      overflow="hidden"
      position="relative"
      borderRadius="30px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "GradientBg")}
    >
      <View
        width="487px"
        height="948px"
        position="absolute"
        top="-42px"
        left="-52px"
        borderRadius="20.80428695678711px"
        padding="0px 0px 0px 0px"
        backgroundImage="linear-gradient(-90deg, rgba(192,207,245,1), rgba(214,159,233,0))"
        {...getOverrideProps(overrides, "Rectangle 19")}
      ></View>
    </View>
  );
}
