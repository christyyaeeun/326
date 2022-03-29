/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, TextField } from "@aws-amplify/ui-react";
export default function CardColorBurn(props) {
  const { post, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="360px"
      height="396px"
      justifyContent="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CardColorBurn")}
    >
      <Image
        height="160px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        src={post?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="16px"
        direction="column"
        height="236px"
        grow="1"
        basis="236px"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          height="164px"
          grow="1"
          basis="164px"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          {...getOverrideProps(overrides, "Group 370")}
        >
          <TextField
            display="flex"
            gap="4px"
            position="absolute"
            top="0px"
            left="0px"
            direction="column"
            width="328px"
            height="36px"
            padding="0px 0px 0px 0px"
            size="default"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            isMultiline={false}
            label={post?.name}
            {...getOverrideProps(overrides, "TextFieldrhw")}
          ></TextField>
          <TextField
            display="flex"
            gap="4px"
            position="absolute"
            top="52px"
            left="0px"
            direction="column"
            width="328px"
            height="112px"
            padding="0px 0px 0px 0px"
            size="large"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            isMultiline={true}
            label={post?.description}
            {...getOverrideProps(overrides, "TextFieldauj")}
          ></TextField>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="10px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={post?.createdAt}
          {...getOverrideProps(overrides, "date created")}
        ></Text>
      </Flex>
    </Flex>
  );
}
