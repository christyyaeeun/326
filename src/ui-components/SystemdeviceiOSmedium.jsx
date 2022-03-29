/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function SystemdeviceiOSmedium(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="375px"
      height="812px"
      overflow="hidden"
      position="relative"
      boxShadow="0px 25px 43px rgba(0, 0, 0, 0.11999999731779099)"
      borderRadius="30px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(241,241,241,1)"
      opacity="0.800000011920929"
      {...rest}
      {...getOverrideProps(overrides, "SystemdeviceiOSmedium")}
    >
      <Text
        fontFamily="Open Sans"
        fontSize="35px"
        fontWeight="700"
        color="rgba(150,154,165,1)"
        lineHeight="35px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="169px"
        height="80px"
        position="absolute"
        top="112px"
        left="31px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Our Lives Together"
        {...getOverrideProps(overrides, "Our Lives Together")}
      ></Text>
      <Icon
        width="411px"
        height="386px"
        viewBox={{ minX: 0, minY: 0, width: 411, height: 386 }}
        paths={[
          {
            d: "M0 12C0 5.37257 5.37258 0 12 0L399 0C405.627 0 411 5.37258 411 12L411 374C411 380.627 405.627 386 399 386L12 386C5.37259 386 0 380.627 0 374L0 12Z",
            fill: "rgba(188,193,207,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="398px"
        left="-17px"
        {...getOverrideProps(overrides, "Rectangle 79")}
      ></Icon>
      <View
        height="34px"
        position="absolute"
        bottom="0px"
        left="0px"
        right="0px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "system/ios/HomeIndicator")}
      ></View>
      <Icon
        width="345px"
        height="437px"
        viewBox={{ minX: 0, minY: 0, width: 345, height: 437 }}
        paths={[
          {
            d: "M0 20C0 8.95431 8.95431 0 20 0L325 0C336.046 0 345 8.95431 345 20L345 417C345 428.046 336.046 437 325 437L20 437C8.9543 437 0 428.046 0 417L0 20Z",
            fill: "rgba(250,250,250,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="227px"
        left="15px"
        {...getOverrideProps(overrides, "Rectangle 80")}
      ></Icon>
    </View>
  );
}
