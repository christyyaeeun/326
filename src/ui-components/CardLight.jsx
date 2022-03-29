/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function CardLight(props) {
  const { post, overrides, ...rest } = props;
  return (
    <View
      width="360px"
      height="396px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CardLight")}
    >
      <Flex
        gap="10px"
        position="absolute"
        top="363px"
        left="33px"
        direction="column"
        padding="3px 3px 3px 3px"
        {...getOverrideProps(overrides, "Frame 372")}
      >
        <View
          width="288px"
          height="27px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 1829")}
        >
          <Text
            fontFamily="Inconsolata"
            fontSize="12px"
            fontWeight="600"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="right"
            display="flex"
            direction="column"
            justifyContent="center"
            letterSpacing="0.33px"
            width="288px"
            position="absolute"
            top="3px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={post?.createdAt}
            {...getOverrideProps(overrides, "03/14/2022")}
          ></Text>
        </View>
      </Flex>
      <View
        padding="0px 0px 0px 0px"
        width="288px"
        height="345px"
        position="absolute"
        top="16px"
        left="36px"
        {...getOverrideProps(overrides, "Group 371")}
      >
        <View
          width="288px"
          height="27px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 1828")}
        >
          <Text
            fontFamily="Inconsolata"
            fontSize="16px"
            fontWeight="600"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            letterSpacing="0.49px"
            width="288px"
            position="absolute"
            top="3px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={post?.name}
            {...getOverrideProps(overrides, "TITLE")}
          ></Text>
        </View>
        <Flex
          gap="10px"
          position="absolute"
          top="291px"
          left="0px"
          direction="row"
          width="288px"
          height="54px"
          alignItems="flex-start"
          padding="3px 3px 3px 3px"
          {...getOverrideProps(overrides, "Frame 1831")}
        >
          <Text
            fontFamily="Inconsolata"
            fontSize="14px"
            fontWeight="600"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.41px"
            width="282px"
            height="48px"
            grow="1"
            basis="282px"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={post?.description}
            {...getOverrideProps(overrides, "Preview of user post")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          position="absolute"
          top="27px"
          left="0px"
          direction="column"
          width="288px"
          height="264px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 1830")}
        >
          <Image
            height="264px"
            grow="1"
            basis="264px"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            src={post?.image}
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
      </View>
    </View>
  );
}
