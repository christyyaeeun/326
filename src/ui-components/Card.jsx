/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Card(props) {
  const { post, overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="343px"
      alignItems="stretch"
      position="relative"
      border="1px SOLID rgba(226,232,240,1)"
      borderRadius="8px"
      padding="15px 15px 15px 15px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Card")}
    >
      <View
        height="160px"
        shrink="0"
        alignSelf="stretch"
        objectFit={post?.image}
        position="relative"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(237,242,247,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Flex
        gap="4px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 2")}
      >
        <Text
          fontFamily="Inter"
          fontSize="17px"
          fontWeight="700"
          color="rgba(74,85,104,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={post?.name}
          {...getOverrideProps(overrides, "Button textmre")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(113,128,150,1)"
          lineHeight="22px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={post?.description}
          {...getOverrideProps(overrides, "Button textzuc")}
        ></Text>
      </Flex>
      <Flex
        gap="8px"
        direction="row"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 3")}
      >
        <Flex
          gap="0"
          direction="column"
          shrink="0"
          height="40px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "button/wrap/alz")}
        ></Flex>
        <Flex
          gap="0"
          direction="column"
          shrink="0"
          height="40px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "button/wrap/glv")}
        ></Flex>
      </Flex>
    </Flex>
  );
}
